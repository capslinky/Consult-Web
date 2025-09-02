# Paradise Law AZ — Comprehensive Product Requirements (Unified, 2025)

This document unifies the prior PRD and Greenfield plans into a single, self‑contained specification a new team can implement without prior context. It covers goals, scope, flows, tech stack, data model, endpoints, security, accessibility, analytics, integrations, and a phased delivery plan.

## 1) Executive Summary
- Primary Goal: Sell a 90‑minute virtual consultation that includes a written follow‑up action plan.
- Secondary Goal: Serve as the firm’s primary family‑law site to acquire limited‑scope (unbundled) and full‑scope representation.
- Critical Constraints:
  - Manual conflict check must occur before any payment is requested.
  - Payments via LawPay (not Stripe).
  - Scheduling via Calendly; time is tentatively held until payment is received.
  - A comprehensive pre‑consultation questionnaire (with document uploads) is required ≥24 hours before the consult.
  - MyCase is the system of record post‑conversion (fallback via intake email/Zapier now; API adapter later).

## 2) Success Metrics & KPIs
- Consult conversion: ≥2.5% visitor → paid consult.
- Questionnaire completion: ≥90% completed ≥24h pre‑consult; <10% drop‑off from payment → questionnaire.
- No‑show rate: ≤10%; reschedule completion ≥80%.
- Representation conversion: ≥25% of consult clients convert to limited/full‑scope within 30 days; ≥5% of qualified representation leads progress to engagement.
- Experience: Lighthouse Mobile ≥90; TTI <2s; CLS <0.1; INP “good”.
- Compliance: WCAG 2.1 AA; consented analytics; payments via LawPay; no payment prior to manual conflict clearance.

## 3) Target Users
- Consult Buyers: Need rapid clarity; willing to pay $500 and complete intake.
- Limited‑Scope Seekers: Desire discrete services with transparent pricing.
- Full‑Scope Seekers: Complex matters; value trust signals, process transparency.
- Staff/Admin: Perform conflict checks, issue payment links, monitor deadlines, process refunds, manage intake, deliver action plans.

## 4) Scope
### In‑Scope
- Marketing site (Home, How It Works, Pricing, Book, Contact, Practice Areas, Resources, Legal).
- Booking: Calendly selection (tentative), timezone handling, reminders (via Calendly), status sync.
- Manual Conflict Check: Queue + decisions (Clear / Flagged / Needs Info) before payments.
- Payments: LawPay Hosted Payment Page (HPP), server‑side verification, receipts, refunds.
- Questionnaire: Multi‑step dynamic forms + uploads; autosave/resume; required ≥24h pre‑consult.
- Deliverables: 90‑minute consult; written action plan within 24–48 hours.
- MyCase integration: Fallback via intake email/Zapier; later via API adapter.
- Admin console: Conflict queue, timers/deadlines, issue/cancel links, logs.
- Accessibility, security, analytics, and SEO best practices.

### Out‑of‑Scope (Initial)
- Full CRM or matter management (handled by MyCase).
- Custom video platform (use Calendly/meeting link).
- Stripe or other processors (LawPay only).

## 5) Information Architecture
### 5.1 Top Navigation (Primary)
- Book Consultation | Limited‑Scope Services | Full Representation | Practice Areas | How It Works | Pricing | Resources | Contact

### 5.2 Webpages & Detailed Sitemap
Note: All URLs use trailing slashes. Redirects handle common alternates (e.g., /blog → /resources/blog/).

- Core
  - `/` — Home (hero, trust, primary CTA, overview of services)
  - `/how-it-works/` — Process transparency (conflict → payment → questionnaire → consult → action plan)
  - `/pricing/` — $500 consult; representative LSR fees/ranges; retainer guidance
  - `/book/` — Booking page (Calendly embed, conflict info capture banner, expectations)
  - `/contact/` — Contact options (tel, email, form), office/service area

- Services
  - `/services/limited-scope/` — Menu of limited-scope services with inclusions/exclusions and transparent pricing; CTAs to start LSR funnel
  - `/services/full-representation/` — Full-scope overview; retainer ranges, onboarding steps, expectations; CTA to contact/lead form

- Practice Areas
  - `/practice-areas/` — Hub with four pillars
  - Divorce & Separation — `/practice-areas/divorce/`
    - `/practice-areas/divorce/uncontested/`
    - `/practice-areas/divorce/contested/`
    - `/practice-areas/divorce/high-asset/`
    - `/practice-areas/divorce/military/`
    - `/practice-areas/divorce/legal-separation/`
  - Child Custody & Parenting — `/practice-areas/custody/`
    - `/practice-areas/custody/parental-rights/`
    - `/practice-areas/custody/modifications/`
    - `/practice-areas/custody/relocation/`
    - `/practice-areas/custody/evaluations/`
    - `/practice-areas/custody/grandparents-rights/`
  - Financial Matters — `/practice-areas/financial/`
    - `/practice-areas/financial/child-support/`
    - `/practice-areas/financial/spousal-maintenance/`
    - `/practice-areas/financial/property-division/`
    - `/practice-areas/financial/debt-division/`
    - `/practice-areas/financial/business-valuation/`
    - `/practice-areas/financial/retirement-investment-accounts/`
    - `/practice-areas/financial/prenuptial/`
    - `/practice-areas/financial/postnuptial/`
  - Special Circumstances — `/practice-areas/special/`
    - `/practice-areas/special/domestic-violence/`
    - `/practice-areas/special/paternity/`
    - `/practice-areas/special/mediation/`
    - `/practice-areas/special/appeals/`
    - `/practice-areas/special/enforcement/`

- Resources
  - `/resources/` — Hub
  - `/resources/blog/` — Blog index
    - `/resources/blog/[slug]/` — Blog article detail
  - `/resources/guides/` — Guides index
    - `/resources/guides/[slug]/` — Guide/Download detail
  - `/resources/faq/` — FAQ (with FAQPage JSON‑LD)
  - `/resources/testimonials/` — Client success stories (with disclaimers)

