/**
 * Blog content types
 * Shared between content/blog.ts and lib/blog.ts to avoid circular imports.
 */

export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  content: BlogContentBlock[];
}
