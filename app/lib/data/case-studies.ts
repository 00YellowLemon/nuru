import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-chatbot-implementation',
    title: 'AI Chatbot Implementation for E-commerce',
    clientName: 'TechCorp',
    problem: 'Customer support was overwhelmed with repetitive inquiries, leading to long response times and customer dissatisfaction.',
    approach: 'Developed a custom AI chatbot using natural language processing to handle common queries, integrated with the existing CRM system.',
    outcome: 'Reduced response time by 80% and improved customer satisfaction scores by 35%.',
    mediaLinks: ['/images/chatbot-screenshot.svg']
  },
  {
    id: 'data-analytics-dashboard',
    title: 'Data Analytics Dashboard for Retail Chain',
    anonymizedLabel: 'Large Retail Company',
    problem: 'The company lacked real-time insights into sales data across multiple locations.',
    approach: 'Built a comprehensive dashboard using AI-powered analytics to process and visualize sales data from various sources.',
    outcome: 'Enabled data-driven decision making, resulting in 15% increase in sales and 20% reduction in inventory costs.',
    mediaLinks: ['/images/analytics-dashboard.svg']
  },
  {
    id: 'automated-workflow-system',
    title: 'Automated Workflow System for Manufacturing',
    clientName: 'IndusTech',
    problem: 'Manual processes were causing delays and errors in the production line.',
    approach: 'Implemented an AI-driven workflow automation system that optimized production schedules and predicted maintenance needs.',
    outcome: 'Increased production efficiency by 25% and reduced downtime by 30%.',
    mediaLinks: ['/images/workflow-automation.svg']
  }
];