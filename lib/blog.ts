/**
 * Blog content model and helpers
 * Central source for all blog posts — used by index, individual pages, and homepage preview.
 */

import { BLOG_POSTS } from "@/content/blog";
import type { BlogPost } from "./blog-types";

export type { BlogPost, BlogContentBlock } from "./blog-types";

/** All blog posts, sorted by date descending (newest first) */
export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Get a single post by slug */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Get related posts (same tag or recent, excluding current slug). Max 3. */
export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  // Prefer same tag
  const sameTag = others.filter((p) => p.tag === current.tag);
  const differentTag = others.filter((p) => p.tag !== current.tag);

  const related = [...sameTag, ...differentTag].slice(0, limit);
  return related;
}

/** Get N most recent posts (for homepage preview) */
export function getRecentPosts(limit = 3): BlogPost[] {
  return getAllPosts().slice(0, limit);
}
