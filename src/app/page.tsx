import Link from 'next/link';
import { Photo } from '@/components/Decor';
import Features from '@/components/Features';
import HeroPhotos from '@/components/HeroPhotos';
import OrderSection from '@/components/OrderSection';
import TrustMarquee from '@/components/TrustMarquee';
import { ArrowIcon } from '@/components/Icons';
import { siteConfig } from '@/config/site';
import { srcSetFor } from '@/utils/image';

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const { nafdac, shopsServed } = siteConfig;

// Rising bubbles in the hero: [left %, size px, delay s, duration s]
const bubbles: [number, number, number, number][] = [
  [8, 10, 0, 9], [18, 6, 3, 11], [31, 14, 6, 13], [46, 8, 1.5, 10], [58, 12, 4.5, 12],
  [69, 7, 7, 9], [81, 16, 2, 14], [92, 9, 5.5, 11],
];

const panels = [
  {
    href: '/products',
    word: 'Order',
    title: 'Order in 30 seconds',
    text: 'Sachet bags, bottles or cans. Pick it, send it on WhatsApp, and we take it from there. No calls, no waiting.',
    cta: 'See products',
  },
  {
    href: '/process',
    word: 'Pure',
    title: 'See how it\'s made',
    text: 'Sourced from natural springs, filtered and sealed by machine. No guesswork about what your family drinks.',
    cta: 'Our process',
  },
  {
    href: '/distributor',
    word: 'Earn',
    title: 'Earn with us',
    text: `Stock Omionkpo in your shop or run your own delivery round. Join ${shopsServed}+ shops already selling.`,
    cta: 'Become a distributor',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO: our people, with Omionkpo in hand */}
      <section className="hero2">
        <HeroPhotos />
        <div className="hero2-shade" aria-hidden="true" />
        <div className="hero2-bubbles" aria-hidden="true">
          {bubbles.map((b, i) => (
            <span key={i} style={{ left: `${b[0]}%`, width: b[1], height: b[1], animationDelay: `${b[2]}s`, animationDuration: `${b[3]}s` }} />
          ))}
        </div>
        <div className="wrap hero2-inner">
          <div className="hero2-copy">
            <span className="line-eyebrow enter">
              <i aria-hidden="true" /> {siteConfig.slogan}
            </span>
            <h1 className="enter" style={d(100)}>
              Pure water
              <br />
              for <em>my people.</em>
            </h1>
            <p className="enter" style={d(220)}>
              Filtered, sealed by machine and brought to your door from our own factory in Aku. For family meals,
              busy shops, weddings, church harvests and every hot afternoon in between.
            </p>
            <div className="enter hero-ctas" style={{ ...d(340), display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/products/#order" className="btn btn-blue">Order now <ArrowIcon /></Link>
              <Link href="/process" className="btn btn-glass">See how it&apos;s made</Link>
            </div>
          </div>
          <div className="hero2-ledger enter" style={d(460)}>
            <a href={nafdac.verifyUrl} target="_blank" rel="noopener noreferrer" title="Check this number on NAFDAC's website">
              <small>NAFDAC Reg. No.</small>
              <b>{nafdac.number}</b>
              <span>Verify ↗</span>
            </a>
            <div>
              <small>Made in</small>
              <b>Aku, Igbo-Etiti</b>
            </div>
            <div>
              <small>Delivered across</small>
              <b>Enugu State</b>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US, SCROLLING */}
      <TrustMarquee />

      {/* WHAT WE DO: three cards, each with a big word filling with water */}
      <section className="section">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="head" data-reveal>
            <span className="eyebrow">WHY OMIONKPO</span>
            <h2>Water you can trust, from people you know.</h2>
          </div>
          <div className="wave-cards">
            {panels.map((p, i) => (
              <Link key={p.href} href={p.href} className="wave-card" data-reveal style={d(i * 120)}>
                <span className="wave-num">0{i + 1}</span>
                <span className="wave-word" aria-hidden="true">{p.word}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="more">{p.cta} <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Features />

      {/* PROCESS TEASER */}
      <section className="section">
        <div className="wrap row" style={{ gap: 56 }}>
          <div className="col-sm media" data-reveal="left">
            <Photo
              src="/images/omionkpo-premium-cans.webp"
              alt="Rows of sealed Omionkpo Premium Water cans"
              sizes="(max-width: 760px) 90vw, 560px"
              height={440}
            />
          </div>
          <div className="col stack" data-reveal="right">
            <span className="eyebrow">OUR PROCESS</span>
            <h2>Sealed by machine. Never by hand.</h2>
            <p className="lead">Every pack runs through our sealing and shrink-wrap line before it leaves the factory, so what reaches you is exactly what left us.</p>
            <Link href="/process" className="btn btn-blue" style={{ alignSelf: 'flex-start' }}>See how it&apos;s made <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* FOR THE PEOPLE YOU LOVE */}
      <section className="family">
        <div className="family-photo" data-reveal="zoom">
          <img
            src="/images/omionkpo-family-dinner.webp"
            srcSet={srcSetFor('/images/omionkpo-family-dinner.webp')}
            sizes="100vw"
            alt="A family laughing together over dinner, with a bottle of Omionkpo Table Water on the table"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="wrap">
          <div className="family-card" data-reveal>
            <span className="eyebrow">FOR THE PEOPLE YOU LOVE</span>
            <h2>Every glass is poured for someone.</h2>
            <p className="lead">
              A child home from school. A father after a long day. Customers queueing at your shop counter.
              Whoever you&apos;re pouring for, they deserve water you don&apos;t have to think twice about.
              That&apos;s the only kind we make.
            </p>
            <ul className="family-points">
              <li><b>Clean</b> Multi-stage filtration, every batch.</li>
              <li><b>Sealed</b> By machine, never by hand.</li>
              <li><b>Close</b> Made in Aku, for Aku and beyond.</li>
            </ul>
            <Link href="/products/#order" className="btn btn-blue" style={{ alignSelf: 'flex-start' }}>Order for your family <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <OrderSection />
    </>
  );
}
