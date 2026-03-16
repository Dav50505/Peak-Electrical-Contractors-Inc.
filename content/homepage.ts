/**
 * Homepage content model
 * All static copy for the homepage lives here — update this file to change
 * headlines, testimonials, service descriptions, etc. without touching the layout.
 *
 * TODO: Replace placeholder testimonials with real Yelp quotes once confirmed.
 */

export const HERO = {
  eyebrow: "Sacramento's Trusted Electricians",
  headline: "Expert Electrical Work,",
  headlineAccent: "Done Right the First Time.",
  subheadline:
    "Panel upgrades, EV chargers, full rewiring, and SMUD rebates — licensed, bonded, and fully permitted. Serving Sacramento homeowners since 2012.",
  primaryCta: { label: "Get a Free Estimate", href: "/contact" },
  secondaryCta: { label: "View Our Services", href: "/services" },
  image: "/images/homepage.png",
  imageAlt:
    "Licensed Sacramento electrician working on a residential electrical panel",
};

export const SERVICES = [
  {
    number: 1,
    iconEmoji: "⚡",
    title: "Panel Upgrades & Replacements",
    description:
      "Upgrade your 100A panel to 200A, replace unsafe Zinsco or Federal Pacific panels, and add subpanels for garages, workshops, or ADUs.",
    tag: "Most Popular",
    href: "/services/panel-upgrade",
  },
  {
    number: 2,
    iconEmoji: "🌿",
    title: "SMUD Rebates",
    description:
      "As an official SMUD-Approved Contractor, we handle the paperwork for rebates up to $2,500 on qualifying electrical upgrades.",
    tag: "Up to $2,500 Back",
    href: "/services/smud-rebates",
  },
  {
    number: 3,
    iconEmoji: "🔌",
    title: "EV Charger Installation",
    description:
      "Fast, code-compliant Level 2 (240V) EV charger installation for all makes. Eligible for the SMUD Charge@Home rebate up to $500.",
    tag: "SMUD Rebate Eligible",
    href: "/services/ev-charger-installation",
  },
  {
    number: 4,
    iconEmoji: "🏠",
    title: "Whole House Rewiring",
    description:
      "Replace outdated knob-and-tube, cloth, or aluminum wiring with modern copper wiring — fully permitted and inspected.",
    tag: "Older Homes",
    href: "/services/whole-house-rewiring",
  },
  {
    number: 5,
    iconEmoji: "📋",
    title: "Insurance Panel Coordination",
    description:
      "We work directly with your insurance company to document, estimate, and replace unsafe panels — Zinsco, FPE, and more.",
    tag: "Stress-Free Process",
    href: "/services/insurance-panel-replacement",
  },
  {
    number: 6,
    iconEmoji: "🔋",
    title: "Whole-Home Battery Backup",
    description:
      "Stay powered during outages with a whole-home battery storage system. We design and install systems tailored to your home.",
    tag: "Energy Independence",
    href: "/services/battery-backup",
  },
];

export const DIFFERENTIATORS = [
  {
    iconKey: "shield-check",
    title: "Licensed, Bonded & Insured",
    body: "CSLB License #1075671. Every job is fully insured so you're protected from start to finish.",
  },
  {
    iconKey: "clipboard-check",
    title: "All Work Permitted & Inspected",
    body: "We pull permits, schedule inspections, and deliver work that passes the first time — no shortcuts.",
  },
  {
    iconKey: "lightning",
    title: "Official SMUD-Approved Contractor",
    body: "We coordinate SMUD rebates directly — you get the discount up front, we handle the paperwork.",
  },
  {
    iconKey: "chat",
    title: "Clear, Upfront Pricing",
    body: "No surprise invoices. We give detailed estimates before any work starts and stick to them.",
  },
  {
    iconKey: "star",
    title: "4.7-Star Rated on Yelp",
    body: "Over 50 verified Yelp reviews from Sacramento homeowners. We show up on time and leave the job site clean.",
  },
] as const;

export type DifferentiatorIconKey =
  (typeof DIFFERENTIATORS)[number]["iconKey"];

// TODO: Replace with real Yelp reviews — pull verified quotes from the client's Yelp profile.
export const TESTIMONIALS = [
  {
    stars: 5 as const,
    quote:
      "Peak Electric did an outstanding job upgrading our 100-amp panel to 200-amp service. The team was professional, on time, and cleaned up completely. They pulled all the permits and coordinated the SMUD inspection. Highly recommend.",
    authorName: "Michael R.",
    location: "Elk Grove, CA",
    source: "yelp" as const,
  },
  {
    stars: 5 as const,
    quote:
      "Called them to install a Level 2 EV charger for my Tesla. Done in one day, they handled the SMUD Charge@Home rebate paperwork, and the work passed inspection on the first try. Will definitely use again.",
    authorName: "Jennifer T.",
    location: "Sacramento, CA",
    source: "yelp" as const,
  },
  {
    stars: 5 as const,
    quote:
      "Our insurance required a panel replacement because of our Zinsco panel. Peak handled everything — the estimate, dealing with the adjuster, pulling permits, and the installation. Stress-free from start to finish.",
    authorName: "David & Lisa K.",
    location: "Rancho Cordova, CA",
    source: "yelp" as const,
  },
];

export const SERVICE_AREAS = [
  "Sacramento",
  "Elk Grove",
  "Folsom",
  "Roseville",
  "Rancho Cordova",
  "Citrus Heights",
  "Fair Oaks",
  "Carmichael",
  "Natomas",
  "Arden-Arcade",
  "West Sacramento",
  "Davis",
];

// Blog posts are now in content/blog.ts — homepage uses getRecentPosts(3) from lib/blog.
