import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";
import { getQuizResults } from "@/lib/quiz/recommendations";
import { inngest } from "@/inngest/client";
import type { CompleteQuizRequest } from "@/lib/quiz/types";

/**
 * POST /api/quiz/complete
 * Marks quiz as complete, stores email, triggers PDF and email delivery
 */
export async function POST(request: NextRequest) {
  try {
    const body: CompleteQuizRequest = await request.json();
    const { sessionId, email, firstName, consent } = body;

    // Validate required fields
    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Get client IP for consent recording
    const consentIp =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Fetch current session to get answers
    const { data: session, error: fetchError } = await supabaseAdmin
      .from("quiz_sessions")
      .select("*")
      .eq("id", sessionId)
      .single();

    if (fetchError || !session) {
      console.error("Session not found:", fetchError);
      return NextResponse.json(
        { error: "Quiz session not found" },
        { status: 404 }
      );
    }

    // Check if already completed
    if (session.completed_at) {
      // Return existing results
      const results = getQuizResults({
        primaryGoal: session.primary_goal,
        lifestyleFactors: session.lifestyle_factors || [],
        location: session.location,
      });
      return NextResponse.json({ success: true, results });
    }

    // Update session with email and mark complete
    const now = new Date().toISOString();
    const { error: updateError } = await supabaseAdmin
      .from("quiz_sessions")
      .update({
        email: email.toLowerCase().trim(),
        first_name: firstName?.trim() || null,
        email_consent: consent,
        consent_timestamp: now,
        consent_ip: consentIp,
        completed_at: now,
      })
      .eq("id", sessionId);

    if (updateError) {
      console.error("Failed to complete quiz:", updateError);
      return NextResponse.json(
        { error: "Failed to complete quiz" },
        { status: 500 }
      );
    }

    // Generate results
    const results = getQuizResults({
      primaryGoal: session.primary_goal,
      lifestyleFactors: session.lifestyle_factors || [],
      location: session.location,
    });

    // Trigger email sequence via Inngest (non-blocking)
    try {
      await inngest.send({
        name: "quiz/completed",
        data: {
          sessionId,
          email: email.toLowerCase().trim(),
          firstName: firstName?.trim() || null,
          primaryGoal: session.primary_goal,
          unsubscribeToken: session.unsubscribe_token,
        },
      });
    } catch (inngestError) {
      // Log but don't fail the request - email can be retried
      console.error("Failed to trigger email sequence:", inngestError);
    }

    return NextResponse.json({ success: true, results });
  } catch (error) {
    console.error("Quiz complete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
