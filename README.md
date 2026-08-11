# Kepsha.VIP

Premium website for **Kepsha.VIP** — professional moving, cargo transport and property clearance across Czechia and Europe.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3.4** · **Framer Motion 11** · **Lucide React**
- Fully static — deploy to Vercel, Netlify, or any static host.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Design system

- **Concept:** movement / routes / precision — animated route lines & glowing waypoints.
- **Palette:** deep near-black base (`ink`), warm off-white text (`bone`), signal-lime accent (`signal` `#CDFF3E`).
- **Type:** Space Grotesk (display) + Inter (body).
- Tokens live in [`tailwind.config.ts`](tailwind.config.ts); global effects (grid, grain, focus) in [`app/globals.css`](app/globals.css).

## Languages

Four full locales — **Čeština (default)**, English, Українська, Русский.

- All copy lives in [`lib/i18n.ts`](lib/i18n.ts) (one typed `Dictionary` per locale — edit text there).
- Locale state, `localStorage` persistence and `<html lang>` sync in [`lib/i18n-context.tsx`](lib/i18n-context.tsx).
- Selected language is saved under the `kepsha-locale` key.

## Contact configuration (edit in one place)

All phone numbers and messenger deep links are in [`lib/config.ts`](lib/config.ts):

- Phone: `+420 775 929 681` (tel / WhatsApp / Viber / Telegram).
- **Telegram / Viber usernames are unknown**, so links use the phone number (`t.me/+…`, `viber://chat?number=…`). If you get a real Telegram `@username`, swap `CONTACT.telegram` for `https://t.me/username`.
- Email defaults to `info@kepsha.vip` — change if needed.

## Form submissions

The request form ([`components/request-form.tsx`](components/request-form.tsx)) posts to **Web3Forms**; leads are e-mailed to the address configured in [`lib/config.ts`](lib/config.ts). The access key lives in the same file (`WEB3FORMS_KEY`). Confirm the key once via the activation e-mail Web3Forms sends on the first submission.

## Accessibility & SEO

- Semantic HTML, heading hierarchy, aria labels, keyboard-navigable, visible focus, `prefers-reduced-motion` support, skip link.
- Rich metadata + keywords, canonical URL, Open Graph + Twitter cards, auto-generated OG image ([`app/opengraph-image.tsx`](app/opengraph-image.tsx)), and `MovingCompany` JSON-LD (services, service area, contact point, languages).
- `robots.txt` ([`app/robots.ts`](app/robots.ts)), `sitemap.xml` ([`app/sitemap.ts`](app/sitemap.ts)), and a web manifest ([`app/manifest.ts`](app/manifest.ts)) are generated automatically.

### Domain

The production domain is **kepsha-vip.cz**, set once in [`lib/config.ts`](lib/config.ts) (`BRAND.url`). Everything else (canonical, OG, sitemap, robots, JSON-LD) derives from it — change it there if the domain ever moves.

### Google Search Console

1. Deploy the site to the live domain (Vercel → add `kepsha-vip.cz`).
2. In [Search Console](https://search.google.com/search-console) add the property. Easiest: **HTML tag** method — copy the `content` value and paste it into `GOOGLE_SITE_VERIFICATION` in [`lib/config.ts`](lib/config.ts), then redeploy. (Or verify by **DNS TXT** at your registrar — no code change needed.)
3. After verification, submit the sitemap: `https://kepsha-vip.cz/sitemap.xml`.
4. Use **URL Inspection → Request indexing** for the homepage to speed up first indexing.
