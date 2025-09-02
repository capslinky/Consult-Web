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
    - `/practice-areas/custody/fathers-rights/` (optional, targeted messaging)
    - `/practice-areas/custody/parenting-coordinator-gal/` (optional, coordinator & guardian ad litem)
  - Financial Matters — `/practice-areas/financial/`
    - `/practice-areas/financial/child-support/`
    - `/practice-areas/financial/spousal-maintenance/`
    - `/practice-areas/financial/property-division/`
    - `/practice-areas/financial/debt-division/`
    - `/practice-areas/financial/business-valuation/`
    - `/practice-areas/financial/retirement-investment-accounts/`
    - `/practice-areas/financial/prenuptial/`
    - `/practice-areas/financial/postnuptial/`
    - `/practice-areas/financial/cohabitation-agreements/` (optional)
  - Special Circumstances — `/practice-areas/special/`
    - `/practice-areas/special/domestic-violence/`
    - `/practice-areas/special/paternity/`
    - `/practice-areas/special/mediation/`
    - `/practice-areas/special/appeals/`
    - `/practice-areas/special/enforcement/`
    - `/practice-areas/special/domestic-partnership/` (optional)

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

## 28) Page‑by‑Page Content Outlines (Phase 1)
Use these H2/H3 skeletons to draft content (≥1,500 words per page; cornerstone hubs will grow ≥3,000 words in Phase 2). CTAs: Primary = Book; Secondary = How It Works / Pricing as appropriate.

### Home (`/`)
- H1: Get the Legal Guidance You Need
- H2: Compassionate Arizona Family Law Support
  - H3: What We Do (Divorce, Custody, Financial, Special)
- H2: Why Choose Paradise Law AZ
  - H3: 15+ Years Experience
  - H3: Licensed Arizona Attorneys
  - H3: 100% Confidential
- H2: How Our 90‑Minute Consultation Works
  - H3: What’s Included (action plan in 24–48h)
  - H3: Manual Conflict Check → Payment → Questionnaire
- H2: Client Stories (Social Proof)
- H2: Ready to Take the Next Step? (CTABand)

### How It Works (`/how-it-works/`)
- H1: How Our Process Works
- H2: Step 1 — Pick a Time (Calendly)
- H2: Step 2 — Manual Conflict Check (No payment until cleared)
- H2: Step 3 — Payment via LawPay (Email link from staff)
- H2: Step 4 — Pre‑Consult Questionnaire & Documents (email/MyCase)
- H2: Step 5 — 90‑Minute Virtual Consultation
- H2: Step 6 — Written Action Plan (24–48 hours)
- H2: Timelines & Deadlines (Questionnaire ≥24h; reschedules)
- H2: Policies & Guarantees (Refund/confidentiality, plain language)
- H2: Frequently Asked Questions (teaser + link to FAQ)
- H2: Get Started Today (CTABand)

### Pricing (`/pricing/`)
- H1: Simple, Transparent Pricing
- H2: $500 — 90‑Minute Virtual Consultation
  - H3: What’s Included (case review, strategy, written plan)
  - H3: What’s Not Included (ongoing representation)
- H2: How Payment Works (After Conflict Clearance)
  - H3: Why We Manually Clear Conflicts First
- H2: Compare Your Options (DIY vs Consultation)
- H2: Our Satisfaction Guarantee & Refund Policy
- H2: Common Questions About Pricing
- H2: Book Your Consultation (CTABand)

### Book (`/book/`)
- H1: Schedule Your Consultation
- H2: Before You Book (Read First)
  - H3: Manual Conflict Review
  - H3: Payment Link Emailed After Clearance
  - H3: Questionnaire Arrives by Email/MyCase
- H2: Choose a Time (Calendly Embed)
- H2: What Happens Next
  - H3: Confirmation by Email
  - H3: Timeline to Prepare
- H2: Need Help? (Fallback contact options)

### Contact (`/contact/`)
- H1: Contact Paradise Law AZ
- H2: Call Us (Click‑to‑Call) — hours and emergency note
- H2: Email Us — typical response time
- H2: Service Area — Phoenix Metro & Arizona
- H2: When to Book vs When to Call
- H2: Frequently Asked Questions (short set)
- H2: Ready to Book? (CTABand)

### Practice Areas Hub (`/practice-areas/`)
- H1: Family Law Practice Areas
- H2: Divorce & Separation
  - H3: Uncontested, Contested, High‑Asset, Military, Legal Separation
- H2: Child Custody & Parenting
  - H3: Legal Decision‑Making, Parenting Time, Modifications, Relocation, Evaluations, Grandparents’ Rights
- H2: Financial Matters
  - H3: Child Support, Spousal Maintenance, Property & Debt Division, Business Valuation, Retirement, Prenuptial, Postnuptial
- H2: Special Circumstances
  - H3: Domestic Violence, Paternity, Mediation, Appeals, Enforcement
- H2: Not Sure Where to Start? (CTABand)

### Uncontested Divorce (`/practice-areas/divorce/uncontested/`)
- H1: Uncontested Divorce in Arizona
- H2: Overview & Eligibility
- H2: Required Steps & Timeline
- H2: Disclosures & Agreements
- H2: Costs, Value, and Common Pitfalls
- H2: How We Help in Your Situation
- H2: FAQs About Uncontested Divorce
- H2: Get Started (CTABand)

### Custody Overview (`/practice-areas/custody/`)
- H1: Legal Decision‑Making & Parenting Time in Arizona
- H2: Best Interests of the Child (factors)
- H2: Parenting Plans (day‑to‑day, holidays, decision‑making)
- H2: Modifications & Enforcement
- H2: Special Issues (Relocation, Supervised Visitation)
- H2: FAQs About Custody/Parenting
- H2: Talk to an Attorney (CTABand)

### Child Support (`/practice-areas/financial/child-support/`)
- H1: Arizona Child Support Overview
- H2: Guidelines & Calculation Factors
- H2: Deviations & Special Circumstances
- H2: Establishment, Modification, Enforcement
- H2: Documentation & Evidence
- H2: FAQs About Child Support
- H2: Get Clarity on Your Case (CTABand)

### Domestic Violence (`/practice-areas/special/domestic-violence/`)
- H1: Domestic Violence & Protection in Arizona
- H2: Orders of Protection (OOP) & Emergency Orders
- H2: Impact on Legal Decision‑Making & Parenting Time
- H2: Safety Planning & Community Resources
- H2: Filing, Hearings, and Evidence
- H2: FAQs About Orders of Protection
- H2: We Can Help (CTABand)

### FAQ (`/resources/faq/`)
- H1: Frequently Asked Questions
- H2: Consultation & Payment
- H2: Process & Timelines
- H2: Representation Scope
- H2: Privacy & Confidentiality
- H2: Policies (Refunds, Reschedules)
- H2: Still Have Questions? (Contact/CTABand)

### Privacy Policy (`/legal/privacy/`)
- H1: Privacy Policy
- H2: Information We Collect
- H2: How We Use Your Information
- H2: Sharing & Third Parties
- H2: Data Security & Retention
- H2: Your Rights & Choices
- H2: Contact Information

### Terms of Service (`/legal/terms/`)
- H1: Terms of Service
- H2: Acceptance of Terms
- H2: No Attorney‑Client Relationship via Website
- H2: Intellectual Property
- H2: Disclaimers & Limitation of Liability
- H2: Governing Law & Contact

### Refund Policy (`/legal/refund-policy/`)
- H1: Refund Policy
- H2: Consultation Guarantee & Eligibility
- H2: Request & Processing Timelines
- H2: Non‑Refundable Items/Scenarios
- H2: Contact for Refund Requests

### Thank You (`/thank-you/`)
- H1: Thank You — We’ve Received Your Submission
- H2: What Happens Next
- H2: Prepare for Your Consultation
- H2: Helpful Resources

### Payment Confirmation (`/confirmation/`)
- H1: Payment Confirmed
- H2: Appointment Details
- H2: What Happens Next
- H2: Need Assistance?

