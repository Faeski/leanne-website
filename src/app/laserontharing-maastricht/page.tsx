import { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/shared";
import { IntakeCTA, FAQAccordion, Testimonial } from "@/components/content";
import { SchemaScript, generateLocalBusinessSchema } from "@/lib/schema";
import { ROUTES, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Laserontharing Maastricht | Diode Laser | Instituut Leanne",
  description:
    "Permanente laserontharing in de regio Maastricht. Diode laser technologie voor alle huidtypes. Slechts 10 minuten rijden. Gratis intake.",
  keywords:
    "laserontharing maastricht, permanente ontharing maastricht, laser ontharing maastricht, diode laser maastricht",
};

const treatments = [
  { area: "Oksels", duration: "15 min", priceFrom: 45 },
  { area: "Bikinilijn", duration: "20 min", priceFrom: 55 },
  { area: "Bovenlip", duration: "10 min", priceFrom: 35 },
  { area: "Onderbenen", duration: "45 min", priceFrom: 125 },
  { area: "Rug (heren)", duration: "45 min", priceFrom: 145 },
  { area: "Full body", duration: "90+ min", priceFrom: 395 },
];

const faqs = [
  {
    question: "Hoe ver is Instituut Leanne vanaf Maastricht?",
    answer:
      "Instituut Leanne in Lanaken ligt op slechts 10 minuten rijden van het centrum van Maastricht. Via de A2/E25 richting Luik neemt u afslag Lanaken. Er is gratis parkeergelegenheid bij het instituut.",
  },
  {
    question: "Is laserontharing geschikt voor mijn huidtype?",
    answer:
      "Onze diode laser is geschikt voor vrijwel alle huidtypes, van licht tot donker. Tijdens de gratis intake beoordelen we je huid en haartypes om te bepalen of de behandeling geschikt is en welke instellingen het beste werken.",
  },
  {
    question: "Hoeveel behandelingen heb ik nodig?",
    answer:
      "Gemiddeld zijn 6-8 behandelingen nodig voor optimale resultaten, met tussenpozen van 4-8 weken afhankelijk van het behandelgebied. Tijdens de intake stellen we een persoonlijk behandelplan op.",
  },
  {
    question: "Is de behandeling pijnlijk?",
    answer:
      "De meeste cliënten ervaren de behandeling als goed te verdragen. Het voelt als een korte warmteprik. Onze laser heeft een ingebouwd koelsysteem voor extra comfort.",
  },
];

const testimonial = {
  quote:
    "Na jaren scheren en waxen ben ik zo blij dat ik de stap naar laserontharing heb gemaakt. De resultaten zijn geweldig en de reis van 10 minuten is het meer dan waard.",
  author: "K. Peters",
  location: "Maastricht",
};

export default function LaserontharingMaastrichtPage() {
  const localBusinessSchema = generateLocalBusinessSchema({
    areaServed: "Maastricht",
    serviceTypes: ["Laserontharing", "Permanente ontharing", "Diode laser behandeling"],
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
              Laserontharing bij Maastricht
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Permanente ontharing met diode laser technologie. Veilig, effectief en
              geschikt voor alle huidtypes.
            </p>
            <Link
              href={ROUTES.LASER}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Boek gratis intake
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900">Diode Laser</h3>
              <p className="mt-1 text-sm text-neutral-600">Veilig en effectief voor alle huidtypes</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Table */}
      <Section background="cream">
        <Container size="narrow">
          <h2 className="mb-8 text-center text-display-sm font-semibold text-neutral-900">
            Populaire Behandelzones
          </h2>
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
            <table className="w-full">
              <thead className="border-b border-neutral-200 bg-neutral-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Zone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Duur</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-900">Vanaf</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {treatments.map((treatment, index) => (
                  <tr key={index} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 text-neutral-900">{treatment.area}</td>
                    <td className="px-6 py-4 text-neutral-600">{treatment.duration}</td>
                    <td className="px-6 py-4 text-right font-medium text-neutral-900">€{treatment.priceFrom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-neutral-500">
            Meer zones beschikbaar. Vraag naar een prijsofferte tijdens je gratis intake.
          </p>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold text-neutral-900">
            Waarom Laserontharing?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Permanent", desc: "Tot 90% minder haargroei na volledige behandeling" },
              { title: "Tijdbesparing", desc: "Nooit meer dagelijks scheren of maandelijks waxen" },
              { title: "Glad resultaat", desc: "Geen ingroeide haartjes of scheerirritatie meer" },
              { title: "Kosteneffectief", desc: "Investeer eenmalig in permanente resultaten" },
            ].map((benefit, index) => (
              <div key={index} className="rounded-xl border border-neutral-200 bg-white p-6">
                <h3 className="font-semibold text-neutral-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section background="cream">
        <Container size="narrow">
          <Testimonial {...testimonial} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container size="narrow">
          <FAQAccordion
            items={faqs}
            title="Veelgestelde vragen over laserontharing"
          />
        </Container>
      </Section>

      {/* Location Info */}
      <Section background="cream">
        <Container>
          <div className="rounded-xl border border-neutral-200 bg-white p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-display-sm font-semibold text-neutral-900">
                  Bezoek ons in Lanaken
                </h2>
                <p className="mt-4 text-neutral-600">
                  Instituut Leanne ligt in het rustige Lanaken, op een steenworp van
                  Maastricht. Geniet van professionele laserontharing in een ontspannen
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
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title="Klaar voor Gladde Huid?"
            description="Boek een gratis intake en ontdek hoe laserontharing voor jou kan werken. Op 10 minuten van Maastricht."
            ctaText="Boek gratis intake"
            ctaHref={ROUTES.LASER}
          />
        </Container>
      </Section>
    </>
  );
}
