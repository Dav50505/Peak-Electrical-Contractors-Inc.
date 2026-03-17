import Image from "next/image";
import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { BlogCard } from "@/components/ui/BlogCard";
import { TrustBar } from "@/components/sections/TrustBar";
import { SmudBadge } from "@/components/ui/SmudBadge";
import { CTABanner } from "@/components/sections/CTABanner";

import { YELP_URL } from "@/lib/constants";
import {
  HERO,
  SERVICES,
  DIFFERENTIATORS,
  TESTIMONIALS,
  SERVICE_AREAS,
  type DifferentiatorIconKey,
} from "@/content/homepage";
import { getRecentPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title:
    "Sacramento Electricians | Panel Upgrades, EV Chargers & Rewiring | Peak Electrical Contractors",
  description:
    "Licensed Sacramento electricians since 2012. Panel upgrades, EV charger installation, whole house rewiring & SMUD rebates up to $2,500. Call for a free estimate.",
  alternates: { canonical: "https://peakelectricalsac.com" },
  openGraph: {
    title:
      "Sacramento Electricians | Panel Upgrades, EV Chargers & Rewiring | Peak Electrical Contractors",
    description:
      "Licensed Sacramento electricians since 2012. Panel upgrades, EV charger installation, whole house rewiring & SMUD rebates up to $2,500. Call for a free estimate.",
    url: "https://peakelectricalsac.com",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sacramento Electricians | Panel Upgrades, EV Chargers & Rewiring | Peak Electrical Contractors",
    description:
      "Licensed Sacramento electricians since 2012. Panel upgrades, EV charger installation, whole house rewiring & SMUD rebates up to $2,500. Free estimates.",
    images: ["/images/homepage.png"],
  },
};

