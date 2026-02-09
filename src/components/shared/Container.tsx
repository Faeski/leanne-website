"use client";

import { cn } from "@/lib/utils";
import { ContainerProps } from "@/types";

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-screen-2xl",
};

export function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-container lg:px-container-lg",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
