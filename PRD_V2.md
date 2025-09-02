# Paradise Law AZ — Product Requirements Document (v2)

## 1) Summary
- Primary goal: Sell a 90‑minute virtual consultation that includes a written follow‑up action plan.
- Secondary goal: Act as the firm’s primary family‑law website to acquire limited‑scope (unbundled) and full‑scope representation.
- Critical constraint: Manual conflict check is required before any payment is requested.
- Payments: LawPay (not Stripe). Payment link is only sent after manual conflict clearance.
- Scheduling: Calendly used for client time selection (tentative hold); event is confirmed only after payment.
- Pre‑consult requirement: Comprehensive questionnaire (with document uploads) must be completed ≥24 hours before the consult.
- Case management: MyCase is the system of record; website pushes cleared/paid consults (and questionnaire artifacts) into MyCase. No API today (fallback via intake email/Zapier), API integration later.

## 2) Goals & KPIs
- Conversion (consult): ≥2.5% visitor → paid consult.
- Questionnaire completion: ≥90% completed ≥24h before consult; <10% drop‑off between payment and questionnaire.
- No‑show rate: ≤10%; reschedule completion ≥80%.
- Representation conversion: ≥25% of consult clients convert to limited/full‑scope within 30 days; ≥5% of qualified representation leads progress to engagement.
- UX/Perf: Lighthouse mobile ≥90; TTI <2s (median device); CLS <0.1; INP “good”.
- Compliance: WCAG 2.1 AA accessibility; consented analytics; payments via LawPay; no payment before conflicts cleared.

## 3) Audiences & Journeys
- Consult buyer: Wants rapid clarity; ready to pay $500 for a 90‑minute consult and complete questionnaire.
- Limited‑scope seeker: Wants discrete, transparent, fixed‑fee services (e.g., document review/drafting, motion, mediation coaching).
- Full‑scope seeker: Complex matters needing retainer; trusts credentials, process transparency, and onboarding clarity.
- Post‑consult upgrader: Received action plan; ready to engage for LSR/full‑scope based on recommendations.

## 4) Information Architecture
- Top nav: Book Consultation | Limited‑Scope Services | Full Representation | Practice Areas | How It Works | Pricing | Resources | Contact.
- Key pages
  - Book Consultation (primary funnel)
  - Limited‑Scope Services (menu with inclusions/exclusions/pricing)
  - Full Representation (retainer ranges, onboarding steps, expectations)
  - How It Works (process transparency for conflict → payment → questionnaire → consult → action plan)
  - Pricing (consult fee; sample LSR fees/ranges; retainer guidance)
  - Practice Areas (divorce, custody, financial, special circumstances)
  - Resources (blog, guides, FAQ, testimonials)
  - Legal (Privacy, Terms, Disclaimer, Cookie, Refund, Attorney Advertising)
  - 404/500/Thank‑you

## 5) Core Flows (Happy Paths)
### 5.1 90‑Minute Consult (manual conflict gate)
1) Client selects a preferred slot in Calendly (tentative hold).
2) Website captures client legal name, opposing party name(s), county, and brief matter type to initiate conflict review.
3) Staff conducts manual conflict check (in MyCase or firm systems) and marks: Clear / Flagged / Needs Info.
4) If Clear → site emails LawPay payment link and pre‑consult questionnaire link; status “Clear – Pending Payment”.
5) Client pays LawPay $500 → server verifies via webhook → Confirmation page + email; status “Paid – Questionnaire Required”.
6) Client completes questionnaire (autosave/resume) and document uploads ≥24h pre‑consult → status “Ready”.
7) Consult occurs (90 minutes).
8) Written action plan delivered within 24–48 hours (email + portal download); push artifacts to MyCase.

Outcomes if not happy path
- Flagged: Polite decline email; auto‑cancel Calendly event via API; log reviewer/rationale (internal only).
- Needs Info: Request more info; hold slot until deadline; if none received, auto‑cancel; notify client.
- Payment not received by deadline: Auto‑cancel event; notify client.
- Questionnaire incomplete by deadline: Attempt reschedule; if refused/no response, cancel and handle refund per policy.

### 5.2 Limited‑Scope Representation (LSR)
1) Client selects a discrete service with transparent pricing.
2) Submit names for manual conflict check; staff marks Clear/Flagged/Needs Info.
3) If Clear → send LawPay link for fixed fee/deposit; targeted LSR questionnaire and document checklist.
4) Payment success → confirm; set delivery milestones and communications; push to MyCase.

