// SEO Utility Functions

export const generateSitemap = () => {
  const baseUrl = 'https://waikiki-dining-guide.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      loc: `${baseUrl}/seo-builder`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  const baseUrl = 'https://waikiki-dining-guide.com';
  
  return `# Robots.txt for Waikiki Restaurant Guide
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Crawl-delay: 2

# Disallow admin and sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*utm_*
Disallow: /*?*fbclid*
Disallow: /*?*gclid*

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml`;
};

export const optimizeImageAlt = (restaurantName: string, cuisine: string): string => {
  return `${restaurantName} - ${cuisine} restaurant in Waikiki Hawaii interior and food photography`;
};

export const generateMetaDescription = (restaurantName?: string, cuisine?: string): string => {
  if (restaurantName && cuisine) {
    return `Experience ${cuisine} cuisine at ${restaurantName} in Waikiki Hawaii. Read reviews, view photos, and discover why it's one of Waikiki's top-rated restaurants.`;
  }
  return "Discover the best restaurants in Waikiki Hawaii with our comprehensive 2025 dining guide. From luxury oceanfront dining to authentic local poke bowls - find your perfect meal in paradise.";
};

export const generatePageTitle = (page?: string, restaurantName?: string): string => {
  if (page === 'seo-builder') {
    return "Free SEO Strategy Builder - Create Custom SEO Plans in Minutes";
  }
  if (restaurantName) {
    return `${restaurantName} - Best Waikiki Restaurant Guide 2025`;
  }
  return "Best Restaurants in Waikiki Hawaii 2025 - Complete Dining Guide";
};

export const validateSEOElements = (page: 'home' | 'seo-builder') => {
  const issues: string[] = [];
  
  // Check title length
  const title = document.title;
  if (title.length > 60) {
    issues.push('Title tag exceeds 60 characters');
  }
  
  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!metaDesc) {
    issues.push('Missing meta description');
  } else if (metaDesc.length > 160) {
    issues.push('Meta description exceeds 160 characters');
  }
  
  // Check H1 tags
  const h1Tags = document.querySelectorAll('h1');
  if (h1Tags.length === 0) {
    issues.push('Missing H1 tag');
  } else if (h1Tags.length > 1) {
    issues.push('Multiple H1 tags found');
  }
  
  // Check images without alt text
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push(`${imagesWithoutAlt.length} images missing alt text`);
  }
  
  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    issues.push('Missing canonical URL');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

export const trackSEOPerformance = (page: string) => {
  // Core Web Vitals tracking - only in development
  if (process.env.NODE_ENV === 'development' && 'web-vital' in window) {
    // @ts-ignore
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }: any) => {
      getCLS((metric: any) => console.log('CLS:', metric));
      getFID((metric: any) => console.log('FID:', metric));
      getFCP((metric: any) => console.log('FCP:', metric));
      getLCP((metric: any) => console.log('LCP:', metric));
      getTTFB((metric: any) => console.log('TTFB:', metric));
    });
  }
  
  // Track page views for SEO analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: { seo_page: page }
    });
  }
};