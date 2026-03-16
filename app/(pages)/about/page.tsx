import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "About Peak Electrical Contractors | Sacramento Family-Owned Electricians",
  description:
    "Peak Electrical Contractors is a family-owned Sacramento electrical company with 10+ years of experience. Licensed #1075671, bonded, insured, and SMUD-approved. Learn our story, values, and credentials.",
  alternates: {
    canonical: "https://peakelectricalsac.com/about",
  },
  openGraph: {
    title:
      "About Peak Electrical Contractors | Sacramento Family-Owned Electricians",
    description:
      "Family-owned Sacramento electricians since 2013. Licensed, bonded, insured, and SMUD-approved. Panel upgrades, EV chargers, rewiring, and more.",
    url: "https://peakelectricalsac.com/about",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Peak Electrical Contractors | Sacramento Family-Owned Electricians",
    description:
      "Family-owned Sacramento electricians since 2013. Licensed, bonded, insured, and SMUD-approved.",
    images: ["/images/homepage.png"],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const differentiators = [
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
      "CA Contractor License #1075671. Every project is fully covered — protecting your home, your investment, and our crew from start to finish.",
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
    title: "Upfront, Honest Pricing",
    description:
      "We provide detailed written estimates before any work begins. No hidden fees, no surprises on your final invoice — just clear, fair pricing.",
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
    title: "Permitted & Inspected Work",
    description:
      "Every applicable job is pulled with the proper permits and passes city inspection — protecting your home's value and keeping your insurance valid.",
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Locally Owned & Operated",
    description:
      "We live and work in Sacramento. Our reputation is built entirely on word-of-mouth and repeat customers — our neighbors are our business.",
  },
];

const values = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Integrity",
    description:
      "We tell you what your home actually needs — not what generates the biggest invoice. Honest assessments, honest pricing, every time.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: "Craftsmanship",
    description:
      "We take pride in clean installs, tidy job sites, and work that's built to last decades — not just pass inspection and move on.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    title: "Communication",
    description:
      "We keep you informed at every step — from the initial estimate through the final inspection walkthrough. No surprises, no radio silence.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Safety",
    description:
      "Electrical work done wrong is dangerous. We follow code to the letter, pull every required permit, and never cut corners on safety — period.",
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Community",
    description:
      "Sacramento is our home. We sponsor local schools, support our neighbors, and reinvest in the communities we serve every day.",
  },
];

const credentials = [
  {
    label: "CA Contractor License",
    value: "#1075671",
    sub: "Verify at CSLB.ca.gov",
    href: "https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx",
  },
  {
    label: "SMUD Approved",
    value: "Official SMUD Contractor",
    sub: "Charge@Home & Home Electrification",
    href: null,
  },
  {
    label: "BuildZoom Score",
    value: "108 / 100",
    sub: "Top 10% of California contractors",
    href: "https://www.buildzoom.com",
  },
  {
    label: "Bonded & Insured",
    value: "Fully Covered",
    sub: "General liability + workers comp",
    href: null,
  },
];

const aboutBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        eyebrow="About Us"
        headline="Sacramento's Trusted Family Electricians"
        trustLine="Licensed #1075671 · Bonded & Insured · SMUD-Approved Contractor"
        subtext="For over a decade, Peak Electrical Contractors has been Sacramento's go-to team for safe, permitted, and fairly priced electrical work — from panel upgrades to EV chargers and everything in between."
        backgroundImage="/images/About.webp"
        backgroundImageAlt="Peak Electrical Contractors team or Sacramento electrical work"
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Company Story */}
      <Section background="white">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Family-Owned and Sacramento-Rooted Since 2013
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-gray md:text-lg">
            <p>
              Peak Electrical Contractors was founded with a simple belief: Sacramento homeowners deserve licensed, honest electrical work done right the first time. More than ten years later, that belief still drives every job we take on.
            </p>
            <p>
              We&apos;re a family-owned company with deep roots in the Sacramento community. Our crew members live here, raise their families here, and take genuine pride in the quality of work they leave behind. We don&apos;t chase volume — we chase reputation. Nearly all of our new customers come from referrals and repeat business, which is the only metric that matters to us.
            </p>
            <p>
              From 100-amp panel replacements to SMUD-rebate EV charger installs and whole-house rewires, every project we complete is fully permitted and inspected. No shortcuts. No unlicensed subcontractors. Just clean, code-compliant electrical work performed by professionals who stand behind it.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "10+", label: "Years in Business" },
              { value: "4.7★", label: "Average Rating" },
              { value: "52+", label: "Customer Reviews" },
              { value: "100%", label: "Permitted Work" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-brand-light-gray bg-brand-light-gray px-4 py-5"
              >
                <p className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 4. Why Choose Us */}
      <Section background="light" id="why-choose-us">
        <FadeIn className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            What Sets Peak Electrical Apart
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            There are a lot of electricians in Sacramento. Here&apos;s why our customers keep coming back — and keep sending their friends.
          </p>
        </FadeIn>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-5 rounded-sm bg-white p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 5. Our Values */}
      <Section background="white" id="our-values">
        <FadeIn className="text-center">
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Our Values
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            These aren&apos;t marketing words. They&apos;re the standards our team holds itself to on every single job.
          </p>
        </FadeIn>

        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                {value.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-brand-blue">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. License & Credentials */}
      <Section background="dark" id="credentials">
        <FadeIn className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <SectionLabel theme="light">Our Credentials</SectionLabel>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Licensed, Verified &amp; Trusted
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100">
              When you hire an electrician, you should be able to verify their credentials before they ever set foot in your home. Peak Electrical Contractors is fully licensed with the California State License Board, bonded, and carries comprehensive liability and workers&apos; compensation insurance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-blue-100">
              We&apos;re also an official SMUD-Approved Contractor, which means we&apos;re authorized to perform installations that qualify for SMUD rebate programs — and we handle all the paperwork on your behalf.
            </p>
            <a
              href="https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent underline-offset-2 hover:underline"
            >
              Verify License #1075671 at CSLB.ca.gov
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Right: credential cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="rounded-sm border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                  {cred.label}
                </p>
                <p className="font-heading mt-1 text-xl font-bold text-white">
                  {cred.value}
                </p>
                {cred.href ? (
                  <a
                    href={cred.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-xs text-blue-200 underline-offset-2 hover:underline"
                  >
                    {cred.sub}
                  </a>
                ) : (
                  <p className="mt-1 text-xs text-blue-200">{cred.sub}</p>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* 7. CTA Banner */}
      <CTABanner
        variant="accent"
        headline="Ready to Work with Sacramento's Best?"
        body="Get a free estimate from Peak Electrical Contractors. We respond within one business day and are happy to answer any questions before you commit."
        buttonLabel="Get a Free Estimate"
        buttonHref="/contact"
        secondaryButtonLabel="Call (916) 572-9541"
        secondaryButtonHref="tel:+19165729541"
      />
    </>
  );
}
