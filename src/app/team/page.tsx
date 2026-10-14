import type { Metadata } from 'next';
import { pageMetadata } from '@/utils/metadata';
import Team from '@/components/Team';

export const metadata: Metadata = pageMetadata({
  title: 'Our Team',
  description:
    'Meet the team behind UgoWater, a proudly Igbo-owned pure water business based in Enugu.',
  path: '/team/',
});

export default function TeamPage() {
  return <Team />;
}
