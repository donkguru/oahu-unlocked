'use client'

import Header from "@/components/Header";
import WaikikiHero from "@/components/WaikikiHero";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import CuisineGuide from "@/components/CuisineGuide";
import LocalInsights from "@/components/LocalInsights";
import IndianRestaurants from "@/components/IndianRestaurants";
import OahuAdventures from "@/components/OahuAdventures";
import OahuGolf from "@/components/OahuGolf";
import DiningTips from "@/components/DiningTips";
import WhereToStay from "@/components/WhereToStay";
import HomeFAQ from "@/components/HomeFAQ";
import AdUnit from "@/components/AdUnit";
import { AD_SLOTS } from "@/lib/adSlots";
import dynamic from "next/dynamic";
const RestaurantMap = dynamic(() => import("@/components/RestaurantMap"), { ssr: false });
import { SearchProvider } from "@/contexts/SearchContext";

export default function HomeClient() {
  return (
    <SearchProvider>
      <Header />
      <main className="min-h-screen">
        <WaikikiHero />
        <section id="featured-restaurants">
          <FeaturedRestaurants />
        </section>
        <CuisineGuide />
        <IndianRestaurants />
        <LocalInsights />
        <section id="adventures">
          <OahuAdventures />
        </section>
        <section id="golf">
          <OahuGolf />
        </section>
        <div className="container mx-auto max-w-7xl px-6">
          <AdUnit slot={AD_SLOTS.homepageMid} format="horizontal" className="py-4" />
        </div>
        <section id="where-to-stay">
          <WhereToStay />
        </section>
        <section id="explore-map">
          <RestaurantMap />
        </section>
        <HomeFAQ />
        <DiningTips />
      </main>
    </SearchProvider>
  );
}
