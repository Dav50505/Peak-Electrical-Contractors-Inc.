import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-brand-dark font-semibold hover:bg-amber-400 active:bg-amber-600",
  secondary:
    "border-2 border-brand-blue text-brand-blue bg-transparent font-semibold hover:bg-brand-blue hover:text-white",
  ghost:
    "bg-transparent text-brand-blue font-semibold hover:underline underline-offset-4",
  dark: "bg-brand-blue text-white font-semibold hover:bg-brand-dark active:bg-black",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 cursor-pointer";

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const externalProps = isExternal && !href.startsWith("tel:") && !href.startsWith("mailto:")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (isExternal) {
      return (
        <a href={href} className={classes} {...externalProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
