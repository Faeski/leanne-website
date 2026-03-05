"use client";

import * as React from "react";
import { useInView, useSpring, useTransform, motion, SpringOptions } from "framer-motion";

import { cn } from "@/lib/utils";

type CountingNumberProps = {
  number: number;
  fromNumber?: number;
  decimalPlaces?: number;
  transition?: SpringOptions;
  inView?: boolean;
  inViewOnce?: boolean;
  prefix?: string;
  suffix?: string;
  formatNumber?: (n: number) => string;
} & React.ComponentProps<"span">;

/**
 * CountingNumber Component
 * Animates a number from one value to another with spring physics
 * Inspired by Animate UI
 */
function CountingNumber({
  number,
  fromNumber = 0,
  decimalPlaces = 0,
  transition = { stiffness: 90, damping: 50 },
  inView = false,
  inViewOnce = true,
  prefix = "",
  suffix = "",
  formatNumber,
  className,
  ...props
}: CountingNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: inViewOnce, margin: "-100px" });

  // Check for reduced motion preference
  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Determine when to animate
  const shouldAnimate = inView ? isInView : true;

  // Spring animation value
  const springValue = useSpring(fromNumber, transition);

  // Transform to rounded display value
  const displayValue = useTransform(springValue, (latest) => {
    const rounded = parseFloat(latest.toFixed(decimalPlaces));
    if (formatNumber) {
      return formatNumber(rounded);
    }
    // Default: format with locale-specific thousand separators
    return rounded.toLocaleString("nl-NL", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
  });

  // Start animation when in view
  React.useEffect(() => {
    if (prefersReducedMotion) {
      springValue.jump(number);
      return;
    }

    if (shouldAnimate) {
      springValue.set(number);
    }
  }, [shouldAnimate, number, springValue, prefersReducedMotion]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} {...props}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

export { CountingNumber, type CountingNumberProps };
