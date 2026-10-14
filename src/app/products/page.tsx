import type { Metadata } from 'next';
import { pageMetadata } from '@/utils/metadata';
import Products from '@/components/Products';

export const metadata: Metadata = pageMetadata({
  title: 'Pure Water Sachets & Bottled Water Prices',
  description:
    'Pure water sachet, bottled water and dispenser refill prices in Enugu. NAFDAC-certified, factory-sealed and delivered to your door. Bulk and event orders available.',
  path: '/products/',
});

export default function ProductsPage() {
  return <Products />;
}
