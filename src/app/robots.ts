import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/terms", "/refund"],
    },
    sitemap: "https://cn101.cn/sitemap.xml",
  };
}
