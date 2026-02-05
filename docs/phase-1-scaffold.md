# Phase 1: Foundation & Scaffold

**Goal**: Deployable staging site for content exploration with client
**Deliverable**: Live staging URL where client can browse page structure and provide content feedback

---

## 1. Project Setup

### 1.1 Initialize Next.js Project

```bash
npx create-next-app@latest leanne-website --typescript --tailwind --eslint --app --src-dir
```

### 1.2 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with navigation
│   ├── page.tsx                # Home page
│   ├── huidverbetering/
│   │   ├── page.tsx            # Huidverbetering overview
│   │   ├── environ/page.tsx    # Environ service page
│   │   └── pigment/page.tsx    # Me-Line service page
│   ├── lichaam/
│   │   ├── page.tsx            # Lichaam overview
│   │   └── icoone/page.tsx     # iCoone service page
│   ├── laserontharing/
│   │   └── page.tsx            # Laser service page
│   ├── voor-wie/
│   │   ├── page.tsx            # Voor Wie overview
│   │   ├── na-zwangerschap/page.tsx
│   │   ├── menopauze/page.tsx
│   │   ├── sporters/page.tsx
│   │   └── gezond-ouder-worden/page.tsx
│   ├── huidanalyse/page.tsx
│   ├── over-ons/page.tsx
│   ├── contact/page.tsx
│   ├── boeken/page.tsx
│   ├── privacy/page.tsx
│   └── algemene-voorwaarden/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   └── BookingCTA.tsx      # Sticky booking button
│   ├── shared/
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   └── Placeholder.tsx     # For content placeholders
│   └── integrations/
│       ├── SalonizedWidget.tsx
│       ├── CookieConsent.tsx
│       └── GoogleAnalytics.tsx
├── content/
│   └── placeholder.ts          # Placeholder content for all pages
├── lib/
│   ├── constants.ts            # Routes, external URLs
│   └── utils.ts
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

### 1.3 Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "framer-motion": "^11.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

---

## 2. Design System Tokens

### 2.1 Colors (Placeholder - Pending Brand Guidelines)

```typescript
// tailwind.config.ts
const colors = {
  // Primary - warm, premium
  primary: {
    50: '#fdf8f6',
    100: '#f9ede8',
    200: '#f3dcd2',
    300: '#e9c4b3',
    400: '#dca58c',
    500: '#c9826a',  // Main brand color (placeholder)
    600: '#b56b52',
    700: '#975746',
    800: '#7c493c',
    900: '#674035',
  },
  // Neutral - warm grays
  neutral: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
  },
  // Accent - for CTAs
  accent: {
    500: '#0d9488',  // Teal (placeholder)
    600: '#0f766e',
  }
}
```

### 2.2 Typography

```typescript
// tailwind.config.ts
const fontFamily = {
  // Display font - for headings (placeholder)
  display: ['var(--font-display)', 'serif'],
  // Body font - for text
  body: ['var(--font-body)', 'sans-serif'],
}

const fontSize = {
  // Mobile-first sizes
  'display-lg': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'display-md': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'display-sm': ['1.5rem', { lineHeight: '1.3' }],
  'body-lg': ['1.125rem', { lineHeight: '1.6' }],
  'body-md': ['1rem', { lineHeight: '1.6' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5' }],
}
```

### 2.3 Spacing & Layout

```typescript
// tailwind.config.ts
const spacing = {
  'section': '4rem',      // 64px - between sections (mobile)
  'section-lg': '6rem',   // 96px - between sections (desktop)
  'container': '1.5rem',  // 24px - container padding (mobile)
  'container-lg': '2rem', // 32px - container padding (desktop)
}

const screens = {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

---

## 3. Core Components

### 3.1 Layout Components

#### Navigation.tsx

```typescript
// Mobile-first navigation with:
// - Logo (left)
// - Hamburger menu (mobile)
// - Full nav links (desktop)
// - Booking CTA button (always visible)

interface NavigationProps {
  // No props needed - uses internal state
}

// Features:
// - Sticky on scroll
// - Transparent on home hero, solid elsewhere
// - Mobile menu slides in from right
```

#### MobileMenu.tsx

```typescript
// Full-screen mobile menu overlay
// - All nav links
// - Contact info
// - Social links
// - Close button

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
```

#### Footer.tsx

```typescript
// Standard footer with:
// - Logo + tagline
// - Navigation links (grouped)
// - Contact info
// - Opening hours
// - Social links
// - Legal links (privacy, voorwaarden)
// - Copyright
```

#### BookingCTA.tsx

```typescript
// Sticky floating button (mobile)
// Fixed position button in nav (desktop)
// Opens Salonized booking modal or navigates to /boeken

