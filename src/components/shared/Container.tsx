"use client";

import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types";

const sizeClasses = {
  default: "max-w-[1300px]",
  narrow: "max-w-[900px]",
  wide: "max-w-[1400px]",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-container md:px-container-lg",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
