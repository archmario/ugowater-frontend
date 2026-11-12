import { srcSetFor } from '@/utils/image';

// Our people with Omionkpo. The family photo always comes first; each shows for
// 15 seconds, then fades into the next.
// pos / posPhone: which part of the photo stays in view on big screens and on phones.
const photos = [
  { src: '/images/omionkpo-family-outdoors.webp', pos: 'center 30%', posPhone: '48% 25%' },
  // The buka photo is very wide: centred, with a gentler zoom, so the friends at both ends stay in
  { src: '/images/omionkpo-buka-friends.webp', pos: 'center 30%', posPhone: '40% 30%', soft: true },
  { src: '/images/omionkpo-friends-table.webp', pos: '80% 35%', posPhone: '58% 35%' },
];
const SECONDS_EACH = 15;

export default function HeroPhotos() {
  const n = photos.length;
  return (
    <div className="hero2-photo ready" aria-hidden="true">
      {photos.map((p, i) => (
        <div
          key={p.src}
          className="hero2-slide"
          data-first={i === 0 ? '' : undefined}
          style={{
            animationDuration: `${SECONDS_EACH * n}s`,
            animationDelay: `${-((n - i) % n) * SECONDS_EACH}s`,
            ['--pos' as string]: p.pos,
            ['--pos-phone' as string]: p.posPhone,
          }}
        >
          <img
            className={p.soft ? 'drift-soft' : undefined}
            src={p.src}
            srcSet={srcSetFor(p.src)}
            sizes="100vw"
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}
