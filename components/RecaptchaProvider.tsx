"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// Google's test key - always passes. Used when NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.
const RECAPTCHA_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? RECAPTCHA_TEST_SITE_KEY;

interface RecaptchaProviderProps {
  children: React.ReactNode;
}

/**
 * Wraps the app with Google reCAPTCHA v3 provider.
 * Uses test key when NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set (forms work, server skips verification).
 */
export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
