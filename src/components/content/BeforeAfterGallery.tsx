"use client";

import { useState } from "react";

export interface BeforeAfterImage {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  treatmentType?: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
  title?: string;
  disclaimer?: string;
}

const DEFAULT_DISCLAIMER = "Resultaten kunnen per persoon verschillen. Foto's zijn niet bewerkt.";

/**
 * BeforeAfterGallery Component
 * Slider comparison of before/after treatment results with disclaimers
 */
export function BeforeAfterGallery({
  images,
  title = "Resultaten",
  disclaimer = DEFAULT_DISCLAIMER
}: BeforeAfterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  // If no images provided, show placeholder
  if (images.length === 0) {
    return (
      <div>
        <h2 className="mb-8 text-center text-display-sm font-semibold">
          {title}
        </h2>
        <div className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50">
          <div className="text-center">
            <p className="text-neutral-500">Voor/na foto&apos;s worden binnenkort toegevoegd</p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-neutral-500">
          {disclaimer}
        </p>
      </div>
    );
  }

  const activeImage = images[activeIndex];

  return (
    <div>
      <h2 className="mb-8 text-center text-display-sm font-semibold">
        {title}
      </h2>

      {/* Main comparison view */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
        {/* Before image (full width, behind) */}
        <div className="absolute inset-0">
          <img
            src={activeImage.beforeSrc}
            alt={activeImage.beforeAlt}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-4 left-4 rounded bg-black/60 px-2 py-1 text-sm text-white">
            Voor
          </span>
        </div>

        {/* After image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={activeImage.afterSrc}
            alt={activeImage.afterAlt}
            className="h-full w-full object-cover"
          />
          <span className="absolute bottom-4 right-4 rounded bg-black/60 px-2 py-1 text-sm text-white">
            Na
          </span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 cursor-ew-resize bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
            <svg className="h-4 w-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Slider input (invisible, for interaction) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Vergelijk voor en na"
        />
      </div>

      {/* Caption */}
      {activeImage.caption && (
        <p className="mt-4 text-center text-neutral-700">
          {activeImage.caption}
        </p>
      )}

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`h-16 w-16 overflow-hidden rounded-md border-2 transition-colors ${
                index === activeIndex
                  ? 'border-neutral-900'
                  : 'border-transparent hover:border-neutral-300'
              }`}
              aria-label={`Bekijk resultaat ${index + 1}`}
            >
              <img
                src={image.afterSrc}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Disclaimer */}
      <p className="mt-4 text-center text-sm text-neutral-500">
        {disclaimer}
      </p>
    </div>
  );
}
