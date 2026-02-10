import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { menopauzeContent } from "@/content";

export const metadata: Metadata = {
  title: "Menopauze & Huid - Ondersteuning tijdens de Overgang | Instituut Leanne",
  description:
    "Ondersteun je huid tijdens de menopauze. Environ anti-aging en iCoone huidversteviging voor vrouwen in de overgang. Instituut Leanne Lanaken.",
};

export default function MenopauezPage() {
  return <PersonaPageTemplate content={menopauzeContent} />;
}
