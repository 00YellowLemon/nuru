import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-surface">
        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-left md:text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold md:font-extrabold tracking-tight text-primary mb-6 md:mb-6">
            AI Assistants that <span className="text-foreground">Automate</span> and <span className="text-foreground">Amplify</span> Your Business
          </h1>

          <p className="text-lg md:text-base lg:text-lg text-muted-foreground max-w-2xl md:mx-auto mb-12 md:mb-10 leading-relaxed">
            We design and build custom AI assistants that streamline workflows,
            eliminate repetitive tasks, and unlock measurable growth — empowering your business to work smarter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg w-full sm:w-auto">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg w-full sm:w-auto">
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
