'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Loader, importLibrary, setOptions } from '@googlemaps/js-api-loader';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Navigation, Phone, Clock, ExternalLink, MapPin } from 'lucide-react';
import { restaurants as restaurantData, Restaurant } from '@/data/restaurants';

/// <reference types="google.maps" />

// Convert restaurant data for map usage
const restaurants = restaurantData.map(r => ({
  id: r.id,
  name: r.name,
  category: r.category,
  coordinates: [r.coordinates.lng, r.coordinates.lat] as [number, number],
  rating: r.rating,
  priceRange: r.priceRange,
  phone: r.phone,
  hours: r.hours,
  description: r.description
}));

// Landmarks and points of interest near Waikiki
const landmarks = [
  {
    name: "Waikiki Beach",
    type: "Beach",
    coordinates: { lat: 21.2756, lng: -157.8267 },
    icon: "🏖️",
    color: "#00BFFF"
  },
  {
    name: "Diamond Head",
    type: "Landmark", 
    coordinates: { lat: 21.2619, lng: -157.8055 },
    icon: "🌋",
    color: "#8B4513"
  },
  {
    name: "Royal Hawaiian Center",
    type: "Shopping",
    coordinates: { lat: 21.2758, lng: -157.8267 },
    icon: "🛍️",
    color: "#9370DB"
  },
  {
    name: "Honolulu Zoo",
    type: "Attraction",
    coordinates: { lat: 21.2681, lng: -157.8164 },
    icon: "🦁",
    color: "#228B22"
  },
  {
    name: "Kapiolani Park",
    type: "Park",
    coordinates: { lat: 21.2672, lng: -157.8150 },
    icon: "🌳",
    color: "#32CD32"
  },
  {
    name: "Ala Moana Center",
    type: "Shopping",
    coordinates: { lat: 21.2909, lng: -157.8431 },
    icon: "🛍️",
    color: "#9370DB"
  }
];

