# Phase 4: Polish & Launch

**Goal**: Production-ready website with all features complete
**Deliverable**: Live website ready for public launch

**Prerequisite**: Phase 3 quiz & lead magnet functional

---

## 1. Overview

Phase 4 transforms the functional website into a polished, production-ready experience. This phase focuses on:

1. Building interactive elements (deferred from earlier phases)
2. Performance optimization
3. Accessibility compliance
4. SEO validation
5. Final polish and launch preparation

---

## 2. Interactive Elements

### 2.1 TwistHotspots (Treatment Chair)

**Purpose**: Showcase the premium comfort USP through interactive exploration.

**Concept**: An image of the treatment chair with clickable/hoverable hotspots that reveal information about comfort features.

```typescript
// components/interactive/TwistHotspots.tsx

interface Hotspot {
  id: string;
  x: number;  // Percentage position
  y: number;
  title: string;
  description: string;
  icon?: string;
}

interface TwistHotspotsProps {
  image: string;
  hotspots: Hotspot[];
}

// Hotspot content:
const treatmentChairHotspots: Hotspot[] = [
  {
    id: 'heating',
    x: 45,
    y: 60,
    title: 'Verwarmde Stoel',
    description: 'De stoel is heerlijk verwarmd voor optimaal comfort tijdens je behandeling.',
  },
  {
    id: 'blanket',
    x: 30,
    y: 40,
    title: 'Zacht Dekentje',
    description: 'Je ligt onder een zacht dekentje - net als thuis, maar dan beter.',
  },
  {
    id: 'adjustable',
    x: 70,
    y: 50,
    title: 'Volledig Verstelbaar',
    description: 'De stoel past zich aan aan jouw lichaam voor de perfecte positie.',
  },
  {
    id: 'cushioning',
    x: 50,
    y: 30,
    title: 'Premium Kussens',
    description: 'Zachte, hoogwaardige materialen voor maximale ontspanning.',
  },
];
```

**Interaction Design**:
- Mobile: Tap hotspots to reveal info cards
- Desktop: Hover for quick preview, click for full detail
- Animate hotspots with subtle pulse to draw attention
- Use Framer Motion for smooth reveal animations

**Placement**: Home page USP section, possibly on service pages.

### 2.2 StepUpExplainer (Environ)

**Purpose**: Visualize the Environ step-up system that appeals to the methodical, health-conscious customer.

**Concept**: Animated diagram showing how vitamin levels increase over time.

```typescript
// components/interactive/StepUpExplainer.tsx

interface StepUpExplainerProps {
  autoPlay?: boolean;
  showControls?: boolean;
}

// Animation sequence:
// 1. Show skin "starting point" (low vitamin levels)
// 2. Animate Step 1 products being applied
// 3. Show vitamin level increasing
// 4. Animate Step 2, higher levels
// 5. Continue through steps
// 6. Show final "optimized" skin state
```

**Design Approach**:
- Simple, clean infographic style
- Use Framer Motion for smooth transitions
- Progress bar showing current step
- Optional: User can control animation speed or step through manually

**Content to Visualize**:
1. AVST 1 → AVST 2 → AVST 3 → AVST 4 → AVST 5
2. Each step = higher vitamin concentration
3. Skin adapts and can handle more
4. Result: Maximum benefit without irritation

**Placement**: Environ service page, after introduction.

### 2.3 Cost Calculator (Laser)

**Purpose**: Demonstrate long-term value of laser vs. shaving/waxing.

**Concept**: Interactive calculator comparing 5-year costs.

```typescript
// components/interactive/CostCalculator.tsx

interface CostCalculatorProps {
  laserPackagePrice: number;
  laserSessions: number;
}

// User inputs (with sensible defaults):
// - How often do you shave? (daily, every 2 days, weekly)
// - Cost of razors/shaving products per month
// - OR: How often do you wax?
// - Cost per waxing session

// Calculation:
// - 5-year shaving cost = monthly cost × 60
// - 5-year laser cost = package price (one-time, maybe + 1 touch-up)
// - Savings = shaving cost - laser cost
// - Time saved = shaving time × frequency × 5 years
```

**Output Display**:
- Side-by-side comparison
- Animated counter showing savings
- "Time saved" in hours/days
- Clear CTA to book

**Placement**: Laserontharing service page.

### 2.4 Before/After Slider Enhancement

Upgrade the basic gallery to an interactive comparison slider.

```typescript
// components/interactive/BeforeAfterSlider.tsx

interface BeforeAfterSliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  initialPosition?: number;  // 0-100, default 50
}

// Features:
// - Draggable divider line
// - Touch-friendly on mobile
// - Keyboard accessible (arrow keys)
// - Labels for "Voor" and "Na"
```

---

## 3. Optional: Oasis Mode (Audio)

**Status**: Nice-to-have, implement only if time permits.

**Concept**: Optional ambient audio toggle for immersive "spa at home" experience.

```typescript
// components/interactive/OasisMode.tsx

interface OasisModeProps {
  audioSrc: string;  // Ambient spa sounds / binaural beats
}

// Implementation:
// - Small toggle button (e.g., in footer or floating)
// - Starts muted by default (never autoplay audio)
// - Smooth fade in/out
// - Persists preference in localStorage
// - Pause when tab is not visible
```

