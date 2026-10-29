import Link from 'next/link';
import { srcSetFor } from '@/utils/image';
import { DropLogo } from './Icons';

/** Hero photo: the whole picture on the right, moving slowly, over a blurred copy of itself. */
export function BgPhoto({ src, alt = '', priority = false }: { src: string; alt?: string; priority?: boolean }) {
  return (
    <>
      <div className="bg-photo" aria-hidden={alt ? undefined : true}>
        {/* blurred copy that fills the space; the small file is enough once blurred */}
        <img className="bg-fill" src={src.replace(/\.webp$/, '-640.webp')} alt="" aria-hidden="true" decoding="async" />
        <img
          className="bg-main"
          src={src}
          srcSet={srcSetFor(src)}
          sizes="(max-width: 760px) 100vw, 70vw"
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      <div className="bg-wash" aria-hidden="true" />
    </>
  );
}

/** A rounded photo with srcset, for the image columns next to text. */
export function Photo({
  src,
  alt,
  sizes,
  height,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  height?: number;
  className?: string;
}) {
  return (
    <img
      src={src}
      srcSet={srcSetFor(src)}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ width: '100%', height: height ?? 'auto', objectFit: 'cover' }}
    />
  );
}

export function CtaBand({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  const external = href.startsWith('http');
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta" data-reveal="zoom">
          <span className="drop"><DropLogo size={240} /></span>
          <div style={{ position: 'relative' }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          {external ? (
            <a className="btn btn-white" href={href} target="_blank" rel="noopener noreferrer" style={{ position: 'relative' }}>{label}</a>
          ) : (
            <Link className="btn btn-white" href={href} style={{ position: 'relative' }}>{label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow, title, text, bg, look,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  bg?: string;
  // any of: bright, sharp, moving, factory
  look?: string;
}) {
  return (
    <section className={`page-hero${bg ? ' dark' : ''}${look ? ` ${look}` : ''}`}>
      {bg && <BgPhoto src={bg} priority />}
      <div className="wrap">
        <div className="head">
          <span className="eyebrow enter">{eyebrow}</span>
          <h1 className="enter" style={{ ['--d' as string]: '100ms', fontSize: 'clamp(36px, 5vw, 60px)' }}>{title}</h1>
          <p className="lead enter" style={{ ['--d' as string]: '220ms' }}>{text}</p>
        </div>
      </div>
    </section>
  );
}
