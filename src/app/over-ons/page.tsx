import { Metadata } from "next";
import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.pages.overOns;

export const metadata: Metadata = {
  title: "Over Ons",
  description:
    "Ontdek het verhaal achter Instituut Leanne. Passie voor huidgezondheid, gecertificeerde expertise en persoonlijke aandacht in Lanaken.",
};

export default function OverOnsPage() {
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

      {/* Story */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Ons Verhaal"
            description={content.intro}
            height="md"
          />
        </Container>
      </Section>

      {/* Team */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Ons Team"
            description={content.team}
            height="md"
          />
        </Container>
      </Section>

      {/* Certifications */}
      <Section>
        <Container>
          <Placeholder
            type="gallery"
            title="Onze Certificeringen"
            description="Erkende opleidingen en specialisaties"
            height="sm"
          />
        </Container>
      </Section>

      {/* Salon Tour */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Onze Salon"
            description="Sfeerbeelden van het instituut"
            height="md"
          />
        </Container>
      </Section>
    </>
  );
}
