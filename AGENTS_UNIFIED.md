# Agents Guide (Unified, 2025)

Authoritative instructions for AI/dev agents working on Paradise Law AZ. This guide mirrors the Unified PRD and adds precise do/don’t rules so agents can operate independently and safely.

## 1) Mission & Non‑Negotiables
- Primary: Sell a 90‑minute virtual consultation that includes a written follow‑up action plan.
- Manual conflict check MUST occur before any payment link is sent.
- Payments: LawPay only (no Stripe).
- Scheduling: Calendly (event tentatively held until payment).
- Questionnaire: Comprehensive and required ≥24 hours before consult; with uploads.
- System of record: MyCase after conversion (fallback intake email/Zapier now; API adapter later).

## 2) Tech Stack & Boundaries
- Framework: Next.js 15 (App Router, Route Handlers, Partial Pre‑rendering).
- Language: TypeScript (strict). Styling: Tailwind with tokens; Radix/Headless UI for a11y.
- Data: Crunchy Bridge (Managed Postgres) + Prisma. Enforce TLS and least‑privilege roles.
- Storage: S3‑compatible (Cloudflare R2/S3) presigned uploads.
- Scheduling: Calendly embed → later API for confirm/cancel.
- Payments: LawPay Hosted Payment Page + webhooks (server verification).
- MyCase: Adapter pattern — email/Zapier now, API later.
- Analytics: GA4 or Plausible + PostHog (consent‑gated).
- Hosting: Vercel (or equivalent). No sensitive secrets in client bundle.

## 3) Sitemap & Page Inventory (routes use trailing slash)
- Core: `/`, `/how-it-works/`, `/pricing/`, `/book/`, `/contact/`
- Services: `/services/limited-scope/`, `/services/full-representation/`
- Practice Areas Hub: `/practice-areas/`
  - Divorce: `/practice-areas/divorce/` + (uncontested, contested, high-asset, military, legal-separation)
  - Custody: `/practice-areas/custody/` + (parental-rights, modifications, relocation, evaluations, grandparents-rights)
  - Financial: `/practice-areas/financial/` + (child-support, spousal-maintenance, property-division, debt-division, business-valuation, retirement-investment-accounts, prenuptial, postnuptial)
  - Special: `/practice-areas/special/` + (domestic-violence, paternity, mediation, appeals, enforcement)
- Resources Hub: `/resources/`
  - Blog: `/resources/blog/` + `/resources/blog/[slug]/`
  - Guides: `/resources/guides/` + `/resources/guides/[slug]/`
  - FAQ: `/resources/faq/` (with FAQPage JSON‑LD)
  - Testimonials: `/resources/testimonials/`
- Legal: `/legal/`, `/legal/privacy/`, `/legal/terms/`, `/legal/disclaimer/`, `/legal/cookie-policy/`, `/legal/refund-policy/`, `/legal/attorney-advertising/`
- Utility: `/404/`, `/500/`, `/thank-you/`, `/confirmation/`, `/download-success/`
- Admin (noindex): `/admin/`, `/admin/conflicts/`, `/admin/conflicts/[id]/`, `/admin/bookings/`, `/admin/payments/`, `/admin/questionnaires/`, `/admin/settings/`
- Redirects: `/blog` → `/resources/blog/`, `/guides` → `/resources/guides/`

## 4) Content Standards
- Minimum word count per content page: 1,500 words.
- Cornerstone hubs ≥3,000 words: Divorce, Custody, Financial, Special.
- Structure: H2/H3 hierarchy; AZ‑specific guidance in plain language; internal links; embedded FAQs; checklists/timelines where helpful.
- Voice: Empathetic, clear, professional; avoid pressure; “you/your”; repeat confidentiality and next steps.
- Legal: Include disclaimers; avoid promises of outcomes; testimonials carry “results vary”.

## 5) Page DoD (Definition of Done)
- H1 present; intro 40–60 words; primary CTA; secondary CTA (when applicable);
- Trust: TrustBar nearby on core and pricing pages; CTABand at end‑caps of long pages.
- A11y: Logical heading order; keyboard operability; visible focus; aria‑hidden on decorative icons; color contrast; respects reduced motion.
- SEO: Unique title (≤60 chars), description (150–160); canonical; structured data (LegalService site‑wide, FAQPage on FAQ, Article on blog posts).
- Performance: Reserve space for heavy embeds (Calendly) to prevent CLS; lazy load imagery and third‑party scripts.

## 6) Funnels & Events (consent‑gated)
- Events: `cta_click`, `time_selected`, `conflict_clear|flagged|needs_info`, `payment_initiated|succeeded|failed`,
  `questionnaire_started|completed`, `upload_success|fail`, `consult_attended|no_show`, `action_plan_sent`,
  `convert_to_limited|convert_to_full`, `engagement_signed`.
- UTM propagation: Preserve UTM params and include in LawPay memo where feasible.

## 7) Security & Privacy Rules
- Manual conflict gate: NEVER present LawPay payment link until conflict is marked “Clear” by staff.
- Payments: Server verifies LawPay webhooks; handle refunds; do not log card data; no card storage.
- PII: Encrypt at rest; signed URLs for uploads; no PII in logs; redact emails/phone in logs if needed.
- Headers: HSTS, CSP (start report‑only), Referrer‑Policy, X‑Content‑Type‑Options; X‑Frame‑Options exceptions for embeds.
- Database: Crunchy Bridge TLS, least‑privilege roles, PITR, pgaudit; rotate credentials.

## 8) Admin Workflows (manual conflict)
- Conflict queue: Pending Review → Clear / Flagged / Needs Info; SLA badges (std ≤4h; near‑term ≤2h).
- Clear: Email LawPay link + questionnaire link; set payment/questionnaire deadlines; auto‑cancel if missed.
- Flagged: Decline email; programmatically cancel Calendly event; log rationale (internal only).
- Needs Info: Request info; hold with deadline; auto‑cancel if unmet.
- Audit: Create entries for all decisions and auto‑actions.

## 9) Files, Content & Scripts
- Long‑form content (for word count validation): place MD/MDX under `content/` following PRD structure.
- Content length check: `npm run check-content` (see `content-length.config.json` and `docs/CONTENT_CHECK.md`).
- Canonicals: Build from a single base URL (env `NEXT_PUBLIC_SITE_URL`) + normalized path with trailing slash.
- Sitemap: `/sitemap.xml` includes all public routes, excludes admin; update weekly or on deploy.

## 10) Don’t
- Don’t add Stripe or non‑LawPay processors.
- Don’t send payment links prior to manual conflict clearance.
- Don’t expose secrets or PII to client‑side; don’t log PII.
- Don’t break trailing‑slash or canonical policy.

## 11) Do
- Do follow acceptance tests in PRD §23 for each page before marking complete.
- Do reuse TrustBar, CTABand, and consistent CTA copy across pages.
- Do write empathetic, AZ‑specific content meeting length standards.
- Do add internal links between related practice pages and core CTAs.

## 12) Delivery & Review
- Branch from `main`; small, scoped PRs.
- PR checklist: lint/type‑check pass, `npm run check-content` (if content changed), a11y quick scan, mobile viewport check, titles/descriptions/canonicals set.
- Include screenshots (desktop/mobile) and note performance/a11y impacts.

---

This guide is the operational companion to PRD_UNIFIED.md. If a conflict arises, PRD_UNIFIED.md takes precedence on scope; this guide governs “how” agents implement that scope safely and consistently.

