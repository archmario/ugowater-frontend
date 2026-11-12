import type { Metadata } from 'next';
import ProcessJourney from '@/components/ProcessJourney';
import WhatToExpect from '@/components/WhatToExpect';
import { siteConfig } from '@/config/site';
import { srcSetFor } from '@/utils/image';
import { pageMetadata } from '@/utils/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Our Process',
  description: `How Omionkpo Table Water is made, sourced from natural springs and sealed by machine in Aku. NAFDAC Reg. No. ${siteConfig.nafdac.number}.`,
  path: '/process/',
});

export default function ProcessPage() {
  return (
    <>
      {/* The spring, full width and left bright. Words sit low on the left, three facts along the bottom */}
      <section className="spring-hero">
        <img
          className="spring-photo"
          src="/images/omionkpo-natural-spring.webp"
          srcSet={srcSetFor('/images/omionkpo-natural-spring.webp')}
          sizes="100vw"
          alt="Clear spring water falling over mossy rocks into a still pool"
          loading="eager"
          decoding="async"
        />
        <div className="spring-shade" aria-hidden="true" />
        <div className="wrap spring-inner">
          <div className="spring-copy">
            <span className="spring-eyebrow enter">
              <i aria-hidden="true" /> Our process
            </span>
            <h1 className="enter" style={{ ['--d' as string]: '120ms' }}>
              From the spring
              <br />
              <em>to your hand.</em>
            </h1>
            <p className="enter" style={{ ['--d' as string]: '240ms' }}>
              Clean water isn&apos;t luck. Ours starts at a natural spring, and here is every step it goes through
              before it reaches you and your people.
            </p>
          </div>
          <dl className="spring-facts enter" style={{ ['--d' as string]: '380ms' }}>
            <div>
              <dt>Source</dt>
              <dd>Natural spring</dd>
            </div>
            <div>
              <dt>Filtration</dt>
              <dd>Multi-stage</dd>
            </div>
            <div>
              <dt>Packed</dt>
              <dd>Sealed by machine</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* MY PEOPLE FIRST: what every customer can expect */}
      <WhatToExpect />

      {/* THE JOURNEY: five steps, the photo changes as you scroll */}
      <ProcessJourney />

      {/* THE MACHINE: how the shrink-wrap tunnel seals each pack */}
      <section className="section machine">
        <div className="wrap stack" style={{ gap: 48 }}>
          <div className="machine-top">
            <div className="stack" data-reveal="left">
              <span className="eyebrow">THE MACHINE BEHIND STEP 3</span>
              <h2>
                Wrapped by heat.
                <br />
                <em>Sealed tight.</em>
              </h2>
              <p className="lead">
                Every pack rides our heat shrink-wrap tunnel. Warm air shrinks the film tight around every bottle and
                can, and it comes out sealed and ready to travel.
              </p>
            </div>
            <ol className="seal-stages" data-reveal="right">
              <li>
                <span>01</span>
                <div>
                  <b>Film goes on</b>
                  <p>Each pack is wrapped in clear film and set on the conveyor.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <b>
                    Through the <em>heat</em>
                  </b>
                  <p>Warm air in the tunnel shrinks the film tight around every bottle and can.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <b>
                    Out <em>sealed</em>
                  </b>
                  <p>It leaves firm, sealed and ready for the van.</p>
                </div>
              </li>
            </ol>
          </div>
          <ul className="machine-facts" data-reveal>
            <li>
              <span>01</span>
              <b>Sealed tight</b>
              <p>The film hugs the pack, so nothing gets in on the way to you.</p>
            </li>
            <li>
              <span>02</span>
              <b>Tampering shows</b>
              <p>A torn or loose wrap is obvious at a glance. Ours leave the factory intact.</p>
            </li>
            <li>
              <span>03</span>
              <b>Travels well</b>
              <p>Firm packs stay neat on the van, in the shop and on the shelf.</p>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
