import { orderMessage, waLink } from '@/utils/whatsapp';
import { WaIcon } from './Icons';

// Floating WhatsApp button, bottom right on every page
export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={waLink(orderMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Omionkpo on WhatsApp"
    >
      <WaIcon size={28} />
    </a>
  );
}
