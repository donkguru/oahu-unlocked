'use client'

import { ExternalLink } from "@/components/ui/external-link";
import { MapPin, Star, Waves, Mountain, UtensilsCrossed } from "lucide-react";
import { bookingSearchUrl } from "@/lib/affiliates";

const areas = [
  {
    name: "Waikiki",
    tagline: "Beach, nightlife & dining at your doorstep",
    description: "The heart of Oahu tourism. Walking distance to the best restaurants, surf lessons, and Diamond Head.",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    highlights: ["Beach access", "Walkable dining", "Surf & watersports"],
    bestFor: "First-timers",
    url: bookingSearchUrl("Waikiki, Honolulu, Hawaii"),
  },
  {
    name: "North Shore",
    tagline: "Surf culture, shrimp trucks & small-town charm",
    description: "World-famous surf breaks, Giovanni's Shrimp Truck, and the laid-back vibe of Haleiwa town.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    highlights: ["Big wave surfing", "Local food trucks", "Haleiwa shops"],
    bestFor: "Surf lovers",
    url: bookingSearchUrl("Haleiwa, North Shore, Oahu, Hawaii"),
  },
  {
    name: "Kailua",
    tagline: "Windward coast beaches & boutique town",
    description: "Home to Lanikai Beach and Kailua Beach Park. Quieter than Waikiki with excellent local restaurants.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop",
    highlights: ["Lanikai Beach", "Kayaking", "Local eateries"],
    bestFor: "Beach seekers",
    url: bookingSearchUrl("Kailua, Oahu, Hawaii"),
  },
  {
    name: "Ko Olina",
    tagline: "Resort lagoons on the west side",
    description: "Calm, family-friendly lagoons away from the crowds. Home to Disney Aulani and Four Seasons.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    highlights: ["Calm lagoons", "Luxury resorts", "Golf courses"],
    bestFor: "Families",
    url: bookingSearchUrl("Ko Olina, Kapolei, Oahu, Hawaii"),
  },
  {
    name: "Kaneohe",
    tagline: "Lush Windward side, close to Kualoa",
    description: "Gateway to Kualoa Ranch, He'eia Pier, and the famous Kaneohe Bay sandbar. Lush and green.",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    highlights: ["Kualoa Ranch", "Bay sandbar", "Haiku Gardens"],
    bestFor: "Adventure base",
    url: bookingSearchUrl("Kaneohe, Oahu, Hawaii"),
  },
  {
    name: "Honolulu",
    tagline: "City centre — museums, culture & food",
    description: "Near Chinatown, Iolani Palace, and the best local Hawaiian food spots. Urban Oahu at its finest.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
    highlights: ["Local food scene", "Pearl Harbor", "Museums"],
    bestFor: "Culture & history",
    url: bookingSearchUrl("Honolulu, Hawaii"),
  },
];

export default function WhereToStay() {
  return (
    <section id="where-to-stay" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Where to Stay on Oahu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every area of Oahu has its own vibe. Find the neighbourhood that fits your trip.
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.name}
                className="group rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name} Oahu`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium uppercase tracking-wide">{area.bestFor}</span>
                    </div>
                    <h3 className="text-xl font-bold">{area.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm font-medium text-primary mb-1">{area.tagline}</p>
                  <p className="text-sm text-muted-foreground mb-4">{area.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {area.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <ExternalLink
                    href={area.url}
                    showIcon={false}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Find Hotels in {area.name}
                  </ExternalLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Hotel links open Booking.com with availability for your dates. OahuUnlocked may earn a commission at no extra cost to you.
        </p>
      </div>
    </section>
  );
}
