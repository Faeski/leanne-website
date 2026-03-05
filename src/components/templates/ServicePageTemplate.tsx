"use client";

import { useRef, useCallback } from "react";
import { Section, Container } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";
import {
  AEOBlock,
  ProcessTimeline,
  BeforeAfterGallery,
  FAQAccordion,
  IntakeCTA,
  StepUpExplainer,
  LaserCostCalculator,
  type ProcessStep,
  type BeforeAfterImage,
  type FAQItem,
} from "@/components/content";
import { GravityStarsBackground } from "@/components/animate-ui/backgrounds/gravity-stars";
import { SchemaScript, generateServiceSchema } from "@/lib/schema";

export interface ServicePageContent {
  // AEO
  aeoAnswer: string;
  aeoCitation?: string;

  // Hero
  title: string;
  subtitle: string;
  heroImage?: string;

  // Process
  processSteps: ProcessStep[];

  // Gallery
  beforeAfterImages: BeforeAfterImage[];

  // FAQ
  faqs: FAQItem[];

  // Schema
  schemaData: {
    name: string;
    description: string;
    url: string;
    category?: string;
    priceRange?: string;
    duration?: string;
  };

  // Optional components
  showStepUpExplainer?: boolean;
  showCostCalculator?: boolean;

  // Custom hero override
  heroComponent?: React.ReactNode;
}

interface ServicePageTemplateProps {
  content: ServicePageContent;
}

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const hasLaserEffect = !!content.heroComponent;
  const glowRef = useRef<HTMLDivElement>(null);

  const handleProcessMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!glowRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.transform = `translate(${x - 175}px, ${y - 175}px)`;
      glowRef.current.style.opacity = "1";
    },
    []
  );

  const handleProcessMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.opacity = "0";
  }, []);

  return (
    <div>
      {/* Schema.org structured data */}
      <SchemaScript schema={generateServiceSchema(content.schemaData)} />

      {/* Hero */}
      {content.heroComponent ? (
        content.heroComponent
      ) : (
        <Section background="cream">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-display-lg font-semibold text-neutral-900">
                {content.title}
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                {content.subtitle}
              </p>
            </div>
            {content.heroImage && (
              <div className="mt-8 aspect-[21/9] overflow-hidden rounded-xl">
                <img
                  src={content.heroImage}
                  alt={content.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* AEO Block - between hero and process */}
      <AEOBlock answer={content.aeoAnswer} citation={content.aeoCitation} />

      {/* Process Timeline with animated star background */}
      <div
        className={`relative overflow-hidden ${hasLaserEffect ? "bg-stone-200" : "bg-neutral-50/50"}`}
        onMouseMove={hasLaserEffect ? handleProcessMouseMove : undefined}
        onMouseLeave={hasLaserEffect ? handleProcessMouseLeave : undefined}
      >
        {/* Mouse-following radial glow (laser pages only) */}
        {hasLaserEffect && (
          <div
            ref={glowRef}
            className="pointer-events-none absolute opacity-0"
            style={{
              background:
                "radial-gradient(circle, rgba(195, 85, 65, 0.38) 0%, rgba(195, 85, 65, 0.12) 35%, transparent 65%)",
              width: 350,
              height: 350,
              transition: "opacity 0.4s ease-out",
            }}
          />
        )}
        {/* Full-width animated star background */}
        <GravityStarsBackground
          className="absolute inset-0"
          starsCount={150}
          starsSize={2}
          starsOpacity={0.6}
          starsColor={hasLaserEffect ? "#c9826a" : "#a8a29e"}
          glowIntensity={15}
          mouseInfluence={200}
          mouseGravity="attract"
          gravityStrength={80}
        />
        <Section>
          <Container>
            <div className="pointer-events-none relative">
              <ProcessTimeline steps={content.processSteps} />
            </div>
          </Container>
        </Section>
      </div>

      {/* Step-Up Explainer (Environ-specific) */}
      {content.showStepUpExplainer && <StepUpExplainer />}

      {/* Cost Calculator (Laser-specific) — full-bleed stacking scroll */}
      {content.showCostCalculator && <LaserCostCalculator />}

      {/* Before/After Gallery */}
      <Section background="cream">
        <Container>
          <BeforeAfterGallery images={content.beforeAfterImages} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="narrow">
          <FAQAccordion items={content.faqs} />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section background="cream">
        <Container size="narrow">
          <IntakeCTA />
        </Container>
      </Section>

      {/* Booking Widget */}
      <Section>
        <Container size="narrow">
          <h2 className="mb-6 text-center text-display-sm font-semibold">
            Boek je afspraak
          </h2>
          <SalonizedWidget />
        </Container>
      </Section>
    </div>
  );
}
