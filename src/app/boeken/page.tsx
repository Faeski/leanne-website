import { Metadata } from "next";
import { Section, Container, Placeholder } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.pages.boeken;

export const metadata: Metadata = {
  title: "Boek een Afspraak",
  description:
    "Plan direct uw afspraak bij Instituut Leanne. Online boeken voor huidbehandelingen, laserontharing en huidanalyse.",
};

export default function BoekenPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="hero"
            title={content.title}
            description={content.subtitle}
            height="sm"
          />
        </Container>
      </Section>

      {/* Booking Widget */}
      <Section>
        <Container size="narrow">
          <p className="mb-8 text-center text-neutral-600">
            {content.intro}
          </p>
          <SalonizedWidget />
        </Container>
      </Section>

      {/* Alternative Contact */}
      <Section background="cream">
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Liever telefonisch boeken?"
            description="Bel ons gerust voor een afspraak of vragen"
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
