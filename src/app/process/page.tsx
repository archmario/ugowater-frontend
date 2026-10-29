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
          <div className="mirror-col sticky-media" data-reveal="left">
            <div className="mirror-frame">
              <Photo
                src="/images/omionkpo-pouring.webp"
                alt="Omionkpo Table Water poured into a glass, with 150cl and 60cl bottles"
                sizes="(max-width: 760px) 90vw, 640px"
              />
            </div>
            {/* the picture reflected underneath, fading out */}
            <div className="mirror-reflection" aria-hidden="true">
              <img src="/images/omionkpo-pouring-640.webp" alt="" />
            </div>
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

      {/* THE MACHINE */}
      <section className="section ice">
        <div className="wrap row" style={{ gap: 56 }}>
          <div className="col-sm machine-photo" data-reveal="left">
            <Photo
              src="/images/omionkpo-shrink-wrap-machine.webp"
              alt="Omionkpo's heat shrink-wrap tunnel with its mesh conveyor"
              sizes="(max-width: 760px) 80vw, 360px"
            />
            <span className="tag">Our shrink-wrap tunnel</span>
          </div>
          <div className="col stack" data-reveal="right">
            <span className="eyebrow">THE MACHINE BEHIND STEP 3</span>
            <h2>Wrapped by heat, sealed tight.</h2>
            <p className="lead">
              Every pack of Omionkpo rides through our heat shrink-wrap tunnel. The pack goes in on the
              mesh conveyor, warm air shrinks the film tight around every bottle and can, and it comes out
              sealed and ready to travel.
            </p>
            <ul className="machine-points">
              <li><b>Sealed tight</b><span>The film hugs the pack, so nothing gets in on the way to you.</span></li>
              <li><b>Easy to spot tampering</b><span>A torn or loose wrap shows at a glance. Ours leave the factory intact.</span></li>
              <li><b>Stacks and travels well</b><span>Firm packs stay neat on the van, in the shop and on the shelf.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <div style={{ height: 96 }} />
      <CtaBand
        title="Want to see it for yourself?"
        text="Visit our factory in Aku Village, Igbo-Etiti. Message us to arrange a visit."
        href={waLink("Hi Omionkpo, I'd like to visit the factory.")}
        label="Book a visit"
      />
    </>
  );
}
