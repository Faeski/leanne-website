"use client";

import { useEffect, useState } from "react";

interface SalonizedWidgetProps {
  className?: string;
}

export function SalonizedWidget({ className }: SalonizedWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Placeholder for Salonized widget initialization
    // The actual embed code will be provided by Salonized
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className}>
      {isLoading ? (
        <div className="flex min-h-64 items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
            <p className="text-sm text-neutral-600">
              Booking widget wordt geladen...
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-64 rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100 p-6">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="mb-2 text-4xl">📅</span>
            <h3 className="mb-2 text-lg font-semibold text-neutral-800">
              Salonized Booking Widget
            </h3>
            <p className="max-w-md text-sm text-neutral-600">
              Hier komt de Salonized booking widget. De embed code wordt
              geconfigureerd na ontvangst van de Salonized credentials.
            </p>
            <code className="mt-4 rounded bg-neutral-200 px-3 py-1 text-xs text-neutral-700">
              NEXT_PUBLIC_SALONIZED_KEY
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
