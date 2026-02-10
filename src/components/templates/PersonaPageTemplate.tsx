"use client";

import { Section, Container } from "@/components/shared";
import {
  IntakeCTA,
  TreatmentCardGrid,
  Testimonial,
  type TreatmentCardData,
  type TestimonialData,
} from "@/components/content";
import { SchemaScript, generateWebPageSchema } from "@/lib/schema";

export interface PainPoint {
  title: string;
  description: string;
  icon?: string;
}

export interface PersonaPageContent {
  // Hero
  title: string;
  subtitle: string;
  heroImage?: string;

  // Problem statement
  intro: string;
  painPoints: PainPoint[];

  // Solutions
  recommendedTreatments: TreatmentCardData[];

  // Social proof
  testimonial?: TestimonialData;

  // Schema
  schemaData: {
    name: string;
    description: string;
    url: string;
  };
}

interface PersonaPageTemplateProps {
  content: PersonaPageContent;
}

export function PersonaPageTemplate({ content }: PersonaPageTemplateProps) {
  return (
    <>
      {/* Schema.org structured data */}
      <SchemaScript schema={generateWebPageSchema(content.schemaData)} />

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

      {/* Introduction / Problem Statement */}
      <Section>
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-display-sm font-semibold text-neutral-900">
              Herkenbaar?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {content.intro}
            </p>
          </div>

          {/* Pain points */}
          {content.painPoints.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {content.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100">
                    {point.icon ? (
                      <span className="text-lg">{point.icon}</span>
                    ) : (
                      <svg className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{point.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Recommended Treatments */}
      <Section background="cream">
        <Container>
          <TreatmentCardGrid
            treatments={content.recommendedTreatments}
            title="Aanbevolen Behandelingen"
            columns={content.recommendedTreatments.length <= 2 ? 2 : 3}
          />
        </Container>
      </Section>

      {/* Testimonial / Case Study */}
      {content.testimonial && (
        <Section>
          <Container size="narrow">
            <h2 className="mb-8 text-center text-display-sm font-semibold">
              Ervaringsverhaal
            </h2>
            <Testimonial {...content.testimonial} variant="featured" />
          </Container>
        </Section>
      )}

      {/* Intake CTA */}
      <Section background={content.testimonial ? "cream" : "white"}>
        <Container size="narrow">
          <IntakeCTA
            title="Persoonlijk advies nodig?"
            description="Boek een vrijblijvende huidanalyse en ontdek welke behandeling het beste bij jouw situatie past."
          />
        </Container>
      </Section>
    </>
  );
}
