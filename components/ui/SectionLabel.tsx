import { type ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  /** Use 'light' on dark backgrounds */
  theme?: "default" | "light";
}

export function SectionLabel({
  children,
  className = "",
  theme = "default",
}: SectionLabelProps) {
  return (
    <p
      className={[
        "mb-3 text-xs font-semibold uppercase tracking-widest",
        theme === "light" ? "text-amber-300" : "text-brand-accent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}
