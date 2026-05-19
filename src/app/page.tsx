import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SubscribeForm from "@/components/SubscribeForm";

const guides = [
  {
    id: "core",
    title: "The Complete China Sourcing Guide",
    pages: "126 pages",
    desc: "The original bestseller — now expanded with 7 new modules. 13 modules covering the entire sourcing pipeline from factory discovery to dispute resolution.",
    modules: [
      "Why Source from China? — Platform landscape (1688 vs Taobao vs Alibaba vs Pinduoduo)",
      "Getting Started on 1688 — Account setup, interface walkthrough, search techniques",
      "Finding & Vetting Suppliers — 5 signs of a good supplier, license checks, factory vs trader",
      "Communication & Negotiation — Copy-paste Chinese templates, MOQ strategies, payment terms",
      "Shipping & Logistics — Freight forwarders, FOB vs CIF vs DDP, customs clearance",
      "Listing & Selling — Product photography, pricing strategy, Amazon/Shopify/eBay listing",
      "Pinduoduo Sourcing — Budget wholesale alternative, price benchmarking, trend spotting",
      "Product Compliance & Certification — FCC, CE, FDA, UL, CPSIA, RoHS per category",
      "Intellectual Property Protection — Design patents, trademarks, avoiding infringement",
      "Payment Security — T/T, L/C, Trade Assurance, fraud prevention, term structures",
      "Sample Management — Ordering, evaluation criteria, rating system, tracking workflow",
      "Factory Visit Guide — What to inspect, questions to ask, red flags, virtual visits",
      "Dispute Resolution — From direct communication to platform mediation and legal action",
    ],
    includes: [
      "50+ Chinese message templates (copy-paste)",
      "Supplier verification checklist",
      "Quality control inspection form",
      "Shipping cost calculator",
      "Customs & duties cheat sheet",
      "FCC/FDA/CE certification quick-reference tables",
      "Factory visit checklist & question bank",
      "Sample tracking & rating spreadsheet",
      "Payment security checklist",
    ],
  },
  {
    id: "vertical",
    title: "China's Vertical Sourcing Platforms Guide",
    pages: "26 pages",
    desc: "Beyond 1688 — discover specialized wholesale platforms that give you factory-direct pricing, lower MOQs, and faster trend access. Covers 11 product categories across 22 platforms.",
    modules: [
      "Apparel & Fashion — VVIC.com, Wangshangyuan, 17zwd, 571xz, and more",
      "Footwear — Kaishan Wang, Sou Xie Wang",
      "Bags & Luggage — Bao Niu Niu (bao66.cn)",
      "Beauty & Cosmetics — NALA Beauty (with FDA compliance docs)",
      "Toys, Home Textiles, Small Commodities — category-specific platforms",
      "DHgate & Cross-border Platforms — Nebula Plan, Chinabrands, CJDropshipping",
    ],
    includes: [
      "12+ vertical platforms analyzed in detail",
      "Platform comparison tables by category",
      "Supply chain depth spectrum (dropship → bulk)",
      "Pitfalls & tips for each platform",
    ],
  },
  {
    id: "physical",
    title: "China Physical Sourcing Bases Manual",
    pages: "53 pages",
    desc: "Your boots-on-the-ground reference. Every major wholesale market and industry town in China, organized by category.",
    modules: [
      "Apparel — Shisanhang, Sijiqing, Shahe, Zhili, Puyuan, Haining, and more",
      "Footwear, Bags, Fabrics — Jinjiang, Wenzhou, Shiling, Baigou, Keqiao",
      "Electronics, Lighting, Hardware — Huaqiangbei, Guzhen, Yongkang",
      "Jewelry, Cosmetics, Toys — Shuibei, Chenghai, Yiwu district guide",
      "Food, Tea, Ceramics, Packaging — Bozhou, Fangcun, Chaozhou, Jingdezhen",
      "City index + 44 industry towns quick reference",
    ],
    includes: [
      "27 product categories with tier-rated markets",
      "44+ one-industry towns mapped",
      "10 detailed market guides (Yiwu, Guangzhou, Shenzhen, Hangzhou, Keqiao, Zhongda, Lecong, Guzhen, Haining, Puyuan)",
      "5 ready-to-use sourcing itineraries",
      "Chinese addresses, metro stops, and building-by-building breakdowns",
    ],
  },
];

