'use client'

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/utils/analytics';
import { useAnalytics } from '@/hooks/useAnalytics';

const GoogleAnalytics = () => {
  // Use automatic tracking hooks
  useAnalytics();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics: No measurement ID configured. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your environment.');
      return;
    }

    // Check if script already exists
    if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) {
      return;
    }

    // Add gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date().toISOString());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      cookie_flags: 'SameSite=None;Secure',
    });

    return () => {
      // Cleanup is optional since we want GA to persist
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
