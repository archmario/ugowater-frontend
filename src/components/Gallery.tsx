import type { CSSProperties } from 'react';
import { Camera } from 'lucide-react';
import SmartImage from '@/components/SmartImage';
import { galleryPhotos } from '@/constants/gallery';

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-sky-50 dark:to-background">
      <div className="container mx-auto px-4">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="h-4 w-4" />
            Our Business in Photos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Inside Our Pure Water Factory
          </h2>
          <p className="text-muted-foreground text-balance">
            Take a look at our factory, our fleet, and the care that goes into every bottle and
            sachet we produce.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              data-reveal
              style={{ '--delay': `${idx * 60}ms` } as CSSProperties}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${photo.span}`}
            >
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                sizes={
                  photo.span ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'
                }
                wrapperClassName="absolute inset-0"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm md:text-base">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
