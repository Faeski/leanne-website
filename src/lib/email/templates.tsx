/**
 * Email Templates
 * React components for Resend email templates
 */

import * as React from "react";
import { emailContent } from "@/content/quiz";
import type { PrimaryGoal, TreatmentRecommendation } from "@/lib/quiz/types";

// Shared styles as inline CSS for email compatibility
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
  },
  header: {
    borderBottom: "2px solid #8B7355",
    paddingBottom: "20px",
    marginBottom: "30px",
  },
  brandName: {
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#8B7355",
    letterSpacing: "2px",
    margin: "0",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold" as const,
    color: "#1a1a1a",
    margin: "20px 0 10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#333333",
    margin: "15px 0",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#8B7355",
    color: "#ffffff",
    padding: "14px 28px",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold" as const,
    fontSize: "16px",
    margin: "20px 0",
  },
  tipBox: {
    backgroundColor: "#f7f5f2",
    padding: "20px",
    borderRadius: "8px",
    margin: "20px 0",
  },
  tipTitle: {
    fontSize: "14px",
    fontWeight: "bold" as const,
    color: "#8B7355",
    margin: "0 0 10px",
  },
  tipText: {
    fontSize: "14px",
    color: "#333333",
    margin: "8px 0",
    paddingLeft: "15px",
  },
  benefitList: {
    listStyle: "none",
    padding: "0",
    margin: "15px 0",
  },
  benefitItem: {
    fontSize: "14px",
    color: "#333333",
    padding: "8px 0",
    paddingLeft: "25px",
    position: "relative" as const,
  },
  footer: {
    borderTop: "1px solid #e5e5e5",
    marginTop: "40px",
    paddingTop: "20px",
    textAlign: "center" as const,
  },
  footerText: {
    fontSize: "12px",
    color: "#888888",
    margin: "5px 0",
  },
  unsubscribe: {
    fontSize: "11px",
    color: "#888888",
    textDecoration: "underline",
  },
};

interface EmailFooterProps {
  unsubscribeUrl: string;
}

function EmailFooter({ unsubscribeUrl }: EmailFooterProps) {
  return (
    <div style={styles.footer}>
      <p style={styles.footerText}>{emailContent.footer.address}</p>
      <p style={styles.footerText}>
        <a href={unsubscribeUrl} style={styles.unsubscribe}>
          {emailContent.footer.unsubscribeText}
        </a>
      </p>
    </div>
  );
}

// ============================================================================
// Email 1: PDF Delivery (Immediate)
// ============================================================================

interface PDFDeliveryEmailProps {
  firstName: string | null;
  bookingUrl: string;
  unsubscribeUrl: string;
}

export function PDFDeliveryEmail({
  firstName,
  bookingUrl,
  unsubscribeUrl,
}: PDFDeliveryEmailProps) {
  const content = emailContent.pdfDelivery;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.brandName}>INSTITUUT LEANNE</p>
      </div>

      <p style={styles.text}>{content.greeting(firstName)}</p>
      <p style={styles.text}>{content.intro}</p>
      <p style={styles.text}>{content.ctaText}</p>

      <a href={bookingUrl} style={styles.button}>
        {content.ctaButton}
      </a>

      <p style={styles.text}>
        {content.closing}
        <br />
        {content.signature}
      </p>

      <EmailFooter unsubscribeUrl={unsubscribeUrl} />
    </div>
  );
}

// ============================================================================
// Email 2: Value Email with Tips (Day 3)
// ============================================================================

interface ValueEmailProps {
  firstName: string | null;
  primaryGoal: PrimaryGoal;
  unsubscribeUrl: string;
}

export function ValueEmail({
  firstName,
  primaryGoal,
  unsubscribeUrl,
}: ValueEmailProps) {
  const content = emailContent.valueEmail;
  const tips = content.tips[primaryGoal];
  const subject = `${content.subjectPrefix}${content.subjectGoals[primaryGoal]}`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.brandName}>INSTITUUT LEANNE</p>
      </div>

      <p style={styles.text}>{content.greeting(firstName)}</p>
      <p style={styles.text}>{content.intro}</p>

      <div style={styles.tipBox}>
        {tips.map((tip, index) => (
          <div key={index}>
            <p style={styles.tipTitle}>
              {content.tipIntro.replace("{number}", String(index + 1))}
            </p>
            <p style={styles.tipText}>{tip}</p>
          </div>
        ))}
      </div>

      <p style={styles.text}>{content.closing}</p>
      <p style={styles.text}>{content.signature}</p>

      <EmailFooter unsubscribeUrl={unsubscribeUrl} />
    </div>
  );
}

// Helper to get the value email subject
export function getValueEmailSubject(primaryGoal: PrimaryGoal): string {
  const content = emailContent.valueEmail;
  return `${content.subjectPrefix}${content.subjectGoals[primaryGoal]}`;
}

// ============================================================================
// Email 3: Soft CTA Email (Day 7)
// ============================================================================

interface CTAEmailProps {
  firstName: string | null;
  bookingUrl: string;
  unsubscribeUrl: string;
}

export function CTAEmail({
  firstName,
  bookingUrl,
  unsubscribeUrl,
}: CTAEmailProps) {
  const content = emailContent.ctaEmail;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.brandName}>INSTITUUT LEANNE</p>
      </div>

      <p style={styles.text}>{content.greeting(firstName)}</p>
      <p style={styles.text}>{content.intro}</p>
      <p style={{ ...styles.text, fontWeight: "bold" }}>{content.offerTitle}</p>

      <ul style={styles.benefitList}>
        {content.benefits.map((benefit, index) => (
          <li key={index} style={styles.benefitItem}>
            ✓ {benefit}
          </li>
        ))}
      </ul>

      <a href={bookingUrl} style={styles.button}>
        {content.ctaButton}
      </a>

      <p style={styles.text}>
        {content.closing}
        <br />
        {content.signature}
      </p>

      <p style={{ ...styles.text, fontSize: "14px", color: "#666666" }}>
        {content.ps}
      </p>

      <EmailFooter unsubscribeUrl={unsubscribeUrl} />
    </div>
  );
}

// ============================================================================
// Render helpers for Resend
// ============================================================================

export function renderPDFDeliveryEmail(props: PDFDeliveryEmailProps): React.ReactElement {
  return <PDFDeliveryEmail {...props} />;
}

export function renderValueEmail(props: ValueEmailProps): React.ReactElement {
  return <ValueEmail {...props} />;
}

export function renderCTAEmail(props: CTAEmailProps): React.ReactElement {
  return <CTAEmail {...props} />;
}
