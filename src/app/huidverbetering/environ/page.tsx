import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { environContent } from "@/content";

export const metadata: Metadata = {
  title: "Environ - Anti-Aging Behandeling | Instituut Leanne",
  description:
    "Environ huidverjonging bij Instituut Leanne. Wetenschappelijk bewezen anti-aging met vitamine A. Gecertificeerde Environ specialist in Lanaken.",
};

export default function EnvironPage() {
  return <ServicePageTemplate content={environContent} />;
}
