import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.personas.gezondOuderWorden;

export const metadata: Metadata = {
  title: "Gezond Ouder Worden - Natuurlijke Huidverjonging",
  description:
    "Verouder mooi met gezonde, stralende huid. Environ anti-aging behandelingen voor wie bewust wil verouderen. Instituut Leanne Lanaken.",
};

export default function GezondOuderWordenPage() {
  return (
    <PersonaPageTemplate
      title={content.title}
      personaDescription={content.subtitle}
      relatedTreatments={content.treatments}
    />
  );
}
