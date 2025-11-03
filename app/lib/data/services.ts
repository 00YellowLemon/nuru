import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'ai-assistants',
    name: 'AI Assistants',
    shortDescription: 'Custom AI assistants tailored to your business needs, from chatbots to automation tools.',
    keyBenefits: [
      '24/7 availability',
      'Natural language processing',
      'Seamless integration',
      'Scalable solutions'
    ],
    callToAction: { label: 'Learn More', href: '/services/ai-assistants' }
  },
  {
    id: 'ai-integration',
    name: 'AI Integration',
    shortDescription: 'Integrate AI capabilities into your existing systems and workflows.',
    keyBenefits: [
      'Enhanced productivity',
      'Data-driven insights',
      'Automated processes',
      'Competitive advantage'
    ],
    callToAction: { label: 'Get Started', href: '/services/ai-integration' }
  }
];