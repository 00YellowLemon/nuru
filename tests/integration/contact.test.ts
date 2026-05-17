import { describe, it, expect, vi, beforeEach } from 'vitest';
import { submitContact } from '@/app/contact/action';

// Mock dependencies
vi.mock('@/app/lib/rate-limit', () => ({
  checkRateLimit: vi.fn(),
}));

vi.mock('@/app/lib/turnstile', () => ({
  verifyTurnstileToken: vi.fn(),
}));

vi.mock('@/app/lib/email', () => ({
  sendInquiryEmail: vi.fn(),
}));

vi.mock('next/headers', () => ({
  headers: vi.fn().mockResolvedValue(new Map([['x-forwarded-for', '127.0.0.1']]))
}));

import { checkRateLimit } from '@/app/lib/rate-limit';
import { verifyTurnstileToken } from '@/app/lib/turnstile';
import { sendInquiryEmail } from '@/app/lib/email';

const mockCheckRateLimit = vi.mocked(checkRateLimit);
const mockVerifyTurnstile = vi.mocked(verifyTurnstileToken);
const mockSendEmail = vi.mocked(sendInquiryEmail);

describe('submitContact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns success for valid input', async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: true, resetTime: 0 });
    mockVerifyTurnstile.mockResolvedValue(true);
    mockSendEmail.mockResolvedValue(undefined);

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'on');
    formData.append('turnstileToken', 'valid-token');

    const result = await submitContact(formData);

    expect(result).toEqual({ ok: true, message: "Thank you! We'll get back to you soon." });
    expect(mockSendEmail).toHaveBeenCalled();
  });

  it('returns rate limit error', async () => {
    const resetTime = Date.now() + 60000;
    mockCheckRateLimit.mockReturnValue({ allowed: false, resetTime });

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'on');

    const result = await submitContact(formData);

    expect(result).toEqual({
      ok: false,
      error: 'Too many requests. Please try again later.',
      retryAfter: resetTime,
    });
  });

  it('returns validation error for invalid email', async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: true, resetTime: 0 });
    mockVerifyTurnstile.mockResolvedValue(true);

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'invalid-email');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'on');
    formData.append('turnstileToken', 'valid-token');

    const result = await submitContact(formData);

    expect(result).toEqual({
      ok: false,
      fieldErrors: { email: ['Invalid email address'] },
    });
  });
});
