# Architecture Documentation: Instituut Leanne Website

## Overview

This is a Next.js 16 (App Router) marketing website for Instituut Leanne, a premium beauty and skin health salon in Lanaken, Belgium.

## Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | Next.js 16 (App Router) | Server-side rendering, static generation |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS v4 | Utility-first CSS with CSS-based config |
| Animation | Framer Motion | Page transitions and micro-interactions |
| Hosting | Vercel (planned) | Edge deployment |
| Analytics | GA4 | With GDPR cookie consent |
| Booking | Salonized | Embedded widget |

## Directory Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with nav, footer, analytics
│   ├── page.tsx                 # Homepage
│   ├── huidverbetering/         # Skin improvement service pages
│   │   ├── page.tsx             # Overview
│   │   ├── environ/page.tsx     # Environ anti-aging
│   │   └── pigment/page.tsx     # Me-Line pigment
│   ├── lichaam/                 # Body treatment pages
│   │   ├── page.tsx             # Overview
│   │   └── icoone/page.tsx      # iCoone body contouring
│   ├── laserontharing/page.tsx  # Laser hair removal
│   ├── voor-wie/                # Persona-based landing pages
│   │   ├── page.tsx             # Overview
│   │   ├── na-zwangerschap/     # Post-pregnancy
│   │   ├── menopauze/           # Menopause
│   │   ├── sporters/            # Athletes
│   │   └── gezond-ouder-worden/ # Healthy aging
│   ├── huidanalyse/page.tsx     # Free skin analysis
│   ├── over-ons/page.tsx        # About us
│   ├── contact/page.tsx         # Contact info
│   ├── boeken/page.tsx          # Booking page
│   ├── privacy/page.tsx         # Privacy policy
│   ├── algemene-voorwaarden/    # Terms and conditions
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # Robots.txt config
│
├── components/
│   ├── layout/                  # Global layout components
│   │   ├── Navigation.tsx       # Sticky header with mobile menu
│   │   ├── MobileMenu.tsx       # Full-screen mobile overlay
│   │   ├── Footer.tsx           # Site footer
│   │   └── BookingCTA.tsx       # Floating/inline booking button
│   │
│   ├── shared/                  # Reusable UI components
│   │   ├── Container.tsx        # Max-width container
│   │   ├── Section.tsx          # Page section with spacing
│   │   └── Placeholder.tsx      # Content placeholder for scaffold
│   │
│   ├── templates/               # Page templates
│   │   ├── ServicePageTemplate.tsx  # For treatment pages
│   │   └── PersonaPageTemplate.tsx  # For persona pages
│   │
│   └── integrations/            # Third-party integrations
│       ├── SalonizedWidget.tsx  # Booking widget
│       ├── CookieConsent.tsx    # GDPR consent banner
│       └── GoogleAnalytics.tsx  # GA4 conditional loading
│
├── content/
│   └── placeholder.ts           # Placeholder content for all pages
│
├── lib/
│   ├── constants.ts             # Routes, navigation, contact info
│   └── utils.ts                 # Utility functions (cn)
│
├── styles/
│   └── globals.css              # Tailwind imports + theme config
│
└── types/
    └── index.ts                 # TypeScript interfaces
```

## Key Patterns

### 1. Flat Architecture (SEO)
All content is reachable in ≤3 clicks from homepage:
- Home → Service Overview → Specific Service
- Home → For Who Overview → Persona Page

### 2. Mobile-First Design
- Components designed for mobile viewport first
- Desktop enhancements via responsive breakpoints
- Sticky booking CTA on mobile

### 3. AEO (Answer Engine Optimization)
Service pages include AEO blocks at the top:
- 40-60 word direct answers for AI search engines
- Schema.org markup (planned for Phase 2)

### 4. Cookie Consent Flow
1. User sees consent banner on first visit
2. Choice stored in localStorage
3. GA4 only loads after explicit consent

### 5. Component Composition
- `Section` + `Container` for consistent spacing
- Templates for repeated page patterns
- Placeholder component for content scaffolding

## Design System

### Colors (CSS Custom Properties)
```css
--color-primary-*   /* Warm terracotta tones */
--color-neutral-*   /* Warm grays */
--color-accent-*    /* Teal CTAs */
```

### Typography
- Display font: Playfair Display (serif)
- Body font: Inter (sans-serif)
- Font sizes: display-lg/md/sm, body-lg/md/sm

### Spacing
- Section padding: 4rem (mobile) / 6rem (desktop)
- Container padding: 1.5rem (mobile) / 2rem (desktop)

## Environment Variables

```env
NEXT_PUBLIC_GA_ID=          # Google Analytics 4 Measurement ID
NEXT_PUBLIC_SALONIZED_KEY=  # Salonized widget key (if needed)
```

## Development Phases

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Foundation | ✅ Complete | Scaffold with placeholders |
| 2. Content | Pending | Real content blocks, schema markup |
| 3. Quiz | Pending | Lead generation engine |
| 4. Polish | Pending | Interactive elements, launch |

## Running Locally

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```
