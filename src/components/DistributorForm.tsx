'use client';

import type { FormEvent } from 'react';
import { waLink } from '@/utils/whatsapp';
import { WaIcon } from './Icons';

// No backend needed: the application opens in WhatsApp, already filled in.
export default function DistributorForm() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Hi Omionkpo, I want to become a distributor.\n` +
      `Name: ${f.get('name')}\nPhone: ${f.get('phone')}\nTown: ${f.get('town')}\nBags per week: ${f.get('bags') || '-'}`;
    window.open(waLink(msg), '_blank', 'noopener');
  };

  return (
    <form className="form" onSubmit={submit} data-reveal>
      <label>Full name<input name="name" type="text" autoComplete="name" placeholder="Chinedu Eze" required /></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="080..." required /></label>
      <label>Town / area<input name="town" type="text" placeholder="e.g. Ogbede" required /></label>
      <label>Bags per week<input name="bags" type="number" min={1} inputMode="numeric" placeholder="50" /></label>
      <button type="submit" className="btn btn-navy"><WaIcon /> Apply to distribute</button>
    </form>
  );
}
