import { useRef, useCallback, useEffect, useState } from 'react';
import L from 'leaflet';

// Fix Leaflet default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface UseMapManagerProps {
  containerId: string;
  center: [number, number];
  zoom: number;
}

export const useMapManager = ({ containerId, center, zoom }: UseMapManagerProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializeMap = useCallback(() => {
    try {
      if (mapRef.current || isInitialized) return;

      const container = document.getElementById(containerId);
      if (!container) {
        setError(`Map container ${containerId} not found`);
        return;
      }

      // Ensure container has proper dimensions
      if (container.offsetHeight === 0) {
        container.style.height = '400px';
      }

      const map = L.map(container, {
        center,
        zoom,
        zoomControl: false,
        scrollWheelZoom: true,
        touchZoom: true,
        doubleClickZoom: true,
        dragging: true,
        tapTolerance: 15,
        fadeAnimation: false,
        zoomAnimation: false,
        markerZoomAnimation: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        detectRetina: true,
        tileSize: 256,
        zoomOffset: 0
      }).addTo(map);

      L.control.zoom({
        position: 'bottomright'
      }).addTo(map);

      mapRef.current = map;
      setIsInitialized(true);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize map';
      setError(errorMessage);
      if (process.env.NODE_ENV === 'development') {
        console.error('Map initialization error:', err);
      }
    }
  }, [containerId, center, zoom, isInitialized]);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => {
      if (mapRef.current && mapRef.current.hasLayer(marker)) {
        mapRef.current.removeLayer(marker);
      }
    });
    markersRef.current = [];
  }, []);

  const addMarker = useCallback((
    latlng: [number, number],
    options?: {
      icon?: L.DivIcon;
      popup?: string;
      onClick?: () => void;
    }
  ) => {
    if (!mapRef.current || !isInitialized) return null;

    const marker = L.marker(latlng, { 
      icon: options?.icon,
      keyboard: true,
      title: 'Restaurant location'
    });
    
    if (options?.popup) {
      marker.bindPopup(options.popup, {
        maxWidth: 300,
        className: 'custom-popup'
      });
    }

    if (options?.onClick) {
      marker.on('click', options.onClick);
    }

    marker.addTo(mapRef.current);
    markersRef.current.push(marker);
    
    return marker;
  }, [isInitialized]);

  const panToLocation = useCallback((latlng: [number, number], zoomLevel?: number) => {
    if (!mapRef.current || !isInitialized) return;
    
    mapRef.current.setView(latlng, zoomLevel || mapRef.current.getZoom(), {
      animate: true,
      duration: 0.5
    });
  }, [isInitialized]);

  const cleanup = useCallback(() => {
    clearMarkers();
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    setIsInitialized(false);
    setError(null);
  }, [clearMarkers]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    map: mapRef.current,
    isInitialized,
    error,
    initializeMap,
    addMarker,
    clearMarkers,
    panToLocation,
    cleanup,
    retry: () => {
      cleanup();
      const timer = setTimeout(initializeMap, 100);
      return () => clearTimeout(timer);
    }
  };
};