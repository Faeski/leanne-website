import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.services.laser;

export const metadata: Metadata = {
  title: "Laserontharing",
  description:
    "Professionele laserontharing met diode laser. Gecertificeerde laser specialist Sharon. Permanente ontharing bij Instituut Leanne in Lanaken.",
};

export default function LaserPage() {
  return (
    <ServicePageTemplate
      title={content.title}
      subtitle={content.subtitle}
      aeoPlaceholder={content.aeo}
    />
  );
}
