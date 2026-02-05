# PRD.md: Instituut Leanne – Digital Ecosystem 2026 (Claude Code, Code-First)

**Version:** 1.0  
**Status:** Approved for Development  
**Strategic Horizon:** 2026 (AI-First / AEO / Privacy-Centric)  
**Core Concept:** "The Sentient Oasis" – A digital extension of the physical treatment room that anticipates needs before they are voiced.

**Primary build approach:** Code-first implementation using **Claude Code** as the main execution layer (instead of Webflow).  
**Animation requirement:** Use **Framer Motion**.  
**Repo requirement:** Use the **frontend-design skill** documented in `SKILL.md` inside the repo folder.

---

## 1. Executive Summary & Vision

The 2026 web presence for **Instituut Leanne** is not a brochure; it is an intelligent, agentic interface designed to bridge the gap between medical-grade results and high-end wellness (The "Twist").

### 1.1 Core Problem
The aesthetic market is bifurcated into:
- clinical/cold (results-focused)
- spa/fluff (relaxation-focused)

### 1.2 The Leanne Solution
"Medical results, wrapped in a warm blanket."

The website must exude this duality:
- high-tech precision (AEO/AI)
- wrapped in high-touch aesthetics (Functional Minimalism)

### 1.3 Key Strategic Objectives
1. **Dominate AEO (Answer Engine Optimization):** Become the canonical source for aesthetic queries in the Euroregion (Lanaken/Maastricht) for AI models like ChatGPT and Gemini.
2. **Psychographic Conversion:** Shift from service-based selling ("We offer Laser") to solution-based selling ("We solve your post-pregnancy insecurity").
3. **Zero-Party Data Acquisition:** Use an interactive diagnostic engine (The Quiz) to lower the €105 intake barrier.

---

## 2. Target Audience & Personas (The "Money Makers")

Based on the commercial focus pillars (Me-Line, Environ, Laser, iCoone), we define three core psychographic profiles.

### 2.1 Persona A: The Melasma Manager (Focus: Me-Line)
- **Demographics:** Female, 30–45, often post-pregnancy or hormonal changes.
- **Pain Point:** "I look tired/dirty because of these spots." Has tried creams that failed.
- **Digital Behavior:** Searches for "hyper-pigmentatie behandeling Maastricht". Reads deep technical content. Needs proof.
- **Site Goal:** Validate the "Exclusive Expert" status. Visualize the shedding process (transparency).

### 2.2 Persona B: The Conscious Ager (Focus: Environ & iCoone Menopause)
- **Demographics:** Female, 45+, affluent, values health over "fake" beauty.
- **Pain Point:** "I don't want Botox, I want healthy skin." Dealing with laxity/menopause.
- **Digital Behavior:** Appreciates scientific backing (Vitamin A step-up system).
- **Site Goal:** Educate on the long-term "Skin Gym" concept. Sell the lifestyle, not just the facial.

### 2.3 Persona C: The Efficiency Seeker (Focus: Laserontharing)
- **Demographics:** Female/Male (Sporter), 20–35.
- **Pain Point:** "Shaving is a waste of time/ingrown hairs hurt."
- **Digital Behavior:** Price-conscious but value-driven. Fears pain.
- **Site Goal:** Contrast "Leanne's Expertise" vs. "Budget Chains." Highlight the "No Limits" deal (€350).

---

## 3. Information Architecture (IA) & Sitemap

The navigation moves away from generic lists to "Agentic Guidance."

### 3.1 Global Navigation
1. **Home** (The Sentient Entry)
2. **Huidverbetering** (Environ & Me-Line)
3. **Lichaam & Contour** (iCoone & Cryolipolyse)
4. **Laserontharing** (Diode & Electrolysis)
5. **Voor Wie?** (Psychographic Landing Pages, New 2026 Strategy)
   - Na de Zwangerschap (Mommy Makeover)
   - De Menopauze & Huid
   - De Sporter (Focus on male laser)
6. **Shop & Advies** (External link + Intake info)
7. **Contact & Ligging** (Maastricht/Lanaken SEO Hub)

### 3.2 Hero Feature: The "Sentient" Home Page
- **Visual:** Full-screen ambient video (slow motion, soft textures, steam, hands), no generic stock models.
- **Audio:** Optional "Oasis Mode" toggle (plays binaural beats/calming spa soundscape).
- **Primary CTA:** "Start Jouw Huidanalyse" (The Quiz).
- **Secondary CTA:** "Direct Boeken" (Salonized Widget).

