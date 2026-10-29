import type { Metadata } from 'next';
import { CtaBand, PageHero, Photo } from '@/components/Decor';
import { siteConfig } from '@/config/site';
import { processSteps } from '@/constants/process';
import { pageMetadata } from '@/utils/metadata';
import { waLink } from '@/utils/whatsapp';

export const metadata: Metadata = pageMetadata({
  title: 'Our Process',
  description: `How Omionkpo Table Water is made, from our borehole in Aku to machine-sealed packs. NAFDAC Reg. No. ${siteConfig.nafdac.number}.`,
  path: '/process/',
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PROCESS"
        title={<>From our borehole <em>to your hand.</em></>}
        text="Clean water isn't luck. Here is every step your Omionkpo goes through before it reaches you."
        bg="/images/omionkpo-factory.webp"
        look="bright moving factory"
      />

      <section className="section">
        <div className="wrap row" style={{ gap: 56, alignItems: 'flex-start' }}>
          <div className="col-sm media sticky-media" data-reveal="left">
            <Photo
              src="/images/omionkpo-bottles.webp"
              alt="Bottles of Omionkpo Table Water"
              sizes="(max-width: 760px) 90vw, 480px"
              height={520}
            />
          </div>

          <div className="col timeline">
            {processSteps.map((s, i) => (
              <div key={s.title} className="step" data-reveal="right" style={{ ['--d' as string]: `${i * 120}ms` }}>
                <span className="num">{i + 1}</span>
                <div><b>{s.title}</b><span>{s.description}</span></div>
              </div>
            ))}
            <div className="step done" data-reveal style={{ ['--d' as string]: '480ms' }}>
              <span className="num">✓</span>
              <div>
                <b>Checked and registered</b>
                <span>Registered with NAFDAC, Reg. No. {siteConfig.nafdac.number}, printed on every pack.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see it for yourself?"
        text="Visit our factory in Aku Village, Igbo-Etiti. Message us to arrange a visit."
        href={waLink("Hi Omionkpo, I'd like to visit the factory.")}
        label="Book a visit"
      />
    </>
  );
}
