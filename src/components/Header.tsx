'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Droplets, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Pages that open with a dark section (the home hero video, the process
  // section): at the top, the header text and toggle switch to white
  const darkTop = pathname === '/' || pathname.startsWith('/process');
  const overHero = darkTop && !scrolled && !menuOpen;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || menuOpen
          ? 'bg-background/95 backdrop-blur-md shadow-md border-border'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Droplets className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`font-bold text-lg transition-colors ${overHero ? 'text-white' : 'text-foreground'}`}
            >
              {siteConfig.name}
            </span>
            <span
              className={`text-[10px] tracking-widest font-semibold transition-colors ${overHero ? 'text-sky-200' : 'text-primary'}`}
            >
              PURE WATER
            </span>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(item.href)
                  ? overHero
                    ? 'text-white'
                    : 'text-primary'
                  : overHero
                    ? 'text-white/75 hover:text-white'
                    : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left ${overHero ? 'bg-white' : 'bg-primary'} transition-transform duration-200 ease-out-strong ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle className={overHero ? 'text-white hover:bg-white/10' : undefined} />
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <Link href="/#order">Order Now</Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle className={overHero ? 'text-white hover:bg-white/10' : undefined} />
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className={`h-6 w-6 ${overHero ? 'text-white' : 'text-foreground'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${overHero ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border mt-2">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive(item.href)
                    ? overHero
                      ? 'text-white'
                      : 'text-primary'
                    : overHero
                      ? 'text-white/75 hover:text-white'
                      : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2 w-full"
              asChild
            >
              <Link href="/#order" onClick={() => setMenuOpen(false)}>
                Order Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
