"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { startScreenContent } from "@/content/quiz";

interface QuizStartProps {
  onStart: () => void;
  isLoading?: boolean;
}

/**
 * QuizStart Component
 * Initial screen before quiz begins
 */
export function QuizStart({ onStart, isLoading = false }: QuizStartProps) {
  return (
    <div className="text-center">
      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100"
      >
        <svg
          className="h-10 w-10 text-primary-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-display-md font-semibold text-neutral-900"
      >
        {startScreenContent.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-4 max-w-md text-lg text-neutral-600"
      >
        {startScreenContent.subtitle}
      </motion.p>

      {/* Start button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <button
          onClick={onStart}
          disabled={isLoading}
          className={cn(
            "rounded-full bg-primary-600 px-8 py-4 text-lg font-medium text-white transition-all",
            "hover:bg-primary-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
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
            startScreenContent.startButton
          )}
        </button>
      </motion.div>

      {/* Duration hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-sm text-neutral-500"
      >
        {startScreenContent.duration}
      </motion.p>
    </div>
  );
}
