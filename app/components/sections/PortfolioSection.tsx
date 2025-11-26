import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '../../lib/data/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id}>
              {/* preview image */}
              {study.mediaLinks && study.mediaLinks.length > 0 ? (
                <div className="w-full h-40 relative overflow-hidden rounded-t-xl bg-white flex items-center justify-center">
                  <Image
                    src={study.mediaLinks[0]}
                    alt={`${study.title} preview`}
                    width={400}
                    height={192}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-sm text-muted-foreground rounded-t-xl">
                  No preview available
                </div>
              )}

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