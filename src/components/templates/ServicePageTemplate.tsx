"use client";

import { Section, Container } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";
import {
  AEOBlock,
  ProcessTimeline,
  BeforeAfterGallery,
  FAQAccordion,
  IntakeCTA,
  type ProcessStep,
  type BeforeAfterImage,
  type FAQItem,
} from "@/components/content";
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
}

interface ServicePageTemplateProps {
  content: ServicePageContent;
}

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  return (
    <>
      {/* Schema.org structured data */}
      <SchemaScript schema={generateServiceSchema(content.schemaData)} />

      {/* AEO Block - Top of page for AI search engines */}
      <Section spacing="normal">
        <Container size="narrow">
          <AEOBlock answer={content.aeoAnswer} citation={content.aeoCitation} />
        </Container>
      </Section>

      {/* Hero */}
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

      {/* Process Timeline */}
      <Section>
        <Container>
          <ProcessTimeline steps={content.processSteps} />
        </Container>
      </Section>

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
    </>
  );
}
