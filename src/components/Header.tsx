'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';
import { orderMessage, waLink } from '@/utils/whatsapp';
import { CloseIcon, MenuIcon, WaIcon } from './Icons';

// Links are written with a trailing slash (trailingSlash export), so compare without it
const samePath = (a: string, b: string) => a.replace(/\/$/, '') === b.replace(/\/$/, '');

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <Link href="/" className="logo" aria-label={`${siteConfig.name}, home`}>
          <img
            src="/brand/omionkpo-logo-horizontal.svg"
            alt={siteConfig.name}
            width={200}
            height={40}
            className="logo-img"
          />
        </Link>

        <button
          type="button"
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="site-nav" className={`links${open ? ' open' : ''}`}>
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="link"
              aria-current={samePath(pathname, n.href) ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
          <a className="btn btn-wa" href={waLink(orderMessage)} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
