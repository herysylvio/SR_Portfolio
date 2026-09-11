export type VisualVariant =
'tasks' |
'content' |
'automation' |
'presence' |
'signal' |
'grid';

export interface Service {
  id: string;
  icon: string;
  title: string;
  accentWord: string;
  description: string;
  deliverables: string[];
  visual: VisualVariant;
}

export interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  visual: VisualVariant;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface WhyMeItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  visual: VisualVariant;
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  accentWord: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: CaseMetric[];
  visual: VisualVariant;
}

export interface ExpertiseBlock {
  number: string;
  accentWord: string;
  title: string;
  description: string;
  tags: string[];
}

export interface JourneyEntry {
  id: string;
  date: string;
  accentWord: string;
  role: string;
  org: string;
  description: string;
}

export interface Article {
  id: string;
  tag: string;
  readTime: string;
  title: string;
  visual: VisualVariant;
}

export interface SocialLink {
  label: string;
  icon: string;
  href: string;
}