- Legal & Compliance
  - `/legal/` — Hub
  - `/legal/privacy/`
  - `/legal/terms/`
  - `/legal/disclaimer/`
  - `/legal/cookie-policy/`
  - `/legal/refund-policy/`
  - `/legal/attorney-advertising/`

- Utility
  - `/404/` — Not found
  - `/500/` — Server error (friendly fallback)
  - `/thank-you/` — Post‑booking or post‑questionnaire success message
  - `/confirmation/` — Payment confirmation receipt page
  - `/download-success/` — Optional guide download success

- Admin (Authenticated, not indexed)
  - `/admin/` — Dashboard (KPIs)
  - `/admin/conflicts/` — Conflict queue
  - `/admin/conflicts/[id]/` — Conflict review detail (actions: Clear/Flag/Needs Info)
  - `/admin/bookings/` — Bookings list and filters
  - `/admin/payments/` — Payment statuses
  - `/admin/questionnaires/` — Intake status overview
  - `/admin/settings/` — System settings (LawPay, Calendly, MyCase adapter) and email templates

### 5.3 Redirects
- `/blog` → `/resources/blog/`
- `/guides` → `/resources/guides/`

### 5.4 URL & SEO Conventions
- Lowercase, hyphen‑separated slugs; trailing slashes; ≤3 levels deep where possible.
- Clear canonicals; sitemap includes all indexable routes; admin routes excluded.

### 5.5 Page Content Specifications (Definition of Done per page)
For each page, include: clear H1, concise intro (40–60 words), primary CTA, secondary CTA (where applicable), trust reinforcement, accessibility checks (heading order, focus order, color contrast), SEO (unique title ≤60 chars, description 150–160 chars, canonical), and structured data where noted.

- Home (`/`)
  - Purpose: Introduce firm, value proposition, and drive to Book.
  - Content: Hero (H1 + subhead), TrustBar (Licensed AZ, years, confidentiality), 3–6 feature cards, social proof teaser, CTABand end‑cap.
  - CTAs: Primary “Book Consultation”, Secondary “How It Works”.
  - SEO: LegalService JSON‑LD (site‑wide), OG/Twitter images.

- How It Works (`/how-it-works/`)
  - Purpose: Set expectations for conflict → payment → questionnaire → consult → action plan.
  - Content: Step grid with timelines, expectations, refund policy summary, FAQ teaser.
  - CTAs: “Book Consultation”, “Pricing”.
  - SEO: Descriptive title/description; internal links to Book/Pricing/FAQ.

- Pricing (`/pricing/`)
  - Purpose: Communicate $500/90‑minute consult + representative LSR fees; reinforce guarantee.
  - Content: Pricing card (what’s included), comparison band (DIY vs Consult), refund policy note, trust badges, CTABand.
  - CTAs: “Book Consultation”, “How It Works”.
  - SEO: Structured content; OG image with price badge.

- Book (`/book/`)
  - Purpose: Present Calendly embed + expectations; explain conflict review and payment sequence.
  - Content: Clear banner: “Appointment held pending manual conflict check”, timezone display, guarantee chip, Calendly embed, fallback/contact on error.
  - CTAs: “Contact Us” fallback; no immediate payment button.
  - A11y: Async loader with retry; ensure iframe focus/labels.

- Contact (`/contact/`)
  - Purpose: Quick help paths and general leads.
  - Content: Call/email cards; simple form (name, email, phone, message); office/service area; emergency note.
  - CTAs: “Book Consultation”, “Call Now”.

- Services — Limited‑Scope (`/services/limited-scope/`)
  - Purpose: Present LSR menu (document review/drafting, motion, coaching, hearing appearances) with clear inclusions/exclusions and pricing.
  - CTAs: “Start Limited‑Scope Service” (begins conflict gate); “Contact for Questions”.

- Services — Full Representation (`/services/full-representation/`)
  - Purpose: Explain full‑scope engagement, retainer ranges, onboarding steps, expectations.
  - CTAs: “Request Consultation” (or “Contact Attorney”), internal links to Practice Areas.

- Practice Area Hub (`/practice-areas/`)
  - Purpose: Orient to four pillars with cards linking to details; brief descriptions; CTABand.

- Practice Area Detail (e.g., `/practice-areas/divorce/uncontested/`)
  - Template: Overview, common scenarios, process, timelines, FAQs, related resources, end‑cap CTAs (“Book”, “How It Works”).
  - SEO: Unique title/description; internal links to related practice/FAQs.

- Resources Hub (`/resources/`)
  - Purpose: Orient to Blogs, Guides, FAQ, Testimonials; stats; categories; CTABand.

- Blog Index/Detail (`/resources/blog/`, `/resources/blog/[slug]/`)
  - Index: Paginated posts; filters/tags.
  - Detail: Article content; related posts; author; share meta; Article JSON‑LD.

- Guides Index/Detail (`/resources/guides/`, `/resources/guides/[slug]/`)
  - Index: Downloadable guides; teaser blurbs; read time.
  - Detail: Landing page for guide; download success page; optional email capture.

- FAQ (`/resources/faq/`)
  - Purpose: Address objections (refunds, confidentiality, rescheduling, scope, payment sequence).
  - SEO: FAQPage JSON‑LD.

- Testimonials (`/resources/testimonials/`)
  - Purpose: Social proof; include context and ethical disclaimer (“results vary”).

- Legal Hub & Pages (`/legal/`, `/legal/privacy/`, `/legal/terms/`, `/legal/disclaimer/`, `/legal/cookie-policy/`, `/legal/refund-policy/`, `/legal/attorney-advertising/`)
  - Purpose: Transparency; link surfaced in footer and relevant flows (payment, forms).
  - A11y: Plain, readable; skip links; logical headings.

