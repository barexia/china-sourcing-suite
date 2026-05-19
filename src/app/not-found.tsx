import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
      <span className="text-7xl font-bold text-zinc-200">404</span>
      <h1 className="text-2xl font-bold text-zinc-900 mt-4">
        Page not found
      </h1>
      <p className="text-zinc-500 mt-2 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4 mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-10 px-6 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/#pricing"
          className="inline-flex items-center justify-center h-10 px-6 rounded-xl border border-zinc-200 text-zinc-700 text-sm font-semibold hover:border-zinc-300 transition-colors"
        >
          View Pricing
        </Link>
      </div>
    </main>
  );
}
