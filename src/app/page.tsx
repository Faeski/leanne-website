import Link from "next/link";
import { Section, Container } from "@/components/shared";
import { TreatmentCardGrid, IntakeCTA } from "@/components/content";
import { homeContent } from "@/content/pages";

const content = homeContent;

// USP Icon component
function USPIcon({ icon }: { icon: "premium" | "metime" | "certified" }) {
  const icons = {
    premium: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    metime: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    certified: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  };

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
      {icons[icon]}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" spacing="large">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-lg font-semibold text-neutral-900">
              {content.hero.title}
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              {content.hero.subtitle}
            </p>
            <Link
              href={content.hero.ctaHref}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition-colors hover:bg-neutral-800"
            >
              {content.hero.cta}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-display-sm font-semibold text-neutral-900">
              {content.intro.title}
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              {content.intro.body}
            </p>
          </div>
        </Container>
      </Section>

      {/* Four Pillars - Treatment Cards */}
      <Section background="cream">
        <Container>
          <TreatmentCardGrid
            title={content.pillars.title}
            treatments={content.pillars.treatments}
            columns={4}
          />
        </Container>
      </Section>

      {/* Quiz CTA - Placeholder for Phase 3 */}
      <Section>
        <Container size="narrow">
          <div className="rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
              <svg className="h-6 w-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-display-sm font-semibold text-neutral-900">
              {content.quiz.title}
            </h2>
            <p className="mt-2 text-neutral-600">
              {content.quiz.description}
            </p>
            <p className="mt-4 text-sm text-neutral-400">
              Quiz komt beschikbaar in Phase 3
            </p>
          </div>
        </Container>
      </Section>

      {/* USPs */}
      <Section background="cream">
        <Container>
          <h2 className="mb-12 text-center text-display-sm font-semibold text-neutral-900">
            Waarom Instituut Leanne?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {content.usps.items.map((usp, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <USPIcon icon={usp.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {usp.title}
                </h3>
                <p className="mt-2 text-neutral-600">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <IntakeCTA
            title={content.intake.title}
            description={content.intake.description}
            ctaText={content.intake.cta}
            ctaHref={content.intake.ctaHref}
          />
        </Container>
      </Section>
    </>
  );
}
