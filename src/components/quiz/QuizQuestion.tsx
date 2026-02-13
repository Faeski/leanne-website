"use client";

import { motion } from "framer-motion";
import { QuizOption } from "./QuizOption";

interface QuizQuestionProps<T extends string> {
  title: string;
  subtitle?: string;
  options: Array<{
    value: T;
    label: string;
    description?: string;
  }>;
  selectedValues: T[];
  onSelect: (value: T) => void;
  multiSelect?: boolean;
}

/**
 * QuizQuestion Component
 * Question display with selectable options
 */
export function QuizQuestion<T extends string>({
  title,
  subtitle,
  options,
  selectedValues,
  onSelect,
  multiSelect = false,
}: QuizQuestionProps<T>) {
  return (
    <div className="text-center">
      {/* Question title */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-display-sm font-semibold text-neutral-900"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-neutral-600"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Options */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 space-y-3"
      >
        {options.map((option) => (
          <QuizOption
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            selected={selectedValues.includes(option.value)}
            onSelect={onSelect}
            multiSelect={multiSelect}
          />
        ))}
      </motion.div>
    </div>
  );
}
