import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.pages.privacy;

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van Instituut Leanne. Lees hoe wij omgaan met uw persoonsgegevens.",
};

export default function PrivacyPage() {
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
                Het volledige privacybeleid wordt hier geplaatst conform de
                AVG/GDPR wetgeving.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
