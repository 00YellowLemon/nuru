import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-chatbot-implementation',
    title: 'AI Chatbot Implementation for E-commerce',
    clientName: 'TechCorp',
    problem: 'Customer support was overwhelmed with repetitive inquiries, leading to long response times and customer dissatisfaction.',
    approach: 'Developed a custom AI chatbot using natural language processing to handle common queries, integrated with the existing CRM system.',
    outcome: 'Reduced response time by 80% and improved customer satisfaction scores by 35%.',
    mediaLinks: ['/images/university.png']
  },
  {
    id: 'ai-mental-health-app',
    title: 'AI-Powered Mental Health Assistant App',
    clientName: 'Soita',
    problem: 'Users lacked an accessible, on-demand tool to manage anxiety and break free from cycles of worry, leading to persistent stress.',
    approach: 'Developed "Soita," an AI-powered chat companion. The app guides users through proven CBT techniques like the Worry Tree Method and APPLE Technique to categorize and manage worries effectively.',
    outcome: 'Provided users with immediate, guided support for anxiety, helping them find peace of mind and build healthier mental habits.',
    mediaLinks: ['/images/mental.png']
  },
 {
  id: 'ai-chat-collaboration-platform',
  title: 'AI-Enhanced Real-Time Chat Platform',
  clientName: 'Internal Project', // or you can use anonymizedLabel instead
  problem: 'Traditional messaging platforms lack intelligent assistance, making professional communication less efficient and requiring users to switch between multiple tools for conversation guidance.',
  approach: 'Built a seamless real-time messaging platform with integrated AI-powered conversation assistance (AI Coach), real-time presence indicators, and instant connectivity features using modern web technologies.',
  outcome: 'Created a comprehensive communication solution that combines instant messaging with AI assistance, enabling users to have more productive conversations with intelligent suggestions and real-time collaboration features.',
  mediaLinks: ['/images/chat.png'], // Update with actual screenshot
}
];