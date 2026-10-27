import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Products', href: '/products' },
  { label: 'Our Process', href: '/process' },
  // Team page hidden until the client sends team photos. To bring it back, rename
  // src/app/_team to src/app/team and uncomment this line.
  // { label: 'Our Team', href: '/team' },
];
