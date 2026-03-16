/**
 * Cookie consent storage key — shared between CookieConsent and Analytics.
 */
export const COOKIE_CONSENT_KEY = "cookie-consent";

export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}
