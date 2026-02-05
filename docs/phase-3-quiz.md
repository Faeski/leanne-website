# Phase 3: Quiz & Lead Magnet

**Goal**: Functional "Skin Code" diagnostic engine with PDF delivery
**Deliverable**: Working quiz that captures leads and delivers personalized PDF

**Prerequisite**: Phase 2 content architecture complete

---

## 1. Overview

The "Skin Code" diagnostic engine is the primary lead generation tool. It:

1. Segments visitors into treatment paths
2. Captures email addresses
3. Generates a personalized "Huid Advies Paspoort" PDF
4. Triggers a 3-email nurture sequence

**Current Phase Scope**: Content structure defined in interviews, now implementing full functionality.

---

## 2. Quiz Flow

### 2.1 Quiz Structure

```
Start Screen
    ↓
Question 1: Primary Goal (segments into treatment path)
    ↓
Question 2: Lifestyle Factors (refines recommendations)
    ↓
Question 3: Location (BE/NL - for travel info)
    ↓
Email Capture (required for PDF)
    ↓
Results Screen + PDF Download
    ↓
Email Nurture Sequence (async)
```

### 2.2 Question 1: Primary Goal

**Question**: "Waar wil je aan werken?"

| Answer | Treatment Path | Follow-up Focus |
|--------|---------------|-----------------|
| Pigmentvlekken verminderen | Me-Line | Pigment causes, expectations |
| Rimpels & huidveroudering | Environ | Step-up system, healthy aging |
| Definitieve ontharing | Laser | Cost comparison, pain expectations |
| Huid verstevigen | iCoone | Target areas, realistic results |

**UI**: Large clickable cards with icons, single selection.

### 2.3 Question 2: Lifestyle Factors

**Question**: "Wat past bij jouw levensstijl?" (multiple selection allowed)

| Factor | Relevance | Recommendation Impact |
|--------|-----------|----------------------|
| Veel stress | Affects skin health | Suggests relaxation aspect of treatments |
| Veel in de zon | UV damage concern | Emphasizes protection, timing |
| Gezonde voeding belangrijk | Health-conscious | Highlights Environ science, supplements |
| Weinig tijd voor mezelf | Busy lifestyle | Emphasizes "me-time" USP |
| Hormonale veranderingen | Pregnancy/menopause | Links to relevant persona content |

**UI**: Checkbox-style cards, multiple selection.

### 2.4 Question 3: Location

**Question**: "Waar woon je?"

| Answer | Impact |
|--------|--------|
| België (Limburg) | Local, no travel info needed |
| Nederland (Maastricht regio) | Include travel info in PDF |
| Anders | Generic info, invite to contact |

**UI**: Radio button style, single selection.

### 2.5 Email Capture

**Screen**: "Bijna klaar! Waar mogen we je persoonlijke huidadvies naartoe sturen?"

**Fields**:
- Email address (required)
- First name (optional, for personalization)
- Consent checkbox (required): "Ik ga akkoord met het ontvangen van mijn huidadvies en gerelateerde informatie per email."

**Privacy note**: Link to privacy policy, clear explanation of what they'll receive.

### 2.6 Results Screen

**Elements**:
1. Personalized headline based on Q1 answer
2. Primary treatment recommendation with brief explanation
3. Secondary recommendations based on lifestyle factors
4. PDF download button (prominent)
5. Soft CTA: "Boek je gratis huidanalyse" (secondary)

---

## 3. Quiz Component Architecture

### 3.1 Component Structure

```typescript
// components/quiz/Quiz.tsx - Main container
// components/quiz/QuizProgress.tsx - Step indicator
// components/quiz/QuizQuestion.tsx - Question display
// components/quiz/QuizOption.tsx - Selectable option card
// components/quiz/QuizEmailCapture.tsx - Email form
// components/quiz/QuizResults.tsx - Results display
// components/quiz/QuizPDFButton.tsx - Download trigger
```

### 3.2 State Management

```typescript
// lib/quiz/types.ts

interface QuizState {
  currentStep: number;
  answers: {
    primaryGoal: 'pigment' | 'aging' | 'laser' | 'firming' | null;
    lifestyleFactors: string[];
    location: 'be-limburg' | 'nl-maastricht' | 'other' | null;
  };
  email: string | null;
  firstName: string | null;
  consent: boolean;
  sessionId: string;
  completed: boolean;
}

// Using React state or Zustand for local state management
```

### 3.3 Quiz Container