interface BookingCTAProps {
  variant?: 'floating' | 'inline';
  label?: string;
}
```

### 3.2 Shared Components

#### Section.tsx

```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'dark';
  spacing?: 'normal' | 'large';
}
```

#### Container.tsx

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}
```

#### Placeholder.tsx

```typescript
// Visual placeholder for content areas
// Shows what type of content will go there

interface PlaceholderProps {
  type: 'hero' | 'text' | 'image' | 'gallery' | 'faq' | 'timeline' | 'widget' | 'interactive';
  title: string;
  description?: string;
  height?: 'sm' | 'md' | 'lg';
}
```

---

## 4. Page Templates

### 4.1 Home Page Scaffold

```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <>
      <Placeholder type="hero" title="Hero Section" description="Full-screen ambient video/image with headline and CTA" height="lg" />

      <Section>
        <Placeholder type="text" title="Introduction" description="Welcome message, salon positioning" />
      </Section>

      <Section background="cream">
        <Placeholder type="gallery" title="Four Pillars" description="Grid of 4 Money Makers with images and links" />
      </Section>

      <Section>
        <Placeholder type="interactive" title="Quiz CTA" description="Skin Code diagnostic teaser with start button" />
      </Section>

      <Section background="cream">
        <Placeholder type="gallery" title="USPs" description="Premium comfort, me-time, expertise" />
      </Section>

      <Section>
        <Placeholder type="text" title="Intake CTA" description="Free skin analysis promotion" />
      </Section>
    </>
  );
}
```

### 4.2 Service Page Scaffold (Template)

```typescript
// components/templates/ServicePageTemplate.tsx
interface ServicePageProps {
  title: string;
  subtitle: string;
  aeoPlaceholder: string;
}

export default function ServicePageTemplate({ title, subtitle, aeoPlaceholder }: ServicePageProps) {
  return (
    <>
      <Section>
        <Placeholder type="text" title="AEO Block" description={aeoPlaceholder} height="sm" />
      </Section>

      <Placeholder type="hero" title={title} description={subtitle} height="md" />

      <Section>
        <Placeholder type="timeline" title="Process Timeline" description="What to expect: before, during, after" />
      </Section>

      <Section background="cream">
        <Placeholder type="gallery" title="Before/After Gallery" description="Treatment results with disclaimers" />
      </Section>

      <Section>
        <Placeholder type="faq" title="FAQ Section" description="Common questions with schema markup" />
      </Section>

      <Section background="cream">
        <Placeholder type="text" title="Intake CTA" description="Book your free skin analysis" />
      </Section>

      <Section>
        <Placeholder type="widget" title="Booking Widget" description="Salonized embed" />
      </Section>
    </>
  );
}
```

### 4.3 Persona Page Scaffold (Template)

```typescript
// components/templates/PersonaPageTemplate.tsx
interface PersonaPageProps {
  title: string;
  personaDescription: string;
  relatedTreatments: string[];
}
```

---

## 5. Integrations

### 5.1 Salonized Widget

```typescript
// components/integrations/SalonizedWidget.tsx

interface SalonizedWidgetProps {
  // Embed configuration from Salonized
}

// Implementation notes:
// - Load script only when component mounts (client-side)
// - Show loading state while widget loads
// - Lazy load on service pages only
```

### 5.2 Cookie Consent

```typescript
// components/integrations/CookieConsent.tsx

// Simple banner with:
// - Accept button
// - Decline button
// - Link to privacy policy

// Stores preference in localStorage
// GA4 only loads if accepted
```

### 5.3 Google Analytics

```typescript
// components/integrations/GoogleAnalytics.tsx

// Conditional loading based on cookie consent
// Uses next/script with strategy="afterInteractive"
```

---

## 6. Constants & Configuration

### 6.1 Routes

```typescript
// lib/constants.ts

export const ROUTES = {
  HOME: '/',

  // Service pages
  HUIDVERBETERING: '/huidverbetering',
  ENVIRON: '/huidverbetering/environ',
  PIGMENT: '/huidverbetering/pigment',
  LICHAAM: '/lichaam',
  ICOONE: '/lichaam/icoone',
  LASER: '/laserontharing',

  // Persona pages
  VOOR_WIE: '/voor-wie',
  NA_ZWANGERSCHAP: '/voor-wie/na-zwangerschap',
  MENOPAUZE: '/voor-wie/menopauze',
  SPORTERS: '/voor-wie/sporters',
  GEZOND_OUDER_WORDEN: '/voor-wie/gezond-ouder-worden',

  // Other pages
  HUIDANALYSE: '/huidanalyse',
  OVER_ONS: '/over-ons',
  CONTACT: '/contact',
  BOEKEN: '/boeken',
  QUIZ: '/skin-quiz',

  // Legal
  PRIVACY: '/privacy',
  VOORWAARDEN: '/algemene-voorwaarden',
} as const;

export const EXTERNAL_URLS = {
  WEBSHOP: 'https://webshop-url.com', // To be configured
  GOOGLE_MAPS: 'https://maps.google.com/?q=...', // To be configured
  INSTAGRAM: 'https://instagram.com/...', // To be configured
  FACEBOOK: 'https://facebook.com/...', // To be configured
} as const;
```

