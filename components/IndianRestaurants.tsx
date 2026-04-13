'use client'

import { restaurants } from "@/data/restaurants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "@/components/ui/external-link";
import { MapPin, Phone, Clock, Star, Car, Utensils } from "lucide-react";

const IndianRestaurants = () => {
  const indianRestaurants = restaurants.filter(r => r.cuisine === "Indian");

  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            🍛 Authentic Indian Cuisine
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Indian Restaurants Near Duke's Waikiki
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the rich flavors of authentic Indian cuisine, from classic North Indian curries to South Indian specialties.
            All within 15 minutes of Duke's Waikiki.
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {indianRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Restaurant Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={`${restaurant.name} — Indian restaurant in Honolulu, Oahu Hawaii`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="flex items-center gap-1 text-sm font-semibold">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {restaurant.rating}
                  </span>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{restaurant.name}</CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline">{restaurant.priceRange}</Badge>
                      <Badge variant="secondary">{restaurant.cuisine}</Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-3 text-base">
                  {restaurant.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Distance & Drive Time */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.distanceFromDukes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Car className="w-4 h-4" />
                    <span>{restaurant.driveTime}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${restaurant.phone}`} className="hover:text-primary transition-colors">
                      {restaurant.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.hours}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Utensils className="w-4 h-4" />
                    <span>Signature Dishes</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {restaurant.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Website Link */}
                <div className="pt-4 border-t">
                  <ExternalLink
                    href={restaurant.website}
                    className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    View Menu & Order
                  </ExternalLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-semibold mb-3">Why Try Indian Cuisine in Oahu?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <p className="mb-2">
                <strong className="text-foreground">Authentic Flavors:</strong> These restaurants bring traditional recipes and spices directly from India, offering an authentic taste experience.
              </p>
              <p>
                <strong className="text-foreground">Vegetarian Paradise:</strong> Indian cuisine offers some of the world's best vegetarian and vegan options, perfect for plant-based diners.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-foreground">Spice Levels:</strong> Most restaurants offer customizable spice levels, from mild to extra hot, so everyone can enjoy.
              </p>
              <p>
                <strong className="text-foreground">Great Value:</strong> Enjoy flavorful, filling meals at reasonable prices, with many lunch specials available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndianRestaurants;
