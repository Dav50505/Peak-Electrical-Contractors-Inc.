"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_KEY } from "@/lib/consent";

const CONSENT_EVENT = "cookie-consent-updated";

export function CookieConsent() {
  const [consented, setConsented] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      setConsented(stored === "accepted");
    } catch {
      setConsented(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
      setConsented(true);
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
    } catch {
      setConsented(true);
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
    }
  };

  if (consented === null || consented) {
    return null;
  }

  return (
    <div
      className="fixed bottom-16 left-0 right-0 z-40 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:bottom-auto md:left-auto md:right-4 md:top-4 md:max-w-sm md:rounded-sm md:border md:shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <p className="text-sm text-brand-gray">
        We use cookies for analytics to improve our site.{" "}
        <Link
          href="/privacy#cookies"
          className="font-semibold text-brand-blue underline-offset-2 hover:underline"
        >
          Learn more
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-sm bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
