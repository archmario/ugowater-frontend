import type { CSSProperties } from 'react';
import PhotoMosaic from '@/components/PhotoMosaic';
import { features } from '@/constants/features';

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Trusted by Thousands Across Nigeria
          </h2>
          <p className="text-muted-foreground text-balance">
            We are not just another water company. We are your neighbours, committed to bringing
            clean, safe drinking water to every Nigerian home and business.
          </p>
        </div>

        <div data-reveal>
          <PhotoMosaic />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} data-reveal style={{ '--delay': `${idx * 60}ms` } as CSSProperties}>
              <div className="h-full group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/20 transition-[transform,box-shadow,border-color] duration-300 ease-out-strong hover:-translate-y-1">
                <div
                  className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
