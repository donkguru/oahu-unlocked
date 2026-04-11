'use client'

import React, { memo, useMemo } from 'react';
import { Restaurant } from '@/data/restaurants';

// Memoized restaurant card component to prevent unnecessary re-renders
interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect?: (restaurant: Restaurant) => void;
}

export const MemoizedRestaurantCard = memo<RestaurantCardProps>(({ restaurant, onSelect }) => {
  const handleClick = useMemo(() => {
    return () => onSelect?.(restaurant);
  }, [restaurant.id, onSelect]);

  return (
    <div 
      className="restaurant-card cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${restaurant.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Restaurant card content */}
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>{restaurant.rating}★</p>
    </div>
  );
});

MemoizedRestaurantCard.displayName = 'MemoizedRestaurantCard';

// Virtual scrolling hook for large lists
export const useVirtualScrolling = (items: any[], containerHeight: number, itemHeight: number) => {
  return useMemo(() => {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const bufferSize = Math.floor(visibleCount / 2);
    
    return {
      visibleCount: visibleCount + bufferSize * 2,
      itemHeight,
    };
  }, [items.length, containerHeight, itemHeight]);
};