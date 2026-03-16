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
    "Insurance Panel Replacement Sacramento | Zinsco & FPE Panels | Peak Electrical",
  description:
    "Peak Electrical helps Sacramento homeowners navigate insurance claims for Zinsco, Federal Pacific, and outdated panel replacements. Licensed, permitted, and insured. Free assessment.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/insurance-panel-replacement",
  },
  openGraph: {
    title:
      "Insurance Panel Replacement Sacramento | Zinsco & FPE Panels | Peak Electrical",
    description:
      "Licensed Sacramento electricians specializing in insurance-approved panel replacements. We work directly with your insurance company — Zinsco, FPE, Sylvania, and more. Free assessment.",
    url: "https://peakelectricalsac.com/services/insurance-panel-replacement",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Insurance Panel Replacement Sacramento | Zinsco & FPE Panels | Peak Electrical",
    description:
      "Licensed Sacramento electricians for insurance-approved panel replacements. Zinsco, FPE, Sylvania, and more. Free assessment.",
    images: ["/images/homepage.png"],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const panelTypes = [
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
    title: "Zinsco Panels",
    description:
      "One of the most flagged panels in Sacramento. Zinsco breakers are known to fail to trip under overload, creating serious fire and shock hazards. Many insurers require immediate replacement.",
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
    title: "Federal Pacific Electric (FPE) Panels",
    description:
      "FPE Stab-Lok panels have a documented history of breaker failures and are widely considered a fire risk. Insurance companies frequently deny coverage or require replacement before binding a policy.",
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
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
        />
      </svg>
    ),
    title: "Sylvania Panels",
    description:
      "Certain Sylvania models (particularly those rebadged from Zinsco) share the same design flaws. If your home has a Sylvania panel, a professional evaluation is the first step in any insurance claim.",
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
    title: "Other Outdated or Damaged Panels",
    description:
      "Panels that are corroded, undersized, storm-damaged, or no longer code-compliant may also qualify for an insurance claim — especially during home sales or refinancing.",
  },
];

const processHelpItems = [
  {
    title: "On-Site Evaluation",
    description:
      "We inspect your existing panel, identify the make and model, document all defects, and confirm whether it qualifies for an insurance-covered replacement.",
  },
  {
    title: "Professional Documentation & Written Estimates",
    description:
      "We provide detailed written estimates and photo documentation that meets insurance adjuster standards — the exact paperwork insurers need to approve a claim.",
  },
  {
    title: "Adjuster Communication",
    description:
      "We communicate directly with your insurance adjuster, answer technical questions, and advocate on your behalf so you don't have to navigate the back-and-forth alone.",
  },
  {
    title: "Photo, Report & Code Reference Submission",
    description:
      "We submit NEC code references, manufacturer safety bulletins, and our own field reports to support your claim and eliminate common adjuster objections.",
  },
  {
    title: "Replacement with Permits & Inspections",
    description:
      "Once approved, we pull all required permits, complete the replacement to current NEC standards, and pass the city inspection — protecting your home and your policy.",
  },
  {
    title: "Coordinate Final Inspection",
    description:
      "We schedule and attend the final city inspection with you, then provide a signed inspection certificate you can submit to your insurer to close the claim.",
  },
];

