# Phase 0 Research and Decisions

This document consolidates clarifications, best practices, and design decisions for the Team Portfolio feature.

## FR-006: Inquiry Delivery Destination

- Decision: Deliver contact inquiries via email using a hosted email API (Resend) in production; use a local console logger fallback in development. Environment variables configure delivery.
- Rationale: Hosted email APIs are reliable on serverless platforms and simpler to operate than direct SMTP. A console fallback enables local testing without external services.
- Alternatives considered:
  - Nodemailer + SMTP: Works but can be unreliable on serverless/Vercel and requires SMTP management.
  - Formspree/Third-party forms: Quick, but adds external dependency and less control over anti-spam and privacy.

Configuration:
- RESEND_API_KEY (prod)
- CONTACT_TO (destination email, e.g., hello@example.com)
- CONTACT_FROM (verified sender)

## FR-007: Consent and Data Retention

- Decision: Require an explicit consent checkbox adjacent to the contact form with short text: "By submitting, you agree we may contact you about your inquiry and you accept our privacy notice." Retention: 180 days for inquiry emails in the mailbox; no persistent storage in the app.
- Rationale: Clear opt-in best practice; limits liability by avoiding app-side persistence for MVP.
- Alternatives considered:
  - Implicit consent: Simpler UX, but weaker compliance posture.
  - Database storage: Enables analytics/CRM sync, but out of scope for MVP and adds security obligations.

## FR-008: Anti-Spam Strategy

- Decision: Use Cloudflare Turnstile challenge when keys exist; additionally enforce server-side rate limiting (e.g., 5 requests/min/IP) and a time-based honeypot fallback when Turnstile is not configured.
- Rationale: Turnstile is privacy-friendly and effective. Rate limiting protects APIs; honeypot covers keyless local dev.
- Alternatives considered:
  - hCaptcha/reCAPTCHA: Effective but adds privacy/cost considerations; Turnstile is simpler.
  - Only honeypot: Too weak against bots.

Configuration:
- TURNSTILE_SITE_KEY, TURNSTILE_SECRET_KEY (optional; if absent, fallback is used)

## shadcn/ui Components with Material 3 Theme

- Decision: Use shadcn/ui components built on Tailwind CSS, themed to follow Google's Material 3 design style. Configure the theme with Material 3-inspired color roles, typography scales, and elevations. Use `@tailwindcss/forms` for accessible form styling.
- Rationale: Combines the benefits of shadcn/ui's high-quality, customizable components with Google's Material 3 design language for consistency and familiarity; keeps bundle small while providing excellent UX.
- Alternatives considered:
  - Pure Material 3 via Tailwind tokens: More manual work to create components.
  - MUI (Material UI): Full-featured but heavy; overlaps with Tailwind and increases complexity.
  - Third-party "Material Tailwind" kits: Faster start, but less control and potential licensing/maintenance issues.

## Image Optimization

- Decision: Use Next.js `next/image` with responsive `sizes`, `fill` where appropriate, and placeholders (blur). Allowlist remote image domains in `next.config.ts`. Prefer WebP/AVIF assets in `public/` when possible.
- Rationale: Built-in optimization yields better performance and DX.
- Alternatives considered: Manual `<img>` tags (no optimization), third-party CDNs (overkill for MVP).

## Responsiveness & Accessibility

- Decision: Mobile-first responsive layout using Tailwind breakpoints (sm, md, lg). Ensure WCAG AA: semantic HTML, labels, focus states, color contrast, and keyboard navigability.
- Rationale: Meets requirements for mobile and web; accessibility is part of constitution.
- Alternatives considered: CSS-in-JS frameworks; unnecessary given Tailwind.

## Rendering Strategy (SSR/SSG)

- Decision: SSG for all static marketing sections (services, process, case studies content). Use a server action or API route for POST `/api/contact`.
- Rationale: Static where possible for speed and simplicity; dynamic only for form handling.
- Alternatives considered: All-SSR (no benefit), client-only SPA (worse SEO/TTFB).

## Testing & CI

- Decision: Vitest + React Testing Library for unit/component tests; minimal integration test for server action; Playwright e2e for contact flow (optional). GitHub Actions pipeline to run lint, typecheck, build, and tests.
- Rationale: Matches constitution and keeps the suite fast.
- Alternatives considered: Jest (also fine), Cypress (fine but heavier for e2e).

## Data Model Source of Truth

- Decision: Static content (services, process steps, case studies) stored as TypeScript/JSON data co-located with sections; no CMS for MVP.
- Rationale: Small team and scope; CMS adds overhead now.
- Alternatives considered: Headless CMS (Contentful, Sanity) — future consideration if content grows.
