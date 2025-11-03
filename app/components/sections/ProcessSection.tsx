import Link from 'next/link';
import { processSteps } from '../../lib/data/process';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => {
            const stepTitles = ['discovery', 'design', 'development', 'testing', 'deployment', 'maintenance'];
            const stepTitle = stepTitles[step.stepNumber - 1];
            return (
              <Card key={step.stepNumber}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <img
                      src={`/images/step-${step.stepNumber}-${stepTitle}.svg`}
                      alt={`Step ${step.stepNumber} icon`}
                      className="w-10 h-10"
                    />
                    <div>
                      <span className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mr-2">
                        {step.stepNumber}
                      </span>
                      {step.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.summaryOutcome}</p>
                </CardContent>
              </Card>
            );
          })}
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