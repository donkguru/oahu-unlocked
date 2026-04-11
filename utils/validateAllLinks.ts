// One-time validation script to check all restaurant links
import { restaurants } from '@/data/restaurants';
import { validateAndFixUrl } from '@/utils/linkValidator';

export const generateLinkValidationReport = () => {
  const results = {
    missingLinks: [] as { id: number; name: string }[],
    invalidLinks: [] as { id: number; name: string; url: string; errors: string[] }[],
    validLinks: [] as { id: number; name: string; url: string }[],
    autoFixedLinks: [] as { id: number; name: string; original: string; fixed: string }[]
  };

  restaurants.forEach(restaurant => {
    // Check if website is missing or empty
    if (!restaurant.website || restaurant.website.trim() === '') {
      results.missingLinks.push({
        id: restaurant.id,
        name: restaurant.name
      });
      return;
    }

    // Validate the URL
    const validation = validateAndFixUrl(restaurant.website, restaurant.name);
    
    if (validation.isValid) {
      results.validLinks.push({
        id: restaurant.id,
        name: restaurant.name,
        url: validation.fixedUrl
      });
      
      // Check if URL was auto-fixed
      if (validation.fixedUrl !== restaurant.website) {
        results.autoFixedLinks.push({
          id: restaurant.id,
          name: restaurant.name,
          original: restaurant.website,
          fixed: validation.fixedUrl
        });
      }
    } else {
      results.invalidLinks.push({
        id: restaurant.id,
        name: restaurant.name,
        url: restaurant.website,
        errors: validation.errors
      });
    }
  });

  return results;
};

// Generate and log the report
export const printLinkValidationReport = () => {
  const results = generateLinkValidationReport();
  
  // Only log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('\n==========================================');
    console.log('🔗 RESTAURANT LINKS VALIDATION REPORT');
    console.log('==========================================\n');
    
    console.log(`Total Restaurants: ${restaurants.length}\n`);
    
    // Valid Links
    console.log(`✅ Valid Links: ${results.validLinks.length}`);
    
    // Auto-Fixed Links
    if (results.autoFixedLinks.length > 0) {
      console.log(`\n⚠️  Auto-Fixed Links: ${results.autoFixedLinks.length}`);
      results.autoFixedLinks.forEach(item => {
        console.log(`  • ID ${item.id}: ${item.name}`);
        console.log(`    Original: ${item.original}`);
        console.log(`    Fixed: ${item.fixed}`);
      });
    }
    
    // Missing Links
    if (results.missingLinks.length > 0) {
      console.log(`\n❌ Missing Links (Empty/No Website): ${results.missingLinks.length}`);
      results.missingLinks.forEach(item => {
        console.log(`  • ID ${item.id}: ${item.name}`);
      });
    }
    
    // Invalid Links
    if (results.invalidLinks.length > 0) {
      console.log(`\n🚫 Invalid Links: ${results.invalidLinks.length}`);
      results.invalidLinks.forEach(item => {
        console.log(`  • ID ${item.id}: ${item.name}`);
        console.log(`    URL: ${item.url}`);
        console.log(`    Errors: ${item.errors.join(', ')}`);
      });
    }
    
    console.log('\n==========================================\n');
  }
  
  return results;
};
