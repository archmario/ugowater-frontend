import Link from 'next/link';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { navItems } from '@/constants/navigation';
import { products } from '@/constants/products';
import { photoCredits } from '@/constants/credits';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: siteConfig.socials.facebook },
  { icon: Instagram, label: 'Instagram', href: siteConfig.socials.instagram },
  { icon: Twitter, label: 'Twitter', href: siteConfig.socials.twitter },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Droplets className="h-8 w-8 text-primary" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg">{siteConfig.shortName}</span>
                <span className="text-[10px] tracking-widest text-primary font-semibold">
                  TABLE WATER
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Pure, fresh, refreshing table water from Aku, Igbo-Etiti, delivered to homes and
              businesses across Enugu State. {siteConfig.slogan}.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={`${siteConfig.name} on ${label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h2 className="font-semibold text-white mb-4">Our Products</h2>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href="/products"
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold text-white mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="text-sm text-white/60 hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
              </li>
              {siteConfig.email && (
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-white/60 hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.lga},{' '}
                  {siteConfig.address.region}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <span className="text-sm text-white/50">NAFDAC No: {siteConfig.nafdacNumber}</span>
        </div>

        {photoCredits.length > 0 && (
          <details className="mt-6 text-xs text-white/40">
            <summary className="cursor-pointer hover:text-white/60">Photo credits</summary>
            <ul className="mt-2 space-y-1">
              {photoCredits.map((credit) => (
                <li key={credit.file}>
                  <a
                    href={credit.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {credit.file}
                  </a>{' '}
                  by {credit.author}, {credit.license}, via Wikimedia Commons
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </footer>
  );
}
