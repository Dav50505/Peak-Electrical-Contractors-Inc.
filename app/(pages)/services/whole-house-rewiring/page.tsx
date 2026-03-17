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
    "Whole House Rewiring Sacramento | Licensed Electricians | Peak Electrical",
  description:
    "Licensed Sacramento electricians specializing in whole house rewiring for older homes with knob-and-tube, aluminum, or cloth wiring. Fully permitted and inspected. Free estimates.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/whole-house-rewiring",
  },
  openGraph: {
    title:
      "Whole House Rewiring Sacramento | Licensed Electricians | Peak Electrical",
    description:
      "Licensed, bonded, and insured Sacramento electricians for whole house rewiring. We replace knob-and-tube, aluminum, and outdated wiring with modern copper — fully permitted and inspected.",
    url: "https://peakelectricalsac.com/services/whole-house-rewiring",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Whole House Rewiring Sacramento | Licensed Electricians | Peak Electrical",
    description:
      "Licensed Sacramento electricians for whole house rewiring. Knob-and-tube, aluminum, outdated wiring replaced. Fully permitted and inspected.",
    images: ["/images/homepage.png"],
  },
};

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
      "Lights that flicker or dim when appliances run point to deteriorated wiring that can no longer handle the electrical load of a modern home.",
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
    title: "Frequent Breaker Trips or Blown Fuses",
    description:
      "If your breakers trip regularly or you still have a fuse box, your wiring system may be outdated and unable to meet your home's electrical demands.",
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
    title: "Warm or Sparking Outlets",
    description:
      "Outlets that feel warm to the touch, spark when you plug something in, or show discoloration are serious fire hazards that require immediate attention.",
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
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
    title: "Two-Prong Non-Grounded Outlets",
    description:
      "Homes with only two-prong outlets lack the grounding required by modern electrical code — a safety and insurance risk in today's households.",
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
    title: "Knob-and-Tube or Cloth Wiring",
    description:
      "Older wiring systems — including knob-and-tube or wires with cloth insulation — are fire hazards and often uninsurable. Full replacement is the only lasting solution.",
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
    title: "Burning Smell from Outlets or Walls",
    description:
      "Any burning or plastic smell near outlets, switches, or the electrical panel is an emergency warning sign. Turn off the circuit and call immediately.",
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
    title: "Aluminum Wiring (1960s–70s Homes)",
    description:
      "Homes built between roughly 1965 and 1973 may have aluminum branch circuit wiring, which expands and contracts over time and is associated with a higher fire risk.",
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
    title: "Renovations, Insurance, or Code Upgrades",
    description:
      "Planning a remodel, selling your home, or getting a home insurance policy? Many lenders and insurers now require updated wiring before they'll approve a loan or policy.",
  },
];

const serviceItems = [
  {
    title: "Full Removal of Old Wiring",
    description:
      "We safely remove all outdated wiring — including knob-and-tube, aluminum, or deteriorated cloth-insulated wire — throughout your entire home.",
  },
  {
    title: "New Code-Compliant Copper Wiring",
    description:
      "All new wiring is copper, properly sized, and installed to current NEC and local Sacramento building codes.",
  },
  {
    title: "Grounded Outlets and Switches",
    description:
      "Every outlet and switch is replaced with modern three-prong grounded devices, providing the safety your family and electronics require.",
  },
  {
    title: "GFCI Protection",
    description:
      "Ground-fault circuit interrupter protection is installed in all required areas — kitchens, bathrooms, garages, and outdoor locations — per code.",
  },
  {
    title: "Dedicated Circuits",
    description:
      "New dedicated circuits for high-draw appliances, HVAC systems, EV chargers, and any other loads that require their own protected circuit.",
  },
  {
    title: "Updated Panels and Subpanels",
    description:
      "If your existing panel is outdated or undersized, we upgrade or replace it as part of the rewire — often required for a complete, code-compliant job.",
  },
  {
    title: "Full Permit and Inspection Process",
    description:
      "We handle every permit application and coordinate the final city inspection. All work is independently inspected and stamped — protecting your home's value.",
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
      "CA Contractor License #1075671. Every rewiring project is fully covered — protecting your home, your family, and our crew.",
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
    title: "Official SMUD-Approved Contractor",
    description:
      "As an official SMUD contractor, new circuits installed during a rewire may qualify for energy-efficiency rebates — we'll confirm your eligibility.",
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
    title: "Experienced with Older Sacramento Homes",
    description:
      "We specialize in the unique challenges of rewiring Sacramento's older housing stock — bungalows, ranch homes, and mid-century construction with knob-and-tube or aluminum wiring.",
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
    title: "Minimal Drywall Disruption",
    description:
      "We use careful, targeted techniques to minimize damage to walls and ceilings. Our goal is to complete the rewire with the least possible disruption to your home.",
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
      "Detailed written estimates before any work starts. No hidden fees, no surprises on your final invoice. We explain exactly what's included.",
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
      "Rated 4.7 stars across Yelp and Google with 52+ reviews. Sacramento homeowners trust us to handle one of the most significant electrical projects a home can need.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Assessment",
    description:
      "We visit your home to inspect the existing wiring, identify hazards, and discuss your goals — at no cost and no obligation.",
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description:
      "You receive a clear, itemized written estimate covering all labor, materials, and permit fees before any work begins.",
  },
  {
    step: 3,
    title: "Permitting",
    description:
      "We submit all permit applications to Sacramento County or the City on your behalf and coordinate with your utility provider as needed.",
  },
  {
    step: 4,
    title: "Professional Rewiring",
    description:
      "Our licensed electricians remove all old wiring and install new code-compliant copper throughout your home, working carefully to minimize drywall damage.",
  },
  {
    step: 5,
    title: "Final Inspection & Walkthrough",
    description:
      "We schedule and pass the city inspection, then walk you through every circuit and outlet so you feel confident in your home's new electrical system.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How much does whole house rewiring cost in Sacramento?",
    answer:
      "Whole house rewiring costs vary based on the size of your home, the type of existing wiring, and whether a panel upgrade is needed. Most Sacramento homes range from $8,000 to $20,000 for a complete rewire. We provide a detailed written estimate after a free in-home assessment — no guessing, no surprises. Financing options are also available.",
  },
  {
    question: "How long does whole house rewiring take?",
    answer:
      "Most whole house rewiring projects take between 3 and 10 business days depending on the size and complexity of the home. Vacant homes can often be completed faster. For occupied homes, we use a phased approach — rewiring room by room — so you can continue living there throughout the project with minimal disruption.",
  },
  {
    question: "Do I need to move out during a whole house rewire?",
    answer:
      "Not necessarily. For most occupied homes, we can work in phases so that parts of your home remain powered and livable throughout the project. There will be periods when specific circuits or rooms are temporarily without power. We coordinate the schedule with you in advance so there are no surprises. Vacant homes can be rewired more quickly since we can work without those constraints.",
  },
];

