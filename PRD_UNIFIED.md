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
