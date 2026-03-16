import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  /** Optional text rendered as italic within the headline */
  headlineItalic?: string;
  subtext?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  /** Show trust line below headline — defaults to "Licensed, Bonded & Insured | Sacramento, CA" */
  trustLine?: string | false;
}

export function PageHero({
  eyebrow,
  headline,
  headlineItalic,
  subtext,
  backgroundImage,
  backgroundImageAlt = "Peak Electrical Contractors",
  trustLine = "Licensed, Bonded & Insured | Sacramento, CA",
}: PageHeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className={`relative flex min-h-[320px] items-center overflow-hidden md:min-h-[400px] ${
        hasImage ? "" : "bg-brand-blue"
      }`}
    >
      {/* Background image with overlay */}
      {hasImage && backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-dark/70" aria-hidden="true" />
        </>
      )}

      {/* Content */}
      <FadeIn className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {eyebrow && (
          <SectionLabel theme="light" className="mb-2">
            {eyebrow}
          </SectionLabel>
        )}

        <h1 className="font-heading max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {headline}
          {headlineItalic && (
            <>
              {" "}
              <em className="not-italic text-brand-accent">{headlineItalic}</em>
            </>
          )}
        </h1>

        {trustLine && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-amber-300">
            {trustLine}
          </p>
        )}

        {subtext && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100 md:text-lg">
            {subtext}
          </p>
        )}
      </FadeIn>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-brand-accent"
        aria-hidden="true"
      />
    </section>
  );
}
