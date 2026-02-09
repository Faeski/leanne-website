import { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";
import { ROUTES } from "@/lib/constants";

const content = PLACEHOLDER_CONTENT.services.huidverbetering;

export const metadata: Metadata = {
  title: "Huidverbetering",
  description:
    "Ontdek onze professionele huidverbeterende behandelingen. Environ anti-aging en Me-Line pigmentbehandeling voor zichtbare resultaten.",
};

export default function HuidverbeteringPage() {
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

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Over Huidverbetering"
            description={content.intro}
            height="sm"
          />
        </Container>
      </Section>

      {/* Treatment Cards */}
      <Section background="cream">
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            Onze Behandelingen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href={ROUTES.ENVIRON}
              className="block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <Placeholder
                type="image"
                title="Environ - Anti-Aging"
                description="Wetenschappelijk bewezen huidverjonging met vitamine A"
                height="sm"
              />
            </Link>
            <Link
              href={ROUTES.PIGMENT}
              className="block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <Placeholder
                type="image"
                title="Me-Line - Pigment"
                description="Medische peeling voor melasma en hardnekkige pigmentvlekken"
                height="sm"
              />
            </Link>
          </div>
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
