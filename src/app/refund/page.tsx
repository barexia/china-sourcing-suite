import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for digital products purchased from China Sourcing Guide.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://cn101.cn/refund",
  },
};

export default function Refund() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Refund Policy</h1>
      <div className="prose prose-zinc max-w-none text-sm leading-relaxed space-y-6 text-zinc-600">
        <p>
          Due to the digital nature of our products (instant PDF download), all sales
          are final and non-refundable once the files have been delivered.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">Exceptions</h2>
        <p>
          We may offer a refund on a case-by-case basis for the following situations:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Duplicate purchase</li>
          <li>Technical issue preventing download that we cannot resolve</li>
          <li>Incorrect amount charged</li>
        </ul>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">How to Request</h2>
        <p>
          If you believe you qualify for an exception, email us at{" "}
          <a href="mailto:hello@cn101.cn" className="text-red-600 underline">hello@cn101.cn</a>{" "}
          with your order number and reason. We review each request individually.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:hello@cn101.cn" className="text-red-600 underline">hello@cn101.cn</a>
        </p>
      </div>
    </main>
  );
}
