import { siteConfig } from '@/config/site';
import { customerPromises } from '@/constants/promises';

// "My People First": our promise to customers, in place of reviews while the brand is new
export default function WhatToExpect() {
  return (
    <section id="promise" className="section">
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="head" data-reveal>
          <span className="eyebrow">{siteConfig.slogan.toUpperCase()}</span>
          <h2>What to expect from Omionkpo.</h2>
          <p className="lead">
            We are new, and we want to earn your trust. Be among our first customers. This is our
            promise to every one of them.
          </p>
        </div>
        <div className="grid-4">
          {customerPromises.map((p, i) => (
            <div key={p.title} className="tile static promise" data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
              <span className="icon-box"><p.icon size={26} color="#1446D9" strokeWidth={2} aria-hidden="true" /></span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
