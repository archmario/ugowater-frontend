# UgoWater frontend

Marketing site for UgoWater, a pure water business in Enugu. Next.js (App Router,
static export), TypeScript, Tailwind CSS, shadcn/ui and lucide-react.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Structure

```
src/
├── app/            # pages: layout + metadata only; sitemap.ts, robots.ts, icon.svg
├── components/     # presentation (sections, header, footer); ui/ is shadcn
├── hooks/order/    # order form logic (sends the order to WhatsApp)
├── providers/      # theme provider (light/dark)
├── config/site.ts  # business details + site URL (the only place env vars are read)
├── constants/      # products, team, reviews, process steps, gallery, photo credits
├── types/
└── utils/          # cn, naira formatting, page metadata helper
public/
├── images/         # all site photos as .webp
├── og-image.jpg    # share preview for WhatsApp/Facebook/X
└── .htaccess       # HTTPS redirect, 404 page, caching (Apache)
```

To change what the site says, edit `src/config/site.ts` and `src/constants/`.

## Placeholders to replace before launch

- `src/config/site.ts`: email, address, NAFDAC number, socials
  (sample values, not the client's real details)
- `src/constants/team.ts`: CEO and staff photos (empty on purpose, the page
  shows "photo coming soon"), staff names, CEO bio
- `src/constants/reviews.ts`: sample reviews, not real customers
- `src/constants/process.ts`: stats (10M+ sachets etc.) are invented
- `public/images/`: factory photos are from Wikimedia Commons. Credits are listed
  in `src/constants/credits.ts` and shown in the footer; remove each entry as
  the client's own photos replace them
