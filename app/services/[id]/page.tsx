import { notFound } from 'next/navigation';
import { services } from '../../lib/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = services.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{service.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{service.shortDescription}</p>
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul className="mb-6 space-y-2">
            {service.keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href={service.callToAction.href}>
              {service.callToAction.label}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}