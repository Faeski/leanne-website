import { Metadata } from "next";
import { PersonaPageTemplate } from "@/components/templates";
import { sportersContent } from "@/content";

export const metadata: Metadata = {
  title: "Sporters - Laserontharing voor Atleten | Instituut Leanne",
  description:
    "Professionele laserontharing voor sporters en atleten. Betere prestaties en hygiëne met permanente ontharing. Instituut Leanne Lanaken.",
};

export default function SportersPage() {
  return <PersonaPageTemplate content={sportersContent} />;
}
