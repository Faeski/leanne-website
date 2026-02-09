import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.services.icoone;

export const metadata: Metadata = {
  title: "iCoone - Huidversteviging & Body Contouring",
  description:
    "iCoone behandeling voor huidversteviging en lichaamscontouring. Niet-invasieve oplossing na zwangerschap of bij huidverslapping. Instituut Leanne Lanaken.",
};

export default function ICoonePage() {
  return (
    <ServicePageTemplate
      title={content.title}
      subtitle={content.subtitle}
      aeoPlaceholder={content.aeo}
    />
  );
}
