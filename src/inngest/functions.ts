/**
 * Inngest Functions
 * Background jobs for quiz email sequence
 */

import { inngest } from "./client";
import { supabaseAdmin } from "@/lib/supabase/server";
import { resend, EMAIL_CONFIG, getUnsubscribeUrl, getBookingUrl } from "@/lib/email/client";
import { renderToBuffer } from "@react-pdf/renderer";
import { QuizPDFTemplate } from "@/components/pdf/QuizPDFTemplate";
import { getQuizResults } from "@/lib/quiz/recommendations";
import {
  renderPDFDeliveryEmail,
  renderValueEmail,
  renderCTAEmail,
  getValueEmailSubject,
} from "@/lib/email/templates";
import { emailContent } from "@/content/quiz";
import type { PrimaryGoal } from "@/lib/quiz/types";

/**
 * Quiz Completed Handler
 * Sends immediate PDF email and schedules nurture sequence
 */
export const quizCompletedHandler = inngest.createFunction(
  {
    id: "quiz-completed",
    name: "Quiz Completed - Send PDF Email",
    retries: 3,
  },
  { event: "quiz/completed" },
  async ({ event, step }) => {
    const { sessionId, email, firstName, primaryGoal, unsubscribeToken } = event.data;

    // Step 1: Generate PDF
    const pdfBuffer = await step.run("generate-pdf", async () => {
      // Fetch full session data
      const { data: session } = await supabaseAdmin
        .from("quiz_sessions")
        .select("*")
        .eq("id", sessionId)
        .single();

      if (!session) {
        throw new Error("Session not found");
      }

      const results = getQuizResults({
        primaryGoal: session.primary_goal as PrimaryGoal,
        lifestyleFactors: session.lifestyle_factors || [],
        location: session.location,
      });

      const buffer = await renderToBuffer(
        QuizPDFTemplate({
          results,
          firstName: session.first_name,
          primaryGoal: session.primary_goal as PrimaryGoal,
        })
      );

      return Buffer.from(buffer).toString("base64");
    });

    // Step 2: Send PDF email
    await step.run("send-pdf-email", async () => {
      const unsubscribeUrl = getUnsubscribeUrl(unsubscribeToken);
      const bookingUrl = getBookingUrl();

      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        replyTo: EMAIL_CONFIG.replyTo,
        to: email,
        subject: emailContent.pdfDelivery.subject,
        react: renderPDFDeliveryEmail({
          firstName,
          bookingUrl,
          unsubscribeUrl,
        }),
        attachments: [
          {
            filename: "huid-advies-paspoort.pdf",
            content: pdfBuffer,
          },
        ],
      });

      // Update database
      await supabaseAdmin
        .from("quiz_sessions")
        .update({
          pdf_sent: true,
          pdf_sent_at: new Date().toISOString(),
        })
        .eq("id", sessionId);
    });

    // Step 3: Schedule nurture email 1 (Day 3)
    await step.sleep("wait-for-day-3", "3 days");

    // Check if still subscribed before sending
    const shouldSendDay3 = await step.run("check-subscription-day-3", async () => {
      const { data: session } = await supabaseAdmin
        .from("quiz_sessions")
        .select("email_consent")
        .eq("id", sessionId)
        .single();

      return session?.email_consent === true;
    });

    if (shouldSendDay3) {
      await step.run("send-value-email", async () => {
        const unsubscribeUrl = getUnsubscribeUrl(unsubscribeToken);

        await resend.emails.send({
          from: EMAIL_CONFIG.from,
          replyTo: EMAIL_CONFIG.replyTo,
          to: email,
          subject: getValueEmailSubject(primaryGoal as PrimaryGoal),
          react: renderValueEmail({
            firstName,
            primaryGoal: primaryGoal as PrimaryGoal,
            unsubscribeUrl,
          }),
        });
      });
    }

    // Step 4: Schedule nurture email 2 (Day 7)
    await step.sleep("wait-for-day-7", "4 days"); // 4 more days after day 3

    const shouldSendDay7 = await step.run("check-subscription-day-7", async () => {
      const { data: session } = await supabaseAdmin
        .from("quiz_sessions")
        .select("email_consent")
        .eq("id", sessionId)
        .single();

      return session?.email_consent === true;
    });

    if (shouldSendDay7) {
      await step.run("send-cta-email", async () => {
        const unsubscribeUrl = getUnsubscribeUrl(unsubscribeToken);
        const bookingUrl = getBookingUrl();

        await resend.emails.send({
          from: EMAIL_CONFIG.from,
          replyTo: EMAIL_CONFIG.replyTo,
          to: email,
          subject: emailContent.ctaEmail.subject,
          react: renderCTAEmail({
            firstName,
            bookingUrl,
            unsubscribeUrl,
          }),
        });

        // Mark nurture sequence as completed
        await supabaseAdmin
          .from("quiz_sessions")
          .update({ nurture_sequence_started: true })
          .eq("id", sessionId);
      });
    }

    return { success: true, sessionId };
  }
);

// Export all functions for the Inngest serve handler
export const functions = [quizCompletedHandler];
