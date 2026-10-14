import type { CSSProperties } from 'react';
import Link from 'next/link';
import { Droplets, ShieldCheck, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SmartImage from '@/components/SmartImage';
import WordRise from '@/components/WordRise';
import HeroVideo from '@/components/HeroVideo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background video, tinted so the text stays readable */}
      <HeroVideo />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/60 to-transparent" />

      {/* Wave into the next section */}
      <div className="absolute -bottom-px left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 65C120 70 240 80 360 75C480 70 600 50 720 45C840 40 960 50 1080 60C1200 70 1320 80 1380 85L1440 90V120H0V60Z"
            fill="hsl(var(--background) / 0.4)"
          />
          <path
            d="M0 80L60 85C120 90 240 100 360 95C480 90 600 70 720 65C840 60 960 70 1080 80C1200 90 1320 100 1380 105L1440 110V120H0V80Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="fade-rise inline-flex items-center gap-2 bg-white/10 text-sky-200 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="h-4 w-4" />
              Pure • Fresh • Refreshing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              <WordRise text="Clean Pure Water, Delivered Across Enugu" />
            </h1>

            <p
              className="fade-rise text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 text-balance"
              style={{ '--delay': '450ms' } as CSSProperties}
            >
              From sachet to bottle, Omionkpo Table Water delivers fresh, safe drinking water
              straight to your doorstep across Enugu State. My people first.
            </p>

            <div
              className="fade-rise flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              style={{ '--delay': '550ms' } as CSSProperties}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base h-12 px-8"
                asChild
              >
                <Link href="/#order">Order Water Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base h-12 px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div
              className="fade-rise flex flex-wrap items-center gap-6 justify-center lg:justify-start"
              style={{ '--delay': '650ms' } as CSSProperties}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    >
                      <Droplets className="h-3 w-3 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/70">10,000+ happy customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <SmartImage
                src="/images/factory-bottling-line.webp"
                alt="Bottled water filling and capping line in a Nigerian water factory"
                // Hidden below lg, so phones get the smallest file
                sizes="(min-width: 1024px) 50vw, 1px"
                priority
                wrapperClassName="rounded-3xl shadow-2xl h-[500px]"
              />

              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Same day in Enugu</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float-delayed border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">100% Safe</p>
                  <p className="text-xs text-muted-foreground">Purified & filtered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
