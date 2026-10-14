import type { CSSProperties } from 'react';
import { Quote, UserRound } from 'lucide-react';
import Marquee from '@/components/Marquee';
import SmartImage from '@/components/SmartImage';
import { ceo, team } from '@/constants/team';

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-background pt-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="fade-rise text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">
            Meet The Team
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Meet the UgoWater Team
          </h1>
          <p className="text-muted-foreground text-balance">
            We are a proudly Igbo-owned business, rooted in Enugu and serving the entire South East.
            Meet the leaders who make it happen.
          </p>
        </div>

        {/* CEO spotlight */}
        <div
          className="fade-rise max-w-5xl mx-auto mb-16"
          style={{ '--delay': '150ms' } as CSSProperties}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-sky-50 to-background dark:from-card dark:to-card rounded-3xl border border-border p-6 md:p-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              {ceo.image ? (
                <SmartImage
                  src={ceo.image}
                  alt={`${ceo.name}, ${ceo.title}`}
                  sizes="(min-width: 768px) 40vw, 90vw"
                  wrapperClassName="rounded-2xl shadow-xl h-[400px] md:h-[460px]"
                  className="object-top"
                />
              ) : (
                <div className="relative rounded-2xl w-full h-[400px] md:h-[460px] border-2 border-dashed border-primary/30 bg-card flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <UserRound className="h-20 w-20 text-primary/30" />
                  <p className="text-sm font-medium">CEO photo coming soon</p>
                </div>
              )}
            </div>
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                Founder & CEO
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{ceo.name}</h3>
              <p className="text-primary font-semibold text-sm mb-4">{ceo.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{ceo.bio}</p>
              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <Quote className="h-6 w-6 text-primary/30 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground italic">{ceo.quote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team members */}
        <div className="fade-rise" style={{ '--delay': '300ms' } as CSSProperties}>
          <Marquee duration={30}>
            {team.map((member) => (
              <div
                key={member.name}
                className="w-56 md:w-64 shrink-0 bg-card border border-border rounded-2xl overflow-hidden"
              >
                {member.image ? (
                  <SmartImage
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    sizes="256px"
                    wrapperClassName="h-48 md:h-64"
                  />
                ) : (
                  <div className="w-full h-48 md:h-64 border-b-2 border-dashed border-primary/20 bg-gradient-to-br from-sky-50 to-background dark:from-card dark:to-card flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <UserRound className="h-14 w-14 text-primary/30" />
                    <p className="text-xs font-medium">Photo coming soon</p>
                  </div>
                )}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground text-sm md:text-base">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
