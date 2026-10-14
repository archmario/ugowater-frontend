import { Star, Quote } from 'lucide-react';
import Marquee from '@/components/Marquee';
import { reviews } from '@/constants/reviews';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-balance">
            Real stories from real customers. From Enugu to Onitsha, we are proud to serve
            communities across the South East and beyond.
          </p>
        </div>

        <Marquee duration={60}>
          {reviews.map((review) => (
            <div
              key={review.name}
              className="w-80 shrink-0 bg-gradient-to-br from-sky-50 to-background dark:from-card dark:to-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-6">{review.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
