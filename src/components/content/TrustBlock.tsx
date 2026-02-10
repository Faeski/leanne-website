"use client";

export interface Certification {
  name: string;
  issuer: string;
  logo?: string;
  year?: number;
}

interface TrustBlockProps {
  certifications: Certification[];
  title?: string;
}

/**
 * TrustBlock Component
 * Displays certifications, credentials, and trust signals
 */
export function TrustBlock({
  certifications,
  title = "Gecertificeerde Expertise"
}: TrustBlockProps) {
  return (
    <div className="text-center">
      <h2 className="mb-8 text-display-sm font-semibold">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-neutral-200 bg-white p-6"
          >
            {cert.logo ? (
              <img
                src={cert.logo}
                alt={`${cert.name} logo`}
                className="mb-4 h-16 w-auto object-contain"
              />
            ) : (
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            )}
            <h3 className="font-semibold text-neutral-900">{cert.name}</h3>
            <p className="mt-1 text-sm text-neutral-500">{cert.issuer}</p>
            {cert.year && (
              <p className="mt-1 text-xs text-neutral-400">Sinds {cert.year}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
