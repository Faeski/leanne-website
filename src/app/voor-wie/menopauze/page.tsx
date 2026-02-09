import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.personas.menopauze;

export const metadata: Metadata = {
  title: "Menopauze & Huid - Ondersteuning tijdens de Overgang",
  description:
    "Ondersteun je huid tijdens de menopauze. Environ anti-aging en iCoone huidversteviging voor vrouwen in de overgang. Instituut Leanne Lanaken.",
};

export default function MenopauezPage() {
  return (
    <PersonaPageTemplate
      title={content.title}
      personaDescription={content.subtitle}
      relatedTreatments={content.treatments}
    />
  );
}