const zinscoPanelFailures = [
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
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    title: "Breakers Fail to Trip",
    description:
      "The most dangerous defect: Zinsco breakers frequently fail to trip under overload or short-circuit conditions, allowing wiring to overheat and ignite inside walls.",
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
    title: "Bus Bar Corrosion & Overheating",
    description:
      "The aluminum bus bar in Zinsco panels is prone to corrosion at the contact points, creating resistance that generates dangerous heat — even when breakers appear to be functioning normally.",
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
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-4 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
    title: "Breakers Melting to Bus Bar",
    description:
      "Heat buildup causes Zinsco breaker housings to physically fuse to the bus bar. This prevents the breaker from being reset or removed — making even routine maintenance a safety hazard.",
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
    title: "NEC Non-Compliance",
    description:
      "Zinsco panels no longer meet current National Electrical Code (NEC) standards. Insurers and home inspectors cite NEC non-compliance as grounds for requiring replacement before issuing or renewing a homeowner policy.",
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
      "CA Contractor License #1075671. Every job is fully covered — protecting your home, your family, and your insurance policy.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: "Insurance Upgrade Experience",
    description:
      "We have helped dozens of Sacramento homeowners navigate the insurance claim process — we know what adjusters require and how to get claims approved efficiently.",
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
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    ),
    title: "Professional Documentation",
    description:
      "We provide photo evidence, written estimates, NEC code citations, and manufacturer safety bulletins — everything an adjuster needs to approve your claim without delays.",
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
    title: "Code-Compliant Replacements",
    description:
      "Every replacement panel is installed to current NEC standards, fully permitted, and independently inspected — giving your insurer every reason to bind or renew your policy.",
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
    title: "Trusted by Homeowners, Realtors & Adjusters",
    description:
      "Sacramento real estate agents and insurance adjusters refer clients to Peak because they know our documentation is thorough and our work passes every inspection.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Assessment",
    description:
      "We visit your home, identify your panel type, document all defects, and confirm whether you have grounds for an insurance claim — at no cost and no obligation.",
  },
  {
    step: 2,
    title: "Documentation & Estimate",
    description:
      "We produce a detailed written estimate, professional photos, and NEC code references formatted specifically for insurance adjuster review.",
  },
  {
    step: 3,
    title: "Insurance Coordination",
    description:
      "We communicate directly with your adjuster, respond to requests for additional information, and advocate for claim approval on your behalf.",
  },
  {
    step: 4,
    title: "Panel Replacement & Inspection",
    description:
      "Once approved, we complete the permitted replacement, pass the city inspection, and provide your insurer with the final sign-off documentation.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Which panels does insurance typically cover for replacement?",
    answer:
      "The most commonly covered panels are Zinsco, Federal Pacific Electric (FPE) Stab-Lok, and certain Sylvania models that share the Zinsco design. Beyond these known-defective brands, insurers may also require replacement of panels that are storm-damaged, severely corroded, or no longer code-compliant. The best way to find out is a free on-site evaluation — we'll tell you exactly where your panel stands.",
  },
  {
    question: "Will my insurance company pay 100% of the replacement cost?",
    answer:
      "It depends on your policy. Many homeowners insurance policies cover the full replacement cost for panels deemed a safety hazard, especially Zinsco and FPE panels. Others cover partial costs or require you to meet a deductible first. We help you understand what documentation your specific insurer requires and maximize your chances of a full approval. We provide the same professional estimates whether insurance is covering the job or not.",
  },
  {
    question: "How long does the insurance process take?",
    answer:
      "From our initial assessment to a completed, inspected panel replacement, the typical timeline is 2–4 weeks — depending on how quickly your insurer responds to the claim and how soon we can schedule the permit and installation. For urgent situations (insurers threatening to cancel your policy), we can often expedite the documentation and installation timeline significantly.",
  },
  {
    question: "Do I still need a permit even if insurance is paying for it?",
    answer:
      "Yes — a permit is required for all panel replacements in Sacramento County and the City of Sacramento, regardless of who pays for the work. In fact, a permitted and inspected installation is exactly what your insurer needs to close the claim. Peak Electrical handles the entire permit application and coordinates the final city inspection, so you don't have to manage anything extra.",
  },
];

const insurancePanelService = serviceSchema({
  name: "Insurance Coordination for Panel Replacements",
  description:
    "Licensed Sacramento electricians specializing in insurance-approved panel replacements for Zinsco, Federal Pacific, Sylvania, and other defective or outdated panels. We handle documentation, adjuster communication, permitted installation, and final inspection coordination.",
  path: "/services/insurance-panel-replacement",
});

const insurancePanelBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Insurance Panel Replacement", path: "/services/insurance-panel-replacement" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InsurancePanelReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insurancePanelService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insurancePanelBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        eyebrow="Our Services"
        headline="Insurance Coordination for Meter Panel Replacements"
        trustLine="Licensed, Bonded, and Insured | Experts in Insurance-Approved Electrical Upgrades"
        subtext="We specialize in helping Sacramento homeowners navigate insurance claims for unsafe electrical panels — especially Zinsco and Federal Pacific. We handle the documentation, work directly with your adjuster, and complete the permitted replacement from start to finish."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Intro */}
      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Sacramento&apos;s Insurance Panel Replacement Specialists
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
            If your insurance company has flagged your electrical panel —
            or if you&apos;ve just discovered you have a Zinsco, Federal
            Pacific, or other known-defective panel — Peak Electrical can
            help. We specialize in guiding homeowners through the insurance
            claim process for unsafe panel replacements, working directly
            with your insurance company so you don&apos;t have to figure it
            out alone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
            From the initial on-site evaluation through professional
            documentation, adjuster communication, permitted installation,
            and final inspection, we manage the entire process. Our goal
            is simple: get your home safe, get your claim approved, and
            make the whole experience as stress-free as possible.
          </p>
        </div>
      </Section>

      {/* 4. Common Panels Covered by Insurance */}
      <Section background="light" id="panels">
        <SectionLabel>Know Your Panel</SectionLabel>
        <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
          Common Panels Covered by Insurance
        </h2>
        <p className="mt-3 max-w-2xl text-base text-brand-gray">
          Certain panel brands have well-documented safety defects that
          insurers widely recognize. If your home has any of the following,
          you may be eligible for an insurance-covered replacement.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {panelTypes.map((item) => (
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

        <p className="mt-8 rounded-sm border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-brand-gray">
          <strong className="text-brand-blue">Real Estate Note:</strong>{" "}
          Many Sacramento home buyers and lenders now require panel
          replacement as a condition of sale or financing when a Zinsco,
          FPE, or other flagged panel is identified during a home
          inspection. We work with realtors and escrow timelines to
          complete replacements quickly.
        </p>
      </Section>

      {/* 5. How We Help with the Insurance Process */}
      <Section background="white" id="process-help">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>How We Help</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              How We Help with the Insurance Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Insurance claims for electrical work can be confusing and
              slow-moving. We&apos;ve been through the process dozens of
              times and know exactly what insurers need to approve a panel
              replacement claim.
            </p>

            <ul className="mt-8 space-y-5">
              {processHelpItems.map((item) => (
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
              Don&apos;t Wait
            </p>
            <h3 className="font-heading mt-2 text-xl font-bold text-white">
              Insurance Cancellation Is a Real Risk
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              Many Sacramento homeowners first learn they have a Zinsco or
              FPE panel when their insurance company sends a notice of
              non-renewal. Acting quickly — with proper documentation — is
              the fastest way to keep your coverage intact.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-blue-100">
              {[
                "We respond to urgent requests promptly",
                "Documentation ready for adjuster review",
                "Permitted work accepted by all major insurers",
                "Final inspection certificate provided",
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
              Get a Free Assessment
            </a>
          </div>
        </div>
      </Section>

      {/* 6. Why Insurance Often Approves Zinsco Panel Replacements */}
      <Section background="light" id="zinsco">
        <div className="text-center">
          <SectionLabel>Understanding the Risk</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Insurance Often Approves Zinsco Panel Replacements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            Zinsco panels have four well-documented failure modes that
            create serious fire and safety hazards. These are the same
            defects insurers cite when requiring replacement or denying
            coverage.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {zinscoPanelFailures.map((item) => (
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

        <p className="mt-8 rounded-sm border border-blue-200 bg-blue-50 p-4 text-sm leading-relaxed text-brand-gray">
          <strong className="text-brand-blue">Important:</strong>{" "}
          Because of these documented failure modes, many major insurance
          carriers refuse to write or renew homeowner policies on homes
          with Zinsco or Federal Pacific panels — regardless of the
          panel&apos;s apparent condition. If your insurer has flagged your
          panel, replacement is typically the only path to maintained
          coverage.
        </p>
      </Section>

      {/* 7. Why Work with Peak */}
      <Section background="white" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Work with Peak Electrical
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            Insurance panel replacements require more than just electrical
            skill — they require experience navigating the claims process
            and producing documentation that satisfies adjusters.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li
              key={point.title}
              className="flex items-start gap-4 rounded-sm bg-brand-light p-6 shadow-sm"
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

      {/* 8. Our Process */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Our Insurance Panel Replacement Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            A clear, four-step process from initial assessment through
            final inspection — with us handling the insurance coordination
            every step of the way.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 9. Dark urgency callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Act Before Your Policy Is Cancelled
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Don&apos;t Let a Panel Issue Cost You Your Coverage
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              If your insurer has sent a notice about your electrical
              panel, you typically have 30–60 days to respond before your
              policy is cancelled or non-renewed. Peak Electrical can
              begin the assessment and documentation process immediately.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section background="light" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Insurance Panel Replacement FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 11. Inline contact form */}
      <InlineContactForm
        title="Find Out if Your Panel Qualifies"
        subtitle="Fill out the form and we'll assess your panel and insurance situation within one business day. Prefer to talk? Call us at (916) 357-2490."
        background="white"
      />

      {/* 12. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Get Your Panel Replaced Through Insurance?"
        body="Call Peak Electrical Contractors at (916) 357-2490 or request a free assessment online. We serve Sacramento and surrounding areas."
        buttonLabel="Find Out if You Qualify"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 357-2490"
        secondaryButtonHref="tel:9163572490"
      />
    </>
  );
}
