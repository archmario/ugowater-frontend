import { siteConfig } from '@/config/site';
import { customerPromises } from '@/constants/promises';

// "My People First": our four promises, joined by a water line that fills as the
// section scrolls into view. Each promise pops in as the water reaches it.
export default function WhatToExpect() {
  return (
    <section id="promise" className="section ice expect">
      <div className="wrap stack" style={{ gap: 56 }}>
        <div className="head expect-head" data-reveal>
          <span className="eyebrow">{siteConfig.slogan.toUpperCase()}</span>
          <h2>What to expect from Omionkpo.</h2>
          <p className="lead">
            We are new, and we want to earn your trust. Be among our first customers. This is our promise
            to every one of them.
          </p>
        </div>
        <ol className="expect-flow" data-reveal>
          <span className="expect-pipe" aria-hidden="true"><span /></span>
          {customerPromises.map((p, i) => (
            <li key={p.title} style={{ ['--i' as string]: i }}>
              <span className="expect-node">
                <p.icon size={26} strokeWidth={2} aria-hidden="true" />
                <em>{String(i + 1).padStart(2, '0')}</em>
              </span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
