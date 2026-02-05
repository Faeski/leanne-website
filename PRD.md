# Product Requirements Document: Instituut Leanne Website

**Version:** 2.0
**Last Updated:** February 2025
**Status:** Approved for Development

---

## 1. Executive Summary

Instituut Leanne is a premium beauty and skin health salon in Lanaken, Belgium (near Maastricht, NL). This website will serve as the primary digital presence, focusing on **four core treatments** ("Money Makers") while emphasizing the salon's unique positioning as certified skin health experts rather than generic beauty services.

### Core Objectives
1. **AEO-First Content Strategy** - Optimize for AI search engines (ChatGPT, Gemini) with direct-answer content blocks
2. **Lead Generation via Quiz** - "Skin Code" diagnostic engine as primary conversion tool
3. **Regional SEO** - Capture both Belgian and Dutch (Maastricht) markets
4. **Premium Positioning** - Communicate expertise, warmth, and clinical credibility

### Key Decisions (from stakeholder interview)
- **Content-first approach**: Build scaffold for content exploration before visual design
- **Static content**: Developer-maintained MDX (no CMS needed)
- **GA4 required**: With simple GDPR cookie consent banner
- **True mobile-first**: Design for mobile, enhance for desktop
- **Pricing via Salonized only**: No pricing tables on website

---

## 2. Business Context

### 2.1 The Four "Money Makers"

| Treatment | Brand | Target | Key Message |
|-----------|-------|--------|-------------|
| **Pigmentbehandeling** | Me-Line | Women 30+, hormonal pigmentation | Exclusive regional treatment, medical precision |
| **Laserontharing** | Diode | Men & Women 20-60, athletes | Certified expertise (Sharon), personal attention |
| **Huidverjonging** | Environ | Women 40+, health-conscious | "Skin Gym" lifestyle, step-up system |
| **Huidversteviging** | iCoone | Women 30-70, post-pregnancy, menopause | Results without surgery, lymphatic massage |

### 2.2 Unique Selling Points (USPs)

