import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogSlugs, getBlogPost } from "@/lib/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://cn101.cn/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://cn101.cn/blog/${slug}`,
      images: [
        {
          url: "/cover-1280x720.png",
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/cover-1280x720.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-3xl mx-auto px-4 pt-8 text-sm text-zinc-500"
      >
        <a href="/" className="hover:text-zinc-700">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-zinc-800 font-medium">{post.title}</span>
      </nav>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "China Sourcing Guide",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8">
        <time className="text-sm text-zinc-400">{post.date}</time>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2 mb-8 text-zinc-900">
          {post.title}
        </h1>
        <div
          className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:text-zinc-100"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="not-prose mt-16 p-8 rounded-2xl bg-zinc-900 text-white text-center">
          <p className="text-xl font-semibold">
            Want the Complete System?
          </p>
          <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
            This article covers just one topic. The full China Sourcing Suite
            has 205 pages of step-by-step guidance across 3 guides.
          </p>
          <Link
            href="/#pricing"
            className="mt-5 inline-flex items-center justify-center h-11 px-8 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
          >
            Buy the Full Bundle — $19
          </Link>
        </div>
      </article>
    </>
  );
}
