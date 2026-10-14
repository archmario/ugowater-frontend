import { Filter, FlaskConical, Truck, PackageCheck } from 'lucide-react';
import type { ProcessStep, Stat } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Filter,
    title: '7-Stage Filtration',
    description:
      'Raw water passes through seven filtration stages, removing sediments, chemicals, and bacteria for crystal-clear purity.',
    image: '/images/filtration-tanks.webp',
    imageAlt: 'Water storage tanks and stainless steel filtration units',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Laboratory Testing',
    description:
      'Every batch is tested in our certified lab for pH balance, microbial content, and mineral quality before approval.',
    image: '/images/lab-testing.webp',
    imageAlt: 'Water quality testing equipment in a laboratory',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Sealed & Packaged',
    description:
      'Approved water is sealed in hygienic sachets and bottles using automated machines. No human hands touch the water.',
    image: '/images/sachet-machine-closeup.webp',
    imageAlt: 'Automatic sachet water filling and sealing machine',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Delivered to You',
    description:
      'Packaged water is loaded onto clean delivery trucks and brought straight to your home, shop, or office, fast.',
    image: '/images/stacked-sachet-bags.webp',
    imageAlt: 'Bags of sachet water stacked for delivery',
  },
];

export const processStats: Stat[] = [
  { value: '10M+', label: 'Sachets Produced Monthly' },
  { value: '5,000+', label: 'Businesses Served' },
  { value: '15', label: 'Cities Reached' },
  { value: '100%', label: 'NAFDAC Compliant' },
];
