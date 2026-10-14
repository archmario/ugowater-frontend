import type { Ceo, TeamMember } from '@/types';

export const ceo: Ceo = {
  name: 'Ugo Okafor',
  title: 'Managing Director & CEO',
  bio: 'Ugo founded Omionkpo Table Water with a simple mission: bring clean, affordable water to every home, starting with his own people in Aku. That is what "My People First" means: every sachet and bottle is made the way he would want it for his own family.',
  image: '',
  quote:
    'Clean water is not a luxury, it is a right. Every sachet we seal is a promise to our people.',
};

// Photos are empty until the client sends them; the page shows a placeholder
export const team: TeamMember[] = [
  { name: 'Nkechi Eze', role: 'Head of Production', image: '' },
  { name: 'Uche Anozie', role: 'Quality Control Manager', image: '' },
  { name: 'Kelechi Nwosu', role: 'Logistics & Delivery Lead', image: '' },
  { name: 'Amara Obiora', role: 'Customer Relations', image: '' },
];
