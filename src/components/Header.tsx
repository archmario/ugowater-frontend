'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';
import { CloseIcon, MenuIcon } from './Icons';

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

  // While the full-screen menu is open: no page scrolling behind it, Escape closes it
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
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
          {open ? <CloseIcon color="#fff" size={26} /> : <MenuIcon />}
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
          <Link className="btn btn-blue" href="/#order" onClick={() => setOpen(false)}>
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
