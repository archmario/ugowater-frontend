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

## Deploy

The site is static: `npm run build` writes plain HTML/CSS/JS to `out/`. No Node
server is needed.

`.github/workflows/deploy.yml` builds and copies `out/` to the server over SSH
(rsync) on every push to `main`. It needs these repository secrets (Settings →
Secrets and variables → Actions):

| Secret           | Value                                                          |
| ---------------- | -------------------------------------------------------------- |
| `DEPLOY_SSH_KEY` | Private key for a dedicated CI deploy key                      |
| `DEPLOY_HOST`    | Server hostname/IP                                             |
| `DEPLOY_PORT`    | SSH port                                                       |
| `DEPLOY_USER`    | SSH username                                                   |
| `DEPLOY_PATH`    | Absolute path to the **subdomain's own** document root         |

`DEPLOY_PATH` must be the ugowater subdomain's folder, never the main archmario
site's: the sync deletes anything in that folder that isn't in `out/`.

The live address defaults to `https://ugowater.archmario.com`. When the client
gets their own domain, set a repository variable `SITE_URL` to it (Settings →
Secrets and variables → Actions → Variables), push, and 301-redirect the old
subdomain to the new domain.

Manual alternative (FTP): run `npm run build` with `NEXT_PUBLIC_SITE_URL` set,
then upload the contents of `out/` (including the hidden `.htaccess`) to the
subdomain's document root.

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
