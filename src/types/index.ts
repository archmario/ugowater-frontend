import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  size: string;
  features: string[];
  image: string;
}

export interface Photo {
  src: string;
  alt: string;
  label: string;
  span?: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bg: string;
}

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// One tile in the home page photo grid; it fades between its images
export interface MosaicTile {
  images: { src: string; alt: string }[];
  span?: string;
}

export interface Stat {
  value: string;
  label: string;
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

export interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
  initials: string;
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
