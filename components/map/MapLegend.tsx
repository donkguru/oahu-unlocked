import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MapLegend: React.FC = () => {
  return (
    <Card className="glass-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Map Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">
              🍽️
            </div>
            <span>Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#00BFFF', color: 'white' }}>
              🏖️
            </div>
            <span>Beaches</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#9370DB', color: 'white' }}>
              🛍️
            </div>
            <span>Shopping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ backgroundColor: '#228B22', color: 'white' }}>
              🦁
            </div>
            <span>Attractions</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapLegend;