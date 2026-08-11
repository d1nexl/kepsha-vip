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

The request form ([`components/request-form.tsx`](components/request-form.tsx)) currently simulates submission (client-side success state). To receive real leads, replace the `await new Promise(...)` in `onSubmit` with a POST to your endpoint / email service (e.g. Resend, Formspree, or a Next.js API route).

## Accessibility & SEO

- Semantic HTML, heading hierarchy, aria labels, keyboard-navigable, visible focus, `prefers-reduced-motion` support, skip link.
- Per-locale `<title>` / meta description, Open Graph, SVG favicon, and `MovingCompany` JSON-LD structured data.
