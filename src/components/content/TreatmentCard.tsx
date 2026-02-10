"use client";

import Link from "next/link";

export interface TreatmentCardData {
  title: string;
  description: string;
  href: string;
  image?: string;
  duration?: string;
  priceFrom?: number;
  tag?: string;
}

interface TreatmentCardProps extends TreatmentCardData {
  variant?: "default" | "featured";
}

/**
 * TreatmentCard Component
 * Service preview card for displaying treatment options
 */
export function TreatmentCard({
  title,
  description,
  href,
  image,
  duration,
  priceFrom,
  tag,
  variant = "default",
}: TreatmentCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-xl border transition-all hover:shadow-lg ${
        isFeatured
          ? 'border-neutral-900 bg-neutral-900 text-white'
          : 'border-neutral-200 bg-white hover:border-neutral-300'
      }`}
    >
      {/* Image */}
      {image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={`flex aspect-[4/3] items-center justify-center ${
          isFeatured ? 'bg-neutral-800' : 'bg-neutral-100'
        }`}>
          <svg className={`h-12 w-12 ${isFeatured ? 'text-neutral-600' : 'text-neutral-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {tag && (
          <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
            isFeatured
              ? 'bg-white/10 text-white'
              : 'bg-neutral-100 text-neutral-600'
          }`}>
            {tag}
          </span>
        )}

        <h3 className={`text-lg font-semibold ${
          isFeatured ? 'text-white' : 'text-neutral-900'
        }`}>
          {title}
        </h3>

        <p className={`mt-2 text-sm ${
          isFeatured ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {description}
        </p>

        {/* Meta info */}
        <div className={`mt-4 flex items-center justify-between text-sm ${
          isFeatured ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          {duration && (
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {duration}
            </span>
          )}
          {priceFrom && (
            <span>Vanaf €{priceFrom}</span>
          )}
        </div>

        {/* Arrow indicator */}
        <div className={`mt-4 flex items-center gap-2 text-sm font-medium transition-transform group-hover:translate-x-1 ${
          isFeatured ? 'text-white' : 'text-neutral-900'
        }`}>
          Meer info
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

/**
 * TreatmentCardGrid Component
 * Grid layout for multiple treatment cards
 */
interface TreatmentCardGridProps {
  treatments: TreatmentCardData[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export function TreatmentCardGrid({
  treatments,
  title,
  columns = 3,
}: TreatmentCardGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div>
      {title && (
        <h2 className="mb-8 text-center text-display-sm font-semibold">
          {title}
        </h2>
      )}
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {treatments.map((treatment, index) => (
          <TreatmentCard key={index} {...treatment} />
        ))}
      </div>
    </div>
  );
}
