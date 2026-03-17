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
    "Whole-Home Battery Backup Sacramento | Peak Electrical Contractors",
  description:
    "Licensed Sacramento electricians installing whole-home battery backup systems — Tesla Powerwall, Enphase, Franklin, and more. Energy independence, outage protection, and solar integration. Free consultations.",
  alternates: {
    canonical: "https://peakelectricalsac.com/services/battery-backup",
  },
  openGraph: {
    title:
      "Whole-Home Battery Backup Sacramento | Peak Electrical Contractors",
    description:
      "Protect your Sacramento home from outages with a professionally installed battery backup system. Licensed, bonded, and insured. Free consultation.",
    url: "https://peakelectricalsac.com/services/battery-backup",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Whole-Home Battery Backup Sacramento | Peak Electrical Contractors",
    description:
      "Protect your Sacramento home from outages with professionally installed battery backup. Tesla Powerwall, Enphase, Franklin. Free consultation.",
    images: ["/images/homepage.png"],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const valueProps = [
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
    title: "Keep Essentials Running",
    description:
      "Power your refrigerator, medical equipment, Wi-Fi, lights, and other critical loads during an outage — automatically, without any action required.",
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
    title: "Whole-Home Power",
    description:
      "With the right system size, a battery backup can power your entire home — not just a few circuits. Our team designs systems matched to your actual load.",
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
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Energy Independence",
    description:
      "Store excess solar energy, reduce grid dependence, and avoid peak utility rates. A battery system puts you in control of your energy costs.",
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
    title: "Long-Term Savings",
    description:
      "Reduce electricity bills by using stored energy during high-rate periods. Many systems pay for themselves over time — especially when paired with solar.",
  },
];

const batteryBrands = [
  {
    name: "Tesla Powerwall 3",
    capacity: "13.5 kWh",
    highlight: "Most popular",
    description:
      "The industry benchmark. The Powerwall 3 offers seamless solar integration, a user-friendly app, and automatic backup switching in under 200 milliseconds. Excellent for whole-home coverage.",
  },
  {
    name: "Enphase IQ Battery 5P",
    capacity: "5 kWh per unit",
    highlight: "Modular & scalable",
    description:
      "Enphase batteries are fully modular — start with one and add more as your needs grow. Pairs perfectly with Enphase solar microinverters for a fully integrated system.",
  },
  {
    name: "Franklin WT",
    capacity: "13.6 kWh",
    highlight: "High performance",
    description:
      "The Franklin WT delivers high continuous power output, making it ideal for homes with demanding loads like HVAC systems, well pumps, or EV chargers.",
  },
  {
    name: "Generac PWRcell",
    capacity: "9–18 kWh",
    highlight: "Flexible capacity",
    description:
      "Generac's modular cabinet system lets you configure capacity from 9 to 18 kWh in a single unit, with additional expansion possible. A strong choice for larger homes.",
  },
];

