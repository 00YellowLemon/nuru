import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO: z.string().email().default('hello@example.com'),
  CONTACT_FROM: z.string().email().default('portfolio@example.com'),
  TURNSTILE_SITE_KEY: z.string().optional(),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  RATE_LIMIT_MAX_PER_MIN: z.coerce.number().int().positive().default(5),
});

export const env = envSchema.parse(process.env);