/** Icon map — keeps the content model free of JSX */
function DifferentiatorIcon({ iconKey }: { iconKey: DifferentiatorIconKey }) {
  switch (iconKey) {
    case "shield-check":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      );
    case "clipboard-check":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "lightning":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "chat":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "star":
      return (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
  }
}

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1. HERO — full-bleed background image
      ───────────────────────────────────────── */}
      <section
        className="relative flex min-h-[560px] items-center overflow-hidden md:min-h-[680px]"
        aria-label="Hero"
      >
        {/* Background image */}
        <Image
          src={HERO.image}
          alt={HERO.imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay for legibility */}
        <div
          className="absolute inset-0 bg-linear-to-r from-brand-dark/85 via-brand-dark/70 to-brand-dark/40"
          aria-hidden="true"
        />

        {/* Content */}
        <FadeIn className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionLabel theme="light">{HERO.eyebrow}</SectionLabel>

          <h1 className="font-heading mt-3 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {HERO.headline}{" "}
            <em className="not-italic text-brand-accent">
              {HERO.headlineAccent}
            </em>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg md:text-xl">
            {HERO.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={HERO.primaryCta.href} variant="primary" size="lg">
              {HERO.primaryCta.label}
            </Button>
            <Button
              href={HERO.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-blue!"
            >
              {HERO.secondaryCta.label}
            </Button>
          </div>

          {/* Phone shortcut */}
          <div className="mt-6 flex items-center gap-2">
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
            <a
              href="tel:+19165842124"
              className="text-sm font-semibold text-white hover:text-brand-accent transition-colors"
            >
              (916) 584-2124 — Free Estimates Available
            </a>
          </div>
        </FadeIn>

        {/* Bottom gold accent bar */}
        <div
          className="absolute bottom-0 left-0 h-1 w-full bg-brand-accent"
          aria-hidden="true"
        />
      </section>

      {/* ─────────────────────────────────────────
          2. TRUST BAR
      ───────────────────────────────────────── */}
      <TrustBar variant="dark" />
      <div className="flex justify-center py-4 bg-brand-dark">
        <SmudBadge variant="dark" />
      </div>

      {/* ─────────────────────────────────────────
          3. INTRO / ABOUT SPLIT
      ───────────────────────────────────────── */}
      <Section background="white" id="about">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Photo side */}
          <div className="relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-brand-light-gray">
              <Image
                src="/images/Who-we-are.jpg"
                alt="Peak Electrical Contractors team on a Sacramento job site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Yelp callout badge */}
            <a
              href={YELP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-sm bg-white px-4 py-3 shadow-lg transition-shadow hover:shadow-xl sm:-right-4"
              aria-label="4.7 stars on Yelp — 50+ verified reviews"
            >
              <div className="flex flex-col items-center">
                <span className="font-heading text-2xl font-bold leading-none text-brand-blue">
                  4.7
                </span>
                <div className="mt-1 flex gap-0.5" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className={`h-3.5 w-3.5 ${i <= 4 ? "text-brand-accent" : "text-gray-300"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-red-600">
                  Yelp
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-blue leading-snug">
                  50+ Verified
                  <br />
                  Reviews
                </p>
              </div>
            </a>
          </div>

          {/* Copy side */}
          <FadeIn>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
              Sacramento&rsquo;s Family-Owned
              <br />
              <em className="not-italic text-brand-accent">Electrical Experts</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              Peak Electrical Contractors has served Sacramento-area homeowners for over 10 years.
              We&rsquo;re a family-owned, locally rooted company — not a franchise. Every job is
              handled by our own licensed team, fully permitted and inspected.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-gray">
              Whether you need a panel upgrade before selling your home, an EV charger for your new
              electric vehicle, or a full rewire of an older Sacramento house, we bring the same
              care and professionalism to every project.
            </p>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
              {[
                { value: "10+", label: "Years in Sacramento" },
                { value: "500+", label: "Jobs Completed" },
                { value: "100%", label: "Permitted Work" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-brand-blue">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-0.5 text-xs text-brand-gray leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/about" variant="secondary">
                Learn About Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          4. SERVICES OVERVIEW GRID
      ───────────────────────────────────────── */}
      <Section background="light" id="services">
        <FadeIn className="text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
            Electrical Services for{" "}
            <em className="not-italic text-brand-accent">Sacramento Homes</em>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray">
            From panel replacements to EV chargers and SMUD rebates — we handle it all, fully
            licensed and permitted.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.href}
              number={service.number}
              icon={<span aria-hidden="true">{service.iconEmoji}</span>}
              title={service.title}
              description={service.description}
              tag={service.tag}
              href={service.href}
            />
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/services" variant="dark" size="lg">
            See All Services
          </Button>
        </FadeIn>
      </Section>

      {/* ─────────────────────────────────────────
          5. SMUD REBATE HIGHLIGHT BANNER
      ───────────────────────────────────────── */}
      <CTABanner
        variant="accent"
        headline="Get Up to $2,500 Back on Qualifying Electrical Upgrades"
        body="As an official SMUD-Approved Contractor, we handle all the rebate paperwork for you. EV charger circuits, heat pump wiring, and full electrification upgrades all qualify."
        buttonLabel="Check If You Qualify"
        buttonHref="/services/smud-rebates"
        secondaryButtonLabel="Learn About SMUD Rebates"
        secondaryButtonHref="/services/smud-rebates"
      />

      {/* ─────────────────────────────────────────
          6. WHY CHOOSE PEAK
      ───────────────────────────────────────── */}
      <Section background="dark" id="why-peak">
        <FadeIn className="text-center">
          <SectionLabel theme="light">Why Choose Peak</SectionLabel>
          <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-white md:text-4xl">
            The Peak Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-200">
            We&rsquo;re not the cheapest electrician in Sacramento. We&rsquo;re the most thorough.
            Here&rsquo;s what that looks like in practice.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                <DifferentiatorIcon iconKey={item.iconKey} />
              </div>
              <h3 className="font-heading text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────
          7. TESTIMONIALS
      ───────────────────────────────────────── */}
      <Section background="light" id="testimonials">
        <FadeIn className="text-center">
          <SectionLabel>What Customers Say</SectionLabel>
          <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
            Real Reviews from Real Customers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-gray">
            Don&rsquo;t take our word for it — here&rsquo;s what Sacramento homeowners say about
            working with Peak.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={i}
              stars={t.stars}
              quote={t.quote}
              authorName={t.authorName}
              location={t.location}
              source={t.source}
            />
          ))}
        </div>

        <FadeIn className="mt-8 text-center">
          <a
            href="https://www.yelp.com/biz/peak-electrical-contractors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            Read all 50+ reviews on Yelp
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
        </FadeIn>
      </Section>

      {/* ─────────────────────────────────────────
          8. SERVICE AREAS
      ───────────────────────────────────────── */}
      <Section background="white" id="service-areas">
        <FadeIn className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionLabel>Where We Work</SectionLabel>
            <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
              Proudly Serving the{" "}
              <em className="not-italic text-brand-accent">Sacramento Region</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              We service Sacramento and the surrounding communities. Not sure if we cover your
              area? Give us a call — we&rsquo;re happy to help.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          <div>
            <ul
              className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3"
              aria-label="Service areas"
            >
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm font-medium text-brand-gray">
                  <svg
                    className="h-4 w-4 shrink-0 text-brand-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* ─────────────────────────────────────────
          9. BLOG PREVIEW
      ───────────────────────────────────────── */}
      <Section background="light" id="blog">
        <FadeIn className="text-center">
          <SectionLabel>Electrical Tips & News</SectionLabel>
          <h2 className="font-heading mt-2 text-3xl font-bold leading-tight text-brand-blue md:text-4xl">
            From the Peak Blog
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-gray">
            Helpful guides for Sacramento homeowners on panels, EV charging, SMUD rebates, and more.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {getRecentPosts(3).map((post) => (
            <BlogCard
              key={post.slug}
              image={post.image}
              imageAlt={post.imageAlt}
              tag={post.tag}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/blog" variant="secondary">
            View All Articles
          </Button>
        </FadeIn>
      </Section>

      {/* ─────────────────────────────────────────
          10. FINAL CTA
      ───────────────────────────────────────── */}
      <CTABanner
        variant="dark"
        headline="Ready to Get Started? Call or Request an Estimate Online."
        body="We offer free, no-obligation estimates for all projects. Most panel upgrades are completed in 1–2 business days."
        buttonLabel="Get a Free Estimate"
        buttonHref="/contact"
        secondaryButtonLabel="(916) 584-2124"
        secondaryButtonHref="tel:+19165842124"
      />
    </>
  );
}
