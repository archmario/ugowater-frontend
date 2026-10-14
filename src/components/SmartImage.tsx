'use client';

import { useEffect, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { cn } from '@/utils/cn';
import { srcSetFor } from '@/utils/image';

interface SmartImageProps {
  src: string;
  alt: string;
  // How wide the image shows on screen, so the browser picks the right file
  sizes: string;
  // Above-the-fold images: load straight away, ahead of everything else
  priority?: boolean;
  // Size, rounding and position of the box the image sits in
  wrapperClassName?: string;
  className?: string;
}

// An image with a pulsing placeholder that shows until the photo arrives.
export default function SmartImage({
  src,
  alt,
  sizes,
  priority = false,
  wrapperClassName,
  className,
}: SmartImageProps) {
  // Priority images get a high-priority preload link in <head>, so the browser
  // fetches them before anything else. (Next's built-in React has preload();
  // the installed @types don't know it yet.)
  if (priority) {
    const preload = (ReactDOM as unknown as { preload?: (href: string, options: object) => void })
      .preload;
    preload?.(src, {
      as: 'image',
      fetchPriority: 'high',
      imageSrcSet: srcSetFor(src),
      imageSizes: sizes,
    });
  }

  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // The static HTML can finish loading the image before React attaches onLoad
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className={cn('relative overflow-hidden bg-muted', wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted-foreground/10" />}
      <img
        ref={ref}
        src={src}
        srcSet={srcSetFor(src)}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          // Priority images show immediately rather than waiting for a fade
          loaded || priority ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  );
}
