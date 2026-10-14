// Business details used across the site, metadata, sitemap and structured data.
// The only file that reads env vars. Change the domain via NEXT_PUBLIC_SITE_URL.
//
// PLACEHOLDERS: NAFDAC number, hours and socials are sample values, not the
// client's real details. The address is the factory (confirmed). Replace the
// rest before launch.

export const siteConfig = {
  name: 'Omionkpo Table Water',
  // Short form for the logo, with "TABLE WATER" underneath
  shortName: 'Omionkpo',
  slogan: 'My People First',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omionkpo.archmario.com').replace(/\/$/, ''),
  tagline: 'Pure Table Water in Enugu',
  description:
    'Omionkpo Table Water: pure, fresh, refreshing table water and sachet water from Aku, Igbo-Etiti, delivered to homes and businesses across Enugu State. Pay on delivery.',
  phone: '+234 902 924 9693',
  // Digits only, international format, for wa.me links
  whatsapp: '2349029249693',
  // Empty until the client sets one up; the site hides email when empty
  email: '',
  address: {
    street: 'Plot 1, Udeme Road, Oda Aku',
    city: 'Aku',
    lga: 'Igbo-Etiti',
    region: 'Enugu State',
    country: 'NG',
  },
  hours: 'Mon - Sat: 7:00 AM - 8:00 PM',
  nafdacNumber: '03-1234',
  // Leave a URL empty to hide that icon
  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  areaServed: ['Aku', 'Igbo-Etiti', 'Nsukka', 'Enugu', 'Udi', 'Awgu'],
};
