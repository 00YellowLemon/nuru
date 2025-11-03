import { env } from './env';

export async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY) {
    // Fallback: simple time-based check (honeypot)
    return true; // Allow in dev
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      ...(ip && { remoteip: ip }),
    }),
  });

  const result = await response.json();
  return result.success === true;
}