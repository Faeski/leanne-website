import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { TreatmentCardGrid, IntakeCTA } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Huidverbetering",
  description:
    "Ontdek onze professionele huidverbeterende behandelingen. Environ anti-aging en Me-Line pigmentbehandeling voor zichtbare resultaten bij Instituut Leanne.",
};

const treatments = [
  {
    title: "Environ - Anti-Aging",
    description:
      "Wetenschappelijk bewezen huidverjonging met vitamine A. De Essential Youth Reset voor zichtbare vermindering van lijntjes en pigment.",
    href: ROUTES.ENVIRON,
    tag: "Anti-Aging",
    duration: "60-90 min",
    priceFrom: 95,
  },
  {
    title: "Me-Line - Pigment",
    description:
      "Medische peeling voor melasma en hardnekkige pigmentvlekken. De enige gecertificeerde aanbieder in de regio Maastricht.",
    href: ROUTES.PIGMENT,
    tag: "Pigment",
    duration: "45-60 min",
    priceFrom: 150,
  },
];

export default function HuidverbeteringPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-lg font-semibold text-neutral-900">
              Huidverbetering
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Professionele behandelingen voor een gezondere, jongere uitstraling
            </p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral mx-auto text-center">
            <p className="text-lg leading-relaxed text-neutral-600">
              Bij Instituut Leanne geloven we in huidverbetering die écht werkt.
              Met Environ en Me-Line bieden we wetenschappelijk onderbouwde
              behandelingen die zichtbare resultaten leveren. Van anti-aging tot
              pigmentcorrectie – wij helpen je naar een stralende, gezonde huid.
            </p>
          </div>
        </Container>
      </Section>

      {/* Treatment Cards */}
      <Section background="cream">
        <Container>
          <TreatmentCardGrid
            title="Onze Behandelingen"
            treatments={treatments}
            columns={2}
          />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title="Welke behandeling past bij jou?"
            description="Boek een gratis huidanalyse en ontdek samen met ons welke behandeling het beste bij jouw huid past."
          />
        </Container>
      </Section>
    </>
  );
}
