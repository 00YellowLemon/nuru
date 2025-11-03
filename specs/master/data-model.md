# Data Model

This document defines the core entities for the Team Portfolio and their validation rules.

## Entities

### Service
- Fields:
  - id: string (slug)
  - name: string (1–60 chars)
  - shortDescription: string (1–160 chars)
  - keyBenefits: string[] (0–6 items; each 1–120 chars)
  - callToAction: { label: string; href: string }
- Validation:
  - name required
  - href must be absolute or in-app path starting with '/'

### CaseStudy
- Fields:
  - id: string (slug)
  - title: string (1–80 chars)
  - clientName?: string (if permitted)
  - anonymizedLabel?: string (used when clientName is not permitted)
  - problem: string (1–400 chars)
  - approach: string (1–400 chars)
  - outcome: string (1–400 chars)
  - mediaLinks?: string[] (URLs)
- Validation:
  - title, problem, approach, outcome required
  - Either clientName or anonymizedLabel must be present

### InquiryMessage
- Fields:
  - name: string (1–80 chars)
  - email: string (RFC 5322)
  - messageBody: string (1–2000 chars)
  - company?: string (0–120 chars)
  - projectType?: string (0–80 chars)
  - consentGiven: boolean (true required)
  - timestamp: ISO8601 string (server-side)
  - userAgent?: string
  - ipHash?: string (server-side; privacy-preserving)
- Validation:
  - name, email, messageBody, consentGiven required
  - email must be valid format

### ProcessStep
- Fields:
  - stepNumber: number (1–10)
  - title: string (1–60 chars)
  - summaryOutcome: string (1–160 chars)
- Validation:
  - 3–6 steps recommended; sequential ordering enforced

## TypeScript Interfaces

```ts
export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  keyBenefits: string[];
  callToAction: { label: string; href: string };
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName?: string;
  anonymizedLabel?: string;
  problem: string;
  approach: string;
  outcome: string;
  mediaLinks?: string[];
}

export interface InquiryMessage {
  name: string;
  email: string;
  messageBody: string;
  company?: string;
  projectType?: string;
  consentGiven: boolean;
  timestamp: string; // ISO string
  userAgent?: string;
  ipHash?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  summaryOutcome: string;
}
```

## Validation Rules

- Server-side schema: use Zod or custom validators in server action for `InquiryMessage` submission.
- Client-side: mirror minimal validation for good UX (required, email format, max lengths).
- Rate limiting: 5/min/IP with 429 on exceed; include `Retry-After` header.
