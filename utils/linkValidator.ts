// Utility functions for validating and fixing restaurant links

export interface LinkValidationResult {
  isValid: boolean;
  fixedUrl: string;
  errors: string[];
}

export const validateAndFixUrl = (url: string, restaurantName: string = ''): LinkValidationResult => {
  const result: LinkValidationResult = {
    isValid: false,
    fixedUrl: '',
    errors: []
  };

  if (!url || typeof url !== 'string') {
    result.errors.push(`Missing or invalid URL for ${restaurantName}`);
    return result;
  }

  let cleanUrl = url.trim();
  
  // Remove any extra quotes or brackets
  cleanUrl = cleanUrl.replace(/['"<>]/g, '');
  
  // Fix common URL issues
  const commonFixes = [
    // Remove trailing slashes after domain
    { pattern: /^(https?:\/\/[^\/]+)\/$/, replacement: '$1' },
    // Fix missing protocols
    { pattern: /^www\./, replacement: 'https://www.' },
    // Fix double protocols
    { pattern: /^https?:\/\/https?:\/\//, replacement: 'https://' },
    // Fix incomplete protocols
    { pattern: /^\/\//, replacement: 'https://' },
  ];

  for (const fix of commonFixes) {
    cleanUrl = cleanUrl.replace(fix.pattern, fix.replacement);
  }

  // Add https if no protocol
  if (cleanUrl && !cleanUrl.match(/^https?:\/\//)) {
    cleanUrl = `https://${cleanUrl}`;
  }

  try {
    const urlObj = new URL(cleanUrl);
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /localhost/i,
      /127\.0\.0\.1/,
      /192\.168\./,
      /10\.\d+\.\d+\.\d+/,
      /example\.com/i,
      /test\.com/i,
      /placeholder\./i
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(cleanUrl)) {
        result.errors.push(`Suspicious URL pattern detected: ${cleanUrl}`);
        return result;
      }
    }

    result.isValid = true;
    result.fixedUrl = cleanUrl;
    
  } catch (error) {
    result.errors.push(`Invalid URL format: ${cleanUrl} - ${error}`);
  }

  return result;
};

export const validateRestaurantLinks = (restaurants: any[]) => {
  const results = {
    valid: [] as string[],
    invalid: [] as { name: string; url: string; errors: string[] }[],
    fixed: [] as { name: string; originalUrl: string; fixedUrl: string }[]
  };

  restaurants.forEach(restaurant => {
    if (restaurant.website) {
      const validation = validateAndFixUrl(restaurant.website, restaurant.name);
      
      if (validation.isValid) {
        results.valid.push(restaurant.name);
        
        if (validation.fixedUrl !== restaurant.website) {
          results.fixed.push({
            name: restaurant.name,
            originalUrl: restaurant.website,
            fixedUrl: validation.fixedUrl
          });
        }
      } else {
        results.invalid.push({
          name: restaurant.name,
          url: restaurant.website,
          errors: validation.errors
        });
      }
    }
  });

  return results;
};