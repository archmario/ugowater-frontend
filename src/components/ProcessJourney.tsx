'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { srcSetFor } from '@/utils/image';

const { nafdac } = siteConfig;

// The five steps from the spring to your glass, each with its own photo.
const steps = [
  {
    title: 'Sourced from natural springs',
    text: 'It starts at a natural spring, never a tanker. Clear water, from the ground up.',
    img: '/images/omionkpo-natural-spring.webp',
    alt: 'Clear spring water falling over mossy rocks',
  },
  {
    title: 'Treated and filtered',
    text: 'Multi-stage filtration takes out sediment and impurities until the water runs clean and clear.',
    img: '/images/omionkpo-factory.webp',
    alt: 'Omionkpo staff running the filling line at the factory',
  },
  {
    title: 'Sealed by machine',
    text: 'Filled, sealed and shrink-wrapped on our line. Sealed by machine, never by hand.',
    img: '/images/omionkpo-premium-cans.webp',
    alt: 'Rows of sealed Omionkpo Premium Water cans',
  },
  {
    title: 'Delivered fresh',
    text: 'Loaded straight onto our van and brought to your home, shop or event.',
    img: '/images/omionkpo-delivery-truck.webp',
    alt: 'Omionkpo delivery truck being loaded with water',
  },
  {
    title: 'Checked and registered',
    text: `Registered with NAFDAC, Reg. No. ${nafdac.number}, printed on every pack.`,
    img: '/images/omionkpo-bottles.webp',
    alt: 'Rows of Omionkpo Table Water bottles',
    verify: true,
  },
];

const pad = (n: number) => String(n).padStart(2, '0');

// As each step scrolls to the middle of the screen it lights up, and the photo
// beside it changes to match. On phones each step shows its own photo instead.
export default function ProcessJourney() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      // Counts as "current" while it crosses the middle band of the screen
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section journey">
      <div className="wrap">
        <div className="head journey-head" data-reveal>
          <span className="eyebrow">THE JOURNEY</span>
          <h2>Five steps between the spring and your glass.</h2>
        </div>

        <div className="journey-grid">
          <div className="journey-media" aria-hidden="true">
            {steps.map((s, i) => (
              <img
                key={s.img}
                className={i === active ? 'on' : undefined}
                src={s.img}
                srcSet={srcSetFor(s.img)}
                sizes="(max-width: 860px) 90vw, 560px"
                alt=""
                loading="lazy"
                decoding="async"
              />
            ))}
            <span className="journey-count">
              <b>{pad(active + 1)}</b> / {pad(steps.length)}
            </span>
          </div>

          <ol className="journey-steps" style={{ ['--progress' as string]: (active + 1) / steps.length }}>
            {steps.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className={i === active ? 'on' : i < active ? 'past' : undefined}
              >
                <img
                  className="journey-inline"
                  src={s.img}
                  srcSet={srcSetFor(s.img)}
                  sizes="90vw"
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="journey-num">{pad(i + 1)}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.verify && (
                  <a href={nafdac.verifyUrl} target="_blank" rel="noopener noreferrer" className="journey-link">
                    Verify on NAFDAC ↗
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
