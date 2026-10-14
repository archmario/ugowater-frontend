'use client';

import { useEffect, useRef, useState } from 'react';
import { mosaicTiles } from '@/constants/gallery';
import { useCycle } from '@/hooks/ui/useCycle';
import type { MosaicTile } from '@/types';
import { cn } from '@/utils/cn';
import { srcSetFor } from '@/utils/image';

function Tile({
  tile,
  delay,
  sizes,
  children,
}: {
  tile: MosaicTile;
  delay: number;
  sizes: string;
  children?: React.ReactNode;
}) {
  const active = useCycle(tile.images.length, 4500, delay);
  const firstImage = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // The static HTML can finish loading the image before React attaches onLoad
  useEffect(() => {
    if (firstImage.current?.complete && firstImage.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={cn('relative rounded-2xl overflow-hidden bg-muted', tile.span)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted-foreground/10" />}
      {tile.images.map((image, i) => (
        <img
          key={image.src}
          ref={i === 0 ? firstImage : undefined}
          onLoad={i === 0 ? () => setLoaded(true) : undefined}
          src={image.src}
          srcSet={srcSetFor(image.src)}
          sizes={sizes}
          alt={image.alt}
          loading="lazy"
          aria-hidden={i !== active}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-1000 [transition-timing-function:var(--ease-in-out)]',
            i === active && loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
          )}
        />
      ))}
      {children}
    </div>
  );
}

export default function PhotoMosaic() {
  const [feature, ...rest] = mosaicTiles;

  return (
    <div className="mb-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[180px] gap-3 md:gap-4">
      <Tile tile={feature} delay={0} sizes="(min-width: 768px) 50vw, 100vw">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
        <p className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white text-lg md:text-2xl font-bold text-balance">
          Every drop is a promise of purity, delivered with care to families across the South East.
        </p>
      </Tile>
      {rest.map((tile, i) => (
        <Tile key={i} tile={tile} delay={1100 * (i + 1)} sizes="(min-width: 768px) 25vw, 50vw" />
      ))}
    </div>
  );
}
