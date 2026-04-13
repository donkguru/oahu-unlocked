'use client'

import React, { useRef, useCallback, useEffect, useState } from 'react';
import L from 'leaflet';
import { useMapManager } from '@/hooks/useMapManager';
import { type Restaurant } from '@/data/restaurants';
import { mapLocations, landmarks } from '@/data/mapData';
import { 
  createRestaurantMarker, 
  createLandmarkMarker, 
  createRestaurantPopup, 
  createLandmarkPopup 
} from './map/MapMarker';
import MapLegend from './map/MapLegend';
import MapLoadingOverlay from './map/MapLoadingOverlay';
import MapError from './map/MapError';

// Fix Leaflet default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapLocation {
  id: number;
  name: string;
  category: string;
  lat: number;
  lng: number;
  rating: number;
  priceRange: string;
  description: string;
  website?: string;
}

interface LeafletMapProps {
  selectedRestaurant?: Restaurant;
  onRestaurantSelect?: (restaurant: Restaurant | MapLocation) => void;
  filteredRestaurants?: Restaurant[];
  isLoading?: boolean;
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  selectedRestaurant,
  onRestaurantSelect,
  filteredRestaurants = [],
  isLoading = false
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  
  const {
    map,
    isInitialized: mapInitialized,
    error: mapManagerError,
    initializeMap,
    addMarker,
    clearMarkers,
    panToLocation,
    cleanup,
    retry
  } = useMapManager({
    containerId: 'restaurant-map',
    center: [21.2793, -157.8265],
    zoom: 14
  });

  // Combine errors from map manager and local state
  const combinedError = mapManagerError || mapError;

  const addMarkers = useCallback(() => {
    if (!map || !mapInitialized) return;

    clearMarkers();

    // Add restaurant markers
    mapLocations.forEach((location) => {
      if (filteredRestaurants.length === 0 || filteredRestaurants.some(r => r.id === location.id)) {
        const restaurantIcon = createRestaurantMarker();
        const popupContent = createRestaurantPopup(location);

        addMarker([location.lat, location.lng], {
          icon: restaurantIcon,
          popup: popupContent,
          onClick: () => onRestaurantSelect && onRestaurantSelect(location as any)
        });
      }
    });

    // Add landmark markers
    landmarks.forEach((landmark) => {
      const landmarkIcon = createLandmarkMarker(landmark.icon, landmark.color);
      const popupContent = createLandmarkPopup(landmark);

      addMarker([landmark.lat, landmark.lng], {
        icon: landmarkIcon,
        popup: popupContent
      });
    });
  }, [filteredRestaurants, mapInitialized, map, clearMarkers, addMarker, onRestaurantSelect]);

  // Global function for restaurant selection
  useEffect(() => {
    const selectRestaurant = (restaurantId: number) => {
      const restaurant = mapLocations.find(r => r.id === restaurantId);
      if (restaurant && onRestaurantSelect) {
        onRestaurantSelect(restaurant);
      }
    };

    (window as any).selectRestaurant = selectRestaurant;
    return () => {
      delete (window as any).selectRestaurant;
    };
  }, [onRestaurantSelect]);

  // Initialize map on component mount
  useEffect(() => {
    if (!mapInitialized) {
      const timer = setTimeout(() => {
        initializeMap();
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [initializeMap, mapInitialized]);

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  // Update markers when restaurants change
  useEffect(() => {
    if (mapInitialized) {
      const timer = setTimeout(() => {
        addMarkers();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [filteredRestaurants, mapInitialized, addMarkers]);

  // Pan to selected restaurant
  useEffect(() => {
    if (selectedRestaurant && mapInitialized) {
      const location = mapLocations.find(loc => loc.id === selectedRestaurant.id);
      if (location) {
        const isMobile = window.innerWidth < 768;
        const zoomLevel = isMobile ? 15 : 16;
        panToLocation([location.lat, location.lng], zoomLevel);
      }
    }
  }, [selectedRestaurant, mapInitialized, panToLocation]);

  // Handle error state
  if (combinedError) {
    return <MapError error={combinedError} onRetry={retry} />;
  }

  return (
    <div className="w-full space-y-4">
      <div className="relative h-[500px]">
        <div 
          id="restaurant-map"
          className="w-full h-full rounded-lg"
          role="application"
          aria-label="Interactive map showing restaurants and landmarks in Waikiki"
        />
        
        <MapLoadingOverlay isLoading={isLoading} isInitialized={mapInitialized} />
      </div>

      <MapLegend />
    </div>
  );
};

export default LeafletMap;