const faqs = [
  {
    q: "Do I need to speak Chinese?",
    a: "No. Guide 1 includes 30+ copy-paste Chinese message templates for messaging suppliers. Most serious suppliers on Alibaba also have English-speaking staff.",
  },
  {
    q: "What's included in the bundle?",
    a: "Three complete PDF guides: (1) The original 126-page China Sourcing Guide, (2) The 26-page Vertical Platforms Guide covering specialized online platforms, and (3) The 53-page Physical Sourcing Bases Manual covering offline markets and industry towns. 205 pages total.",
  },
  {
    q: "I already bought the original guide. What about me?",
    a: "The original China Sourcing Guide is still available as a standalone product. The two new guides are also available separately. The bundle is for new buyers who want everything.",
  },
  {
    q: "Is this only for 1688?",
    a: "No. Guide 1 covers 1688, Taobao, Alibaba, and Pinduoduo. Guide 2 covers 12+ specialized vertical platforms like VVIC, NALA, and DHgate. Guide 3 covers physical markets across all of China.",
  },
  {
    q: "How are the guides delivered?",
    a: "Instant PDF download after purchase. You get all three PDFs at once. Lifetime access and free updates included.",
  },
  {
    q: "Can I get a refund?",
    a: "Due to the digital nature of our products, sales are final. However, if you have a legitimate issue (duplicate purchase, technical problem), email us and we'll review your case.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "China Sourcing Suite — 3 Complete Guides to Sourcing from China",
          description:
            "Three complete PDF guides covering 1688, Alibaba, vertical platforms, and China's offline wholesale markets. 205 pages total.",
          image: [
            "https://cn101.cn/cover-1280x720.png",
            "https://cn101.cn/cover-1024x1024.png",
          ],
          offers: {
            "@type": "Offer",
            price: "19",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://cn101.cn/#pricing",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do I need to speak Chinese?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Guide 1 includes 30+ copy-paste Chinese message templates for messaging suppliers. Most serious suppliers on Alibaba also have English-speaking staff.",
              },
            },
            {
              "@type": "Question",
              name: "What's included in the bundle?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Three complete PDF guides: (1) The original 126-page China Sourcing Guide, (2) The 26-page Vertical Platforms Guide covering specialized online platforms, and (3) The 53-page Physical Sourcing Bases Manual covering offline markets and industry towns. 205 pages total.",
              },
            },
            {
              "@type": "Question",
              name: "I already bought the original guide. What about me?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The original China Sourcing Guide is still available as a standalone product. The two new guides are also available separately. The bundle is for new buyers who want everything.",
              },
            },
            {
              "@type": "Question",
              name: "Is this only for 1688?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Guide 1 covers 1688, Taobao, Alibaba, and Pinduoduo. Guide 2 covers 12+ specialized vertical platforms like VVIC, NALA, and DHgate. Guide 3 covers physical markets across all of China.",
              },
            },
            {
              "@type": "Question",
              name: "How are the guides delivered?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Instant PDF download after purchase. You get all three PDFs at once. Lifetime access and free updates included.",
              },
            },
            {
              "@type": "Question",
              name: "Can I get a refund?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Due to the digital nature of our products, sales are final. However, if you have a legitimate issue (duplicate purchase, technical problem), email us and we'll review your case.",
              },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "China Sourcing Guide",
          url: "https://cn101.cn",
          logo: "https://cn101.cn/cover-1024x1024.png",
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@cn101.cn",
            contactType: "customer support",
          },
        }}
      />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight">
            China Sourcing Suite
          </span>
          <div className="flex items-center gap-4">
            <a
              href="/blog"
              className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Blog
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-red-600 hover:text-red-700"
            >
              Get the Bundle — $19
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-amber-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              205 Pages &middot; 3 Complete Guides
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
              The Complete{" "}
              <span className="text-red-600">China Sourcing Suite</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              Three guides that cover every way to source from China — online
              platforms, vertical marketplaces, and physical wholesale markets.
              One price. One download.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Get the Bundle — $19
              </a>
              <a
                href="#guides"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-zinc-300 text-zinc-700 font-medium text-sm hover:bg-zinc-50 transition-colors"
              >
                See What&apos;s Inside
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Instant PDF download &middot; Lifetime updates &middot; 30-day
              refund
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["3", "Comprehensive Guides"],
              ["205", "Total Pages"],
              ["27", "Product Categories"],
              ["44+", "Industry Towns Mapped"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-zinc-900">{stat}</div>
                <div className="text-sm text-zinc-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Why You Need All Three */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Most Sellers Only Know Half the Picture
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              1688 and Alibaba work — but they&apos;re just the beginning.
              China&apos;s supply chain has layers of specialized platforms and
              physical markets that most Western buyers never discover. The
              difference between average pricing and factory-direct pricing is
              knowing where to look.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "You only know 1688",
                desc: "It's the biggest platform, but vertical platforms like VVIC (apparel), bao66.cn (bags), and NALA (cosmetics) offer better prices and lower MOQs in their categories.",
                fix: "Guide 2 covers 12+ vertical platforms with full analysis.",
              },
              {
                title: "You've never visited a market",
                desc: "Physical wholesale markets move faster than online. New styles hit Guangzhou Shisanhang weeks before they appear on 1688. And in-person negotiation beats online haggling.",
                fix: "Guide 3 maps every major market and industry town.",
              },
              {
                title: "You're paying middlemen",
                desc: "Every layer between you and the factory adds cost — trading companies, sourcing agents, and platform markups. The closer you get to the source, the more you keep.",
                fix: "All three guides show you how to cut out intermediaries.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-zinc-200 bg-white flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 text-lg font-bold mb-4">
                  !
                </div>
                <h3 className="font-semibold text-lg text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <p className="mt-3 text-xs font-medium text-red-600">
                  {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside — 3 Guides */}
      <section id="guides" className="py-20 sm:py-28 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Three Guides, One Complete System
            </h2>
            <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
              From finding products online to visiting factories in person —
              every sourcing channel covered in detail.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {guides.map((guide, i) => (
              <details
                key={guide.id}
                className="group rounded-2xl border border-zinc-700 bg-zinc-800/50 overflow-hidden"
              >
                <summary className="flex items-center gap-4 p-5 sm:p-6 cursor-pointer hover:bg-zinc-800 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/20 text-red-400 font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-white text-base sm:text-lg block">
                      {guide.title}
                    </span>
                    <span className="text-xs text-zinc-400 mt-0.5 block">
                      {guide.pages}
                    </span>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-zinc-700">
                  <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                    {guide.desc}
                  </p>
                  <a
                    href={
                      i === 0
                        ? "/guide/module-1"
                        : i === 1
                          ? "/guide/vertical-platforms"
                          : "/guide/physical-bases"
                    }
                    className="mt-3 inline-block text-xs font-medium text-red-400 hover:text-red-300 transition-colors"
                  >
                    Read more about this guide &rarr;
                  </a>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        What&apos;s Covered
                      </h4>
                      <ul className="space-y-1.5">
                        {guide.modules.map((m) => (
                          <li
                            key={m}
                            className="text-sm text-zinc-300 flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-0.5">-</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Includes
                      </h4>
                      <ul className="space-y-1.5">
                        {guide.includes.map((item) => (
                          <li
                            key={item}
                            className="text-sm text-zinc-300 flex items-start gap-2"
                          >
                            <svg
                              aria-hidden="true"
                              className="w-4 h-4 text-green-400 mt-0.5 shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-20 sm:py-28 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Who Is This For?
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                role: "Dropshippers",
                desc: "Find cheaper suppliers and faster shipping. Discover platforms optimized for one-piece ordering and auto-fulfillment.",
              },
              {
                role: "Amazon / eBay Sellers",
                desc: "Source products directly instead of going through middlemen. Use the physical market guide to find unique items your competitors don't have.",
              },
              {
                role: "Shopify Store Owners",
                desc: "Build private-label products at factory prices. The vertical platforms guide shows you where to find category-specific suppliers.",
              },
              {
                role: "E-Commerce Newbies",
                desc: "Start with a proven system. Three guides take you from absolute beginner to confident sourcer — online and offline.",
              },
              {
                role: "Product Creators",
                desc: "Find manufacturers for custom product ideas. Navigate MOQs, production runs, and factory visits with the physical markets manual.",
              },
              {
                role: "Import / Export Beginners",
                desc: "Learn the full logistics chain from factory to doorstep. Understand duties, taxes, and the difference between FOB, CIF, and DDP.",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="p-6 rounded-2xl border border-zinc-200 bg-white"
              >
                <h3 className="font-semibold text-lg text-zinc-900">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Get the Complete Bundle
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                Three guides. One payment. Lifetime access.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-red-200 bg-white p-8 sm:p-10 shadow-xl shadow-red-100/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Best Value
              </div>
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-zinc-900">$19</span>
                  <span className="text-sm text-zinc-400 line-through">$46</span>
                </div>
                <div className="text-zinc-500 mt-1">
                  one-time payment &middot; 3 PDFs
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Guide 1: Complete China Sourcing Guide (126 pages)",
                  "Guide 2: Vertical Sourcing Platforms Guide (26 pages)",
                  "Guide 3: Physical Sourcing Bases Manual (53 pages)",
                  "30+ Chinese message templates",
                  "Supplier verification checklist",
                  "Quality control inspection form",
                  "Shipping cost calculator spreadsheet",
                  "Customs & duties cheat sheet",
                  "5 ready-to-use sourcing itineraries",
                  "44+ industry towns reference",
                  "Lifetime free updates",
                  "30-day money-back guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-green-500 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-zinc-600">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://sourcingguide.gumroad.com/l/chinasourcing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center h-12 w-full rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
              >
                Buy Now — $19
              </a>
              <p className="mt-3 text-xs text-center text-zinc-400">
                Secure checkout via Gumroad &middot; Instant PDF download
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Frequently Asked Questions
            </h2>
            <div className="mt-12 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-zinc-50 transition-colors [&::-webkit-details-marker]:hidden">
                    <span className="font-medium text-zinc-900 text-sm pr-4">
                      {faq.q}
                    </span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Source from China Like a Pro?
          </h2>
          <p className="mt-6 text-lg text-zinc-300">
            Three guides. 205 pages of actionable content. The complete system
            for finding suppliers, negotiating pricing, and navigating China's
            supply chain — online and offline.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center justify-center h-12 px-10 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
          >
            Get the Bundle — $19
          </a>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 sm:py-28 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Get a <span className="text-red-600">Free Sample</span>
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Subscribe and get a free chapter of our Physical Sourcing Bases manual — 10 pages of actionable market intelligence.
          </p>
          <SubscribeForm />
          <p className="mt-4 text-xs text-zinc-400">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-zinc-400">
          <span>&copy; 2026 China Sourcing Guide. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="hover:text-zinc-600">Blog</Link>
            <Link href="/terms" className="hover:text-zinc-600">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-600">Privacy</Link>
            <Link href="/refund" className="hover:text-zinc-600">Refund Policy</Link>
            <a href="mailto:hello@cn101.cn" className="hover:text-zinc-600">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
