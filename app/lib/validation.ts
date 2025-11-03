import { z } from 'zod';

export const inquiryMessageSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email(),
  messageBody: z.string().min(1).max(2000),
  company: z.string().max(120).optional(),
  projectType: z.string().max(80).optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'Consent is required',
  }),
  turnstileToken: z.string().optional(),
});

export type InquiryMessageInput = z.infer<typeof inquiryMessageSchema>;