const wholeHouseRewiringService = serviceSchema({
  name: "Whole House Rewiring",
  description:
    "Licensed, bonded, and insured Sacramento electricians specializing in whole house rewiring for older homes with knob-and-tube, aluminum, or cloth wiring. Full copper rewire, grounded outlets, GFCI protection, dedicated circuits, and panel upgrades — fully permitted and inspected.",
  path: "/services/whole-house-rewiring",
});

const wholeHouseRewiringBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Whole House Rewiring", path: "/services/whole-house-rewiring" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WholeHouseRewiringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wholeHouseRewiringService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wholeHouseRewiringBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        backgroundImage="/images/Services/Whole%20House%20Rewiring.png"
        backgroundImageAlt="Whole house rewiring service"
        eyebrow="Our Services"
        headline="Whole House Rewiring Services"
        trustLine="Peak Electrical Contractors Inc. | Sacramento, CA"
        subtext="Outdated, damaged, or unsafe wiring replaced with modern copper — protecting your family, increasing your home's value, and bringing everything up to current code."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Sacramento&apos;s Whole House Rewiring Specialists
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
            Peak Electrical Contractors specializes in whole house rewiring for
            Sacramento homeowners dealing with outdated, damaged, or unsafe
            wiring. Whether your home has knob-and-tube, aluminum branch wiring,
            or deteriorated cloth insulation, we replace it entirely with new
            code-compliant copper — protecting your family, satisfying insurance
            requirements, and modernizing your home&apos;s electrical system for
            decades to come.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
            We know a rewire sounds overwhelming. That&apos;s why we keep the
            process clear and stress-free from the first assessment through the
            final city inspection. Every project is fully permitted, inspected,
            and backed by our reputation for clean, professional work.
          </p>
        </div>
      </Section>

      {/* 4. Signs Your Home May Need Rewiring */}
      <Section background="light" id="signs">
        <SectionLabel>Know the Warning Signs</SectionLabel>
        <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
          Signs Your Home May Need Rewiring
        </h2>
        <p className="mt-3 max-w-2xl text-base text-brand-gray">
          Don&apos;t wait for a fire or failed inspection. These are the most
          common indicators that your home&apos;s wiring needs to be replaced.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* 5. Our Whole House Rewire Services Include */}
      <Section background="white" id="services">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Our Whole House Rewire Services Include
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              A complete rewire covers everything from pulling permits to
              replacing every circuit in your home. Here&apos;s what&apos;s
              included in a standard whole house rewiring project.
            </p>

            <ul className="mt-8 space-y-5">
              {serviceItems.map((item) => (
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
              Our Commitment
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              Minimizing Disruption to Your Home
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Whole house rewiring requires accessing walls and ceilings — but
              we work carefully and deliberately to limit the impact on your
              living space. Our crew protects floors, uses targeted access
              points, and cleans up completely before leaving each day.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "Targeted, minimal drywall access",
                "Floors and furniture protected throughout",
                "Phased approach keeps parts of home live",
                "Daily cleanup — no mess left overnight",
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

      {/* 6. Why Choose Peak */}
      <Section background="light" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Sacramento Homeowners Choose Peak
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            Whole house rewiring is a significant investment. Here&apos;s what
            sets Peak Electrical apart for this kind of project.
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

      {/* 7. How the Rewire Process Works */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            How the Rewire Process Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            We keep every project transparent — from the first walkthrough to
            the final inspection sign-off.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 8. Timeline callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Project Timeline
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Most Rewires Complete in 3–10 Business Days
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              Timeline depends on the size and complexity of your home. Vacant
              homes can often be completed faster with uninterrupted access.
              For occupied homes, we use a phased room-by-room approach — so
              you can keep living there throughout the project without extended
              power outages. Financing options are available.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Schedule a Free Assessment
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
              Whole House Rewiring FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 10. Inline contact form */}
      <InlineContactForm
        title="Request Your Free Rewiring Estimate"
        subtitle="Fill out the form and we'll follow up within one business day. Prefer to talk? Call us at (916) 584-2124."
        background="white"
      />

      {/* 11. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Rewire? Let's Talk."
        body="Call Peak Electrical Contractors at (916) 584-2124 or request a free estimate online. We serve Sacramento and surrounding areas."
        buttonLabel="Get a Free Estimate"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 584-2124"
        secondaryButtonHref="tel:+19165842124"
      />
    </>
  );
}
