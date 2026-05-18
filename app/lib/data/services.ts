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
    id: 'order-management',
    name: 'Order Management',
    shortDescription: 'Intelligent systems to automate order processing, tracking, and fulfillment seamlessly.',
    keyBenefits: [
      'Automated order tracking and updates',
      'Seamless integration with your e-commerce platforms',
      'Reduce manual processing errors',
      'Faster fulfillment and delivery insights'
    ],
    callToAction: { label: 'Discover More', href: '/services/order-management' }
  }
];