### 404 (`/404/`)
- H1: Page Not Found
- H2: Popular Pages
- H2: Need Help? (Contact/CTABand)

## 29) First‑Pass Draft Copy (Phase 1 Static Pages)
The following copy is production‑quality in tone and structure and can be pasted into the page templates as a starting point. Adjust names, dates, and details as needed. Content reflects Arizona‑specific language and the static‑only MVP (manual conflict review, payment by emailed LawPay link, questionnaire by email/MyCase).

### Home — Draft Copy
H1: Get the Legal Guidance You Need

Subhead: During life’s most difficult moments, you deserve clear answers from an experienced Arizona family law attorney who understands what you’re facing.

Intro (60–90 words)
When your family, future, and finances are on the line, confusion makes everything harder. At Paradise Law AZ, our 90‑minute virtual consultation gives you clarity fast: what the law says, which options fit your situation, and what to do next. You’ll meet directly with an Arizona family law attorney and leave with a written action plan within 24–48 hours. It’s compassionate, confidential guidance designed to help you move forward with confidence.

Compassionate Arizona Family Law Support (approx. 2–3 paragraphs)
Family cases aren’t just “legal issues”—they’re personal turning points. Whether you’re beginning a divorce, navigating parenting time and legal decision‑making, or sorting out complex property questions, you need advice you can trust. Our role is to explain Arizona law in plain language, outline your choices, and help you see a path that protects what matters most.

We focus on practical solutions. Sometimes that means building toward a fair settlement; other times it means preparing for firm, strategic litigation. In either case, we’ll tell you what each path involves—timelines, costs, and likely trade‑offs—so you can decide with clarity.

Why Choose Paradise Law AZ (bulleted points can be rendered as cards)
- 15+ Years of Arizona Family Law Experience: informed guidance grounded in day‑to‑day courtroom realities.
- Licensed Arizona Attorneys: your consultation is attorney‑led from start to finish.
- 100% Confidential: attorney‑client communications are confidential to the extent permitted by law.
- Written Action Plan: get a clear, practical plan within 24–48 hours after your consult.

How Our 90‑Minute Consultation Works (3 paragraphs)
Step 1: Pick a time that works for you. We’ll tentatively hold the appointment while we complete a quick, manual conflict check to ensure we can ethically help you. No payment is requested until this review is complete.

Step 2: Once we clear conflicts, our staff emails a secure LawPay link for the $500 fee, along with a pre‑consultation questionnaire and document checklist (typically via email or through our MyCase intake). Completing the questionnaire at least 24 hours before your appointment helps us tailor the discussion to your goals.

Step 3: Meet with your attorney for 90 minutes. We’ll listen to your story, answer questions, and map your options. Within 24–48 hours, you’ll receive a written action plan summarizing next steps, resources, and recommendations.

Client Experiences (social proof teaser)
Clients consistently tell us the consultation gave them “a plan,” “relief,” and “a realistic understanding of the process.” While every matter is unique and results vary, our commitment to clarity, preparation, and professional care remains constant.

Call to Action (CTA band microcopy)
Ready to get clear on your next steps? Book your 90‑minute virtual consultation today and move forward with confidence.

### How It Works — Draft Copy
H1: How Our Process Works

Intro (40–60 words)
We keep the process straightforward: choose a time, we complete a quick conflict check, you pay once cleared, and you complete a short questionnaire so we can prepare. Then we meet for 90 minutes and deliver a written action plan within 24–48 hours.

Step 1 — Pick a Time (1 paragraph)
Use our online calendar to choose a day and time that fits your schedule. We’ll tentatively hold the appointment while we complete a manual conflict check to ensure we can ethically represent you.

Step 2 — Manual Conflict Check (2 paragraphs)
Before taking any payment, our staff reviews your information to confirm there’s no ethical conflict. This protects you and ensures that any advice we provide is appropriate. If we identify a conflict, we’ll promptly notify you and cancel the appointment.

If cleared, we’ll email you next steps—no surprises. If flagged, we’ll explain that we cannot proceed and—when ethically permissible—suggest neutral resources or a referral list.

Step 3 — Payment via LawPay (1–2 paragraphs)
Once cleared, our staff emails a secure LawPay link for the $500 consultation fee. We do not accept payment before conflict clearance. LawPay is a widely‑used legal payment platform that keeps your payment information secure.

Step 4 — Pre‑Consultation Questionnaire & Documents (2 paragraphs)
We’ll also send a short pre‑consultation questionnaire and a document checklist. These help us understand your key concerns and prepare for a focused, efficient meeting. Please complete the questionnaire at least 24 hours before your consult and upload or bring any relevant documents.

Step 5 — 90‑Minute Virtual Consultation (1–2 paragraphs)
Meet with your Arizona attorney by secure video. We’ll discuss your goals, explain how Arizona law applies, outline options, and help you weigh trade‑offs. You’ll have plenty of time to ask questions and get clarity on what to do next.

Step 6 — Written Action Plan (1 paragraph)
Within 24–48 hours, you’ll receive a written action plan that summarizes your situation, next steps, key dates, and helpful resources. You can use it on your own or as a roadmap if you decide to retain us for limited‑scope or full‑scope representation.

Timelines & Policies (1 paragraph)
Questionnaire completion: ≥24 hours prior to your consult (earlier is even better). Rescheduling: please let us know as soon as possible; we’ll work with you to find a new time.

Confidentiality & Guarantee (2 short paragraphs)
Your consultation is confidential to the extent permitted by law. We handle sensitive matters with care and professionalism.

Your satisfaction matters. If you’re not satisfied with your consultation, contact us within the timeframe in our Refund Policy and we’ll make it right.

### Pricing — Draft Copy
H1: Simple, Transparent Pricing

Intro (35–50 words)
Your consultation is a flat $500 for 90 minutes with an Arizona family law attorney. No hourly surprises. You’ll leave with a written action plan within 24–48 hours.

What’s Included (bulleted list + paragraph)
- 90‑minute video consultation
- Case review and legal analysis
- Strategy discussion tailored to your goals
- Written action plan (delivered within 24–48 hours)

We focus on clarity, not paperwork volume. If we need additional materials to provide a more precise recommendation, we’ll tell you exactly what will help.

What’s Not Included (short list)
- Ongoing representation (retainer required)
- Court filings or drafting beyond initial guidance
- Expert fees or third‑party costs

How Payment Works (manual conflict check first)
We complete a quick, manual conflict review before any payment is requested. If cleared, our staff emails a secure LawPay link for the $500 consultation fee. If we can’t proceed due to a conflict, we’ll let you know and cancel the appointment.

Why the 90‑Minute Format Works (1–2 paragraphs)
90 minutes is enough time to understand your situation, explain how Arizona law applies, discuss options, and build a realistic plan. You’ll end the call with clear next steps—and a written action plan you can refer back to.

Compare Your Options (DIY vs Consultation) (balanced summary)
Do‑It‑Yourself: Lower immediate cost, but higher risk of missing deadlines, overlooking evidence, or making concessions that are hard to undo.

Attorney Consultation: A focused 90 minutes can save weeks of uncertainty, help avoid common pitfalls, and provide confident direction. If you choose to move forward with us, your consultation lays the groundwork for limited‑scope or full‑scope representation.

Guarantee & Refunds (short paragraph)
Your satisfaction matters. Review our Refund Policy for timing and eligibility. If you’re not satisfied, contact us and we’ll make it right.

Call to Action
Ready to get clarity on your next steps? Book your 90‑minute virtual consultation today.

### Practice Areas Hub — Draft Copy
H1: Family Law Practice Areas

Intro (60–90 words)
Every family is unique. We organize our services around the decisions that most often shape Arizona family law cases—ending a marriage, protecting children, dividing property and debt, and addressing special circumstances that require swift action. Explore the topics below to understand how Arizona law frames your options and what to consider before you decide your next move.

Divorce & Separation (summary)
Whether your matter is uncontested or highly contested, divorce in Arizona involves disclosures, property and debt division, and—if applicable—spousal maintenance (alimony). We’ll explain timelines, court expectations, and practical steps to protect your interests from day one.

