# Peak Electrical Contractors Inc. — Website Rebuild Tasks

**Site:** peakelectricalsac.com  
**Stack:** Next.js (App Router) · Tailwind CSS · Vercel  
**Forms:** TBD — see task 1.7  
**Goal:** Fully custom coded site built from scratch. Replaces existing Squarespace site. Improves design consistency, page speed, conversions, and local Sacramento search rankings.

---

## Phase 1 — Project Setup & Infrastructure

- [x] **1.1 Repo Setup** — Create a new GitHub repo. Initialize with `create-next-app` using the App Router. Set up `.gitignore`, `README.md`, and branch strategy (main = production, dev = working branch).
- [ ] **1.2 Vercel Project** — Connect the GitHub repo to a new Vercel project. Configure auto-deploy on push to main. Set up a preview deployment on the dev branch.
- [ ] **1.3 Domain Transfer** — Point `peakelectricalsac.com` DNS to Vercel. Configure `www` redirect to apex domain (or vice versa). Confirm SSL certificate is provisioned and HTTPS is enforced.
- [x] **1.4 Tailwind CSS** — Install and configure Tailwind CSS. Define the design tokens in `tailwind.config.js`: brand colors, font families, spacing scale, and breakpoints. Avoid using raw values in components — everything goes through the config.
- [x] **1.5 Font Setup** — Install chosen fonts via `next/font` (Google Fonts or local). Configure as CSS variables so they're available in Tailwind. No layout shift on font load.
- [x] **1.6 Folder Structure** — Establish the project structure before building any pages:
  ```
  /app               → App Router pages and layouts
  /app/(pages)/      → All route segments (home, about, services, blog, contact)
  /components/       → Reusable UI components
  /components/ui/    → Primitives (Button, Badge, Card, etc.)
  /components/layout/→ Header, Footer, Nav
  /components/sections/ → Page-level sections (Hero, ServicesGrid, Testimonials, etc.)
  /lib/              → Utility functions, metadata helpers, schema generators
  /content/          → Static content (blog MDX files, service data objects)
  /public/           → Static assets (images, favicon, og images)
  /styles/           → Global CSS (globals.css only, most styling via Tailwind)
  ```
- [x] **1.7 Form Handling Decision** — Decide on form solution before building the contact page. Options:
  - **Resend + React Email** — send emails directly from Next.js API route, full control, free tier generous (recommended)
  - **Formspree** — drop-in, no backend code needed, free tier available
  - **Netlify Forms** — not applicable since hosting on Vercel
  - Once decided, create `/app/api/contact/route.ts` and test end-to-end before building the form UI
- [x] **1.8 Environment Variables** — Set up `.env.local` for local dev and matching env vars in Vercel dashboard. At minimum: form API keys, any analytics IDs. Never commit secrets to the repo.
- [x] **1.9 Analytics Setup** — Install Google Analytics 4 via `@next/third-parties` (official Next.js package, no performance hit). Set up Google Search Console and verify domain ownership via DNS record.
- [x] **1.10 Redirects** — Add a `redirects()` array in `next.config.js` to map any old Squarespace URLs to new ones. Do this before launch so no existing Google rankings are lost.
- [x] **1.11 Favicon & OG Image** — Create favicon set (16px, 32px, 180px apple-touch-icon) and a default Open Graph image (1200×630px) for social sharing. Place in `/app` directory per Next.js App Router conventions (`icon.png`, `opengraph-image.png`).
- [ ] **1.12 Photo Assets** — Collect and optimize all real project photos before building any pages. Export as WebP, max 1920px wide for heroes, max 800px for cards. Store in `/public/images/` with descriptive filenames (e.g., `panel-upgrade-sacramento.webp`).

---

## Phase 2 — Design System & Component Library

