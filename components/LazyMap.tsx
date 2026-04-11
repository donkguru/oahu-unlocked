'use client'

import React, { lazy, Suspense } from 'react';
import { MapSkeleton } from '@/components/LoadingStates';

// Lazy load the heavy map component for better performance
const LazyLeafletMap = lazy(() => import('./LeafletMap'));

interface LazyMapProps {
  selectedRestaurant?: any;
  onRestaurantSelect?: (restaurant: any) => void;
  filteredRestaurants?: any[];
  isLoading?: boolean;
}

const LazyMap: React.FC<LazyMapProps> = (props) => {
  return (
    <Suspense fallback={<MapSkeleton />}>
      <LazyLeafletMap {...props} />
    </Suspense>
  );
};

export default LazyMap;