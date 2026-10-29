import type { Metadata } from 'next';
import { CtaBand, PageHero } from '@/components/Decor';
import OrderCalculator from '@/components/OrderCalculator';
import { pageMetadata } from '@/utils/metadata';
import { waLink } from '@/utils/whatsapp';

export const metadata: Metadata = pageMetadata({
  title: 'Products',
  description:
    'Omionkpo sachet pure water bags and premium bottle packs, made in Aku, Igbo-Etiti. Work out your order and send it on WhatsApp.',
  path: '/products/',
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="ORDER IN 30 SECONDS"
        title={<>Pick it, count it, <em>send it.</em></>}
        text="Choose what you need and we'll fill in your WhatsApp message for you. No calls, no back-and-forth."
        bg="/images/omionkpo-bottles.webp"
        look="bright moving"
      />

      <section className="section" id="order" style={{ scrollMarginTop: 72 }}>
        <div className="wrap">
          <OrderCalculator />
        </div>
      </section>

      <section className="section ice">
        <div className="wrap head" data-reveal>
          <span className="eyebrow">PREMIUM RANGE</span>
          <h2>For offices, events and gifting.</h2>
          <p className="lead">Our premium bottles bring the same clean Omionkpo water in a crystal-clear pack that looks good on any table. Ask about bulk pricing for weddings, church programmes and corporate events.</p>
        </div>
      </section>

      <div style={{ height: 96 }} />
      <CtaBand
        title="Ordering for an event?"
        text="Tell us the date and headcount and we'll quote you on WhatsApp."
        href={waLink("Hi Omionkpo, I'd like a quote for an event.")}
        label="Get an event quote"
      />
    </>
  );
}
