'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SmartImage from '@/components/SmartImage';
import { products } from '@/constants/products';
import { cn } from '@/utils/cn';
import { formatNaira } from '@/utils/format';

export default function Products() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-background dark:from-background dark:to-background relative overflow-hidden pt-32">
      {/* Omionkpo bottles from the launch flyer, either side of the heading */}
      {['-left-4 -rotate-6', '-right-4 rotate-6'].map((position) => (
        <img
          key={position}
          src="/images/omionkpo-bottle.webp"
          alt=""
          aria-hidden="true"
          className={`hidden lg:block pointer-events-none select-none absolute top-28 h-[460px] w-auto opacity-25 dark:opacity-15 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] ${position}`}
        />
      ))}
      {/* Phones and tablets: one faint bottle tucked behind the right edge, so it
          adds a brand touch without competing with the heading */}
      <img
        src="/images/omionkpo-bottle.webp"
        alt=""
        aria-hidden="true"
        className="lg:hidden pointer-events-none select-none absolute -right-12 top-20 h-[400px] w-auto rotate-12 opacity-[0.18] dark:opacity-[0.12] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      />

      <div className="container mx-auto px-4 relative">
        <div className="fade-rise text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Our Products
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Sachet Water, Bottled Water & Dispenser Refills
          </h1>
          <p className="text-muted-foreground text-balance">
            From the everyday sachet to big dispenser gallons, we have the right water for you. All
            products are factory-sealed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => {
            const qty = quantities[product.id] || 0;
            return (
              <div
                key={product.id}
                className="fade-rise"
                style={{ '--delay': `${150 + idx * 60}ms` } as CSSProperties}
              >
                <div
                  className={cn(
                    'h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-[transform,box-shadow] duration-300 ease-out-strong hover:-translate-y-1 flex flex-col',
                    product.popular && 'border-primary ring-2 ring-primary/20',
                  )}
                >
                  {product.popular && (
                    <div className="bg-primary text-primary-foreground text-center text-xs font-semibold py-2">
                      Most Popular
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {/* Product image */}
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-5 relative group/img">
                      <SmartImage
                        src={product.image}
                        alt={`${product.name}, ${product.size}`}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                        priority={idx === 0}
                        wrapperClassName="absolute inset-0"
                        className="transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{product.size}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <ul className="space-y-1.5 mb-5">
                        {product.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <Check className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">
                          {formatNaira(product.price)}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatNaira(product.oldPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity selector */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQty(product.id, -1)}
                          className="px-3 py-2 hover:bg-muted transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold min-w-[2.5rem] text-center text-sm">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, 1)}
                          className="px-3 py-2 hover:bg-muted transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => qty > 0 && updateQty(product.id, 0)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        {qty > 0 ? 'Added' : 'Add'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {totalItems > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4 shadow-lg">
              <span className="text-sm font-medium text-foreground">
                {totalItems} item{totalItems > 1 ? 's' : ''} selected
              </span>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <Link href="/#order">Proceed to Order</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
