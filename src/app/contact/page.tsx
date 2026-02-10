import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { IntakeCTA } from "@/components/content";
import { contactContent } from "@/content";
import { SchemaScript, generateLocalBusinessSchema } from "@/lib/schema";
import { EXTERNAL_URLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Instituut Leanne",
  description:
    "Neem contact op met Instituut Leanne in Lanaken. Openingstijden, adres, telefoon en routebeschrijving.",
};

export default function ContactPage() {
  const content = contactContent;

  return (
    <>
      <SchemaScript
        schema={generateLocalBusinessSchema({
          areaServed: "Lanaken",
          serviceTypes: ["Huidverbetering", "Laserontharing", "Body Contouring"],
        })}
      />

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

      {/* Contact Info */}
      <Section background="cream">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Details */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-neutral-900">
                Contactgegevens
              </h2>
              <address className="not-italic">
                <p className="mb-2 text-lg font-medium text-neutral-900">
                  Instituut Leanne
                </p>
                <p className="text-neutral-600">{content.contactInfo.address}</p>
                <p className="text-neutral-600">
                  {content.contactInfo.postalCode} {content.contactInfo.city}
                </p>
                <p className="text-neutral-600">{content.contactInfo.country}</p>

                <p className="mt-4 text-neutral-600">
                  <span className="font-medium">Tel:</span>{" "}
                  <a
                    href={`tel:${content.contactInfo.phone}`}
                    className="hover:text-neutral-900"
                  >
                    {content.contactInfo.phone}
                  </a>
                </p>
                <p className="text-neutral-600">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${content.contactInfo.email}`}
                    className="hover:text-neutral-900"
                  >
                    {content.contactInfo.email}
                  </a>
                </p>
              </address>

              <div className="mt-6">
                <a
                  href={EXTERNAL_URLS.GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Bekijk op Google Maps
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold text-neutral-900">
                Openingstijden
              </h2>
              <dl className="space-y-2">
                {content.openingHours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <dt className="text-neutral-600">{day}</dt>
                    <dd
                      className={
                        hours === "Gesloten"
                          ? "text-neutral-400"
                          : "font-medium text-neutral-900"
                      }
                    >
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Directions */}
      <Section>
        <Container size="narrow">
          <h2 className="mb-4 text-center text-display-sm font-semibold">
            Bereikbaarheid
          </h2>
          <p className="text-center text-neutral-600">{content.directions}</p>
        </Container>
      </Section>

      {/* Map Placeholder */}
      <Section background="cream">
        <Container>
          <div className="flex aspect-[21/9] items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-100">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="mt-2 text-neutral-500">
                Google Maps wordt hier ingesloten
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title="Direct een afspraak maken?"
            description="Boek online je behandeling of gratis huidanalyse."
            ctaText="Boek nu"
          />
        </Container>
      </Section>
    </>
  );
}
