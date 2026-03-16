import type { BlogContentBlock } from "@/lib/blog-types";

interface BlogPostContentProps {
  blocks: BlogContentBlock[];
}

export function BlogPostContent({ blocks }: BlogPostContentProps) {
  return (
    <div className="prose prose-brand max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="mt-4 text-base leading-relaxed text-brand-gray first:mt-0"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-heading mt-10 text-xl font-bold text-brand-blue md:text-2xl first:mt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-heading mt-6 text-lg font-bold text-brand-blue md:text-xl"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-4 list-disc space-y-2 pl-6 text-base text-brand-gray"
              >
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
