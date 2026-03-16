"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { hasCookieConsent } from "@/lib/consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_EVENT = "cookie-consent-updated";

export function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasCookieConsent());
    const handler = () => setConsented(hasCookieConsent());
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!GA_MEASUREMENT_ID || !consented) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
