import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Our Process', href: '/process' },
  { label: 'Become a Distributor', href: '/distributor' },
  // Team page hidden until the client sends team photos. To bring it back, rename
  // src/app/_team to src/app/team and uncomment this line.
  // { label: 'Our Team', href: '/team' },
];
