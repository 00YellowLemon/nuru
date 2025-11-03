import { Resend } from 'resend';
import { env } from './env';
import { InquiryMessage } from './types';

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export async function sendInquiryEmail(inquiry: InquiryMessage): Promise<void> {
  const subject = `New Contact Inquiry from ${inquiry.name}`;
  const html = `
    <h1>New Contact Inquiry</h1>
    <p><strong>Name:</strong> ${inquiry.name}</p>
    <p><strong>Email:</strong> ${inquiry.email}</p>
    <p><strong>Company:</strong> ${inquiry.company || 'N/A'}</p>
    <p><strong>Project Type:</strong> ${inquiry.projectType || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${inquiry.messageBody.replace(/\n/g, '<br>')}</p>
    <p><strong>Timestamp:</strong> ${inquiry.timestamp}</p>
    <p><strong>User Agent:</strong> ${inquiry.userAgent || 'N/A'}</p>
  `;

  if (resend) {
    await resend.emails.send({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO,
      subject,
      html,
    });
  } else {
    // Fallback: log to console
    console.log('Email would be sent:', { to: env.CONTACT_TO, subject, html });
  }
}