import { processSteps } from '../lib/data/process';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProcessPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">How We Work</h1>
      <p className="text-xl text-muted-foreground text-center mb-12">
        Our proven process ensures successful AI integration projects from start to finish.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {processSteps.map((step) => (
          <Card key={step.stepNumber}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                  {step.stepNumber}
                </span>
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.summaryOutcome}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Start Your Project
          </Link>
        </Button>
      </div>
    </div>
  );
}