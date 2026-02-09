"use client";

import { cn } from "@/lib/utils";
import { PlaceholderProps } from "@/types";

const heightClasses = {
  sm: "min-h-32",
  md: "min-h-64",
  lg: "min-h-96",
};

const typeIcons: Record<string, string> = {
  hero: "🎬",
  text: "📝",
  image: "🖼️",
  gallery: "🎨",
  faq: "❓",
  timeline: "📅",
  widget: "🔌",
  interactive: "🎮",
};

const typeLabels: Record<string, string> = {
  hero: "Hero Sectie",
  text: "Tekst Blok",
  image: "Afbeelding",
  gallery: "Galerij",
  faq: "FAQ",
  timeline: "Tijdlijn",
  widget: "Widget",
  interactive: "Interactief Element",
};

export function Placeholder({
  type,
  title,
  description,
  height = "md",
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100 p-6 text-center",
        heightClasses[height]
      )}
    >
      <span className="mb-2 text-4xl">{typeIcons[type]}</span>
      <span className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
        {typeLabels[type]}
      </span>
      <h3 className="mb-2 text-lg font-semibold text-neutral-800">{title}</h3>
      {description && (
        <p className="max-w-md text-sm text-neutral-600">{description}</p>
      )}
    </div>
  );
}
