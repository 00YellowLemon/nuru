export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  keyBenefits: string[];
  callToAction: { label: string; href: string };
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName?: string;
  anonymizedLabel?: string;
  problem: string;
  approach: string;
  outcome: string;
  mediaLinks?: string[];
}

export interface InquiryMessage {
  name: string;
  email: string;
  messageBody: string;
  company?: string;
  projectType?: string;
  consentGiven: boolean;
  timestamp: string; // ISO string
  userAgent?: string;
  ipHash?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  summaryOutcome: string;
}