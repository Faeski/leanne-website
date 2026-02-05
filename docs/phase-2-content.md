# Phase 2: Content & AEO

**Goal**: Complete content architecture with all block components
**Deliverable**: All pages populated with real content blocks (copy to be filled in)

**Prerequisite**: Phase 1 scaffold deployed and approved

---

## 1. Overview

Phase 2 transforms the placeholder scaffold into a fully structured content system. The focus is on:

1. Building reusable content block components
2. Implementing AEO (Answer Engine Optimization) strategy
3. Creating page templates for each content type
4. Adding Schema.org structured data

---

## 2. Content Block Components

### 2.1 AEO Block

The most critical component for AI search optimization.

```typescript
// components/content/AEOBlock.tsx

interface AEOBlockProps {
  question: string;      // The search query this answers
  answer: string;        // 40-60 word direct answer
  schemaType?: 'FAQPage' | 'HowTo' | 'Service';
}

// Features:
// - Visually distinct (subtle background, clean typography)
// - Positioned at top of service pages
// - Includes schema.org markup
// - Optimized for AI snippet extraction
```

**Design Guidelines:**
- Clean, scannable typography
- Subtle background differentiation (light cream)
- No decorative elements that interfere with parsing
- Mobile: Full width, comfortable reading size
- Desktop: Constrained width for optimal line length

**Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wat is Me-Line pigmentbehandeling?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Me-Line pigmentbehandeling verwijdert hardnekkige pigmentvlekken..."
    }
  }]
}
```

### 2.2 Process Timeline

```typescript
// components/content/ProcessTimeline.tsx

interface TimelineStep {
  title: string;
  description: string;
  icon?: string;
  duration?: string;
}

interface ProcessTimelineProps {
  title?: string;
  steps: TimelineStep[];
  variant?: 'vertical' | 'horizontal';
}

// Sections:
// - Voor de behandeling (preparation)
// - Tijdens de behandeling (what happens)
// - Na de behandeling (aftercare, results timeline)
```

**Design:**
- Mobile: Vertical timeline with connecting line
- Desktop: Can be horizontal for 3-4 steps
- Icons or numbers for each step
- Clear visual progression

### 2.3 Before/After Gallery

```typescript
// components/content/BeforeAfterGallery.tsx

interface BeforeAfterImage {
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
  treatment: string;
  timeframe?: string;  // e.g., "Na 4 behandelingen"
  disclaimer?: string;
}

interface BeforeAfterGalleryProps {
  title?: string;
  images: BeforeAfterImage[];
  disclaimer: string;  // Required legal disclaimer
}

// Features:
// - Slider/swipe comparison
// - Grid of multiple cases
// - Always shows disclaimer
// - Lazy loading for images
```

**Disclaimer Text (always visible):**
> "Resultaten kunnen per persoon verschillen. De getoonde foto's zijn van echte klanten van Instituut Leanne."

### 2.4 FAQ Accordion

```typescript
// components/content/FAQAccordion.tsx

interface FAQItem {
  question: string;
  answer: string;  // Can include basic HTML/markdown
}

interface FAQAccordionProps {
  title?: string;
  items: FAQItem[];
  schemaMarkup?: boolean;  // Include FAQPage schema
}

// Features:
// - Smooth expand/collapse animation (Framer Motion)
// - Only one open at a time (optional)
// - Schema.org FAQPage markup
// - Accessible (keyboard navigation, ARIA)
```

**Schema Markup (automatic):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hoeveel behandelingen heb ik nodig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

### 2.5 Intake CTA Block

```typescript
// components/content/IntakeCTA.tsx

interface IntakeCTAProps {
  title?: string;
  description?: string;
  benefits?: string[];
  ctaText?: string;
  ctaHref?: string;
  variant?: 'inline' | 'highlight';
}

// Default content:
// - Title: "Gratis Huidanalyse"
// - Benefits: Persoonlijk adviesboekje, samples, behandelplan
// - CTA: Link to /huidanalyse or direct Salonized booking
```

### 2.6 Product Recommendation Block

```typescript
// components/content/ProductRecommendation.tsx

interface Product {
  name: string;
  description: string;
  image?: string;
  externalUrl: string;  // Link to webshop
}

interface ProductRecommendationProps {
  title?: string;
  context?: string;  // Why these products are relevant
  products: Product[];
}

// Used for:
// - Environ step-up products on Environ page
// - Home care products related to treatments
// - Links to external webshop
```

### 2.7 Certification/Trust Block

```typescript
// components/content/TrustBlock.tsx

interface Certification {
  title: string;
  issuer?: string;
  image?: string;
  description?: string;
}

interface TrustBlockProps {
  title?: string;
  certifications?: Certification[];
  showGoogleReviews?: boolean;
  googlePlaceId?: string;
}

