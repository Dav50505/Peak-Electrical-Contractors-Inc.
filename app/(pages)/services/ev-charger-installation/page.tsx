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
    "EV Charger Installation Sacramento | SMUD Rebate Eligible | Peak Electrical",
  description:
    "Licensed Sacramento electricians for Level 2 EV charger installation at homes and businesses. SMUD Charge@Home rebate up to $500. Tesla, ChargePoint, JuiceBox, and all major brands. Permitted and inspected. Free estimates.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/ev-charger-installation",
  },
  openGraph: {
    title:
      "EV Charger Installation Sacramento | SMUD Rebate Eligible | Peak Electrical",
    description:
      "Licensed, bonded, and insured Sacramento electricians for Level 2 EV charger installation. SMUD Charge@Home rebate up to $500. All brands supported. Permitted and inspected.",
    url: "https://peakelectricalsac.com/services/ev-charger-installation",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EV Charger Installation Sacramento | SMUD Rebate Eligible | Peak Electrical",
    description:
      "Licensed Sacramento electricians for Level 2 EV charger installation. SMUD Charge@Home rebate up to $500. Free estimates.",
    images: ["/images/homepage.png"],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const whyChooseItems = [
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
      "As an authorized SMUD contractor, we install to SMUD specifications and submit Charge@Home rebate applications directly — no extra steps for you.",
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
      "CA Contractor License #1075671. Every EV charger installation is fully covered — protecting your home, your car, and our crew.",
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
    title: "Permit Handling — Start to Finish",
    description:
      "Every Level 2 charger installation requires a permit. We handle the full permit application with Sacramento County or the City so you don't have to.",
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
    title: "SMUD Utility Coordination",
    description:
      "We coordinate directly with SMUD for any service upgrades or meter work required — ensuring your installation meets utility specs from day one.",
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
      "Detailed written estimates before any work starts. No hidden fees, no surprise charges on your final invoice.",
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
    title: "Clean, Respectful Job Sites",
    description:
      "We protect your garage, walls, and driveway during installation and clean up completely before we leave — no mess, no damage.",
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
    title: "Top-Rated Sacramento Electricians",
    description:
      "Rated 4.7 stars across Yelp and Google with 52+ reviews. Sacramento homeowners and businesses trust us to get the job done right.",
  },
];

const serviceItems = [
  {
    title: "Level 2 (240V) Home Charger Installation",
    description:
      "The most common upgrade — a dedicated 240V, 40–50 amp circuit that charges most EVs overnight. Works with any EV brand.",
  },
  {
    title: "Tesla Wall Connector Installation",
    description:
      "Factory-certified wiring and mounting for Tesla Wall Connectors, including the optimal 60A circuit for maximum Tesla charging speed.",
  },
  {
    title: "ChargePoint, JuiceBox & Wallbox Installation",
    description:
      "We install all major EV charger brands — ChargePoint, Enel X JuiceBox, Wallbox, Emporia, and more — to manufacturer specifications.",
  },
  {
    title: "Commercial & Multi-Unit EV Charging",
    description:
      "Fleet charging solutions, multi-station setups, and EV-ready circuits for apartments, condos, office buildings, and commercial properties.",
  },
  {
    title: "Panel Upgrades When Needed",
    description:
      "If your panel doesn't have room for a charger circuit, we handle the upgrade too — and can often combine both jobs into a single visit.",
  },
  {
    title: "SMUD Rebate Application Assistance",
    description:
      "As an official SMUD contractor, we submit your Charge@Home rebate application and apply the savings as a direct discount off your invoice.",
  },
];

