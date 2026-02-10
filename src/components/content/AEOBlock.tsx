"use client";

interface AEOBlockProps {
  /** 40-60 word direct answer for AI search engines */
  answer: string;
  /** Optional citation/source */
  citation?: string;
}

/**
 * AEO (Answer Engine Optimization) Block
 * Designed to provide direct answers for AI search engines like ChatGPT, Perplexity, etc.
 * Placed at top of service pages for maximum visibility to crawlers.
 */
export function AEOBlock({ answer, citation }: AEOBlockProps) {
  return (
    <div
      className="rounded-lg border border-neutral-200 bg-neutral-50 p-6"
      role="region"
      aria-label="Samenvatting"
    >
      <p className="text-lg leading-relaxed text-neutral-700">
        {answer}
      </p>
      {citation && (
        <p className="mt-3 text-sm text-neutral-500">
          — {citation}
        </p>
      )}
    </div>
  );
}