Child Custody & Parenting (summary)
Arizona uses “legal decision‑making” and “parenting time” instead of “custody/visitation.” Parenting plans, modifications, relocation, and evaluations center on the child’s best interests. We’ll show you what courts look for and how to document the care you already provide.

Financial Matters (summary)
From child support to business valuation, community/separate property tracing, and retirement division (including QDROs), sound decisions now can prevent costly issues later. We help you make informed choices grounded in Arizona law and practical realities.

Special Circumstances (summary)
Orders of protection, paternity, mediation, appeals, and enforcement actions require focused strategy. We help you evaluate urgency, evidence, and the path most likely to achieve your goals.

CTA
Not sure where to start? Book a 90‑minute virtual consultation and get a written plan in 24–48 hours.

### Uncontested Divorce — Draft Copy
H1: Uncontested Divorce in Arizona

Overview (2–3 paragraphs)
An uncontested divorce is often the fastest, most cost‑effective way to end a marriage when you and your spouse agree on all major terms: property and debt division, spousal maintenance (if any), and—if you have children—legal decision‑making, parenting time, and child support. Arizona’s 60‑day waiting period typically applies after service/acceptance. If your agreement is complete, the court may enter a decree without a trial.

Required Steps & Timeline (high level)
- File or accept service; observe the 60‑day waiting period (in most cases).
- Exchange complete, good‑faith financial information (disclosures).
- Prepare a comprehensive consent decree that addresses every required topic under Arizona law.
- Submit documents to the court; attend any required hearing.

Disclosures & Agreements (plain language)
Even in uncontested cases, Arizona expects full, good‑faith disclosure of property, debt, income, and expenses. Clear agreements today prevent disputes later—especially around retirement accounts, real estate, and taxes. If you have kids, your parenting plan should detail schedules, holidays, decision‑making, travel, and communication.

Costs, Value, and Pitfalls (1–2 paragraphs)
Uncontested divorce minimizes litigation, but “do‑it‑yourself” mistakes can become expensive to fix—particularly with retirement division (QDROs), mortgage assumptions, and incomplete parenting plans. A focused consultation helps you avoid common pitfalls and finalize a durable agreement.

FAQs (sample prompts)
- Do we need to attend a hearing?
- How do we handle retirement accounts and QDROs?
- Can we modify the agreement later?

CTA
If you’re ready to finalize an uncontested divorce, schedule your consultation and get a written action plan within 24–48 hours.

### Custody Overview — Draft Copy
H1: Legal Decision‑Making & Parenting Time in Arizona

Overview (2 paragraphs)
Arizona focuses on the “best interests of the child.” Courts allocate legal decision‑making (who makes major choices about education, healthcare, religion) and parenting time (the schedule). Plans can be joint or sole, and they can vary widely depending on work schedules, school calendars, travel, and the child’s specific needs.

Best Interests & Parenting Plans (2–3 paragraphs)
Courts consider factors like the child’s adjustment to home and school, relationships with each parent, each parent’s willingness to support the child’s relationship with the other, and—when appropriate—the child’s wishes. A strong parenting plan addresses day‑to‑day routines, holidays, travel, communication, dispute resolution, and exchanges.

Modifications & Relocation (1–2 paragraphs)
If circumstances change substantially and continuously (e.g., schedules, distance, a child’s needs), you can request a modification. Relocation cases introduce additional notice and best‑interest analysis; evidence and planning are critical.

Special Issues (brief)
Supervised parenting time, third‑party rights, interstate (UCCJEA), and evaluations. We’ll explain what to expect and how to prepare.

CTA
Talk to an attorney about building a realistic parenting plan grounded in your child’s needs.

### Child Support — Draft Copy
H1: Arizona Child Support Overview

Guidelines & Factors (2 paragraphs)
Arizona’s child support guidelines consider each parent’s income, parenting time, healthcare and childcare costs, and certain adjustments. The result is a guideline amount the court may adopt or deviate from when appropriate.

Establish, Modify, Enforce (2–3 paragraphs)
Support can be established by agreement or court order. A “substantial and continuing” change may justify modification (e.g., income changes, parenting‑time shifts). Enforcement tools include wage assignments and other remedies; documentation and communication matter.

Deviations & Special Circumstances (brief)
High medical needs, travel, or other expenses may support a deviation when justified by evidence and child’s best interests.

CTA
Get clarity on your likely range and how to document a fair outcome.

### Domestic Violence — Draft Copy
H1: Domestic Violence & Protection in Arizona

Safety & Orders (2–3 paragraphs)
If you need protection, you can request an Order of Protection (OOP). In urgent situations, an emergency order may be available. These orders can affect communication, contact, and residence. We’ll discuss your options, what to expect at hearings, and how to collect evidence safely.

Impact on Parenting (1–2 paragraphs)
Domestic violence can affect legal decision‑making and parenting time. Courts focus on child safety and best interests; plans may include safety provisions, supervised exchanges, or supervised parenting time.

Resources (brief)
We can provide a list of local shelters, counseling, and legal resources.

CTA
If safety is a concern, consult promptly and discuss a plan that prioritizes protection.

### FAQ — Draft Copy
H1: Frequently Asked Questions

Consultation & Payment
- When do I pay for the consultation? After our staff completes a manual conflict check, we email a secure LawPay link for the $500 fee.
- What’s included in the 90‑minute consultation? A focused meeting with an Arizona attorney and a written action plan within 24–48 hours.

Process & Timelines
- How soon can I meet with an attorney? Availability varies; booking holds your time while we complete a quick conflict check.
- What happens if I need to reschedule? Contact us as soon as possible; we’ll work with you to find a new time.

Representation Scope
- Does the consultation create an attorney‑client relationship? It creates a limited‑scope consultation. Ongoing representation requires a separate engagement agreement.
- Do you handle trials? Yes, subject to availability, conflicts, and a signed engagement.

Privacy & Confidentiality
- Is my consultation confidential? Yes, to the extent permitted by law.
- Do you share my information? We use reputable vendors (e.g., calendaring and payment) and limit disclosures as described in our policies.

Policies
- What is your refund policy? See our Refund Policy for timing and eligibility. If you’re not satisfied, contact us and we’ll make it right.

CTA
Still have questions? Call or email—we’re here to help.

### Privacy Policy — Draft Copy
H1: Privacy Policy

Introduction
We respect your privacy. This policy explains what we collect, how we use it, how we protect it, and the choices you can make. By using our website or services, you agree to this policy.

Information We Collect
- Contact information (name, email, phone)
- Technical data (IP address, browser, device, pages viewed)
- Limited service‑related details you choose to share (e.g., scheduling context)

How We Use Information
- To respond to inquiries, schedule consultations, and communicate with you
- To operate and improve our website (analytics and performance)
- To comply with legal obligations

Sharing & Third Parties
We use trusted providers for calendaring, payment, email, and hosting. We limit sharing to what’s necessary to provide services. We do not sell your personal information.

Data Security & Retention
We apply administrative, technical, and physical safeguards. We retain data only as long as necessary for the purposes described or as required by law.

Your Choices
You can opt out of non‑essential cookies/analytics and request updates to your contact details. Contact us for additional privacy questions.

Contact
If you have questions about this policy, please contact our office.

### Terms of Service — Draft Copy
H1: Terms of Service

Acceptance of Terms
By using this website, you agree to these Terms. If you do not agree, please do not use the site.

No Attorney‑Client Relationship via Website
Website content is general information, not legal advice. Scheduling a consultation creates a limited‑scope consultation only. Ongoing representation requires a separate written engagement.

Intellectual Property
All content on this website is owned by or licensed to us. You may not reproduce or distribute content without permission.

Disclaimers & Limitation of Liability
We do not guarantee outcomes. We are not responsible for third‑party sites or services referenced on this site.

Governing Law
These Terms are governed by Arizona law.

### Refund Policy — Draft Copy
H1: Refund Policy

Our Commitment
Your satisfaction matters. If you are not satisfied with your consultation, contact us promptly and we will make it right, including a refund when appropriate under this policy.

