import { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/shared";
import { TreatmentCardGrid, IntakeCTA, FAQAccordion, Testimonial } from "@/components/content";
import { SchemaScript, generateLocalBusinessSchema } from "@/lib/schema";
import { ROUTES, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Huidverbetering Maastricht | Environ & Me-Line | Instituut Leanne",
  description:
    "Professionele huidverbetering in de regio Maastricht. Environ anti-aging en Me-Line pigmentbehandeling. Slechts 10 minuten rijden. Gratis huidanalyse.",
  keywords:
    "huidverbetering maastricht, environ maastricht, pigmentbehandeling maastricht, anti-aging maastricht, huidverjonging maastricht",
};

const treatments = [
  {
    title: "Environ - Anti-Aging",
    description:
      "Wetenschappelijk bewezen huidverjonging met vitamine A. Zichtbare vermindering van lijntjes en pigment.",
    href: ROUTES.ENVIRON,
    tag: "Anti-Aging",
    duration: "60-90 min",
    priceFrom: 95,
  },
  {
    title: "Me-Line - Pigment",
    description:
      "Medische peeling voor melasma en hardnekkige pigmentvlekken. De enige gecertificeerde aanbieder in de regio.",
    href: ROUTES.PIGMENT,
    tag: "Pigment",
    duration: "45-60 min",
    priceFrom: 150,
  },
];

const faqs = [
  {
    question: "Hoe ver is Instituut Leanne vanaf Maastricht?",
    answer:
      "Instituut Leanne in Lanaken ligt op slechts 10 minuten rijden van het centrum van Maastricht. Via de A2/E25 richting Luik neemt u afslag Lanaken. Er is gratis parkeergelegenheid bij het instituut.",
  },
  {
    question: "Waarom kiezen voor huidverbetering net over de grens?",
    answer:
      "Bij Instituut Leanne combineer je professionele huidverbetering met een rustgevende ervaring. Als gecertificeerd Environ en Me-Line specialist bieden we behandelingen die in Nederland vaak moeilijk te vinden zijn. Bovendien profiteer je van ruime parkeergelegenheid en een ontspannen sfeer.",
  },
  {
    question: "Welke behandeling past bij mijn huid?",
    answer:
      "Dat bepalen we graag samen tijdens een gratis huidanalyse. We analyseren je huid, bespreken je wensen en stellen een persoonlijk behandelplan op. Zo weet je precies wat je kunt verwachten.",
  },
];

const testimonial = {
  quote:
    "Als Maastrichtenaar was ik eerst sceptisch over de reis, maar de 10 minuten rijden zijn het meer dan waard. De expertise en de rustige sfeer vind je nergens anders.",
  author: "M. Janssen",
  location: "Maastricht",
};

export default function HuidverbeteringMaastrichtPage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    areaServed: "Maastricht",
    serviceTypes: ["Environ Anti-Aging", "Me-Line Pigmentbehandeling", "Huidverbetering"],
  });

  return (
    <>
      <SchemaScript schema={localBusinessSchema} />

      {/* Hero */}
      <Section background="cream" spacing="large">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
              10 minuten van Maastricht
            </p>
            <h1 className="text-display-lg font-semibold text-neutral-900">
              Huidverbetering bij Maastricht
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Professionele Environ en Me-Line behandelingen in een oase van rust.
              Net over de grens, een wereld van verschil voor je huid.
            </p>
            <Link
              href={ROUTES.HUIDANALYSE}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Boek gratis huidanalyse
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Travel Info */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">10 min rijden</h3>
              <p className="mt-1 text-sm text-neutral-600">Via A2/E25 richting Luik, afslag Lanaken</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Gratis Parkeren</h3>
              <p className="mt-1 text-sm text-neutral-600">Ruime parkeergelegenheid direct bij het instituut</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
                <svg className="h-6 w-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Gecertificeerd Specialist</h3>
              <p className="mt-1 text-sm text-neutral-600">Officieel Environ en Me-Line behandelcentrum</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Treatments */}
      <Section background="cream">
        <Container>
          <TreatmentCardGrid
            title="Onze Huidverbeterende Behandelingen"
            treatments={treatments}
            columns={2}
          />
        </Container>
      </Section>

      {/* Testimonial */}
      <Section>
        <Container size="narrow">
          <Testimonial {...testimonial} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="cream">
        <Container size="narrow">
          <FAQAccordion
            items={faqs}
            title="Veelgestelde vragen van Maastrichtenaren"
          />
        </Container>
      </Section>

      {/* Location Info */}
      <Section>
        <Container>
          <div className="rounded-xl border border-neutral-200 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-display-sm font-semibold text-neutral-900">
                  Bezoek ons in Lanaken
                </h2>
                <p className="mt-4 text-neutral-600">
                  Instituut Leanne ligt in het rustige Lanaken, op een steenworp van
                  Maastricht. Geniet van professionele huidverbetering in een ontspannen
                  omgeving met alle tijd en aandacht voor jou.
                </p>
                <div className="mt-6 space-y-3">
                  <p className="flex items-start gap-3 text-neutral-600">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {CONTACT_INFO.address}, {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                  </p>
                  <p className="flex items-start gap-3 text-neutral-600">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {CONTACT_INFO.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-neutral-100 p-8">
                <p className="text-sm text-neutral-500">Google Maps embed - wordt in Phase 3 toegevoegd</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="cream">
        <Container size="narrow">
          <IntakeCTA
            title="Klaar voor Stralende Huid?"
            description="Boek een gratis huidanalyse en ontdek welke behandeling het beste bij jouw huid past. Op 10 minuten van Maastricht."
          />
        </Container>
      </Section>
    </>
  );
}
