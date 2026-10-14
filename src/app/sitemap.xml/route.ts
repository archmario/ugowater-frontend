import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';

// A plain route instead of app/sitemap.ts: Next 13.5 can't serve the
// generated sitemap in dev mode when output is 'export'. Built once at build time.
export const dynamic = 'force-static';

export function GET() {
  const lastModified = new Date().toISOString();

  const urls = navItems
    .map((item) => {
      const loc = `${siteConfig.url}${item.href === '/' ? '/' : `${item.href}/`}`;
      return `<url>\n<loc>${loc}</loc>\n<lastmod>${lastModified}</lastmod>\n</url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
