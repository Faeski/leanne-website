"use client";

import { useEffect, useRef, useState } from "react";

interface AEOBlockProps {
  /** 40-60 word direct answer for AI search engines */
  answer: string;
  /** Optional citation/source */
  citation?: string;
}

/**
 * AEO (Answer Engine Optimization) Block
 * Designed to provide direct answers for AI search engines like ChatGPT, Perplexity, etc.
 * Full-width section with primary brand background and slide-up animation on scroll.
 */
export function AEOBlock({ answer, citation }: AEOBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-primary-600 py-16 lg:py-20"
      role="region"
      aria-label="Samenvatting"
    >
      <div
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="text-lg leading-relaxed text-white/90">
          {answer}
        </p>
        {citation && (
          <p className="mt-4 text-sm text-white/60">
            — {citation}
          </p>
        )}
      </div>
    </section>
  );
}
