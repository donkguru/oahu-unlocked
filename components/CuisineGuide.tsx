'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Utensils, Globe, Fish, Coffee, Wine, ExternalLink as ExternalLinkIcon } from "lucide-react";
import { restaurants, type Restaurant } from "@/data/restaurants";
import ExternalLink from "@/components/ui/external-link";

// Group restaurants by category
const groupRestaurantsByCategory = () => {
  const categoryGroups = restaurants.reduce((groups, restaurant) => {
    const category = restaurant.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(restaurant);
    return groups;
  }, {} as Record<string, Restaurant[]>);

  return Object.entries(categoryGroups).map(([categoryName, categoryRestaurants]) => {
    // Map category names to icons and descriptions
    const categoryInfo = getCategoryInfo(categoryName);
    return {
      name: categoryName,
      icon: categoryInfo.icon,
      description: categoryInfo.description,
      restaurants: categoryRestaurants,
      restaurantCount: categoryRestaurants.length,
      priceRange: getPriceRange(categoryRestaurants),
      image: categoryInfo.image
    };
  });
};

const getCategoryInfo = (categoryName: string) => {
  const categoryMap: Record<string, { icon: any; description: string; image: string }> = {
    "Hawaiian Regional": {
      icon: Fish,
      description: "Farm-to-table cuisine featuring local ingredients like fresh fish, tropical fruits, and island-grown vegetables.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
    },
    "Contemporary Hawaiian": {
      icon: Fish,
      description: "Modern interpretations of Hawaiian cuisine with innovative techniques and fresh local ingredients.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    "Fine Dining": {
      icon: Wine,
      description: "Award-winning restaurants offering world-class cuisine with stunning ocean views and impeccable service.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    "Contemporary American": {
      icon: Utensils,
      description: "Modern American cuisine with Pacific influences and fresh local ingredients.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
    },
    "Pacific Rim": {
      icon: Globe,
      description: "Fusion cuisine combining Pacific and Asian flavors with Western cooking techniques.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
    },
    "Contemporary Asian": {
      icon: ChefHat,
      description: "Modern Asian cuisine featuring fresh sushi, creative presentations, and innovative flavors.",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
    },
    "Japanese Fusion": {
      icon: ChefHat,
      description: "Creative Japanese cuisine with Pacific influences and fresh local ingredients.",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
    },
    "Modern Asian": {
      icon: ChefHat,
      description: "Contemporary Asian cuisine with celebrity chef innovations and creative presentations.",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
    },
    "American Seafood": {
      icon: Fish,
      description: "Fresh Pacific seafood with American preparations and local Hawaiian influences.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
    },
    "French Hawaiian": {
      icon: Wine,
      description: "Elegant French cuisine with Hawaiian ingredients and Pacific influences.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=300&fit=crop"
    },
    "Hawaiian Fusion": {
      icon: Fish,
      description: "Innovative Hawaiian cuisine with European techniques and Asian flavors.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
    },
    "Food Truck": {
      icon: Utensils,
      description: "Authentic Hawaiian plate lunches and casual dining from local food trucks.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
    },
    "Breakfast & Brunch": {
      icon: Coffee,
      description: "Start your day right with everything from traditional Hawaiian breakfast to gourmet brunch experiences.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
    }
  };

  return categoryMap[categoryName] || {
    icon: Utensils,
    description: "Delicious cuisine featuring fresh ingredients and authentic flavors.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
  };
};

const getPriceRange = (restaurants: Restaurant[]) => {
  const ranges = restaurants.map(r => r.priceRange);
  const minRange = ranges.includes("$") ? "$" : ranges.includes("$$") ? "$$" : "$$$";
  const maxRange = ranges.includes("$$$$") ? "$$$$" : ranges.includes("$$$") ? "$$$" : "$$";
  return minRange === maxRange ? minRange : `${minRange}-${maxRange}`;
};

const CuisineGuide = () => {
  const categoryGroups = groupRestaurantsByCategory();

  return (
    <section id="cuisine" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <ChefHat className="h-4 w-4 mr-2" />
            Cuisine Explorer
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Waikiki's <span className="gradient-text">Diverse Flavors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From Sand Island Road in the west to Diamond Head in the east - explore all restaurants 
            across Waikiki's diverse dining categories with direct links to their websites.
          </p>
        </div>
        
        {/* Cuisine Categories with Restaurants */}
        <div className="space-y-12">
          {categoryGroups.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline">{category.restaurantCount} restaurants</Badge>
                      <Badge variant="outline">{category.priceRange}</Badge>
                    </div>
                  </div>
                </div>
                
                {/* Restaurants Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
                  {category.restaurants.map((restaurant) => (
                    <Card key={restaurant.id} className="glass-card hover:shadow-lg transition-all duration-300 overflow-hidden group w-full max-w-sm">
                      {/* Restaurant Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={restaurant.image} 
                          alt={`${restaurant.name} in Waikiki Hawaii`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-lg font-bold text-foreground">{restaurant.name}</h4>
                          <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-4 space-y-3">
                        {/* Restaurant Info */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm font-medium ml-1">{restaurant.rating}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">{restaurant.priceRange}</Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{restaurant.distanceFromDukes}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {restaurant.description}
                        </p>
                        
                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1">
                          {restaurant.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                            <Badge key={highlightIndex} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Website Link */}
                        {restaurant.website && (
                          <ExternalLink href={restaurant.website} className="block">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full"
                            >
                              <ExternalLinkIcon className="h-4 w-4 mr-2" />
                              Visit Website
                            </Button>
                          </ExternalLink>
                        )}
                        
                        {/* Contact Info */}
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p>{restaurant.phone}</p>
                          <p>{restaurant.hours}</p>
                          <p>{restaurant.address}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CuisineGuide;