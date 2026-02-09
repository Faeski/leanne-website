import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.services.pigment;

export const metadata: Metadata = {
  title: "Me-Line - Pigmentbehandeling",
  description:
    "Me-Line pigmentbehandeling voor melasma en zwangerschapsmasker. Enige gecertificeerde aanbieder in regio Maastricht. Instituut Leanne Lanaken.",
};

export default function PigmentPage() {
  return (
    <ServicePageTemplate
      title={content.title}
      subtitle={content.subtitle}
      aeoPlaceholder={content.aeo}
    />
  );
}
