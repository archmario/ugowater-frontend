import Link from 'next/link';
import { srcSetFor } from '@/utils/image';
import { ArrowIcon } from '@/components/Icons';
import { siteConfig } from '@/config/site';

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const { nafdac, shopsServed, areaServed } = siteConfig;

// Four short statements that rise in over the splash photo
const truths = [
  { big: 'Spring-sourced.', small: 'Our water starts at a natural spring, never a tanker.' },
  { big: 'Filtered in stages.', small: 'Sediment and impurities out, clean and clear water in.' },
  { big: 'Sealed by machine.', small: 'Never by hand, from our line in Aku.' },
  { big: `NAFDAC ${nafdac.number}.`, small: 'Registered, and printed on every pack.', verify: true },
];

const stats = [
  { value: `${shopsServed}+`, label: 'Shops selling' },
  { value: String(areaServed.length), label: 'Areas served' },
  { value: '3', label: 'Ways to buy' },
  { value: '100%', label: 'Machine sealed' },
];

// "Why choose us": statements over the splash photo, the delivery route, then the numbers
export default function Features() {
  return (
    <>
      {/* WHY OMIONKPO: the splash photo full width, statements rising in on the right */}
      <section className="truths">
        <img
          className="truths-photo"
          src="/images/omionkpo-spring-splash.webp"
          srcSet={srcSetFor('/images/omionkpo-spring-splash.webp')}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
        <div className="truths-shade" aria-hidden="true" />
        <div className="wrap truths-grid">
          <div className="truths-head" data-reveal>
            <span className="eyebrow">WHY OMIONKPO</span>
            <h2>
              Pure table water,
              <br />
              <em>made with care in Aku.</em>
            </h2>
            <p>
              We are not just another water company. We are your neighbours, bringing clean, safe drinking water to
              every home and business.
            </p>
          </div>
          <ol className="truths-list" data-reveal>
            {truths.map((t, i) => (
              <li key={t.big} style={d(i * 260)}>
                <b>{t.big}</b>
                <span>
                  {t.small}
                  {t.verify && (
                    <>
                      {' '}
                      <a href={nafdac.verifyUrl} target="_blank" rel="noopener noreferrer">
                        Verify ↗
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DELIVERY: text only. A big outlined word behind, the route through the towns we serve */}
      <section className="route">
        <span className="route-ghost" aria-hidden="true">DELIVERED</span>
        <div className="wrap route-panel">
          <span className="eyebrow">DELIVERY</span>
          <h2>
            From our factory
            <br />
            <em>to your door.</em>
          </h2>
          <p>
            Send your order on WhatsApp and we confirm it, load the truck and bring it to you. Pay when your water
            arrives: cash, transfer or POS.
          </p>
          <ol className="route-line" data-reveal aria-label="Towns we deliver to">
            {areaServed.map((town, i) => (
              <li key={town} style={d(i * 220)}>
                {i === 0 && <small>Factory</small>}
                <span>{town}</span>
              </li>
            ))}
          </ol>
          <Link href="/products/#order" className="btn btn-blue">
            Order now <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className="stat" data-reveal style={d(i * 100)}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
