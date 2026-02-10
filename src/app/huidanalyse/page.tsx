import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { SalonizedWidget } from "@/components/integrations";
import { FAQAccordion, IntakeCTA } from "@/components/content";
import { huidanalyseContent } from "@/content";
import { SchemaScript, generateWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gratis Huidanalyse | Instituut Leanne",
  description:
    "Boek een gratis huidanalyse bij Instituut Leanne. Ontvang persoonlijk advies, een behandelplan en productsamples. Vrijblijvend en professioneel.",
};

export default function HuidanalysePage() {
  const content = huidanalyseContent;

  return (
    <>
      <SchemaScript schema={generateWebPageSchema(content.schemaData)} />

      {/* Hero */}
      <Section background="cream">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-lg font-semibold text-neutral-900">
              {content.title}
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              {content.subtitle}
            </p>
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section>
        <Container size="narrow">
          <p className="text-center text-lg text-neutral-600">
            {content.intro}
          </p>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="cream">
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            Wat je ontvangt
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white p-6 text-center"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="mt-3 font-semibold text-neutral-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container size="narrow">
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            Hoe werkt het?
          </h2>
          <div className="space-y-6">
            {content.process.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="cream">
        <Container size="narrow">
          <FAQAccordion items={content.faqs} />
        </Container>
      </Section>

      {/* CTA + Booking Widget */}
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title="Klaar om te starten?"
            description="Boek nu je gratis huidanalyse en ontdek wat jouw huid nodig heeft."
            ctaText="Plan je afspraak"
          />

          <div className="mt-12">
            <h2 className="mb-6 text-center text-display-sm font-semibold">
              Direct een afspraak maken
            </h2>
            <SalonizedWidget />
          </div>
        </Container>
      </Section>
    </>
  );
}