- Utility (`/404/`, `/500/`, `/thank-you/`, `/confirmation/`, `/download-success/`)
  - 404: Helpful suggestions and quick links; search hint.
  - 500: Friendly fallback; retry guidance; contact link.
  - Thank‑you/Confirmation: Reinforce next steps; links to resources.

- Admin (authenticated, noindex)
  - Queue, review, bookings, payments, questionnaires, settings; a11y and audit requirements apply.

### 5.6 Canonical & Redirect Policy
- Canonicals: Built from a single base URL (production domain) + normalized path (always trailing slash). One canonical per route.
- Redirects: `/blog` → `/resources/blog/`, `/guides` → `/resources/guides/`; any legacy paths 301 → current slugs.
- Trailing slashes: Enforced for consistency; internal links should match.

### 5.7 Sitemap & Robots
- XML Sitemap: Includes all indexable routes (core, services, practice areas, resources, legal, utility as needed), excludes admin and any noindex pages. Update weekly or on deploy. Priority weighting: home (1.0), book/pricing/how‑it‑works (0.9), practice (0.8), resources (0.6), legal (0.5), utility (0.4).
- Robots.txt: Allow all except `/admin/` and explicit noindex routes. Link `Sitemap: https://<domain>/sitemap.xml`.

### 5.8 Content Prioritization (MVP)
- Phase 1 must‑have pages: `/`, `/how-it-works/`, `/pricing/`, `/book/`, `/contact/`, `/practice-areas/` hub + 4 key details (uncontested divorce, custody overview, child support, domestic violence), `/resources/faq/`, `/legal/privacy/`, `/legal/terms/`, `/legal/refund-policy/`, `/thank-you/`, `/confirmation/`, `/404/`.
- Phase 2: Remaining practice details, resources hub and indexes, testimonials, cookie policy, attorney advertising, guides/blog initial content set.

### 5.9 Content Length & Quality Standards
- Minimum word count per content page: 1,500 words.
  - Applies to: practice area pages (all details and hubs), services pages (LSR/FSR), resources (blog posts, guides, testimonials where narrative), legal pages where appropriate.
  - Exclusions: transactional/utility pages (book, confirmation, thank‑you, 404/500), admin pages.
- Cornerstone pages (≥3,000 words, comprehensive):
  - `/practice-areas/divorce/` (Divorce & Separation hub)
  - `/practice-areas/custody/` (Child Custody & Parenting hub)
  - `/practice-areas/financial/` (Financial Matters hub)
  - `/practice-areas/special/` (Special Circumstances hub)
- Structure & quality:
  - Clear H2/H3 hierarchy; scannable sections; FAQs embedded for rich results.
  - Arizona‑specific guidance (statutes/rules referenced in plain language); note that this is general information, not legal advice.
  - Internal links to related practice pages, How It Works, Pricing, and FAQ; external authoritative links sparingly.
  - Include examples, timelines, checklists where helpful; add “What to bring” or “How to prepare” sections for consult relevance.
  - Maintain empathetic voice per §22 and meet a11y/SEO AC per §23.

## 6) Core Flows
### 6.1 90‑Minute Consult (Manual Conflict Gate)
1) User selects slot in Calendly (tentative hold).
2) Site collects conflict info: client legal name, opposing party names, county, brief matter type.
3) Staff reviews conflict in Admin console (reference MyCase/internal sources): Clear / Flagged / Needs Info.
4) If Clear → email LawPay payment link + questionnaire link; status → “Clear – Pending Payment”.
5) Payment via LawPay HPP → server verifies via webhook → Confirmation page + email; status → “Paid – Questionnaire Required”.
6) Questionnaire: autosave/resume link; dynamic branching; uploads; must be completed ≥24h pre‑consult (immediate for short‑notice).
7) Consult (90 minutes).
8) Action plan delivered within 24–48 hours (email + portal download); artifacts sent to MyCase.

Unhappy paths
- Flagged: Polite decline email; auto‑cancel Calendly event via API; log reviewer + rationale (internal only).
- Needs Info: Request details; hold slot until deadline; auto‑cancel if unmet.
- Payment not received by deadline: Auto‑cancel event; notify client.
- Questionnaire incomplete by deadline: Attempt reschedule; else cancel/refund per policy.

### 6.2 Limited‑Scope Representation (LSR)
- Pick service (inclusions/exclusions, fixed pricing) → Manual conflict review → If Clear: LawPay link + tailored intake → Confirmation + delivery milestones (push to MyCase).

### 6.3 Full‑Scope Representation (FSR)
- Lead form (or post‑consult upgrade) → Manual conflict review → If Clear: retainer to trust via LawPay + e‑sign engagement → Onboarding questionnaire & docs (push to MyCase).

## 7) Non‑Functional Requirements
- Performance: LCP <2.5s; CLS <0.1; INP good; third‑party scripts only where needed; reserve widget heights; View Transitions + prefetch.
- Accessibility: WCAG 2.1 AA; keyboard operability; aria‑labels/aria‑describedby; aria‑hidden for decorative icons; respects reduced motion.
- Reliability: 99.9% availability for core APIs; webhook retries + idempotency.
- Security/Privacy: HSTS, CSP (start report‑only), Referrer‑Policy, X‑Content‑Type‑Options; encrypt PII at rest; signed URLs for uploads; no card data storage.
- Observability: Structured logs, error tracking, cron/queues for deadlines.

