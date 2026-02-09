"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import { BookingCTAProps } from "@/types";

export function BookingCTA({
  variant = "inline",
  label = "Boeken",
}: BookingCTAProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

  const variantClasses = {
    inline:
      "rounded-md bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-600",
    floating:
      "fixed bottom-6 right-6 z-40 rounded-full bg-primary-500 px-6 py-3 text-base text-white shadow-lg hover:bg-primary-600 lg:hidden",
  };

  return (
    <Link href={ROUTES.BOEKEN} className={cn(baseClasses, variantClasses[variant])}>
      {label}
    </Link>
  );
}