```typescript
// components/quiz/Quiz.tsx

interface QuizProps {
  onComplete?: (results: QuizResults) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [state, dispatch] = useQuizState();

  // Steps
  const steps = [
    { component: GoalQuestion, key: 'goal' },
    { component: LifestyleQuestion, key: 'lifestyle' },
    { component: LocationQuestion, key: 'location' },
    { component: EmailCapture, key: 'email' },
    { component: Results, key: 'results' },
  ];

  // Animation between steps (Framer Motion)
  return (
    <div className="quiz-container">
      <QuizProgress current={state.currentStep} total={steps.length - 1} />

      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <CurrentStep />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
```

---

## 4. PDF Generation

### 4.1 PDF Content Structure

**"Huid Advies Paspoort"**

```
┌─────────────────────────────────────┐
│  INSTITUUT LEANNE                   │
│  Jouw Persoonlijke Huid Advies      │
│                                     │
│  Voor: [First Name / "je"]          │
│  Datum: [Generated date]            │
├─────────────────────────────────────┤
│                                     │
│  JOUW HOOFDDOEL                     │
│  [Primary goal from Q1]             │
│                                     │
│  ONZE AANBEVELING                   │
│  [Primary treatment]                │
│  [Why this treatment fits]          │
│  [What to expect]                   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  AANVULLENDE TIPS                   │
│  Gebaseerd op jouw levensstijl:     │
│  • [Tip based on lifestyle factor]  │
│  • [Tip based on lifestyle factor]  │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VOLGENDE STAP                      │
│  Boek je gratis huidanalyse         │
│  [Phone] | [Website]                │
│                                     │
│  [If NL location: travel info]      │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  Over Instituut Leanne              │
│  [Brief about, address, contact]    │
│                                     │
└─────────────────────────────────────┘
```

### 4.2 PDF Generation Approach

**Option A: @react-pdf/renderer** (Recommended)
- Generate PDF on server (API route)
- Full control over styling
- React component-based templates

**Option B: pdf-lib**
- Lower-level control
- Better for simple layouts
- Smaller bundle size

### 4.3 PDF API Route

```typescript
// app/api/quiz/pdf/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { HuidAdviesPaspoort } from '@/components/pdf/HuidAdviesPaspoort';

export async function POST(request: NextRequest) {
  const { answers, email, firstName } = await request.json();

  // Validate session and consent
  // ...

  // Generate PDF
  const pdfBuffer = await renderToBuffer(
    <HuidAdviesPaspoort
      answers={answers}
      firstName={firstName}
      generatedAt={new Date()}
    />
  );

  // Return PDF for download
  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="huid-advies-paspoort.pdf"`,
    },
  });
}
```

### 4.4 PDF React Component

```typescript
// components/pdf/HuidAdviesPaspoort.tsx

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

interface HuidAdviesPaspoortProps {
  answers: QuizAnswers;
  firstName?: string;
  generatedAt: Date;
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottom: '1 solid #e5e5e5',
    paddingBottom: 20,
  },
  // ... more styles
});

export function HuidAdviesPaspoort({ answers, firstName, generatedAt }: HuidAdviesPaspoortProps) {
  const recommendation = getRecommendation(answers);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with logo */}
        <View style={styles.header}>
          <Image src="/logo.png" style={styles.logo} />
          <Text style={styles.title}>Jouw Persoonlijke Huid Advies</Text>
          <Text style={styles.date}>
            Voor: {firstName || 'je'} | {format(generatedAt, 'dd MMMM yyyy')}
          </Text>
        </View>

        {/* Primary recommendation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jouw Hoofddoel</Text>
          <Text>{recommendation.goalDescription}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Onze Aanbeveling</Text>
          <Text style={styles.treatmentName}>{recommendation.treatment.name}</Text>
          <Text>{recommendation.treatment.description}</Text>
          <Text>{recommendation.treatment.whatToExpect}</Text>
        </View>

        {/* Lifestyle tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aanvullende Tips</Text>
          {recommendation.tips.map((tip, i) => (
            <Text key={i} style={styles.tip}>• {tip}</Text>
          ))}
        </View>

        {/* CTA */}
        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>Volgende Stap</Text>
          <Text>Boek je gratis huidanalyse en bespreek je persoonlijke plan.</Text>
          <Text style={styles.contact}>Tel: +32 ... | www.instituutleanne.be</Text>
        </View>

        {/* Travel info for NL visitors */}
        {answers.location === 'nl-maastricht' && (
          <View style={styles.travelInfo}>
            <Text style={styles.travelTitle}>Reisinfo vanuit Maastricht</Text>
            <Text>Instituut Leanne ligt op slechts 10 minuten van Maastricht...</Text>
          </View>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Instituut Leanne | [Address] | Lanaken, België</Text>
        </View>
      </Page>
    </Document>
  );
}
```

---

## 5. Data Storage (Supabase)

### 5.1 Database Schema

```sql
-- Quiz sessions table
CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,

  -- Answers
  primary_goal TEXT,
  lifestyle_factors TEXT[],
  location TEXT,

  -- Contact
  email TEXT,
  first_name TEXT,

  -- Consent
  email_consent BOOLEAN DEFAULT FALSE,
  consent_timestamp TIMESTAMPTZ,
  consent_ip TEXT,

  -- Tracking
  source TEXT,  -- Where they came from (UTM, page, etc.)
  user_agent TEXT,

  -- Email status
  pdf_sent BOOLEAN DEFAULT FALSE,
  pdf_sent_at TIMESTAMPTZ,
  nurture_sequence_started BOOLEAN DEFAULT FALSE
);

