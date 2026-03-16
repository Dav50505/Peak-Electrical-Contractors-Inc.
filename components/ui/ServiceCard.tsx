import Link from "next/link";
import { type ReactNode } from "react";

interface ServiceCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  tag?: string;
  href: string;
}

export function ServiceCard({
  number,
  icon,
  title,
  description,
  tag,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative flex h-full flex-col rounded-sm border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden">
        {/* Accent top border that slides in on hover */}
        <div className="absolute left-0 top-0 h-1 w-full scale-x-0 bg-brand-accent transition-transform duration-300 origin-left group-hover:scale-x-100" />

        <div className="mb-4 flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light-gray text-2xl">
            {icon}
          </span>
          <span className="font-heading text-5xl font-bold text-gray-100 leading-none select-none">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        <h3 className="font-heading mb-2 text-lg font-bold text-brand-blue group-hover:text-brand-accent transition-colors duration-200">
          {title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-brand-gray">
          {description}
        </p>

        {tag && (
          <div className="mt-4">
            <span className="inline-block rounded-full bg-brand-light-gray px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
              {tag}
            </span>
          </div>
        )}

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-accent">
          Learn more
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
