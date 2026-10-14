import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'sachet',
    name: 'Pure Water Sachets',
    description:
      'The classic Naija pure water. A bag of 20 sachets, each 500ml of clean, refreshing water. Perfect for everyday drinking.',
    price: 300,
    size: 'Bag of 20 x 500ml',
    popular: true,
    features: ['500ml per sachet', '20 sachets per bag', 'Factory sealed'],
    image: '/images/product-sachet.webp',
  },
  {
    id: 'bottle-50cl',
    name: 'Bottled Water 50cl',
    description:
      'Premium bottled water for the office, gym, or on the go. Crisp, clean taste in a recyclable PET bottle.',
    price: 200,
    size: 'Single bottle, 50cl',
    features: ['50cl bottle', 'Recyclable PET', 'Sport-friendly cap'],
    image: '/images/product-bottle-50cl.webp',
  },
  {
    id: 'bottle-150cl',
    name: 'Bottled Water 1.5L',
    description:
      'Big bottle, big refreshment. Perfect for family meals, meetings, and staying hydrated through the day.',
    price: 400,
    size: 'Single bottle, 1.5L',
    features: ['1.5 litre bottle', 'Recyclable PET', 'Easy-grip design'],
    image: '/images/product-bottle-150cl.webp',
  },
  {
    id: 'dispenser',
    name: 'Dispenser Water 18.9L',
    description:
      'Refill your water dispenser with our premium-grade gallon. Delivered clean and sealed, straight to your door.',
    price: 1500,
    size: 'Gallon, 18.9 litres',
    features: ['18.9L gallon', 'Dispenser compatible', 'Sealed & delivered'],
    image: '/images/product-dispenser.webp',
  },
  {
    id: 'bulk-sachet',
    name: 'Bulk Sachet Order',
    description:
      'Stock up for your shop, event, or office. 10 bags (200 sachets) delivered at a special discounted price.',
    price: 2700,
    size: '10 bags, 200 sachets',
    features: ['200 sachets total', 'Bulk discount', 'Ideal for resale'],
    image: '/images/product-bulk-sachet.webp',
  },
  {
    id: 'event-pack',
    name: 'Event Water Pack',
    description:
      'Planning a party, wedding, or conference? Get a mixed pack of bottles and sachets at event pricing.',
    price: 15000,
    size: 'Custom event pack',
    features: ['Mixed bottles + sachets', 'Custom quantities', 'Event pricing'],
    image: '/images/product-event-pack.webp',
  },
];
