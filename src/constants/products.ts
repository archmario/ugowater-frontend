import type { Product } from '@/types';

// Sample prices in Naira until the client confirms the real ones
export const products: Product[] = [
  {
    id: 'bag',
    tag: 'SACHET',
    name: 'Pure water bag',
    description: 'The everyday favourite. 20 sachets per bag.',
    price: 350,
    unit: 'bag',
    unitPlural: 'bags',
    image: '',
  },
  {
    id: 'bottle',
    tag: 'PREMIUM',
    name: 'Premium bottle pack',
    description: 'Clear premium bottles for offices, events and gifting.',
    price: 2500,
    unit: 'pack',
    unitPlural: 'packs',
    image: '/images/omionkpo-bottles.webp',
  },
];

// Delivery areas shown as buttons in the order calculator
export const deliveryAreas = ['Aku', 'Ogbede', 'Ukehe', 'Nsukka', 'Enugu city', 'Other'];