interface InteractiveMapProps {
  selectedRestaurant?: any;
  onRestaurantSelect?: (restaurant: any) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ 
  selectedRestaurant, 
  onRestaurantSelect 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '');
  const [mapInitialized, setMapInitialized] = useState(false);
  const markers = useRef<google.maps.Marker[]>([]);
  const infoWindows = useRef<google.maps.InfoWindow[]>([]);

  const initializeMap = async () => {
    if (!mapContainer.current || !apiKey) return;

    try {
      setOptions({
        key: apiKey,
        v: 'weekly',
        libraries: ['places', 'geometry']
      });

      await importLibrary('maps');

      map.current = new google.maps.Map(mapContainer.current, {
        center: { lat: 21.2750, lng: -157.8267 }, // Center on Waikiki
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        tilt: 45,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.TOP_CENTER,
          mapTypeIds: [
            google.maps.MapTypeId.ROADMAP,
            google.maps.MapTypeId.SATELLITE,
            google.maps.MapTypeId.HYBRID,
            google.maps.MapTypeId.TERRAIN
          ]
        },
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_CENTER
        }
      });

      addMarkers();
      setMapInitialized(true);

    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error initializing map:', error);
      }
    }
  };

  const addMarkers = () => {
    if (!map.current) return;

    // Clear existing markers and info windows
    markers.current.forEach(marker => marker.setMap(null));
    infoWindows.current.forEach(infoWindow => infoWindow.close());
    markers.current = [];
    infoWindows.current = [];

    // Add restaurant markers
    restaurants.forEach((restaurant) => {
      const marker = new google.maps.Marker({
        position: { lat: restaurant.coordinates[1], lng: restaurant.coordinates[0] },
        map: map.current,
        title: restaurant.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 15,
          fillColor: '#ef4444',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
        animation: google.maps.Animation.DROP
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; min-width: 200px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="font-weight: bold; font-size: 14px; margin-bottom: 4px; color: #1f2937;">${restaurant.name}</h3>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">${restaurant.category}</p>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <div style="display: flex; align-items: center; gap: 4px;">
                <span style="color: #fbbf24;">⭐</span>
                <span style="font-size: 12px;">${restaurant.rating}</span>
              </div>
              <span style="font-size: 12px; font-weight: 500; color: #ef4444;">${restaurant.priceRange}</span>
            </div>
            <p style="font-size: 12px; color: #6b7280; margin-bottom: 8px;">${restaurant.description}</p>
            <button 
              onclick="window.selectRestaurant(${restaurant.id})"
              style="width: 100%; background-color: #ef4444; color: white; font-size: 12px; padding: 4px 8px; border: none; border-radius: 4px; cursor: pointer; transition: background-color 0.2s;"
              onmouseover="this.style.backgroundColor='#dc2626'"
              onmouseout="this.style.backgroundColor='#ef4444'"
            >
              View Details
            </button>
          </div>
        `
      });

      marker.addListener('click', () => {
        // Close all other info windows
        infoWindows.current.forEach(iw => iw.close());
        infoWindow.open(map.current, marker);
      });

      markers.current.push(marker);
      infoWindows.current.push(infoWindow);
    });

    // Add landmark markers
    landmarks.forEach((landmark) => {
      const marker = new google.maps.Marker({
        position: { lat: landmark.coordinates.lat, lng: landmark.coordinates.lng },
        map: map.current,
        title: landmark.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: landmark.color,
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; font-family: system-ui, -apple-system, sans-serif;">
            <h4 style="font-weight: 500; font-size: 14px; color: #1f2937; margin-bottom: 4px;">${landmark.name}</h4>
            <p style="font-size: 12px; color: #6b7280; text-transform: capitalize;">${landmark.type}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map.current, marker);
      });

      markers.current.push(marker);
      infoWindows.current.push(infoWindow);
    });
  };

  // Global function for popup buttons
  useEffect(() => {
    (window as any).selectRestaurant = (id: number) => {
      const restaurant = restaurants.find(r => r.id === id);
      if (restaurant && onRestaurantSelect) {
        onRestaurantSelect(restaurant);
      }
    };

    return () => {
      delete (window as any).selectRestaurant;
    };
  }, [onRestaurantSelect]);

  useEffect(() => {
    if (apiKey) {
      initializeMap();
    }

    return () => {
      if (map.current) {
        // Google Maps doesn't need explicit cleanup like Mapbox
        map.current = null;
      }
    };
  }, [apiKey]);

  // Pan to selected restaurant
  useEffect(() => {
    if (map.current && selectedRestaurant && mapInitialized) {
      const restaurant = restaurants.find(r => r.id === selectedRestaurant.id);
      if (restaurant) {
        map.current.panTo({ lat: restaurant.coordinates[1], lng: restaurant.coordinates[0] });
        map.current.setZoom(17);
      }
    }
  }, [selectedRestaurant, mapInitialized]);

  if (!apiKey) {
    return (
      <Card className="h-[600px] flex items-center justify-center">
        <CardContent className="text-center space-y-4">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-lg font-semibold">Interactive Map Setup</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            To view the interactive Google Earth map, please enter your Google Maps API key. 
            Get yours free at console.cloud.google.com and restrict it to your domain for security.
          </p>
          <p className="text-xs text-muted-foreground max-w-md mt-2">
            <strong>Security tip:</strong> Restrict your API key in Google Cloud Console by HTTP referrer and enable only Maps JavaScript API, Places API, and Geometry API.
          </p>
          <div className="space-y-2 max-w-sm mx-auto">
            <Input
              type="text"
              placeholder="Enter Google Maps API key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <Button 
              onClick={() => initializeMap()} 
              disabled={!apiKey}
              className="w-full"
            >
              Load Google Earth Map
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div 
        ref={mapContainer} 
        className="h-[600px] w-full rounded-lg shadow-lg border overflow-hidden" 
      />
      
      {/* Map Legend */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <h4 className="font-medium mb-3">Map Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center text-xs">🍽️</div>
              <span>Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs">🏖️</div>
              <span>Beaches</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs">🛍️</div>
              <span>Shopping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center text-xs">🦁</div>
              <span>Attractions</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveMap;