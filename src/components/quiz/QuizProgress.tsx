"use client";

import { cn } from "@/lib/utils";
import { progressContent } from "@/content/quiz";

interface QuizProgressProps {
  current: number;
  total: number;
  className?: string;
}

/**
 * QuizProgress Component
 * Step indicator showing quiz progress
 */
export function QuizProgress({ current, total, className }: QuizProgressProps) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className={cn("w-full", className)}>
      {/* Step text */}
      <div className="mb-2 text-center text-sm text-neutral-500">
        {progressContent.stepLabel} {current + 1} {progressContent.ofLabel} {total}
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full bg-primary-500 transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