**Audio Content**:
- Ambient spa sounds (water, nature)
- Optional: Binaural beats for relaxation
- Must be royalty-free or licensed

**UX Considerations**:
- Never autoplay
- Clear visual indicator when audio is on
- Easy to turn off
- Don't let it interfere with page usability

---

## 4. Performance Optimization

### 4.1 Image Optimization

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
```

**Checklist**:
- [ ] All images use Next.js `<Image>` component
- [ ] Appropriate `sizes` prop for responsive images
- [ ] Hero images have `priority` prop
- [ ] Before/after images are lazy loaded
- [ ] WebP/AVIF formats served where supported

### 4.2 Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';
// Or for custom fonts:
import localFont from 'next/font/local';

const displayFont = localFont({
  src: './fonts/DisplayFont.woff2',
  variable: '--font-display',
  display: 'swap',
});
```

**Checklist**:
- [ ] Fonts preloaded
- [ ] `font-display: swap` for FOUT prevention
- [ ] Subset fonts if using custom (only needed characters)
- [ ] Variable fonts if available

### 4.3 JavaScript Optimization

**Checklist**:
- [ ] Salonized widget lazy loaded (only on pages where needed)
- [ ] GA4 loaded after user interaction / consent
- [ ] Framer Motion: Use `LazyMotion` for reduced bundle
- [ ] Dynamic imports for heavy components

```typescript
// Lazy load Framer Motion
import { LazyMotion, domAnimation } from 'framer-motion';

function App({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}

// Dynamic import for quiz (not needed on every page)
const Quiz = dynamic(() => import('@/components/quiz/Quiz'), {
  loading: () => <QuizSkeleton />,
});
```

### 4.4 Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image/video load time |
| FID (First Input Delay) | < 100ms | Interaction responsiveness |
| CLS (Cumulative Layout Shift) | < 0.1 | Layout stability |
| TTFB (Time to First Byte) | < 800ms | Server response time |

**Testing Tools**:
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest
- Vercel Analytics (if deployed on Vercel)

---

## 5. Accessibility (WCAG 2.1 AA)

### 5.1 Audit Checklist

**Perceivable**:
- [ ] All images have meaningful alt text
- [ ] Color contrast meets 4.5:1 for text
- [ ] No information conveyed by color alone
- [ ] Video/audio has captions or transcripts (if applicable)

**Operable**:
- [ ] All interactive elements keyboard accessible
- [ ] Focus states visible and clear
- [ ] No keyboard traps
- [ ] Skip to main content link
- [ ] Mobile menu accessible via keyboard

**Understandable**:
- [ ] Language attribute set (`<html lang="nl">`)
- [ ] Form labels properly associated
- [ ] Error messages clear and helpful
- [ ] Consistent navigation

**Robust**:
- [ ] Valid HTML
- [ ] ARIA attributes used correctly
- [ ] Works with screen readers (test with VoiceOver/NVDA)

### 5.2 Component-Specific Accessibility

**Navigation**:
```tsx
<nav aria-label="Hoofdnavigatie">
  <button
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    aria-label="Menu openen"
  >
    {/* Hamburger icon */}
  </button>
</nav>
```

**FAQ Accordion**:
```tsx
<div role="region" aria-labelledby="faq-heading">
  <button
    aria-expanded={isOpen}
    aria-controls={`faq-content-${id}`}
    id={`faq-button-${id}`}
  >
    {question}
  </button>
  <div
    id={`faq-content-${id}`}
    role="region"
    aria-labelledby={`faq-button-${id}`}
    hidden={!isOpen}
  >
    {answer}
  </div>
</div>
```

**Before/After Slider**:
```tsx
<div
  role="slider"
  aria-label="Vergelijk voor en na"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={position}
  tabIndex={0}
  onKeyDown={handleKeyDown}  // Arrow keys to adjust
>
```

### 5.3 Testing Tools

- axe DevTools (browser extension)
- WAVE (browser extension)
- Lighthouse accessibility audit
- Manual keyboard testing
- Screen reader testing (VoiceOver on Mac, NVDA on Windows)

---

## 6. SEO Validation

### 6.1 Technical SEO Checklist

**Meta Tags**:
- [ ] Unique `<title>` for each page (50-60 chars)
- [ ] Unique `<meta name="description">` for each page (150-160 chars)
- [ ] Open Graph tags for social sharing
- [ ] Canonical URLs set correctly

**Structured Data**:
- [ ] Organization schema on all pages
- [ ] Service schema on service pages
- [ ] FAQPage schema on pages with FAQs
- [ ] LocalBusiness schema for local SEO
- [ ] Test with Google Rich Results Test

**Crawlability**:
- [ ] XML sitemap generated and submitted
- [ ] robots.txt configured correctly
- [ ] No accidental `noindex` tags
- [ ] Internal linking structure logical

**Performance**:
- [ ] Core Web Vitals passing
- [ ] Mobile-friendly (test with Google Mobile-Friendly Test)
- [ ] HTTPS everywhere

