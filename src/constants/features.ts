import { Droplets, ShieldCheck, Truck, Wallet, Leaf, Clock } from 'lucide-react';
import type { Feature } from '@/types';

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'NAFDAC Registered',
    description:
      'Registered with NAFDAC (Reg. No. A1-112190L), and treated, filtered and sealed in a clean facility, so every sachet and bottle is safe to drink.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'We deliver to homes, shops and events across Aku and Enugu State. Place your order and we bring it to you.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Wallet,
    title: 'Affordable Prices',
    description:
      'Quality water should not break the bank. From a single bag of sachets to bulk bottles, we keep it affordable.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description:
      'We use recyclable packaging and sustainable purification methods that respect our environment.',
    color: 'text-green-600',
    bg: 'bg-green-600/10',
  },
  {
    icon: Droplets,
    title: 'Pure Filtration',
    description:
      'Our multi-stage filtration removes impurities, leaving water that is clean, clear and fresh.',
    color: 'text-sky-500',
    bg: 'bg-sky-500/10',
  },
  {
    icon: Clock,
    title: 'Always Available',
    description:
      'Rain or shine, dry season or harmattan, we keep the water flowing. Order anytime, any day.',
    color: 'text-amber-600',
    bg: 'bg-amber-600/10',
  },
];