---

## 4. Functional Specifications & Features

### 4.1 The "Skin Code" Diagnostic Engine (Lead Magnet)
**Function:** An interactive quiz replacing the static "Contact Us."

**Logic:**
- Q1: Goal? (Pigment / Rimpels / Haren / Verslapping) → Segments into the 4 Pillars.
- Q2: Lifestyle? (Stress / Zon / Voeding) → Segments for Environ/Supplements.
- Q3: Location? (NL/BE) → Triggers specific SEO content/pricing logic if needed.

**The Hook:** "Ontdek wat jouw huid je probeert te vertellen."

**The Output (Lead Magnet):**
- Users do not just get a "Thank You."
- They receive a generated **"Digital Skin Blueprint" (PDF)** via email.
- Preview on site: a blurred visual of a customized "Adviesboekje" (Product routine + Treatment plan) to visualize the value of the €105 Intake.

### 4.2 The "Twist" Module (Visual Storytelling)
To prove the "Medical results + Wellness experience" USP:

**Interactive Hotspots:** An image of the treatment chair. Users hover to see:
- Verwarmde Wellness-bank
- Dikke donzen dekens
- Standaard schouder/nekmassage inbegrepen
- No-phone zone

**Purpose:** Justifies premium pricing over clinical competitors.

### 4.3 AEO Content Blocks (Inverted Pyramid)
**Implementation:** Every service page must have a no-fluff data block at the top for AI parsers.

**Structure:**
- H1: What is [Treatment]?
- Direct Answer (40–60 words): "[Treatment] is a [Method] for [Condition] using [Technology]. Results are visible after [Timeframe]. Price starts at [Price]."

**Why:** This increases the chance of being the featured snippet in Google and the cited source in ChatGPT search.

---

## 5. Content Strategy: The 4 Pillars

### 5.1 Pillar 1: Me-Line (Pigment)
- **Pricing Strategy:** Highlight the "Kuur van 4" (€125/treatment) + Free "Restore" product benefit.
- **Key Message:** "Hyperpigmentatie vraagt geen wonderen, maar wetenschap."
- **Feature:** Time-lapse graphic of the 2-month shedding/renewal process to manage expectations.

### 5.2 Pillar 2: Laserontharing
- **Pricing Strategy:** Push the "Full Body Extra: No Limits" (€350) as the hero product.
- **Key Message:** "Gecertificeerde expertise. Geen prijsvechter, wel resultaat."
- **Feature:** Interactive "Cost Calculator": Compare 5 years of shaving vs. 8 sessions of laser.

