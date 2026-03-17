import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProcessSteps, type ProcessStep } from "@/components/sections/ProcessSteps";
import { FAQAccordion, type FAQItem } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";
import { InlineContactForm } from "@/components/sections/InlineContactForm";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SmudBadge } from "@/components/ui/SmudBadge";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "SMUD Electrical Rebates Sacramento | Up to $2,500 | Peak Electrical Contractors",
  description:
    "Official SMUD contractor in Sacramento helping homeowners claim up to $2,500 in electrical rebates for EV chargers, heat pump water heaters, HVAC, and more. Peak Electrical handles all the paperwork.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/smud-rebates",
  },
  openGraph: {
    title:
      "SMUD Electrical Rebates Sacramento | Up to $2,500 | Peak Electrical Contractors",
    description:
      "Licensed SMUD contractor serving Sacramento. Qualify for up to $2,500 in rebates on EV chargers, heat pumps, and electrification upgrades. Peak Electrical handles the paperwork.",
    url: "https://peakelectricalsac.com/services/smud-rebates",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SMUD Electrical Rebates Sacramento | Up to $2,500 | Peak Electrical Contractors",
    description:
      "Licensed SMUD contractor serving Sacramento. Qualify for up to $2,500 in rebates on EV chargers, heat pumps, and electrification upgrades.",
    images: ["/images/homepage.png"],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const eligibleUpgrades = [
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
    title: "EV Charger Circuits",
    description:
      "SMUD's Charge@Home program offers rebates on dedicated circuits for Level 2 EV chargers — up to $500 back on qualifying installations.",
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Heat Pump Water Heaters",
    description:
      "Upgrade from a gas water heater to an efficient heat pump model and qualify for a circuit installation rebate of up to $2,000.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Heat Pump HVAC Systems",
    description:
      "Switching from gas heating to a high-efficiency heat pump qualifies for rebate assistance under the Home Electrification Rebate program.",
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
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    title: "Electric Cooking Appliances",
    description:
      "Replace a gas range or cooktop with an electric or induction model and potentially qualify for SMUD's Home Electrification Rebate program.",
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
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Electric Dryers",
    description:
      "Gas-to-electric dryer conversions may qualify as part of a full home electrification package, with new 240V circuit installation included.",
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
    title: "Charge@Home & Home Electrification Programs",
    description:
      "SMUD offers two main rebate programs — Charge@Home for EV charging circuits and the Home Electrification Rebate for full household upgrades. Peak navigates both on your behalf.",
  },
];

const rebateAmounts = [
  {
    service: "EV Charger Circuit",
    amount: "Up to $500",
    program: "Charge@Home Program",
    description: "Dedicated 40A 240V circuit for Level 2 EV charger installation",
  },
  {
    service: "Water Heater Circuit",
    amount: "Up to $2,000",
    program: "Home Electrification Rebate",
    description: "New circuit for heat pump water heater replacing gas appliance",
  },
  {
    service: "Full Electrification Upgrades",
    amount: "Up to $2,500",
    program: "Combined Programs",
    description: "Comprehensive gas-to-electric conversion including HVAC, water heater, and cooking",
  },
];

const makeItEasyItems = [
  {
    title: "Verify Your Eligibility",
    description:
      "We assess your home, existing panel, and planned upgrades to confirm which SMUD rebate programs you qualify for before any work begins.",
  },
  {
    title: "Submit the Rebate Application",
    description:
      "Peak handles all SMUD paperwork on your behalf — applications, documentation, and program enrollment so you don't have to navigate it alone.",
  },
  {
    title: "Install to SMUD Specifications",
    description:
      "As an official SMUD contractor, our work meets all program requirements and technical specifications necessary for rebate approval.",
  },
  {
    title: "Coordinate Required Inspections",
    description:
      "We schedule and manage all required city permits and SMUD inspections, ensuring nothing falls through the cracks.",
  },
  {
    title: "Apply Rebate as an Upfront Discount",
    description:
      "In many cases, SMUD rebates can be applied directly as a discount off your invoice — meaning you pay less the day of installation.",
  },
];

