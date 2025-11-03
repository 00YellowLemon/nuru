# Implementation Plan: Team Portfolio

**Branch**: `master` | **Date**: 2025-10-30 | **Spec**: `specs/master/spec.md`
**Input**: Feature specification from `specs/001-team-portfolio/spec.md` (mirrored to `specs/master/spec.md`)

**Note**: Generated via the speckit plan workflow; see `.specify/templates/commands/plan.md`.

## Summary

Build a modern, responsive Team Portfolio web app using Next.js (App Router) + Tailwind CSS with TypeScript (strict). UI follows Google Material 3 design style using shadcn/ui components. Images are optimized with Next.js `next/image`. Core sections: Services (AI assistants, AI integration), Previous Work (case studies), How We Work (process), and Contact (form with validation, consent, spam protection). Static content is SSG; the contact form uses a server action/API with email delivery and rate limiting.

## Technical Context

**Language/Version**: TypeScript 5.x (strict)
**Primary Dependencies**: Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui, @tailwindcss/forms
**Storage**: None for content (static/MD JSON); Contact inquiries delivered via email; no DB for MVP
**Testing**: Vitest + React Testing Library (unit/component); Playwright recommended for P1 e2e
**Target Platform**: Web (SSR/SSG via Next.js); deployable to Vercel or Node host
**Project Type**: Web application (single repo, App Router already present)
**Performance Goals**: Core landing < 1MB gzipped; LCP < 2.5s on Fast 3G; images responsive/optimized
**Constraints**: WCAG AA for core flows; CI must run lint, typecheck, build, and tests
**Scale/Scope**: 4 primary sections; <= 10 components; low traffic lead-gen site

Unknowns/Clarifications to resolve in Phase 0:
- FR-006 delivery destination for inquiries (email address vs CRM) → NEEDS CLARIFICATION
- FR-007 consent policy (explicit opt-in required? data retention period) → NEEDS CLARIFICATION
- FR-008 anti-spam approach (Turnstile vs honeypot + rate limit) → NEEDS CLARIFICATION

Design decisions to validate in Phase 0:
- shadcn/ui components themed to follow Material 3 design (Google's UI style)
- Use Next.js `Image` with domain allowlist in `next.config.ts`

## Constitution Check

Preliminary assessment: PASS (to be re-checked post-design)

- TypeScript strict: Enabled and required for all new code; types for components and server actions.
- Framework: Next.js (App Router) with SSG for static sections; server action/API for contact submission.
- Styling: Tailwind CSS v4 with shadcn/ui components themed to follow Material 3 design and `@tailwindcss/forms`.
- Testing: P1 tests defined for contact form validation and server action handling (unit/integration), e2e recommended.
- Lint/CI: eslint-config-next in place; CI to run lint, typecheck, build, and tests.

No exceptions requested at this stage.

## Project Structure

### Documentation (this feature)

```text
specs/master/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 (not created by this command)
```

### Source Code (repository root)

```text
app/
├── (marketing)/
│   ├── page.tsx                # Landing with Services + CTAs
│   ├── portfolio/              # Case studies list/detail
│   ├── process/                # How we work
│   └── contact/                # Contact form
├── components/
│   ├── ui/                     # M3-styled primitives (Button, Card, Chip)
│   ├── sections/               # Page sections (Services, Portfolio, Process)
│   └── forms/                  # ContactForm, FormField
├── api/ (or server actions)    # Contact submission handler
└── globals.css                 # Tailwind + M3 tokens

tests/
├── unit/
├── integration/
└── e2e/ (optional)
```

**Structure Decision**: Single Next.js app (App Router) with colocated components in `app/components`. Documentation for this feature resides in `specs/master/`.

## Complexity Tracking

N/A — No constitution violations proposed.
