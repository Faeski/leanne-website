"use client";

import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";

const backgroundClasses = {
  white: "bg-white",
  cream: "bg-neutral-50",
  dark: "bg-neutral-900 text-white",
};

const spacingClasses = {
  normal: "py-section lg:py-section-lg",
  large: "py-section-lg lg:py-32",
};

export function Section({
  children,
  className,
  background = "white",
  spacing = "normal",
}: SectionProps) {
  return (
    <section
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
