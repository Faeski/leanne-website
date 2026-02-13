/**
 * Resend Email Client
 * Configuration for sending transactional emails
 */

import { Resend } from "resend";

// Initialize Resend client lazily to avoid build errors
let resendInstance: Resend | null = null;

export function getResendClient(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

// Legacy export for backward compatibility (throws at runtime if unconfigured)
export const resend = {
  emails: {
    send: async (params: Parameters<Resend["emails"]["send"]>[0]) => {
      return getResendClient().emails.send(params);
    },
  },
};

// Email configuration
export const EMAIL_CONFIG = {
  from: "Instituut Leanne <huidadvies@instituutleanne.be>",
  replyTo: "info@instituutleanne.be",
} as const;

// Generate unsubscribe URL
export function getUnsubscribeUrl(token: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instituutleanne.be";
  return `${baseUrl}/api/unsubscribe?token=${token}`;
}

// Generate booking URL
export function getBookingUrl(): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://instituutleanne.be";
  return `${baseUrl}/huidanalyse`;
}
