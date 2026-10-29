import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import StructuredData from '@/components/StructuredData';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/utils/metadata';

// Self-hosted fonts: Inter for text, Poppins for headings (matches the logo)
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-body',
  display: 'swap',
});

const poppins = localFont({
  src: [
    { path: './fonts/poppins-latin-600-normal.woff2', weight: '600' },
    { path: './fonts/poppins-latin-700-normal.woff2', weight: '700' },
    { path: './fonts/poppins-latin-800-normal.woff2', weight: '800' },
    { path: './fonts/poppins-latin-900-normal.woff2', weight: '900' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Clean. Cold. Delivered.`,
    template: `%s | ${siteConfig.name}`,
  },
  themeColor: '#1446D9',
  ...pageMetadata({ description: siteConfig.description, path: '/' }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
