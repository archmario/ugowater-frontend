import { BadgeCheck, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';

const { nafdac, cac } = siteConfig;

// NAFDAC registration and CAC registration, each with a link to the official
// public check so customers can confirm them themselves.
export default function VerifiedBadges({
  tone = 'light',
  className,
}: {
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const dark = tone === 'dark';
  const card = cn(
    'flex items-start gap-3 rounded-xl border p-4',
    dark ? 'border-white/10 bg-white/5' : 'border-border bg-card'
  );
  const title = dark ? 'text-white' : 'text-foreground';
  const muted = dark ? 'text-white/60' : 'text-muted-foreground';
  const link = cn(
    'inline-flex items-center gap-1 text-xs font-semibold underline-offset-4 hover:underline',
    dark ? 'text-sky-300' : 'text-primary'
  );

  return (
    <div className={cn('grid gap-3 sm:grid-cols-2', className)}>
      <div className={card}>
        <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
        <div>
          <p className={cn('text-sm font-bold', title)}>NAFDAC registered</p>
          <p className={cn('text-xs', muted)}>
            {nafdac.product} · Reg. No. <span className="font-semibold">{nafdac.number}</span>
          </p>
          <a href={nafdac.verifyUrl} target="_blank" rel="noopener noreferrer" className={link}>
            Verify on NAFDAC <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
          <p className={cn('mt-1 text-[11px] leading-snug', muted)}>
            NAFDAC&apos;s site can be slow. Enter {nafdac.number} in its &quot;Verify Products&quot; box.
          </p>
        </div>
      </div>

      <div className={card}>
        <BadgeCheck className="h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
        <div>
          <p className={cn('text-sm font-bold', title)}>CAC registered</p>
          <p className={cn('text-xs', muted)}>
            A brand of {cac.name} · No. <span className="font-semibold">{cac.number}</span>
          </p>
          <a href={cac.verifyUrl} target="_blank" rel="noopener noreferrer" className={link}>
            Verify on CAC <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
          <p className={cn('mt-1 text-[11px] leading-snug', muted)}>
            Search &quot;{cac.name}&quot; on CAC&apos;s public search.
          </p>
        </div>
      </div>
    </div>
  );
}
