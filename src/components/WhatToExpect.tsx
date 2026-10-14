import type { CSSProperties } from 'react';
import { customerPromises } from '@/constants/promises';
import { siteConfig } from '@/config/site';

// Stands in for customer reviews while the brand is new
export default function WhatToExpect() {
  return (
    <section id="promise" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            {siteConfig.slogan}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What to Expect From Omionkpo
          </h2>
          <p className="text-muted-foreground text-balance">
            We are new, and we want to earn your trust. Be among our first customers. This is our
            promise to every one of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerPromises.map((promise, idx) => (
            <div
              key={promise.title}
              data-reveal
              style={{ '--delay': `${idx * 60}ms` } as CSSProperties}
              className="bg-gradient-to-br from-sky-50 to-background dark:from-card dark:to-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <promise.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{promise.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
