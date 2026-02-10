import { Metadata } from "next";
import { Section, Container } from "@/components/shared";
import { TrustBlock } from "@/components/content";
import { overOnsContent } from "@/content";
import { SchemaScript, generateOrganizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Over Ons | Instituut Leanne",
  description:
    "Ontdek het verhaal achter Instituut Leanne. Passie voor huidgezondheid, gecertificeerde expertise en persoonlijke aandacht in Lanaken.",
};

export default function OverOnsPage() {
  const content = overOnsContent;

  return (
    <>
      <SchemaScript schema={generateOrganizationSchema()} />

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

      {/* Story */}
      <Section>
        <Container size="narrow">
          <h2 className="mb-6 text-center text-display-sm font-semibold">
            {content.story.title}
          </h2>
          <div className="space-y-4 text-neutral-600">
            {content.story.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section background="cream">
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            {content.philosophy.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {content.philosophy.points.map((point, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                <h3 className="font-semibold text-neutral-900">{point.title}</h3>
                <p className="mt-2 text-neutral-600">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            {content.team.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {content.team.members.map((member, index) => (
              <div
                key={index}
                className="rounded-lg border border-neutral-200 bg-white p-6"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mb-4 h-32 w-32 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-neutral-100">
                    <span className="text-3xl font-semibold text-neutral-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-neutral-900">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-500">{member.role}</p>
                <p className="mt-3 text-neutral-600">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section background="cream">
        <Container>
          <TrustBlock certifications={content.certifications} />
        </Container>
      </Section>

      {/* Salon Tour - Placeholder for now */}
      <Section>
        <Container>
          <h2 className="mb-8 text-center text-display-sm font-semibold">
            Onze Salon
          </h2>
          <div className="flex aspect-[21/9] items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50">
            <p className="text-neutral-500">
              Sfeerbeelden worden binnenkort toegevoegd
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
