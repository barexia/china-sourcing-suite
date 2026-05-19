import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How China Sourcing Guide collects, uses, and protects your personal information.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://cn101.cn/privacy",
  },
};

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-zinc max-w-none text-sm leading-relaxed space-y-6 text-zinc-600">
        <p><strong>Last updated:</strong> May 2026</p>
        <p>
          China Sourcing Guide (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
          your privacy. This policy explains what information we collect and how we use it.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">1. Information We Collect</h2>
        <p>
          When you make a purchase on this site, we collect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your name and email address</li>
          <li>Payment information (processed securely by our payment provider, Paddle)</li>
          <li>Purchase history</li>
        </ul>
        <p>
          We do not store credit card details. All payment processing is handled by Paddle,
          our PCI-compliant payment provider.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">2. How We Use Your Information</h2>
        <p>We use your information solely to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process and fulfill your orders</li>
          <li>Send you download links and purchase receipts</li>
          <li>Respond to customer support requests</li>
          <li>Send product updates (only if you opt in)</li>
        </ul>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">3. Data Sharing</h2>
        <p>
          We do not sell, trade, or share your personal information with third parties
          except as required to process payments (Paddle) or comply with legal obligations.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">4. Data Retention</h2>
        <p>
          We retain your purchase data as long as necessary to provide customer support
          and comply with tax/accounting requirements. You may request deletion of your
          data by contacting us.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data at any time.
          To exercise these rights, email{" "}
          <a href="mailto:hello@cn101.cn" className="text-red-600 underline">hello@cn101.cn</a>.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">6. Cookies</h2>
        <p>
          This website may use essential cookies for functionality (e.g., checkout process).
          We do not use tracking or advertising cookies.
        </p>

        <h2 className="text-lg font-semibold text-zinc-900 mt-10">7. Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a href="mailto:hello@cn101.cn" className="text-red-600 underline">hello@cn101.cn</a>.
        </p>
      </div>
    </main>
  );
}
