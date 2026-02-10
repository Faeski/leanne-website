import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { TreatmentCardGrid, IntakeCTA } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Voor Wie?",
  description:
    "Ontdek welke behandeling het beste bij jouw situatie past. Persoonlijke huidzorg voor elke levensfase bij Instituut Leanne.",
};

const personas = [
  {
    title: "Na Zwangerschap",
    description:
      "Herstel je lichaam en huid na de bevalling. Speciale behandelingen voor postpartum herstel.",
    href: ROUTES.NA_ZWANGERSCHAP,
    tag: "Lichaam",
  },
  {
    title: "Menopauze & Huid",
    description:
      "Ondersteun je huid tijdens de overgang. Behandelingen afgestemd op hormonale veranderingen.",
    href: ROUTES.MENOPAUZE,
    tag: "Huidzorg",
  },
  {
    title: "Sporters",
    description:
      "Presteer beter met een gladde, verzorgde huid. Laserontharing voor optimaal comfort en hygiëne.",
    href: ROUTES.SPORTERS,
    tag: "Ontharing",
  },
  {
    title: "Gezond Ouder Worden",
    description:
      "Verouder mooi met gezonde, stralende huid. Wetenschappelijk onderbouwde anti-aging.",
    href: ROUTES.GEZOND_OUDER_WORDEN,
    tag: "Anti-Aging",
  },
];

export default function VoorWiePage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-lg font-semibold text-neutral-900">
              Voor Wie?
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Ontdek welke behandeling het beste bij jouw situatie past
            </p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral mx-auto text-center">
            <p className="text-lg leading-relaxed text-neutral-600">
              Iedereen heeft unieke huidbehoeften. Of je nu je lichaam wilt herstellen
              na een zwangerschap, je huid ondersteunt tijdens de menopauze, of simpelweg
              gezond wilt verouderen – bij Instituut Leanne vind je behandelingen die
              écht bij jouw levensfase passen.
            </p>
          </div>
        </Container>
      </Section>

      {/* Persona Cards */}
      <Section background="cream">
        <Container>
          <TreatmentCardGrid
            title="Vind Jouw Behandeling"
            treatments={personas}
            columns={4}
          />
        </Container>
      </Section>

      {/* Quiz placeholder */}
      <Section>
        <Container size="narrow">
          <div className="rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
              <svg className="h-6 w-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-display-sm font-semibold text-neutral-900">
              Ontdek jouw Skin Code
            </h2>
            <p className="mt-2 text-neutral-600">
              Beantwoord een paar vragen en ontdek welke behandeling het beste bij jou past.
            </p>
            <p className="mt-4 text-sm text-neutral-400">
              Quiz komt beschikbaar in Phase 3
            </p>
          </div>
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section background="cream">
        <Container size="narrow">
          <IntakeCTA
            title="Liever Persoonlijk Advies?"
            description="Boek een gratis huidanalyse en ontvang een behandelplan volledig op maat van jouw situatie."
          />
        </Container>
      </Section>
    </>
  );
}