const commonServicesItems = [
  {
    icon: (
      <svg
        className="h-7 w-7"
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
    title: "EV Charger Circuit",
    subtitle: "Up to $500 rebate",
    description:
      "Dedicated 40A 240V circuit installation for Level 2 EV chargers. Must meet SMUD Charge@Home specifications. Peak submits all required documentation.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Heat Pump Water Heater Circuit",
    subtitle: "Up to $2,000 rebate",
    description:
      "New 240V dedicated circuit for heat pump water heaters replacing gas units. Qualifies under the Home Electrification Rebate program.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Heat Pump HVAC Circuit",
    subtitle: "Home Electrification Rebate",
    description:
      "Dedicated circuit and electrical work for heat pump HVAC system installation. We ensure all wiring meets utility and code requirements.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
    title: "Gas-to-Electric Conversion",
    subtitle: "Ranges, dryers & more",
    description:
      "Complete electrical work for converting gas ranges, dryers, and other appliances to electric. May qualify as part of a full home electrification package.",
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
    title: "Official SMUD-Approved Contractor",
    description:
      "Peak Electric is an official SMUD contractor — meaning we're authorized to install to SMUD specifications and submit rebate applications directly.",
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
    title: "Licensed, Bonded & Insured",
    description:
      "CA Contractor License #1075671. Every job is fully covered — protecting your home, your rebate eligibility, and our crew.",
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
    title: "We Handle the Paperwork",
    description:
      "Rebate applications, SMUD documentation, permit filings — we take care of everything so you don't have to navigate the process alone.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Rebate Applied as Upfront Discount",
    description:
      "In many cases, we can apply your SMUD rebate directly to your invoice — so you pay less the day the work is done, with no waiting.",
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
    title: "Permitted Work, Every Time",
    description:
      "All electrical work is fully permitted and inspected — a requirement for rebate approval and a protection for your home's value.",
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
    title: "Friendly, Local Team",
    description:
      "We're a Sacramento-based, family-owned business. Our electricians are courteous, knowledgeable about local SMUD programs, and happy to explain everything.",
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
      "Rated 4.7 stars across Yelp and Google with 52+ reviews. Homeowners throughout Sacramento trust us to maximize their rebate savings.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We visit your home, review your existing electrical setup, and confirm which SMUD rebate programs you're eligible for — at no cost and no obligation.",
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description:
      "You receive a clear, itemized written estimate showing the total cost, the applicable rebate amount, and your net out-of-pocket cost.",
  },
  {
    step: 3,
    title: "Rebate Application & Permitting",
    description:
      "We submit your SMUD rebate application and pull all required permits before any work begins — nothing falls through the cracks.",
  },
  {
    step: 4,
    title: "Professional Installation",
    description:
      "Our licensed electricians complete all work to SMUD specifications and local code requirements, typically within one business day.",
  },
  {
    step: 5,
    title: "Inspection & Rebate Confirmation",
    description:
      "We coordinate the final city inspection and confirm your rebate approval with SMUD — then walk you through the completed work.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the SMUD Charge@Home program?",
    answer:
      "The SMUD Charge@Home program offers rebates to Sacramento-area homeowners who install a dedicated 240V circuit for a Level 2 EV charger. The rebate is up to $500 and is available through SMUD-approved contractors like Peak Electrical. The program helps offset the cost of the electrical work needed to safely charge an electric vehicle at home.",
  },
  {
    question: "Are there other SMUD rebates available beyond EV chargers?",
    answer:
      "Yes — SMUD's Home Electrification Rebate program covers a range of upgrades including heat pump water heaters (up to $2,000), heat pump HVAC systems, electric cooking appliances, and electric dryers. Combined with the Charge@Home EV rebate, qualifying homeowners can receive up to $2,500 or more in total rebates. Program availability and amounts may change, so we always verify current eligibility before starting work.",
  },
  {
    question: "How do I know if I qualify for a SMUD rebate?",
    answer:
      "To qualify, your home must be in SMUD's service territory (most of Sacramento County), and the work must be performed by an approved SMUD contractor using qualifying equipment. Specific requirements vary by program — for example, the Charge@Home rebate requires a 40-amp maximum circuit for the EV charger. The easiest way to find out is to call us for a free consultation. We'll assess your home and confirm your eligibility before any work begins.",
  },
  {
    question: "Do I have to handle the SMUD paperwork myself?",
    answer:
      "No — that's one of the main benefits of working with an official SMUD contractor like Peak Electrical. We submit the rebate application on your behalf, provide all required documentation, and coordinate with SMUD throughout the process. You simply approve the work and collect the savings.",
  },
  {
    question: "Can the SMUD rebate be applied as an upfront discount on my invoice?",
    answer:
      "In many cases, yes. As an approved SMUD contractor, Peak Electrical can often apply the rebate amount directly as a discount off your invoice at the time of installation — rather than requiring you to wait for a rebate check. This depends on the specific program and current SMUD policies, which we confirm during your free consultation.",
  },
];

const smudRebatesService = serviceSchema({
  name: "SMUD Contractor & Electrical Rebates",
  description:
    "Official SMUD-approved electrical contractor helping Sacramento homeowners claim rebates of up to $2,500 for EV charger circuits, heat pump water heaters, heat pump HVAC, and full home electrification upgrades. Peak Electrical handles all paperwork and rebate applications.",
  path: "/services/smud-rebates",
});

const smudRebatesBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "SMUD Rebates", path: "/services/smud-rebates" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SmudRebatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smudRebatesService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smudRebatesBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        backgroundImage="/images/Services/SMUD-rebates.png"
        backgroundImageAlt="SMUD electrical rebates"
        eyebrow="Our Services"
        headline="SMUD Contractor | Electrical Rebates Up to $2,500"
        trustLine="Licensed, Bonded, and Insured | Official SMUD Contractor"
        subtext="Peak Electrical is an official SMUD-approved contractor serving Sacramento. Qualifying electrical installs may receive up to $2,000–$2,500 in rebates — and we handle all the paperwork."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />
      <div className="flex justify-center py-4 bg-brand-light-gray">
        <SmudBadge />
      </div>

      {/* 3. Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Sacramento&apos;s Trusted SMUD Electrical Contractor
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
            Peak Electrical Contractors is an official SMUD-approved contractor
            serving the Sacramento area. That means we&apos;re authorized to
            perform SMUD rebate-eligible installations and submit applications
            directly on your behalf — so you never have to navigate the process
            alone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
            Whether you&apos;re adding an EV charger, upgrading to a heat pump
            water heater, or converting from gas to electric appliances,
            qualifying installs may receive up to $2,000–$2,500 in rebates.
            We&apos;ll confirm your eligibility, handle the paperwork, and in
            many cases apply the rebate as a direct discount off your invoice.
          </p>
        </div>
      </Section>

      {/* 4. How SMUD Rebates Work */}
      <Section background="light" id="how-it-works">
        <SectionLabel>Eligible Upgrades</SectionLabel>
        <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
          How SMUD Rebates Work
        </h2>
        <p className="mt-3 max-w-2xl text-base text-brand-gray">
          SMUD offers rebates for electrical work tied to energy-efficient
          upgrades. Here are the most common projects that qualify.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eligibleUpgrades.map((item) => (
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

      {/* 5. Rebate amounts callout */}
      <Section background="white" id="rebate-amounts">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>Rebate Amounts</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              How Much Can You Save?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Rebate amounts vary by program and the type of upgrade. Here&apos;s
              a summary of typical savings for SMUD customers in Sacramento.
            </p>

            <ul className="mt-8 space-y-4">
              {rebateAmounts.map((item) => (
                <li
                  key={item.service}
                  className="rounded-sm border border-gray-100 bg-gray-50 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-sm font-bold text-brand-blue">
                        {item.service}
                      </h3>
                      <p className="mt-0.5 text-xs text-brand-gray">
                        {item.program}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                        {item.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-sm bg-brand-accent px-3 py-1.5 font-heading text-sm font-bold text-brand-dark whitespace-nowrap">
                      {item.amount}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs leading-relaxed text-brand-gray">
              * Rebate amounts are subject to change based on SMUD program
              guidelines and funding availability. Peak Electrical will confirm
              current amounts during your free consultation.
            </p>
          </div>

          {/* Callout card */}
          <div className="rounded-sm bg-brand-blue p-8 text-white lg:sticky lg:top-24">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              SMUD-Approved Contractor
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              We Handle Everything
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              As an official SMUD contractor, Peak Electrical manages the entire
              rebate process — from eligibility verification to application
              submission to final inspection coordination.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "Rebate applied as upfront discount",
                "All paperwork handled for you",
                "Work installed to SMUD specs",
                "Fully permitted and inspected",
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
              Find Out if You Qualify
            </a>
          </div>
        </div>
      </Section>

      {/* 6. How We Make It Easy */}
      <Section background="light" id="process-easy">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              How We Make Rebates Easy
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              SMUD&apos;s rebate programs are genuinely valuable — but the
              paperwork and program requirements can be confusing. As an approved
              contractor, we simplify the whole process.
            </p>
          </div>

          <ul className="space-y-5">
            {makeItEasyItems.map((item, index) => (
              <li key={item.title} className="flex items-start gap-4">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent font-heading text-xs font-bold text-brand-dark"
                  aria-hidden="true"
                >
                  {index + 1}
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
      </Section>

      {/* 7. SMUD Rebates We Commonly Help With */}
      <Section background="white" id="common-services">
        <div className="mb-10 text-center">
          <SectionLabel>Common Projects</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            SMUD Rebates We Commonly Help With
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            These are the most frequent rebate-eligible electrical projects we
            complete for Sacramento homeowners.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {commonServicesItems.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-5 rounded-sm border border-gray-100 p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-0.5 font-heading text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 8. Why Choose Peak */}
      <Section background="light" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Sacramento Homeowners Choose Peak
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            We&apos;re not just an electrician — we&apos;re your SMUD rebate
            partner. Here&apos;s what makes us the right choice for
            rebate-eligible electrical work.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trustPoints.slice(0, 6).map((point) => (
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

        {/* 7th trust point — featured */}
        <div className="mt-6 flex items-start gap-4 rounded-sm bg-white p-6 shadow-sm sm:mx-auto sm:max-w-lg">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
            {trustPoints[6].icon}
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-brand-blue">
              {trustPoints[6].title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-brand-gray">
              {trustPoints[6].description}
            </p>
          </div>
        </div>
      </Section>

      {/* 9. Our Process */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Our SMUD Rebate Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            From your first call to final inspection, we keep the process
            simple, transparent, and stress-free.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 10. "Find Out if You Qualify" dark callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Free Consultation
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Find Out If You Qualify for SMUD Rebates
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              Most Sacramento homeowners with SMUD service qualify for at least
              one rebate program. Call us or request a free estimate and
              we&apos;ll confirm your eligibility at no cost and no obligation.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Check My Eligibility
            </a>
          </div>
        </div>
      </Section>

      {/* 11. FAQ */}
      <Section background="light" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              SMUD Rebate FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 12. Inline contact form */}
      <InlineContactForm
        title="Find Out if You Qualify for SMUD Rebates"
        subtitle="Fill out the form and we'll confirm your eligibility within one business day. Prefer to talk? Call us at (916) 357-2490."
        background="white"
      />

      {/* 13. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Claim Your SMUD Rebate? Let's Talk."
        body="Call Peak Electrical Contractors at (916) 357-2490 or request a free estimate online. We'll confirm your eligibility and handle the paperwork from start to finish."
        buttonLabel="Get a Free Estimate"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 357-2490"
        secondaryButtonHref="tel:9163572490"
      />
    </>
  );
}
