"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { emailCaptureContent } from "@/content/quiz";

interface QuizEmailCaptureProps {
  onSubmit: (email: string, firstName: string | null, consent: boolean) => void;
  isLoading?: boolean;
  error?: string | null;
}

/**
 * QuizEmailCapture Component
 * Email form with GDPR consent for quiz results
 */
export function QuizEmailCapture({
  onSubmit,
  isLoading = false,
  error = null,
}: QuizEmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    // Validate email
    if (!email || !email.includes("@")) {
      setLocalError("Vul een geldig e-mailadres in.");
      return;
    }

    // Validate consent
    if (!consent) {
      setLocalError("Je moet akkoord gaan om verder te gaan.");
      return;
    }

    onSubmit(email.trim(), firstName.trim() || null, consent);
  };

  const displayError = error || localError;

  return (
    <div className="text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-display-sm font-semibold text-neutral-900"
      >
        {emailCaptureContent.title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-2 text-neutral-600"
      >
        {emailCaptureContent.subtitle}
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-md space-y-4"
      >
        {/* Email input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailCaptureContent.emailPlaceholder}
            className={cn(
              "w-full rounded-lg border px-4 py-3 text-neutral-900 placeholder:text-neutral-400",
              "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
              displayError ? "border-red-300" : "border-neutral-200"
            )}
            required
            autoComplete="email"
          />
        </div>

        {/* First name input (optional) */}
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={emailCaptureContent.firstNamePlaceholder}
            className={cn(
              "w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-900 placeholder:text-neutral-400",
              "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            )}
            autoComplete="given-name"
          />
        </div>

        {/* Consent checkbox */}
        <div className="flex items-start gap-3 text-left">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className={cn(
              "mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600",
              "focus:ring-2 focus:ring-primary-500/20"
            )}
          />
          <label htmlFor="consent" className="text-sm text-neutral-600">
            {emailCaptureContent.consentText}
          </label>
        </div>

        {/* Error message */}
        {displayError && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
          >
            {displayError}
          </motion.p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors",
            "hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Even geduld...
            </span>
          ) : (
            emailCaptureContent.submitButton
          )}
        </button>

        {/* Privacy note */}
        <p className="text-sm text-neutral-500">
          {emailCaptureContent.privacyNote}{" "}
          <Link
            href={ROUTES.PRIVACY}
            className="text-primary-600 underline hover:text-primary-700"
          >
            {emailCaptureContent.privacyLinkText}
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
