import type { Metadata } from 'next';
import { pageMetadata } from '@/utils/metadata';
import Team from '@/components/Team';

export const metadata: Metadata = pageMetadata({
  title: 'Our Team',
  description:
    'Meet the team behind Omionkpo Table Water, a proudly Igbo-owned table water business in Aku, Igbo-Etiti, Enugu State.',
  path: '/team/',
});

export default function TeamPage() {
  return <Team />;
}
