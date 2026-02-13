"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizOptionProps<T extends string> {
  value: T;
  label: string;
  description?: string;
  selected: boolean;
  onSelect: (value: T) => void;
  multiSelect?: boolean;
}

/**
 * QuizOption Component
 * Selectable card for quiz answers
 */
export function QuizOption<T extends string>({
  value,
  label,
  description,
  selected,
  onSelect,
  multiSelect = false,
}: QuizOptionProps<T>) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(value)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "w-full rounded-xl border-2 p-4 text-left transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        selected
          ? "border-primary-500 bg-primary-50"
          : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
      )}
      aria-pressed={selected}
    >
      <div className="flex items-start gap-3">
        {/* Selection indicator */}
        <div
          className={cn(
            "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors",
            multiSelect ? "rounded" : "rounded-full",
            selected
              ? "border-primary-500 bg-primary-500"
              : "border-neutral-300 bg-white"
          )}
        >
          {selected && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          )}
        </div>

        {/* Text content */}
        <div className="flex-1">
          <span
            className={cn(
              "block font-medium",
              selected ? "text-primary-900" : "text-neutral-900"
            )}
          >
            {label}
          </span>
          {description && (
            <span
              className={cn(
                "mt-0.5 block text-sm",
                selected ? "text-primary-700" : "text-neutral-500"
              )}
            >
              {description}
            </span>
          )}
        </div>
      </div>
    </motion.button>
  );
}
