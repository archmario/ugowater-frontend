import { siteConfig } from '@/config/site';

// Why choose us, as one line scrolling across the page
const items = [
  'NAFDAC registered',
  'Fast delivery',
  'Affordable prices',
  'Pure filtration',
  'Machine-packed',
  'Always available',
  'Eco-friendly packaging',
  `${siteConfig.shopsServed}+ shops served`,
  'Made in Aku, Igbo-Etiti',
  'Pay on delivery',
];

export default function TrustMarquee() {
  // The list is drawn twice so the loop has no gap
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item}>
          {item}
          <span className="marquee-star" aria-hidden="true">✦</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee" aria-label="Why choose Omionkpo">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
