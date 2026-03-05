# Premium UI Redesign Audit

**Date:** 2026-03-03
**Phase:** 4 (Polish & Launch)
**Branch:** `claude/premium-ui-redesign-Sx9es`
**Status:** Audit complete, awaiting approval to implement

---

## Current State Summary

Phases 1-3 are fully complete. The site is functionally ready (scaffold, content, quiz with PDF/email). Recent commits added animated star backgrounds to the process timeline and the StepUpExplainer component for Environ pages. The overall codebase is clean and well-structured.

---

## Audit Findings

### 1. Home Page Quiz CTA — Still a Phase 3 Placeholder

**File:** `src/app/page.tsx:86-106`

The quiz is fully built and functional at `/skin-quiz`, but the home page still shows a dashed-border placeholder box with the text _"Quiz komt beschikbaar in Phase 3"_. This is the most obvious issue — it makes the site look unfinished.

**Fix:** Replace the placeholder with a polished CTA card linking to `/skin-quiz`. Use a visually premium treatment (gradient background, icon, clear CTA button).

---

### 2. Home Page Hero — Plain Text, No Visual Impact

**File:** `src/app/page.tsx:38-59`

The hero is centered text on a cream background with a dark pill-shaped button. For a premium beauty salon, this feels generic and understated. There are no entrance animations, no decorative elements, and no imagery.

**Fix:** Add staggered entrance animations (fade-in + slide-up for title, subtitle, CTA). Consider adding a subtle decorative element or gradient to create atmosphere. Keep it elegant, not busy.

---

### 3. No Scroll-Triggered Animations

**File:** `src/app/page.tsx` (entire page)

The home page has no `"use client"` directive and no motion/animation. Every section appears instantly with no reveal effect. The service page template already uses Framer Motion (`whileInView`) for the StepUpExplainer and ProcessTimeline, but the home page has none of this polish.

**Fix:** Add `"use client"` and use Framer Motion `whileInView` for staggered section reveals. Apply to:
- Introduction text
- Treatment card grid (stagger each card)
- USP items (stagger each item)
- Quiz CTA
- Intake CTA

---

### 4. USP Section — Basic Styling

**File:** `src/app/page.tsx:108-131`

The USP section uses plain circle icons (`bg-neutral-100` circles) with text underneath. This looks functional but doesn't communicate "premium." No hover effects, no visual depth.

**Fix:** Upgrade to subtle card-style containers with a soft shadow or border, and add hover interaction. The icons could use the primary color palette instead of neutral gray.

---

### 5. Treatment Cards — No Entry Animation

**File:** `src/components/content/TreatmentCardGrid.tsx`

Treatment cards appear statically. On a premium site, these should have a staggered reveal animation as the user scrolls to them.

**Fix:** Wrap cards with Framer Motion `whileInView` with staggered delays.

---

### 6. Color Palette — Accent Still Marked as Placeholder

**File:** `src/styles/globals.css:29-31`

The accent color (teal `#0d9488`) has a comment: _"Accent - for CTAs (placeholder)"_. The primary terracotta palette is warm and premium, but the teal accent feels disconnected from the warm tone.

**Fix:** Consider a warmer accent that complements the terracotta palette — e.g., a deep warm gold or a richer rose. Or keep teal but remove the "placeholder" comment if it's intentional.

---

### 7. Typography — Using Inter for Body

**File:** `src/app/layout.tsx`, `src/styles/globals.css`

Inter is a solid choice but is explicitly called out in the SKILL.md design guidelines as a font to avoid for distinctive premium aesthetics. Playfair Display for headings is a good choice. The body font could be more distinctive.

**Note:** This is a lower-priority, higher-risk change. Inter is clean and readable. Changing body font affects the entire site. Only do this if the client wants a more distinctive feel.

---

### 8. Intake CTA Component — Could Be More Premium

**File:** `src/components/content/IntakeCTA.tsx`

Not yet reviewed in detail, but the home page renders it with passed-in props. Worth checking if it matches the premium vision.

---

## Recommended Implementation Order

| Priority | Change | Impact | Complexity |
|----------|--------|--------|------------|
| **P0** | Fix quiz CTA (replace Phase 3 placeholder) | High — site looks unfinished | Low |
| **P1** | Add hero entrance animations | High — first impression | Low |
| **P1** | Add scroll-reveal animations to all home sections | High — premium feel | Medium |
| **P2** | Upgrade USP section styling | Medium — polish | Low |
| **P2** | Add treatment card stagger animations | Medium — polish | Low |
| **P3** | Refine accent color | Low — cosmetic | Low |
| **P3** | Consider body font change | Low — risky | Medium |

---

## Files That Will Be Modified

- `src/app/page.tsx` — Main changes (animations, quiz CTA, USP styling)
- `src/components/content/TreatmentCardGrid.tsx` — Add stagger animations
- `src/styles/globals.css` — Possible accent color refinement

---

## Next Steps

1. Get approval on priorities above
2. Implement P0 (quiz CTA fix) first — quick win
3. Then P1 (hero + scroll animations) — biggest visual impact
4. Then P2 (USP + treatment card polish)
5. Commit and push