1. **Premium Comfort** - Heated treatment chairs, blankets, full adjustability
2. **Complimentary Massage** - Facial massage included with every treatment (except peelings)
3. **"Me-Time" Focus** - No phones, minimal disruptions, private environment, ambient music
4. **Certified Expertise** - Specific training and certifications (Sharon's laser certificate as proof)

### 2.3 Competitive Positioning

- **Not competing on price** - Premium positioning
- **Differentiator**: "Huidgezondheid" (skin health) vs. generic "schoonheid" (beauty)
- **Main competitor**: Zenza (strong Instagram, large webshop) - we focus on expertise, not volume

### 2.4 Webshop Integration

External webshop exists on separate domain. Integration approach:
- Simple external links to webshop
- Contextual product recommendations on service pages (e.g., Environ step-up products on Environ page)
- Links show professionalism and complete offering

---

## 3. Target Personas

### 3.1 Primary Personas

#### Persona 1: "De Melasma Manager" (Pigment)
- **Demographics**: Woman, 30+
- **Trigger**: Hormonal pigmentation (pregnancy mask, pill, screen exposure)
- **Mindset**: Visible spots cause insecurity, wants proven solution
- **Season**: Prefers autumn/winter treatment (sun sensitivity)
- **Key concern**: Will it really work? (needs expectation management)

#### Persona 2: "De Bewuste Verouderaar" (Anti-Aging)
- **Demographics**: Woman, 40+
- **Trigger**: Wants to age healthily, not just look younger
- **Mindset**: Health-conscious, seeks science-backed solutions, busy lifestyle
- **Interest**: Environ's step-up system appeals to methodical approach
- **Key concern**: Not anti-Botox, but prefers natural skin health improvement

#### Persona 3: "De Efficiency Zoeker" (Laser)
- **Demographics**: Men & Women, 20-60
- **Trigger**: Tired of shaving, wants permanent solution
- **Sub-segment**: Athletes (especially men) - performance/hygiene motivation
- **Key concern**: Pain and cost vs. long-term benefit

#### Persona 4: "De Hersteller" (Body Contouring)
- **Demographics**: Women, 30-70
- **Triggers**: Post-pregnancy body changes OR menopause skin laxity
- **Mindset**: Wants non-surgical improvement, realistic expectations
- **Key concern**: Does it actually work? (needs before/after proof)

### 3.2 Persona Landing Pages

| Page | URL | Primary Persona | Treatment Focus |
|------|-----|-----------------|-----------------|
| Na Zwangerschap | `/voor-wie/na-zwangerschap` | Post-pregnancy women | iCoone |
| Menopauze & Huid | `/voor-wie/menopauze` | Menopausal women | Environ + iCoone |
| Sporters | `/voor-wie/sporters` | Athletes (male focus) | Laser |
| Gezond Ouder Worden | `/voor-wie/gezond-ouder-worden` | Health-conscious 40+ | Environ |

---

## 4. Site Architecture

### 4.1 Navigation Structure

```
Home (/)
├── Huidverbetering (/huidverbetering)
│   ├── Environ - Anti-Aging (/huidverbetering/environ)
│   └── Me-Line - Pigment (/huidverbetering/pigment)
├── Lichaam & Contour (/lichaam)
│   └── iCoone (/lichaam/icoone)
├── Laserontharing (/laserontharing)
├── Voor Wie? (/voor-wie)
│   ├── Na Zwangerschap (/voor-wie/na-zwangerschap)
│   ├── Menopauze & Huid (/voor-wie/menopauze)
│   ├── Sporters (/voor-wie/sporters)
│   └── Gezond Ouder Worden (/voor-wie/gezond-ouder-worden)
├── Huidanalyse (/huidanalyse)
├── Over Ons (/over-ons)
└── Contact (/contact)
```

### 4.2 Additional Pages

- **Geo Landing Pages** (same content, localized keywords):
  - `/huidverbetering-maastricht`
  - `/laserontharing-maastricht`
  - `/schoonheidsinstituut-lanaken`

- **Quiz Page**: `/skin-quiz` (Skin Code Diagnostic Engine)

- **Legal Pages**:
  - `/privacy`
  - `/algemene-voorwaarden`

### 4.3 Booking Integration

- **Sticky CTA**: Floating booking button on all pages
- **Embedded Widget**: Salonized widget on service pages
- **Dedicated Page**: `/boeken` for full booking experience

---

## 5. Content Strategy

### 5.1 AEO (Answer Engine Optimization)

**Priority: CRITICAL**

Every service page must include an AEO block at the top:
- 40-60 words direct answer to the primary search intent
- Structured for AI parsing (ChatGPT, Gemini, Perplexity)
- Schema.org markup (FAQPage, MedicalBusiness, Service)

**Example AEO Block:**
```
"Me-Line pigmentbehandeling verwijdert hardnekkige pigmentvlekken zoals
melasma en zwangerschapsmasker via een medische peeling-kuur. De behandeling
duurt 4-6 sessies over 2-3 maanden. Instituut Leanne in Lanaken is de enige
gecertificeerde aanbieder in de regio Maastricht."
```

### 5.2 Service Page Content Blocks

Each service page includes (in order):

1. **AEO Block** - Direct answer (40-60 words)
2. **Hero Section** - Treatment name, one-liner, primary CTA
3. **Process Timeline** - What to expect: before, during, after
4. **Before/After Gallery** - Visual proof with disclaimers
5. **FAQ Accordion** - Common questions (schema markup)
6. **Intake CTA** - Link to skin analysis booking
7. **Booking Widget** - Embedded Salonized

**Interactive Elements (Phase 4 - placeholder for now):**
- TwistHotspots (treatment chair features)
- StepUpExplainer (Environ system animation)
- Cost Calculator (laser vs. shaving comparison)

### 5.3 Tone of Voice

**Direction**: Warm + Clinical Credibility

| Do | Don't |
|----|-------|
| Speak with expertise and confidence | Sound cold or intimidating |
| Be honest about limitations | Overpromise results |
| Emphasize skin health over beauty | Use fluffy spa language |
| Address concerns directly | Hide downsides in fine print |

**Honesty Approach**: Present limitations balanced with benefits (not leading with negatives, but not hiding them either)

**Dependency**: Brand voice guidelines to be created from Instagram/newsletter content analysis.

### 5.4 Proof Elements Available

- Sharon's laser certification (photo available)
- Before/after treatment photos
- Google Business reviews (good existing reviews)
- Additional certifications/diplomas

---

## 6. Technical Stack

### 6.1 Confirmed Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Next.js 14+ (App Router) | TypeScript required |
| Styling | Tailwind CSS | Mobile-first approach |
| Animation | Framer Motion | For high-impact moments |
| Content | Static MDX | Developer-maintained |
| Hosting | Vercel | Recommended |
| Analytics | GA4 | With cookie consent |
| Booking | Salonized | Widget embed |

### 6.2 Cookie Consent

- Simple accept/decline banner (GDPR compliant)
- GA4 only loads after consent
- No complex consent manager needed

### 6.3 Performance Requirements

- Core Web Vitals: Green scores
- Salonized widget: Lazy load on relevant pages only
- Images: Next.js Image optimization
- Fonts: Self-hosted, preloaded

---

## 7. Quiz: Skin Code Diagnostic Engine

### 7.1 Purpose

Primary lead magnet and conversion tool. Segments visitors into treatment paths.

### 7.2 Quiz Flow (Content Structure)

**Question 1: Goal**
- Pigment verminderen → Me-Line path
- Rimpels verminderen → Environ path
- Ontharing → Laser path
- Huid verstevigen → iCoone path

**Question 2: Lifestyle Factors**
- Stress level
- Sun exposure
- Nutrition habits
→ Influences secondary recommendations (supplements, home care)

**Question 3: Location**
- België
- Nederland (Maastricht regio)
→ SEO/pricing logic, travel information

### 7.3 Quiz Output

- **Primary CTA**: Download personalized "Huid Advies Paspoort" (PDF)
- **Secondary CTA**: Book free skin analysis (soft sell)
- **Email capture**: Required for PDF delivery

### 7.4 Implementation Phases

- **Phase 1 (Scaffold)**: Define questions, flow, and content structure
- **Phase 3 (Full)**: PDF generation, email delivery, nurture sequence

---

## 8. Intake / Skin Analysis

### 8.1 Positioning

The intake is a **key conversion tool** - low-commitment entry point for all treatments except laser.

### 8.2 What Client Receives

1. Personalized "adviesboekje" (advice booklet)
2. Skin assessment with work points
3. Treatment plan recommendation
4. Product samples to try at home

### 8.3 Page Strategy

- **Dedicated page**: `/huidanalyse` with full explanation and booking
- **Mentioned on service pages**: Each treatment page references intake as first step
- **Quiz integration**: Quiz can lead to intake booking as CTA

---

## 9. Development Phases

### Phase 1: Foundation & Scaffold
**Goal**: Deployable staging site for content exploration

- Next.js project setup with TypeScript
- Design system tokens (colors, typography, spacing)
- Layout components (navigation, footer, mobile menu)
- All pages scaffolded with placeholder content
- Salonized widget integration
- GA4 + cookie consent

**Deliverable**: Live staging URL for client content review

### Phase 2: Content & AEO
**Goal**: Complete content architecture

- Service page template (Environ as reference implementation)
- All content block components (AEO, FAQ, Timeline, Gallery)
- Schema.org structured data
- Persona landing pages
- Geo landing pages
- Intake page

**Deliverable**: All pages with real content blocks (copy TBD)

### Phase 3: Quiz & Lead Magnet
**Goal**: Functional lead generation

- Multi-step quiz component
- PDF generation (Huid Advies Paspoort)
- Email delivery (Resend/Postmark)
- Supabase for quiz sessions and consent
- 3-email nurture sequence

**Deliverable**: Working quiz with PDF delivery

### Phase 4: Polish & Launch
**Goal**: Production-ready website

- Interactive elements (TwistHotspots, StepUpExplainer, etc.)
- Performance optimization
- Accessibility audit (WCAG 2.1 AA)
- SEO validation (schema testing, sitemap)
- "Oasis Mode" audio feature (optional)
- Launch checklist completion

**Deliverable**: Production launch

---

## 10. Success Metrics

### 10.1 Primary KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Quiz completions | 50+/month | GA4 events |
| Intake bookings | 20+/month | Salonized data |
| Organic traffic growth | +30% in 6 months | GA4 |
| AEO citations | Appear in AI answers | Manual monitoring |

### 10.2 Secondary KPIs

- Time on site (engagement)
- Pages per session
- Mobile vs. desktop ratio
- Geo distribution (BE vs. NL)

---

## 11. Dependencies & Blockers

### 11.1 Required Before Development

| Item | Status | Owner |
|------|--------|-------|
| Salonized embed code | Ready | Developer |
| Brand voice guidelines | Pending | Developer (create from Instagram/newsletter) |

### 11.2 Required Before Content

| Item | Status | Owner |
|------|--------|-------|
| Professional photos (salon, team) | In progress | Leanne |
| Before/after images | Available | Leanne |
| Certification photos | Available | Leanne |
| Final copy/messaging | Pending | TBD after brand voice |

### 11.3 Required Before Launch

| Item | Status | Owner |
|------|--------|-------|
| Domain configuration | Pending | Leanne |
| Google Business Profile optimization | Pending | Leanne |
| Email provider setup (Resend/Postmark) | Pending | Developer |

---

## 12. Open Items (Non-Blocking)

These can be refined during implementation:

1. Exact color palette (waiting for brand guidelines)
2. Specific copy/messaging (waiting for brand voice document)
3. Before/after image selection (client provides)
4. "Oasis Mode" audio feature scope (optional Phase 4)

---

## Appendix A: Page Inventory

| Page | Template | Priority | Phase |
|------|----------|----------|-------|
| Home | Custom | P0 | 1 |
| Environ (Anti-Aging) | Service | P0 | 2 |
| Me-Line (Pigment) | Service | P0 | 2 |
| iCoone (Body) | Service | P0 | 2 |
| Laserontharing | Service | P0 | 2 |
| Huidanalyse | Custom | P0 | 2 |
| Na Zwangerschap | Persona | P1 | 2 |
| Menopauze | Persona | P1 | 2 |
| Sporters | Persona | P1 | 2 |
| Gezond Ouder Worden | Persona | P1 | 2 |
| Over Ons | Custom | P1 | 2 |
| Contact | Custom | P1 | 1 |
| Skin Quiz | Custom | P1 | 3 |
| Geo: Maastricht (x2) | Geo | P2 | 2 |
| Geo: Lanaken | Geo | P2 | 2 |
| Privacy | Legal | P2 | 1 |
| Voorwaarden | Legal | P2 | 1 |

---

## Appendix B: Reference Documents

- `/input/Leanne input.md` - Original strategic briefing from client interview
- `/docs/phase-1-scaffold.md` - Technical spec for Phase 1
- `/docs/phase-2-content.md` - Technical spec for Phase 2
- `/docs/phase-3-quiz.md` - Technical spec for Phase 3
- `/docs/phase-4-launch.md` - Technical spec for Phase 4
