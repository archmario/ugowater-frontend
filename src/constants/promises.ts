import { MessageCircle, PackageCheck, Truck, Wallet } from 'lucide-react';
import type { CustomerPromise } from '@/types';

// Shown in place of reviews while the brand is new. Swap for real customer
// reviews once they come in.
export const customerPromises: CustomerPromise[] = [
  {
    icon: PackageCheck,
    title: 'Sealed and clean, every time',
    description:
      'Every sachet and bottle is filtered, sealed and packed in our factory before it reaches you.',
  },
  {
    icon: Truck,
    title: 'Delivered to your door',
    description:
      'Homes, shops, offices and events across Aku and Enugu State. Tell us where and we bring it.',
  },
  {
    icon: Wallet,
    title: 'Pay when it arrives',
    description: 'No payment upfront. Pay cash, transfer or POS when your water is delivered.',
  },
  {
    icon: MessageCircle,
    title: 'A real person, every time',
    description: 'Orders and questions go straight to our team, not a call centre.',
  },
];
