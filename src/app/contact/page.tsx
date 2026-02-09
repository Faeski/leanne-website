import { Metadata } from "next";
import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";
import { CONTACT_INFO, EXTERNAL_URLS } from "@/lib/constants";

const content = PLACEHOLDER_CONTENT.pages.contact;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Instituut Leanne in Lanaken. Openingstijden, adres, telefoon en routebeschrijving.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="hero"
            title={content.title}
            description={content.subtitle}
            height="md"
          />
        </Container>
      </Section>

      {/* Contact Info */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Details */}
            <div>
              <h2 className="mb-4 text-display-sm font-semibold">
                Contactgegevens
              </h2>
              <address className="not-italic">
                <p className="mb-2 text-lg font-medium text-neutral-900">
                  {CONTACT_INFO.name}
                </p>
                <p className="text-neutral-600">{CONTACT_INFO.address}</p>
                <p className="text-neutral-600">
                  {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
                </p>
                <p className="text-neutral-600">{CONTACT_INFO.country}</p>

                <p className="mt-4 text-neutral-600">
                  <span className="font-medium">Tel:</span> {CONTACT_INFO.phone}
                </p>
                <p className="text-neutral-600">
                  <span className="font-medium">Email:</span>{" "}
                  {CONTACT_INFO.email}
                </p>
              </address>

              <div className="mt-6">
                <a
                  href={EXTERNAL_URLS.GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600"
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
            <div>
              <h2 className="mb-4 text-display-sm font-semibold">
                Openingstijden
              </h2>
              <dl className="space-y-2">
                {Object.entries(CONTACT_INFO.openingHours).map(
                  ([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <dt className="capitalize text-neutral-600">{day}</dt>
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
                  )
                )}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="widget"
            title="Google Maps"
            description="Interactieve kaart met locatie"
            height="md"
          />
        </Container>
      </Section>

      {/* Directions */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title="Routebeschrijving"
            description="Bereikbaarheid vanuit Maastricht, parkeren, openbaar vervoer"
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
