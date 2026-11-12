import type { Metadata } from 'next';
import { Photo } from '@/components/Decor';
import DistributorForm from '@/components/DistributorForm';
import { siteConfig } from '@/config/site';
import { srcSetFor } from '@/utils/image';
import { pageMetadata } from '@/utils/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Become a Distributor',
  description: 'Stock Omionkpo Table Water in your shop or run your own delivery round. Apply in minutes.',
  path: '/distributor/',
});

const perks = [
  { big: 'Factory price', small: 'Buy straight from our factory in Aku, with no middleman in between.' },
  { big: 'We deliver', small: 'Fresh stock brought to your shop on a schedule that suits you.' },
  { big: 'Brand support', small: 'Branded materials and a name your customers already trust.' },
];

const steps = [
  { t: 'Apply', b: 'Fill the form below. Your details go straight to our team.' },
  { t: 'We call you', b: 'We confirm your area, pricing and first order.' },
  { t: 'Start selling', b: 'Your first supply arrives and you start earning.' },
];

export default function DistributorPage() {
  return (
    <>
      {/* The range at the spring, full width, words on the left */}
      <section className="spring-hero dist-hero">
        <img
          className="spring-photo"
          src="/images/omionkpo-bottles-spring.webp"
          srcSet={srcSetFor('/images/omionkpo-bottles-spring.webp')}
          sizes="100vw"
          alt="Omionkpo Table Water bottles and a sachet on a rock beside a spring waterfall"
          loading="eager"
          decoding="async"
        />
        <div className="spring-shade" aria-hidden="true" />
        <div className="wrap spring-inner">
          <div className="spring-copy">
            <span className="spring-eyebrow enter">
              <i aria-hidden="true" /> Become a distributor
            </span>
            <h1 className="enter" style={{ ['--d' as string]: '120ms' }}>
              Wear the blue.
              <br />
              <em>Earn on every bag.</em>
            </h1>
            <p className="enter" style={{ ['--d' as string]: '240ms' }}>
              Join {siteConfig.shopsServed}+ shops already selling Omionkpo. We supply, you sell, and your people drink
              clean water.
            </p>
            <a href="#apply" className="btn btn-blue enter" style={{ ['--d' as string]: '320ms', alignSelf: 'flex-start' }}>
              Apply now
            </a>
          </div>
          <dl className="spring-facts enter" style={{ ['--d' as string]: '400ms' }}>
            <div>
              <dt>Shops selling</dt>
              <dd>{siteConfig.shopsServed}+</dd>
            </div>
            <div>
              <dt>Supply</dt>
              <dd>Straight from Aku</dd>
            </div>
            <div>
              <dt>Range</dt>
              <dd>Sachets · Bottles · Cans</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* WHY SELL OMIONKPO */}
      <section className="section">
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="head" data-reveal>
            <span className="eyebrow">WHY SELL OMIONKPO</span>
            <h2>A product your customers ask for by name.</h2>
          </div>
          <div className="supply" data-reveal>
            {perks.map((p, i) => (
              <div key={p.big}>
                <span>0{i + 1}</span>
                <h3>{p.big}</h3>
                <p>{p.small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO JOIN + FORM, with the Team Omionkpo photo */}
      <section className="section ice" id="apply" style={{ scrollMarginTop: 72 }}>
        <div className="wrap row" style={{ gap: 56, alignItems: 'stretch' }}>
          <div className="col stack" style={{ gap: 32 }}>
            <div className="head" data-reveal>
              <span className="eyebrow">HOW TO JOIN</span>
              <h2>
                Three steps to <em className="serif-em">your first supply.</em>
              </h2>
            </div>
            <ol className="join-steps" data-reveal>
              {steps.map((s, i) => (
                <li key={s.t}>
                  <span>0{i + 1}</span>
                  <b>{s.t}</b>
                  <p>{s.b}</p>
                </li>
              ))}
            </ol>
            <div className="distributor-form">
              <DistributorForm />
            </div>
          </div>

          <div className="col-sm photo" data-reveal="right">
            <Photo
              src="/images/omionkpo-uniform.webp"
              alt="A child in an Omionkpo Table Water polo shirt"
              sizes="(max-width: 760px) 90vw, 480px"
              className="photo-fill"
            />
            <span className="tag">Team Omionkpo</span>
          </div>
        </div>
      </section>
    </>
  );
}
