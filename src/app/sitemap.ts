import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllGuideSlugs, getGuideContent } from "@/lib/guide";

const base = "https://cn101.cn";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  // Static pages
  const staticPages = [
    { url: base, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/guide/module-1`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/module-2`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/module-3`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/module-4`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/module-5`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/module-6`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/guide/vertical-platforms`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/guide/physical-bases`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/guide/appendices`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/privacy`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.2 },
    { url: `${base}/terms`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.2 },
    { url: `${base}/refund`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.2 },
    { url: `${base}/blog`, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  // Blog posts (dynamic)
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
