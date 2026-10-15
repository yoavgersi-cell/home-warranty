import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAnalytics } from "@/components/google-analytics";
import { hreflangLanguages } from "@/lib/regions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.tophomewarranty.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Top Home Warranty - Compare the Best Home Warranty Companies",
    template: "%s | Top Home Warranty",
  },
  description:
    "Compare the best home warranty companies of 2026 - plans ranked by coverage, price, service fees, claim limits and real customer support.",
  keywords: [
    "home warranty",
    "best home warranty companies",
    "home warranty comparison",
    "home warranty reviews",
    "home warranty cost",
    "appliance warranty",
    "home systems warranty",
    "American Home Shield vs Choice",
  ],
  openGraph: {
    title: "Top Home Warranty - Compare the Best Home Warranty Companies",
    description:
      "Independent, side-by-side comparisons of top home warranty companies - ranked on coverage, price and claims service.",
    type: "website",
    siteName: "Top Home Warranty",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Home Warranty - Compare the Best Home Warranty Companies",
    description:
      "Independent, side-by-side comparisons of top home warranty companies.",
  },
  other: {
    "geo.region": "US",
    "geo.position": "37.0902;-95.7129",
    "ICBM": "37.0902, -95.7129",
    "content-language": "en-US",
  },
  alternates: {
    canonical: SITE_URL,
    languages: hreflangLanguages(SITE_URL, "/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Top Home Warranty",
              url: SITE_URL,
              logo: `${SITE_URL}/logo-mark.png`,
              areaServed: { "@type": "Country", name: "United States" },
              knowsAbout: ["Home warranties", "Home warranty plans", "Home service contracts", "Home warranty claims"],
              description:
                "Independent guides and provider comparisons for home warranties - in-depth reviews, pricing research, and side-by-side comparisons.",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Top Home Warranty",
              url: SITE_URL,
              description:
                "Compare trusted home warranty companies side by side.",
            }),
          }}
        />
        <MetaPixel />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
