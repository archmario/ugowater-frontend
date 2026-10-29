import { siteConfig } from '@/config/site';

// A wa.me link to the business, optionally with a message already typed in
export function waLink(text?: string) {
  return `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export const orderMessage = "Hi Omionkpo, I'd like to place an order.";
