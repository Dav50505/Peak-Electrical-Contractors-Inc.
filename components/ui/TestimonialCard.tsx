interface TestimonialCardProps {
  stars: 1 | 2 | 3 | 4 | 5;
  quote: string;
  authorName: string;
  location?: string;
  source?: "yelp" | "google";
}

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < stars ? "text-brand-accent" : "text-gray-300"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({
  stars,
  quote,
  authorName,
  location,
  source,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <StarRating stars={stars} />
        {source === "yelp" && (
          <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
            Yelp
          </span>
        )}
        {source === "google" && (
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Google
          </span>
        )}
      </div>

      <blockquote className="flex-1">
        <p className="text-sm leading-relaxed text-brand-gray italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-4 border-t border-gray-100 pt-4">
        <p className="font-heading text-sm font-bold text-brand-blue">
          {authorName}
        </p>
        {location && (
          <p className="mt-0.5 text-xs text-brand-gray">{location}</p>
        )}
      </footer>
    </div>
  );
}