Eligibility & Timing
Refund requests should be made within the timeframe stated on your confirmation email or receipt. We may ask for feedback to understand what fell short and how we can improve.

Exceptions
Refunds are not available for no‑shows or for services already performed beyond the consultation. If you need to reschedule, please contact us as soon as possible.

Process
Email or call our office to request a refund. Approved refunds are processed to the original payment method.

### Book — Draft Copy
H1: Schedule Your Consultation

Intro (40–60 words)
Choose a time that fits your schedule. We’ll tentatively hold your appointment while we perform a quick, manual conflict check to ensure we can ethically proceed. No payment is requested until that review is complete. Once cleared, we’ll email a secure LawPay link and a pre‑consultation questionnaire.

Before You Book (key notes)
- Manual Conflict Review: We verify there’s no ethical conflict before taking payment.
- Payment Link by Email: After clearance, our staff emails a LawPay link for the $500 fee.
- Questionnaire by Email/MyCase: Please complete it ≥24 hours before your consultation.

Choose a Time (Calendly embed section copy)
Use the calendar below to select your date and time. If the widget fails to load, try again or contact us and we’ll help you book.

What Happens Next
After you book, check your email. If we clear conflicts, we’ll send your payment link and questionnaire with a quick list of what to prepare. If we identify a conflict, we’ll notify you and cancel the appointment.

Having Trouble?
If the calendar doesn’t load or you prefer to book by phone, call us and our team will help you schedule.

### Contact — Draft Copy
H1: Contact Paradise Law AZ

Intro (35–50 words)
We’re here to help. If you have a quick question or need help booking, call or email and we’ll respond as soon as we can. If you’re ready to move forward, the fastest path to a plan is to schedule a 90‑minute virtual consultation.

Call Us
Phone: (480) 555‑0123  
Hours: Monday–Friday, 9:00 AM–5:00 PM (extended hours by appointment)  
If this is a safety‑sensitive situation, call 911 or seek immediate assistance.

Email Us
General: info@paradiselawaz.com  
We aim to respond within one business day. Please do not include highly sensitive details by email—save those for your consultation.

Service Area
We serve clients throughout the Phoenix metro area and across Arizona. Virtual consultations make it simple to meet wherever you are.

When to Book vs When to Call
If you need immediate clarity about your situation, booking a consultation is often the best next step. If you’re unsure whether a consult is appropriate, call or email and we’ll help you decide.

Ready to Book?
Schedule your 90‑minute consultation today and receive a written action plan within 24–48 hours.

### Thank You — Draft Copy
H1: Thank You — We’ve Received Your Submission

What Happens Next
We’ll review your message and respond as soon as possible. If you requested scheduling help, our team will contact you with available times and next steps.

Prepare for a Consultation
If you plan to book, gather any court orders, important communications, and a brief timeline of key events. This helps us tailor your consultation.

Helpful Resources
Explore our How It Works, Pricing, and FAQ pages for a clear picture of the process and what to expect.

### Payment Confirmation — Draft Copy
H1: Payment Confirmed

Appointment Details
We’ve sent a confirmation email with your appointment date/time and video link. If you do not see it, check your spam folder or contact us for assistance.

What Happens Next
If you haven’t completed your questionnaire yet, please do so as soon as possible (ideally ≥24 hours before your appointment). We’ll review your responses to make the most of your consultation.

Need Assistance?
If anything changes—scheduling, contact info, or new documents—please let us know so we can update your file.

### 404 — Draft Copy
H1: Page Not Found

It looks like the page you’re looking for has moved or no longer exists. Try one of the popular pages below or contact us for help.

Popular Pages
- Home  
- How It Works  
- Pricing  
- Book a Consultation  
- Practice Areas  

Need Help?
Call or email and we’ll point you in the right direction.

## 30) Cornerstone Hub Long‑Form Drafts (Phase 2 Start)
These long‑form drafts seed the ≥3,000‑word requirement for cornerstone hubs. Build on them with examples, AZ statute/rule references in plain language (no legal citations necessary for marketing copy), checklists, and internal links.

### Divorce & Separation Hub — Long‑Form Draft
H1: Divorce & Legal Separation in Arizona — Your Roadmap from Uncertainty to Clarity

Introduction (2–3 paragraphs)
Ending a marriage is a legal, financial, and emotional turning point. Arizona’s divorce (dissolution) process aims to divide property and debt fairly, address spousal maintenance where appropriate, and establish a workable plan if you have children. The path you choose—uncontested agreement, negotiated settlement, or litigation—depends on your goals, your spouse’s cooperation, and the complexity of your estate and parenting needs.

Key Topics (overview list)
- Uncontested vs. Contested Divorce
- Legal Separation vs. Dissolution
- Disclosures & Community vs. Separate Property
- Spousal Maintenance (Eligibility & Amount)
- Parenting Plans & Child Support (if applicable)
- Special Situations: High‑Asset, Military, Covenant Marriage

Uncontested vs. Contested (3–4 paragraphs)
When couples agree on all core issues—property, debt, spousal maintenance, and (if applicable) parenting and support—the uncontested route typically reduces cost, stress, and time. You still need complete disclosure and a carefully drafted consent decree that satisfies Arizona’s requirements. Small oversights (e.g., retirement division via QDRO, mortgage responsibility, tax treatment) can become expensive corrections later.

If agreement isn’t realistic yet, a contested path may be necessary. We outline a strategy based on your priorities: preserving key assets, protecting credit, or establishing a safe, reliable parenting plan. We’ll explain the trade‑offs and help you choose the next step with clarity.

Disclosures & Property Division (4–6 paragraphs)
Arizona’s community property framework presumes assets and debts acquired during marriage belong to the community, with exceptions for gifts and inheritances. Practical resolution depends on good‑faith disclosure, accurate valuations, and a plan that acknowledges liquidity, tax consequences, and feasibility (e.g., refinancing a home). Separate property tracing and reimbursement claims (for community funds used toward separate assets, or vice versa) often require careful documentation.

Spousal Maintenance (3–4 paragraphs)
Spousal maintenance (often called alimony) depends on statutory factors—need and ability to pay, length of marriage, standard of living, health, and more. We’ll discuss realistic ranges and duration, settlement structures, and how maintenance interacts with property division and taxes.

Parenting & Support in Divorce (2–3 paragraphs)
When children are involved, the divorce process intersects with legal decision‑making, parenting time, and child support. Parenting plans that reflect a child’s routines and needs are more durable—and easier to follow—than generic schedules. Support amounts follow Arizona guidelines, with adjustments possible in specific circumstances.

Special Situations (high‑asset, military, covenant marriage) (3–5 paragraphs)
High‑asset cases require careful valuations (businesses, real estate, investment accounts) and tax‑aware solutions. Military divorces introduce additional considerations (benefits, deployments). Covenant marriages include more specific requirements for dissolution. We’ll identify the issues that matter for your situation and map a plan you can act on.

Process Roadmap & Checklists (practical) (bullets + 2 paragraphs)
- Documents: statements, deeds, titles, retirement plan info, tax returns, budgets
- Timeline: waiting periods, deadlines, early opportunities to settle
- Communication: ground rules to reduce conflict and protect kids

CTA: Schedule your 90‑minute consultation and receive a tailored action plan in 24–48 hours.

### Child Custody & Parenting Hub — Long‑Form Draft
H1: Legal Decision‑Making & Parenting Time in Arizona — Build a Plan that Works

Introduction (2–3 paragraphs)
Parenting decisions shape a child’s daily life—school, health care, routines, and relationships. Arizona law focuses on a child’s best interests when allocating legal decision‑making and parenting time. The right plan balances stability with flexibility, clarifies decision‑making, and reduces conflict.

Key Topics (overview list)
- Best Interests Factors & Evidence
- Parenting Plans (day‑to‑day, holidays, travel, communication)
- Joint vs. Sole Legal Decision‑Making
- Parenting Time Schedules & Exchanges
- Modifications & Relocation
- Special Issues: Supervised Time, Third‑Party Rights, Evaluations

