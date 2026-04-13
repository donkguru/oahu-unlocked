'use client'

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
  description: string;
  website: string;
  phone: string;
  address?: string;
  image?: string;
}

export const RestaurantStructuredData = ({ restaurant }: { restaurant: Restaurant }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "description": restaurant.description,
    "image": restaurant.image,
    "servesCuisine": restaurant.cuisine,
    "priceRange": restaurant.priceRange,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": restaurant.rating,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": Math.round(restaurant.rating * 120)
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Waikiki",
      "addressRegion": "HI",
      "addressCountry": "US",
      "streetAddress": restaurant.address
    },
    "telephone": restaurant.phone,
    "url": restaurant.website,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "06:00",
      "closes": "23:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const LocalBusinessStructuredData = ({
  businessName = "OahuUnlocked",
  description = "Your complete guide to the best restaurants, adventures, and golf on Oahu, Hawaii"
}: {
  businessName?: string;
  description?: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Honolulu",
      "addressRegion": "HI",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.2793",
      "longitude": "-157.8311"
    },
    "url": "https://oahuunlocked.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const WebsiteStructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OahuUnlocked",
    "description": "Best restaurants, adventures, and golf on Oahu Hawaii 2025",
    "url": "https://oahuunlocked.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://oahuunlocked.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

interface Adventure {
  name: string;
  description: string;
  category: string;
  location: string;
  image: string;
  website: string;
  priceRange: string;
}

export const AdventureStructuredData = ({ adventure, url }: { adventure: Adventure; url: string }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": adventure.name,
    "description": adventure.description,
    "image": adventure.image,
    "url": url,
    "touristType": adventure.category,
    "location": {
      "@type": "Place",
      "name": adventure.location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": adventure.location,
        "addressRegion": "HI",
        "addressCountry": "US"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": adventure.priceRange.split('-')[0].replace(/[^0-9]/g, ''),
      "priceCurrency": "USD",
      "url": adventure.website
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

interface GolfCourse {
  name: string;
  description: string;
  location: string;
  image: string;
  website: string;
  phone: string;
  type: string;
  holes: number;
  greenFees: { nonResidents: string };
}

export const GolfCourseStructuredData = ({ course, url }: { course: GolfCourse; url: string }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": course.name,
    "description": course.description,
    "image": course.image,
    "url": url,
    "telephone": course.phone,
    "sport": "Golf",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": course.location,
      "addressRegion": "HI",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "name": `${course.holes}-hole ${course.type} Golf`,
      "price": course.greenFees.nonResidents.split('-')[0].replace(/[^0-9]/g, ''),
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const BreadcrumbStructuredData = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQStructuredData = ({ faqs }: { faqs: FAQItem[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
