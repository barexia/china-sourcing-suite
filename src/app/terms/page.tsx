import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the purchase and use of digital products from China Sourcing Guide.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://cn101.cn/terms",
  },
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <div className="prose prose-zinc max-w-none text-sm leading-relaxed space-y-6 text-zinc-600">
        <p>
          These Terms of Service govern your purchase and use of digital products from
          China Sourcing Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By purchasing
          or downloading our products, you agree to these terms.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">1. Products</h2>
        <p>
          All products sold on this site are digital goods (PDF files). No physical items
          will be shipped. Upon successful payment, you will receive instant access to
          download the purchased materials.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">2. License &amp; Usage</h2>
        <p>
          You are granted a personal, non-transferable license to use the purchased
          materials for your own business purposes. You may not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Resell, redistribute, or share the PDF files with others</li>
          <li>Upload the content to any public platform or file-sharing service</li>
          <li>Modify and resell the content as your own</li>
        </ul>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">3. Refunds</h2>
        <p>
          Due to the digital nature of our products, all sales are final and
          non-refundable once the files are delivered. Exceptions may be made on
          a case-by-case basis. See our{" "}
          <a href="/refund" className="text-red-600 underline">Refund Policy</a> for details.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">4. Disclaimer</h2>
        <p>
          The information in our guides is provided for educational and informational
          purposes. While we strive for accuracy, we make no guarantees about specific
          business results. Sourcing from China involves risks, and you are responsible
          for your own business decisions.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">5. Changes</h2>
        <p>
          We reserve the right to update these terms at any time. Changes will be posted
          on this page.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">6. Contact</h2>
        <p>
          If you have any questions about these terms, contact us at{" "}
          <a href="mailto:hello@cn101.cn" className="text-red-600 underline">hello@cn101.cn</a>.
        </p>
      </div>
    </main>
  );
}
