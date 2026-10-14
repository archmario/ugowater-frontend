import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

// Builds a page's title, description, canonical URL and share preview.
// Next replaces (not merges) openGraph per page, so each page gets the full set.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_NG',
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: path,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/og-image.jpg'],
    },
  };
}
