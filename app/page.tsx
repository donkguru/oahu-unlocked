import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { LocalBusinessStructuredData, WebsiteStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "OahuUnlocked — Best Restaurants, Adventures & Golf on Oahu Hawaii 2025",
  description:
    "Discover the best restaurants, outdoor adventures, and golf courses on Oahu Hawaii. Expert guides to Waikiki dining, hiking, surfing, and top-rated golf.",
  alternates: {
    canonical: "https://oahuunlocked.com",
  },
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData />
      <WebsiteStructuredData />
      <HomeClient />
    </>
  );
}
