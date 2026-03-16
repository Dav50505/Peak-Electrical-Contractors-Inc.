"use client";

import {
  type ReactNode,
  useRef,
  useEffect,
  useState,
  useId,
  type ElementType,
  Children,
} from "react";

/** Persists across React Strict Mode remounts so we don't animate twice */
const animatedIds = new Set<string>();

interface FadeInProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function FadeIn({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  staggerChildren = false,
  staggerDelay = 80,
}: FadeInProps) {
  const id = useId();
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    /* Skip animation if already ran (survives Strict Mode remount) */
    if (animatedIds.has(id)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animatedIds.add(id);
          timerRef.current = setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [delay, id]);

  if (staggerChildren) {
    const childArray = Children.toArray(children);
    return (
      <Component className={className}>
        {childArray.map((child, index) => (
          <FadeIn key={index} delay={delay + index * staggerDelay}>
            {child}
          </FadeIn>
        ))}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={
        isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined
      }
    >
      {children}
    </Component>
  );
}