Best Interests Factors (3–5 paragraphs)
Courts consider a range of factors: the child’s adjustment to home and school, relationships with each parent, each parent’s ability to meet the child’s needs, willingness to encourage the child’s relationship with the other parent, and—when appropriate—the child’s wishes. Evidence can include school records, medical needs, consistent caregiving patterns, and respectful co‑parent communication.

Parenting Plans (4–6 paragraphs)
A strong plan details daily schedules, holidays, travel, exchanges, communication methods, and dispute resolution. If joint legal decision‑making is appropriate, the plan should clearly define how major decisions are made and how disagreements are resolved. Thoughtful structure reduces friction and protects children from conflict.

Modifications & Relocation (3–4 paragraphs)
Life changes—work schedules, distance, a child’s needs. Modification requires a substantial and continuing change and a renewed best‑interests analysis. Relocation cases add procedures and timelines; early planning and documentation are essential.

Special Issues (3–4 paragraphs)
Supervised parenting time may be needed for safety or transitional reasons; third‑party and grandparent rights exist in specific circumstances; evaluations can help the court understand complex family dynamics. We explain the processes and help you prepare.

CTA: Book a consultation to build a realistic parenting plan that meets your child’s needs.

### Financial Matters Hub — Long‑Form Draft
H1: Financial Matters in Arizona Family Law — Protecting Your Present and Future

Introduction (2–3 paragraphs)
Money is more than numbers—it affects where you live, your retirement, and your child’s opportunities. Financial decisions in family law should be informed, timely, and realistic, accounting for Arizona’s community property rules and your long‑term goals.

Key Topics (overview list)
- Child Support & Spousal Maintenance
- Property & Debt Division
- Business Valuation
- Retirement & QDROs
- Separate Property Tracing
- Real Estate & Mortgages
- Tax Considerations

Child Support & Spousal Maintenance (3–4 paragraphs)
Support outcomes depend on accurate information and clear documentation. We explain what factors matter, how to present your position, and realistic ranges.

Property & Debt (4–6 paragraphs)
Inventory everything—bank accounts, vehicles, investments, debts—and address practical issues (liquidity, tax impact, refinancing). For separate property tracing and reimbursements, documentation is vital.

Business Valuation (3–4 paragraphs)
Valuing a business requires method selection (income, market, asset), normalizing cash flows, and understanding goodwill. Settlement creativity can reduce friction and protect value.

Retirement & QDROs (3–4 paragraphs)
Dividing retirement plans and pensions typically requires a QDRO or similar order. Drafting and timing matter; errors here can be costly.

Taxes (2–3 paragraphs)
Consider capital gains, maintenance tax treatment, and the timing of asset transfers. We flag issues early so you can decide with eyes open.

CTA: Schedule a consultation to protect what matters most—today and long‑term.

### Special Circumstances Hub — Long‑Form Draft
H1: Special Circumstances in Arizona Family Law — Focused Strategy When It Matters Most

Introduction (1–2 paragraphs)
Some situations require immediate, strategic action: safety concerns, urgent orders, complex appeals, or enforcement of existing orders. We help you assess urgency, gather evidence, and choose a path with the best chance of success.

Key Topics (overview list)
- Domestic Violence & Safety Orders
- Paternity
- Mediation & Alternative Dispute Resolution
- Appeals & Post‑Decree Modifications
- Enforcement

Domestic Violence & Safety Orders (3–4 paragraphs)
When safety is at issue, an Order of Protection or emergency order may be appropriate. We’ll discuss requirements, evidence, hearing procedures, and safety planning.

Paternity (2–3 paragraphs)
Establishing paternity can clarify parental rights and responsibilities. We explain testing, acknowledgments, and how legal decision‑making and parenting time are determined.

Mediation & ADR (2–3 paragraphs)
Many cases benefit from structured negotiation. We prepare you with proposals grounded in law and practical solutions.

Appeals & Enforcement (3–4 paragraphs)
Some orders need to be challenged; others must be enforced. We help evaluate timelines, standards, and practical outcomes, from contempt to wage assignments.

CTA: If your matter requires decisive action, book a consultation and get a plan you can execute.

## 31) Phase 1 Page Expansions (Toward Word Targets)
Add these paragraphs or bullet sections to Phase 1 pages to raise word counts while keeping copy useful and scannable.

Home — Additions
- “What Clients Appreciate” (3–4 short testimonials with context and disclaimer)
- “How We Prepare” (behind‑the‑scenes prep: review questionnaire, documents, questions)

How It Works — Additions
- “What to Bring” checklist (orders, communications, financial docs, timeline)
- “If You Need to Reschedule” guidance (lead times)

Pricing — Additions
- “Cost vs. Value” (why 90 minutes can save weeks)
- “After the Consult” (limited/full‑scope pathways; transparent scoping)

Book — Additions
- “Common Technical Questions” (timezone, link delivery, fallback contact)

Contact — Additions
- “If You’re Not Sure Which Service Fits” (examples: contested motion vs. modification)

Uncontested Divorce — Additions
- “Common Mistakes” (QDRO timing, mortgage assumptions, vague parenting terms)
- “Checklist” (what to gather before finalizing)

Custody Overview — Additions
- “Evidence That Helps” (school records, healthcare needs, parent communication)
- “Parenting Coordinator & Tools” (co‑parenting apps, communication rules)

Child Support — Additions
- “Documentation That Matters” (income proofs, childcare, insurance)
- “When a Deviation Makes Sense” (examples)

Domestic Violence — Additions
- “Preparing for a Hearing” (evidence tips, safety first)
- “Community Resources” (shelters, hotlines, counseling)

LSR — Additions
- “Scoping Examples” (2–3 sample packages with what’s in/out)

FSR — Additions
- “Phased Strategy” (early disclosures → settlement → motions → trial readiness)

## 32) Practice Detail Drafts — Financial Matters (Phase 2 Long‑Form Seeds)
Use these drafts to seed ≥1,500‑word details (and link back to the Financial hub). Expand with examples, plain‑language AZ references, and checklists.

### Spousal Maintenance (Alimony) — Draft Copy
H1: Spousal Maintenance in Arizona — Eligibility, Amount, and Duration

Overview (2–3 paragraphs)
Spousal maintenance is not automatic. Arizona courts consider whether a spouse lacks sufficient property to meet reasonable needs, is unable to be self‑sufficient, contributed to the other’s education/career, or has caretaking responsibilities or health conditions that affect earning capacity. If eligibility is established, the court weighs factors to set amount and duration.

Eligibility & Factors (3–5 paragraphs)
We’ll clarify what facts matter: length of marriage, standard of living, financial resources and earning capacity, contributions and sacrifices, age and health, time needed to acquire training or education, and balancing of hardships. We’ll discuss realistic ranges and structures (step‑down, time‑limited, review).

Evidence & Settlement (2–3 paragraphs)
Maintenance outcomes depend on credible budgets, documentation, and practical proposals. We help you present the numbers plainly and negotiate workable solutions that align with long‑term goals.

CTA: Book a consultation to understand realistic maintenance ranges and strategies.

### Property Division — Draft Copy
H1: Property Division in Arizona — Community, Separate, and Practical Solutions

Overview (2–3 paragraphs)
Arizona is a community property state. Assets and debts acquired during marriage are presumed community, with exceptions. The goal is an equitable division—usually equal, but practical constraints (liquidity, taxes, refinancing) matter.

Inventory & Valuation (2–3 paragraphs)
Start with a complete inventory: bank/investment accounts, vehicles, real estate, retirement, business interests, and debts. Then consider valuations and tax consequences. For homes, feasibility of refinance and timelines matter.

Separate Property & Reimbursements (2–3 paragraphs)
Tracing separate property and reimbursement for community contributions (or vice versa) often require documentation and a clear story. We’ll show you how to present it in plain language.

Settlement Structures (2 paragraphs)
Creativity helps: staged buyouts, sale timelines, or trade‑offs that avoid unnecessary friction. We’ll map options that meet legal and practical needs.

