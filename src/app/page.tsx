import { Section, Container, Placeholder } from "@/components/shared";
import { PLACEHOLDER_CONTENT } from "@/content/placeholder";

const content = PLACEHOLDER_CONTENT.home;

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Placeholder
        type="hero"
        title={content.hero.title}
        description={`${content.hero.subtitle} - CTA: ${content.hero.cta}`}
        height="lg"
      />

      {/* Introduction */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title={content.intro.title}
            description={content.intro.body}
            height="sm"
          />
        </Container>
      </Section>

      {/* Four Pillars - Money Makers */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title={content.pillars.title}
            description={`Grid van 4 behandelingen: ${content.pillars.items.join(", ")}`}
            height="md"
          />
        </Container>
      </Section>

      {/* Quiz CTA */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="interactive"
            title={content.quiz.title}
            description={`${content.quiz.description} - CTA: ${content.quiz.cta}`}
            height="sm"
          />
        </Container>
      </Section>

      {/* USPs */}
      <Section background="cream">
        <Container>
          <Placeholder
            type="gallery"
            title="Waarom Instituut Leanne?"
            description={content.usps.items.map((usp) => usp.title).join(" • ")}
            height="sm"
          />
        </Container>
      </Section>

      {/* Intake CTA */}
      <Section>
        <Container size="narrow">
          <Placeholder
            type="text"
            title={content.intake.title}
            description={`${content.intake.description} - CTA: ${content.intake.cta}`}
            height="sm"
          />
        </Container>
      </Section>
    </>
  );
}
