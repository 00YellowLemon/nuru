# Quickstart

This guide explains how to run the Team Portfolio feature locally and what environment variables are required.

## Prerequisites

- Node.js 18+ (recommended LTS)
- pnpm, npm, or yarn (examples use npm)

## Install and Run

```powershell
# From repo root
npm install
npm run dev
# Open http://localhost:3000
```

## Environment Variables

Create a `.env.local` at the repository root for local development. All are optional for local unless noted.

```env
# Contact delivery (Resend in production)
RESEND_API_KEY= # production only
CONTACT_TO=hello@example.com
CONTACT_FROM=portfolio@example.com

# Cloudflare Turnstile (anti-spam)
TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

# Rate limiting (optional tuning)
RATE_LIMIT_MAX_PER_MIN=5
```

Behavior:
- If `RESEND_API_KEY` is missing, the server action logs inquiries to the server console instead of sending email.
- If Turnstile keys are missing, a honeypot + time-based check is used; rate limiting still applies.

## Testing

Recommended (to be added):
- Unit/Component: Vitest + React Testing Library
- Integration: server action handler tests
- E2E (optional): Playwright for contact flow

Run checks:

```powershell
npm run lint
npm run build
```

## Notes on Design

- shadcn/ui components are themed to follow Google's Material 3 design style via Tailwind config and `app/globals.css`.
- Images use Next.js `next/image` with responsive sizes; configure remote domains in `next.config.ts` as needed.
