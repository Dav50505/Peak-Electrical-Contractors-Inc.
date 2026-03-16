export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={`divide-y divide-gray-200 ${className}`}>
        {items.map((item, index) => (
          <details
            key={index}
            className="group py-4 first:pt-0 last:pb-0"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-1 font-heading text-base font-bold text-brand-blue select-none hover:text-brand-accent transition-colors duration-200">
              <span>{item.question}</span>
              {/* Plus/minus toggle via CSS */}
              <span
                className="relative ml-4 shrink-0 h-6 w-6 text-brand-accent"
                aria-hidden="true"
              >
                {/* Horizontal bar always visible */}
                <span className="absolute left-1 top-[11px] block h-0.5 w-4 bg-current transition-opacity duration-200" />
                {/* Vertical bar — hidden when open */}
                <span className="absolute left-[11px] top-1 block h-4 w-0.5 bg-current transition-all duration-200 group-open:opacity-0 group-open:rotate-90" />
              </span>
            </summary>

            <div className="mt-3 pr-10 text-sm leading-relaxed text-brand-gray">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
