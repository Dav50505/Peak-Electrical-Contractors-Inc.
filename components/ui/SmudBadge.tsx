/**
 * SMUD-Approved Contractor badge — displayed prominently on homepage and EV/rebate pages.
 */
interface SmudBadgeProps {
  variant?: "light" | "dark";
}

export function SmudBadge({ variant = "light" }: SmudBadgeProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-sm border px-4 py-2 ${
        isDark
          ? "border-brand-accent/50 bg-white/10"
          : "border-brand-accent/30 bg-brand-accent/5"
      }`}
    >
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span
        className={`font-heading text-sm font-bold ${
          isDark ? "text-white" : "text-brand-blue"
        }`}
      >
        SMUD-Approved Contractor
      </span>
    </div>
  );
}
