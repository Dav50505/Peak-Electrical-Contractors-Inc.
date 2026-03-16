/**
 * Shared business constants used across the site.
 * Single source of truth for contact info, social links, etc.
 */

export const PHONE_NUMBER = "(916) 572-9541";
export const PHONE_HREF = "tel:+19165729541";
export const EMAIL = "peakelectricalsac@gmail.com";
export const LICENSE_NUMBER = "1075671";

export const HOURS = {
  weekdays: "Mon–Fri: 7am–6pm",
  saturday: "Sat: 8am–4pm",
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/peakelectricalsac",
  instagram: "https://www.instagram.com/peakelectricalsac",
} as const;

export const YELP_URL = "https://www.yelp.com/biz/peak-electrical-contractors";
export const BUILDZOOM_URL = "https://www.buildzoom.com";

export const SERVICE_OPTIONS = [
  "SMUD Rebates",
  "Panel Upgrade",
  "EV Charger",
  "Rewiring",
  "Circuit/Lighting",
  "ADU",
  "Other",
] as const;