- [x] **2.1 Global Layout** — Build `app/layout.tsx` with the root HTML shell, font variables, `<Header />`, `<Footer />`, and any global providers (analytics, etc.). This wraps every page.
- [x] **2.2 Header Component** — `/components/layout/Header.tsx` — sticky nav with logo, desktop nav links, mobile hamburger menu, and a prominent phone number CTA button. Active link state based on current route using `usePathname()`.
- [x] **2.3 Footer Component** — `/components/layout/Footer.tsx` — logo, tagline, service areas list, contact info (phone as `tel:` link, email as `mailto:`), license number, hours, social icons, quick nav links, and copyright.
- [x] **2.4 Button Component** — `/components/ui/Button.tsx` — variants: `primary`, `secondary`, `ghost`, `dark`. Accepts `href` (renders as `<Link>`) or `onClick`. Handles external links with `target="_blank"`. Used everywhere — never write one-off button styles.
- [x] **2.5 Section Wrapper Component** — `/components/ui/Section.tsx` — consistent vertical padding, max-width container, optional background color prop. Wrap every page section with this so spacing is uniform across all pages.
- [x] **2.6 SectionLabel Component** — The small uppercase eyebrow text used above every heading (e.g., "Who We Are", "What We Do"). One component, used everywhere.
- [x] **2.7 ServiceCard Component** — `/components/ui/ServiceCard.tsx` — used in the homepage grid and services overview. Props: number, icon, title, description, tag, href. Hover state with top-border accent animation.
- [x] **2.8 TestimonialCard Component** — Props: stars, quote, author name, location. Used on homepage and potentially individual service pages.
- [x] **2.9 BlogCard Component** — Props: image, tag, title, excerpt, date, slug. Used on blog index and homepage blog preview.
- [x] **2.10 TrustBar Component** — The horizontal strip of credentials (Licensed, Bonded, SMUD-Approved, etc.) that appears below the homepage hero. Can be reused on service pages.
- [x] **2.11 ProcessSteps Component** — Numbered step list used on multiple service pages (Our Process, How It Works). Props: array of `{ step, title, description }`. Build once, reuse across all 6 service pages.
- [x] **2.12 FAQAccordion Component** — Collapsible FAQ used on service pages. Props: array of `{ question, answer }`. Use `<details>`/`<summary>` or a lightweight state-based accordion — no library needed. Add FAQ schema markup as JSON-LD inside the component.
- [x] **2.13 CTABanner Component** — The full-width colored band with headline, subtext, and a button. Used at the bottom of most pages and as a mid-page interrupt. Props: variant (`accent` for gold, `dark` for charcoal), headline, body, buttonLabel, buttonHref.
- [x] **2.14 PageHero Component** — Used on all inner pages (About, Services, Contact, Blog). Props: eyebrow, headline (with optional italic span), subtext, optional background image. Distinct from the homepage hero which is its own one-off component.
- [x] **2.15 Mobile Sticky CTA Bar** — Fixed bar at bottom of screen on mobile only (`md:hidden`). Shows "Call Now" and "Get Free Estimate" buttons. Hides on desktop. Include on all pages via the root layout.

---

## Phase 3 — Page Builds

