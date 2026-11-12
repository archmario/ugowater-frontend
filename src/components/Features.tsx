import Link from 'next/link';
import { Photo } from '@/components/Decor';
import { ArrowIcon } from '@/components/Icons';
import { siteConfig } from '@/config/site';

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const { nafdac, shopsServed, areaServed } = siteConfig;

// "Why Omionkpo" laid out like the facts label on the back of a bottle
const facts: [string, string, string?][] = [
  ['Source', 'Natural spring', 'Never from tankers'],
  ['Filtration', 'Multi-stage', 'Sediment and impurities out'],
  ['Sealed', 'By machine', 'Never by hand'],
  ['NAFDAC Reg. No.', nafdac.number],
  ['Made in', 'Aku, Igbo-Etiti'],
  ['Delivered to', 'Homes, shops and events', 'Across Enugu State'],
];

const stats = [
  { value: `${shopsServed}+`, label: 'Shops selling' },
  { value: String(areaServed.length), label: 'Areas served' },
  { value: '3', label: 'Ways to buy' },
  { value: '100%', label: 'Machine sealed' },
];

// "Why choose us": the bottle label, a photo with a floating card, then the numbers
export default function Features() {
  return (
    <>
      <section className="section ice">
        <div className="wrap why why-label">
          <div className="why-head" data-reveal>
            <span className="eyebrow">WHY OMIONKPO</span>
            <h2>Pure table water,<br />made with care in Aku.</h2>
            <p>
              We are not just another water company. We are your neighbours, bringing clean, safe drinking water
              to every home and business. Read it the way you&apos;d read the back of a bottle.
            </p>
          </div>
          <div className="water-label" data-reveal>
            <div className="wl-top">
              <span>Omionkpo</span>
              <small>Table Water · Label facts</small>
            </div>
            <dl>
              {facts.map(([k, v, note], i) => (
                <div key={k} style={d(i * 90)}>
                  <dt>{k}</dt>
                  <dd>
                    {v}
                    {note && <small>{note}</small>}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="wl-foot">
              <span>Best served cold.</span>
              <a href={nafdac.verifyUrl} target="_blank" rel="noopener noreferrer">
                Verify on NAFDAC ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap row spot">
          <div className="spot-media col-sm" data-reveal="left">
            <span className="spot-shape" aria-hidden="true" />
            <div className="spot-photo">
              <Photo
                src="/images/omionkpo-delivery-truck.webp"
                alt="Omionkpo delivery truck loaded with table water"
                sizes="(max-width: 760px) 80vw, 420px"
                height={460}
              />
            </div>
            <div className="spot-label">
              <small>Omionkpo Table Water</small>
              <b>Sealed in Aku, delivered to you</b>
              <ul>
                <li>NAFDAC {nafdac.number}</li>
                <li>Aku, Igbo-Etiti</li>
              </ul>
              <span className="spot-tag">Sachets · Bottles · Cans</span>
            </div>
          </div>
          <div className="col stack" data-reveal="right">
            <span className="eyebrow">DELIVERY</span>
            <h2>From our factory<br />to your door.</h2>
            <p className="lead">
              Send your order on WhatsApp and we confirm it, load the truck and bring it to you. Pay when your
              water arrives: cash, transfer or POS.
            </p>
            <Link href="/products/#order" className="btn btn-navy btn-round">Order now <ArrowIcon /></Link>
          </div>
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
