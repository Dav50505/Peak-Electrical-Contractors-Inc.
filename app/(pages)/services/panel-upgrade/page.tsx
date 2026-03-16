import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps, type ProcessStep } from "@/components/sections/ProcessSteps";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { InlineContactForm } from "@/components/sections/InlineContactForm";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Meter Panel Upgrades Sacramento | 200A Service & Zinsco Replacement | Peak Electrical",
  description:
    "Licensed Sacramento electricians specializing in meter panel upgrades, 200-amp service upgrades, Zinsco & FPE replacements, and subpanel installations. Fully permitted and inspected. Free estimates.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/panel-upgrade",
  },
  openGraph: {
    title:
      "Meter Panel Upgrades Sacramento | 200A Service & Zinsco Replacement | Peak Electrical",
    description:
      "Licensed, bonded, and insured Sacramento electricians for panel upgrades, Zinsco replacements, and subpanel installs. Permitted work, free estimates.",
    url: "https://peakelectricalsac.com/services/panel-upgrade",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meter Panel Upgrades Sacramento | 200A Service & Zinsco Replacement | Peak Electrical",
    description:
      "Licensed Sacramento electricians for panel upgrades, Zinsco replacements, and subpanel installs. Free estimates.",
    images: ["/images/homepage.png"],
  },
};

const panelUpgradeService = serviceSchema({
  name: "Meter Panel Upgrades & Replacements",
  description:
    "Licensed Sacramento electricians specializing in meter panel upgrades, 200-amp service upgrades, Zinsco & FPE replacements, and subpanel installations. Fully permitted and inspected.",
  path: "/services/panel-upgrade",
});

const panelUpgradeBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Panel Upgrades", path: "/services/panel-upgrade" },
]);

// ─── Data ────────────────────────────────────────────────────────────────────

const signItems = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Flickering or Dimming Lights",
    description:
      "Lights that flicker or dim when appliances turn on are a sign your panel is struggling to distribute power evenly.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: "Frequently Tripped Breakers",
    description:
      "Breakers that trip regularly mean your circuits are overloaded — a clear sign your panel lacks sufficient capacity.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
    title: "Buzzing or Crackling Sounds",
    description:
      "Any audible buzzing, sizzling, or crackling from your panel is a serious safety concern requiring immediate attention.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Adding High-Draw Appliances",
    description:
      "Installing an EV charger, hot tub, HVAC system, or solar array almost always requires additional panel capacity.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Home Remodel or Addition",
    description:
      "New kitchens, bathrooms, garages, and ADUs frequently require a panel upgrade to handle the added electrical load.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
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
    ),
    title: "Insurance or Home Sale Requirements",
    description:
      "Insurers and buyers increasingly require upgraded panels — especially if you have a Zinsco, Federal Pacific, or outdated 60-amp service.",
  },
];

const offerItems = [
  {
    title: "Full Panel Replacements",
    description:
      "Upgrade from 100-amp to 125A, 200A, or higher service to safely power your modern home.",
  },
  {
    title: "Subpanel Installations",
    description:
      "Add subpanels for garages, workshops, ADUs, and outbuildings without running new service from the street.",
  },
  {
    title: "Panel Troubleshooting & Repairs",
    description:
      "Diagnose and fix breaker failures, overheating, corrosion, and other panel-related problems.",
  },
  {
    title: "Permit Applications",
    description:
      "We handle all permit paperwork with Sacramento County and the City on your behalf — no extra effort from you.",
  },
  {
    title: "Utility Coordination",
    description:
      "We coordinate directly with SMUD and PG&E for meter disconnects, reconnects, and service upgrades.",
  },
];