// Features:
// - Display certification images/badges
// - Optional Google Reviews integration
// - Team member credentials
```

### 2.8 Placeholder for Interactive Elements

```typescript
// components/content/InteractivePlaceholder.tsx

interface InteractivePlaceholderProps {
  type: 'twist-hotspots' | 'step-up-explainer' | 'cost-calculator';
  title: string;
  description: string;
}

// Visual placeholder that indicates where Phase 4 interactive
// components will be placed. Helps content planning.
```

---

## 3. Page Templates

### 3.1 Service Page Template

The primary template for all four "Money Maker" pages.

```typescript
// components/templates/ServicePage.tsx

interface ServicePageData {
  // Meta
  slug: string;
  title: string;
  metaDescription: string;

  // AEO
  aeo: {
    question: string;
    answer: string;
  };

  // Hero
  hero: {
    title: string;
    subtitle: string;
    image?: string;
    video?: string;
  };

  // Content blocks
  introduction?: string;
  process: TimelineStep[];
  beforeAfter?: BeforeAfterImage[];
  faqs: FAQItem[];

  // Optional blocks
  productRecommendations?: Product[];
  certifications?: Certification[];

  // Interactive placeholders
  interactiveElements?: Array<{
    type: string;
    position: 'after-intro' | 'after-process' | 'before-faq';
  }>;

  // Schema
  schemaData: {
    serviceType: string;
    provider: string;
    areaServed: string[];
  };
}
```

**Template Structure:**

```tsx
<ServicePage data={environData}>
  {/* Auto-generated from data */}

  {/* 1. AEO Block */}
  <AEOBlock question={data.aeo.question} answer={data.aeo.answer} />

  {/* 2. Hero */}
  <ServiceHero {...data.hero} />

  {/* 3. Introduction */}
  <Section>
    <RichText content={data.introduction} />
  </Section>

  {/* 4. Interactive placeholder (if configured) */}
  {data.interactiveElements?.filter(e => e.position === 'after-intro').map(...)}

  {/* 5. Process Timeline */}
  <Section background="cream">
    <ProcessTimeline steps={data.process} />
  </Section>

  {/* 6. Before/After Gallery */}
  {data.beforeAfter && (
    <Section>
      <BeforeAfterGallery images={data.beforeAfter} />
    </Section>
  )}

  {/* 7. Product Recommendations (optional) */}
  {data.productRecommendations && (
    <Section background="cream">
      <ProductRecommendation products={data.productRecommendations} />
    </Section>
  )}

  {/* 8. FAQ */}
  <Section>
    <FAQAccordion items={data.faqs} schemaMarkup />
  </Section>

  {/* 9. Intake CTA */}
  <Section background="cream">
    <IntakeCTA />
  </Section>

  {/* 10. Booking Widget */}
  <Section>
    <SalonizedWidget />
  </Section>
</ServicePage>
```

### 3.2 Persona Landing Page Template

For the "Voor Wie?" segment pages.

```typescript
// components/templates/PersonaPage.tsx

interface PersonaPageData {
  // Meta
  slug: string;
  title: string;
  metaDescription: string;

  // Persona definition
  persona: {
    name: string;           // e.g., "Na Zwangerschap"
    headline: string;       // Empathetic headline
    description: string;    // Persona story/context
    painPoints: string[];   // What they're experiencing
    goals: string[];        // What they want to achieve
  };

  // Recommended treatments
  treatments: Array<{
    name: string;
    slug: string;
    whyRelevant: string;
    keyBenefit: string;
  }>;

  // Social proof
  testimonial?: {
    quote: string;
    author: string;
    treatment?: string;
  };

  // CTA
  primaryCTA: {
    text: string;
    href: string;
  };
}
```

**Template Structure:**

```tsx
<PersonaPage data={naZwangerschapData}>
  {/* 1. Empathetic Hero */}
  <Section>
    <h1>{data.persona.headline}</h1>
    <p>{data.persona.description}</p>
  </Section>

  {/* 2. Pain Points (what you're experiencing) */}
  <Section background="cream">
    <h2>Herken je dit?</h2>
    <ul>{data.persona.painPoints.map(...)}</ul>
  </Section>

  {/* 3. Goals (what you want) */}
  <Section>
    <h2>Wat je wilt bereiken</h2>
    <ul>{data.persona.goals.map(...)}</ul>
  </Section>

  {/* 4. Recommended Treatments */}
  <Section background="cream">
    <h2>Onze aanbeveling voor jou</h2>
    {data.treatments.map(treatment => (
      <TreatmentCard
        name={treatment.name}
        whyRelevant={treatment.whyRelevant}
        keyBenefit={treatment.keyBenefit}
        href={treatment.slug}
      />
    ))}
  </Section>

  {/* 5. Testimonial (optional) */}
  {data.testimonial && (
    <Section>
      <Testimonial {...data.testimonial} />
    </Section>
  )}

  {/* 6. CTA */}
  <Section background="cream">
    <IntakeCTA
      title="Begin jouw hersteltraject"
      ctaText={data.primaryCTA.text}
      ctaHref={data.primaryCTA.href}
    />
  </Section>
