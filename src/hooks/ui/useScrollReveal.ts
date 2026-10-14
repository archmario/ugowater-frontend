'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Shows every [data-reveal] element the first time it scrolls into view.
// Fires once per element: re-animating on every scroll fights the reader.
export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-visible])');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-visible', '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
