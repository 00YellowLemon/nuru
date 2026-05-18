import type { Metadata } from 'next';
import { ContactForm } from '../components/forms/ContactForm';

export const metadata: Metadata = {
  title: "Get in Touch | Start Your AI Project",
  description: "Ready to scale your business with automated AI workflows? Contact Nuru Works today to schedule an evaluation or request custom AI services in Kenya.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get in Touch | Start Your AI Project | Nuru Works",
    description: "Ready to scale your business with automated AI workflows? Contact Nuru Works today to schedule an evaluation or request custom AI services in Kenya.",
    url: "https://nuruworks.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8">
      <ContactForm />
    </div>
  );
}