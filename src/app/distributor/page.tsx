import type { Metadata } from 'next';
import { PageHero, Photo } from '@/components/Decor';
import DistributorForm from '@/components/DistributorForm';
import { siteConfig } from '@/config/site';
import { pageMetadata } from '@/utils/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Become a Distributor',
  description: 'Stock Omionkpo Table Water in your shop or run your own delivery round. Apply in minutes.',
  path: '/distributor/',
});

const perks = [
  { big: 'Factory price', small: 'Buy straight from our factory in Aku' },
  { big: 'We deliver', small: 'Fresh stock brought to your shop' },
  { big: 'Brand support', small: 'Branded materials to help you sell' },
];

const steps = [
  { t: 'Apply', b: 'Fill the form and send it. Your details go straight to our team.' },
  { t: 'We call you', b: 'We confirm your area, pricing and first order.' },
  { t: 'Start selling', b: 'Your first supply arrives and you start earning.' },
];

export default function DistributorPage() {
  return (
    <>
      <PageHero
        eyebrow="BECOME A DISTRIBUTOR"
        title={<>Wear the blue. <em>Earn on every bag.</em></>}
        text={`Join ${siteConfig.shopsServed}+ shops already selling Omionkpo. We supply, you sell, your people drink clean water.`}
        bg="/images/omionkpo-delivery-truck.webp"
        look="sharp"
      />

      <section className="section">
        <div className="wrap row" style={{ gap: 56, alignItems: 'stretch' }}>
          <div className="col stack">
            <div className="grid-3">
              {perks.map((p, i) => (
                <div key={p.small} className="perk" data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
                  <b>{p.big}</b><span>{p.small}</span>
                </div>
              ))}
            </div>

            <div className="stack" style={{ gap: 12 }}>
              {steps.map((s, i) => (
                <div key={s.t} className="step" data-reveal="left" style={{ ['--d' as string]: `${i * 120}ms` }}>
                  <span className="num">{i + 1}</span>
                  <div><b>{s.t}</b><span>{s.b}</span></div>
                </div>
              ))}
            </div>

            {/* on phones the photo moves behind the form */}
            <div className="distributor-form">
              <DistributorForm />
            </div>
          </div>

          <div className="col-sm photo" data-reveal="right">
            <Photo
              src="/images/omionkpo-uniform.webp"
              alt="A child in an Omionkpo Table Water polo shirt"
              sizes="(max-width: 760px) 90vw, 480px"
              className="photo-fill"
            />
            <span className="tag">Team Omionkpo</span>
          </div>
        </div>
      </section>
    </>
  );
}
