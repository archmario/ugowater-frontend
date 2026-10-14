import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: `${siteConfig.url}${item.href === '/' ? '/' : `${item.href}/`}`,
    lastModified: new Date(),
  }));
}
