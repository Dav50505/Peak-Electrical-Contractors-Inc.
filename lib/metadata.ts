import type { Metadata } from "next";

const SITE_URL = "https://peakelectricalsac.com";
const DEFAULT_OG_IMAGE = "/images/homepage.png";

interface BuildMetadataOptions {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/services/panel-upgrade" */
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Path to OG image — defaults to homepage screenshot */
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Builds a consistent Next.js Metadata object for every page.
 * Enforces absolute canonical URLs, OG image, and Twitter card.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: canonicalUrl,
      images: [{ url: resolvedOgImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [resolvedOgImage],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
