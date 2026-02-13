"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { resultsContent } from "@/content/quiz";
import type { QuizResults as QuizResultsType } from "@/lib/quiz/types";

interface QuizResultsProps {
  results: QuizResultsType;
  sessionId: string;
  firstName: string | null;
}

/**
 * QuizResults Component
 * Displays personalized results with PDF download
 */
export function QuizResults({
  results,
  sessionId,
  firstName,
}: QuizResultsProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/quiz/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error("PDF generation failed");
      }

      // Download the PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "huid-advies-paspoort.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Track download event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "quiz_pdf_downloaded", {
          quiz_name: "skin_code",
        });
      }
    } catch (error) {
      console.error("PDF download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="text-center">
      {/* Success header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-8"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-display-sm font-semibold text-neutral-900">
          {firstName
            ? `${resultsContent.title}, ${firstName}!`
            : resultsContent.title}
        </h2>
      </motion.div>

      {/* Goal description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <p className="text-lg text-neutral-600">{results.goalDescription}</p>
      </motion.div>

      {/* Primary recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 rounded-xl border border-primary-200 bg-primary-50 p-6 text-left"
      >
        <h3 className="mb-2 font-semibold text-primary-900">
          Onze aanbeveling
        </h3>
        <p className="text-xl font-medium text-primary-800">
          {results.treatment.name}
        </p>
        <p className="mt-2 text-primary-700">{results.treatment.description}</p>
        <Link
          href={results.treatment.route}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Meer informatie
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </motion.div>

      {/* Lifestyle tips */}
      {results.tips.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-left"
        >
          <h3 className="mb-4 font-semibold text-neutral-900">
            Tips voor jou
          </h3>
          <ul className="space-y-2">
            {results.tips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-neutral-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Travel info for NL visitors */}
      {results.includesTravelInfo && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-8 rounded-lg border border-blue-200 bg-blue-50 p-4 text-left"
        >
          <p className="text-sm text-blue-800">
            <strong>Vanuit Maastricht:</strong> Instituut Leanne ligt op
            slechts 10 minuten rijden. Via de A2 richting Luik, afslag Lanaken.
            Gratis parkeren voor de deur.
          </p>
        </motion.div>
      )}

      {/* PDF Download button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6"
      >
        <button
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className={cn(
            "w-full rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors",
            "hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {isDownloading ? (
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
              {resultsContent.downloadingText}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {resultsContent.downloadButtonText}
            </span>
          )}
        </button>
      </motion.div>

      {/* CTA for booking */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-xl border border-neutral-200 bg-white p-6"
      >
        <h3 className="mb-2 font-semibold text-neutral-900">
          {resultsContent.ctaTitle}
        </h3>
        <p className="mb-4 text-neutral-600">{resultsContent.ctaText}</p>
        <Link
          href={ROUTES.HUIDANALYSE}
          className={cn(
            "inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-2.5 font-medium text-white transition-colors",
            "hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          )}
        >
          {resultsContent.ctaButtonText}
        </Link>
      </motion.div>
    </div>
  );
}

// Add gtag type for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}