const backupDurationExamples = [
  {
    scenario: "Essential Loads Only",
    duration: "24–48+ hours",
    includes: [
      "Refrigerator & freezer",
      "Lights (LED)",
      "Wi-Fi & phones",
      "Medical devices",
    ],
    note: "Based on a single 13.5 kWh battery",
  },
  {
    scenario: "Most of the Home",
    duration: "12–24 hours",
    includes: [
      "Everything above",
      "TV & entertainment",
      "Computer & home office",
      "Ceiling fans",
    ],
    note: "Based on a single 13.5 kWh battery",
  },
  {
    scenario: "Whole Home + Solar",
    duration: "Continuous",
    includes: [
      "Full home load",
      "EV charging (reduced rate)",
      "HVAC (partial cycles)",
      "Indefinite with sun",
    ],
    note: "Battery + solar pairing during daylight hours",
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
      "CA Contractor License #1075671. Every battery backup installation is fully covered and code-compliant.",
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
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    title: "Brand-Agnostic Recommendations",
    description:
      "We don't push one brand. We recommend the system that best fits your home's load, budget, and energy goals — then install it correctly.",
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
    title: "Full Permit Handling",
    description:
      "Battery installations require permits in California. We handle all applications with Sacramento County and the City — no extra work for you.",
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
    title: "Utility Coordination",
    description:
      "We coordinate with SMUD on interconnection requirements for battery systems — especially when paired with solar — so your system operates correctly from day one.",
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
    title: "Warranty Support",
    description:
      "Rated 4.7 stars across Yelp and Google. We stand behind our installations and are here if you ever need service or have questions after installation.",
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description:
      "We discuss your goals — outage protection, solar integration, energy savings — and evaluate whether battery backup is the right fit for your home.",
  },
  {
    step: 2,
    title: "Site Assessment & Load Analysis",
    description:
      "We evaluate your electrical panel, current load, and energy usage to determine the right system size and brand for your specific home.",
  },
  {
    step: 3,
    title: "System Design & Permitting",
    description:
      "We design the installation plan and handle all permit applications with Sacramento County and the City on your behalf.",
  },
  {
    step: 4,
    title: "Professional Installation",
    description:
      "Our licensed electricians install and wire the battery system to manufacturer and code specifications, with minimal disruption to your home.",
  },
  {
    step: 5,
    title: "Final Inspection & Setup",
    description:
      "We pass the city inspection, activate the system, and walk you through how to monitor and manage your backup power — so you're confident it'll work when you need it.",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "Do I need solar panels to use a home battery backup?",
    answer:
      "No — a battery backup system works perfectly as a standalone installation without solar. You charge the battery from the grid during normal operation, and it automatically powers your home during an outage. That said, pairing a battery with solar extends your backup duration significantly, since the solar panels keep recharging the battery during the day.",
  },
  {
    question: "How much does whole-home battery backup cost in Sacramento?",
    answer:
      "Battery backup systems typically range from $10,000 to $20,000+ installed, depending on the brand, capacity, and complexity of the installation. Homes that require a panel upgrade to support the battery will have additional costs. The best way to get an accurate number is a free consultation — every home is different, and we size systems based on your actual needs.",
  },
  {
    question: "Which battery brand is best for my home?",
    answer:
      "There's no single answer — the right battery depends on your home's load, your budget, whether you have solar, and your backup goals. Tesla Powerwall is the most popular and has excellent software. Enphase is ideal if you already have Enphase solar. Franklin WT is a strong choice for high-power loads. Generac is good for homes needing flexible capacity. We'll recommend the best fit after assessing your home, not just the brand with the best margin.",
  },
  {
    question: "Does battery backup require a permit in California?",
    answer:
      "Yes. Battery energy storage systems require electrical permits in Sacramento County and the City of Sacramento. This protects you by ensuring the installation is inspected for safety and code compliance. Peak Electrical handles the entire permit process — you don't need to do anything except let the inspector in.",
  },
  {
    question: "Can I add more batteries later if I need more capacity?",
    answer:
      "It depends on the brand. Enphase IQ Batteries and Generac PWRcell are designed to be modular — you can add units to increase capacity over time. Tesla Powerwall can be expanded with additional units. We design installations with future expansion in mind where possible, so you're not locked into your initial capacity forever.",
  },
];

const batteryBackupService = serviceSchema({
  name: "Whole-Home Battery Backup Installation",
  description:
    "Licensed, bonded, and insured Sacramento electricians installing whole-home battery backup systems including Tesla Powerwall, Enphase IQ Battery, Franklin WT, and Generac PWRcell. Fully permitted and inspected.",
  path: "/services/battery-backup",
});

const batteryBackupBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Battery Backup", path: "/services/battery-backup" },
]);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BatteryBackupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(batteryBackupService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(batteryBackupBreadcrumb) }}
      />

      {/* 1. Hero */}
      <PageHero
        backgroundImage="/images/Services/Battery%20Backup.png"
        backgroundImageAlt="Whole-home battery backup system"
        eyebrow="Our Services"
        headline="Whole-Home Battery Backup Installation in Sacramento"
        trustLine="Licensed, Bonded &amp; Insured | Sacramento, CA"
        subtext="Keep the lights on when the grid goes down. Peak Electrical designs and installs advanced battery backup systems tailored to your home's energy needs."
      />

      {/* 2. Trust bar */}
      <TrustBar variant="light" />

      {/* 3. Intro */}
      <Section background="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionLabel>Why Battery Backup</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              Sacramento Homes Need Backup Power Now More Than Ever
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray md:text-lg">
              Power outages in Sacramento have become more frequent and
              unpredictable. Extreme summer heat strains the grid, wildfire
              season brings PSPS shutoffs, and winter storms can knock out power
              for hours — or days. A whole-home battery backup system gives you
              a reliable safety net that activates automatically the moment the
              grid goes down.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
              Peak Electrical installs advanced battery storage systems from
              today&apos;s leading manufacturers. Our licensed electricians
              assess your home&apos;s actual power needs, recommend the right
              system, handle all permitting, and install everything to code —
              so your backup power works correctly when it matters most.
            </p>
          </div>

          {/* Honest scope-setting callout */}
          <div className="rounded-sm border-l-4 border-brand-accent bg-brand-light-gray p-8 lg:sticky lg:top-24">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Consultation-First Service
            </p>
            <h3 className="font-heading mt-2 text-lg font-bold text-brand-blue">
              Every Home Is a Little Different
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">
              Battery backup isn&apos;t a fixed-price product you add to a
              cart. The right system depends on your panel size, current load,
              whether you have solar, your backup goals, and your budget. We
              don&apos;t guess — we assess.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray">
              Our free consultation walks through exactly what your home needs,
              what it will cost, and how long the backup will last. No pressure,
              no obligation.
            </p>
            <a
              href="#estimate"
              className="mt-6 inline-block rounded-sm bg-brand-accent px-6 py-3 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </Section>

      {/* 4. What Battery Backup Can Do For You */}
      <Section background="light" id="value-props">
        <div className="text-center">
          <SectionLabel>What You Get</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            What a Battery Backup System Can Do For You
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            A properly sized battery backup system doesn&apos;t just keep the
            lights on — it transforms how your home relates to the grid.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {valueProps.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-sm bg-white p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
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

      {/* 5. Battery Systems We Install */}
      <Section background="white" id="brands">
        <div className="text-center">
          <SectionLabel>What We Install</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Battery Systems We Install
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            We&apos;re not tied to a single brand. We install leading battery
            systems and recommend what&apos;s genuinely best for your home.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {batteryBrands.map((brand) => (
            <li
              key={brand.name}
              className="rounded-sm border border-brand-light-gray bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-base font-bold text-brand-blue">
                  {brand.name}
                </h3>
                <span className="shrink-0 rounded-full bg-brand-accent/10 px-3 py-1 font-heading text-xs font-semibold text-brand-accent">
                  {brand.highlight}
                </span>
              </div>
              <p className="mt-1 font-heading text-sm font-semibold text-brand-gray">
                Capacity: {brand.capacity}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                {brand.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-brand-gray">
          Don&apos;t see your preferred brand? We work with other manufacturers
          too.{" "}
          <a
            href="#estimate"
            className="font-semibold text-brand-blue underline-offset-2 hover:underline"
          >
            Ask us during your free consultation.
          </a>
        </p>
      </Section>

      {/* 6. How Battery Backup Works with Solar */}
      <Section background="light" id="solar-integration">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionLabel>Solar Integration</SectionLabel>
            <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
              How Battery Backup Works With Solar
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
              Battery backup and solar are powerful on their own — but together,
              they create a genuinely resilient home energy system.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
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
              </div>
              <h3 className="font-heading text-base font-bold text-brand-blue">
                Standalone Battery (No Solar)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                Your battery charges from the grid during normal operation.
                When the power goes out, it automatically switches over and
                powers your home. This is a great option if you don&apos;t have
                solar yet — the battery still provides hours of backup and can
                be paired with solar later.
              </p>
            </div>

            <div className="rounded-sm bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
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
              </div>
              <h3 className="font-heading text-base font-bold text-brand-blue">
                Battery + Solar (Paired System)
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">
                When paired with solar, your battery recharges from your panels
                during the day — even during an outage. This can extend backup
                duration indefinitely as long as the sun shines. Peak works
                directly with your solar installer to ensure the electrical work
                is coordinated properly and SMUD interconnection requirements
                are met.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. How Long Will It Last? */}
      <Section background="white" id="backup-duration">
        <div className="text-center">
          <SectionLabel>Backup Duration</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            How Long Will the Backup Last?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            Duration depends on system size and how much power you&apos;re
            drawing. Here are realistic estimates based on a single 13.5 kWh
            battery — the most common system we install.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {backupDurationExamples.map((example, index) => (
            <li
              key={example.scenario}
              className="rounded-sm bg-white p-7 shadow-sm ring-1 ring-brand-light-gray"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent font-heading text-sm font-bold text-brand-dark">
                {index + 1}
              </div>
              <h3 className="font-heading text-base font-bold text-brand-blue">
                {example.scenario}
              </h3>
              <p className="mt-1 font-heading text-2xl font-bold text-brand-accent">
                {example.duration}
              </p>
              <ul className="mt-4 space-y-1.5">
                {example.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-brand-gray">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-gray/70 italic">
                {example.note}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-brand-gray">
          Want to know exactly how long your home would run on backup?{" "}
          <a
            href="#estimate"
            className="font-semibold text-brand-blue underline-offset-2 hover:underline"
          >
            We&apos;ll calculate it during your free consultation.
          </a>
        </p>
      </Section>

      {/* 8. Why Choose Peak */}
      <Section background="light" id="why-peak">
        <div className="text-center">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Why Sacramento Homeowners Choose Peak
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            Battery backup is a significant investment. You want an electrician
            who knows the systems, handles everything correctly, and stands
            behind their work.
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

      {/* 9. Our Process */}
      <Section background="white" id="process">
        <div className="mb-10 text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-heading text-2xl font-bold text-brand-blue md:text-3xl">
            Our Battery Backup Installation Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-brand-gray">
            From the first conversation to a system that&apos;s fully tested
            and working — here&apos;s exactly what to expect.
          </p>
        </div>
        <ProcessSteps steps={processSteps} />
      </Section>

      {/* 10. Scope-setting dark callout */}
      <Section background="dark">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-amber-300">
              Start Here
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold text-white md:text-3xl">
              Schedule a Free Backup Power Consultation
            </h2>
            <p className="mt-3 text-base leading-relaxed text-blue-100">
              Not sure if battery backup is right for you? That&apos;s exactly
              what the free consultation is for. We&apos;ll look at your home,
              your energy usage, and your goals — and give you a straight answer
              with no sales pressure.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#estimate"
              className="inline-block rounded-sm bg-brand-accent px-8 py-3.5 font-heading text-sm font-bold text-brand-dark transition-colors hover:bg-amber-400"
            >
              Book a Free Consultation
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
              Battery Backup FAQs
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* 12. Inline contact form */}
      <InlineContactForm
        title="Schedule Your Free Backup Power Consultation"
        subtitle="Fill out the form and we'll follow up within one business day. Prefer to talk? Call us at (916) 584-2124."
        background="white"
      />

      {/* 13. CTA banner */}
      <CTABanner
        variant="dark"
        headline="Ready to Take Your Home Off the Grid&apos;s Uncertainty?"
        body="Call Peak Electrical Contractors at (916) 584-2124 or request a free consultation online. We serve Sacramento and surrounding areas."
        buttonLabel="Get a Free Consultation"
        buttonHref="#estimate"
        secondaryButtonLabel="Call (916) 584-2124"
        secondaryButtonHref="tel:+19165842124"
      />
    </>
  );
}
