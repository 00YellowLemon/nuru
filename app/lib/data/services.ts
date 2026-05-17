import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'customer-service-agents',
    name: 'Customer Service Agents',
    shortDescription: 'Intelligent AI agents that handle inquiries, bookings, and support for your customers 24/7.',
    keyBenefits: [
      'Round-the-clock availability',
      'Instant responses in natural language',
      'Multilingual support including local dialects',
      'Seamless escalation to human staff'
    ],
    callToAction: { label: 'Learn More', href: '/services/customer-service-agents' }
  },
  {
    id: 'sourcing-agents',
    name: 'Sourcing & Inventory Agents',
    shortDescription: 'Automated agents that help you track inventory, source materials, and optimize your supply chain.',
    keyBenefits: [
      'Automated stock level tracking',
      'Supplier communication and negotiation',
      'Demand forecasting insights',
      'Cost and time savings'
    ],
    callToAction: { label: 'Get Started', href: '/services/sourcing-agents' }
  },
  {
    id: 'workflow-automation',
    name: 'SME Workflow Automation',
    shortDescription: 'Tailor-made AI integrations to connect your existing tools and automate repetitive daily operations.',
    keyBenefits: [
      'Connect accounting, CRM, and communication tools',
      'Eliminate manual data entry',
      'Reduce operational errors',
      'Free up your team to focus on growth'
    ],
    callToAction: { label: 'Discover More', href: '/services/workflow-automation' }
  }
];