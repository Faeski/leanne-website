import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.services.environ;

export const metadata: Metadata = {
  title: "Environ - Anti-Aging Behandeling",
  description:
    "Environ huidverjonging bij Instituut Leanne. Wetenschappelijk bewezen anti-aging met vitamine A. Gecertificeerde Environ specialist in Lanaken.",
};

export default function EnvironPage() {
  return (
    <ServicePageTemplate
      title={content.title}
      subtitle={content.subtitle}
      aeoPlaceholder={content.aeo}
    />
  );
}
