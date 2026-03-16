# Peak Electrical Contractors Inc.

**Site:** [peakelectricalsac.com](https://peakelectricalsac.com)  
**Stack:** Next.js (App Router) · Tailwind CSS · Vercel

Fully custom website for Peak Electrical Contractors — Sacramento electricians specializing in panel upgrades, EV charger installation, whole-house rewiring, and SMUD rebates. Replaces the existing Squarespace site.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Montserrat (headings), Inter (body) via `next/font`
- **Forms:** Resend + React Email (contact form)
- **Analytics:** Google Analytics 4 via `@next/third-parties`
- **Hosting:** Vercel

## Project Structure

```
/app               → App Router pages and layouts
/app/(pages)/      → Route segments (home, about, services, blog, contact)
/components/       → Reusable UI components
/components/ui/    → Primitives (Button, Badge, Card, etc.)
/components/layout/→ Header, Footer, Nav
/components/sections/ → Page-level sections
/lib/              → Utility functions, metadata helpers
/content/          → Static content (blog MDX, service data)
/public/           → Static assets (images, favicon)
```

## Setup

1. **Clone and install**
   ```bash
   git clone <repo-url>
   cd peak-electrical-contractors
   npm install
   ```

2. **Environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and add:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` — from Google Analytics 4

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Branch Strategy

- **`main`** — Production. Auto-deploys to Vercel.
- **`dev`** — Working branch. Preview deployments on Vercel.

Create feature branches from `dev`, merge to `dev` for testing, then merge `dev` → `main` for production releases.

## Design Tokens

Brand colors and fonts are defined in `app/globals.css` via Tailwind v4 `@theme`:

- **Brand blue:** `#1e3a5f` (primary navy)
- **Light blue:** `#3b82f6` (links, hover)
- **Accent:** `#f59e0b` (gold CTAs)
- **Dark:** `#111827` (charcoal)

Use `bg-brand-blue`, `text-brand-accent`, `font-heading`, `font-body` in components — avoid raw values.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Manual Steps (Post-Setup)

- Create GitHub repo and push
- Connect repo to Vercel project
- Point `peakelectricalsac.com` DNS to Vercel
- Add env vars in Vercel dashboard
- Verify domain in Google Search Console
- Create Resend account and obtain API key
