# Nuru Portfolio

A modern, responsive team portfolio web app built with Next.js 16, TypeScript, and Tailwind CSS. Showcases AI-powered services, previous work case studies, and the team's process.

## Features

- **Services Overview**: AI assistants and AI integration services
- **Case Studies**: Detailed project outcomes and approaches
- **Process**: Step-by-step team workflow
- **Contact Form**: With validation, consent, and anti-spam protection
- **Responsive Design**: Mobile-first with Material 3 styling
- **Accessibility**: WCAG AA compliant

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API
- **Anti-Spam**: Cloudflare Turnstile
- **Testing**: Vitest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create `.env.local` in the project root:

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

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Testing

```bash
npm run lint
npm run build
npm run test
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any Node.js hosting platform:

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx              # Homepage
├── contact/              # Contact form
├── portfolio/            # Case studies
├── services/             # Service details
├── process/              # Team process
└── components/
    ├── sections/         # Page sections
    ├── forms/            # Form components
    └── ui/               # shadcn/ui components

lib/
├── data/                 # Static content
├── email.ts              # Email service
├── validation.ts         # Zod schemas
└── types.ts              # TypeScript interfaces
```

## Contributing

1. Follow the tasks in `specs/master/tasks.md`
2. Use TypeScript strict mode
3. Run tests before committing
4. Follow ESLint rules

## License

This project is private and proprietary.
