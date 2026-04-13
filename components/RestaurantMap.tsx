'use client'

import { useState, useCallback, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LazyMap from "./LazyMap";
import { restaurants as restaurantData, categories, searchRestaurants, getRestaurantsByCategory, type Restaurant } from '@/data/restaurants';
import { 
  MapPin, 
  Search, 
  Filter, 
  Navigation, 
  Clock, 
  Star,
  Phone,
  ExternalLink,
  Car,
  MapIcon,
  Loader2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

interface MapLocation {
  id: number;
  name: string;
  category: string;
  address: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  priceRange: string;
  phone: string;
  hours: string;
  walkFromBeach: string;
  parking: string;
  specialties: string[];
}

// Convert restaurant data for map component
const mapLocations: MapLocation[] = restaurantData.map(r => ({
  id: r.id,
  name: r.name,
  category: r.category,
  address: r.address,
  coordinates: r.coordinates,
  rating: r.rating,
  priceRange: r.priceRange,
  phone: r.phone,
  hours: r.hours,
  walkFromBeach: r.distanceFromDukes,
  parking: r.parking,
  specialties: r.specialties
}));

const landmarks = [
  {
    name: "Waikiki Beach",
    type: "Beach",
    icon: "🏖️",
    coordinates: { lat: 21.2750, lng: -157.8280 }
  },
  {
    name: "Diamond Head",
    type: "Landmark",
    icon: "🌋",
    coordinates: { lat: 21.2619, lng: -157.8055 }
  },
  {
    name: "Royal Hawaiian Center",
    type: "Shopping",
    icon: "🛍️",
    coordinates: { lat: 21.2758, lng: -157.8267 }
  },
  {
    name: "Honolulu Zoo",
    type: "Attraction",
    icon: "🦁",
    coordinates: { lat: 21.2681, lng: -157.8164 }
  }
];

const RestaurantMap = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");  
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const allCategories = useMemo(() => ["All", ...categories], []);

  const filteredLocations = useMemo(() => {
    return mapLocations.filter(location => {
      const matchesCategory = selectedCategory === "All" || location.category === selectedCategory;
      const searchLower = debouncedSearchQuery.toLowerCase();
      const matchesSearch = debouncedSearchQuery === "" || 
                           location.name.toLowerCase().includes(searchLower) ||
                           location.category.toLowerCase().includes(searchLower) ||
                           location.specialties.some(specialty => specialty.toLowerCase().includes(searchLower)) ||
                           location.address.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, debouncedSearchQuery]);

  const handleCategoryChange = useCallback((category: string) => {
    try {
      setIsLoading(true);
      setSelectedCategory(category);
      // Simulate loading for better UX with proper cleanup
      const timer = setTimeout(() => setIsLoading(false), 200);
      return () => clearTimeout(timer);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Category change failed:', error);
      }
      setIsLoading(false);
    }
  }, []);

  const handleLocationSelect = useCallback((location: any) => {
    setSelectedLocation(location as MapLocation);
    // Auto-close mobile filters when location is selected
    if (window.innerWidth < 1024) {
      setIsMobileFiltersOpen(false);
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Interactive Map
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Find Restaurants <span className="gradient-text">Near You</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Explore Waikiki's dining scene with our interactive map. Filter by cuisine, price, or distance 
            from your location to find the perfect restaurant for your needs.
          </p>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Mobile Map Controls Toggle */}
          <div className="lg:hidden">
            <Button 
              variant="outline" 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="w-full mb-4 text-sm"
            >
              <Filter className="h-4 w-4 mr-2" />
              {isMobileFiltersOpen ? 'Hide' : 'Show'} Search & Filters
              {isMobileFiltersOpen ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
            </Button>
          </div>

          {/* Map Controls & Filters */}
          <div className={`lg:col-span-1 space-y-4 sm:space-y-6 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            {/* Search */}
            <Card className="glass-card">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  Search & Filter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3 w-3 sm:h-4 sm:w-4" />
                  <Input
                    type="text"
                    placeholder="Search restaurants, food trucks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 sm:pl-10 text-sm"
                  />
                  {isLoading && (
                    <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 animate-spin text-muted-foreground" />
                  )}
                </div>
                
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium mb-2 text-sm">Category</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {allCategories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer text-xs px-2 py-1"
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full text-sm" size="sm">
                  <Navigation className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            {/* Restaurant List */}
            <Card className="glass-card">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg">
                  Restaurants ({filteredLocations.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    <span className="text-sm text-muted-foreground">Loading restaurants...</span>
                  </div>
                ) : filteredLocations.length === 0 ? (
                  <div className="text-center py-8">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">No restaurants found matching your criteria</p>
                  </div>
                ) : (
                  filteredLocations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-2 sm:p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedLocation?.id === location.id 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-border hover:border-primary/50 hover:shadow-sm'
                      }`}
                      onClick={() => handleLocationSelect(location)}
                    >
                      <div className="flex justify-between items-start mb-1 sm:mb-2">
                        <h4 className="font-medium text-sm sm:text-base line-clamp-1">{location.name}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs">{location.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 sm:mb-2 line-clamp-1">{location.address}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5">{location.category}</Badge>
                        <span className="text-xs text-accent font-medium">{location.priceRange}</span>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Interactive Map Area */}
          <div className="lg:col-span-2 order-first lg:order-none">
            <Card className="glass-card h-full">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  Interactive Waikiki Map
                </CardTitle>
                <CardDescription className="text-sm">
                  Free interactive map showing restaurants, beaches, shopping centers, and landmarks around Waikiki
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 sm:p-4 lg:p-6">
                <LazyMap 
                  selectedRestaurant={selectedLocation as any}
                  onRestaurantSelect={handleLocationSelect}
                  isLoading={isLoading}
                  filteredRestaurants={filteredLocations as any}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Restaurant Details Section */}
        {selectedLocation && (
          <div className="mt-6 sm:mt-8">
            <Card className="glass-card border-primary/20">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl line-clamp-2">{selectedLocation.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base mt-1 line-clamp-2">{selectedLocation.address}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-base sm:text-lg px-2 sm:px-3 py-1 self-start">{selectedLocation.priceRange}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">{selectedLocation.rating}/5</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Rating</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <div>
                      <p className="font-medium text-xs sm:text-sm line-clamp-1">{selectedLocation.hours}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                    <MapIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">{selectedLocation.walkFromBeach}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">From Beach</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50">
                    <Car className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    <div>
                      <p className="font-medium text-xs sm:text-sm line-clamp-1">{selectedLocation.parking}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Parking</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 sm:mb-3 text-sm sm:text-base">Specialties</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {selectedLocation.specialties.map((specialty: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs sm:text-sm px-1.5 sm:px-2 py-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button className="flex-1 text-sm">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Call {selectedLocation.phone}
                  </Button>
                  <Button variant="outline" className="text-sm">
                    <Navigation className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" size="icon" className="sm:w-auto sm:px-3">
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Website</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantMap;