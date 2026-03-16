import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({
  image,
  imageAlt,
  tag,
  title,
  excerpt,
  date,
  slug,
}: BlogCardProps) {
  const href = `/blog/${slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <Link href={href} className="block overflow-hidden" tabIndex={-1}>
        <div className="relative h-48 w-full overflow-hidden bg-brand-light-gray">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-brand-light-gray px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
            {tag}
          </span>
          <time
            dateTime={date}
            className="text-xs text-brand-gray"
          >
            {formatDate(date)}
          </time>
        </div>

        <Link href={href}>
          <h3 className="font-heading mb-2 text-base font-bold leading-snug text-brand-blue transition-colors duration-200 group-hover:text-brand-accent">
            {title}
          </h3>
        </Link>

        <p className="flex-1 text-sm leading-relaxed text-brand-gray line-clamp-3">
          {excerpt}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:gap-2 transition-all duration-200"
        >
          Read More
          <svg
            className="h-4 w-4"
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
        </Link>
      </div>
    </article>
  );
}
