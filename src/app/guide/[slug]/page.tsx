import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllGuideSlugs, getGuideContent, getGuideNav } from "@/lib/guide";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getGuideContent(slug);
  if (!content) return {};
  return {
    title: content.title,
    description: content.excerpt,
    alternates: {
      canonical: `https://cn101.cn/guide/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.excerpt,
      type: "article",
      url: `https://cn101.cn/guide/${slug}`,
      siteName: "China Sourcing Guide",
      images: [
        {
          url: "/cover-1280x720.png",
          width: 1280,
          height: 720,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.excerpt,
      images: ["/cover-1280x720.png"],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getGuideContent(slug);
  if (!content) notFound();

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
        <span className="text-zinc-800 font-medium">{content.title}</span>
      </nav>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.title,
            description: content.excerpt,
            author: { "@type": "Organization", name: "China Sourcing Guide" },
            isPartOf: {
              "@type": "Book",
              name: "China Sourcing Suite",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-zinc-900">
          {content.title}
        </h1>
        <div
          className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:text-zinc-900 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:text-zinc-100"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />

        {/* CTA upsell */}
        <div className="not-prose mt-16 p-8 rounded-2xl bg-zinc-900 text-white text-center">
          <p className="text-xl font-semibold">
            This is one module of the full China Sourcing Suite
          </p>
          <p className="text-sm text-zinc-300 mt-2 max-w-md mx-auto">
            Get all 13 modules plus 2 bonus guides — 205 pages of actionable
            content for sourcing products from China.
          </p>
          <Link
            href="/#pricing"
            className="mt-5 inline-flex items-center justify-center h-11 px-8 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
          >
            Buy the Full Bundle — $19
          </Link>
        </div>
      </article>

      {/* Prev / Next navigation */}
      <NavButtons slug={slug} />
    </>
  );
}

function NavButtons({ slug }: { slug: string }) {
  const { prev, next } = getGuideNav(slug);
  if (!prev && !next) return null;
  return (
    <nav className="max-w-3xl mx-auto px-4 pb-16 flex gap-4" aria-label="Guide navigation">
      {prev ? (
        <Link
          href={`/guide/${prev.slug}`}
          className="flex-1 rounded-xl border border-zinc-200 p-4 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
        >
          <span className="text-xs text-zinc-400 font-medium">← Previous</span>
          <span className="block text-sm text-zinc-800 font-medium mt-1 line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/guide/${next.slug}`}
          className="flex-1 rounded-xl border border-zinc-200 p-4 text-right hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
        >
          <span className="text-xs text-zinc-400 font-medium">Next →</span>
          <span className="block text-sm text-zinc-800 font-medium mt-1 line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