### 3.1 Homepage
- [x] Hero section with full-bleed image, headline, subheadline, and two CTAs (Book Consultation + View Services)
- [x] Trust bar below hero (Licensed #1075671, Bonded & Insured, SMUD-Approved, Permitted Work, BuildZoom 108)
- [x] Intro/about split section with real photo and Yelp rating callout
- [x] Services overview grid (6 cards: Panel Upgrades, EV Charging, Rewiring, Circuits/Lighting, ADU/New Construction, Solar Prep)
- [x] SMUD rebate highlight banner with CTA
- [x] "Why Choose Peak" section with 5 differentiators
- [x] Testimonials section (3 cards, Yelp attribution, star ratings)
- [x] Service areas section
- [x] Blog preview (3 most recent posts)
- [x] Final CTA section with phone number prominent

### 3.2 About Us Page
- [x] Page hero with headline and real team/job-site photo
- [x] Company story paragraph (10+ years, family-owned, Sacramento-based)
- [x] "Why Choose Us" grid (4 differentiators)
- [x] Our Values section (Integrity, Craftsmanship, Communication, Safety, Community)
- [x] License/credentials callout with CSLB badge
- [x] CTA to contact/estimate

### 3.3 Services Page (Overview)
- [x] Page hero
- [x] List of all 7 services with short descriptions and links to individual service pages
- [x] "All work permitted and inspected" callout banner
- [x] CTA banner at bottom

### 3.4 Individual Service Pages

#### 3.4.1 — Meter Panel Upgrades, Replacements & Subpanel Installations
**URL suggestion:** `/services/panel-upgrade`
- [x] Page hero — headline: "Meter Panel Upgrades, Replacements, and Sub panel Installations" with subtext "Licensed, Bonded & Insured | Permitted, Inspected, and Done Right"
- [x] Intro paragraph — specialize in upgrading outdated/overloaded panels; fully permitted and inspected; for remodels, EV chargers, or reliable power
- [x] "Signs You May Need a Panel Upgrade" section — 6-item list: flickering lights, tripped breakers, buzzing sounds, adding EV/HVAC/spa/solar, remodeling, insurance or home sale requirements
- [x] "What We Offer" section — 5-item list: Full replacements (125A, 200A, higher), subpanel installs (garages, workshops, ADUs), troubleshooting & repairs, permit applications, utility coordination (SMUD, PG&E)
- [x] "Why Homeowners Trust Peak Electric" section — 6 trust points: licensed/bonded/insured, friendly professionals, clean job sites, clear upfront pricing, inspector relationships, excellent reviews
- [x] "Our Process" section — 5 numbered steps: Free Consultation → Detailed Estimate → Permit Application → Installation → Final Inspection & Walkthrough
- [x] Fast turnaround callout — "Most upgrades completed in 1–2 business days" + financing options available
- [x] FAQ section — 3 questions: permit requirement, cost, EV charger without upgrade
- [x] Inline contact form — First Name, Last Name, Email, Phone, "Request Your Free Estimate" CTA button

#### 3.4.2 — SMUD Contractor & Electrical Rebates
**URL suggestion:** `/services/smud-rebates`
- [x] Page hero — headline: "SMUD Contractor | Electrical Rebates Up to $2,500" with trust line "Licensed, Bonded, and Insured | Official SMUD Contractor"
- [x] Intro paragraph — trusted SMUD Contractor serving Sacramento; qualifying installs may receive up to $2,000–$2,500 in rebates; Peak handles the paperwork
- [x] "How SMUD Rebates Work" section — list eligible upgrades: EV chargers, heat pump water heaters, heat pump HVAC, electric cooking appliances, electric dryers; Charge@Home and Home Electrification Rebate programs
- [x] Rebate amounts callout — 3-column layout or table: EV Charger Circuit (up to $500), Water Heater Circuit (up to $2,000), Full Electrification Upgrades (up to $2,500) with disclaimer about program guidelines
- [x] "How We Make It Easy" section — 5-item list: verify eligibility, submit rebate application, install to SMUD specs, coordinate inspections, apply rebate as upfront discount
- [x] "SMUD Rebates We Commonly Help With" section — 4 services: EV charger circuit (40A max for rebate), heat pump water heater circuit, heat pump HVAC circuit, gas-to-electric conversion (ranges, dryers)
- [x] "Why Choose Peak" section — 7 trust points from content
- [x] FAQ section — 5 questions from content: What is Charge@Home, other rebates available, how to qualify, do I do paperwork myself, can rebate be applied upfront
- [x] Two CTAs: "Find Out if You Qualify" (links to contact form) throughout page

#### 3.4.3 — EV Charger Installation
**URL suggestion:** `/services/ev-charger-installation`
- [x] Page hero — headline: "EV Charger Installation for Homes and Businesses" with trust line "Licensed, Bonded, and Insured | Trusted SMUD Contractor"
- [x] Intro paragraph — easy, fast, code-compliant; residential, commercial, multi-unit; SMUD Charge@Home rebate up to $500
- [x] "Why Choose Peak for EV Charger Installation" section — 7-point list from content including SMUD contractor status, permit handling, utility coordination
- [x] "Our EV Charger Installation Services" section — list of what's installed: Level 2 (240V), Tesla Wall Connectors, ChargePoint/JuiceBox/Wallbox/other brands, fleet installs, panel upgrades if needed, rebate assistance
- [x] "SMUD Rebates for EV Charger Circuits" section — up to $500 rebate, instant discount available, Peak submits all documentation
- [x] "How the Process Works" section — 4 numbered steps: Free Consultation → Permitting & Rebate Application → Installation → Inspection & Final Setup
- [x] Pricing section — variables that affect cost (panel distance, panel upgrade need, charger brand, rebate eligibility); typical range $1,200–$2,500 before rebates; free estimate CTA
- [x] CTA — "Ready to Power Up?" with contact form link and phone number
- [x] "Find Out if You Qualify" button linking to contact/rebate form

#### 3.4.4 — Whole House Rewiring
**URL suggestion:** `/services/whole-house-rewiring`
- [x] Page hero — headline: "Whole House Rewiring Services" with location line "Peak Electrical Contractors Inc. | Sacramento, CA"
- [x] Intro paragraph — outdated, damaged, or unsafe wiring; protects family, increases home value, brings up to modern standards; clear and stress-free process
- [x] "Signs Your Home May Need Rewiring" section — 8-item list: flickering/dimming lights, frequent breaker trips/blown fuses, warm or sparking outlets, two-prong non-grounded outlets, knob-and-tube/cloth wiring, burning smell, aluminum wiring (1960s–70s homes), renovations/insurance/code upgrades
- [x] "Our Whole House Rewire Services Include" section — 7-item list: full wiring removal, new code-compliant copper wiring, grounded outlets/switches, GFCI protection (kitchens, bathrooms, outdoors), dedicated circuits (appliances, HVAC, EV), updated panels/subpanels, full permit and inspection process; note about minimizing drywall damage
- [x] "Why Choose Peak" section — 6 trust points including SMUD contractor status and older-home experience
- [x] "How the Rewire Process Works" section — 5 numbered steps: Free Assessment → Detailed Estimate → Permitting → Professional Rewiring → Final Inspection & Walkthrough
- [x] Timeline section — typical 3–10 business days; phased approach for occupied homes; faster for vacant homes
- [x] CTA — "Contact us for a Free Estimate" with form or phone

#### 3.4.5 — Insurance Coordination for Panel Replacements
**URL suggestion:** `/services/insurance-panel-replacement`
- [x] Page hero — headline: "Insurance Coordination for Meter Panel Replacements" with trust line "Licensed, Bonded, and Insured | Experts in Insurance-Approved Electrical Upgrades"
- [x] Intro paragraph — specialize in helping homeowners navigate insurance claims for unsafe panels (especially Zinsco); work directly with insurance companies; saves time, money, and frustration
- [x] "Common Panels Covered by Insurance" section — 4 panel types: Zinsco, Federal Pacific (FPE), Sylvania (certain models), other outdated or damaged panels; note about insurance requirements for real estate transactions
- [x] "How We Help with the Insurance Process" section — 6-step list: on-site evaluation, documentation and written estimates, adjuster communication, photo/report/code reference submission, replacement with permits and inspections, coordinate final inspection
- [x] "Why Insurance Often Approves Zinsco Panel Replacements" section — explain the 4 Zinsco failure modes: breakers fail to trip, bus bar corrosion/overheating, breakers melting to bus bar, NEC non-compliance; note about insurers refusing coverage
- [x] "Why Work with Peak" section — 5 trust points: licensed/bonded/insured, insurance upgrade experience, professional documentation, code-compliant replacements, trusted by homeowners/realtors/adjusters
- [x] "How the Process Works" section — 4 numbered steps: Free Assessment → Documentation & Estimate → Insurance Coordination → Panel Replacement & Inspection
- [x] CTA — "Find Out if You Qualify" with contact form link

#### 3.4.6 — Whole-Home Battery Backup
**URL suggestion:** `/services/battery-backup`
- [x] Page hero — headline: "Whole-Home Battery Backup Installation in Sacramento"
- [x] Intro section — context on why outages are more common (extreme weather, grid strain, wildfire shutoffs); Peak installs advanced home battery storage systems; licensed electricians design tailored systems
- [x] Value props section — what a battery system can do: keep essential appliances running, power the entire home, provide energy independence, long-term energy savings
- [x] Honest scope-setting callout — note from current content: "every home is a little different" — position this as a consultation-first service, not a fixed-price product
- [x] "Schedule a Backup Power Consultation" CTA section — friendly, low-pressure language matching current content tone; phone number and contact form
- [x] Note: this page currently has less content than others — consider expanding with: compatible battery brands (Tesla Powerwall, Enphase, Franklin), how battery backup integrates with solar, typical backup duration examples, and a simple FAQ

### 3.5 Blog
- [x] Blog index page with card grid layout (image, tag, title, excerpt, date, read more)
- [x] Individual blog post template (hero, post body, related posts, sidebar CTA)
- [x] Write and publish these starter posts:
  - [x] "What is a Zinsco Panel and Why Should You Replace It?"
  - [x] "SMUD EV Charger Rebates in 2026: Complete Sacramento Guide"
  - [x] "5 Signs Your Home's Electrical Panel Needs an Upgrade"
  - [x] "Level 1 vs Level 2 EV Charging: What Sacramento Homeowners Need to Know"
  - [x] "How to Prepare Your Sacramento Home for Solar Panel Installation"

### 3.6 Contact Page
- [x] Page hero with photo background
- [x] Contact form fields: First Name, Last Name, Email, Phone, Service Interested In (checkboxes: SMUD Rebates, Panel Upgrade, EV Charger, Rewiring, Circuit/Lighting, ADU, Other), Message, Newsletter signup checkbox
- [x] Service areas list
- [x] Contact info block: phone (click-to-call), email (mailto link), hours, license number
- [x] Embed Google Map of service area
- [x] Social links (Facebook, Instagram)

---

## Phase 4 — SEO (Next.js Specific)

- [x] **4.1 Metadata API** — Use Next.js `generateMetadata()` in every `page.tsx`. Never use plain `<title>` or `<meta>` tags. Each page needs a unique `title`, `description`, `openGraph`, and `twitter` block. Create a helper in `/lib/metadata.ts` to avoid repetition.
- [x] **4.2 Meta Titles per Page** — Write and implement for every page:
  - Homepage: `Sacramento Electricians | Panel Upgrades, EV Chargers & Rewiring | Peak Electrical Contractors`
  - Panel Upgrades: `Meter Panel Upgrades Sacramento | 200A Service & Zinsco Replacement | Peak Electrical`
  - SMUD Rebates: `SMUD Electrical Rebates Sacramento | Up to $2,500 | Peak Electrical Contractors`
  - EV Charger: `EV Charger Installation Sacramento | SMUD Rebate Eligible | Peak Electrical`
  - Rewiring: `Whole House Rewiring Sacramento | Licensed Electricians | Peak Electrical`
  - Insurance: `Insurance Panel Replacement Sacramento | Zinsco & FPE Panels | Peak Electrical`
  - Battery Backup: `Whole-Home Battery Backup Sacramento | Peak Electrical Contractors`
  - About: `About Peak Electrical Contractors | Sacramento Family-Owned Electricians`
  - Contact: `Contact Peak Electrical Contractors | Free Estimate Sacramento`
- [x] **4.3 Local Business Schema** — Create `/lib/schema.ts` with a `localBusinessSchema` object. Inject as `<script type="application/ld+json">` in the root layout so it appears on every page. Include: name, address, phone, hours, service areas, license number, aggregateRating (4.7, 52 reviews), url.
- [x] **4.4 Service Page Schema** — Add `Service` schema JSON-LD to each individual service `page.tsx`. Include service name, provider (the business), area served, and description.
- [x] **4.5 FAQ Schema** — The `FAQAccordion` component (2.12) should automatically output `FAQPage` JSON-LD alongside the visible accordion. Pass the same data array to both the UI and the schema.
- [x] **4.6 Breadcrumb Schema** — Add `BreadcrumbList` JSON-LD on all inner pages. Helps Google understand site structure and sometimes shows breadcrumbs in search results.
- [x] **4.7 Sitemap** — Use Next.js built-in `app/sitemap.ts` to auto-generate `sitemap.xml`. Include all static pages and blog posts. Submit to Google Search Console after launch.
- [x] **4.8 robots.txt** — Create `app/robots.ts` (Next.js App Router convention). Allow all crawlers, reference the sitemap URL.
- [x] **4.9 next/image Everywhere** — Never use `<img>` tags. Use `next/image` for all images — this handles WebP conversion, lazy loading, responsive `srcSet`, and prevents CLS. Always provide `width`, `height`, and meaningful `alt` text.
- [x] **4.10 Canonical URLs** — Set `alternates.canonical` in every page's metadata to prevent duplicate content issues.
- [ ] **4.11 Google Business Profile** — Fully optimize the GBP listing independently of the website: add all service categories, upload real project photos, write a keyword-rich description, set accurate hours, enable messaging. This is the #1 lever for local map pack rankings.
- [x] **4.12 Target Keywords per Page** — Ensure each page's H1, first paragraph, and meta title naturally include:
  - Panel Upgrades: "panel upgrade sacramento," "zinsco panel replacement sacramento," "200 amp service upgrade"
  - SMUD Rebates: "smud rebate electrician," "smud charge at home sacramento," "smud approved contractor"
  - EV Charger: "ev charger installation sacramento," "level 2 charger installation," "smud ev rebate"
  - Rewiring: "whole house rewiring sacramento," "knob and tube rewiring sacramento"
  - Insurance: "zinsco panel replacement insurance," "federal pacific panel replacement sacramento"
  - Battery: "whole home battery backup sacramento," "home battery storage sacramento"
- [ ] **4.13 Core Web Vitals** — After deploying to Vercel, run Lighthouse and PageSpeed Insights. Target: LCP under 2.5s, CLS under 0.1, FID/INP under 200ms. `next/image` and `next/font` handle most of this automatically if used correctly.

---

## Phase 5 — Trust & Conversion

- [x] **5.1 Yelp Badge** — Embed Yelp review count and star rating widget (or custom-styled badge linking to profile).
- [x] **5.2 BuildZoom Badge** — Add BuildZoom score (108) badge with link to profile.
- [x] **5.3 CSLB License Verification** — Add "License #1075671 — Verify at CSLB.ca.gov" with link in footer and About page.
- [x] **5.4 SMUD Contractor Badge** — Display "SMUD-Approved Contractor" credential prominently on homepage and EV/rebate pages.
- [x] **5.5 Click-to-Call** — Ensure phone number is a `tel:` link on every page, especially in the nav and footer.
- [x] **5.6 Sticky Mobile CTA** — Add a sticky "Call Now" or "Get Free Estimate" bar at the bottom on mobile.
- [x] **5.7 reCAPTCHA** — Add Google reCAPTCHA v3 to contact form to prevent spam.
- [x] **5.8 Form Confirmation** — Set up a thank-you page or confirmation message after form submission. Also send an auto-reply email to the person who submitted.
- [x] **5.9 Privacy Policy Page** — Create a basic privacy policy page (required for contact forms and any tracking pixels). Many free generators exist.
- [x] **5.10 Cookie Notice** — Add a GDPR/CCPA-compliant cookie consent notice if using Google Analytics or Meta pixels.

---

## Phase 6 — Integrations & Marketing

- [ ] **6.1 Contact Form API Route** — Build `/app/api/contact/route.ts` as a Next.js Route Handler. Validate all fields server-side before sending. Return proper success/error JSON responses to the client. Never expose API keys in client code.
- [ ] **6.2 Email Delivery** — Connect the API route to whichever form solution was chosen in task 1.7. If using Resend: install `resend` npm package, create a simple React Email template for the notification email, and set up an auto-reply to the customer. Store the API key in Vercel environment variables.
- [ ] **6.3 Form Spam Protection** — Add either Cloudflare Turnstile (free, privacy-friendly) or Google reCAPTCHA v3 to the contact form. Verify the token server-side in the API route before sending the email.
- [ ] **6.4 Google Analytics 4** — Install via `@next/third-parties/google` — the official Next.js package that loads GA4 without blocking rendering. Add to root `layout.tsx`. Set up conversion events for: form submissions, phone number clicks (`tel:` link clicks), and CTA button clicks.
- [ ] **6.5 Google Tag Manager** — Optional alternative to direct GA4 if the client wants to manage tracking tags without code deploys. Decide upfront — don't use both GTM and direct GA4.
- [ ] **6.6 Blog with MDX** — Set up MDX for blog posts using `@next/mdx` or `contentlayer`. Each post is a `.mdx` file in `/content/blog/`. Create a `generateStaticParams()` function in `/app/blog/[slug]/page.tsx` for static generation. Include frontmatter: `title`, `date`, `tag`, `excerpt`, `coverImage`.
- [ ] **6.7 Social Links Audit** — Fix the broken Facebook mobile URL. Use standard `https://www.facebook.com/[pagename]` format. Test all social links on both desktop and mobile before launch.
- [ ] **6.8 Google Reviews Link** — Get the direct "Write a Review" URL from the Google Business Profile dashboard. Add to footer and consider a post-job follow-up email template the client can send manually.
- [ ] **6.9 Vercel Analytics** — Enable Vercel Analytics in the dashboard (free on hobby/pro plans). Provides real-user performance data without a separate tool. Add `<Analytics />` from `@vercel/analytics/react` to root layout.
- [ ] **6.10 Vercel Speed Insights** — Enable Vercel Speed Insights alongside Analytics. Tracks Core Web Vitals from real users, not just lab tests.

---

## Phase 7 — QA & Launch

- [ ] **7.1 Lighthouse Audit** — Run Lighthouse on every page (not just homepage) in Chrome DevTools. Fix anything below 85 in Performance, 90 in Accessibility, 90 in Best Practices, and 90 in SEO before launching.
- [ ] **7.2 Cross-Browser Testing** — Test in Chrome, Safari, Firefox, and Edge on desktop. Pay special attention to Safari — CSS grid and some newer properties behave differently.
- [ ] **7.3 Mobile Testing** — Test on a real iPhone (Safari) and real Android (Chrome). Don't rely solely on DevTools device simulation — they don't replicate actual touch behavior or font rendering.
- [ ] **7.4 Accessibility Audit** — Run axe DevTools or the Lighthouse accessibility audit. Fix all critical issues: missing alt text, insufficient color contrast, missing form labels, non-keyboard-navigable interactive elements. Next.js renders semantic HTML by default — don't break it with bad div soup.
- [ ] **7.5 Form End-to-End Test** — Submit the contact form on the production URL (not localhost). Confirm: validation errors show correctly, success state renders, notification email arrives in the client's inbox, auto-reply arrives in the test customer inbox. Test spam protection triggers.
- [ ] **7.6 All Links & CTAs** — Click every link, button, and CTA on every page. Check: internal nav links, footer links, phone `tel:` links, email `mailto:` links, social links, blog read more links, service page CTAs.
- [ ] **7.7 Image Check** — Confirm all `next/image` components load, no broken images, no images missing `alt` text, no layout shift on page load.
- [ ] **7.8 Metadata Check** — Use the [Meta Tags Debugger](https://metatags.io) or Open Graph debugger to confirm title, description, and OG image render correctly for each page when shared on social media.
- [ ] **7.9 Schema Validation** — Run all pages through [Google's Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org). Fix any errors in LocalBusiness, Service, FAQ, or Breadcrumb schema.
- [ ] **7.10 Redirect Verification** — Test every redirect in `next.config.js` to confirm old Squarespace URLs properly 301 to the new pages. Use `curl -I [url]` or a redirect checker tool.
- [ ] **7.11 Sitemap & robots.txt** — Visit `/sitemap.xml` and `/robots.txt` in the browser on the production URL. Confirm all pages appear in the sitemap and nothing important is blocked in robots.
- [ ] **7.12 Search Console Submission** — Submit the sitemap in Google Search Console. Request indexing for the homepage manually. Monitor Coverage report for any crawl errors in the days after launch.
- [ ] **7.13 404 Page** — Build `app/not-found.tsx` with the site's design, a helpful message, links back to homepage and contact page, and the phone number.
- [ ] **7.14 Vercel Preview Check** — Before merging to main/production, review the Vercel preview deployment URL on mobile. Vercel generates a unique preview URL for every PR — use it.
- [ ] **7.15 DNS Cutover Plan** — Schedule the DNS switch to Vercel during a low-traffic window. Have the old Squarespace site ready to roll back to if something goes wrong. TTL propagation takes up to 48 hours.
- [ ] **7.16 Announce** — Post on Instagram and Facebook that the new site is live. Ask 3–5 satisfied past clients to leave a Google review the week of launch.

---

## Ongoing (Post-Launch)

- [ ] Publish 1 new blog post per month targeting local SEO keywords
- [ ] Request Google and Yelp reviews from every completed job
- [ ] Monitor Google Search Console for impressions, clicks, and any crawl errors monthly
- [ ] Update SMUD rebate amounts and program details whenever SMUD changes them
- [ ] Add new project photos to the site quarterly
- [ ] Check and respond to all Google, Yelp, and social reviews within 48 hours

---

*Total estimated pages: 17–18 (Home, About, Services Overview, 6 Service Detail pages, Blog Index, 5 Blog Posts, Contact, Privacy Policy, 404) · Stack: Next.js App Router + Tailwind CSS + Vercel*