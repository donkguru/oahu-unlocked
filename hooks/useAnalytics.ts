import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView, analytics, GA_MEASUREMENT_ID } from '@/utils/analytics';

// Hook to track page views on route changes
export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const search = searchParams.toString();
    trackPageView(pathname + (search ? `?${search}` : ''));
  }, [pathname, searchParams]);
};

// Hook to track scroll depth
export const useScrollTracking = () => {
  const milestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track at 25%, 50%, 75%, 90%, 100%
      const checkpoints = [25, 50, 75, 90, 100];
      
      for (const checkpoint of checkpoints) {
        if (scrollPercent >= checkpoint && !milestones.current.has(checkpoint)) {
          milestones.current.add(checkpoint);
          analytics.scrollDepth(checkpoint);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook to track time on page
export const useTimeOnPageTracking = () => {
  const startTime = useRef<number>(Date.now());
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      
      // Track at 30s, 60s, 120s, 300s (5min)
      const checkpoints = [30, 60, 120, 300];
      
      for (const checkpoint of checkpoints) {
        if (elapsed >= checkpoint && !tracked.current.has(checkpoint)) {
          tracked.current.add(checkpoint);
          analytics.timeOnPage(checkpoint);
        }
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);
};

// Combined hook for all automatic tracking
export const useAnalytics = () => {
  usePageTracking();
  useScrollTracking();
  useTimeOnPageTracking();
};
