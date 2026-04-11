// Google Analytics 4 Utility Functions

// GA4 Measurement ID - Replace with your actual ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if GA is loaded
const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  if (!isGALoaded() || !GA_MEASUREMENT_ID) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
): void => {
  if (!isGALoaded() || !GA_MEASUREMENT_ID) return;
  
  window.gtag('event', eventName, parameters);
};

// Predefined event tracking functions
export const analytics = {
  // Page/Section views
  viewSection: (sectionName: string) => {
    trackEvent('view_section', {
      section_name: sectionName,
    });
  },

  // Restaurant interactions
  viewRestaurant: (restaurantName: string, cuisine: string) => {
    trackEvent('view_restaurant', {
      restaurant_name: restaurantName,
      cuisine_type: cuisine,
    });
  },

  clickRestaurantLink: (restaurantName: string, linkType: 'website' | 'directions' | 'phone') => {
    trackEvent('click_restaurant_link', {
      restaurant_name: restaurantName,
      link_type: linkType,
    });
  },

  // Adventure/Activity interactions
  viewAdventure: (adventureName: string, category: string) => {
    trackEvent('view_adventure', {
      adventure_name: adventureName,
      category: category,
    });
  },

  clickBookAdventure: (adventureName: string, price?: number) => {
    trackEvent('begin_checkout', {
      item_name: adventureName,
      value: price || 0,
      currency: 'USD',
    });
  },

  // Golf course interactions
  viewGolfCourse: (courseName: string) => {
    trackEvent('view_golf_course', {
      course_name: courseName,
    });
  },

  // Search interactions
  performSearch: (searchTerm: string, resultsCount: number) => {
    trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount,
    });
  },

  applyFilter: (filterType: string, filterValue: string) => {
    trackEvent('apply_filter', {
      filter_type: filterType,
      filter_value: filterValue,
    });
  },

  // Map interactions
  viewMap: () => {
    trackEvent('view_map', {
      map_type: 'restaurant_map',
    });
  },

  clickMapMarker: (locationName: string) => {
    trackEvent('click_map_marker', {
      location_name: locationName,
    });
  },

  // Engagement
  scrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', {
      depth_percentage: percentage,
    });
  },

  timeOnPage: (seconds: number) => {
    trackEvent('time_on_page', {
      time_seconds: seconds,
    });
  },

  // Conversions
  contactClick: (method: 'email' | 'phone' | 'form') => {
    trackEvent('contact_click', {
      contact_method: method,
    });
  },

  externalLinkClick: (url: string, linkText: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
    });
  },

  // Social sharing
  shareContent: (platform: string, contentType: string) => {
    trackEvent('share', {
      method: platform,
      content_type: contentType,
    });
  },
};

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