CTA: Get a plan to protect value while resolving property efficiently.

### Debt Division — Draft Copy
H1: Debt Division in Arizona — Avoiding Credit Pitfalls

Overview (2–3 paragraphs)
Debt allocation should match practical ability to pay and reflect how obligations were incurred. We’ll discuss closing joint accounts, protecting credit, and ensuring responsibility aligns with the overall division.

Safeguards (2 paragraphs)
Plan for missed payments, refinance timelines, and communication with creditors. We’ll outline protections that reduce risk.

CTA: Get a strategy that protects your credit and reduces conflict.

### Business Valuation — Draft Copy
H1: Business Valuation in Divorce — Finding a Practical Number

Overview (2–3 paragraphs)
Valuing a business requires method selection, normalizing revenues/expenses, and understanding personal vs. enterprise goodwill. We coordinate with qualified experts when needed and focus on solutions that preserve value.

Settlement Options (2–3 paragraphs)
Buyouts (lump‑sum or staged), offsets, or continued co‑ownership (rare) have pros and cons. We’ll help you evaluate what’s realistic and fair.

CTA: Schedule a consultation to discuss valuation options aligned with your goals.

### Retirement & QDROs — Draft Copy
H1: Retirement Division & QDROs — Avoiding Expensive Mistakes

Overview (2–3 paragraphs)
Dividing retirement accounts and pensions typically requires a Qualified Domestic Relations Order (QDRO) or similar plan order. The drafting and timing matter; errors here can be costly and difficult to fix.

Process & Pitfalls (2–3 paragraphs)
We’ll explain key steps—plan information, draft review, court signature, plan approval—and coordinate timing so accounts aren’t overlooked or taxed unexpectedly.

CTA: Get retirement division right the first time with a clear plan.

### Prenuptial & Postnuptial — Draft Copy
H1: Prenuptial & Postnuptial Agreements — Clarity Before or After You Say “I Do”

Overview (2–3 paragraphs)
Well‑drafted agreements can reduce conflict by clarifying expectations around property, debt, and support. Enforceability requires fairness, disclosures, and appropriate formalities. We focus on clear language and realistic, future‑proof terms.

When to Consider One (2 paragraphs)
Second marriages, business ownership, substantial assets, or a desire to separate finances can justify planning. We’ll discuss what can and cannot be included.

CTA: Talk to an attorney about a fair, practical agreement that fits your goals.

## 33) Practice Detail Drafts — Custody & Parenting (Phase 2 Long‑Form Seeds)

### Parental Rights (Legal Decision‑Making) — Draft Copy
H1: Legal Decision‑Making in Arizona — Joint or Sole, and How Decisions Get Made

Overview (2–3 paragraphs)
Major choices about education, healthcare, religious training, and significant activities fall under legal decision‑making. Arizona recognizes joint and sole arrangements. The plan should define how decisions are proposed, documented, and resolved.

Joint vs. Sole (2–3 paragraphs)
Joint decision‑making requires cooperation and clear tie‑break mechanisms. Sole may be appropriate in limited circumstances (e.g., non‑cooperation, safety). We’ll explain trade‑offs and evidence.

CTA: Build a decision‑making plan matched to your family’s needs.

### Modifications — Draft Copy
H1: Modifying Legal Decision‑Making, Parenting Time, and Support

Overview (2–3 paragraphs)
Courts require a substantial and continuing change in circumstances to modify orders. We’ll help you evaluate eligibility and present a practical request.

Evidence & Process (2–3 paragraphs)
Show schedules, school changes, health needs, or consistent patterns that support change. Document respectfully; focus on the child’s best interests.

CTA: Get a roadmap for seeking a realistic modification.

### Relocation — Draft Copy
H1: Relocation with a Child — Notice, Evidence, and Best Interests

Overview (2–3 paragraphs)
Relocation cases require notice and a renewed best‑interests analysis. Courts consider reasons for the move, impact on the child, and how to preserve meaningful relationships.

Practical Strategies (2–3 paragraphs)
Offer concrete schedules, travel logistics, and communication plans. Show thoughtful efforts to maintain stability and relationships.

CTA: Discuss a relocation plan grounded in best interests and practicality.

### Evaluations — Draft Copy
H1: Custody Evaluations — What to Expect and How to Prepare

Overview (2–3 paragraphs)
When facts are complex, courts may order an evaluation. We’ll explain processes, timelines, and how to participate constructively.

Preparation (2–3 paragraphs)
Focus on the child’s needs; be consistent and respectful. Provide documentation and witnesses thoughtfully.

CTA: Prepare for an evaluation with a clear plan.

### Grandparents’ Rights — Draft Copy
H1: Third‑Party & Grandparents’ Rights in Arizona

Overview (2–3 paragraphs)
In limited circumstances, Arizona law permits third‑party visitation or legal decision‑making. Standards are specific and evidence‑driven. We’ll help you evaluate eligibility and present a respectful, child‑focused case.

CTA: Learn whether third‑party rights may apply in your situation.

## 34) Practice Detail Drafts — Special Circumstances (Phase 2 Long‑Form Seeds)

### Paternity — Draft Copy
H1: Establishing Paternity in Arizona — Rights, Responsibilities, and Next Steps

Overview (2–3 paragraphs)
Establishing paternity clarifies parental rights and responsibilities, including legal decision‑making, parenting time, and child support. We’ll explain acknowledgments, testing, and how orders are created.

CTA: Book a consultation to discuss next steps in your paternity matter.

### Mediation — Draft Copy
H1: Mediation & ADR — Resolving Disputes with Structure and Clarity

Overview (2–3 paragraphs)
Mediation can cut costs and reduce conflict. Preparation matters: clear proposals, evidence, and a willingness to explore creative solutions. We help you define your “must‑haves,” “nice‑to‑haves,” and walk‑away positions.

CTA: Explore whether mediation can move your case forward.

### Appeals — Draft Copy
H1: Appeals & Post‑Decree Relief — When and How to Challenge Orders

Overview (2–3 paragraphs)
Appeals and post‑decree relief have strict timelines and standards. We’ll evaluate whether an appeal, motion for relief, or a modification is appropriate, and discuss realistic outcomes.

CTA: Get a candid assessment of your options.

### Enforcement — Draft Copy
H1: Enforcing Family Court Orders — Practical Tools for Compliance

Overview (2–3 paragraphs)
When orders aren’t followed, options include contempt, wage assignments, or other remedies. The goal is compliance, not chaos. We’ll help you document issues and seek practical solutions.

CTA: Discuss targeted enforcement steps for your situation.

## 35) Copy Review Checklist (Use Before Publishing)
- Voice & Clarity
  - Empathetic, plain‑language, Arizona‑specific; avoids legalese and promises of outcomes
  - Reading level ~8th–10th grade; short paragraphs; scannable bullets
- Content Targets
  - ≥1,500 words for content pages; cornerstone hubs ≥3,000 words (Divorce, Custody, Financial, Special)
  - H2/H3 hierarchy; 40–60 word intro; CTAs present (Primary: Book; Secondary: How It Works/Pricing)
- Accuracy & Compliance
  - Reflects Arizona terminology (legal decision‑making, parenting time); includes disclaimers
  - Policies match Legal pages (Privacy, Terms, Refund)
- Links & Structure
  - Internal links to core pages (How It Works, Pricing, Book) and related practice pages; no dead links
  - Clear end‑cap CTABand; TrustBar on core/pricing pages
- Accessibility
  - Logical heading order; descriptive link text; decorative icons `aria-hidden="true"`; alt text for meaningful images; visible focus
- SEO
  - Unique title (≤60 chars), description (150–160 chars), canonical with trailing slash
  - Structured data where applicable (FAQPage, LegalService, Article)
- QA
  - No typos or placeholder text; dates/phones/emails correct; contact methods functional

## 36) Issue Backlog (Epics → Stories → Page Issues)
Paste these into GitHub as issues. Use labels: `content`, `phase-1`, `seo`, `a11y`. Replace `T+Xd` with real dates.