</PersonaPage>
```

### 3.3 Geo Landing Page Template

For regional SEO targeting (Maastricht, Lanaken).

```typescript
// components/templates/GeoLandingPage.tsx

interface GeoLandingPageData {
  // Meta
  slug: string;  // e.g., "huidverbetering-maastricht"
  title: string;
  metaDescription: string;

  // Location context
  location: {
    targetCity: string;         // e.g., "Maastricht"
    salonCity: string;          // "Lanaken"
    travelTime: string;         // e.g., "10 minuten"
    travelDescription: string;  // How to get there
  };

  // AEO for local search
  aeo: {
    question: string;  // e.g., "Waar vind ik huidverbetering bij Maastricht?"
    answer: string;
  };

  // Services to highlight
  services: Array<{
    name: string;
    slug: string;
    localBenefit: string;  // Why visit us from this location
  }>;

  // Local proof
  localTestimonial?: {
    quote: string;
    author: string;
    location: string;  // e.g., "Maastricht"
  };
}
```

**Key Elements:**
- AEO block targeting local search queries
- Travel information prominently displayed
- Google Maps embed
- Local testimonials (from that region)
- Same services, localized messaging

---

## 4. Schema.org Implementation

### 4.1 Organization Schema (Site-wide)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Instituut Leanne",
  "description": "Premium huidgezondheid en schoonheidsinstituut in Lanaken",
  "url": "https://www.instituutleanne.be",
  "telephone": "+32...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Lanaken",
    "postalCode": "...",
    "addressCountry": "BE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  },
  "openingHoursSpecification": [...],
  "priceRange": "€€€",
  "image": "...",
  "sameAs": [
    "https://www.instagram.com/...",
    "https://www.facebook.com/..."
  ]
}
```

### 4.2 Service Schema (Per Service Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Pigmentbehandeling",
  "name": "Me-Line Pigmentbehandeling",
  "description": "...",
  "provider": {
    "@type": "MedicalBusiness",
    "@id": "https://www.instituutleanne.be/#organization"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Lanaken"
    },
    {
      "@type": "City",
      "name": "Maastricht"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Me-Line Behandelingen",
    "itemListElement": [...]
  }
}
```

### 4.3 FAQ Schema (Auto-generated)

The FAQAccordion component automatically generates FAQPage schema from its content.

### 4.4 Schema Utility

```typescript
// lib/schema.ts

export function generateOrganizationSchema(): WithContext<MedicalBusiness> {...}
export function generateServiceSchema(service: ServiceData): WithContext<Service> {...}
export function generateFAQSchema(faqs: FAQItem[]): WithContext<FAQPage> {...}
export function generateLocalBusinessSchema(geo: GeoData): WithContext<LocalBusiness> {...}
```

---

## 5. Content Data Files

### 5.1 Service Content Structure

```typescript
// content/services/environ.ts

export const environContent: ServicePageData = {
  slug: 'environ',
  title: 'Environ - Huidverjonging & Anti-Aging',
  metaDescription: 'Environ behandelingen voor huidverjonging...',

  aeo: {
    question: 'Wat is Environ huidverjonging?',
    answer: `Environ huidverjonging is een wetenschappelijk onderbouwde
      behandelmethode die de huid stapsgewijs voedt met vitamines.
      De Essential Youth Reset behandeling bij Instituut Leanne in Lanaken
      combineert professionele behandelingen met het unieke step-up systeem
      voor blijvende huidverbetering.`,
  },

  hero: {
    title: 'Environ - Huidverjonging',
    subtitle: 'Wetenschappelijk onderbouwde anti-aging voor een gezonde huid',
  },

  introduction: `[Content over de Environ filosofie, step-up systeem,
    waarom het werkt voor de bewuste klant die niet zomaar "iets smeert"...]`,

  process: [
    {
      title: 'Intake & Huidanalyse',
      description: 'We beginnen met een grondige analyse van je huid...',
      duration: '30 min',
    },
    {
      title: 'Essential Youth Reset',
      description: 'De kernbehandeling met vitamineinfusie...',
      duration: '60-90 min',
    },
    {
      title: 'Thuisverzorging',
      description: 'Je persoonlijke step-up programma voor thuis...',
    },
  ],

  faqs: [
    {
      question: 'Wat is het Environ step-up systeem?',
      answer: 'Het step-up systeem is een unieke aanpak waarbij...',
    },
    {
      question: 'Hoeveel behandelingen heb ik nodig?',
      answer: 'Dit hangt af van je huidconditie en doelen...',
    },
    // ... more FAQs
  ],

  productRecommendations: [
    {
      name: 'Environ AVST Moisturiser',
      description: 'De basis van het step-up systeem',
      externalUrl: 'https://webshop.../environ-avst',
    },
    // ... more products
  ],

  interactiveElements: [
    {
      type: 'step-up-explainer',
      position: 'after-intro',
    },
  ],

  schemaData: {
    serviceType: 'Anti-Aging Facial Treatment',
    provider: 'Instituut Leanne',
    areaServed: ['Lanaken', 'Maastricht', 'Limburg'],
  },
};
```

### 5.2 Persona Content Structure

```typescript
// content/personas/na-zwangerschap.ts

