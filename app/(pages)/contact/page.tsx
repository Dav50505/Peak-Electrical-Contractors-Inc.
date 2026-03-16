import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  PHONE_NUMBER,
  PHONE_HREF,
  EMAIL,
  LICENSE_NUMBER,
  HOURS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { SERVICE_AREAS } from "@/content/homepage";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Peak Electrical Contractors | Free Estimate Sacramento",
  description:
    "Get a free estimate from Sacramento's trusted electricians. Contact Peak Electrical for panel upgrades, EV chargers, rewiring, and SMUD rebates. Call (916) 572-9541.",
  alternates: {
    canonical: "https://peakelectricalsac.com/contact",
  },
  openGraph: {
    title: "Contact Peak Electrical Contractors | Free Estimate Sacramento",
    description:
      "Get a free estimate from Sacramento's trusted electricians. Panel upgrades, EV chargers, rewiring, SMUD rebates. Call (916) 572-9541.",
    url: "https://peakelectricalsac.com/contact",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Peak Electrical Contractors | Free Estimate Sacramento",
    description:
      "Get a free estimate from Sacramento's trusted electricians. Panel upgrades, EV chargers, rewiring, SMUD rebates. Call (916) 572-9541.",
    images: ["/images/homepage.png"],
  },
};

// Google Maps embed for Sacramento, CA service area
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.062865!2d-121.4944!3d38.5816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad2b4da1edb9b%3A0x7b482e4f8b7e3c8!2sSacramento%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

const contactBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      {/* 1. Hero with photo background */}
      <PageHero
        eyebrow="Contact Us"
        headline="Get a Free Estimate"
        subtext="Licensed, bonded Sacramento electricians. We respond within one business day."
        trustLine="Licensed #1075671 · Bonded & Insured · SMUD-Approved"
        backgroundImage="/images/homepage.png"
        backgroundImageAlt="Peak Electrical Contractors serving Sacramento"
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Contact form */}
      <ContactForm />

      {/* 4. Two-column: Contact info + Service areas */}
      <Section background="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info block */}
          <div>
            <SectionLabel>Reach Us</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Contact Information
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-lg font-semibold text-brand-blue transition-colors hover:text-brand-accent"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-lg font-semibold text-brand-blue transition-colors hover:text-brand-accent break-all"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-gray">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  {HOURS.weekdays}
                  <br />
                  {HOURS.saturday}
                </span>
              </li>
              <li className="flex items-start gap-3 text-brand-gray">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span>CSLB License #{LICENSE_NUMBER}</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-8">
              <span className="block text-sm font-semibold text-brand-blue">
                Follow us
              </span>
              <div className="mt-3 flex gap-3">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-accent hover:text-brand-dark"
                  aria-label="Peak Electrical on Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-accent hover:text-brand-dark"
                  aria-label="Peak Electrical on Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Service areas list */}
          <div>
            <SectionLabel>Where We Serve</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Sacramento Service Areas
            </h2>
            <p className="mt-3 text-base text-brand-gray">
              We provide licensed electrical services throughout the Greater Sacramento region.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-sm font-medium text-brand-dark">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Google Map embed */}
      <Section background="white" fullBleed>
        <div className="w-full">
          <div className="relative h-[400px] w-full overflow-hidden">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peak Electrical Contractors service area - Sacramento, CA"
              className="absolute inset-0"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
