import type { Metadata } from 'next';
import { pageMetadata } from '@/utils/metadata';
import Products from '@/components/Products';

export const metadata: Metadata = pageMetadata({
  title: 'Table Water & Sachet Water Prices',
  description:
    'Omionkpo table water, sachet water and dispenser refill prices in Enugu State. Factory-sealed and delivered to your door. Bulk and event orders available.',
  path: '/products/',
});

export default function ProductsPage() {
  return <Products />;
}