const pricingFactors = [
  {
    factor: "Distance from Panel",
    detail:
      "Longer wire runs from your electrical panel to the charger location increase material and labor costs.",
  },
  {
    factor: "Panel Upgrade Requirement",
    detail:
      "If your existing panel is full or undersized, adding a panel upgrade to the project affects total cost.",
  },
  {
    factor: "Charger Brand & Amperage",
    detail:
      "Higher-amperage chargers (60A for Tesla) require larger wire and breakers than standard 40A setups.",
  },
  {
    factor: "SMUD Rebate Eligibility",
    detail:
      "The SMUD Charge@Home rebate (up to $500) can significantly reduce your out-of-pocket cost when applied at installation.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We assess your panel, discuss charger placement, and confirm SMUD rebate eligibility — at no cost and no obligation.",
  },
  {
    step: 2,
    title: "Permitting & Rebate Application",
    description:
      "We pull the required permit with the city or county and submit your SMUD Charge@Home rebate application before any work begins.",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Our licensed electricians install the circuit and mount your charger to manufacturer specs — typically completed in a single day.",
  },
  {
    step: 4,
    title: "Inspection & Final Setup",
    description:
      "We schedule and pass the city inspection, confirm your rebate with SMUD, and walk you through your new charging setup.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need a permit to install an EV charger in Sacramento?",
    answer:
      "Yes — a permit is required for Level 2 (240V) EV charger installations in Sacramento County and the City of Sacramento. This ensures the work is inspected and code-compliant, which also protects your home's insurance coverage and resale value. Peak Electrical handles the full permit application and coordinates the final inspection on your behalf.",
  },
  {
    question: "How does the SMUD Charge@Home rebate work?",
    answer:
      "SMUD's Charge@Home program offers a rebate of up to $500 for the installation of a dedicated 240V circuit for a Level 2 EV charger. Your home must be in SMUD's service territory and the work must be performed by an approved SMUD contractor using a qualifying 40-amp circuit. As an official SMUD contractor, Peak Electrical submits your application and can often apply the rebate as a direct discount off your invoice at the time of installation.",
  },
  {
    question: "What's the difference between Level 1 and Level 2 EV charging?",
    answer:
      "Level 1 charging uses a standard 120V household outlet and adds roughly 3–5 miles of range per hour — enough for plugin hybrids but slow for most full EVs. Level 2 charging uses a dedicated 240V circuit and adds 20–30+ miles per hour, depending on your vehicle. Most EV owners switch to Level 2 to charge overnight and wake up to a full battery every morning.",
  },
  {
    question: "Will I need a panel upgrade to add an EV charger?",
    answer:
      "Not always — it depends on your panel's current capacity and how many open breaker slots are available. Many modern 200-amp panels have room for an EV charger circuit without any additional work. Older 100-amp panels or panels that are already near capacity may need an upgrade. We assess your panel during the free consultation and recommend the most cost-effective path. If an upgrade is needed, you may qualify for additional SMUD rebates that offset some of the cost.",
  },
];

const evChargerService = serviceSchema({
  name: "EV Charger Installation",
  description:
    "Licensed, bonded, and insured Sacramento electricians specializing in Level 2 EV charger installation for homes and businesses. Official SMUD-approved contractor for Charge@Home rebates up to $500. All major charger brands supported — Tesla, ChargePoint, JuiceBox, Wallbox, and more.",
  path: "/services/ev-charger-installation",
});

const evChargerBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "EV Charger Installation", path: "/services/ev-charger-installation" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EvChargerInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evChargerService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evChargerBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        backgroundImage="/images/Services/EV%20Charger%20Installation.png"
        backgroundImageAlt="EV charger installation in garage"
        eyebrow="Our Services"
        headline="EV Charger Installation for Homes and Businesses"
        trustLine="Licensed, Bonded, and Insured | Trusted SMUD Contractor"
        subtext="Fast, code-compliant Level 2 EV charger installation in Sacramento for residential, commercial, and multi-unit properties. SMUD Charge@Home rebate up to $500 — we handle everything."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />
      <div className="flex justify-center py-4 bg-brand-light-gray">
        <SmudBadge />
      </div>

      {/* 3. Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Fast, Code-Compliant EV Charger Installation in Sacramento
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
            Peak Electrical Contractors installs Level 2 EV chargers for
            homeowners, businesses, and multi-unit properties throughout the
            Sacramento area. Whether you drive a Tesla, Rivian, Ford F-150
            Lightning, or any other EV, we provide a safe, permitted
            installation completed in as little as one day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
            As an official SMUD-approved contractor, we also handle your
            Charge@Home rebate application — qualifying installations can
            receive up to $500 back, often applied as an instant discount off
            your invoice. No paperwork hassle. No waiting.
          </p>
        </div>
      </Section>

      {/* 4. Why Choose Peak */}
      <Section background="light" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Sacramento Chooses Peak for EV Charger Installation
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            From SMUD rebate handling to same-day installations, here&apos;s
            what sets us apart.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.slice(0, 6).map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-sm bg-white p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* 7th item — featured */}
        <div className="mt-6 flex items-start gap-4 rounded-sm bg-white p-6 shadow-sm sm:mx-auto sm:max-w-lg">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
            {whyChooseItems[6].icon}
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-brand-blue">
              {whyChooseItems[6].title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-brand-gray">
              {whyChooseItems[6].description}
            </p>
          </div>
        </div>
      </Section>

      {/* 5. Our EV Charger Installation Services */}
      <Section background="white" id="services">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>What We Install</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Our EV Charger Installation Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              From a single home charger to a multi-station commercial fleet
              setup, we handle every aspect of the installation.
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
              Most Popular Install
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              40A Level 2 Home Charger
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              The standard for most Sacramento homeowners. A 40-amp, 240V
              dedicated circuit gives you 20–30+ miles of range per hour —
              enough to fully charge most EVs overnight.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "Compatible with all major EV brands",
                "Qualifies for SMUD Charge@Home rebate",
                "Typically installed in a single day",
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
              Get a Free Estimate
            </a>
          </div>
        </div>
      </Section>

      {/* 6. SMUD Rebates callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              SMUD Charge@Home Program
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Up to $500 Back on Your EV Charger Circuit
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              Sacramento homeowners in SMUD&apos;s service territory can
              receive up to $500 in rebates for a qualifying Level 2 charger
              circuit. As an official SMUD contractor, we submit all
              documentation and can apply the rebate as an instant discount off
              your invoice — no waiting for a rebate check.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Find Out if You Qualify
            </a>
          </div>
        </div>
      </Section>

      {/* 7. Pricing section */}
      <Section background="light" id="pricing">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              EV Charger Installation Cost in Sacramento
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Most residential EV charger installations in Sacramento range from{" "}
              <strong className="font-semibold text-brand-blue">
                $1,200 to $2,500
              </strong>{" "}
              before any SMUD rebates. The final price depends on several
              factors specific to your home and setup.
            </p>

            <ul className="mt-8 space-y-4">
              {pricingFactors.map((item) => (
                <li
                  key={item.factor}
                  className="rounded-sm border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-heading text-sm font-bold text-brand-blue">
                    {item.factor}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Estimate callout */}
          <div className="rounded-sm bg-brand-blue p-8 text-white lg:sticky lg:top-24">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Free Estimate
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              Get an Exact Price for Your Home
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Every home is different. The fastest way to know your exact cost
              is a free, no-obligation consultation. We&apos;ll assess your
              panel, charger location, and rebate eligibility — and give you a
              written estimate with no surprises.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "No-obligation written estimate",
                "SMUD rebate applied to your invoice",
                "Typical install completed same day",
                "Financing options available",
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
              Request a Free Estimate
            </a>
          </div>
        </div>
      </Section>

      {/* 8. Our Process */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            How the EV Charger Installation Process Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            From the first call to a fully charged car — here&apos;s what to
            expect when you work with Peak Electrical.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 9. FAQ */}
      <Section background="light" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              EV Charger Installation FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 10. Inline contact form */}
      <InlineContactForm
        title="Request Your Free EV Charger Estimate"
        subtitle="Fill out the form and we'll follow up within one business day. Prefer to talk? Call us at (916) 584-2124."
        background="white"
      />

      {/* 11. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Power Up Your EV? Let's Talk."
        body="Call Peak Electrical Contractors at (916) 584-2124 or request a free estimate online. We serve Sacramento and surrounding areas."
        buttonLabel="Get a Free Estimate"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 584-2124"
        secondaryButtonHref="tel:+19165842124"
      />
    </>
  );
}
