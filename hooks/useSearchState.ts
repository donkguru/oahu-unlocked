import { useState, useCallback } from 'react';
import { getAdvancedSearchResults, type Restaurant } from '@/data/restaurants';

export interface SearchFilters {
  query: string;
  category: string;
  priceRange: string;
  minRating: number;
  maxDistance: number;
  cuisine: string;
}

export const useSearchState = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    category: "All",
    priceRange: "All",
    minRating: 0,
    maxDistance: 60,
    cuisine: "All"
  });
  
  const [results, setResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const performSearch = useCallback(async (searchFilters: SearchFilters) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate async operation for better UX
      await new Promise(resolve => setTimeout(resolve, 200));
      const searchResults = getAdvancedSearchResults(searchFilters);
      setResults(searchResults);
      setIsSearchActive(true);
    } catch (err) {
      setError('Failed to search restaurants. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetSearch = useCallback(() => {
    setFilters({
      query: "",
      category: "All",
      priceRange: "All",
      minRating: 0,
      maxDistance: 60,
      cuisine: "All"
    });
    setResults([]);
    setIsSearchActive(false);
    setError(null);
  }, []);

  const updateFilters = useCallback((newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  return {
    filters,
    results,
    isLoading,
    error,
    isSearchActive,
    updateFilters,
    performSearch,
    resetSearch
  };
};