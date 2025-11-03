'use server';

import { inquiryMessageSchema, type InquiryMessageInput } from '../lib/validation';
import { checkRateLimit } from '../lib/rate-limit';
import { verifyTurnstileToken } from '../lib/turnstile';
import { sendInquiryEmail } from '../lib/email';
import { InquiryMessage } from '../lib/types';
import { hashIp } from '../../lib/utils';
import { headers } from 'next/headers';

export async function submitContact(formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = inquiryMessageSchema.safeParse(data);

  if (!parsed.success) {
    return { ok: false, fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const input = parsed.data;

  // Rate limit
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
  const rateLimitResult = checkRateLimit(ip);

  if (!rateLimitResult.allowed) {
    return {
      ok: false,
      error: 'Too many requests. Please try again later.',
      retryAfter: rateLimitResult.resetTime
    };
  }

  // Verify turnstile if token provided
  if (input.turnstileToken) {
    const turnstileSuccess = await verifyTurnstileToken(input.turnstileToken, ip);
    if (!turnstileSuccess) {
      return { ok: false, error: 'Verification failed. Please try again.' };
    }
  }

  // Send email
  const inquiry: InquiryMessage = {
    ...input,
    timestamp: new Date().toISOString(),
    userAgent: headersList.get('user-agent') || undefined,
    ipHash: hashIp(ip),
  };

  try {
    await sendInquiryEmail(inquiry);
    return { ok: true, message: 'Thank you! We\'ll get back to you soon.' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { ok: false, error: 'Failed to send message. Please try again.' };
  }
}