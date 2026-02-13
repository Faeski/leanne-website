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
| Database | Supabase | Quiz session storage, lead management |
| Email | Resend | Transactional emails with PDF attachments |
| Background Jobs | Inngest | Email nurture sequence scheduling |
| PDF Generation | @react-pdf/renderer | Personalized "Huid Advies Paspoort" |

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
│   ├── skin-quiz/page.tsx       # Skin Code diagnostic quiz
│   ├── huidanalyse/page.tsx     # Free skin analysis
│   ├── over-ons/page.tsx        # About us
│   ├── contact/page.tsx         # Contact info
│   ├── boeken/page.tsx          # Booking page
│   ├── privacy/page.tsx         # Privacy policy
│   ├── algemene-voorwaarden/    # Terms and conditions
│   ├── api/                     # API routes
│   │   ├── quiz/                # Quiz API endpoints
│   │   │   ├── start/           # Create new quiz session
│   │   │   ├── answer/          # Save quiz answers
│   │   │   ├── complete/        # Complete quiz, trigger emails
│   │   │   └── pdf/             # Generate PDF download
│   │   ├── inngest/             # Inngest background job handler
│   │   └── unsubscribe/         # Email unsubscribe endpoint
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
│   ├── content/                 # Content block components
│   │   ├── AEOBlock.tsx         # AI-optimized answer blocks
│   │   ├── FAQAccordion.tsx     # FAQ with Schema.org
│   │   ├── ProcessTimeline.tsx  # Before/During/After steps
│   │   ├── TreatmentGrid.tsx    # Service preview cards
│   │   └── ...                  # Other content blocks
│   │
│   ├── quiz/                    # Quiz components
│   │   ├── Quiz.tsx             # Main quiz container
│   │   ├── QuizProgress.tsx     # Step indicator
│   │   ├── QuizQuestion.tsx     # Question display
│   │   ├── QuizOption.tsx       # Selectable option card
│   │   ├── QuizEmailCapture.tsx # Email form with consent
│   │   ├── QuizResults.tsx      # Results + PDF download
│   │   └── QuizStart.tsx        # Start screen
│   │
│   ├── pdf/                     # PDF generation
│   │   └── QuizPDFTemplate.tsx  # @react-pdf/renderer template
│   │
│   └── integrations/            # Third-party integrations
│       ├── SalonizedWidget.tsx  # Booking widget
│       ├── CookieConsent.tsx    # GDPR consent banner
│       └── GoogleAnalytics.tsx  # GA4 conditional loading
│
├── content/
│   ├── services/                # Service page content
│   ├── personas/                # Persona page content
│   ├── pages/                   # Core page content
│   └── quiz.ts                  # Quiz questions, recommendations, emails
│
├── lib/
│   ├── constants.ts             # Routes, navigation, contact info
│   ├── utils.ts                 # Utility functions (cn)
│   ├── schema.tsx               # Schema.org generators
│   ├── quiz/                    # Quiz logic
│   │   ├── types.ts             # Quiz TypeScript interfaces
│   │   └── recommendations.ts   # Result generation logic
│   ├── supabase/                # Database clients
│   │   ├── client.ts            # Browser client
│   │   └── server.ts            # Server/admin client
│   └── email/                   # Email system
│       ├── client.ts            # Resend client setup
│       └── templates.tsx        # React email templates
│
├── inngest/                     # Background job system
│   ├── client.ts                # Inngest client
│   └── functions.ts             # Email sequence functions
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
# Analytics
NEXT_PUBLIC_GA_ID=          # Google Analytics 4 Measurement ID

# Booking
NEXT_PUBLIC_SALONIZED_KEY=  # Salonized widget key (if needed)

# Database (Supabase)
NEXT_PUBLIC_SUPABASE_URL=   # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY=  # Supabase service role key (server only)

# Email (Resend)
RESEND_API_KEY=             # Resend API key for transactional emails

# Background Jobs (Inngest)
INNGEST_EVENT_KEY=          # Inngest event key
INNGEST_SIGNING_KEY=        # Inngest signing key

# Site URL
NEXT_PUBLIC_SITE_URL=       # Production site URL for email links
```

## Development Phases

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Foundation | ✅ Complete | Scaffold with placeholders |
| 2. Content | ✅ Complete | Real content blocks, schema markup |
| 3. Quiz | ✅ Complete | Lead generation engine, PDF, email sequence |
| 4. Polish | Pending | Interactive elements, launch |

## Running Locally

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```
