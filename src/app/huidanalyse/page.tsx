import { Metadata } from "next";
import { Section, Container, Placeholder } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.pages.huidanalyse;

export const metadata: Metadata = {
  title: "Gratis Huidanalyse",
  description:
    "Boek een gratis huidanalyse bij Instituut Leanne. Ontvang persoonlijk advies, een behandelplan en productsamples. Vrijblijvend en professioneel.",
};

export default function HuidanalysePage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="hero"
            title={content.title}
            description={content.subtitle}
            height="md"
          />
        </Container>
      </Section>

      {/* What You Get */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Wat je ontvangt"
            description={content.intro}
            height="sm"
          />
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Voordelen van de Huidanalyse"
            description="Persoonlijk adviesboekje • Huidbeoordeling • Behandelplan • Productsamples"
            height="md"
          />
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="timeline"
            title="Hoe werkt het?"
            description="Stap voor stap door de huidanalyse"
            height="sm"
          />
        </Container>
      </Section>

      {/* Booking Widget */}
      <Section background="cream">
        <Container size="narrow">
          <h2 className="mb-6 text-center text-display-sm font-semibold">
            {content.cta}
          </h2>
          <SalonizedWidget />
        </Container>
      </Section>
    </>
  );
}
