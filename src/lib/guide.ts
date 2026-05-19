import fs from "fs";
import path from "path";
import { marked } from "marked";

const guideDir = path.join(process.cwd(), "src", "content", "guide");

const moduleMeta: Record<string, { title: string; excerpt: string }> = {
  "module-1": {
    title: "Why Source from China? — Platform Landscape & Cost Breakdown",
    excerpt:
      "Learn why China dominates global manufacturing, the difference between 1688, Taobao, Alibaba, and Pinduoduo, and how to save 30-50% by sourcing directly.",
  },
  "module-2": {
    title: "Getting Started on 1688 — Account Setup & Search Guide",
    excerpt:
      "Step-by-step guide to setting up a 1688 account, navigating the interface in Chinese, and finding suppliers at factory-direct prices.",
  },
  "module-3": {
    title: "Finding & Vetting Chinese Suppliers — Verification Checklist",
    excerpt:
      "5 signs of a good supplier, how to check Chinese business licenses, and how to tell a factory from a trading company.",
  },
  "module-4": {
    title: "Communicating with Chinese Suppliers — Templates & Negotiation",
    excerpt:
      "Copy-paste Chinese message templates, MOQ negotiation strategies, and payment terms for sourcing from China.",
  },
  "module-5": {
    title: "Shipping from China — Freight, Customs & Logistics Guide",
    excerpt:
      "FOB vs CIF vs DDP explained, how to choose a freight forwarder, customs clearance, and shipping cost calculator.",
  },
  "module-6": {
    title: "Listing & Selling Products from China — Amazon, Shopify, eBay",
    excerpt:
      "Product photography, pricing strategy, and listing optimization for products sourced from Chinese suppliers.",
  },
  "module-7": {
    title: "Sourcing on Pinduoduo — The Budget Wholesale Alternative",
    excerpt:
      "How to source on Pinduoduo for ultra-budget products, sample testing, price benchmarking, and integrating PDD into your sourcing workflow.",
  },
  "module-8": {
    title: "Product Compliance & Certification — Avoid Costing Mistakes",
    excerpt:
      "FCC, CE, FDA, UL, CPSIA, RoHS and more. Know what certifications your products need for US, EU, and other markets.",
  },
  "module-9": {
    title: "Intellectual Property Protection — Design, Patents & Trademarks",
    excerpt:
      "Protect your product designs, register Chinese patents and trademarks, avoid infringing others' IP, and handle Amazon IP complaints.",
  },
  "module-10": {
    title: "Payment Security & Supply Chain Finance",
    excerpt:
      "T/T, L/C, Alibaba Trade Assurance, PayPal, and escrow — choose the right payment method and structure terms that protect your capital.",
  },
  "module-11": {
    title: "Sample Management — Ordering, Evaluating & Tracking",
    excerpt:
      "Systematic sample ordering process, evaluation criteria, rating system, and sample-to-bulk-order workflow for repeatable quality.",
  },
  "module-12": {
    title: "Factory Visit Guide — What to Look For & What to Ask",
    excerpt:
      "How to plan and conduct factory visits, what to inspect on the production floor, red flags to watch for, and virtual visit alternatives.",
  },
  "module-13": {
    title: "Dispute Resolution — When Things Go Wrong",
    excerpt:
      "Step-by-step system for resolving disputes with Chinese suppliers — from direct communication to platform mediation and legal action.",
  },
  "vertical-platforms": {
    title: "China's Vertical Sourcing Platforms Guide — Beyond 1688",
    excerpt:
      "Discover specialized wholesale platforms for apparel, footwear, beauty, toys, and more. Factory-direct pricing without the middleman.",
  },
  "physical-bases": {
    title: "China Physical Sourcing Bases Manual — Markets & Industry Towns",
    excerpt:
      "Every major wholesale market and industry town in China organized by category. Yiwu, Guangzhou, Shenzhen, and 44+ industry towns mapped.",
  },
  "appendices": {
    title:
      "China Sourcing Guide Appendices — Templates, Checklists & Forms",
    excerpt:
      "Chinese message templates, supplier verification checklist, QC inspection form, shipping cost calculator, and customs cheat sheet.",
  },
};

const guideOrder = [
  "module-1",
  "module-2",
  "module-3",
  "module-4",
  "module-5",
  "module-6",
  "module-7",
  "module-8",
  "module-9",
  "module-10",
  "module-11",
  "module-12",
  "module-13",
  "vertical-platforms",
  "physical-bases",
  "appendices",
];

export function getAllGuideSlugs(): string[] {
  // Use the defined order; fall back to directory listing for unknown slugs
  const files = fs
    .readdirSync(guideDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
  return guideOrder.filter((s) => files.includes(s));
}

export function getGuideNav(
  slug: string
): { prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null } {
  const slugs = getAllGuideSlugs();
  const idx = slugs.indexOf(slug);
  if (idx === -1) return { prev: null, next: null };

  const prevSlug = idx > 0 ? slugs[idx - 1] : null;
  const nextSlug = idx < slugs.length - 1 ? slugs[idx + 1] : null;

  return {
    prev: prevSlug ? { slug: prevSlug, title: moduleMeta[prevSlug]?.title ?? prevSlug } : null,
    next: nextSlug ? { slug: nextSlug, title: moduleMeta[nextSlug]?.title ?? nextSlug } : null,
  };
}

export function getGuideContent(
  slug: string
): { slug: string; title: string; excerpt: string; content: string } | null {
  const meta = moduleMeta[slug];
  if (!meta) return null;

  const filePath = path.join(guideDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  // Strip first # heading line (title is managed by page metadata)
  const contentBody = raw.replace(/^# .+\n?/, "");
  const html = marked.parse(contentBody);

  return {
    slug,
    title: meta.title,
    excerpt: meta.excerpt,
    content: html as string,
  };
}

export function getModuleSlugFromIndex(index: number): string | null {
  const slugs = getAllGuideSlugs().sort();
  return slugs[index] ?? null;
}
