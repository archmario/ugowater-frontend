// Small line icons used across the site, all 24 x 24 strokes.
type P = { size?: number; color?: string };

const base = (size: number, color: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

// The WhatsApp logo (filled)
export const WaIcon = ({ size = 18, color = '#fff' }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);
export const ShieldIcon = ({ size = 28, color = "#1446D9" }: P) => (
  <svg {...base(size, color)}><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
);
export const PinIcon = ({ size = 28, color = "#1446D9" }: P) => (
  <svg {...base(size, color)}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>
);
export const ArrowIcon = ({ size = 18, color = "currentColor" }: P) => (
  <svg {...base(size, color)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const PlayIcon = ({ size = 18, color = "#fff" }: P) => (
  <svg {...base(size, color)} fill={color}><polygon points="7 4 20 12 7 20 7 4" /></svg>
);
export const MenuIcon = ({ size = 22, color = "#0B1F55" }: P) => (
  <svg {...base(size, color)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = ({ size = 22, color = "#0B1F55" }: P) => (
  <svg {...base(size, color)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const BagIcon = ({ size = 26, color = "#1446D9" }: P) => (
  <svg {...base(size, color)}><path d="M6 7h12l-1 13H7L6 7Z" /><path d="M9 7a3 3 0 0 1 6 0" /></svg>
);
export const GearIcon = ({ size = 26, color = "#1446D9" }: P) => (
  <svg {...base(size, color)}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg>
);
export const HandshakeIcon = ({ size = 26, color = "#1446D9" }: P) => (
  <svg {...base(size, color)}><path d="m11 17 2 2a1.4 1.4 0 0 0 2-2" /><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2L15 11l-3 3-1.5-1.5L14 9h3l4 4" /><path d="M3 13l4-4h4" /><path d="m7 15 2 2" /></svg>
);

// The Omionkpo droplet (same artwork as the site logo)
export const DropLogo = ({ size = 34 }: { size?: number }) => (
  <img src="/brand/omionkpo-icon.svg" alt="" aria-hidden="true" width={size} height={size} />
);