### 5.3 Full‑Scope Representation (FSR)
1) Lead form (or post‑consult upgrade) triggers manual conflict review.
2) If Clear → retainer quote; LawPay trust retainer link; e‑sign engagement; onboarding questionnaire and document checklist.
3) Push contact/matter/docs to MyCase; track onboarding tasks.

## 6) Conflict Check (Manual)
- Inputs: Client legal name; opposing party name(s); county; matter type (basic).
- Queue: “Pending Review” with SLA timers (e.g., standard ≤4 business hours, near‑term slots ≤2 hours). Same‑day slots disabled or “call us to expedite”.
- Decisions: Clear / Flagged / Needs Info.
- Actions: Clear → payment link + questionnaire; Flagged → decline + auto‑cancel; Needs Info → request info + hold deadline.
- Audit: Reviewer, decision, rationale, timestamps; auto‑actions (reminders, cancels) logged.

## 7) Payments (LawPay)
- Method: Hosted Payment Page (HPP) MVP, API later if needed.
- Flow: Redirect with memo (e.g., “Consult – <Client> – <Date/Time> – Ref#”) and identifying reference.
- Verification: Server‑side webhook confirms success; idempotent handlers; email receipt to client; internal notification.
- Accounting: Use correct operating/trust routing for consults vs retainers.
- Refunds: Trigger via LawPay; reflect status server‑side; notify client.

## 8) Pre‑Consult Questionnaire & Uploads
- Structure: Multi‑step; branching by matter type (Divorce/Custody/Financial/Special); plain‑language; mobile‑first; WCAG‑compliant.
- Features: Autosave; progress bar; resume via magic link; file uploads (PDF/images) to S3‑style storage via presigned URLs; optional AV scanning; required ≥24h pre‑consult.
- Legal: Confidentiality notice; limited‑scope disclosures; “no ongoing representation until engagement” clarity.
- Delivery: On completion, generate a single PDF summary + structured JSON and upload both + attachments to MyCase.

## 9) Integrations
- Calendly: Embed for selection; webhooks for scheduled/canceled; API for programmatic cancels on conflict/payment timeout; timezone detection.
- LawPay: HPP; server webhook verification; receipts and memo metadata; refunds.
- MyCase:
  - Today (fallback): Intake email inbox or Zapier/Make—send PDF packet + attachments or trigger Contact/Matter creation.
  - Future (preferred): MyCase API adapter—upsert Contact; create Matter; add Related Parties; upload Documents; create Event/Note.
  - Adapter pattern: `mycaseAdapter` interface with implementations: `emailIntakeAdapter` (now) and `apiAdapter` (later).

## 10) Data Model (Conceptual)
- Lead(id, name, email, phone, tz, utm, consent)
- BookingIntent(id, lead_id, slot_time, calendly_event_id, status: pending_review | clear_pending_payment | flagged | needs_info | paid_questionnaire_required | ready | canceled)
- ConflictRecord(id, lead_id, parties_entered[], decision, reviewer, notes, timestamps)
- Payment(id, booking_intent_id, lawpay_txn_id, amount, status: initiated | succeeded | failed | refunded, memo, timestamps)
- QuestionnaireResponse(id, lead_id, type, status: in_progress | completed, payload, attachments[], timestamps)
- Document(id, questionnaire_id, storage_key, filename, size, mime, checksum, scan_status, timestamps)
- ActionPlan(id, lead_id, content, attachments[], delivered_at, status)
- AuditLog(id, actor, entity, entity_id, action, metadata, timestamp)

## 11) Non‑Functional Requirements
- Performance: LCP <2.5s; CLS <0.1; INP good; reserve widget heights; lazy third‑party scripts only on relevant pages; View Transitions API.
- Accessibility: WCAG 2.1 AA; keyboard flows; aria‑labels; aria‑hidden on decorative icons; reduced motion.
- Security & Privacy: HSTS, CSP (report‑only → enforce), Referrer‑Policy, X‑Content‑Type‑Options, X‑Frame‑Options exception for Calendly; encrypt PII at rest; no PII in logs; minimal data retention.
- Availability: 99.9% for conflict, payment, questionnaire endpoints; webhook retries + idempotency.
- Observability: Structured logs; error tracking; cron/queue for auto‑cancels and reminders.

## 12) Analytics & Consent
- Consent: Minimal banner; gate non‑essential scripts; honor Do‑Not‑Track.
- Events (standardized):
  - cta_click(location, page, variant)
  - time_selected(slot, tz)
  - conflict_clear/flagged/needs_info
  - payment_initiated/succeeded/failed
  - questionnaire_started/completed; upload_success/fail
  - consult_attended/no_show; action_plan_sent
  - convert_to_limited/convert_to_full; engagement_signed
- Funnels: Consult funnel; LSR funnel; FSR funnel; consult→retainer conversion.

## 13) SEO & Content
- Structured data: LegalService (firm), FAQPage (FAQ), BreadcrumbList (nav), Article (blog).
- Metadata: Per‑page titles/descriptions; canonicals (trailing slash policy); next‑sitemap; OG/Twitter images for key pages.
- Content strategy: Practice area hubs + detail pages; resources that answer objections; testimonials with ethical disclaimers.

## 14) UI/UX Principles & Components
- CTA strategy: Persistent “Book Consultation”; distinct LSR and FSR CTAs; end‑cap CTA bands on long pages.
- Trust: TrustBar (Licensed in AZ; 15+ years; confidentiality; secure payment); legal links surfaced.
- Forms: RHF + Zod validation; clear labels; helper/error text via aria‑describedby; inputmode/autoComplete; 44×44 targets.
- Design system: Tailwind with design tokens; extract common components (TrustBar, CTABand, FeatureCard, Disclosure lists).

## 15) Operational SLAs & Policies
- Conflict review SLA: Standard ≤4 business hours; near‑term ≤2 hours; same‑day slots disabled or “call to expedite”.
- Payment deadline: 24 hours after clearance or T‑12h before slot (whichever first); else auto‑cancel.
- Questionnaire deadline: Completed ≥24h pre‑consult (immediate for short‑notice); else attempt reschedule or cancel per policy.
- Refund policy: “Satisfaction guarantee” details and timelines; tie‑ins with questionnaire/no‑show/reschedule rules.

## 16) Roadmap & Phases
- Phase 1 (MVP)
  - SSG/ISR marketing pages; Calendly embed + name capture; manual conflict queue & email templates; LawPay HPP + webhook verification; questionnaire MVP (no‑API); transactional emails; consented analytics; cron for payment deadline auto‑cancels.
- Phase 2
  - Calendly API (programmatic confirm/cancel); richer conflict UI (borderline queue); doc uploads with presigned URLs + optional AV scan; action plan delivery pipeline; push packets to MyCase via intake email/Zapier; admin dashboards.
- Phase 3
  - MyCase API adapter; LSR flow (menu → conflict → LawPay → delivery); FSR retainer flow (trust deposit + e‑sign + onboarding); performance/a11y audits; Lighthouse CI; Sentry optional; A/B tests for CTA.
- Phase 4
  - Automations (reminders, post‑consult nurture), self‑serve reschedule/cancel; richer reporting; cost optimizations.

## 17) Risks & Trade‑offs
- Without MyCase API initially, ingestion relies on email/Zapier (less structured, but faster to ship). Mitigation: Adapter pattern and re‑sync plan once API is obtained.
- Manual conflict SLA determines booking windows; disabling same‑day slots may reduce conversion but protects compliance. Mitigation: Offer “call us” interlock for urgent cases.
- Third‑party dependencies (Calendly/LawPay) uptime. Mitigation: Clear error states; retries; alternative contact paths.

## 18) Acceptance Criteria
- No payment link is issued until a human marks conflict “Clear”.
- Declined matters trigger event cancel + decline email; all steps audit‑logged.
- Payment success returns Confirmation; receipts emailed; server verified; LawPay refunds reflected.
- Questionnaire is required and validated ≥24h before consult; uploads work on mobile; autosave/resume; magic link auth.
- Consult delivered for 90 minutes; action plan provided within 24–48h and logged.
- SEO metadata and structured data validate; a11y checks pass; performance meets thresholds.

## 19) Tech Notes (non‑binding but recommended)
- Single hybrid app: Next.js 15 (App Router, PPR, Route Handlers) on Vercel.
- Styling & a11y: Tailwind + tokens; Radix/Headless UI; aria‑hidden for decorative icons.
- Forms: React Hook Form + Zod; presigned S3‑style uploads; email (Resend/Postmark).
- Data: Crunchy Bridge (Managed Postgres) + Prisma; storage (Cloudflare R2/S3). Enforce TLS, least‑privilege roles, PITR, and auditing.
  - Roles: `app_user` (runtime, no DDL), `migration_user` (migrations/DDL), optional `read_only`.
  - Security: `sslmode=require`, IP allowlist (if available), password rotation, pgaudit enabled, PITR snapshots, DR plan.
- Integrations: Calendly embed + API; LawPay HPP; MyCase adapter (intake email/Zapier now, API later).
- Analytics: GA4/Plausible + PostHog; consent gating; standardized events.