### Issue Template (copy into each issue Body)
Title: Page — {Name}

Body:
- Scope: Draft and finalize content for {URL}. Align with static‑only MVP (manual conflict → emailed LawPay link → questionnaire by email/MyCase).
- Min words: {1500 or 3000 for hub}
- DoD:
  - H1 + 40–60 word intro; H2/H3 hierarchy
  - Primary CTA (Book) + Secondary CTA (How It Works/Pricing)
  - Internal links to related practice pages and core CTAs
  - Meets a11y checklist (headings, links, alt, focus)
  - SEO: title ≤60, desc 150–160, canonical w/ trailing slash; schema where applicable
  - Copy Review Checklist (§35) completed
- Acceptance Criteria (§23/§27.5):
  - Static‑only constraints satisfied (no payment links/forms)
  - Content length target met; brand voice; AZ‑specific terminology
  - Links verified; CTAs present; error‑free text
- Notes: See §28 (Outlines) and §29–34 (Drafts/Long‑form seeds)

Assignee: {Name}
Labels: content, phase-1, seo, a11y
Due: T+14d

### Phase 1 Issues
1) Home — /  (Min 1500)
2) How It Works — /how-it-works/  (Min 1500)
3) Pricing — /pricing/  (Min 1500)
4) Book — /book/  (Transactional; focus on process copy)
5) Contact — /contact/  (Min 800–1200)
6) Services — Limited‑Scope — /services/limited-scope/  (Min 1500)
7) Services — Full Representation — /services/full-representation/  (Min 1500)
8) Practice Areas Hub — /practice-areas/  (Min 1500 now; grows to 3000 in Phase 2)
9) Uncontested Divorce — /practice-areas/divorce/uncontested/  (Min 1500)
10) Custody Overview — /practice-areas/custody/  (Min 1500)
11) Child Support — /practice-areas/financial/child-support/  (Min 1500)
12) Domestic Violence — /practice-areas/special/domestic-violence/  (Min 1500)
13) FAQ — /resources/faq/  (Min 1500; FAQPage schema)
14) Privacy — /legal/privacy/  (Min 1200)
15) Terms — /legal/terms/  (Min 1200)
16) Refund — /legal/refund-policy/  (Min 1200)
17) Thank You — /thank-you/  (Short transactional)
18) Payment Confirmation — /confirmation/  (Short transactional)
19) 404 — /404/  (Helpful links + contact)

### Phase 2 Issues (Cornerstones & Details)
20) Divorce & Separation Hub — /practice-areas/divorce/  (Min 3000)
21) Custody & Parenting Hub — /practice-areas/custody/  (Min 3000)
22) Financial Matters Hub — /practice-areas/financial/  (Min 3000)
23) Special Circumstances Hub — /practice-areas/special/  (Min 3000)
24) Property Division — /practice-areas/financial/property-division/  (Min 1500)
25) Spousal Maintenance — /practice-areas/financial/spousal-maintenance/  (Min 1500)
26) Debt Division — /practice-areas/financial/debt-division/  (Min 1500)
27) Business Valuation — /practice-areas/financial/business-valuation/  (Min 1500)
28) Retirement & QDROs — /practice-areas/financial/retirement-investment-accounts/  (Min 1500)
29) Prenuptial — /practice-areas/financial/prenuptial/  (Min 1500)
30) Postnuptial — /practice-areas/financial/postnuptial/  (Min 1500)
31) Parental Rights — /practice-areas/custody/parental-rights/  (Min 1500)
32) Modifications — /practice-areas/custody/modifications/  (Min 1500)
33) Relocation — /practice-areas/custody/relocation/  (Min 1500)
34) Evaluations — /practice-areas/custody/evaluations/  (Min 1500)
35) Grandparents’ Rights — /practice-areas/custody/grandparents-rights/  (Min 1500)
36) Fathers’ Rights — /practice-areas/custody/fathers-rights/  (Min 1500)
37) Parenting Coordinator & GAL — /practice-areas/custody/parenting-coordinator-gal/  (Min 1500)
38) Cohabitation Agreements — /practice-areas/financial/cohabitation-agreements/  (Min 1500)
39) Domestic Partnership — /practice-areas/special/domestic-partnership/  (Min 1500)
40) Paternity — /practice-areas/special/paternity/  (Min 1500)
41) Mediation — /practice-areas/special/mediation/  (Min 1500)
42) Appeals — /practice-areas/special/appeals/  (Min 1500)
43) Enforcement — /practice-areas/special/enforcement/  (Min 1500)

## 37) Design Benchmark & Layout‑Only Reuse (Policy & Deliverables)
We will benchmark competitor sites for layout and UX patterns only. All copy, images, icons, and trademarks must be original. No proprietary assets are to be reused. The goal is to match the quality and clarity of leading family‑law sites while preserving a distinct, original brand.

### 37.1 Allowed (Layout/UX)
- Page architecture and section ordering: hero → trust strip → value cards → social proof → CTA band
- Grid systems: container widths, column counts, responsive breakpoints
- Component archetypes: sticky header with CTA, hero with split layout, trust bar (icons + text), step grid, feature cards, FAQ disclosures, CTA bands, blog tiles, practice‑area cards, footer link clusters
- Interaction patterns: mobile nav drawer, sticky primary CTA, reserved embed space (Calendly), gentle transitions respecting reduced motion

### 37.2 Not Allowed (IP/Brand)
- Copying text verbatim (headlines, paragraphs, FAQs)
- Copying logos, icons, illustrations, photos, or unique visual motifs
- Copying color palettes, typography pairings, or distinctive branding elements wholesale
- Mimicking a competitor’s trademarked phrases, taglines, or layout “trade dress” in a confusingly similar way

### 37.3 Brand & Visual System (Original)
- Color: Distinct palette anchored by Navy / Light Blue / Gold accents; ensure WCAG AA contrast
- Type: System fonts for body; a readable, distinctive heading face only if licensed/embedded appropriately
- Tokens: Tailwind CSS tokens for colors, spacing, radii, shadows; documented in code and style guide
- Iconography: Consistent stroke/fill style; decorative icons marked aria‑hidden

### 37.4 Component Library (Code Deliverables)
- Header/Nav: sticky on scroll; desktop nav + mobile drawer; primary CTA right‑aligned
- Hero: headline, subhead, primary/secondary CTAs; optional illustration slot
- TrustBar: horizontal row of 3–5 trust items (icon + label)
- FeatureCard: title, short text, optional icon; grid responsive 1→2→3
- StepGrid: numbered steps (how it works)
- TestimonialTeaser: short quotes w/ initials (no stock photos if avoidable)
- FAQDisclosure: accessible disclosure list (keyboard‑friendly)
- CTABand: full‑width, contrasting background, headline + button + secondary link
- Footer: 3–4 link clusters + compliance links; contact snippet

### 37.5 Layout Specs
- Breakpoints: sm ≤640, md ≤768, lg ≤1024, xl ≤1280, 2xl ≤1536 (Tailwind defaults)
- Containers: max‑width 6xl+ for hero; standard container for body; generous vertical rhythm (section padding 48–80px desktop)
- Spacing Scale: Tailwind scale (4/6/8/12/16/24/32/48/64)
- Imagery: use abstract shapes or licensed imagery; defer heavy media for static MVP

### 37.6 Process & Deliverables
- Style tiles: colors, type, buttons, links, cards (1–2 passes)
- Wireframes: high‑level frames for core pages (Home, How, Pricing, Book, Contact, Practice hubs)
- Component inventory: code library matching wireframes (see 37.4)
- Accessibility review: color contrast, link focus, keyboard nav, motion preferences

### 37.7 PR/Review Checklist (Design)
- Meets layout archetypes while looking distinct (no confusing similarity)
- All text original; assets licensed or original; icons consistent
- Tokens documented; components responsive; keyboard nav OK
- CTAs present and clear; reserved space for embeds; no layout shift

## 38) Style Tiles & Design Tokens (Authoritative for Build)
Use these as the single source of truth for brand visuals in Phase 1. All values meet or exceed WCAG AA where applicable (verify with context).

### 38.1 Color Palette (semantic tokens)
- Navy (Primary): `#1e3a8a`
  - Hover/Deep: `#172e5c`
- Light Blue (Accent): `#3b82f6`
  - Hover/Deep: `#2563eb`
- Gold (CTA): `#f59e0b`
  - Hover/Deep: `#d97706`
- Success: `#10b981`
- Error: `#ef4444`
- Grays: 50 `#f9fafb`, 100 `#f3f4f6`, 200 `#e5e7eb`, 300 `#d1d5db`, 400 `#9ca3af`, 500 `#6b7280`, 600 `#4b5563`, 700 `#374151`, 800 `#1f2937`, 900 `#111827`

Usage
- Primary buttons: Gold → hover Gold‑Dark; Secondary: Light Blue → hover Light Blue‑Dark
- Headings: Navy; Body: Gray‑700; Muted: Gray‑500
- Trust/Safety: Success; Errors: Error

### 38.2 Typography
- Headings: system‑UI or a readable licensed face (weight 600–700)
- Body: system‑UI (16px base; line‑height 1.6)
- Scales:
  - H1: text‑4xl/5xl (hero)
  - H2: text‑2xl/3xl
  - H3: text‑xl/2xl
  - Body: text‑base; Small: text‑sm

### 38.3 Layout & Spacing
- Breakpoints (Tailwind): `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536
- Containers: `max-w-6xl` main; `max-w-7xl` hero; `mx-auto px-4`
- Section rhythm: `py-12/16/20` (mobile smaller → desktop larger)
- Cards: `rounded-xl shadow-sm hover:shadow-lg transition-all duration-200`

### 38.4 Radii & Shadows
- Radii: `rounded-md` (buttons/inputs); `rounded-xl` (cards/sections)
- Shadows: `shadow-sm` (rest); `hover:shadow-lg` (interactive hover)

### 38.5 Iconography
- Size: 20–24px (`w-5 h-5` or `w-6 h-6`); accent color per context
- Accessibility: decorative icons `aria-hidden="true"`; pair action icons with visible text

## 39) Component Spec Sheet (Tailwind‑first)
Implement these components once and reuse across pages. Ensure keyboard accessibility and focus styles.

### 39.1 Header / Nav (sticky)
- Container: `sticky top-0 z-50 bg-navy text-white shadow-md`
- Inner: `.container mx-auto px-4 flex items-center justify-between py-4`
- Desktop nav: `hidden lg:flex items-center gap-6`
- Mobile trigger: `lg:hidden p-2 rounded-md hover:bg-navy/80 focus:ring-2 focus:ring-gold`
- Primary CTA: `bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg focus:ring-2 focus:ring-gold`

### 39.2 Hero
- Wrapper: `bg-gradient-to-b from-white to-gray-50`
- Title: `text-navy font-bold text-4xl md:text-5xl lg:text-6xl`
- Subhead: `text-gray-700 text-lg md:text-xl`
- CTAs: primary/secondary buttons side‑by‑side on desktop, stacked on mobile

### 39.3 TrustBar
- Row: `flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-700`
- Item: `flex items-center gap-2`
- Icon: `w-5 h-5 text-success` (aria‑hidden)

### 39.4 FeatureCard
- Card: `group bg-white rounded-xl p-8 border-l-4 border-light-blue shadow-sm hover:shadow-lg transition`
- Title: `text-navy font-semibold text-xl mb-2`
- Text: `text-gray-600`

### 39.5 StepGrid (How it Works)
- Grid: `grid md:grid-cols-3 gap-6`
- Step: circle/number or icon + short copy; ensure responsive wrap and focusable order

### 39.6 TestimonialTeaser
- Card: `bg-gray-50 rounded-xl p-6 border-l-4 border-gold`
- Stars: small gold icons; disclaimer “results vary” beneath

### 39.7 FAQDisclosure
- Container: `divide-y`
- Item: `py-4` with `button` to toggle; `aria-expanded`; keyboard accessible

### 39.8 CTABand
- Section: `bg-navy text-white rounded-xl p-8 md:p-10`
- Inner: `flex flex-col md:flex-row items-start md:items-center justify-between gap-6`
- Primary CTA: gold button; Secondary link underlined with `text-white/90`

### 39.9 Footer
- Wrapper: `bg-gray-800 text-white`
- Layout: 3–4 link clusters + legal links; contact snippet; `border-t` separators for trust/legal strips

### 39.10 Forms (Contact)
- Inputs: `px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light-blue focus:border-transparent`
- Buttons: `bg-light-blue hover:bg-light-blue-dark text-white rounded-lg px-6 py-3`
- A11y: Labels associated; helper/error via `aria-describedby`; 44px targets
36) Paternity — /practice-areas/special/paternity/  (Min 1500)
37) Mediation — /practice-areas/special/mediation/  (Min 1500)
38) Appeals — /practice-areas/special/appeals/  (Min 1500)
39) Enforcement — /practice-areas/special/enforcement/  (Min 1500)

### Services — Limited‑Scope (LSR) — Draft Copy
H1: Limited‑Scope Family Law Services

Intro (60–90 words)
Limited‑scope representation (also called “unbundled services”) lets you hire an attorney for specific tasks rather than a full case. It’s a cost‑effective way to get targeted help—document review, motion practice preparation, mediation coaching, or a limited hearing appearance—while you retain control of the overall matter. We’ll scope your needs, outline what’s included (and excluded) in plain language, and provide a plan that fits your goals and budget.

What Limited‑Scope Can Include (examples)
- Document Review & Drafting: petitions, responses, financial disclosures, parenting plans, consent decrees
- Motion Practice Prep: disclosures, exhibits, declarations, outlines for oral argument
- Mediation & Settlement Coaching: strategy, proposal language, negotiation preparation
- Hearing Appearance (Limited): where appropriate and agreed, for a defined hearing or issue
- Agreement Review: proposed consent decrees, parenting plans, or settlement terms

What’s Not Included (clarity)
- Full‑case management, multi‑hearing litigation, discovery disputes, or appeals (unless separately agreed)
- Work outside the defined scope without a new agreement

Transparent Pricing (illustrative ranges)
We price LSR by scope and complexity. For example, document review may start at a flat amount; limited hearing appearance may require a defined retainer. We’ll confirm scope and fees in writing before any work begins.

How to Get Started (static‑MVP process)
Book a 90‑minute virtual consultation to define scope. After our manual conflict check, we’ll email a secure LawPay link for payment. If a limited appearance is appropriate, we’ll outline deadlines, documents needed, and how we’ll collaborate.

CTA
Get targeted help where it matters most. Book your consultation and receive a written plan in 24–48 hours.

### Services — Full Representation (FSR) — Draft Copy
H1: Full‑Scope Family Law Representation

Intro (60–90 words)
Some cases require comprehensive, end‑to‑end support—especially when disputes are complex, stakes are high, or the other side refuses to cooperate. With full‑scope representation, we handle filings, deadlines, strategy, negotiations, and courtroom advocacy. We combine clear communication with practical, goal‑driven case management so you always know what’s happening and why.

When Full‑Scope Makes Sense
- High‑conflict custody or legal decision‑making disputes
- Complex property division (businesses, real estate, retirement accounts)
- Contested spousal maintenance
- Post‑decree enforcement or multiple simultaneous issues

Retainer & Billing (plain language)
After our manual conflict check and initial consultation, we’ll propose a retainer tailored to your matter’s complexity and expected next steps. Retainers are trust deposits; we bill earned work against the retainer and keep you informed about status and next steps. (We do not accept payment until conflicts are cleared.)

Onboarding & Communication
- Onboarding: document checklist, secure communication preferences, key dates
- Strategy: phased plan (early disclosures, settlement opportunities, motion practice)
- Communication: scheduled updates and timely responses; clarity about decisions and trade‑offs

CTA
If your matter needs comprehensive advocacy, schedule a 90‑minute consultation. We’ll discuss strategy, timelines, and next steps.
