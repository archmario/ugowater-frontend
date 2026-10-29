'use client';

import { useState } from 'react';
import { deliveryAreas, products } from '@/constants/products';
import { formatNaira } from '@/utils/format';
import { srcSetFor } from '@/utils/image';
import { waLink } from '@/utils/whatsapp';
import { DropLogo, WaIcon } from './Icons';

// Pick a product, set the quantity and area, and the WhatsApp message is filled in
export default function OrderCalculator() {
  const [productId, setProductId] = useState(products[0].id);
  const [qty, setQty] = useState(10);
  const [area, setArea] = useState(deliveryAreas[0]);
  const [bumpKey, setBumpKey] = useState(0);

  const product = products.find((p) => p.id === productId) ?? products[0];
  const total = qty * product.price;
  const change = (n: number) => {
    setQty((q) => Math.max(1, q + n));
    setBumpKey((k) => k + 1);
  };

  const message = `Hi Omionkpo, I want to order ${qty} ${qty === 1 ? product.unit : product.unitPlural} of ${product.name.toLowerCase()}, delivered to ${area}. Estimated total ${formatNaira(total)}.`;

  return (
    <div className="row" style={{ gap: 32, alignItems: 'stretch' }}>
      <div className="col grid-2" data-reveal="left">
        {products.map((p) => (
          <button key={p.id} type="button" className="pcard" aria-pressed={p.id === productId} onClick={() => setProductId(p.id)}>
            <span className="pimg">
              {p.image ? (
                <img
                  src={p.image}
                  srcSet={srcSetFor(p.image)}
                  sizes="(max-width: 760px) 90vw, 320px"
                  alt={p.name}
                  loading="lazy"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
                />
              ) : (
                <span className="pimg-empty"><DropLogo size={44} /><span>Sachet photo coming soon</span></span>
              )}
            </span>
            <span className="top">{p.tag}<span className="dot" /></span>
            <span className="name">{p.name}</span>
            <span className="desc">{p.description}</span>
            <span className="price">{formatNaira(p.price)} <small>/ {p.unit}</small></span>
          </button>
        ))}
      </div>

      <div className="col-sm order" data-reveal="right">
        <span className="display" style={{ fontWeight: 800, fontSize: 20 }}>Your order</span>

        <div className="stack" style={{ gap: 8 }}>
          <span className="label">How many {product.unitPlural}?</span>
          <div className="stepper">
            <button type="button" className="minus" aria-label="Remove one" onClick={() => change(-1)}>−</button>
            <span key={bumpKey} className="qty bump" aria-live="polite">{qty}</span>
            <button type="button" className="plus" aria-label="Add one" onClick={() => change(1)}>+</button>
            <button type="button" className="ten" onClick={() => change(10)}>+10</button>
          </div>
        </div>

        <div className="stack" style={{ gap: 8 }}>
          <span className="label">Deliver to</span>
          <div className="areas">
            {deliveryAreas.map((a) => (
              <button key={a} type="button" className="area" aria-pressed={a === area} onClick={() => setArea(a)}>{a}</button>
            ))}
          </div>
        </div>

        <div className="hr" />
        <div className="total">
          <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)' }}>Estimated total</span>
          <b key={total} className="bump">{formatNaira(total)}</b>
        </div>
        <span style={{ fontSize: 13, color: 'var(--muted)', marginTop: -12 }}>
          Delivery fee confirmed on WhatsApp.
        </span>
        <a className="btn btn-wa" style={{ minHeight: 56, fontSize: 17 }} href={waLink(message)} target="_blank" rel="noopener noreferrer">
          <WaIcon size={20} /> Send order on WhatsApp
        </a>
      </div>
    </div>
  );
}
