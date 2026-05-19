import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json(null, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server config error" },
        { status: 500, headers: corsHeaders }
      );
    }

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("MailerLite error:", err);
      return NextResponse.json(
        { error: "Subscription failed" },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        download: "/China-Physical-Sourcing-Bases-Sample.pdf",
      },
      { headers: corsHeaders }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
