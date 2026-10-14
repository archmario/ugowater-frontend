'use client';

import { useEffect, useState } from 'react';

// Picks which background video file to load, or none.
// Phones get the small file; visitors who prefer reduced motion or have
// data saver on get no video at all and just see the still poster.
export function useBackgroundVideo(src: string, smallSrc: string) {
  const [chosen, setChosen] = useState<string | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData;
    if (reduceMotion || saveData) return;

    setChosen(window.matchMedia('(min-width: 768px)').matches ? src : smallSrc);
  }, [src, smallSrc]);

  return chosen;
}
