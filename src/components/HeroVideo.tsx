'use client';

import { useState } from 'react';
import SmartImage from '@/components/SmartImage';
import { useBackgroundVideo } from '@/hooks/ui/useBackgroundVideo';
import { cn } from '@/utils/cn';

// Muted, looping background video. The still poster shows first (and stays
// for reduced-motion / data-saver visitors); the video fades in once playing.
export default function HeroVideo() {
  const src = useBackgroundVideo('/videos/hero-water.mp4', '/videos/hero-water-640.mp4');
  const [playing, setPlaying] = useState(false);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <SmartImage
        src="/images/hero-water-poster.webp"
        alt=""
        sizes="100vw"
        priority
        wrapperClassName="absolute inset-0"
      />
      {src && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-strong',
            playing ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  );
}
