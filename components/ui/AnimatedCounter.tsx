"use client";

import { useRef, useEffect, useState, useId } from "react";

/** Persists across React Strict Mode remounts so we don't animate twice */
const animatedCounterIds = new Set<string>();

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
  /** Zero-pad the display to this many digits (e.g. 2 for "01", "02") */
  padTo?: number;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseValue(value: string): { number: number; suffix: string } {
  const match = value.match(/(\d+\.?\d*)(.*)/);
  if (!match) return { number: 0, suffix: value };
  return {
    number: parseFloat(match[1]),
    suffix: match[2] ?? "",
  };
}

function formatNumber(
  num: number,
  original: number,
  padTo?: number
): string {
  const isDecimal = original % 1 !== 0;
  const str = isDecimal ? num.toFixed(1) : Math.round(num).toString();
  return padTo ? str.padStart(padTo, "0") : str;
}

export function AnimatedCounter({
  value,
  className = "",
  duration = 1500,
  padTo,
}: AnimatedCounterProps) {
  const id = useId();
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseValue(value);
  const initialStr =
    (padTo ? "0".padStart(padTo, "0") : "0") + parsed.suffix;
  const [displayValue, setDisplayValue] = useState(initialStr);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    /* Skip animation if already ran (survives Strict Mode remount) */
    if (animatedCounterIds.has(id)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animatedCounterIds.add(id);
          const { number: target, suffix } = parseValue(value);

          const startTime = performance.now();
          const startValue = 0;

          function tick(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutExpo(progress);
            const current =
              startValue + (target - startValue) * eased;
            setDisplayValue(formatNumber(current, target, padTo) + suffix);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplayValue(value);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, padTo, id]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