-- Index for email lookups
CREATE INDEX idx_quiz_sessions_email ON quiz_sessions(email);

-- Index for analytics
CREATE INDEX idx_quiz_sessions_completed ON quiz_sessions(completed_at)
  WHERE completed_at IS NOT NULL;
```

### 5.2 Supabase Client Setup

```typescript
// lib/supabase/client.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client with service role for admin operations
// lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
```

### 5.3 Quiz API Routes

```typescript
// app/api/quiz/start/route.ts
// Creates a new quiz session

// app/api/quiz/answer/route.ts
// Updates session with answers

// app/api/quiz/complete/route.ts
// Marks complete, triggers PDF + email

// app/api/quiz/pdf/route.ts
// Generates and returns PDF
```

---

## 6. Email Delivery

### 6.1 Email Provider

**Recommended**: Resend or Postmark

- Transactional email focus
- Good deliverability
- Simple API
- Reasonable pricing for low volume

### 6.2 Email Templates

#### Email 1: PDF Delivery (Immediate)

**Subject**: Jouw Persoonlijke Huid Advies Paspoort

```
Hoi [First Name],

Bedankt voor het invullen van onze huidanalyse!

Bijgevoegd vind je jouw persoonlijke Huid Advies Paspoort met onze
aanbevelingen op basis van jouw antwoorden.

[Download PDF Button]

Wil je je advies bespreken met een van onze experts?
Boek dan een gratis huidanalyse - we nemen uitgebreid de tijd voor je.

[Book Intake CTA]

Hartelijke groet,
Team Instituut Leanne

---
[Footer with contact info, unsubscribe link]
```

#### Email 2: Value Email (Day 3)

**Subject**: 3 tips voor [primary goal - e.g., "een egale huid"]

```
Hoi [First Name],

Een paar dagen geleden downloadde je jouw Huid Advies Paspoort.
Hier zijn 3 tips die je vandaag al kunt toepassen:

1. [Tip relevant to their goal]
2. [Tip relevant to their lifestyle factors]
3. [General skin health tip]

[Optional: link to relevant blog post or treatment page]

Vragen? Reply op deze email of boek een gratis huidanalyse.

Hartelijke groet,
[Team member name]
Instituut Leanne
```

#### Email 3: Soft CTA (Day 7)

**Subject**: Klaar voor de volgende stap?

```
Hoi [First Name],

We hopen dat je tips uit onze eerdere emails hebt kunnen gebruiken.

Veel van onze klanten vinden het fijn om hun persoonlijke situatie
te bespreken met een expert. Daarom bieden we een gratis huidanalyse aan.

Wat je krijgt:
• Professionele huidscan
• Persoonlijk adviesboekje om mee naar huis te nemen
• Productsamples om uit te proberen
• Geen verplichting

[Book Intake CTA - prominent]

Tot snel?

Hartelijke groet,
Team Instituut Leanne

P.S. Liever eerst even bellen? Dat kan ook: [phone number]
```

### 6.3 Email Sending Logic

```typescript
// lib/email/send.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPDFEmail(
  email: string,
  firstName: string | null,
  pdfBuffer: Buffer,
  quizAnswers: QuizAnswers
) {
  await resend.emails.send({
    from: 'Instituut Leanne <info@instituutleanne.be>',
    to: email,
    subject: 'Jouw Persoonlijke Huid Advies Paspoort',
    react: PDFDeliveryEmail({ firstName, quizAnswers }),
    attachments: [
      {
        filename: 'huid-advies-paspoort.pdf',
        content: pdfBuffer,
      },
    ],
  });
}

