import type { CSSProperties } from 'react';
import SmartImage from '@/components/SmartImage';
import { processSteps } from '@/constants/process';

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden pt-32">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="fade-rise text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            How It Works
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 text-balance">
            How Our Pure Water Is Made: From Source to Your Glass
          </h1>
          <p className="text-white/60 text-balance">
            We do not just package water, we perfect it. Here is the journey every drop takes before
            it reaches you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="fade-rise relative"
              style={{ '--delay': `${150 + idx * 60}ms` } as CSSProperties}
            >
              {/* Connecting line */}
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-[transform,background-color] duration-300 ease-out-strong hover:-translate-y-1">
                <div className="h-32 overflow-hidden relative">
                  <SmartImage
                    src={step.image}
                    alt={step.imageAlt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    wrapperClassName="absolute inset-0 bg-white/5"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute top-3 left-3 w-11 h-11 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="absolute top-2 right-3 text-2xl font-bold text-white/30">
                    {step.number}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