export const naZwangerschapContent: PersonaPageData = {
  slug: 'na-zwangerschap',
  title: 'Huidherstel Na Je Zwangerschap',
  metaDescription: 'Herstel je huid na de zwangerschap...',

  persona: {
    name: 'Nieuwe Moeder',
    headline: 'Je lichaam heeft iets prachtigs gedaan. Nu is het tijd voor jou.',
    description: `Na de bevalling merk je misschien veranderingen aan je huid
      en lichaam die je niet had verwacht. Dat is normaal - en er is
      iets aan te doen.`,
    painPoints: [
      'Slappere huid rond de buik',
      'Striae (zwangerschapsstriemen)',
      'Pigmentvlekken (zwangerschapsmasker)',
      'Minder tijd voor jezelf',
    ],
    goals: [
      'Je weer comfortabel voelen in je eigen lichaam',
      'Zichtbare verbetering zonder chirurgie',
      'Even quality time voor jezelf',
    ],
  },

  treatments: [
    {
      name: 'iCoone Huidversteviging',
      slug: '/lichaam/icoone',
      whyRelevant: 'Effectief tegen slappere huid en striae',
      keyBenefit: 'Merkbare versteviging na enkele behandelingen',
    },
    {
      name: 'Me-Line Pigmentbehandeling',
      slug: '/huidverbetering/pigment',
      whyRelevant: 'Voor hardnekkige pigmentvlekken na zwangerschap',
      keyBenefit: 'Egale, stralende huid',
    },
  ],

  primaryCTA: {
    text: 'Plan je gratis huidanalyse',
    href: '/huidanalyse',
  },
};
```

---

## 6. Intake Page

Dedicated page for the skin analysis service.

```typescript
// content/pages/huidanalyse.ts

export const huidanalyseContent = {
  title: 'Gratis Huidanalyse',
  metaDescription: 'Boek een gratis huidanalyse bij Instituut Leanne...',

  hero: {
    title: 'Ontdek Wat Jouw Huid Nodig Heeft',
    subtitle: 'Gratis, persoonlijk en vrijblijvend',
  },

  whatYouGet: [
    {
      title: 'Professionele Huidscan',
      description: 'Analyse met professionele apparatuur',
    },
    {
      title: 'Persoonlijk Adviesboekje',
      description: 'Je neemt een uitgebreid advies mee naar huis',
    },
    {
      title: 'Behandelplan op Maat',
      description: 'Concrete aanbevelingen voor jouw huid',
    },
    {
      title: 'Product Samples',
      description: 'Probeer producten thuis uit',
    },
  ],

  forWhom: `De huidanalyse is bedoeld voor iedereen die nieuwsgierig is
    naar de gezondheid van hun huid. Of je nu last hebt van pigment,
    rimpels, of huidverslapping - we kijken samen naar wat het beste
    werkt voor jou.`,

  notFor: 'Laserontharing', // Intake not applicable

  duration: '30 minuten',
  price: 'Gratis',

  cta: {
    text: 'Boek Je Gratis Huidanalyse',
    // Links to Salonized
  },
};
```

---

## 7. Acceptance Criteria

Phase 2 is complete when:

- [ ] All content block components are built and documented
- [ ] Service page template works with Environ as reference
- [ ] All 4 service pages use the template with their content
- [ ] All 4 persona pages are built
- [ ] Geo landing pages are created (Maastricht variants)
- [ ] Huidanalyse page is complete
- [ ] Schema.org markup validates (test with Google Rich Results Test)
- [ ] AEO blocks are in place on all service pages
- [ ] FAQ schema generates correctly
- [ ] All content files are structured (copy can be placeholder)
- [ ] Mobile experience is smooth for all templates

---

## 8. Next Steps (Phase 3)

After Phase 2 approval:
1. Build quiz flow component
2. Implement PDF generation
3. Set up Supabase for quiz data
4. Configure email delivery
5. Design nurture email sequence
