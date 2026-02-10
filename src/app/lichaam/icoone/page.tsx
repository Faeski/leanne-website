import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { icooneContent } from "@/content";

export const metadata: Metadata = {
  title: "iCoone Huidversteviging | Instituut Leanne",
  description:
    "Niet-invasieve body contouring met iCoone. Effectief tegen cellulite, huidverslapping en voor postpartum herstel. Instituut Leanne Lanaken.",
};

export default function IcoonePage() {
  return <ServicePageTemplate content={icooneContent} />;
}
