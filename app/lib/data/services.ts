import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'customer-service-agents',
    name: 'Customer Service Agents',
    shortDescription: 'Always-on support agents you can deploy across WhatsApp, web chat, and email with managed handoff.',
    keyBenefits: [
      'SLA-ready response times',
      'Consistent brand voice and policies',
      'Multilingual support including local dialects',
      'Built-in escalation to human teams'
    ],
    callToAction: { label: 'View Module', href: '/services/customer-service-agents' }
  },
  {
    id: 'sourcing-agents',
    name: 'Sourcing & Inventory Agents',
    shortDescription: 'Inventory and sourcing automation that monitors stock, triggers supplier workflows, and reduces downtime.',
    keyBenefits: [
      'Automated reorder alerts',
      'Supplier workflows and approvals',
      'Demand forecasting dashboards',
      'Lower stockouts and waste'
    ],
    callToAction: { label: 'View Module', href: '/services/sourcing-agents' }
  },
  {
    id: 'order-management',
    name: 'Order Management',
    shortDescription: 'Order orchestration that automates intake, tracking, and fulfillment across channels.',
    keyBenefits: [
      'Unified order visibility',
      'Real-time tracking updates',
      'Fewer manual processing errors',
      'Faster fulfillment SLAs'
    ],
    callToAction: { label: 'View Module', href: '/services/order-management' }
  }
];
