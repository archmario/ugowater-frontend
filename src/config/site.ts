// Business details used across the site, metadata, sitemap and structured data.
// The only file that reads env vars. Change the domain via NEXT_PUBLIC_SITE_URL.
//
// Verified with the client: address (the factory), phone/WhatsApp and NAFDAC
// registration (checked on NAFDAC's portal). Still placeholders: opening hours
// and socials.

export const siteConfig = {
  name: 'Omionkpo Table Water',
  // Short form for the logo, with "TABLE WATER" underneath
  shortName: 'Omionkpo',
  slogan: 'My People First',
  poweredBy: 'Umueze Pure Water Services',
  // Shown on the home page trust strip
  shopsServed: 120,
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omionkpo.archmario.com').replace(/\/$/, ''),
  tagline: 'Pure Table Water in Enugu',
  description:
    'Omionkpo Table Water: pure, fresh, refreshing table water and sachet water from Aku, Igbo-Etiti, delivered to homes and businesses across Enugu State. Pay on delivery.',
  phone: '+234 901 234 8017',
  // Digits only, international format, for wa.me links
  whatsapp: '2349012348017',
  // Empty until the client sets one up; the site hides email when empty
  email: '',
  address: {
    street: 'Plot 1, Udeme Road, Oda Aku',
    city: 'Aku',
    lga: 'Igbo-Etiti',
    region: 'Enugu State',
    postalCode: '411108',
    country: 'NG',
  },
  hours: 'Mon - Sat: 7:00 AM - 8:00 PM',
  // As shown on NAFDAC's verification portal (Product: OMIONKPO TABLE WATER,
  // manufacturer UMUEZE PURE WATER SERVICES, approved 2026-09-29, expires
  // 2028-09-28: renew before then)
  nafdac: {
    number: 'A1-112190L',
    product: 'Omionkpo Table Water',
    expires: '2028-09-28',
    verifyUrl: 'https://registration.nafdac.gov.ng/#verify',
  },
  // Leave a URL empty to hide that icon
  socials: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  areaServed: ['Aku', 'Igbo-Etiti', 'Nsukka', 'Enugu', 'Udi', 'Awgu'],
};
