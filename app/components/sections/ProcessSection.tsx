import Link from 'next/link';
import { processSteps } from '../../lib/data/process';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step) => (
            <Card key={step.stepNumber}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg flex-shrink-0">
                    {step.stepNumber}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>{step.summaryOutcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}