import Link from 'next/link';
import { services } from '../../lib/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={`/images/${service.id}-icon.svg`}
                    alt={`${service.name} icon`}
                    className="w-12 h-12"
                  />
                  <CardTitle>{service.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{service.shortDescription}</p>
                <ul className="mb-4 space-y-1">
                  {service.keyBenefits.map((benefit, index) => (
                    <li key={index} className="text-sm">• {benefit}</li>
                  ))}
                </ul>
                <Button asChild>
                  <Link href={service.callToAction.href}>
                    {service.callToAction.label}
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