import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog — China Sourcing Guide",
  description:
    "Practical guides and tips for sourcing products from China. Find suppliers on 1688, verify factories, navigate tariffs, and build a profitable importing business.",
  alternates: {
    canonical: "https://cn101.cn/blog",
  },
  openGraph: {
    title: "Blog — China Sourcing Guide",
    description:
      "Practical guides and tips for sourcing products from China.",
    url: "https://cn101.cn/blog",
    siteName: "China Sourcing Guide",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-4 text-zinc-500">No posts yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Sourcing Tips & Guides
        </h1>
        <p className="mt-4 text-lg text-zinc-500 max-w-2xl">
          Practical advice for finding suppliers, verifying factories, navigating
          tariffs, and building a profitable importing business.
        </p>

        <div className="mt-12 space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-zinc-100 pb-8"
            >
              <time className="text-sm text-zinc-400">{post.date}</time>
              <h2 className="mt-1.5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xl sm:text-2xl font-semibold text-zinc-900 group-hover:text-red-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 inline-block text-sm font-medium text-red-600 hover:text-red-700"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Want the Complete System?
          </h2>
          <p className="mt-4 text-zinc-300 max-w-md mx-auto">
            205 pages across 3 guides covering every aspect of sourcing from China — from 1688 setup to customs clearance.
          </p>
          <Link
            href="/#pricing"
            className="mt-6 inline-flex items-center justify-center h-12 px-8 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
          >
            Get the Bundle — $19
          </Link>
        </div>
      </section>
    </>
  );
}
