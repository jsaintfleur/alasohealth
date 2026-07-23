# Alaso Health — Brand Site

The marketing and brand website for **Alaso Health**, makers of
[Alaso](https://alaso.vercel.app) — a privacy-first home fitness tracker.

- Interim URL: https://alasohealth.vercel.app (until alasohealth.com is registered)
- Pages: home, /privacy, /terms, /support
- Stack: Next.js (App Router), TypeScript, Tailwind v4 sharing the Alaso app's
  design tokens; brand assets copied from the app repo's `public/brand/`
- URLs centralized in `src/lib/site.ts` (`NEXT_PUBLIC_SITE_URL`,
  `NEXT_PUBLIC_APP_URL`) — register the domain, set the env vars, done.

## Commands

```bash
npm run dev
npm run build
npm run lint
```

---

© 2026 Alaso Health
