# Phase 3: Quiz & Lead Magnet Completion

**Date**: 2026-02-10
**Phase**: 3
**Status**: Complete

---

## Summary

Completed the remaining Phase 3 implementation: PDF generation, email delivery system, background job scheduling, unsubscribe handling, and GA4 tracking. The "Skin Code" diagnostic quiz is now fully functional with automated email nurture sequences.

---

## Files Created

### PDF Generation
| File | Purpose |
|------|---------|
| `src/components/pdf/QuizPDFTemplate.tsx` | React PDF template using @react-pdf/renderer for "Huid Advies Paspoort" |
| `src/app/api/quiz/pdf/route.ts` | API endpoint to generate and return PDF for download |

### Email System
| File | Purpose |
|------|---------|
| `src/lib/email/client.ts` | Resend client with lazy initialization to avoid build errors |
| `src/lib/email/templates.tsx` | Three React email templates (PDF delivery, value tips, soft CTA) |

### Background Jobs
| File | Purpose |
|------|---------|
| `src/inngest/client.ts` | Inngest client configuration |
| `src/inngest/functions.ts` | Quiz completion handler with 3-email nurture sequence |
| `src/app/api/inngest/route.ts` | Inngest API route handler |

### Unsubscribe
| File | Purpose |
|------|---------|
| `src/app/api/unsubscribe/route.ts` | One-click email unsubscribe with styled confirmation pages |

---

## Files Modified

| File | Changes |
|------|---------|
| `src/app/api/quiz/complete/route.ts` | Added Inngest event trigger after quiz completion |
| `src/components/quiz/Quiz.tsx` | Added GA4 tracking for goal and location selection |
| `docs/architecture.md` | Updated with Phase 3 structure, tech stack, env vars |

---

## Technical Decisions

### 1. Lazy Resend Initialization
The Resend SDK throws an error if instantiated without an API key. Changed to lazy initialization pattern to allow builds without the API key configured:

```typescript
let resendInstance: Resend | null = null;

export function getResendClient(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY not configured");
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}
```

### 2. PDF Buffer Conversion
Next.js 16 requires `Uint8Array` instead of raw `Buffer` for `NextResponse`:

```typescript
const uint8Array = new Uint8Array(pdfBuffer);
return new NextResponse(uint8Array, { ... });
```

### 3. Inngest Email Sequence
Single function handles entire nurture sequence with subscription checks:
- Immediate: Generate PDF, send email with attachment
- Day 3: Check consent, send value tips email
- Day 7: Check consent, send CTA email, mark sequence complete

### 4. Unsubscribe UX
Returns styled HTML pages instead of JSON for better user experience when clicking email links.

---

## GA4 Events Implemented

| Event | Trigger |
|-------|---------|
| `quiz_started` | Quiz begins |
| `quiz_goal_selected` | User selects primary goal |
| `quiz_location_selected` | User selects location |
| `quiz_step_completed` | Each question completed |
| `quiz_email_submitted` | Email form submitted |
| `quiz_completed` | Quiz fully completed |
| `quiz_pdf_downloaded` | PDF download button clicked |

---

## Environment Variables Required

```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email
RESEND_API_KEY=

# Background Jobs
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

# Site
NEXT_PUBLIC_SITE_URL=
```

---

## Build Verification

- TypeScript: Passes
- Next.js Build: 31 routes (24 static, 7 dynamic)
- New API Routes:
  - `/api/quiz/pdf` (POST)
  - `/api/inngest` (GET, POST, PUT)
  - `/api/unsubscribe` (GET)

---

## Email Sequence Flow

```
Quiz Completed
    ↓
Inngest Event Triggered
    ↓
[Immediate] Generate PDF → Send with attachment
    ↓
[Wait 3 days]
    ↓
[Check consent] → Send value tips email
    ↓
[Wait 4 more days]
    ↓
[Check consent] → Send CTA email → Mark complete
```

---

## Phase 3 Acceptance Criteria Status

- [x] Quiz flows through all questions smoothly
- [x] Answers stored in Supabase
- [x] Email capture with consent recording
- [x] PDF generates with personalized content
- [x] PDF attached to delivery email
- [x] Nurture emails scheduled (Day 3, Day 7)
- [x] Unsubscribe flow works
- [x] GA4 events fire correctly
- [x] Results page shows correct recommendations
- [x] Privacy/consent language is GDPR compliant

---

## Next Steps (Phase 4)

1. Interactive elements (TwistHotspots, StepUpExplainer, Cost Calculator)
2. Performance optimization
3. Accessibility audit
4. SEO validation
5. Optional: "Oasis Mode" audio feature
6. Production deployment with environment variables
