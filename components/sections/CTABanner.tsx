import { Button } from "@/components/ui/Button";

type CTABannerVariant = "accent" | "dark";

interface CTABannerProps {
  variant?: CTABannerVariant;
  headline: string;
  body?: string;
  buttonLabel: string;
  buttonHref: string;
  /** Optional secondary button */
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
}

export function CTABanner({
  variant = "dark",
  headline,
  body,
  buttonLabel,
  buttonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: CTABannerProps) {
  const isAccent = variant === "accent";

  return (
    <div
      className={`w-full py-16 md:py-20 ${
        isAccent ? "bg-brand-accent" : "bg-brand-blue"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2
              className={`font-heading text-2xl font-bold leading-tight md:text-3xl ${
                isAccent ? "text-brand-dark" : "text-white"
              }`}
            >
              {headline}
            </h2>
            {body && (
              <p
                className={`mt-2 text-base md:text-lg ${
                  isAccent ? "text-amber-900/80" : "text-blue-100"
                }`}
              >
                {body}
              </p>
            )}
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button
              href={buttonHref}
              variant={isAccent ? "dark" : "primary"}
              size="lg"
            >
              {buttonLabel}
            </Button>
            {secondaryButtonLabel && secondaryButtonHref && (
              <Button
                href={secondaryButtonHref}
                variant={isAccent ? "secondary" : "ghost"}
                size="lg"
                className={isAccent ? "" : "!text-white border-white hover:bg-white hover:!text-brand-blue"}
              >
                {secondaryButtonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
