import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { gezondOuderWordenContent } from "@/content";

export const metadata: Metadata = {
  title: "Gezond Ouder Worden - Natuurlijke Huidverjonging | Instituut Leanne",
  description:
    "Verouder mooi met gezonde, stralende huid. Environ anti-aging behandelingen voor wie bewust wil verouderen. Instituut Leanne Lanaken.",
};

export default function GezondOuderWordenPage() {
  return <PersonaPageTemplate content={gezondOuderWordenContent} />;
}
