import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/BlogCard";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPosts,
} from "@/lib/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Peak Electrical Contractors`,
    description: post.excerpt,
    alternates: { canonical: `https://peakelectricalsac.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://peakelectricalsac.com/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const postArticleSchema = articleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    image: post.image,
    datePublished: post.date,
  });

  const postBreadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postBreadcrumb) }}
      />
      {/* Hero with cover image */}
      <section className="relative min-h-[320px] overflow-hidden md:min-h-[400px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-dark/70" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex min-h-[320px] max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 lg:px-8 md:min-h-[400px]">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-brand-accent/90 px-3 py-1 font-semibold uppercase tracking-wide text-brand-dark">
              {post.tag}
            </span>
            <time
              dateTime={post.date}
              className="text-amber-200"
            >
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="font-heading mt-3 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </div>

        <div
          className="absolute bottom-0 left-0 h-1 w-full bg-brand-accent"
          aria-hidden="true"
        />
      </section>

      {/* Main content + sidebar */}
      <Section background="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Post body */}
          <article className="lg:col-span-2">
            <BlogPostContent blocks={post.content} />
          </article>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-sm border border-gray-200 bg-brand-light-gray p-6 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-brand-blue">
                Need an Estimate?
              </h3>
              <p className="mt-2 text-sm text-brand-gray">
                Get a free, no-obligation quote for your electrical project.
                Licensed, bonded, and fully permitted.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Button href="/contact" variant="primary" className="w-full">
                  Get a Free Estimate
                </Button>
                <a
                  href="tel:+19165842124"
                  className="flex items-center justify-center gap-2 rounded-sm border-2 border-brand-blue px-4 py-2.5 text-sm font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  (916) 584-2124
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Related posts */}
      {related.length > 0 && (
        <Section background="light">
          <h2 className="font-heading text-2xl font-bold text-brand-blue">
            Related Articles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <BlogCard
                key={p.slug}
                image={p.image}
                imageAlt={p.imageAlt}
                tag={p.tag}
                title={p.title}
                excerpt={p.excerpt}
                date={p.date}
                slug={p.slug}
              />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:gap-2 transition-all duration-200"
            >
              View All Articles
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
        </Section>
      )}
    </>
  );
}
