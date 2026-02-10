"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";

interface IntakeCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "default" | "compact";
}

/**
 * IntakeCTA Component
 * Call-to-action block for booking a free skin analysis
 */
export function IntakeCTA({
  title = "Gratis Huidanalyse",
  description = "Boek een vrijblijvende intake en ontvang persoonlijk advies, een huidbeoordeling en behandelplan op maat.",
  ctaText = "Boek je gratis huidanalyse",
  ctaHref = ROUTES.HUIDANALYSE,
  variant = "default",
}: IntakeCTAProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg bg-neutral-900 p-6 text-center text-white sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-neutral-300">{description}</p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-2.5 font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
        >
          {ctaText}
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-neutral-900 p-8 text-center text-white md:p-12">
      <h2 className="text-display-sm font-semibold">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-neutral-300">
        {description}
      </p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
      >
        {ctaText}
        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
