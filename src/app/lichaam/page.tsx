import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { TreatmentCardGrid, IntakeCTA } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lichaam & Contour",
  description:
    "Professionele lichaamsbehandelingen voor huidversteviging en contouring. iCoone behandeling bij Instituut Leanne in Lanaken.",
};

const treatments = [
  {
    title: "iCoone - Huidversteviging",
    description:
      "Geavanceerde technologie voor huidversteviging en lichaamscontouring. Perfect voor postpartum herstel en huidverslapping.",
    href: ROUTES.ICOONE,
    tag: "Lichaam",
    duration: "30-45 min",
    priceFrom: 75,
  },
];

export default function LichaamPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-lg font-semibold text-neutral-900">
              Lichaam & Contour
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Niet-invasieve lichaamsbehandelingen voor huidversteviging en contouring
            </p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral mx-auto text-center">
            <p className="text-lg leading-relaxed text-neutral-600">
              Met de iCoone technologie bieden we effectieve lichaamsbehandelingen
              zonder chirurgische ingrepen. Of je nu je lichaam wilt herstellen na
              een zwangerschap, de huidkwaliteit wilt verbeteren of werkt aan een
              strakkere silhouet – wij helpen je jouw doelen te bereiken.
            </p>
          </div>
        </Container>
      </Section>

      {/* Treatment Card */}
      <Section background="cream">
        <Container size="narrow">
          <TreatmentCardGrid
            title="Onze Behandeling"
            treatments={treatments}
            columns={2}
          />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title="Gratis Consultatie"
            description="Boek een vrijblijvende consultatie en ontdek wat iCoone voor jouw lichaam kan betekenen."
          />
        </Container>
      </Section>
    </>
  );
}
