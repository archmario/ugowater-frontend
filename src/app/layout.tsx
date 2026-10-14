import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import ScrollReveal from '@/components/ScrollReveal';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/utils/metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  ...pageMetadata({ description: siteConfig.description, path: '/' }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollReveal />
        </ThemeProvider>
      </body>
    </html>
  );
}
