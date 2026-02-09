"use client";

import { Section, Container, Placeholder } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  aeoPlaceholder: string;
}

export function ServicePageTemplate({
  title,
  subtitle,
  aeoPlaceholder,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* AEO Block - Top of page for AI search engines */}
      <Section spacing="normal">
        <Container size="narrow">
          <Placeholder
            type="text"
            title="AEO Block"
            description={aeoPlaceholder}
            height="sm"
          />
        </Container>
      </Section>

      {/* Hero */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="hero"
            title={title}
            description={subtitle}
            height="md"
          />
        </Container>
      </Section>

      {/* Process Timeline */}
      <Section>
        <Container>
          <Placeholder
            type="timeline"
            title="Behandelproces"
            description="Wat te verwachten: voor, tijdens en na de behandeling"
            height="md"
          />
        </Container>
      </Section>

      {/* Before/After Gallery */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Voor/Na Galerij"
            description="Behandelresultaten met disclaimers"
            height="md"
          />
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="faq"
            title="Veelgestelde Vragen"
            description="FAQ sectie met schema markup"
            height="md"
          />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section background="cream">
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Intake CTA"
            description="Boek je gratis huidanalyse"
            height="sm"
          />
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
