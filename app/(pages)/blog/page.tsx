import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Electrical Tips & News | Sacramento Electricians | Peak Electrical",
  description:
    "Helpful guides for Sacramento homeowners on panel upgrades, EV charging, SMUD rebates, whole house rewiring, and electrical safety. From Peak Electrical Contractors.",
  alternates: { canonical: "https://peakelectricalsac.com/blog" },
  openGraph: {
    title: "Electrical Tips & News | Peak Electrical Contractors",
    description:
      "Helpful guides for Sacramento homeowners on panels, EV charging, SMUD rebates, and more.",
    url: "https://peakelectricalsac.com/blog",
    images: [{ url: "/images/homepage.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Tips & News | Peak Electrical Contractors",
    description:
      "Helpful guides for Sacramento homeowners on panels, EV charging, SMUD rebates, and more.",
    images: ["/images/homepage.png"],
  },
};

const blogBreadcrumb = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumb) }}
      />
      <PageHero
        eyebrow="From the Peak Blog"
        headline="Electrical Tips & News"
        headlineItalic="for Sacramento Homeowners"
        subtext="Helpful guides on panel upgrades, EV chargers, SMUD rebates, rewiring, and more — from licensed Sacramento electricians."
      />

      <Section background="light">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              image={post.image}
              imageAlt={post.imageAlt}
              tag={post.tag}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
