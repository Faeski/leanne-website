/**
 * Script to preview the Quiz PDF template
 * Run with: npx tsx scripts/preview-pdf.tsx
 */

import { renderToFile } from "@react-pdf/renderer";
import { QuizPDFTemplate } from "../src/components/pdf/QuizPDFTemplate";
import type { QuizResults, PrimaryGoal } from "../src/lib/quiz/types";

// Mock data for preview
const mockResults: QuizResults = {
  goalDescription:
    "Je wilt de tijd terugdraaien en je huid zijn jeugdige uitstraling teruggeven.",
  treatment: {
    treatmentKey: "aging",
    name: "Environ Vitamin A Step-Up System",
    description:
      "Environ's Step-Up System bouwt geleidelijk vitamine A op in je huid - het krachtigste anti-aging ingrediënt dat wetenschappelijk bewezen is. Dit stimuleert collageen, verfijnt rimpels, en geeft je huid een gezonde glow.",
    whatToExpect:
      "We beginnen met een persoonlijk adviesgesprek en bepalen je startniveau. Elke 4-6 weken bouwen we de concentratie op. Merkbare verbetering zie je na 8-12 weken, optimale resultaten na 6-12 maanden.",
    route: "/huidverbetering/environ",
  },
  tips: [
    "Stress heeft directe impact op je huid. Een behandeling bij ons is ook een moment van rust - gun jezelf die me-time.",
    "Zonbescherming is cruciaal! Gebruik dagelijks SPF 30+ en plan behandelingen bij voorkeur in de herfst of winter voor optimaal resultaat.",
  ],
  includesTravelInfo: true,
};

const mockPrimaryGoal: PrimaryGoal = "aging";

async function generatePreview() {
  const outputPath = "./preview-huid-advies-paspoort.pdf";

  console.log("Generating PDF preview...");

  await renderToFile(
    QuizPDFTemplate({
      results: mockResults,
      firstName: "Maria",
      primaryGoal: mockPrimaryGoal,
    }),
    outputPath
  );

  console.log(`✓ PDF saved to: ${outputPath}`);
  console.log("\nOpen the file to preview the template.");
}

generatePreview().catch(console.error);