### 6.2 Navigation Config

```typescript
// lib/constants.ts

export const NAVIGATION = {
  main: [
    {
      label: 'Huidverbetering',
      href: ROUTES.HUIDVERBETERING,
      children: [
        { label: 'Environ - Anti-Aging', href: ROUTES.ENVIRON },
        { label: 'Me-Line - Pigment', href: ROUTES.PIGMENT },
      ],
    },
    {
      label: 'Lichaam & Contour',
      href: ROUTES.LICHAAM,
      children: [
        { label: 'iCoone', href: ROUTES.ICOONE },
      ],
    },
    { label: 'Laserontharing', href: ROUTES.LASER },
    {
      label: 'Voor Wie?',
      href: ROUTES.VOOR_WIE,
      children: [
        { label: 'Na Zwangerschap', href: ROUTES.NA_ZWANGERSCHAP },
        { label: 'Menopauze & Huid', href: ROUTES.MENOPAUZE },
        { label: 'Sporters', href: ROUTES.SPORTERS },
        { label: 'Gezond Ouder Worden', href: ROUTES.GEZOND_OUDER_WORDEN },
      ],
    },
    { label: 'Huidanalyse', href: ROUTES.HUIDANALYSE },
    { label: 'Over Ons', href: ROUTES.OVER_ONS },
    { label: 'Contact', href: ROUTES.CONTACT },
  ],
  legal: [
    { label: 'Privacy', href: ROUTES.PRIVACY },
    { label: 'Algemene Voorwaarden', href: ROUTES.VOORWAARDEN },
  ],
} as const;
```

---

## 7. Placeholder Content

```typescript
// content/placeholder.ts

export const PLACEHOLDER_CONTENT = {
  home: {
    hero: {
      title: '[Headline komt hier]',
      subtitle: '[Subheadline over premium huidgezondheid]',
      cta: 'Ontdek jouw huidtype',
    },
    intro: {
      title: '[Welkom bij Instituut Leanne]',
      body: '[Introductietekst over onze aanpak en expertise...]',
    },
  },

  services: {
    environ: {
      aeo: '[40-60 woorden directe antwoord over Environ anti-aging behandeling...]',
      title: 'Environ - Huidverjonging',
      subtitle: '[One-liner over de Essential Youth Reset]',
    },
    pigment: {
      aeo: '[40-60 woorden directe antwoord over Me-Line pigmentbehandeling...]',
      title: 'Me-Line - Pigmentbehandeling',
      subtitle: '[One-liner over exclusieve regionale behandeling]',
    },
    // ... etc
  },

  personas: {
    naZwangerschap: {
      title: 'Herstel na je Zwangerschap',
      intro: '[Intro tekst gericht op nieuwe moeders...]',
    },
    // ... etc
  },
};
```

---

## 8. Deployment

### 8.1 Vercel Setup

1. Connect GitHub repository to Vercel
2. Configure environment variables:
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID
   - `NEXT_PUBLIC_SALONIZED_KEY` - Salonized widget key (if needed)

### 8.2 Staging URL

- Auto-deploy on push to `main` branch
- Preview deployments for PRs
- Share staging URL with client for content review

---

## 9. Acceptance Criteria

Phase 1 is complete when:

- [ ] All pages from site architecture are accessible
- [ ] Navigation works on mobile and desktop
- [ ] Sticky booking CTA is visible on all pages
- [ ] Salonized widget loads on service pages
- [ ] Cookie consent banner appears
- [ ] GA4 fires after consent
- [ ] Site is deployed to staging URL
- [ ] Client can browse and understand page structure
- [ ] Placeholder content clearly indicates what's needed

---

## 10. Next Steps (Phase 2)

After Phase 1 approval:
1. Replace placeholders with actual content block components
2. Build service page template with real components
3. Implement AEO blocks with schema markup
4. Create Before/After gallery component
5. Build FAQ accordion with structured data
