import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  // Small label above the name, e.g. SACHET
  tag: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  unitPlural: string;
  // Empty until there's a photo; the card shows a branded placeholder
  image: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Ceo {
  name: string;
  title: string;
  bio: string;
  // Empty until the client sends a photo; the page shows a placeholder
  image: string;
  quote: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PhotoCredit {
  file: string;
  author: string;
  license: string;
  source: string;
}
