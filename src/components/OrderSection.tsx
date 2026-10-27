'use client';

import { Droplets, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import VerifiedBadges from '@/components/VerifiedBadges';
import { products } from '@/constants/products';
import { useOrderForm } from '@/hooks/order/useOrderForm';
import { formatNaira } from '@/utils/format';

export default function OrderSection() {
  const { values, setField, submitted, handleSubmit, reset } = useOrderForm();

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.lga}, ${siteConfig.address.region}, Nigeria`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  const contactInfo = [
    {
      icon: Phone,
      label: 'Call or WhatsApp',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    },
    ...(siteConfig.email ? [{
      icon: Mail,
      label: 'Email Us',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    }] : []),
    {
      icon: MapPin,
      label: 'Visit Our Factory',
      value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.lga}`,
      href: mapLink,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: siteConfig.hours,
    },
  ];

  return (
    <section
      id="order"
      className="scroll-mt-16 py-20 md:py-28 bg-gradient-to-b from-background to-sky-50 dark:to-background"
    >
      <div className="container mx-auto px-4">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Order Pure Water in Enugu
          </h2>
          <p className="text-muted-foreground text-balance">
            Fill out the form below to send your order to us on WhatsApp. Our team will confirm your
            order and delivery details. Fast, easy, and no payment until delivery.
          </p>
        </div>

        <div data-reveal className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{siteConfig.name}</h3>
                  <p className="text-sm text-muted-foreground">{siteConfig.slogan}</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          {...(info.href.startsWith('http') && {
                            target: '_blank',
                            rel: 'noopener noreferrer',
                          })}
                          className="text-sm font-semibold text-foreground hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h4 className="font-bold text-lg mb-2">Pay on Delivery</h4>
              <p className="text-sm text-primary-foreground/80">
                No upfront payment needed. Order now and pay when your water arrives at your door.
                Cash, transfer, or POS all accepted.
              </p>
            </div>

            <VerifiedBadges className="sm:grid-cols-1" />
          </div>

          {/* Order form */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Almost done!</h3>
                <p className="text-sm text-muted-foreground max-w-sm mb-6">
                  We opened WhatsApp with your order filled in. Tap send there and our team will
                  confirm your order and arrange delivery.
                </p>
                <Button variant="outline" onClick={reset}>
                  Place another order
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={values.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={values.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    type="tel"
                    placeholder="e.g. 0803 123 4567"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-sm font-medium">
                      City
                    </Label>
                    <Input
                      id="city"
                      value={values.city}
                      onChange={(e) => setField('city', e.target.value)}
                      placeholder="e.g. Enugu"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="product" className="text-sm font-medium">
                      Product
                    </Label>
                    <select
                      id="product"
                      className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={values.productId}
                      onChange={(e) => setField('productId', e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select product
                      </option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - {formatNaira(product.price)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-sm font-medium">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    value={values.quantity}
                    onChange={(e) => setField('quantity', e.target.value)}
                    type="number"
                    min={1}
                    placeholder="How many?"
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-sm font-medium">
                    Delivery Address
                  </Label>
                  <Textarea
                    id="address"
                    value={values.address}
                    onChange={(e) => setField('address', e.target.value)}
                    placeholder="Enter your full delivery address"
                    required
                    className="mt-1.5"
                    rows={2}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Order on WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div
          data-reveal
          className="max-w-5xl mx-auto mt-8 rounded-2xl overflow-hidden border border-border shadow-sm"
        >
          <iframe
            title={`Map showing ${siteConfig.name} location`}
            src={mapEmbedUrl}
            className="w-full h-72 md:h-96 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
