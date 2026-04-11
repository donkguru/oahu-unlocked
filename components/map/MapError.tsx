import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RefreshCw } from 'lucide-react';

interface MapErrorProps {
  error: string;
  onRetry: () => void;
}

const MapError: React.FC<MapErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center bg-muted/30 rounded-lg border">
      <div className="text-center space-y-4 p-6">
        <Alert className="border-destructive/50 text-destructive">
          <AlertDescription className="text-center">
            Failed to load map: {error}
          </AlertDescription>
        </Alert>
        <Button 
          variant="outline" 
          onClick={onRetry}
          className="flex items-center gap-2"
          aria-label="Retry loading map"
        >
          <RefreshCw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    </div>
  );
};

export default MapError;