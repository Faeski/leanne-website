import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { naZwangerschapContent } from "@/content";

export const metadata: Metadata = {
  title: "Na Zwangerschap - Herstel je Huid en Lichaam | Instituut Leanne",
  description:
    "Herstel je lichaam na de zwangerschap. iCoone huidversteviging en Environ behandelingen speciaal voor nieuwe moeders. Instituut Leanne Lanaken.",
};

export default function NaZwangerschapPage() {
  return <PersonaPageTemplate content={naZwangerschapContent} />;
}