### 6.2 Sitemap Generation

```typescript
// app/sitemap.ts

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.instituutleanne.be';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/huidverbetering/environ`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/huidverbetering/pigment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // ... all pages
  ];
}
```

### 6.3 Robots.txt

```typescript
// app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://www.instituutleanne.be/sitemap.xml',
  };
}
```

### 6.4 AEO Validation

- [ ] Each service page has AEO block at top
- [ ] AEO content is 40-60 words
- [ ] AEO directly answers the target search query
- [ ] Schema markup supports AEO content
- [ ] Test by asking ChatGPT/Gemini about the treatments

---

## 7. Final Polish

### 7.1 Content Review

- [ ] All placeholder text replaced with final copy
- [ ] Spelling and grammar checked (Dutch)
- [ ] Contact information accurate
- [ ] Opening hours accurate
- [ ] Prices accurate (or intentionally omitted)
- [ ] Legal pages complete (privacy, terms)

### 7.2 Visual Polish

- [ ] Consistent spacing throughout
- [ ] Animations smooth and purposeful
- [ ] Loading states for async content
- [ ] Error states designed
- [ ] Empty states handled (if applicable)
- [ ] Favicon and app icons set

### 7.3 Cross-Browser Testing

**Browsers to test**:
- Chrome (latest)
- Safari (latest, especially on iOS)
- Firefox (latest)
- Edge (latest)
- Safari on older iOS (if significant user base)

**Devices to test**:
- iPhone (various sizes)
- Android phones (various sizes)
- iPad
- Desktop (various widths)

### 7.4 Error Handling

- [ ] 404 page designed and helpful
- [ ] 500 error page designed
- [ ] Form validation errors clear
- [ ] Network error handling (offline states)
- [ ] Salonized widget failure fallback

---

## 8. Launch Checklist

### 8.1 Pre-Launch (1 week before)

- [ ] Final content approval from client
- [ ] All images approved and licensed
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Email delivery tested (quiz flow)
- [ ] Salonized booking tested end-to-end
- [ ] Analytics verified (GA4 events firing)
- [ ] Cookie consent working
- [ ] Privacy policy reviewed
- [ ] Performance benchmark recorded

### 8.2 Launch Day

- [ ] Deploy to production
- [ ] Verify all pages load correctly
- [ ] Test critical flows:
  - [ ] Navigation works
  - [ ] Quiz completes successfully
  - [ ] PDF generates and downloads
  - [ ] Email delivered
  - [ ] Booking widget works
  - [ ] Contact form works (if exists)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt accessible
- [ ] Announce launch (social media, newsletter)

### 8.3 Post-Launch (1 week after)

- [ ] Monitor error logs
- [ ] Check analytics for issues
- [ ] Review Core Web Vitals in field
- [ ] Gather initial user feedback
- [ ] Address any critical bugs
- [ ] Document any known issues for future

---

## 9. Monitoring & Maintenance

### 9.1 Ongoing Monitoring

**Tools**:
- Vercel Analytics (performance)
- Google Search Console (SEO)
- GA4 (user behavior)
- Supabase dashboard (quiz data)
- Email provider dashboard (delivery rates)

**Alerts to set up**:
- Error rate spikes
- Performance degradation
- Email delivery failures

### 9.2 Maintenance Tasks

**Monthly**:
- Review analytics
- Check for broken links
- Update dependencies (security patches)
- Review quiz completion rates

**Quarterly**:
- Content refresh (if needed)
- Performance audit
- Accessibility re-check
- SEO review (rankings, AEO citations)

---

## 10. Acceptance Criteria

Phase 4 is complete when:

**Interactive Elements**:
- [ ] TwistHotspots component works on mobile and desktop
- [ ] StepUpExplainer animation plays smoothly
- [ ] Cost Calculator produces accurate comparisons
- [ ] Before/After slider is touch-friendly

**Performance**:
- [ ] Lighthouse performance score > 90
- [ ] LCP < 2.5s on 4G connection
- [ ] CLS < 0.1

**Accessibility**:
- [ ] Lighthouse accessibility score > 95
- [ ] All critical paths keyboard navigable
- [ ] Screen reader tested (no major issues)

**SEO**:
- [ ] All structured data validates
- [ ] Sitemap submitted and indexed
- [ ] No critical SEO errors in Search Console

**Launch**:
- [ ] Production deployment successful
- [ ] All critical flows tested on production
- [ ] Client sign-off received

---

## 11. Post-Launch Roadmap (Future Enhancements)

These items are out of scope for initial launch but documented for future consideration:

1. **Blog / Content Hub** - Regular content for SEO
2. **Testimonial Video Integration** - Video reviews from clients
3. **Live Chat** - Real-time customer support
4. **Loyalty Program Integration** - If client implements
5. **Multi-language** - French, English (if market expands)
6. **A/B Testing** - Optimize conversion rates
7. **Advanced Analytics** - Heatmaps, session recordings

---

## 12. Documentation

Ensure the following documentation is complete:

- [ ] README.md with setup instructions
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Content update guide (for developer)
- [ ] Component documentation (Storybook, if used)
