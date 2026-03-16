import type { Metadata } from "next";
import { SERVICES } from "@/content/homepage";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Electrical Services Sacramento | Panel Upgrades, EV Chargers & More | Peak Electrical",
  description:
    "Licensed Sacramento electricians offering panel upgrades, EV charger installation, whole house rewiring, SMUD rebates, insurance coordination, and battery backup. All work fully permitted and inspected.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services",
  },
  openGraph: {
    title:
      "Electrical Services Sacramento | Panel Upgrades, EV Chargers & More | Peak Electrical",
    description:
      "Licensed Sacramento electricians offering panel upgrades, EV charger installation, whole house rewiring, SMUD rebates, insurance coordination, and battery backup. All work fully permitted and inspected.",
    url: "https://peakelectricalsac.com/services",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Electrical Services Sacramento | Panel Upgrades, EV Chargers & More | Peak Electrical",
    description:
      "Licensed Sacramento electricians offering panel upgrades, EV charger installation, whole house rewiring, SMUD rebates, insurance coordination, and battery backup.",
  },
};

const servicesBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }}
      />
      <PageHero
        eyebrow="What We Do"
        headline="Electrical Services for Sacramento Homeowners"
        headlineItalic="Done Right, Every Time"
        subtext="From panel upgrades and EV chargers to full house rewiring — Peak Electrical delivers licensed, permitted, and inspected electrical work across the Sacramento region."
      />

      {/* Services grid */}
      <Section background="white" id="services">
        <div className="mb-10 text-center">
          <SectionLabel  className="mb-2">
            Our Services
          </SectionLabel>
          <h2 className="font-heading text-3xl font-bold text-brand-blue md:text-4xl">
            Everything Your Home&apos;s Electrical System Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-gray md:text-lg">
            Whether you need a simple circuit added or a complete electrical
            overhaul, we handle every job with the same attention to detail —
            pulled permits, scheduled inspections, and a clean job site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.href}
              number={service.number}
              icon={service.iconEmoji}
              title={service.title}
              description={service.description}
              tag={service.tag}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      {/* "All Work Permitted and Inspected" callout */}
      <Section background="light">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-sm border-l-4 border-brand-accent bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
              {/* Icon cluster */}
              <div className="flex shrink-0 items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent text-3xl">
                  🛡️
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <SectionLabel  className="mb-2">
                  Our Standard
                </SectionLabel>
                <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                  All Work Permitted and Inspected
                </h2>
                <p className="mt-3 text-base leading-relaxed text-brand-gray">
                  Every project we complete is fully permitted through the city
                  or county and inspected by a licensed building official. Permits
                  protect your home&apos;s resale value, keep your homeowner&apos;s
                  insurance valid, and ensure the work meets the National
                  Electrical Code. We never skip this step — and neither should
                  any electrician you hire.
                </p>

                {/* Credential pills */}
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    "✔ Licensed #1075671",
                    "✔ Bonded & Insured",
                    "✔ SMUD-Approved Contractor",
                    "✔ Permitted & Inspected Work",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="inline-block rounded-full border border-brand-blue/20 bg-brand-light-gray px-4 py-1.5 text-sm font-semibold text-brand-blue"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <CTABanner
        variant="dark"
        headline="Ready to Get Started?"
        body="Request a free estimate and we'll get back to you the same day."
        buttonLabel="Get Your Free Estimate"
        buttonHref="/contact"
        secondaryButtonLabel="(916) 572-9541"
        secondaryButtonHref="tel:+19165729541"
      />
    </>
  );
}
