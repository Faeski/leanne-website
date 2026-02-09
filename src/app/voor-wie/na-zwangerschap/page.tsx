import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.personas.naZwangerschap;

export const metadata: Metadata = {
  title: "Na Zwangerschap - Herstel je Huid en Lichaam",
  description:
    "Herstel je lichaam na de zwangerschap. iCoone huidversteviging en Environ behandelingen speciaal voor nieuwe moeders. Instituut Leanne Lanaken.",
};

export default function NaZwangerschapPage() {
  return (
    <PersonaPageTemplate
      title={content.title}
      personaDescription={content.subtitle}
      relatedTreatments={content.treatments}
    />
  );
}
