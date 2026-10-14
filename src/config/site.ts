// Business details used across the site, metadata, sitemap and structured data.
// The only file that reads env vars. Change the domain via NEXT_PUBLIC_SITE_URL.
//
// PLACEHOLDERS: email, address, NAFDAC number and socials are
// sample values, not the client's real details. Replace before launch.

export const siteConfig = {
  name: 'UgoWater',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ugowater.archmario.com').replace(/\/$/, ''),
  tagline: 'Pure Water Sachet & Bottle Delivery in Enugu',
  description:
    'UgoWater delivers clean, NAFDAC-certified pure water sachets and bottled water to homes and businesses across Enugu and the South East. Pay on delivery.',
  phone: '+234 902 924 9693',
  // Digits only, international format, for wa.me links
  whatsapp: '2349029249693',
  email: 'orders@ugowater.com',
  address: {
    street: '22 Ogui Avenue, Independence Layout',
    city: 'Enugu',
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
  areaServed: ['Enugu', 'Nsukka', 'Awka', 'Onitsha', 'Owerri', 'Aba', 'Abakaliki'],
};
