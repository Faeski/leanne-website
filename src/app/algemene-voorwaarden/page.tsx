import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.pages.voorwaarden;

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description:
    "Algemene voorwaarden van Instituut Leanne. Lees onze voorwaarden voor behandelingen en boekingen.",
};

export default function VoorwaardenPage() {
  return (
    <>
      {/* Header */}
      <Section background="cream">
        <Container size="narrow">
          <h1 className="text-display-md font-semibold">{content.title}</h1>
          <p className="mt-2 text-neutral-600">
            Laatst bijgewerkt: [datum]
          </p>
        </Container>
      </Section>

      {/* Content */}
      <Section>
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none">
            <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100 p-8 text-center">
              <p className="text-neutral-600">{content.content}</p>
              <p className="mt-4 text-sm text-neutral-500">
                De volledige algemene voorwaarden worden hier geplaatst.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
