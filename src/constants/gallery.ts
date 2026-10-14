import type { MosaicTile, Photo } from '@/types';

// Placeholder photos from Wikimedia Commons (see credits.ts) until the
// client sends photos of their own factory.
export const galleryPhotos: Photo[] = [
  {
    src: '/images/sachet-packing-machines.webp',
    alt: 'Automatic sachet water packing machines in a Nigerian water factory',
    label: 'Our Sachet Line',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/sachet-sealing-machine.webp',
    alt: 'Pure water sachet filling and sealing machine',
    label: 'Sealing Every Sachet',
  },
  {
    src: '/images/bags-of-pure-water.webp',
    alt: 'Bags of pure water sachets ready for sale',
    label: 'Fresh Bags Daily',
  },
  {
    src: '/images/stacked-sachet-bags.webp',
    alt: 'Stacked bags of sachet water waiting for delivery',
    label: 'Ready for Delivery',
  },
  {
    src: '/images/water-factory-building.webp',
    alt: 'Water factory building in Nigeria',
    label: 'Our Factory',
  },
];

export const mosaicTiles: MosaicTile[] = [
  {
    span: 'col-span-2 row-span-2',
    images: [
      { src: '/images/stacked-sachet-bags.webp', alt: 'Bags of sachet water stacked and ready for delivery' },
      { src: '/images/factory-bottling-line.webp', alt: 'Bottled water filling and capping line' },
      { src: '/images/sachet-packing-machines.webp', alt: 'Automatic sachet water packing machines' },
    ],
  },
  {
    images: [
      { src: '/images/water-glass.webp', alt: 'Clean water poured into a glass' },
      { src: '/images/sachet-in-hand.webp', alt: 'A sachet of pure water held in hand' },
    ],
  },
  {
    images: [
      { src: '/images/bottling-conveyor.webp', alt: 'Bottled water packs moving along a factory conveyor' },
      { src: '/images/sachet-sealing-machine.webp', alt: 'Pure water sachet sealing machine' },
    ],
  },
  {
    images: [
      { src: '/images/bags-of-pure-water.webp', alt: 'Bags of pure water sachets' },
      { src: '/images/product-bottle-50cl.webp', alt: 'A bottle of Omionkpo Table Water' },
    ],
  },
  {
    images: [
      { src: '/images/bottle-filler.webp', alt: 'Bottle filling machine in a water factory' },
      { src: '/images/filtration-tanks.webp', alt: 'Water storage tanks and filtration units' },
      { src: '/images/bottling-plant.webp', alt: 'Inside a water bottling plant' },
    ],
  },
];