### 5.3 Pillar 3: Environ (Anti-Aging)
- **Pricing Strategy:** Focus on "Essential Youth Reset" (€115–130).
- **Key Message:** "Train je huid zoals je lichaam. Vitaminen zijn de dumbbells."
- **Feature:** Explainer animation of the "Step-Up System" (Why you can't start at level 5).

### 5.4 Pillar 4: iCoone (Body)
- **Pricing Strategy:** Position as a health investment (Post-partum/Menopause).
- **Key Message:** "Mechanische bindweefselmassage: Resultaat zonder mes."
- **Feature:** Before/After slider specifically for "Verslapping" and "Littekens" (C-section focus).

---

## 6. Technical Stack & Compliance (2026 Ready)

### 6.1 Platform (Original baseline and updated decision)

#### 6.1.2 Claude Code driven, code-first stack:
- The site is implemented in a Git repo.
- Claude Code is used to generate, modify, and refactor code, plus open PRs.
- Content editing is supported via a CMS and/or MDX as defined below.

**Recommended stack (aligned to AEO + performance + low maintenance):**
- **Frontend:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS or CSS Modules (implementation detail)
- **Animation:** Framer Motion (required)
- **Content:** Headless CMS (recommended) or Git-based MDX (alternative)
  - Recommended: Sanity CMS for non-dev edits
  - Alternative: MDX content in repo (lowest cost, less friendly editing)
- **Backend (quiz + PDF):** Next.js route handlers (serverless)
- **Data storage:** Supabase (or equivalent) for quiz sessions and consent logs
- **Email:** Transactional email provider (Resend/Postmark or equivalent)
- **PDF generation:** `@react-pdf/renderer` or `pdf-lib`
- **Hosting:** Vercel or Cloudflare Pages
- **Analytics:** Cookie-light analytics (Plausible or similar), plus server-side events where possible

**Salonized integration stays (still required):**
- Use Salonized widget embed, injected through a dedicated component and only loaded on pages that need it, to protect performance.

### 6.2 Compliance (The "Trust" Layer)
#### 6.2.1 AVG/GDPR
- Explicit "Privacy by Design" toggle for the Quiz (health data).
- Cookie-less analytics (server-side) where possible.

#### 6.2.2 Peppol Readiness
- Backend logic prepared for B2B e-invoicing (2026 mandatory in BE).
- Specific field in booking form for "BTW-nummer" validation for business clients (e.g., gyms/partners).

---

## 7. SEO & Local Strategy (The Dual-Region Protocol)

**Challenge:** Leanne sits on the BE/NL border.  
**Strategy:** Capture high-end Maastricht (NL) traffic while retaining Lanaken (BE) loyalty.

### 7.1 Geo-Landing Pages
- **Page A:** `/huidverbetering-maastricht`
  - Copy: "Slechts 10 minuten van het Vrijthof. Ontsnap de stadse drukte."
  - Keywords: "Beste schoonheidsspecialiste Maastricht," "Pigmentbehandeling Limburg."
- **Page B:** `/schoonheidsinstituut-lanaken`
  - Copy: "Uw lokale expert in medische esthetiek."
  - Keywords: "Laserontharing Lanaken," "Huidanalyse Lanaken."

### 7.2 Structured Data (Schema Markup)
- `MedicalBusiness`: Establish clinical authority.
- `Service`: Detailed schema for "LaserHairRemoval" and "SkinCare".
- `FAQPage`: Wrap all "Inverted Pyramid" answers in schema for AEO.
- `HasOfferCatalog`: Hardcode the Price List data (from the JPGs) into schema so AI can read current prices (e.g., "Mannen Rug + Schouders: €200").

---

## 8. The Lead Magnet: "Het Huid Advies Paspoort"

**Concept:** Instead of a generic "Newsletter," we offer a "Passport."

**Mechanism:**
1. User completes the Skin Quiz.
2. System generates a customized PDF "Passport" containing:
   - Their Skin Type Analysis.
   - The "Stop & Start" List: (e.g., "Stop using grainy scrubs, Start using Vitamin A").
   - The Investment Plan: A transparent cost estimate for their ideal Me-Line or Environ cure.
   - The Twist: A voucher for a "Free Add-on" (e.g., Extra hand massage) with their first booking.
3. Nurture Sequence: A 3-email flow educating them on why the Intake (€105) is the best money they will ever spend.

---

## 9. Implementation Roadmap

#### Phase 1: Foundation (code-first)
Deliverables:
- Next.js repo + deployment pipeline
- Base design system implementation aligned with frontend-design skill in `SKILL.md`
- Routing and page templates for key sections
- CMS models (if using headless CMS) or MDX scaffolding (if Git-based content)
- Salonized embed integrated and tested
- "Peppol-ready" backend structure prepared (fields and logic stubs, no invented external dependencies)

Claude Code tasks:
- Scaffold project
- Create template pages and shared components
- Add CI checks and basic testing harness
- Create `CLAUDE.md` guidance file for repo conventions and non-negotiables:
  - AEO block required on service pages
  - JSON-LD schema rules
  - Performance constraints
  - Accessibility standards
  - Framer Motion usage rules

#### Phase 2: Content (AEO first, pillar pages)
Deliverables:
- Pillar pages (Me-Line, Laserontharing, Environ, iCoone)
- AEO blocks for all treatment pages using the inverted pyramid structure
- Pricing items structured for OfferCatalog schema
- "Oasis" media sourced and integrated (video poster-first, lazy loaded)

Claude Code tasks:
- Implement AEOBlock component and enforcement
- Implement schema builders for Service, FAQPage, MedicalBusiness, OfferCatalog
- Create content ingestion or CMS wiring
- Add internal linking hooks for pillar and persona pages

#### Phase 3: The Quiz + PDF Lead Magnet
Deliverables:
- Multi-step quiz (Q1 goal, Q2 lifestyle, Q3 location)
- Consent UX including "Privacy by Design" toggle
- Storage of quiz sessions and consent logs
- On-site preview: blurred passport teaser
- PDF generator: "Digital Skin Blueprint" / "Huid Advies Paspoort"
- Email delivery of PDF
- 3-email nurture sequence

Claude Code tasks:
- Implement quiz UI and state management
- Implement serverless endpoints for submission, PDF generation, and email sending
- Add tests for segmentation logic and consent requirements
- Ensure data minimization and deletion path hooks (do not invent legal copy, only implement capability)

#### Phase 4: Local SEO
Deliverables:
- Geo landing pages for Maastricht and Lanaken
- SEO hub behavior under "Contact & Ligging"
- Structured data validated on geo and service pages
- Sitemap and robots configuration

Claude Code tasks:
- Implement geo templates and internal linking
- Validate schema presence and correctness in CI
- Add performance checks for geo pages

#### Phase 5: Launch
Deliverables:
- "Sentient" features live: Oasis hero, audio toggle, Twist hotspots, quiz, booking widget
- Performance pass and accessibility pass
- Monitoring hooks and lightweight analytics setup

Claude Code tasks:
- Fix final QA issues through PRs
- Add regression checks where feasible
- Produce release PR and deployment notes

---

## 10. Codebase, Workflow, and Operational Requirements (Claude Code driven)

### 10.1 Claude Code as primary execution layer
- Claude Code is used for:
  - generating initial scaffolding
  - implementing features described in this PRD
  - refactors and consistency enforcement
  - creating PRs and iterating on review feedback

### 10.2 GitHub workflow (optional but supported)
- Optionally enable a Claude-based PR workflow where `@claude` can implement tasks and open PRs.
- This PRD requires that all work be tracked via Issues and PRs, not ad-hoc changes.

### 10.3 Definition of Done (DoD)
For a feature or page to be considered done:
- Meets functional requirements described in this PRD section-by-section
- Has required AEO block where applicable
- Has required JSON-LD structured data where applicable
- Passes accessibility baseline checks
- Meets performance budget targets (mobile-first)
- Includes tests where logic is non-trivial (quiz segmentation, PDF generation)
- Includes analytics events where explicitly required (quiz start, quiz completion, booking click), using cookie-light approach

---

## 11. Design and UX Requirements (Functional Minimalism + Sentient Oasis)

### 11.1 Visual style
- High-end, warm, minimal, with a clear clinical credibility layer.
- No generic stock model feel in hero media.

### 11.2 Interaction and animation
- Use Framer Motion for motion and transitions.
- Respect reduced-motion user preferences.
- Avoid animation that harms performance or blocks content rendering.

### 11.3 Accessibility
- Keyboard support for hotspots and interactive modules
- Semantic headings and consistent page structure
- Clear focus states and readable contrast

---

## 12. Component and Page Requirements (Implementation mapping)

### 12.1 Core reusable components
- `AEOBlock` (required on service pages, 40–60 word direct answer, plus schema hooks)
- `TwistHotspots` (treatment chair hotspots, accessible hover and focus)
- `SalonizedWidget` (safe script injection, loaded only on relevant pages)
- `BeforeAfterSlider` (for iCoone use cases, includes disclaimers)
- `CostCalculator` (laser: shaving vs. laser comparison)
- `StepUpExplainer` (Environ: step-up system explanation animation)
- `Quiz` multi-step engine with consent handling
- `PassportPreview` (blurred teaser)
- `Schema` utilities (MedicalBusiness, Service, FAQPage, OfferCatalog)

### 12.2 Page templates
- Home template (Oasis hero + CTAs)
- Pillar service template (AEO + deep content + FAQ + CTA)
- Persona landing template ("Voor Wie?")
- Geo landing template (Maastricht and Lanaken)
- Contact and location hub template

---

## 13. Data and Content Model Requirements (No invented fields beyond what's needed)
If using a headless CMS, minimum models:
- **Treatment**
  - Title
  - AEO direct answer
  - Body content blocks
  - FAQs
  - Price references (not necessarily full price list)
  - Media references (hero)
  - Schema toggles and metadata
- **PricingItem**
  - Service name
  - Zone or variant (e.g., "Mannen Rug + Schouders")
  - Price value
  - Optional duration
- **PersonaLanding**
  - Narrative
  - Recommended treatments
  - Proof and trust blocks
- **GeoLanding**
  - Travel copy
  - Local proof
  - Internal links to treatments and personas
- **BeforeAfterSet**
  - Images
  - Tags (verslapping, littekens, etc.)
  - Disclaimer text reference