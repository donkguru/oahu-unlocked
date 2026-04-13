'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, DollarSign, Phone, ExternalLink as ExternalLinkIcon } from "lucide-react";
import { restaurants, Restaurant } from '@/data/restaurants';
import { useSearch } from "@/contexts/SearchContext";
import ExternalLink from "@/components/ui/external-link";

// Group restaurants by hotel using the unified data
const restaurantsByHotel = restaurants.reduce((acc, restaurant) => {
  if (!restaurant.hotel) return acc;
  
  const existingHotel = acc.find(h => h.hotel === restaurant.hotel);
  if (existingHotel) {
    existingHotel.restaurants.push(restaurant);
  } else {
    acc.push({
      hotel: restaurant.hotel,
      hotelWebsite: restaurant.hotelWebsite || '',
      distanceFromDukes: restaurant.distanceFromDukes,
      walkingTime: restaurant.walkingTime,
      restaurants: [restaurant]
    });
  }
  return acc;
}, [] as Array<{
  hotel: string;
  hotelWebsite: string;
  distanceFromDukes: string;
  walkingTime: string;
  restaurants: Restaurant[];
}>);

const FeaturedRestaurants = () => {
  const { filteredResults, isSearchActive, searchQuery } = useSearch();
  
  // Use filtered results when search is active, otherwise show all restaurants
  const displayRestaurants = isSearchActive ? filteredResults : restaurants;
  
  // Group restaurants by hotel using the unified data
  const restaurantsByHotel = displayRestaurants.reduce((acc, restaurant) => {
    if (!restaurant.hotel) return acc;
    
    const existingHotel = acc.find(h => h.hotel === restaurant.hotel);
    if (existingHotel) {
      existingHotel.restaurants.push(restaurant);
    } else {
      acc.push({
        hotel: restaurant.hotel,
        hotelWebsite: restaurant.hotelWebsite || '',
        distanceFromDukes: restaurant.distanceFromDukes,
        walkingTime: restaurant.walkingTime,
        restaurants: [restaurant]
      });
    }
    return acc;
  }, [] as Array<{
    hotel: string;
    hotelWebsite: string;
    distanceFromDukes: string;
    walkingTime: string;
    restaurants: Restaurant[];
  }>);

  return (
    <section id="restaurants" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            {isSearchActive ? "Search Results" : "Distance from Duke's"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {isSearchActive 
              ? `Search Results for "${searchQuery}"` 
              : <>Waikiki Restaurants by <span className="gradient-text">Hotel & Distance</span></>
            }
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isSearchActive 
              ? `Found ${filteredResults.length} restaurant${filteredResults.length !== 1 ? 's' : ''} matching your search`
              : "Restaurants organized by hotel location and walking distance from Duke's Waikiki, the iconic beachfront landmark. Perfect for planning your dining adventures around Waikiki Beach."
            }
          </p>
        </div>
        
        {/* Hotels and Restaurants */}
        <div className="space-y-16">
          {restaurantsByHotel.map((hotelGroup, hotelIndex) => (
            <div key={hotelIndex} className="space-y-8">
              {/* Hotel Header */}
              <div className="text-center">
                <ExternalLink 
                  href={hotelGroup.hotelWebsite}
                  className="inline-block group"
                  iconSize={20}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 hover:text-primary transition-colors duration-200 group-hover:underline">
                    {hotelGroup.hotel}
                  </h3>
                </ExternalLink>
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <Badge variant="outline" className="text-primary border-primary">
                    <MapPin className="h-3 w-3 mr-1" />
                    {hotelGroup.distanceFromDukes}
                  </Badge>
                  <span className="text-sm">{hotelGroup.walkingTime}</span>
                </div>
              </div>
              
              {/* Restaurant Grid for this Hotel */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotelGroup.restaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="glass-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    {/* Restaurant Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={restaurant.image} 
                        alt={`${restaurant.name} — ${restaurant.cuisine} restaurant in Waikiki, Oahu Hawaii`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90 text-primary">
                          {restaurant.cuisine}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 px-2 py-1 rounded-full">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-medium">{restaurant.rating}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold">{restaurant.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-3 w-3" />
                            {restaurant.priceRange}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {restaurant.description}
                      </p>
                      
                      {/* Contact Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          <span>{restaurant.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{restaurant.hours}</span>
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1">
                        {restaurant.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Action Button */}
                      <ExternalLink href={restaurant.website} className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                        >
                          <ExternalLinkIcon className="h-3 w-3 mr-2" />
                          Visit Website
                        </Button>
                      </ExternalLink>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;