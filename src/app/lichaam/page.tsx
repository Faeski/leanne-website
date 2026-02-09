import { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";
import { ROUTES } from "@/lib/constants";

const content = PLACEHOLDER_CONTENT.services.lichaam;

export const metadata: Metadata = {
  title: "Lichaam & Contour",
  description:
    "Professionele lichaamsbehandelingen voor huidversteviging en contouring. iCoone behandeling bij Instituut Leanne in Lanaken.",
};

export default function LichaamPage() {
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
            title="Over Lichaamsbehandelingen"
            description={content.intro}
            height="sm"
          />
        </Container>
      </Section>

      {/* Treatment Card */}
      <Section background="cream">
        <Container size="narrow">
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            Onze Behandelingen
          </h2>
          <Link
            href={ROUTES.ICOONE}
            className="block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <Placeholder
              type="image"
              title="iCoone - Huidversteviging"
              description="Niet-invasieve body contouring en huidversteviging"
              height="sm"
            />
          </Link>
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Gratis Consultatie"
            description="Boek een vrijblijvende intake voor persoonlijk advies"
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
