# Repository Guidelines

## Project Structure & Module Organization
- Source lives in `src/` with Next.js App Router in `src/app/` (e.g., `src/app/page.tsx`, `src/app/layout.tsx`).
- Reusable UI goes in `src/components/`; utilities in `src/lib/`; markdown/content in `src/content/`.
- Static assets are served from `public/`.
- Example: create a component at `src/components/ui/Button.tsx` and import it within `src/app/(marketing)/page.tsx`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server at `http://localhost:3000`.
- `npm run build`: Production build (Next.js + TypeScript checks during build).
- `npm run start`: Run the built app.
- `npm run export`: Static export (`out/`) for static hosting.
- `npm run lint`: ESLint with Next.js rules.
- `npm run type-check`: TypeScript type checking (`tsc --noEmit`).
- `npm run format`: Prettier formatting.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`, `.tsx`). Indentation: 2 spaces; semicolons required; `trailingComma: es5`.
- Imports must remain at the top (enforced by ESLint rule in `eslint.config.mjs`).
- Components: `PascalCase` (e.g., `BookingForm.tsx`). Hooks/utilities: `camelCase` (e.g., `useBooking.ts`, `formatPrice.ts`).
- Client components should start with `"use client"` when needed.

## Testing Guidelines
- Current status: no test runner configured (see `README.md`).
- Prepare tests under `src/__tests__/` using `*.test.ts(x)` naming once added; target ≥80% coverage for units that contain core logic.
- Prefer component tests for UI and integration tests for booking/checkout flows.

## Commit & Pull Request Guidelines
- Branch from `main`; keep changes scoped and atomic.
- Commits: imperative mood, concise summary, and context in body when needed. Example: `feat: add Calendly booking CTA to hero`.
- Pre-commit runs `lint-staged`; pre-push runs `npm run lint && npm run type-check` (see `.husky/`). Ensure both pass.
- PRs: clear description, linked issue/task, before/after screenshots for UI, and notes on accessibility/performance impact.

## Security & Configuration Tips
- Copy `.env.example` to `.env.local`; never commit secrets. Use `NEXT_PUBLIC_` only for values intended for the client.
- Do not log secrets or Stripe keys; validate required env vars during build when possible.

## References
- Project docs: `README.md`, `PRD.MD`, `ROADMAP.md`, `SITEMAP.md`, `TASKS.md`.
- Lint/format: `eslint.config.mjs`, `.prettierrc`. AI guidance: `CLAUDE.md`.