## 8) Tech Stack (Greenfield)
- Runtime & Hosting: Next.js 15 (App Router, Partial Pre‑rendering, Route Handlers) on Vercel (or Cloudflare Pages + Workers).
- Language: TypeScript (strict).
- UI: Tailwind CSS with design tokens; Radix UI/Headless UI for a11y primitives; View Transitions API.
- Forms: React Hook Form + Zod; autosave; magic‑link auth for resume.
- Data: Crunchy Bridge (Managed Postgres) + Prisma ORM.
  - Security: TLS required (`sslmode=require`); least‑privilege roles (`app_user` runtime no‑DDL, `migration_user` for migrations); optional `read_only`.
  - Ops: PITR enabled, pgaudit logging, password rotation, optional IP allowlist/Egress allowlisting; DR via cross‑region replica.
- Storage: S3‑compatible (Cloudflare R2/S3) with presigned uploads; optional AV scan step.
- Email: Resend or Postmark for transactional emails (clearance, payment, reminders, action plan).
- Scheduling: Calendly embed initially; Calendly API later for programmatic cancels/confirms; webhooks for schedule/cancel.
- Payments: LawPay HPP (MVP); LawPay webhooks for verification/refunds; later API usage if needed.
- MyCase: Adapter pattern — `emailIntakeAdapter` (intake inbox or Zapier) now; `apiAdapter` later once API is available.
- Auth (Admin): NextAuth (email/passwordless or SSO) or simple magic‑link for staff with RBAC.
- Analytics: GA4 or Plausible + PostHog for funnels; consent gate.
- CI/CD: GitHub Actions — npm ci, lint, type‑check, unit tests, build; Lighthouse CI later.
- Env Validation: Zod‑based schema to fail fast on missing/invalid vars.

## 9) Suggested Repo Structure
```
/(monorepo optional)
└── web/
    ├── src/
    │   ├── app/                # Next App Router pages & route handlers
    │   ├── components/         # UI and sections (TrustBar, CTABand, FeatureCard, etc.)
    │   ├── modules/            # booking, conflicts, payments, questionnaire, mycase
    │   ├── lib/                # db (Prisma), email, storage, analytics, env, auth
    │   ├── styles/             # Tailwind, tokens
    │   └── types/              # shared DTOs
    ├── prisma/                 # schema.prisma, migrations
    ├── public/                 # static assets
    ├── package.json
    ├── next.config.js
    └── .github/workflows/ci.yml
```

## 10) Data Model (Entities)
- Lead(id, firstName, lastName, email, phone, timezone, utmSource, utmMedium, utmCampaign, consentFlags, createdAt)
- BookingIntent(id, leadId, slotTime, calendlyEventId, status: pending_review | clear_pending_payment | flagged | needs_info | paid_questionnaire_required | ready | canceled, deadlines, createdAt, updatedAt)
- ConflictRecord(id, leadId, partiesEntered[], decision, reviewerId, notes, createdAt)
- Payment(id, bookingIntentId, lawpayTxnId, amount, status: initiated | succeeded | failed | refunded, memo, createdAt)
- QuestionnaireResponse(id, leadId, type: divorce|custody|financial|special, status: in_progress|completed, payloadJSON, createdAt, updatedAt)
- Document(id, questionnaireId, storageKey, filename, size, mime, checksum, scanStatus, createdAt)
- ActionPlan(id, leadId, contentMarkdown, attachments[], deliveredAt, createdAt)
- User(id, email, role: admin|staff, lastLoginAt)
- AuditLog(id, actorId, entityType, entityId, action, metadataJSON, createdAt)

## 11) API & Route Handlers (Initial)
- Public Pages: `/`, `/how-it-works`, `/pricing`, `/book`, `/contact`, `/practice-areas/*`, `/resources/*`, `/legal/*`
- Booking Module
  - POST `/api/booking/intents` — capture slot + conflict info; create BookingIntent (pending_review).
  - POST `/api/booking/calendly/webhook` — ingest scheduled/canceled; update BookingIntent.
- Conflict Module (Admin)
  - GET `/api/conflicts/queue` — list pending_review with SLAs.
  - POST `/api/conflicts/:id/clear` — mark clear; send payment link + questionnaire link.
  - POST `/api/conflicts/:id/flag` — mark flagged; auto‑cancel calendly event; send decline email.
  - POST `/api/conflicts/:id/needs-info` — request info; set deadline.
- Payments Module
  - GET `/api/payments/link?intent=<id>` — create LawPay HPP link (server‑generated).
  - POST `/api/payments/lawpay/webhook` — verify success/failure/refund; idempotent.
- Questionnaire Module
  - GET `/api/questionnaire/:id` — fetch draft; magic‑link auth.
  - POST `/api/questionnaire/:id` — save step; autosave.
  - POST `/api/uploads/presign` — presigned URL for S3/R2 uploads.
  - POST `/api/questionnaire/:id/complete` — finalize; trigger MyCase adapter export.
- MyCase Adapter
  - POST `/api/integrations/mycase/dispatch` — (internal) compile packet and send via intake email/Zapier; queue/retry.

## 12) Emails (Templates)
- Pending Review (booking received)
- Cleared — Payment Link + Questionnaire Link
- Request for More Info
- Declined — Conflict
- Payment Receipt (LawPay) — attach receipt PDF
- Questionnaire Reminder T‑72h/T‑24h/T‑4h
- Payment Reminder (prior to deadline)
- Cancellation (auto or admin)
- Action Plan Delivered (attachments/links)

## 13) Admin Console (MVP)
- Auth: Staff login (email magic‑link or SSO); roles admin/staff.
- Conflict Queue: Filters (age, slot time proximity), actions (Clear/Flag/Needs Info), SLA timers.
- Booking Overview: Status counts, upcoming consults, payment & questionnaire states.
- Automation: Buttons to issue payment link, re‑send links, cancel calendly events, and record notes; audit trail per record.

