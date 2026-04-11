// Debug utility to validate all restaurant links at startup
import { printLinkValidationReport } from '@/utils/validateAllLinks';

export const debugAllRestaurantLinks = () => {
  return printLinkValidationReport();
};

// Auto-run in development mode
if (process.env.NODE_ENV === 'development') {
  debugAllRestaurantLinks();
}