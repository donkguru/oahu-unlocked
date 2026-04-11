'use client'

import { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp, Search, X, Loader2, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSearch } from "@/contexts/SearchContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useSearchState, type SearchFilters } from "@/hooks/useSearchState";
import { useIsMobile } from "@/hooks/use-mobile";

const AdvancedSearch = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const isMobile = useIsMobile();
  const { setFilteredResults, setIsSearchActive, setSearchQuery } = useSearch();
  const {
    filters,
    results,
    isLoading,
    error,
    updateFilters,
    performSearch,
    resetSearch
  } = useSearchState();

  const debouncedQuery = useDebounce(filters.query, 300);

  const handleSearch = useCallback(async () => {
    await performSearch(filters);
    setFilteredResults(results);
    setIsSearchActive(true);
    setSearchQuery(filters.query);
    setIsMobileSheetOpen(false);
    
    // Scroll to results after a brief delay to ensure DOM updates
    setTimeout(() => {
      const element = document.getElementById('featured-restaurants');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 300);
  }, [filters, performSearch, results, setFilteredResults, setIsSearchActive, setSearchQuery]);

  const handleReset = useCallback(() => {
    resetSearch();
    setFilteredResults([]);
    setIsSearchActive(false);
    setSearchQuery("");
    setIsMobileSheetOpen(false);
  }, [resetSearch, setFilteredResults, setIsSearchActive, setSearchQuery]);

  // Auto-search when query changes (debounced)
  useEffect(() => {
    if (debouncedQuery.trim()) {
      performSearch({ ...filters, query: debouncedQuery }).then(() => {
        setFilteredResults(results);
        setIsSearchActive(true);
        setSearchQuery(debouncedQuery);
      });
    } else if (debouncedQuery === '') {
      // Clear results when search is empty
      handleReset();
    }
  }, [debouncedQuery, filters, performSearch, results, setFilteredResults, setIsSearchActive, setSearchQuery, handleReset]);

  // Mobile Filters Component
  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Select value={filters.category} onValueChange={(value) => updateFilters({ category: value ?? 'All' })}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Fine Dining">Fine Dining</SelectItem>
              <SelectItem value="Casual Dining">Casual Dining</SelectItem>
              <SelectItem value="Quick Service">Quick Service</SelectItem>
              <SelectItem value="Bar & Lounge">Bar & Lounge</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cuisine</label>
          <Select value={filters.cuisine} onValueChange={(value) => updateFilters({ cuisine: value ?? 'All' })}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="All Cuisines" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Cuisines</SelectItem>
              <SelectItem value="Hawaiian">Hawaiian</SelectItem>
              <SelectItem value="Japanese">Japanese</SelectItem>
              <SelectItem value="American">American</SelectItem>
              <SelectItem value="Italian">Italian</SelectItem>
              <SelectItem value="Asian Fusion">Asian Fusion</SelectItem>
              <SelectItem value="Seafood">Seafood</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Price Range</label>
          <Select value={filters.priceRange} onValueChange={(value) => updateFilters({ priceRange: value ?? 'All' })}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="All Prices" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Prices</SelectItem>
              <SelectItem value="$">$ - Budget Friendly</SelectItem>
              <SelectItem value="$$">$$ - Moderate</SelectItem>
              <SelectItem value="$$$">$$$ - Upscale</SelectItem>
              <SelectItem value="$$$$">$$$$ - Fine Dining</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm font-medium">
            Minimum Rating: {filters.minRating} stars
          </label>
          <Slider
            value={[filters.minRating]}
            onValueChange={(v) => updateFilters({ minRating: Array.isArray(v) ? v[0] : v })}
            max={5}
            min={0}
            step={0.5}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">
            Walking Distance: {filters.maxDistance} minutes
          </label>
          <Slider
            value={[filters.maxDistance]}
            onValueChange={(v) => updateFilters({ maxDistance: Array.isArray(v) ? v[0] : v })}
            max={60}
            min={5}
            step={5}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <Card className="w-full shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-center gradient-text">
            Find Your Perfect Waikiki Restaurant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Error Display */}
          {error && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg">
              {error}
            </div>
          )}

          {/* Main Search */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search restaurants by name, cuisine, or location..."
                value={filters.query}
                onChange={(e) => updateFilters({ query: e.target.value })}
                className="pl-10 h-12 text-lg"
                disabled={isLoading}
              />
              {isLoading && (
                <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-primary" />
              )}
            </div>
            
            {/* Mobile Filter Button */}
            {isMobile && (
              <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
                <SheetTrigger>
                  <Button variant="outline" size="icon" className="h-12 w-12 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filter Restaurants</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FiltersContent />
                  </div>
                  <div className="flex gap-2 mt-6 pt-4 border-t">
                    <Button onClick={handleSearch} disabled={isLoading} className="flex-1">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                      Search Restaurants
                    </Button>
                    <Button variant="outline" onClick={handleReset} className="px-6">
                      <X className="mr-2 h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>

          {/* Desktop Advanced Filters Toggle */}
          {!isMobile && (
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className="flex items-center gap-2 transition-all duration-300"
              >
                Advanced Filters
                {isAdvancedOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>
          )}

          {/* Desktop Advanced Filters */}
          {!isMobile && isAdvancedOpen && (
            <div className="space-y-6 p-6 bg-muted/30 rounded-lg border animate-in slide-in-from-top-2 duration-300">
              <FiltersContent />
            </div>
          )}

          {/* Active Filters */}
          {(filters.category !== "All" || filters.cuisine !== "All" || filters.priceRange !== "All" || filters.minRating > 0 || filters.maxDistance < 60) && (
            <div className="space-y-2">
              <div className="text-sm font-medium">Active Filters:</div>
              <div className="flex flex-wrap gap-2">
                {filters.category !== "All" && (
                  <Badge variant="secondary">{filters.category}</Badge>
                )}
                {filters.cuisine !== "All" && (
                  <Badge variant="secondary">{filters.cuisine}</Badge>
                )}
                {filters.priceRange !== "All" && (
                  <Badge variant="secondary">{filters.priceRange}</Badge>
                )}
                {filters.minRating > 0 && (
                  <Badge variant="secondary">{filters.minRating}+ stars</Badge>
                )}
                {filters.maxDistance < 60 && (
                  <Badge variant="secondary">≤{filters.maxDistance} min walk</Badge>
                )}
              </div>
            </div>
          )}

          {/* Desktop Action Buttons */}
          {!isMobile && (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleSearch} 
                disabled={isLoading}
                size="lg"
                className="min-w-[180px] h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Search className="mr-2 h-5 w-5" />
                )}
                Search Restaurants
              </Button>
              <Button 
                variant="outline" 
                onClick={handleReset}
                size="lg"
                className="min-w-[140px] h-12 text-lg font-semibold"
              >
                <X className="mr-2 h-5 w-5" />
                Reset
              </Button>
            </div>
          )}

          {/* Results Summary */}
          {results.length > 0 && (
            <div className="text-center text-muted-foreground">
              Found {results.length} restaurant{results.length !== 1 ? 's' : ''} matching your criteria
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default AdvancedSearch;