## 14) Accessibility & UX Principles
- Clear CTAs: Persistent “Book Consultation”, distinct LSR/FSR CTAs, end‑cap CTA bands.
- Trust: TrustBar near hero/pricing (Licensed AZ, 15+ years, confidentiality, secure payment via LawPay).
- Forms: Labels + helper/error text; inputmode/autoComplete; 44×44 touch targets; inline validation; success feedback.
- Loading/Error: Calendly async load with graceful retry; clear fallbacks (tel/email/contact) on failure.

## 15) Analytics & Consent
- Consent banner (minimal); block non‑essential scripts until accepted; honor DNT.
- Events: `cta_click`, `time_selected`, `conflict_clear|flagged|needs_info`, `payment_initiated|succeeded|failed`, `questionnaire_started|completed`, `upload_success|fail`, `consult_attended|no_show`, `action_plan_sent`, `convert_to_limited|convert_to_full`, `engagement_signed`.
- Funnels: Consult, LSR, FSR, and consult→retainer conversion; UTM persistence to LawPay memo where feasible.

## 16) SEO
- JSON‑LD: LegalService (site), FAQPage (FAQs), BreadcrumbList (nav), Article (blog).
- Canonicals + sitemap/robots; OG/Twitter images for major pages.
- Performance levers: `next/image`, lazy load, PPR/ISR, reserve CLS.

## 17) Security & Operational Policies
- Manual conflict gate: No payment link before human clearance; decline avoids sensitive detail disclosure.
- Payment: LawPay HPP; server webhook verification; refunds tracked.
- PII & Docs: Encrypted at rest; signed URLs; strict data retention; no PII in logs; audit logs for sensitive actions.
- DB: Crunchy Bridge with TLS, least‑privilege roles, PITR, pgaudit, IP allowlists (where possible); password rotation.
- Headers: HSTS, CSP (report‑only → enforce), Referrer‑Policy, X‑Content‑Type‑Options; X‑Frame‑Options exceptions for embeds.
- SLAs:
  - Conflict review: Standard ≤4 business hours; near‑term ≤2 hours; same‑day slots disabled or “call to expedite”.
  - Payment deadline: 24h after clearance or T‑12h before slot (whichever first), else auto‑cancel.
  - Questionnaire deadline: ≥24h pre‑consult (immediate for urgent bookings) or reschedule/cancel per policy.

## 18) Phased Delivery Plan
### Phase 1 — MVP (2–4 weeks)
- Marketing shell (Home, How, Pricing, Book, Contact, core Practice hubs, Legal).
- Calendly embed + conflict capture; BookingIntent + ConflictRecord; Admin console (basic queue/actions).
- LawPay HPP link issuance after “Clear”; webhook verification; confirmation emails.
- Questionnaire MVP (RHF+Zod; autosave; magic‑link resume; minimal uploads); reminders; deadlines via cron.
- Fallback MyCase integration (intake email/Zapier) to deliver PDFs/attachments.
- Consent, basic analytics events, accessibility baseline, SEO metadata.

### Phase 2 — Hardening & Automation (4–6 weeks)
- Calendly API for programmatic cancel/confirm; reserve/confirm logic tied to payment.
- Robust conflict UI (needs info flow, deadlines, auto‑cancelers), improved logs.
- Uploads with presigned URLs and optional AV scanning; action plan delivery workflow.
- Admin dashboard KPIs; more email templates; Lighthouse & a11y audits; Lighthouse CI.

### Phase 3 — Representation Flows (4–6 weeks)
- Limited‑Scope: Service menu → conflict gate → LawPay → delivery milestones; tailored intake.
- Full‑Scope: Retainer to trust via LawPay → e‑sign engagement → onboarding intake & docs.
- MyCase API adapter (if available): contact/matter/related parties/documents/events/notes with idempotency.

### Phase 4 — Optimization & Scale (ongoing)
- Post‑consult nurture, self‑serve reschedule/cancel, richer reporting and funnels, A/B tests, Sentry, cost optimization.

## 19) Acceptance Criteria (MVP)
- Conflicts: Staff can Clear/Flag/Needs Info; no payment link before clearance; decline auto‑cancels event; audit logs present.
- Payments: LawPay success verified server‑side; receipts sent; refunds tracked; memos contain booking reference and slot.
- Questionnaire: Required and validated ≥24h pre‑consult; autosave/resume; uploads functional on mobile; reminders fire.
- Delivery: Consult held for 90 minutes; action plan provided in 24–48h; packet delivered to MyCase via fallback.
- Experience: Lighthouse Mobile ≥90; keyboard operability; structured data validates.

## 20) Environment & Dev Onboarding
- Requirements: Node 20+, npm, Crunchy Bridge Postgres, S3/R2 bucket, email provider (Resend/Postmark), Calendly account, LawPay account, MyCase intake inbox (or Zapier).
- Env Vars (examples):
  - `DATABASE_URL`, `DIRECT_URL` (Prisma; TLS required)
  - `STORAGE_BUCKET`, `STORAGE_REGION`, `STORAGE_ACCESS_KEY`, `STORAGE_SECRET_KEY`
  - `EMAIL_PROVIDER_API_KEY`, `EMAIL_FROM`
  - `CALENDLY_SIGNING_SECRET`, `CALENDLY_API_KEY` (Phase 2)
  - `LAWPAY_MERCHANT_ID`, `LAWPAY_HMAC_SECRET`
  - `MYCASE_INTAKE_EMAIL` (Phase 1), `MYCASE_API_KEY` (Phase 3)
  - `NEXTAUTH_SECRET`, `APP_BASE_URL`
- Scripts: `dev`, `build`, `start`, `lint`, `type-check`, `test`.
- CI: GitHub Actions — npm ci, lint, type‑check, unit tests; add Lighthouse CI in Phase 2.

---

This unified PRD is prescriptive so a new developer can begin immediately. It balances fast, SEO‑friendly marketing with the dynamic workflows required for manual conflict gating, LawPay payments, robust questionnaires, and MyCase handoff.

## 21) Wireframe Blueprints (Lo‑Fi)
Visual references to guide layout and hierarchy. Final design can evolve, but structure/order should remain.

- Home (`/`)
  - Above the fold: [Header] → [Hero (H1, subhead, Primary CTA, Secondary CTA)] → [TrustBar]
  - Body: [Feature Cards (3)] → [Social Proof Teaser] → [CTABand] → [Footer]
  - Mobile: single‑column; CTAs visible without scrolling more than 1–2 screens.

- How It Works (`/how-it-works/`)
  - [Header] → [Hero] → [Steps Grid (5): Conflict → Payment → Questionnaire → Consult (90m) → Action Plan]
  - [FAQ Teaser] → [CTABand] → [Footer]

- Pricing (`/pricing/`)
  - [Header] → [Hero] → [Pricing Card ($500/90m, inclusions, guarantee)] → [Comparison Band]
  - [Trust Badges Row] → [CTABand] → [Footer]

- Book (`/book/`)
  - [Header] → [Info Banner: “Appointment held pending manual conflict check” + timezone + guarantee chip]
  - [Calendly Embed] (reserved height to avoid CLS) → [Error Fallback (Retry, Contact)] → [Footer]

- Contact (`/contact/`)
  - [Header] → [Contact Cards (Call, Email, Visit)] → [Contact Form] → [Trust Row] → [Footer]

- Services — LSR (`/services/limited-scope/`)
  - [Header] → [Intro] → [Services Grid: each with price + inclusions/exclusions] → [CTABand] → [Footer]

- Services — FSR (`/services/full-representation/`)
  - [Header] → [Intro (retainer ranges, onboarding steps)] → [Process Steps] → [CTA + Contact] → [Footer]

- Practice Area Detail
  - [Header] → [H1 + Intro] → [Common Scenarios] → [Process/Timelines] → [Related FAQs/Resources] → [CTABand] → [Footer]

- Resources Hub/Indexes/Detail
  - Hub: [Header] → [Categories] → [Stats] → [CTABand] → [Footer]
  - Blog/Guide Index: [List/Grid with tags] → [Pagination]
  - Blog Detail: [Title] → [Meta] → [Body] → [Related] → [Share]

- FAQ (`/resources/faq/`)
  - [Header] → [H1] → [Disclosure List by Topic] → [Contact CTA] → [Footer]

- Legal Pages
  - [Header] → [H1] → [Sectioned copy] → [Footer]

- Admin (authenticated)
  - Dashboard: [KPIs] → [Quick filters]
  - Conflicts Queue: [List with SLA badges] → [Detail drawer/page with actions]

## 22) Copy Blocks & Voice
Guidelines and reusable copy to accelerate drafting.

- Voice & Tone
  - Empathetic, clear, professional; plain language; avoid legalese; validate stress; avoid pressure.
  - Use second person (“you/your”), action‑oriented CTAs; emphasize confidentiality and next steps.

- Core CTAs
  - Primary: “Book Consultation”, “Schedule Your Consultation”
  - Secondary: “Learn How It Works”, “View Pricing”, “Contact Us”

- Hero (Home)
  - H1: “Get the Legal Guidance You Need”
  - Subhead: “During life’s most difficult times, get clear answers from an experienced Arizona family law attorney.”
  - Primary CTA: “Book Consultation”  | Secondary CTA: “How It Works”

- Trust Microcopy
  - “Licensed Arizona Attorneys” | “15+ Years Experience” | “100% Confidential” | “Secure payment via LawPay”

- Pricing/Guarantee
  - “$500 for a 90‑minute virtual consultation”
  - “Includes a written action plan delivered within 24–48 hours”
  - “Satisfaction guaranteed—full refund if you’re not satisfied”

- Book Banner (Conflict Gate)
  - “Your appointment is held pending a quick conflict check by our staff. Once cleared, we’ll send your payment link and pre‑consultation questionnaire.”

- FAQ Objections (examples)
  - “Is my consultation confidential?” → “Yes. Communications are protected by attorney‑client privilege to the extent permitted by law.”
  - “When do I pay?” → “After a manual conflict check. We’ll email a LawPay link once cleared.”
  - “What if I need to reschedule?” → “You can reschedule up to 24 hours in advance at no cost.”

- Legal Disclaimers
  - “This website provides general information and does not create an attorney‑client relationship. Legal advice is provided during consultation; ongoing representation requires a separate engagement.”
  - Testimonials: “Results vary. Past outcomes do not guarantee future results.”

## 23) Acceptance Test Checklists
Page‑level acceptance criteria (AC) to validate usability, accessibility, SEO, and flow correctness.

- Site‑Wide AC
  - A11y: Keyboard navigation works across all interactive elements; focus is visible; decorative icons are aria‑hidden; headings are logical.
  - Performance: LCP <2.5s on median device; CLS <0.1; no large layout shifts; third‑party scripts only where used.
  - SEO: Unique title/description; canonical set; OG/Twitter image for core pages; sitemap lists public routes; robots excludes admin.
  - Analytics: Consent banner blocks non‑essential scripts until accepted; core events fire with expected params (cta_click, time_selected, payment_*, questionnaire_*).

- Home AC
  - H1 + subhead present; primary/secondary CTAs visible above the fold on desktop; TrustBar visible within first viewport on mobile.
  - End‑cap CTABand present; links to How It Works and Pricing function.

- How It Works AC
  - Steps show correct sequence: Conflict → Payment → Questionnaire → Consult (90m) → Action Plan.
  - Links to Book and Pricing work; content explains manual conflict gate and timing.

- Pricing AC
  - Shows “$500/90‑minute consultation” and inclusions; refund/guarantee copy; comparison band present.
  - CTAs route to Book/How It Works; OG image renders correctly.

- Book AC
  - Info banner states manual conflict policy; timezone displays; Calendly loads with reserved space; error fallback offers Retry + Contact.
  - No payment CTAs before conflict clearance.

- Contact AC
  - Call/email cards with tel/mailto; form has labels, validation, and success feedback; office/service area listed.

- Services (LSR/FSR) AC
  - LSR: Clear inclusions/exclusions and pricing; CTA starts conflict‑gated flow.
  - FSR: Retainer ranges and onboarding steps; CTA to contact/lead; links to practice areas.

- Practice Area Detail AC
  - Unique H1; content sections present; related resources/FAQ; end‑cap CTAs working.

- Resources AC
  - Blog/Guides indexes paginate; detail pages have structured Article data; FAQ has FAQPage JSON‑LD; testimonials have disclaimer.

- Legal AC
  - Pages readable and accessible; linked in footer; canonical set; noindex not applied.

- Utility AC
  - 404 offers helpful links; 500 offers retry + contact; thank‑you/confirmation summarize next steps.

- Admin AC (authenticated)
  - Conflicts queue lists pending with SLA badges; detail actions (Clear/Flag/Needs Info) function; audit logs are created.
  - Booking, payments, questionnaires dashboards show correct counts and allow filtering.

## 24) Content Matrix (Owners, Sources, Deadlines)
Use this matrix to plan drafting, review, and publication. SEO = title/description/keywords; Media = images/icons; Legal = policy/legal review; A11y = headings, contrast, alt text.

| Page | Owner | Source Inputs | Media | SEO | Legal | A11y | Min Words | Draft Due | Final Due | Status |
|---|---|---|---|---|---|---|---|---|---|
| Home (`/`) | Attorney + Copywriter | Firm positioning, trust claims | Hero image/illustrations | Yes | N/A | Yes | 1000–1500 | T+7d | T+14d | Not started |
| How It Works | Attorney | Process details, refund/confidentiality policy | Step icons | Yes | Yes | Yes | 1200–1500 | T+7d | T+14d | Not started |
| Pricing | Attorney + Ops | $500/90m, inclusions, guarantee | Badges | Yes | Yes | Yes | 1200–1500 | T+7d | T+14d | Not started |
| Book | PM + Dev | Calendly config, conflict notice copy | None | Yes | N/A | Yes | ≤600 (transactional) | T+5d | T+10d | Not started |
| Contact | Staff | Phone/email, hours, service area | Icons/map | Yes | N/A | Yes | 800–1200 | T+5d | T+10d | Not started |
| LSR Services | Attorney | List of services, inclusions/exclusions, prices | Service icons | Yes | Yes | Yes | ≥1500 | T+10d | T+17d | Not started |
| FSR Services | Attorney | Retainer ranges, onboarding steps | Process icons | Yes | Yes | Yes | ≥1500 | T+10d | T+17d | Not started |
| Practice Areas Hub | Copywriter | Summaries for 4 pillars | Icons | Yes | N/A | Yes | ≥1500 (or 3k if cornerstone) | T+10d | T+17d | Not started |
| Uncontested Divorce | Attorney | FAQs, process, timelines | Section art | Yes | N/A | Yes | ≥1500 | T+12d | T+19d | Not started |
| Custody Overview | Attorney | FAQs, process, timelines | Section art | Yes | N/A | Yes | ≥1500 | T+12d | T+19d | Not started |
| Child Support | Attorney | FAQs, process, timelines | Section art | Yes | N/A | Yes | ≥1500 | T+12d | T+19d | Not started |
| Domestic Violence | Attorney | FAQs, process, timelines | Section art | Yes | N/A | Yes | ≥1500 | T+12d | T+19d | Not started |
| Resources Hub | Editor | Outline + category blurbs | N/A | Yes | N/A | Yes | ≥1000 | T+10d | T+17d | Not started |
| FAQ | Attorney + Editor | Objection handling | N/A | Yes (FAQ LD) | Yes | Yes | ≥1500 | T+7d | T+14d | Not started |
| Blog (first 3) | Editor | Topics: custody timeline, asset protection, residence rules | Thumbnails | Yes | N/A | Yes | ≥1500 each | T+14d | T+21d | Not started |
| Guides (first 2) | Editor | Divorce Guide, Custody Checklist | Cover images | Yes | N/A | Yes | ≥2000 each | T+14d | T+21d | Not started |
| Testimonials | Staff | Client quotes (approved) | Portrait initials | Yes | Yes | Yes | Narrative ≥1000 | T+14d | T+21d | Not started |
| Legal: Privacy | Attorney | Policy | N/A | Yes | Yes | Yes | ≥1200 | T+5d | T+10d | Not started |
| Legal: Terms | Attorney | Policy | N/A | Yes | Yes | Yes | ≥1200 | T+5d | T+10d | Not started |
| Legal: Refund | Attorney | Policy | N/A | Yes | Yes | Yes | ≥1200 | T+5d | T+10d | Not started |

Notes:
- Replace T+Xd with calendar dates. “Attorney” indicates subject‑matter drafting/review by you or your designee; “Editor” can be internal or external content writer. Cornerstone pages in §5.9 must be ≥3,000 words.

## 25) Ticket Breakdown (Epics → Stories)
Tag stories with Phase (P1–P4), Assignee, and AC link (from §23). Suggested estimates are for reference.

- Epic: Project Setup (P1)
  - Story: Initialize Next.js 15 app with Tailwind, TS strict, base layout (1d)
  - Story: Configure env validation (Zod), basic CI (lint/type‑check/build) (1d)
  - Story: Add design tokens, base components (Button, LinkButton, TrustBar, CTABand) (1–2d)

- Epic: Marketing Baseline (P1)
  - Story: Implement Home per wireframe + copy placeholders + CTAs (2d)
  - Story: How It Works page (1d)
  - Story: Pricing page (1–2d)
  - Story: Contact page + form (1–2d)
  - Story: Content length verification tooling (script or CI check) for ≥1,500/3,000 word targets (1d)

- Epic: Practice Areas (P1–P2)
  - Story: Practice Areas Hub (1d)
  - Story: Uncontested Divorce page (1–2d)
  - Story: Custody Overview page (1–2d)
  - Story: Child Support page (1–2d)
  - Story: Domestic Violence page (1–2d)
  - Story: Remaining practice pages (batch by pillar) (6–10d)
  - Story: Cornerstone expansions (Divorce/Custody/Financial/Special hubs ≥3k words) (4–6d)

- Epic: Booking & Conflict Gate (P1)
  - Story: Calendly embed + loader/retry + timezone banner (1–2d)
  - Story: BookingIntent model + API to capture slot + conflict info (2d)
  - Story: Conflict queue (list) with SLA badges (2d)
  - Story: Conflict detail actions (Clear/Flag/Needs Info) + email templates (3d)

- Epic: Payments (LawPay) (P1)
  - Story: Generate HPP link for cleared intents (server) (1d)
  - Story: Webhook verification + receipt email + confirmation page (2d)
  - Story: Auto‑cancel unpaid by deadline (cron) (1–2d)

- Epic: Questionnaire (P1)
  - Story: RHF+Zod multi‑step form with autosave and magic‑link resume (3–5d)
  - Story: Presigned uploads to R2/S3 + validation + mobile UX (2–3d)
  - Story: Completion gate (≥24h) + reminders T‑72/T‑24/T‑4 (2d)

- Epic: Admin Console (P1–P2)
  - Story: Auth (NextAuth or magic link) + RBAC (2d)
  - Story: Conflict queue/filters + detail drawer/page (2–3d)
  - Story: Bookings/Payments/Questionnaires dashboards (2–4d)

- Epic: Integrations (P2–P3)
  - Story: Calendly API (programmatic cancel/confirm) (3–4d)
  - Story: MyCase fallback (intake email/Zapier) adapter (2d)
  - Story: MyCase API adapter (when available) + idempotent sync (4–6d)

- Epic: SEO/Analytics/Consent (P1–P2)
  - Story: Canonicals, sitemap, robots, JSON‑LD (2d)
  - Story: Consent banner + analytics events (cta_click, time_selected, payment_*, questionnaire_*) (2d)
  - Story: Add content length check to CI using `npm run check-content` (0.5d)

- Epic: Accessibility & Performance (P1–P2)
  - Story: A11y sweep (aria, labels, headings, focus, contrast) (2–3d)
  - Story: CWV hardening (reserve CLS, lazy scripts, next/image) + Lighthouse CI (2–3d)

Dependencies:
- Payments depends on Conflict gate; Questionnaire reminders depend on Payment success and slot time; MyCase adapter depends on questionnaire completion and payment; Calendly API depends on BookingIntent identifiers.

## 26) Roles & RACI (Suggested)
- Attorney (A/R for legal content, conflict policy, refund policy)
- PM (A/R for scope/order, deadlines, AC sign‑off)
- Tech Lead (A/R for architecture, security, delivery)
- Devs (R for implementation)
- Editor/Designer (R for copy, visual assets)
- Paralegal/Staff (R for conflict review workflow, email templates)

## 27) Static‑Only MVP Addendum (Authoritative for Phase 1)
This addendum narrows Phase 1 to a static‑only website. All automation and back‑office features are explicitly deferred.

### 27.1 Scope (Static‑Only)
- Build only static pages listed in §5.2 (Core, Services, Practice Areas, Resources, Legal, Utility). Admin pages are excluded from MVP.
- Book page embeds Calendly. Copy must clearly state that (a) staff will perform a manual conflict check, (b) payment link will be emailed after clearance, and (c) a questionnaire will arrive by email/MyCase.
- No custom forms or data capture beyond Calendly; the Contact page may link to `mailto:` and `tel:` and display basic info.
- No payment links anywhere on the site. Pricing/How‑It‑Works/Book pages must reinforce the manual sequence.

### 27.2 Manual Operations (Off‑Site for MVP)
- Calendly emails booking notifications to staff.
- Staff performs conflict review in MyCase/firm systems.
- If Clear: Staff emails LawPay link to client; if Flagged: staff declines and cancels the event in Calendly.
- Staff emails questionnaire link (MyCase intake or form provider) and document checklist.
- Attorney sends action plan 24–48h post‑consult; staff files materials in MyCase.

### 27.3 Tech Stack (Static‑Only)
- SSG: Next.js static export (or Astro) deployed on a CDN.
- Content only (no route handlers, no database, no webhooks, no admin auth).
- Calendly embed; analytics with consent; canonical URLs and sitemap.xml; FAQ/LegalService JSON‑LD.

### 27.4 Phased Plan (Revised)
- Phase 1 (2–3 weeks): Static pages, Calendly embed, content length standards, SEO/a11y/performance baselines; clear copy for manual steps.
- Phase 2 (3–6 weeks): Content expansion to meet/beat word count targets (≥1,500; cornerstones ≥3,000), additional practice pages, resources, testimonials.
- Phase 3+: Introduce backend for automation (conflict queue, LawPay verification, questionnaire autosave/uploads, admin console, MyCase API) when operations require it.

### 27.5 Acceptance Criteria (Overrides for Phase 1)
- No payment link appears anywhere on site; copy explicitly explains manual conflict → payment by email → questionnaire by email/MyCase.
- Book page shows Calendly embed with reserved space; includes timezone & guarantee copy; provides an error fallback message.
- Content length: ≥1,500 words per content page; cornerstone hubs ≥3,000; H2/H3 hierarchy; internal links.
- SEO/a11y: Unique titles/descriptions; canonical URLs; sitemap.xml; FAQ JSON‑LD; keyboard navigation; visible focus; decorative icons hidden; reduced motion respected.
