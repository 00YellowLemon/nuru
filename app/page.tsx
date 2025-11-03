import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-surface">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-ai-tech.svg"
            alt="AI background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-6">
            AI Assistants that <span className="text-foreground">Automate</span> and <span className="text-foreground">Amplify</span> Your Business
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We design and build custom AI assistants that streamline workflows,
            eliminate repetitive tasks, and unlock measurable growth — empowering your business to work smarter.
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
              <Link href="#portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
    </div>
  );
}
