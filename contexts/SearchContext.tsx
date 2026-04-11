import React, { createContext, useContext, useState, ReactNode } from 'react';
import { type Restaurant } from '@/data/restaurants';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredResults: Restaurant[];
  setFilteredResults: (results: Restaurant[]) => void;
  isSearchActive: boolean;
  setIsSearchActive: (active: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<Restaurant[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filteredResults,
        setFilteredResults,
        isSearchActive,
        setIsSearchActive,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};