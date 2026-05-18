import { ServicesSection } from '../components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface py-12">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We provide tailored AI solutions to help Kenyan SMEs automate workflows, streamline operations, and boost efficiency.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}
