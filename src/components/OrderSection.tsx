'use client';

import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { products } from '@/constants/products';
import { useOrderForm } from '@/hooks/order/useOrderForm';
import { formatNaira } from '@/utils/format';
import { WaIcon } from './Icons';

const { address } = siteConfig;
const fullAddress = `${address.street}, ${address.city}, ${address.lga}, ${address.region}, Nigeria`;
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

const contactInfo = [
  { icon: Phone, label: 'Call or WhatsApp', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  ...(siteConfig.email ? [{ icon: Mail, label: 'Email us', value: siteConfig.email, href: `mailto:${siteConfig.email}` }] : []),
  { icon: MapPin, label: 'Visit our factory', value: `${address.street}, ${address.city}, ${address.lga}`, href: mapLink },
  { icon: Clock, label: 'Working hours', value: siteConfig.hours },
];

// "Get in touch": contact details, an order form that opens WhatsApp, and the map
export default function OrderSection() {
  const { values, setField, submitted, handleSubmit, reset } = useOrderForm();

  return (
    <section id="order" className="section ice" style={{ scrollMarginTop: 72 }}>
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="head" data-reveal>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Order pure water in Enugu.</h2>
          <p className="lead">
            Fill out the form to send your order to us on WhatsApp. Our team will confirm your order
            and delivery details. Fast, easy, and no payment until delivery.
          </p>
        </div>

        <div className="row" style={{ gap: 24, alignItems: 'stretch' }}>
          <div className="col-sm stack" style={{ gap: 16 }} data-reveal="left">
            <div className="contact-card">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-item">
                  <span className="icon-box"><info.icon size={22} color="#1446D9" strokeWidth={2} aria-hidden="true" /></span>
                  <div>
                    <small>{info.label}</small>
                    {info.href ? (
                      <a href={info.href} {...(info.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
                        {info.value}
                      </a>
                    ) : (
                      <b>{info.value}</b>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pay-box">
              <b>Pay on delivery</b>
              <span>No upfront payment needed. Order now and pay when your water arrives. Cash, transfer or POS.</span>
            </div>
          </div>

          <div className="col" data-reveal="right">
            {submitted ? (
              <div className="form form-done">
                <CheckCircle2 size={56} color="#0e7a3e" aria-hidden="true" />
                <b className="display" style={{ fontSize: 22 }}>Almost done!</b>
                <span>We opened WhatsApp with your order filled in. Tap send there and our team will confirm your order and arrange delivery.</span>
                <button type="button" className="btn btn-ghost" onClick={reset}>Place another order</button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <label>Full name
                  <input value={values.name} onChange={(e) => setField('name', e.target.value)} autoComplete="name" placeholder="Enter your full name" required />
                </label>
                <label>Phone number
                  <input value={values.phone} onChange={(e) => setField('phone', e.target.value)} type="tel" autoComplete="tel" placeholder="e.g. 0803 123 4567" required />
                </label>
                <label>City
                  <input value={values.city} onChange={(e) => setField('city', e.target.value)} placeholder="e.g. Enugu" required />
                </label>
                <label>Product
                  <select value={values.productId} onChange={(e) => setField('productId', e.target.value)} required>
                    <option value="" disabled>Select product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>{p.name} - {formatNaira(p.price)}</option>
                    ))}
                  </select>
                </label>
                <label>Quantity
                  <input value={values.quantity} onChange={(e) => setField('quantity', e.target.value)} type="number" min={1} inputMode="numeric" placeholder="How many?" required />
                </label>
                <label className="full">Delivery address
                  <textarea value={values.address} onChange={(e) => setField('address', e.target.value)} rows={2} placeholder="Enter your full delivery address" required />
                </label>
                <button type="submit" className="btn btn-wa"><WaIcon /> Send order on WhatsApp</button>
              </form>
            )}
          </div>
        </div>

        <div className="map" data-reveal>
          <iframe
            title={`Map showing ${siteConfig.name} location`}
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
