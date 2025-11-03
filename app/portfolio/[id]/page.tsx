import { notFound } from 'next/navigation';
import { caseStudies } from '../../lib/data/case-studies';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{study.title}</CardTitle>
          <p className="text-lg text-muted-foreground">
            {study.clientName || study.anonymizedLabel}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Problem</h3>
            <p>{study.problem}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Approach</h3>
            <p>{study.approach}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Outcome</h3>
            <p>{study.outcome}</p>
          </div>
          {study.mediaLinks && study.mediaLinks.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Media</h3>
              <div className="space-y-2">
                {study.mediaLinks.map((link, index) => (
                  <img key={index} src={link} alt={`Media ${index + 1}`} className="max-w-full h-auto" />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}