const trustPoints = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Licensed, Bonded & Insured",
    description:
      "CA Contractor License #1075671. Every job is fully covered — protecting your home and our crew.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Friendly, Professional Crew",
    description:
      "Our electricians are courteous, respectful of your home, and always happy to walk you through the work.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Clean Job Sites",
    description:
      "We protect your floors and walls during work and clean up completely before we leave — no mess left behind.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Clear, Upfront Pricing",
    description:
      "Detailed written estimates before any work starts. No hidden fees, no surprises on your final invoice.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Strong Inspector Relationships",
    description:
      "Years of permitted work in Sacramento means our jobs pass inspection on the first visit — no costly delays.",
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Excellent Customer Reviews",
    description:
      "Rated 4.7 stars across Yelp and Google with 52+ reviews. Our reputation is built on honest work and happy homeowners.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We visit your home, assess your current panel, and discuss your power needs — at no cost and no obligation.",
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description:
      "You receive a clear, itemized written estimate with no hidden fees before any work begins.",
  },
  {
    step: 3,
    title: "Permit Application",
    description:
      "We handle all permit applications with Sacramento County or the City and coordinate with your utility provider.",
  },
  {
    step: 4,
    title: "Professional Installation",
    description:
      "Our licensed electricians complete your upgrade with minimal disruption. Most jobs are done in 1–2 business days.",
  },
  {
    step: 5,
    title: "Final Inspection & Walkthrough",
    description:
      "We schedule and pass the city inspection, then walk you through the completed work so you feel confident.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need a permit for a panel upgrade in Sacramento?",
    answer:
      "Yes — a permit is required for all panel upgrades in Sacramento County and the City of Sacramento. This protects you as the homeowner by ensuring the work is independently inspected and code-compliant. Peak Electrical handles the entire permit application and coordinates the final city inspection, so you don't have to do anything extra.",
  },
  {
    question: "How much does a panel upgrade cost in Sacramento?",
    answer:
      "Most 200-amp panel upgrades in Sacramento range from $2,500 to $4,500 depending on the scope of work, your existing wiring, permit fees, and whether utility coordination is required. Subpanel installations typically start around $1,200. We provide a detailed written estimate before any work begins — no guessing, no surprises.",
  },
  {
    question: "Can I add an EV charger without upgrading my panel?",
    answer:
      "Sometimes, yes — it depends on your panel's current load and available circuit capacity. Many older 100-amp panels are already near capacity and will need an upgrade to safely support a Level 2 EV charger. We'll evaluate your existing panel during the free consultation and recommend the most cost-effective path. If an upgrade is needed, you may also qualify for a SMUD rebate that offsets part of the cost.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PanelUpgradePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(panelUpgradeService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(panelUpgradeBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        eyebrow="Our Services"
        headline="Meter Panel Upgrades, Replacements &amp; Subpanel Installations"
        trustLine="Licensed, Bonded &amp; Insured | Permitted, Inspected, and Done Right"
        subtext="Sacramento's trusted electricians for panel upgrades, Zinsco and FPE replacements, subpanel installs, and utility coordination — all fully permitted and inspected."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Electrical Panel Experts Serving Sacramento
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
            Peak Electrical Contractors specializes in upgrading outdated and
            overloaded electrical panels throughout the Sacramento area. Whether
            you&apos;re preparing for an EV charger, planning a remodel, adding
            an ADU, or simply need more reliable power, we handle everything
            from the initial assessment through the final city inspection.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
            Every panel upgrade we perform is fully permitted and inspected —
            protecting your home, your family, and your insurance coverage. No
            shortcuts. No unlicensed shortcuts. Just clean, code-compliant work
            done right the first time.
          </p>
        </div>
      </Section>

      {/* 4. Signs You May Need a Panel Upgrade */}
      <Section background="light" id="signs">
        <SectionLabel>Know the Warning Signs</SectionLabel>
        <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
          Signs You May Need a Panel Upgrade
        </h2>
        <p className="mt-3 max-w-2xl text-base text-brand-gray">
          Don&apos;t wait for a failure. These are the most common indicators
          that your electrical panel needs attention.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signItems.map((item) => (
            <li
              key={item.title}
              className="rounded-sm bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                {item.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-brand-blue">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. What We Offer */}
      <Section background="white" id="services">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Panel Upgrade Services We Provide
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              From a straightforward 200-amp upgrade to complex subpanel
              additions and utility coordination, we handle every aspect of the
              project.
            </p>

            <ul className="mt-8 space-y-5">
              {offerItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3.5 w-3.5 text-brand-dark"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-heading text-sm font-bold text-brand-blue">
                      {item.title}
                    </span>
                    <p className="mt-0.5 text-sm leading-relaxed text-brand-gray">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Callout card */}
          <div className="rounded-sm bg-brand-blue p-8 text-white lg:sticky lg:top-24">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Most Common Upgrade
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              200-Amp Service Upgrade
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              The standard for modern Sacramento homes. A 200-amp service
              upgrade gives you the capacity to safely run high-demand
              appliances, charge an EV, and support future additions — all on
              one reliable system.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "Supports Level 2 EV charging",
                "Required for most solar installs",
                "Satisfies home sale & insurance requirements",
                "Completed in as little as one day",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#estimate"
              className="mt-7 inline-block w-full rounded-sm bg-brand-accent px-6 py-3 text-center font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </Section>

      {/* 6. Why Homeowners Trust Peak Electric */}
      <Section background="light" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Homeowners Trust Peak Electric
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            We&apos;ve built our reputation one job at a time. Here&apos;s what
            our customers say sets us apart.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex items-start gap-4 rounded-sm bg-white p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                {point.icon}
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-brand-blue">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 7. Our Process */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Our Panel Upgrade Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            We keep every project straightforward — from the first call to the
            final inspection walkthrough.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 8. Fast turnaround callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Fast &amp; Reliable
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Most Upgrades Completed in 1–2 Business Days
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              We respect your time. Most standard panel upgrades are finished
              within one to two business days — with minimal disruption to your
              daily routine. Financing options are also available to make
              upgrades more accessible.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Schedule Today
            </a>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section background="light" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Panel Upgrade FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 10. Inline contact form */}
      <InlineContactForm
        title="Request Your Free Panel Estimate"
        subtitle="Fill out the form and we'll follow up within one business day. Prefer to talk? Call us at (916) 357-2490."
        background="white"
      />

      {/* 11. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Upgrade Your Panel? Let's Talk."
        body="Call Peak Electrical Contractors at (916) 357-2490 or request a free estimate online. We serve Sacramento and surrounding areas."
        buttonLabel="Get a Free Estimate"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 357-2490"
        secondaryButtonHref="tel:9163572490"
      />
    </>
  );
}
