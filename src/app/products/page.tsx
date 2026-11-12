import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';
import OrderCalculator from '@/components/OrderCalculator';
import { siteConfig } from '@/config/site';
import { srcSetFor } from '@/utils/image';
import { pageMetadata } from '@/utils/metadata';
import { waLink } from '@/utils/whatsapp';

export const metadata: Metadata = pageMetadata({
  title: 'Products',
  description:
    'Omionkpo sachet pure water bags and premium bottle packs, made in Aku, Igbo-Etiti. Work out your order and send it in seconds.',
  path: '/products/',
});

// Who we supply, and what they usually order
const customers = [
  {
    title: 'Homes',
    text: 'Water for the family, delivered to your door. Order once a week or whenever you run low.',
    items: ['Sachet bags', 'Bottle packs'],
  },
  {
    title: 'Shops and retailers',
    text: `Stock Omionkpo for your customers. Regular supply for the ${siteConfig.shopsServed}+ shops already selling it.`,
    items: ['Sachet bags in bulk', 'Bottle packs', 'Regular supply'],
  },
  {
    title: 'Offices and events',
    text: 'Weddings, church programmes, meetings and parties. Tell us the date and headcount and we plan it with you.',
    items: ['Premium bottles', 'Cans', 'Bulk quotes'],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* A plain business intro: no photo up here, the order form comes first */}
      <section className="biz-intro">
        <div className="wrap">
          <div>
            <span className="eyebrow">PRODUCTS AND ORDERING</span>
            <h1>
              Pick it, count it, <em>send it.</em>
            </h1>
            <p className="lead">
              Choose what you need, see the total straight away, and send your order on WhatsApp. Pay when it arrives.
            </p>
          </div>
          <ul className="biz-terms">
            <li>
              <small>Payment</small>
              <b>On delivery: cash, transfer or POS</b>
            </li>
            <li>
              <small>Orders</small>
              <b>Sent on WhatsApp</b>
            </li>
            <li>
              <small>Delivery</small>
              <b>Across Enugu State</b>
            </li>
            <li>
              <small>NAFDAC Reg. No.</small>
              <b>{siteConfig.nafdac.number}</b>
            </li>
            <li className="biz-bank">
              <small>Pay into</small>
              <div>
                <b className="biz-acct">{siteConfig.bank.accountNumber}</b>
                <span>
                  {siteConfig.bank.accountName} · {siteConfig.bank.name}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="order" style={{ scrollMarginTop: 72, paddingTop: 56 }}>
        <div className="wrap">
          <OrderCalculator />
        </div>
      </section>

      {/* WHO WE SUPPLY */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap stack" style={{ gap: 32 }}>
          <div className="head" data-reveal>
            <span className="eyebrow">WHO WE SUPPLY</span>
            <h2>From one family to a full shop shelf.</h2>
          </div>
          <div className="supply" data-reveal>
            {customers.map((c, i) => (
              <div key={c.title}>
                <span>0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul>
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR OWN DELIVERY: the truck photo, big */}
      <section className="fleet">
        <img
          src="/images/omionkpo-delivery-truck.webp"
          srcSet={srcSetFor('/images/omionkpo-delivery-truck.webp')}
          sizes="100vw"
          alt="The Omionkpo team loading a delivery truck with packs of table water"
          loading="lazy"
          decoding="async"
        />
        <div className="fleet-shade" aria-hidden="true" />
        <div className="wrap">
          <div className="fleet-copy" data-reveal="left">
            <span className="eyebrow">OUR OWN DELIVERY</span>
            <h2>
              Loaded by our team.
              <br />
              <em>Brought to your door.</em>
            </h2>
            <p>
              Our own truck and our own people, in Omionkpo blue. Big order for a shop or an event? Tell us the date and
              quantity and we&apos;ll send you a quote.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="#order" className="btn btn-blue">
                Order now <ArrowIcon />
              </Link>
              <a
                href={waLink("Hi Omionkpo, I'd like a quote for a bulk or event order.")}
                className="btn btn-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a bulk quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
