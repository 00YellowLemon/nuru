import { describe, it, expect, vi, beforeEach } from 'vitest';
import { contactAction } from '@/app/contact/action';

// Mock dependencies
vi.mock('@/lib/env', () => ({
  env: {
    RATE_LIMIT_MAX_PER_MIN: 5,
  },
}));

vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: vi.fn(),
}));

vi.mock('@/lib/turnstile', () => ({
  verifyTurnstileToken: vi.fn(),
}));

vi.mock('@/lib/email', () => ({
  sendInquiryEmail: vi.fn(),
}));

const mockCheckRateLimit = vi.mocked(require('@/lib/rate-limit').checkRateLimit);
const mockVerifyTurnstile = vi.mocked(require('@/lib/turnstile').verifyTurnstileToken);
const mockSendEmail = vi.mocked(require('@/lib/email').sendInquiryEmail);

describe('contactAction', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns success for valid input', async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: true });
    mockVerifyTurnstile.mockResolvedValue(true);
    mockSendEmail.mockResolvedValue(undefined);

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'true');

    const result = await contactAction(null, formData);

    expect(result).toEqual({ success: true });
    expect(mockSendEmail).toHaveBeenCalled();
  });

  it('returns rate limit error', async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: false, resetTime: Date.now() + 60000 });

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'true');

    const result = await contactAction(null, formData);

    expect(result).toEqual({
      error: 'Rate limited. Try again later.',
      resetTime: expect.any(Number),
    });
  });

  it('returns validation error for invalid email', async () => {
    mockCheckRateLimit.mockReturnValue({ allowed: true });
    mockVerifyTurnstile.mockResolvedValue(true);

    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'invalid-email');
    formData.append('messageBody', 'Hello');
    formData.append('consentGiven', 'true');

    const result = await contactAction(null, formData);

    expect(result).toEqual({
      error: 'Validation failed',
      fieldErrors: { email: ['Invalid email'] },
    });
  });
});