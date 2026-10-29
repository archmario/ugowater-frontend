import { features } from '@/constants/features';

// "Why choose us": the six promises, in the same card style as the rest of the site
export default function Features() {
  return (
    <section className="section ice">
      <div className="wrap stack" style={{ gap: 40 }}>
        <div className="head" data-reveal>
          <span className="eyebrow">WHY CHOOSE US</span>
          <h2>Pure table water, made with care in Aku.</h2>
          <p className="lead">
            We are not just another water company. We are your neighbours, committed to bringing
            clean, safe drinking water to every home and business.
          </p>
        </div>
        <div className="grid-3 three-up">
          {features.map((f, i) => (
            <div key={f.title} className="tile static" data-reveal style={{ ['--d' as string]: `${(i % 3) * 100}ms` }}>
              <span className="icon-box"><f.icon size={26} color="#1446D9" strokeWidth={2} aria-hidden="true" /></span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
