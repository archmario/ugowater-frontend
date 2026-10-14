'use client';

import { useEffect, useState } from 'react';

// Steps through 0..length-1 on a timer. `delay` staggers when cycling starts,
// so several tiles don't all change at once. Stays on 0 for visitors who
// prefer reduced motion.
export function useCycle(length: number, interval = 4500, delay = 0) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      timer = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [length, interval, delay]);

  return index;
}
