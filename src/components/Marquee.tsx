import type { ReactNode } from 'react';

// Continuously slides its items from right to left and loops. Pauses on hover;
// becomes a normal swipeable row for visitors who prefer reduced motion.
export default function Marquee({ children, duration = 40 }: { children: ReactNode; duration?: number }) {
  return (
    <div className="group relative overflow-hidden motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">{children}</div>
        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 motion-reduce:hidden" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
