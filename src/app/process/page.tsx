import type { Metadata } from 'next';
import { pageMetadata } from '@/utils/metadata';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = pageMetadata({
  title: 'How Our Pure Water Is Made',
  description:
    'See how Omionkpo Table Water filters, lab-tests, seals and delivers NAFDAC-certified table water across Enugu State.',
  path: '/process/',
});

export default function ProcessPage() {
  return (
    <>
      <Process />
      <Gallery />
    </>
  );
}
