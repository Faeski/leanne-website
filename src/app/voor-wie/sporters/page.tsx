import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.personas.sporters;

export const metadata: Metadata = {
  title: "Sporters - Laserontharing voor Atleten",
  description:
    "Professionele laserontharing voor sporters en atleten. Betere prestaties en hygiëne met permanente ontharing. Instituut Leanne Lanaken.",
};

export default function SportersPage() {
  return (
    <PersonaPageTemplate
      title={content.title}
      personaDescription={content.subtitle}
      relatedTreatments={content.treatments}
    />
  );
}
