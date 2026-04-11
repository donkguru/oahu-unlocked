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
        <DiningTips />
      </main>
    </SearchProvider>
  );
}
