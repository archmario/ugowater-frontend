import Link from 'next/link';
import { BgPhoto, CtaBand, Photo } from '@/components/Decor';
import Features from '@/components/Features';
import { ArrowIcon, BagIcon, GearIcon, HandshakeIcon, PinIcon, ShieldIcon } from '@/components/Icons';
import { siteConfig } from '@/config/site';
import { orderMessage, waLink } from '@/utils/whatsapp';

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const { nafdac, shopsServed } = siteConfig;

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <BgPhoto src="/images/omionkpo-billboard.webp" alt="Omionkpo Table Water billboard over an Enugu road" priority />
        <div className="wrap row">
          <div className="stack" style={{ maxWidth: 620 }}>
            <span className="pill enter">{siteConfig.slogan.toUpperCase()}</span>
            <h1 className="enter" style={d(100)}>Clean. Cold.<br /><em>Delivered.</em></h1>
            <p className="lead enter" style={{ ...d(220), fontSize: 19 }}>
              Omionkpo Table Water is bottled and bagged in Aku, Igbo-Etiti, Enugu State and brought to your shop,
              office or event. Order in one message on WhatsApp.
            </p>
            <div className="enter" style={{ ...d(340), display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/products/#order" className="btn btn-blue">Order now <ArrowIcon /></Link>
              <Link href="/products" className="btn btn-ghost">See products</Link>
            </div>
            <div className="badges enter" style={d(460)}>
              <a
                className="badge"
                href={nafdac.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Check this number on NAFDAC's website"
              >
                <ShieldIcon />
                <div><small>NAFDAC Reg. No.</small><b>{nafdac.number}</b><span className="verify">Verify on NAFDAC ↗</span></div>
              </a>
              <div className="badge"><PinIcon /><div><small>Made in</small><b>Aku, Igbo-Etiti</b></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="wrap grid">
          <div data-reveal><b><span data-count={shopsServed} data-suffix="+">{shopsServed}+</span> shops</b><span>served across Enugu State so far</span></div>
          <div data-reveal style={d(100)}><b>NAFDAC registered</b><span>Reg. No. {nafdac.number}, on every pack</span></div>
          <div data-reveal style={d(200)}><b>Machine-packed</b><span>Sealed and shrink-wrapped on our line</span></div>
          <div data-reveal style={d(300)}><b>Local and fast</b><span>Straight from Aku to your door</span></div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="wrap stack" style={{ gap: 40 }}>
          <div className="head" data-reveal>
            <span className="eyebrow">WHY OMIONKPO</span>
            <h2>Water you can trust, from people you know.</h2>
          </div>
          <div className="grid-3">
            <Link href="/products" className="tile" data-reveal>
              <span className="icon-box"><BagIcon /></span>
              <h3>Order in 30 seconds</h3>
              <p>Pick sachet bags or premium bottles, choose your quantity, and send the order straight to WhatsApp.</p>
              <span className="more">See products <ArrowIcon /></span>
            </Link>
            <Link href="/process" className="tile" data-reveal style={d(120)}>
              <span className="icon-box"><GearIcon /></span>
              <h3>See our process</h3>
              <p>From our borehole to the sealing line to your hand. No guesswork about what you are drinking.</p>
              <span className="more">Our process <ArrowIcon /></span>
            </Link>
            <Link href="/distributor" className="tile" data-reveal style={d(240)}>
              <span className="icon-box"><HandshakeIcon /></span>
              <h3>Earn with us</h3>
              <p>Stock Omionkpo in your shop or run your own delivery round. Join {shopsServed}+ shops already selling.</p>
              <span className="more">Become a distributor <ArrowIcon /></span>
            </Link>
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
              src="/images/omionkpo-factory.webp"
              alt="Omionkpo staff running the bottling line at the factory"
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

      <CtaBand
        title="Thirsty shop? Big event this weekend?"
        text="Send us one WhatsApp message and we'll handle the rest."
        href={waLink(orderMessage)}
        label="Order on WhatsApp"
      />
    </>
  );
}
