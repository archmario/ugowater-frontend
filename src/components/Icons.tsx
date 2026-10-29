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

export const WaIcon = ({ size = 18, color = "#fff" }: P) => (
  <svg {...base(size, color)}><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5Z" /></svg>
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
