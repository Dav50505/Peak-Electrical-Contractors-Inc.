const SITE_URL = "https://peakelectricalsac.com";

/** Stable @id for the business node — referenced by all other schema objects */
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * LocalBusiness (ElectricalContractor) schema injected in the root layout.
 * Appears on every page of the site.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "@id": LOCAL_BUSINESS_ID,
    name: "Peak Electrical Contractors Inc.",
    description:
      "Family-owned Sacramento electrical contractors specializing in panel upgrades, EV charger installation, whole-house rewiring, SMUD rebates, and more. Licensed, bonded, and insured.",
    url: SITE_URL,
    telephone: "+1-916-584-2124",
    email: "peakelectricalsac@gmail.com",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.5816",
      longitude: "-121.4944",
    },
    areaServed: [
      { "@type": "City", name: "Sacramento", containedInPlace: { "@type": "State", name: "California" } },
      { "@type": "City", name: "Elk Grove" },
      { "@type": "City", name: "Roseville" },
      { "@type": "City", name: "Folsom" },
      { "@type": "City", name: "Citrus Heights" },
      { "@type": "City", name: "Rancho Cordova" },
      { "@type": "City", name: "Natomas" },
      { "@type": "City", name: "Arden-Arcade" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "52",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/peakelectricalsac",
      "https://www.instagram.com/peakelectricalsac",
      "https://www.yelp.com/biz/peak-electrical-contractors",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "California State Contractor License #1075671",
    },
  };
}

/**
 * Service schema for individual service pages.
 */
export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  /** URL path, e.g. "/services/panel-upgrade" */
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "ElectricalContractor",
      "@id": LOCAL_BUSINESS_ID,
      name: "Peak Electrical Contractors Inc.",
    },
    areaServed: {
      "@type": "City",
      name: "Sacramento",
      containedInPlace: { "@type": "State", name: "California" },
    },
    serviceType: "Electrical Contractor Services",
  };
}

export interface BreadcrumbItem {
  name: string;
  /** URL path, e.g. "/services" or "/" */
  path: string;
}

/**
 * BreadcrumbList schema for inner pages.
 * Always start with { name: "Home", path: "/" }.
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Article schema for blog posts.
 */
export function articleSchema({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  /** Image path starting with "/" */
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": articleUrl,
    headline: title,
    description,
    url: articleUrl,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      "@id": LOCAL_BUSINESS_ID,
      name: "Peak Electrical Contractors Inc.",
    },
    publisher: {
      "@type": "Organization",
      "@id": LOCAL_BUSINESS_ID,
      name: "Peak Electrical Contractors Inc.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}
