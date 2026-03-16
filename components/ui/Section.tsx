import { type ReactNode } from "react";

type SectionBackground = "white" | "light" | "dark" | "accent";

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  className?: string;
  containerClassName?: string;
  id?: string;
  /**
   * Set to true to skip the inner max-width container (for full-bleed child content).
   */
  fullBleed?: boolean;
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-brand-light-gray",
  dark: "bg-brand-dark text-white",
  accent: "bg-brand-accent text-brand-dark",
};

export function Section({
  children,
  background = "white",
  className = "",
  containerClassName = "",
  id,
  fullBleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[backgroundClasses[background], "py-16 md:py-24", className]
        .filter(Boolean)
        .join(" ")}
    >
      {fullBleed ? (
        children
      ) : (
        <div
          className={[
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            containerClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      )}
    </section>
  );
}
