'use client'

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "@/components/ui/external-link";
import { Waves, Mountain, Landmark, Zap, Palmtree, Clock, MapPin, DollarSign, TrendingUp } from "lucide-react";
import { adventures } from "@/data/adventures";

const categoryIcons = {
  "Water Activities": Waves,
  "Hiking & Nature": Mountain,
  "Cultural Experiences": Landmark,
  "Extreme Adventures": Zap,
  "Beach Activities": Palmtree,
};

const difficultyColors = {
  Easy: "bg-accent text-accent-foreground",
  Moderate: "bg-warning text-warning-foreground",
  Challenging: "bg-destructive/70 text-destructive-foreground",
  Expert: "bg-destructive text-destructive-foreground",
};

const OahuAdventures = () => {
  const [activeCategory, setActiveCategory] = useState("Water Activities");
  const categories = Object.keys(categoryIcons);

  const filteredAdventures = adventures.filter((adv) => adv.category === activeCategory);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Best Adventures on Oahu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover unforgettable experiences across the island. From thrilling water sports to cultural immersion and breathtaking hikes.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Adventures</div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-3xl font-bold text-accent">5</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-3xl font-bold text-primary">All Levels</div>
              <div className="text-sm text-muted-foreground">Difficulty</div>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-3xl font-bold text-accent">Year-Round</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 h-auto">
            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category}</span>
                  <span className="sm:hidden">{category.split(" ")[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Adventure Cards */}
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAdventures.map((adventure) => (
                  <Card
                    key={adventure.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-[1.02]"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={adventure.image}
                        alt={adventure.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge
                        className={`absolute top-3 right-3 ${difficultyColors[adventure.difficulty]}`}
                      >
                        {adventure.difficulty}
                      </Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {adventure.name}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {adventure.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="h-4 w-4 text-accent" />
                          <span>{adventure.priceRange}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{adventure.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{adventure.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-xs">{adventure.bestTime}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {adventure.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <ExternalLink
                        href={adventure.website}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        showIcon
                        iconSize={16}
                      >
                        Learn More & Book
                      </ExternalLink>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-lg border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-center">
          <h3 className="text-2xl font-bold mb-2">Planning Your Oahu Adventure?</h3>
          <p className="text-muted-foreground mb-4">
            Combine adventures with great dining! Check out our restaurant guide for the best spots to refuel after your activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OahuAdventures;
