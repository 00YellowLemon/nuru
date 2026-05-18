import { ServicesSection } from './components/sections/ServicesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Nuru Works",
  "url": "https://nuruworks.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nuruworks.com/services?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-surface">
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-left md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6 text-balance">
            <span className="text-muted-foreground">AI-as-a-Service</span> Platform for Kenyan SMEs
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl md:mx-auto mb-10 leading-relaxed text-balance">
            Launch ready-to-use AI agents for customer support, sourcing, and operations.
            Connect your tools, go live in days, and scale with a reliable subscription platform built for growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg w-full sm:w-auto">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ServicesSection />
      <ProcessSection />
    </div>
  );
}
