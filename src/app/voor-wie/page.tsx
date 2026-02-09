import { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";
import { ROUTES } from "@/lib/constants";

const content = PLACEHOLDER_CONTENT.personas.voorWie;

export const metadata: Metadata = {
  title: "Voor Wie?",
  description:
    "Ontdek welke behandeling het beste bij jouw situatie past. Persoonlijke huidzorg voor elke levensfase bij Instituut Leanne.",
};

const personas = [
  {
    href: ROUTES.NA_ZWANGERSCHAP,
    title: "Na Zwangerschap",
    description: "Herstel je lichaam en huid na de bevalling",
  },
  {
    href: ROUTES.MENOPAUZE,
    title: "Menopauze & Huid",
    description: "Ondersteun je huid tijdens de overgang",
  },
  {
    href: ROUTES.SPORTERS,
    title: "Sporters",
    description: "Presteer beter met een gladde, verzorgde huid",
  },
  {
    href: ROUTES.GEZOND_OUDER_WORDEN,
    title: "Gezond Ouder Worden",
    description: "Verouder mooi met gezonde, stralende huid",
  },
];

export default function VoorWiePage() {
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
            title="Persoonlijke Aanpak"
            description={content.intro}
            height="sm"
          />
        </Container>
      </Section>

      {/* Persona Cards */}
      <Section background="cream">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {personas.map((persona) => (
              <Link
                key={persona.href}
                href={persona.href}
                className="block rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <Placeholder
                  type="image"
                  title={persona.title}
                  description={persona.description}
                  height="sm"
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quiz CTA */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="interactive"
            title="Ontdek jouw Skin Code"
            description="Doe onze korte quiz en ontdek welke behandeling bij jou past"
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
