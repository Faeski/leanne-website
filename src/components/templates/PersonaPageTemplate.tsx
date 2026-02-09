"use client";

import { Section, Container, Placeholder } from "@/components/shared";

interface PersonaPageTemplateProps {
  title: string;
  personaDescription: string;
  relatedTreatments: readonly string[];
}

export function PersonaPageTemplate({
  title,
  personaDescription,
  relatedTreatments,
}: PersonaPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="hero"
            title={title}
            description={personaDescription}
            height="md"
          />
        </Container>
      </Section>

      {/* Introduction / Problem Statement */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Herkenbaar?"
            description="Inlevend tekst die de doelgroep aanspreekt over hun specifieke situatie en uitdagingen"
            height="sm"
          />
        </Container>
      </Section>

      {/* Recommended Treatments */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Aanbevolen Behandelingen"
            description={`Behandelingen voor jou: ${relatedTreatments.join(", ")}`}
            height="md"
          />
        </Container>
      </Section>

      {/* Testimonial / Case Study */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Ervaringsverhaal"
            description="Testimonial of case study van iemand uit dezelfde doelgroep"
            height="sm"
          />
        </Container>
      </Section>

      {/* Quiz CTA */}
      <Section background="cream">
        <Container size="narrow">
          <Placeholder
            type="interactive"
            title="Ontdek jouw Skin Code"
            description="Quiz CTA die bezoekers helpt de juiste behandeling te vinden"
            height="sm"
          />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Gratis Huidanalyse"
            description="Boek een vrijblijvende intake voor persoonlijk advies"
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
