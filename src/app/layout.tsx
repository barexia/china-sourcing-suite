import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://cn101.cn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "China Sourcing Suite — 3 Complete Guides to Sourcing from China",
    template: "%s | China Sourcing Guide",
  },
  description:
    "Complete guides to sourcing from China — online platforms, physical markets, and the full pipeline. Find suppliers on 1688, vet factories, and navigate wholesale markets.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "China Sourcing Guide",
    title: "China Sourcing Suite — 3 Complete Guides to Sourcing from China",
    description:
      "3 guides, 205 pages. The complete system for sourcing products from China at factory prices.",
    url: siteUrl,
    images: [
      {
        url: "/cover-1280x720.png",
        width: 1280,
        height: 720,
        alt: "China Sourcing Suite cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Sourcing Suite",
    description:
      "3 guides, 205 pages. Source from China at factory prices.",
    images: ["/cover-1280x720.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "msvalidate.01": "3FDC108A6886BE54E93E0D37B5C5CF3C",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans">
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","ws2ibzwpge");`
        }} />
        {children}
      </body>
    </html>
  );
}
