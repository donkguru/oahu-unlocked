import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oahuunlocked.com"),
  title: {
    default: "OahuUnlocked — Best Restaurants, Adventures & Golf on Oahu Hawaii 2025",
    template: "%s | OahuUnlocked",
  },
  description:
    "Discover the best restaurants, outdoor adventures, and golf courses on Oahu Hawaii. Local expert guides to Waikiki dining, hiking, surfing, and top-rated golf.",
  keywords: [
    "Oahu restaurants",
    "best dining Waikiki",
    "Hawaii restaurants",
    "Honolulu food",
    "Oahu adventures",
    "Oahu golf courses",
    "things to do Oahu",
    "Waikiki dining guide",
    "Hawaii travel guide",
  ],
  authors: [{ name: "OahuUnlocked" }],
  creator: "OahuUnlocked",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oahuunlocked.com",
    siteName: "OahuUnlocked",
    title: "OahuUnlocked — Best Restaurants, Adventures & Golf on Oahu Hawaii 2025",
    description:
      "Discover the best restaurants, outdoor adventures, and golf courses on Oahu Hawaii.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Oahu Hawaii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OahuUnlocked — Best Restaurants, Adventures & Golf on Oahu Hawaii 2025",
    description:
      "Discover the best restaurants, outdoor adventures, and golf courses on Oahu Hawaii.",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://oahuunlocked.com",
    languages: {
      "en-US": "https://oahuunlocked.com",
    },
  },
  verification: {
    google: "QOzNpJEN7bJ_BfJcvVKyQAh1Xc1RgLYwkIFUygkwvKc",
    other: {
      "msvalidate.01": "3FCDD1800A2A3BFA9607C549DA1437FD",
      "yandex-verification": "d6a1c2866a529984",
    },
  },
  other: {
    "geo.region": "US-HI",
    "geo.placename": "Honolulu, Hawaii",
    "geo.position": "21.2793;-157.8311",
    ICBM: "21.2793, -157.8311",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID

  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        {pubId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
