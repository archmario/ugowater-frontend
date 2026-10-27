import { ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/utils/cn';

const { nafdac } = siteConfig;

// NAFDAC registration, with a link to NAFDAC's public check so customers can
// confirm it themselves.
export default function VerifiedBadges({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-start gap-3 rounded-xl border border-border bg-card p-4', className)}>
      <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-500" aria-hidden="true" />
      <div>
        <p className="text-sm font-bold text-foreground">NAFDAC registered</p>
        <p className="text-xs text-muted-foreground">
          {nafdac.product} · Reg. No. <span className="font-semibold">{nafdac.number}</span>
        </p>
        <a
          href={nafdac.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary underline-offset-4 hover:underline"
        >
          Verify on NAFDAC <ExternalLink className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
