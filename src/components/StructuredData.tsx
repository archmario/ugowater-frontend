import { siteConfig } from '@/config/site';

// Tells Google this is a local business (name, contact, address, area served),
// which helps it show in local search and Maps results.
export default function StructuredData() {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    image: `${siteConfig.url}/og-image.jpg`,
    legalName: siteConfig.cac.name,
    telephone: siteConfig.phone,
    ...(siteConfig.email && { email: siteConfig.email }),
    priceRange: '₦',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: `${siteConfig.address.city}, ${siteConfig.address.lga}`,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '20:00',
    },
    areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'City', name })),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
