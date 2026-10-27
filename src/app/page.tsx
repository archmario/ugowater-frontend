import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import WhatToExpect from '@/components/WhatToExpect';
import OrderSection from '@/components/OrderSection';
import Link from 'next/link';
import { ArrowRight, Droplets, ShieldCheck, Truck, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />

      {/* CTA section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div
            data-reveal
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <Droplets className="h-12 w-12 text-white mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 text-balance">
                Ready for Clean, Fresh Water at Your Door?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto text-balance">
                Order now and pay on delivery. From a single bag of sachets to bulk bottles, we have
                you covered across Enugu State.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 text-base h-12 px-8"
                  asChild
                >
                  <Link href="/#order">
                    Place Your Order
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base h-12 px-8 bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white"
                  asChild
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                {[
                  { icon: ShieldCheck, label: 'NAFDAC Registered' },
                  { icon: Truck, label: 'Delivered to Your Door' },
                  { icon: Wallet, label: 'Pay on Delivery' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/90">
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatToExpect />
      <OrderSection />
    </>
  );
}