export async function scheduleNurtureSequence(sessionId: string) {
  // Use a job queue (e.g., Inngest, QStash) or Supabase edge functions
  // to schedule emails 2 and 3

  // Email 2: 3 days after completion
  // Email 3: 7 days after completion
}
```

### 6.4 Email Scheduling

**Options**:

1. **Inngest** - Event-driven background jobs
2. **QStash** (Upstash) - Simple HTTP-based scheduling
3. **Supabase Edge Functions + pg_cron** - Database-driven scheduling

**Recommended**: Inngest for reliability and easy debugging.

```typescript
// lib/inngest/functions.ts

import { inngest } from './client';

export const sendNurtureEmail2 = inngest.createFunction(
  { id: 'send-nurture-email-2' },
  { event: 'quiz/completed' },
  async ({ event, step }) => {
    // Wait 3 days
    await step.sleep('wait-3-days', '3d');

    // Send email 2
    await step.run('send-email', async () => {
      await sendValueEmail(event.data.sessionId);
    });
  }
);

export const sendNurtureEmail3 = inngest.createFunction(
  { id: 'send-nurture-email-3' },
  { event: 'quiz/completed' },
  async ({ event, step }) => {
    // Wait 7 days
    await step.sleep('wait-7-days', '7d');

    // Send email 3
    await step.run('send-email', async () => {
      await sendCTAEmail(event.data.sessionId);
    });
  }
);
```

---

## 7. Consent & Privacy

### 7.1 GDPR Compliance

**Required elements**:

1. **Clear consent language**: Explain exactly what they're signing up for
2. **Consent timestamp**: Record when they consented
3. **Easy unsubscribe**: One-click unsubscribe in every email
4. **Data access**: Ability to request/delete their data

### 7.2 Consent Recording

```typescript
// When user submits email form
const consentData = {
  email_consent: true,
  consent_timestamp: new Date().toISOString(),
  consent_ip: request.headers.get('x-forwarded-for'),
  consent_text: "Ik ga akkoord met het ontvangen van mijn huidadvies en gerelateerde informatie per email.",
};
```

### 7.3 Unsubscribe Handling

```typescript
// app/api/email/unsubscribe/route.ts

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token');

  // Verify token, update database
  await supabaseAdmin
    .from('quiz_sessions')
    .update({ email_consent: false })
    .eq('unsubscribe_token', token);

  // Redirect to confirmation page
  return NextResponse.redirect('/email/unsubscribed');
}
```

---

## 8. Quiz Page UI

### 8.1 Page Layout

```typescript
// app/skin-quiz/page.tsx

export default function SkinQuizPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Minimal header - just logo, no nav distraction */}
      <header className="p-4">
        <Logo />
      </header>

      {/* Centered quiz container */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Quiz />
      </main>

      {/* Minimal footer */}
      <footer className="p-4 text-center text-sm text-neutral-500">
        <a href="/privacy">Privacybeleid</a>
      </footer>
    </div>
  );
}
```

### 8.2 Mobile Considerations

- Full-width option cards
- Large touch targets (min 48px)
- Progress indicator always visible
- Sticky "Volgende" button at bottom
- Smooth animations (not jarring on mobile)

---

## 9. Analytics & Tracking

### 9.1 GA4 Events

```typescript
// Track quiz funnel
gtag('event', 'quiz_started', { quiz_name: 'skin_code' });
gtag('event', 'quiz_step_completed', { step: 1, answer: 'pigment' });
gtag('event', 'quiz_step_completed', { step: 2, answers: ['stress', 'sun'] });
gtag('event', 'quiz_step_completed', { step: 3, answer: 'nl-maastricht' });
gtag('event', 'quiz_email_submitted');
gtag('event', 'quiz_completed');
gtag('event', 'quiz_pdf_downloaded');
```

### 9.2 Conversion Tracking

- Quiz completion rate
- Email capture rate
- PDF download rate
- Subsequent intake bookings (if trackable via Salonized)

---

## 10. Acceptance Criteria

Phase 3 is complete when:

- [ ] Quiz flows through all questions smoothly
- [ ] Answers are stored in Supabase
- [ ] Email capture works with consent recording
- [ ] PDF generates correctly with personalized content
- [ ] PDF is attached to delivery email
- [ ] Nurture emails are scheduled (Day 3, Day 7)
- [ ] Unsubscribe flow works
- [ ] GA4 events fire correctly
- [ ] Mobile experience is smooth
- [ ] Results page shows correct recommendations
- [ ] Privacy/consent language is GDPR compliant

---

## 11. Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (Resend)
RESEND_API_KEY=

# Background Jobs (Inngest)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
```

---

## 12. Next Steps (Phase 4)

After Phase 3 approval:
1. Build interactive elements (TwistHotspots, StepUpExplainer, Cost Calculator)
2. Performance optimization
3. Accessibility audit
4. SEO validation
5. Optional: "Oasis Mode" audio feature
