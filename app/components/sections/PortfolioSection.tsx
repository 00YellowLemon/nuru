import Link from 'next/link';
import { caseStudies } from '../../lib/data/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id}>
              <CardHeader>
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {study.clientName || study.anonymizedLabel || 'Confidential Client'}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 line-clamp-3 text-sm">{study.problem}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/portfolio/${study.id}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}