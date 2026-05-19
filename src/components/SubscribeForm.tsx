"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg(
          `✅ Check your inbox for the download link. <a href="${data.download}" class="text-red-600 underline font-medium" download>Or click here to download now.</a>`
        );
        setEmail("");
      } else {
        setMsg("Something went wrong. Try again.");
      }
    } catch {
      setMsg("Network error. Try again.");
    }
    setLoading(false);
  }

  return (
    <>
      <form
        id="subscribe-form"
        className="mt-8 flex gap-3 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-11 px-4 rounded-lg border border-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-11 px-6 rounded-lg bg-red-600 text-white font-medium text-sm hover:bg-red-700 transition-colors whitespace-nowrap disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Me the Free PDF"}
        </button>
      </form>
      <p
        className="msg mt-4 text-sm text-zinc-500"
        dangerouslySetInnerHTML={{ __html: msg }}
      />
    </>
  );
}
