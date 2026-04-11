import React from 'react';

interface MapLoadingOverlayProps {
  isLoading: boolean;
  isInitialized: boolean;
}

const MapLoadingOverlay: React.FC<MapLoadingOverlayProps> = ({ isLoading, isInitialized }) => {
  if (!isLoading && isInitialized) return null;

  return (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg z-10">
      <div className="text-center space-y-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="text-sm text-muted-foreground">
          {isLoading ? 'Loading restaurants...' : 'Initializing map...'}
        </p>
      </div>
    </div>
  );
};

export default MapLoadingOverlay;