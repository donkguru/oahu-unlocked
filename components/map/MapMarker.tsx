import L from 'leaflet';

export interface MarkerOptions {
  icon?: L.DivIcon;
  popup?: string;
  onClick?: () => void;
}

export const createRestaurantMarker = () => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg border-2 border-background cursor-pointer hover:scale-110 transition-transform">
        🍽️
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

export const createLandmarkMarker = (icon: string, color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md border border-background cursor-pointer hover:scale-110 transition-transform" style="background-color: ${color}; color: white;">
        ${icon}
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
};

export const createRestaurantPopup = (location: any) => {
  return `
    <div class="p-3 min-w-[280px]">
      <div class="space-y-2">
        <h3 class="font-bold text-lg text-foreground">${location.name}</h3>
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <span class="px-2 py-1 bg-secondary rounded text-secondary-foreground">${location.category}</span>
          <div class="flex items-center gap-1">
            <span class="text-yellow-500">★</span>
            <span>${location.rating}</span>
          </div>
          <span class="font-medium">${location.priceRange}</span>
        </div>
        <p class="text-sm text-muted-foreground line-clamp-2">${location.description}</p>
        <div class="flex gap-2 mt-3">
          <button 
            onclick="window.selectRestaurant && window.selectRestaurant(${location.id})"
            class="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Details
          </button>
          ${location.website ? `
            <a 
              href="${location.website}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-secondary/90 transition-colors inline-flex items-center gap-1"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
              Visit
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
};

export const createLandmarkPopup = (landmark: any) => {
  return `
    <div class="p-2 min-w-[200px]">
      <h3 class="font-semibold text-foreground">${landmark.name}</h3>
      <p class="text-sm text-muted-foreground">${landmark.type}</p>
    </div>
  `;
};