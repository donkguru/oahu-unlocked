// Comprehensive restaurant database for all establishments within 15 miles of Duke's Waikiki
// Duke's Waikiki coordinates: 21.2756, -157.8267

// Import Chun Wah Kam images

// Import Nico's Pier 38 image

// Import Giovanni's Shrimp Truck image

export interface Restaurant {
  id: number;
  name: string;
  category: string;
  cuisine: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  priceRange: string;
  phone: string;
  hours: string;
  address: string;
  description: string;
  highlights: string[];
  website: string;
  image: string;
  distanceFromDukes: string;
  walkingTime: string;
  driveTime?: string;
  specialties: string[];
  parking: string;
  hotel?: string;
  hotelWebsite?: string;
}

// All restaurants within 15 miles of Duke's Waikiki, organized by distance
// Includes restaurants, cafes, bars, food trucks, and street vendors
export const restaurants: Restaurant[] = [
  // Same Building - Outrigger Waikiki Beach Resort (0-1 min)
  {
    id: 1,
    name: "Duke's Waikiki",
    category: "Hawaiian Regional",
    cuisine: "Hawaiian Regional",
    coordinates: { lat: 21.2756, lng: -157.8267 },
    rating: 4.6,
    priceRange: "$$$",
    phone: "(808) 922-2268",
    hours: "7:00 AM - 12:00 AM",
    address: "2335 Kalakaua Ave, Honolulu, HI 96815",
    description: "Iconic beachfront restaurant serving fresh Hawaiian seafood, steaks, and the famous Hula Pie since 1979. Our reference point!",
    highlights: ["Reference Point", "Beachfront Location", "Live Music", "Hula Pie"],
    website: "https://www.dukeswaikiki.com",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    distanceFromDukes: "0 min walk",
    walkingTime: "Same building",
    specialties: ["Hawaiian Seafood", "Beachfront", "Live Music"],
    parking: "Self parking available",
    hotel: "Outrigger Waikiki Beach Resort",
    hotelWebsite: "https://www.outrigger.com/hawaii/oahu/outrigger-waikiki-beach-resort"
  },
  {
    id: 2,
    name: "Hula Grill Waikiki",
    category: "Hawaiian Regional",
    cuisine: "Hawaiian Regional",
    coordinates: { lat: 21.2756, lng: -157.8268 },
    rating: 4.4,
    priceRange: "$$$",
    phone: "(808) 923-4852",
    hours: "11:00 AM - 10:00 PM",
    address: "2335 Kalakaua Ave, Honolulu, HI 96815",
    description: "Oceanfront dining featuring fresh Hawaiian seafood, steaks, and island-inspired cocktails with spectacular sunset views.",
    highlights: ["Oceanfront", "Hawaiian Seafood", "Sunset Views", "Island Cocktails"],
    website: "https://www.hulagrillwaikiki.com/",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop",
    distanceFromDukes: "1 min walk",
    walkingTime: "Same building",
    specialties: ["Hawaiian Seafood", "Sunset Views", "Island Cocktails"],
    parking: "Self parking available",
    hotel: "Outrigger Waikiki Beach Resort",
    hotelWebsite: "https://www.outrigger.com/hawaii/oahu/outrigger-waikiki-beach-resort"
  },
  {
    id: 3,
    name: "Blue Note Hawaii",
    category: "Contemporary American",
    cuisine: "Contemporary American",
    coordinates: { lat: 21.2757, lng: -157.8267 },
    rating: 4.1,
    priceRange: "$$$",
    phone: "(808) 777-4890",
    hours: "5:30 PM - 11:00 PM",
    address: "2335 Kalakaua Ave, Honolulu, HI 96815",
    description: "World-famous jazz club and restaurant featuring live music performances with contemporary American cuisine and craft cocktails.",
    highlights: ["Live Jazz", "Contemporary American", "World Famous", "Live Performances"],
    website: "https://www.bluenotehawaii.com/",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop",
    distanceFromDukes: "1 min walk",
    walkingTime: "Same building",
    specialties: ["Live Jazz", "Contemporary American", "World Famous"],
    parking: "Self parking available",
    hotel: "Outrigger Waikiki Beach Resort",
    hotelWebsite: "https://www.outrigger.com/hawaii/oahu/outrigger-waikiki-beach-resort"
  },
  {
    id: 60,
    name: "Cheeseburger in Paradise",
    category: "Contemporary American",
    cuisine: "Contemporary American",
    coordinates: { lat: 21.2758, lng: -157.8265 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 923-3731",
    hours: "8:00 AM - 10:00 PM",
    address: "2500 Kalakaua Ave, Honolulu, HI 96815",
    description: "Tropical-themed casual dining restaurant featuring gourmet burgers, tropical cocktails, and American favorites with island flair in a fun, laid-back atmosphere.",
    highlights: ["Gourmet Burgers", "Tropical Cocktails", "Island Atmosphere", "Casual Dining"],
    website: "https://www.cheeseburgernation.com/",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    distanceFromDukes: "3 min walk",
    walkingTime: "250 meters",
    specialties: ["Paradise Burger", "Tropical Cocktails", "Fish Tacos"],
    parking: "Street parking available"
  },

  // 2-3 Minutes Walk - Moana Surfrider
  {
    id: 4,
    name: "The Veranda",
    category: "Contemporary Hawaiian",
    cuisine: "Contemporary Hawaiian",
    coordinates: { lat: 21.2762, lng: -157.8271 },
    rating: 4.5,
    priceRange: "$$$",
    phone: "(808) 922-3111",
    hours: "6:30 AM - 9:30 PM",
    address: "2365 Kalakaua Ave, Honolulu, HI 96815",
    description: "Historic oceanfront restaurant featuring contemporary Hawaiian cuisine with stunning beach views and afternoon tea service.",
    highlights: ["Historic Venue", "Afternoon Tea", "Ocean Views", "Contemporary Hawaiian"],
    website: "https://www.verandawaikiki.com/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    distanceFromDukes: "2 min walk",
    walkingTime: "150 meters",
    specialties: ["Afternoon Tea", "Ocean Views", "Historic Setting"],
    parking: "Valet available",
    hotel: "Moana Surfrider, A Westin Resort",
    hotelWebsite: "https://www.moana-surfrider.com/"
  },
  {
    id: 5,
    name: "Beachhouse at the Moana",
    category: "Contemporary Hawaiian",
    cuisine: "Contemporary Hawaiian",
    coordinates: { lat: 21.2761, lng: -157.8270 },
    rating: 4.3,
    priceRange: "$$$",
    phone: "(808) 922-3111",
    hours: "5:30 PM - 9:30 PM",
    address: "2365 Kalakaua Ave, Honolulu, HI 96815",
    description: "Beachfront fine dining restaurant featuring contemporary Hawaiian cuisine with fresh local ingredients and ocean views.",
    highlights: ["Fine Dining", "Fresh Local Ingredients", "Beachfront", "Ocean Views"],
    website: "https://www.beachhousewaikiki.com/",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
    distanceFromDukes: "2 min walk",
    walkingTime: "150 meters",
    specialties: ["Fine Dining", "Fresh Local Ingredients", "Beachfront"],
    parking: "Valet available",
    hotel: "Moana Surfrider, A Westin Resort",
    hotelWebsite: "https://www.moana-surfrider.com/"
  },

  // 5 Minutes Walk - Halekulani Hotel
  {
    id: 6,
    name: "La Mer",
    category: "Fine Dining",
    cuisine: "French Fine Dining",
    coordinates: { lat: 21.2766, lng: -157.8278 },
    rating: 4.8,
    priceRange: "$$$$",
    phone: "(808) 923-2311",
    hours: "6:00 PM - 10:00 PM",
    address: "2199 Kalia Rd, Honolulu, HI 96815",
    description: "Hawaii's only AAA Five Diamond and Forbes Five Star restaurant offering exquisite French cuisine with stunning ocean views.",
    highlights: ["AAA Five Diamond", "Forbes Five Star", "Ocean Views", "Wine Spectator Award"],
    website: "https://www.halekulani.com/dining/la-mer",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop",
    distanceFromDukes: "5 min walk",
    walkingTime: "400 meters",
    specialties: ["French Cuisine", "Ocean View", "Romantic"],
    parking: "Valet available",
    hotel: "Halekulani Hotel",
    hotelWebsite: "https://www.halekulani.com/"
  },
  {
    id: 7,
    name: "Orchids",
    category: "Contemporary Hawaiian",
    cuisine: "Contemporary Hawaiian",
    coordinates: { lat: 21.2766, lng: -157.8278 },
    rating: 4.5,
    priceRange: "$$$",
    phone: "(808) 923-2311",
    hours: "7:30 AM - 9:30 PM",
    address: "2199 Kalia Rd, Honolulu, HI 96815",
    description: "Elegant oceanfront dining featuring contemporary Hawaiian cuisine with influences from around the Pacific.",
    highlights: ["Ocean Views", "Sunday Brunch", "Contemporary Hawaiian", "Romance"],
    website: "https://www.halekulani.com/dining/orchids",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    distanceFromDukes: "5 min walk",
    walkingTime: "400 meters",
    specialties: ["Contemporary Hawaiian", "Ocean Views", "Sunday Brunch"],
    parking: "Valet available",
    hotel: "Halekulani Hotel",
    hotelWebsite: "https://www.halekulani.com/"
  },
  {
    id: 8,
    name: "House Without a Key",
    category: "Pacific Rim",
    cuisine: "Pacific Rim",
    coordinates: { lat: 21.2768, lng: -157.8280 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 923-2311",
    hours: "7:00 AM - 9:00 PM",
    address: "2199 Kalia Rd, Honolulu, HI 96815",
    description: "Open-air restaurant perfect for sunset cocktails and light bites while enjoying traditional hula performances.",
    highlights: ["Sunset Views", "Hula Dancing", "Cocktails", "Open-Air Dining"],
    website: "https://www.halekulani.com/dining/house-without-a-key",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
    distanceFromDukes: "5 min walk",
    walkingTime: "400 meters",
    specialties: ["Sunset Views", "Hula Dancing", "Cocktails"],
    parking: "Valet available",
    hotel: "Halekulani Hotel",
    hotelWebsite: "https://www.halekulani.com/"
  },

  // 7-10 Minutes Walk - Hyatt Regency & Others
  {
    id: 9,
    name: "Japengo",
    category: "Contemporary Asian",
    cuisine: "Contemporary Asian",
    coordinates: { lat: 21.2754, lng: -157.8255 },
    rating: 4.4,
    priceRange: "$$$",
    phone: "(808) 923-1234",
    hours: "5:30 PM - 10:00 PM",
    address: "2424 Kalakaua Ave, Honolulu, HI 96815",
    description: "Sophisticated Asian fusion cuisine featuring fresh sushi, robata grill items, and innovative cocktails.",
    highlights: ["Fresh Sushi", "Robata Grill", "Asian Fusion", "Innovative Cocktails"],
    website: "https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-waikiki-beach-resort-and-spa/dining",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop",
    distanceFromDukes: "7 min walk",
    walkingTime: "550 meters",
    specialties: ["Fresh Sushi", "Robata Grill", "Asian Fusion"],
    parking: "Self parking available",
    hotel: "Hyatt Regency Waikiki",
    hotelWebsite: "https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-waikiki-beach-resort-and-spa"
  },
  {
    id: 10,
    name: "Shor American Seafood Grill",
    category: "American Seafood",
    cuisine: "American Seafood",
    coordinates: { lat: 21.2754, lng: -157.8256 },
    rating: 4.2,
    priceRange: "$$$",
    phone: "(808) 923-1234",
    hours: "5:30 PM - 9:30 PM",
    address: "2424 Kalakaua Ave, Honolulu, HI 96815",
    description: "Modern American seafood restaurant featuring locally caught fish and Pacific Rim influences.",
    highlights: ["Local Fish", "Pacific Rim", "Modern American", "Fresh Seafood"],
    website: "https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-waikiki-beach-resort-and-spa/dining",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
    distanceFromDukes: "7 min walk",
    walkingTime: "550 meters",
    specialties: ["Local Fish", "Pacific Rim", "Modern American"],
    parking: "Self parking available",
    hotel: "Hyatt Regency Waikiki",
    hotelWebsite: "https://www.hyatt.com/en-US/hotel/hawaii/hyatt-regency-waikiki-beach-resort-and-spa"
  },

  // 10-15 Minutes Walk - Extended Waikiki Area
  {
    id: 11,
    name: "Sansei Seafood Restaurant & Susi Bar",
    category: "Japanese Fusion",
    cuisine: "Japanese Fusion",
    coordinates: { lat: 21.2744, lng: -157.8249 },
    rating: 4.5,
    priceRange: "$$$",
    phone: "(808) 931-6286",
    hours: "5:30 PM - 1:00 AM",
    address: "2552 Kalakaua Ave, Honolulu, HI 96815",
    description: "Award-winning sushi bar featuring creative Japanese fusion cuisine with fresh local ingredients and innovative preparations.",
    highlights: ["Award Winning", "Fresh Sushi", "Japanese Fusion", "Late Night Dining"],
    website: "https://dkrestaurants.com/sansei-waikiki/",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop",
    distanceFromDukes: "10 min walk",
    walkingTime: "800 meters",
    specialties: ["Award Winning", "Fresh Sushi", "Japanese Fusion"],
    parking: "Self parking available",
    hotel: "Waikiki Beach Marriott Resort",
    hotelWebsite: "https://www.marriott.com/hotels/hotel-information/hnlmc-waikiki-beach-marriott-resort-spa/"
  },
  {
    id: 12,
    name: "Morimoto Asia Waikiki",
    category: "Modern Asian",
    cuisine: "Modern Asian",
    coordinates: { lat: 21.2765, lng: -157.8290 },
    rating: 4.6,
    priceRange: "$$$$",
    phone: "(808) 943-5626",
    hours: "5:00 PM - 10:00 PM",
    address: "2330 Kalakaua Ave, Honolulu, HI 96815",
    description: "Celebrity chef Masaharu Morimoto's signature restaurant featuring modern Asian cuisine with creative presentations.",
    highlights: ["Celebrity Chef", "Modern Asian", "Creative Presentations", "Upscale Dining"],
    website: "https://morimotoasiawaikiki.com/",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&h=400&fit=crop",
    distanceFromDukes: "12 min walk",
    walkingTime: "950 meters",
    specialties: ["Celebrity Chef", "Modern Asian", "Creative Presentations"],
    parking: "Valet available",
    hotel: "International Market Place",
    hotelWebsite: "https://www.internationalmarketplacewaikiki.com/"
  },

  // 15+ Minutes Walk / Short Drive - Greater Honolulu Area
  {
    id: 13,
    name: "Alan Wong's Restaurant",
    category: "Hawaiian Regional",
    cuisine: "Hawaiian Regional",
    coordinates: { lat: 21.2944, lng: -157.8450 },
    rating: 4.7,
    priceRange: "$$$$",
    phone: "(808) 949-2526",
    hours: "5:30 PM - 10:00 PM",
    address: "1857 S King St, Honolulu, HI 96826",
    description: "Pioneer of Hawaiian Regional Cuisine, featuring innovative dishes with local ingredients and Pacific influences.",
    highlights: ["Hawaiian Regional Pioneer", "Local Ingredients", "Innovative Cuisine", "Award Winning"],
    website: "https://www.alanwongs.com/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    distanceFromDukes: "25 min walk",
    walkingTime: "2.1 miles",
    driveTime: "8 minutes",
    specialties: ["Hawaiian Regional Pioneer", "Local Ingredients", "Innovative Cuisine"],
    parking: "Free parking lot"
  },
  {
    id: 14,
    name: "Hoku's",
    category: "French Hawaiian",
    cuisine: "French Hawaiian",
    coordinates: { lat: 21.2777, lng: -157.7075 },
    rating: 4.7,
    priceRange: "$$$$",
    phone: "(808) 739-8780",
    hours: "5:30 PM - 9:30 PM",
    address: "5000 Kahala Ave, Honolulu, HI 96816",
    description: "Elegant French cuisine with Hawaiian influences, featuring oceanfront views and sophisticated preparations using local ingredients.",
    highlights: ["Oceanfront Dining", "French-Hawaiian Fusion", "Local Ingredients", "Elegant Atmosphere"],
    website: "https://www.kahalaresort.com/dining/hokus",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&h=400&fit=crop",
    distanceFromDukes: "25 min drive",
    walkingTime: "7.2 miles",
    driveTime: "25 minutes",
    specialties: ["French Techniques", "Hawaiian Ingredients", "Ocean Views"],
    parking: "Valet parking available",
    hotel: "The Kahala Hotel & Resort",
    hotelWebsite: "https://www.kahalaresort.com/"
  },
  {
    id: 15,
    name: "Roy's Waikiki",
    category: "Hawaiian Fusion",
    cuisine: "Hawaiian Fusion",
    coordinates: { lat: 21.2785, lng: -157.8320 },
    rating: 4.4,
    priceRange: "$$$",
    phone: "(808) 923-7697",
    hours: "5:30 PM - 9:30 PM",
    address: "226 Lewers St, Honolulu, HI 96815",
    description: "Roy Yamaguchi's flagship restaurant featuring Hawaiian fusion cuisine with European techniques and Asian flavors.",
    highlights: ["Hawaiian Fusion Pioneer", "European Techniques", "Asian Flavors", "Signature Dishes"],
    website: "https://www.royshawaii.com/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    distanceFromDukes: "15 min walk",
    walkingTime: "1.2 miles",
    driveTime: "5 minutes",
    specialties: ["Hawaiian Fusion Pioneer", "European Techniques", "Asian Flavors"],
    parking: "Valet available"
  },

  // Local Hawaiian Establishments - Chun Wah Kam Noodle Factory Locations
  {
    id: 50,
    name: "Chun Wah Kam Noodle Factory - Ala Moana",
    category: "Chinese Local Style",
    cuisine: "Chinese Local Style",
    coordinates: { lat: 21.2888, lng: -157.8498 },
    rating: 4.2,
    priceRange: "$",
    phone: "(808) 744-1816",
    hours: "8:00 AM - 4:00 PM",
    address: "537 Pensacola Street, Honolulu, HI 96814",
    description: "Historic local noodle factory serving traditional Chinese-Hawaiian comfort food since 1942. Famous for manapua, dim sum, and plate lunches.",
    highlights: ["Manapua", "Dim Sum", "Local Institution", "Since 1942"],
    website: "https://chunwahkam.com/alamoana",
    image: "/assets/chun-wah-kam-noodles-ala-moana.jpg",
    distanceFromDukes: "12 min walk",
    walkingTime: "0.9 miles",
    driveTime: "4 minutes",
    specialties: ["Manapua", "Dim Sum", "Plate Lunches"],
    parking: "Ample parking available"
  },
  {
    id: 49,
    name: "Chun Wah Kam Noodle Factory - Aiea",
    category: "Chinese Local Style",
    cuisine: "Chinese Local Style",
    coordinates: { lat: 21.3842, lng: -157.9265 },
    rating: 4.3,
    priceRange: "$",
    phone: "(808) 485-1107",
    hours: "8:00 AM - 4:00 PM",
    address: "98-040 Kamehameha Highway, Aiea, HI 96701",
    description: "Family-friendly location in Waimalu Shopping Center serving traditional Chinese-Hawaiian favorites since 1993.",
    highlights: ["Family Friendly", "Shopping Center Location", "Traditional Recipes", "Catering Available"],
    website: "https://chunwahkam.com/waimalu",
    image: "/assets/chun-wah-kam-noodles-aiea.jpg",
    distanceFromDukes: "8.5 miles",
    walkingTime: "1 hour 45 minutes",
    driveTime: "18 minutes",
    specialties: ["Manapua", "Dim Sum", "Plate Lunches"],
    parking: "Shopping center parking"
  },
  {
    id: 48,
    name: "Chun Wah Kam Noodle Factory - Kapolei",
    category: "Chinese Local Style",
    cuisine: "Chinese Local Style",
    coordinates: { lat: 21.3346, lng: -158.0580 },
    rating: 4.1,
    priceRange: "$",
    phone: "(808) 674-8292",
    hours: "8:00 AM - 4:00 PM",
    address: "Ka Makana Ali'i Shopping Center, Kapolei, HI 96707",
    description: "West Oahu location bringing the same quality manapua and dim sum to the growing Kapolei community.",
    highlights: ["West Oahu Location", "Ka Makana Ali'i", "Traditional Quality", "Local Favorites"],
    website: "https://chunwahkam.com/kapolei",
    image: "/assets/chun-wah-kam-noodles-kapolei.jpg",
    distanceFromDukes: "20 miles",
    walkingTime: "4 hours",
    driveTime: "35 minutes",
    specialties: ["Manapua", "Dim Sum", "Plate Lunches"],
    parking: "Mall parking available"
  },

  // Food Trucks and Mobile Vendors within 15 miles
  {
    id: 51,
    name: "Giovanni's Shrimp Truck",
    category: "Food Truck",
    cuisine: "Hawaiian Plate Lunch",
    coordinates: { lat: 21.2945, lng: -157.8456 },
    rating: 4.3,
    priceRange: "$",
    phone: "(808) 293-1839",
    hours: "10:30 AM - 6:30 PM",
    address: "Kahuku Shrimp Trucks (multiple locations)",
    description: "Famous North Shore shrimp truck that occasionally visits Waikiki area, known for garlic shrimp plates.",
    highlights: ["Garlic Shrimp", "Authentic Plate Lunch", "Food Truck Icon"],
    website: "https://giovannisshrimptruck.com/",
    image: "/assets/giovannis-shrimp-truck.jpg",
    distanceFromDukes: "2.5 miles",
    walkingTime: "50 minutes",
    driveTime: "12 minutes",
    specialties: ["Garlic Shrimp", "Spicy Shrimp", "Lemon Pepper Shrimp"],
    parking: "Street parking nearby"
  },
  {
    id: 52,
    name: "Poke Bros Food Truck",
    category: "Food Truck", 
    cuisine: "Hawaiian Poke",
    coordinates: { lat: 21.2680, lng: -157.8150 },
    rating: 4.2,
    priceRange: "$",
    phone: "(808) 445-7653",
    hours: "11:00 AM - 7:00 PM",
    address: "Kapiolani Park Area (rotating location)",
    description: "Fresh poke bowls and Hawaiian-style seafood served from a colorful food truck near Kapiolani Park.",
    highlights: ["Fresh Daily Poke", "Custom Bowls", "Local Favorites"],
    website: "",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
    distanceFromDukes: "1.2 miles",
    walkingTime: "25 minutes", 
    driveTime: "8 minutes",
    specialties: ["Ahi Poke", "Salmon Poke", "Mixed Poke Bowls"],
    parking: "Limited street parking"
  },
  {
    id: 53,
    name: "Shave Ice Paradise Truck",
    category: "Food Truck",
    cuisine: "Hawaiian Desserts",
    coordinates: { lat: 21.2834, lng: -157.8298 },
    rating: 4.5,
    priceRange: "$",
    phone: "(808) 555-SHAVE",
    hours: "12:00 PM - 8:00 PM",
    address: "International Market Place area (weekends)",
    description: "Authentic Hawaiian shave ice truck with over 30 flavors and traditional toppings like azuki beans.",
    highlights: ["30+ Flavors", "Traditional Toppings", "Authentic Recipe"],
    website: "",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    distanceFromDukes: "0.8 miles",
    walkingTime: "15 minutes",
    driveTime: "5 minutes", 
    specialties: ["Rainbow Shave Ice", "Li Hing Mui", "Azuki Beans"],
    parking: "Mall parking available"
  },
  {
    id: 54,
    name: "Aloha Acai Bowl Truck",
    category: "Food Truck",
    cuisine: "Health Food",
    coordinates: { lat: 21.2612, lng: -157.8034 },
    rating: 4.4,
    priceRange: "$$",
    phone: "(808) 555-ACAI",
    hours: "7:00 AM - 3:00 PM",
    address: "Diamond Head Beach Park area",
    description: "Fresh acai bowls and smoothies with local fruits, perfect for post-hike refreshment at Diamond Head.",
    highlights: ["Fresh Acai", "Local Fruits", "Healthy Options"],
    website: "",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
    distanceFromDukes: "2.1 miles",
    walkingTime: "42 minutes",
    driveTime: "10 minutes",
    specialties: ["Acai Bowls", "Green Smoothies", "Pitaya Bowls"],
    parking: "Beach park parking"
  },
  {
    id: 55,
    name: "Spam Musubi Express Truck",
    category: "Food Truck",
    cuisine: "Hawaiian Local",
    coordinates: { lat: 21.2789, lng: -157.8267 },
    rating: 4.1,
    priceRange: "$",
    phone: "(808) 555-SPAM",
    hours: "6:00 AM - 2:00 PM",
    address: "Kalakaua Ave (rotating daily)",
    description: "Mobile vendor specializing in fresh spam musubi, saimin, and other local Hawaiian comfort foods.",
    highlights: ["Fresh Musubi", "Local Comfort Food", "Quick Service"],
    website: "",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    distanceFromDukes: "0.3 miles",
    walkingTime: "6 minutes",
    driveTime: "2 minutes",
    specialties: ["Spam Musubi", "Saimin", "Manapua"],
    parking: "Street parking when available"
  },

  // Additional Restaurants within 15 miles - Extended Coverage
  {
    id: 56,
    name: "The Pig and the Lady",
    category: "Vietnamese Fusion",
    cuisine: "Vietnamese",
    coordinates: { lat: 21.3099, lng: -157.8581 },
    rating: 4.6,
    priceRange: "$$$",
    phone: "(808) 585-8255",
    hours: "10:30 AM - 2:30 PM, 5:30 PM - 10:00 PM",
    address: "83 N King St, Honolulu, HI 96817",
    description: "Acclaimed Vietnamese restaurant in Chinatown serving modern interpretations of traditional dishes.",
    highlights: ["Chinatown Location", "Modern Vietnamese", "Award Winning"],
    website: "https://thepigandthelady.com/",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop",
    distanceFromDukes: "4.2 miles",
    walkingTime: "85 minutes",
    driveTime: "18 minutes",
    specialties: ["Pho", "Banh Mi", "Vietnamese Coffee"],
    parking: "Street parking"
  },
  {
    id: 57,
    name: "Helena's Hawaiian Food",
    category: "Local Hawaiian",
    cuisine: "Traditional Hawaiian",
    coordinates: { lat: 21.3156, lng: -157.8567 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 845-8044",
    hours: "6:00 AM - 7:30 PM (Tue-Sat)",
    address: "1240 N School St, Honolulu, HI 96817",
    description: "Historic local institution serving traditional Hawaiian food since 1946, James Beard Award winner.",
    highlights: ["Since 1946", "James Beard Award", "Traditional Hawaiian"],
    website: "https://www.helenashawaiianfood.com/index.html",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    distanceFromDukes: "5.8 miles",
    walkingTime: "115 minutes",
    driveTime: "22 minutes",
    specialties: ["Pipi Kaula", "Poi", "Lau Lau"],
    parking: "Small lot available"
  },
  {
    id: 58,
    name: "Nico's Pier 38",
    category: "Seafood",
    cuisine: "Fresh Seafood",
    coordinates: { lat: 21.3089, lng: -157.8678 },
    rating: 4.5,
    priceRange: "$$$",
    phone: "(808) 540-1377",
    hours: "6:30 AM - 6:00 PM (Mon-Sat)",
    address: "1133 N Nimitz Hwy, Honolulu, HI 96817",
    description: "Waterfront restaurant at Honolulu Harbor serving the freshest local fish straight from the boats.",
    highlights: ["Harbor Location", "Boat-to-Table Fresh", "Local Fishermen"],
    website: "https://nicospier38.com/",
    image: "/assets/nicos-pier-38-fish-meal.jpg",
    distanceFromDukes: "6.1 miles",
    walkingTime: "125 minutes",
    driveTime: "25 minutes",
    specialties: ["Fresh Ono", "Ahi Katsu", "Seafood Plates"],
    parking: "Free parking lot"
  },
  
  // NORTH SHORE - Haleiwa & Kahuku
  {
    id: 59,
    name: "Giovanni's Shrimp Truck",
    category: "Food Truck",
    cuisine: "Seafood",
    coordinates: { lat: 21.6840, lng: -157.9516 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 293-1839",
    hours: "10:30 AM - 5:00 PM",
    address: "66-472 Kamehameha Hwy, Haleiwa, HI 96712",
    description: "Legendary shrimp truck on the North Shore famous for their garlic shrimp. The white truck covered in signatures is an Oahu icon.",
    highlights: ["Famous Garlic Shrimp", "North Shore Icon", "Food Truck"],
    website: "https://giovannisshrimptruck.com/",
    image: "/assets/giovannis-shrimp-truck.jpg",
    distanceFromDukes: "28 miles",
    walkingTime: "N/A",
    driveTime: "50 minutes",
    specialties: ["Garlic Shrimp", "Spicy Shrimp", "Lemon Butter Shrimp"],
    parking: "Roadside parking"
  },
  {
    id: 60,
    name: "Haleiwa Joe's Seafood Grill",
    category: "Seafood",
    cuisine: "Seafood",
    coordinates: { lat: 21.5944, lng: -157.9520 },
    rating: 4.5,
    priceRange: "$$$",
    phone: "(808) 637-8005",
    hours: "11:30 AM - 9:30 PM",
    address: "66-011 Kamehameha Hwy, Haleiwa, HI 96712",
    description: "Waterfront seafood restaurant with stunning views of Haleiwa Harbor. Known for fresh fish, steaks, and tropical cocktails.",
    highlights: ["Harbor Views", "Fresh Fish", "Tropical Cocktails", "Sunset Dining"],
    website: "https://haleiwajoes.com/haleiwa/",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
    distanceFromDukes: "26 miles",
    walkingTime: "N/A",
    driveTime: "45 minutes",
    specialties: ["Macadamia Nut Crusted Fish", "Prime Rib", "Coconut Shrimp"],
    parking: "Free parking lot"
  },
  {
    id: 61,
    name: "Matsumoto Shave Ice",
    category: "Dessert",
    cuisine: "Hawaiian",
    coordinates: { lat: 21.5944, lng: -157.9518 },
    rating: 4.4,
    priceRange: "$",
    phone: "(808) 637-4827",
    hours: "9:00 AM - 6:00 PM",
    address: "66-087 Kamehameha Hwy, Haleiwa, HI 96712",
    description: "World-famous shave ice shop in Haleiwa since 1951. A must-visit North Shore destination with lines around the block.",
    highlights: ["Since 1951", "Famous Shave Ice", "North Shore Icon"],
    website: "https://matsumotoshaveice.com/",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop",
    distanceFromDukes: "26 miles",
    walkingTime: "N/A",
    driveTime: "45 minutes",
    specialties: ["Rainbow Shave Ice", "Azuki Beans", "Ice Cream"],
    parking: "Limited street parking"
  },
  {
    id: 62,
    name: "Teddy's Bigger Burgers - Haleiwa",
    category: "Burger Joint",
    cuisine: "American",
    coordinates: { lat: 21.5946, lng: -157.9519 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 637-2700",
    hours: "10:30 AM - 8:00 PM",
    address: "59-165 Kamehameha Hwy, Haleiwa, HI 96712",
    description: "Local burger chain serving big juicy burgers with fresh ingredients. Perfect for a hearty meal after surfing.",
    highlights: ["Big Burgers", "Local Chain", "Surf Town Vibes"],
    website: "",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    distanceFromDukes: "26 miles",
    walkingTime: "N/A",
    driveTime: "45 minutes",
    specialties: ["7oz Burger", "Pineapple Teriyaki Burger", "Onion Rings"],
    parking: "Free parking"
  },
  {
    id: 63,
    name: "Kua Aina Sandwich Shop",
    category: "Casual Dining",
    cuisine: "American",
    coordinates: { lat: 21.5945, lng: -157.9521 },
    rating: 4.5,
    priceRange: "$$",
    phone: "(808) 637-6067",
    hours: "11:00 AM - 8:00 PM",
    address: "66-160 Kamehameha Hwy, Haleiwa, HI 96712",
    description: "Famous North Shore burger joint since 1975. Known for their mahimahi sandwiches and fresh-cut fries.",
    highlights: ["Since 1975", "Famous Burgers", "Fresh-Cut Fries", "Mahimahi Sandwich"],
    website: "https://kua-aina.com/",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
    distanceFromDukes: "26 miles",
    walkingTime: "N/A",
    driveTime: "45 minutes",
    specialties: ["Mahimahi Sandwich", "Avocado Burger", "Fresh Fries"],
    parking: "Street parking"
  },
  
  // KAILUA - Windward Side
  {
    id: 64,
    name: "Boots & Kimo's Homestyle Kitchen",
    category: "Breakfast",
    cuisine: "Hawaiian-American",
    coordinates: { lat: 21.4023, lng: -157.7396 },
    rating: 4.7,
    priceRange: "$$",
    phone: "(808) 263-7929",
    hours: "Mon, Thu-Sat: 8AM-1PM, Sun: 8AM-2PM, Closed Tue-Wed",
    address: "151 Hekili St #101, Kailua, HI 96734",
    description: "World-famous for their Macadamia Nut Pancakes. This local breakfast spot is a Kailua institution with lines out the door.",
    highlights: ["Famous Mac Nut Pancakes", "Kailua Icon", "Breakfast Spot"],
    website: "https://www.bootsnkimos.com/",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
    distanceFromDukes: "11 miles",
    walkingTime: "N/A",
    driveTime: "25 minutes",
    specialties: ["Macadamia Nut Pancakes", "Loco Moco", "Portuguese Sausage"],
    parking: "Free parking lot"
  },
  {
    id: 65,
    name: "Cinnamon's Restaurant",
    category: "Breakfast",
    cuisine: "American",
    coordinates: { lat: 21.3982, lng: -157.7404 },
    rating: 4.6,
    priceRange: "$$",
    phone: "(808) 261-8724",
    hours: "7:00 AM - 2:00 PM",
    address: "315 Uluniu St, Kailua, HI 96734",
    description: "Popular breakfast spot famous for their Guava Chiffon Pancakes and generous portions. Expect a wait on weekends!",
    highlights: ["Guava Chiffon Pancakes", "Big Portions", "Local Favorite"],
    website: "https://cinnamonskailua.com/",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
    distanceFromDukes: "11 miles",
    walkingTime: "N/A",
    driveTime: "25 minutes",
    specialties: ["Guava Chiffon Pancakes", "Red Velvet Pancakes", "Eggs Benedict"],
    parking: "Free parking"
  },
  {
    id: 66,
    name: "Kalapawai Market",
    category: "Cafe",
    cuisine: "American",
    coordinates: { lat: 21.3918, lng: -157.7180 },
    rating: 4.5,
    priceRange: "$$",
    phone: "(808) 262-4359",
    hours: "6:00 AM - 9:00 PM",
    address: "306 S Kalaheo Ave, Kailua, HI 96734",
    description: "Historic market and cafe near Kailua Beach serving sandwiches, salads, and local favorites since 1932.",
    highlights: ["Since 1932", "Near Kailua Beach", "Historic Market"],
    website: "https://www.kalapawaimarket.com/",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    distanceFromDukes: "11.5 miles",
    walkingTime: "N/A",
    driveTime: "26 minutes",
    specialties: ["Market Sandwiches", "Coffee", "Beach Snacks"],
    parking: "Street parking"
  },
  {
    id: 67,
    name: "Buzz's Original Steakhouse - Kailua",
    category: "Steakhouse",
    cuisine: "Steakhouse",
    coordinates: { lat: 21.3970, lng: -157.7241 },
    rating: 4.4,
    priceRange: "$$$",
    phone: "(808) 261-4661",
    hours: "11:00 AM - 9:00 PM",
    address: "413 Kawailoa Rd, Kailua, HI 96734",
    description: "Beachside steakhouse across from Kailua Beach Park. Serving quality steaks and seafood since 1962.",
    highlights: ["Since 1962", "Across from Beach", "Steaks & Seafood"],
    website: "https://www.buzzsoriginalsteakhouse.com/",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop",
    distanceFromDukes: "11.2 miles",
    walkingTime: "N/A",
    driveTime: "25 minutes",
    specialties: ["Prime Rib", "Fresh Fish", "Salad Bar"],
    parking: "Free parking lot"
  },
  
  // KANEOHE - Windward Side
  {
    id: 68,
    name: "Haleiwa Joe's Haiku Gardens",
    category: "Seafood",
    cuisine: "Seafood",
    coordinates: { lat: 21.4287, lng: -157.8414 },
    rating: 4.6,
    priceRange: "$$$",
    phone: "(808) 247-6671",
    hours: "5:30 PM - 8:30 PM",
    address: "46-336 Haiku Rd, Kaneohe, HI 96744",
    description: "Romantic restaurant set in a lush tropical garden. Specializes in fresh seafood with stunning mountain views.",
    highlights: ["Garden Setting", "Mountain Views", "Romantic Dining"],
    website: "https://haleiwajoes.com/haiku-gardens/",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    distanceFromDukes: "13 miles",
    walkingTime: "N/A",
    driveTime: "30 minutes",
    specialties: ["Macadamia Crusted Fish", "Prime Rib", "Tropical Setting"],
    parking: "Free parking lot"
  },
  {
    id: 69,
    name: "Kō'olau Distillery",
    category: "Bar & Grill",
    cuisine: "American",
    coordinates: { lat: 21.4145, lng: -157.7992 },
    rating: 4.4,
    priceRange: "$$",
    phone: "(808) 238-0786",
    hours: "11:00 AM - 9:00 PM (Tue-Sun)",
    address: "47-653 Kamehameha Hwy, Kaneohe, HI 96744",
    description: "Hawaii's first craft distillery producing premium spirits. Tasting room and restaurant with locally-sourced menu.",
    highlights: ["Craft Distillery", "Local Spirits", "Farm-to-Table"],
    website: "https://koolaudistillery.com/",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop",
    distanceFromDukes: "12 miles",
    walkingTime: "N/A",
    driveTime: "28 minutes",
    specialties: ["Hawaiian Rum", "Craft Cocktails", "Tasting Flights"],
    parking: "Free parking"
  },
  {
    id: 70,
    name: "He'eia Pier General Store & Deli",
    category: "Cafe",
    cuisine: "American",
    coordinates: { lat: 21.4342, lng: -157.8149 },
    rating: 4.3,
    priceRange: "$",
    phone: "(808) 235-2192",
    hours: "7:00 AM - 6:00 PM",
    address: "46-499 Kamehameha Hwy, Kaneohe, HI 96744",
    description: "Waterfront cafe and general store with views of Kaneohe Bay. Great for breakfast and lunch before kayaking.",
    highlights: ["Waterfront", "Kaneohe Bay Views", "Kayak Rental"],
    website: "https://www.facebook.com/heeiapier/",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    distanceFromDukes: "13.5 miles",
    walkingTime: "N/A",
    driveTime: "32 minutes",
    specialties: ["Breakfast Burritos", "Sandwiches", "Local Coffee"],
    parking: "Free parking"
  },
  
  // PEARL CITY & AIEA
  {
    id: 71,
    name: "Chun Wah Kam Noodle Factory - Aiea",
    category: "Noodle House",
    cuisine: "Chinese-Hawaiian",
    coordinates: { lat: 21.3853, lng: -157.9300 },
    rating: 4.4,
    priceRange: "$$",
    phone: "(808) 488-0808",
    hours: "8:00 AM - 9:00 PM",
    address: "98-150 Kaonohi St, Aiea, HI 96701",
    description: "Local favorite for authentic Chinese-Hawaiian noodle dishes. Family-run restaurant known for handmade noodles and generous portions.",
    highlights: ["Handmade Noodles", "Family-Run", "Local Favorite"],
    website: "https://www.chunwahkam.com/",
    image: "/assets/chun-wah-kam-noodles-aiea.jpg",
    distanceFromDukes: "10 miles",
    walkingTime: "N/A",
    driveTime: "20 minutes",
    specialties: ["Wonton Mein", "Roast Duck", "Char Siu"],
    parking: "Free parking lot"
  },
  {
    id: 72,
    name: "Chun Wah Kam Noodle Factory - Ala Moana",
    category: "Noodle House",
    cuisine: "Chinese-Hawaiian",
    coordinates: { lat: 21.2912, lng: -157.8428 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 591-8088",
    hours: "8:00 AM - 9:00 PM",
    address: "1450 Ala Moana Blvd, Honolulu, HI 96814",
    description: "Ala Moana location of the popular noodle house. Same great handmade noodles and Chinese-Hawaiian favorites.",
    highlights: ["Handmade Noodles", "Ala Moana Location", "Quick Service"],
    website: "https://www.chunwahkam.com/",
    image: "/assets/chun-wah-kam-noodles-ala-moana.jpg",
    distanceFromDukes: "1.2 miles",
    walkingTime: "24 minutes",
    driveTime: "8 minutes",
    specialties: ["Wonton Mein", "BBQ Pork", "Saimin"],
    parking: "Mall parking"
  },
  {
    id: 73,
    name: "Chun Wah Kam Noodle Factory - Kapolei",
    category: "Noodle House",
    cuisine: "Chinese-Hawaiian",
    coordinates: { lat: 21.3360, lng: -158.0589 },
    rating: 4.2,
    priceRange: "$$",
    phone: "(808) 674-8088",
    hours: "8:00 AM - 9:00 PM",
    address: "590 Farrington Hwy, Kapolei, HI 96707",
    description: "Kapolei branch serving the same beloved noodle dishes. Perfect for West Oahu residents and visitors.",
    highlights: ["West Oahu Location", "Handmade Noodles", "Family Friendly"],
    website: "https://www.chunwahkam.com/",
    image: "/assets/chun-wah-kam-noodles-kapolei.jpg",
    distanceFromDukes: "19 miles",
    walkingTime: "N/A",
    driveTime: "35 minutes",
    specialties: ["Wonton Mein", "Duck Noodle Soup", "Manapua"],
    parking: "Free parking"
  },
  {
    id: 74,
    name: "Fooki",
    category: "Taiwanese",
    cuisine: "Taiwanese",
    coordinates: { lat: 21.3856, lng: -157.9302 },
    rating: 4.6,
    priceRange: "$$",
    phone: "(808) 888-3665",
    hours: "11:00 AM - 9:00 PM",
    address: "98-199 Kamehameha Hwy, Aiea, HI 96701",
    description: "Popular Taiwanese restaurant known for their Boom Boom Chicken and authentic Taiwanese flavors.",
    highlights: ["Boom Boom Chicken", "Taiwanese Authentic", "Instagram Worthy"],
    website: "https://www.instagram.com/fooki.hawaii/",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop",
    distanceFromDukes: "10 miles",
    walkingTime: "N/A",
    driveTime: "20 minutes",
    specialties: ["Boom Boom Chicken", "Beef Noodle Soup", "Scallion Pancake"],
    parking: "Shopping center parking"
  },
  {
    id: 75,
    name: "Gyotaku Japanese Restaurant - Pearl City",
    category: "Japanese",
    cuisine: "Japanese",
    coordinates: { lat: 21.3972, lng: -157.9541 },
    rating: 4.4,
    priceRange: "$$",
    phone: "(808) 456-1182",
    hours: "11:00 AM - 2:00 PM, 5:00 PM - 9:00 PM",
    address: "1303 Kuala St, Pearl City, HI 96782",
    description: "Local Japanese restaurant known for fresh sashimi and innovative fusion dishes. A Pearl City favorite since 1981.",
    highlights: ["Since 1981", "Fresh Sashimi", "Local Favorite"],
    website: "https://www.gyotaku.com/",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    distanceFromDukes: "11 miles",
    walkingTime: "N/A",
    driveTime: "22 minutes",
    specialties: ["Volcano Roll", "Garlic Ahi", "Butterfish Collar"],
    parking: "Free parking lot"
  },
  
  // HAWAII KAI
  {
    id: 76,
    name: "Roy's Hawaii Kai",
    category: "Hawaiian Fusion",
    cuisine: "Hawaiian Fusion",
    coordinates: { lat: 21.2816, lng: -157.7082 },
    rating: 4.6,
    priceRange: "$$$$",
    phone: "(808) 396-7697",
    hours: "5:00 PM - 9:00 PM",
    address: "6600 Kalanianaole Hwy, Honolulu, HI 96825",
    description: "The original Roy's restaurant where Hawaiian Fusion cuisine was born. Chef Roy Yamaguchi's flagship location since 1988.",
    highlights: ["Original Location", "Hawaiian Fusion Pioneer", "Celebrity Chef"],
    website: "https://www.royyamaguchi.com/roys-hawaiikai",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    distanceFromDukes: "8 miles",
    walkingTime: "N/A",
    driveTime: "18 minutes",
    specialties: ["Misoyaki Butterfish", "Melting Hot Chocolate Souffle", "Hawaiian Fusion"],
    parking: "Free parking lot"
  },
  {
    id: 77,
    name: "Kona Brewing Company - Hawaii Kai",
    category: "Brewpub",
    cuisine: "American",
    coordinates: { lat: 21.2837, lng: -157.7104 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 394-5662",
    hours: "11:00 AM - 10:00 PM",
    address: "7192 Kalanianaole Hwy, Honolulu, HI 96825",
    description: "Popular brewpub serving craft beers and pub fare. Great spot for beer lovers with large outdoor seating.",
    highlights: ["Craft Beer", "Outdoor Seating", "Pub Favorites"],
    website: "https://konabrewingco.com/",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
    distanceFromDukes: "8.2 miles",
    walkingTime: "N/A",
    driveTime: "19 minutes",
    specialties: ["Big Wave Golden Ale", "Pizzas", "Fish Tacos"],
    parking: "Free parking"
  },
  {
    id: 78,
    name: "Koko Head Cafe",
    category: "Brunch",
    cuisine: "American",
    coordinates: { lat: 21.2835, lng: -157.7095 },
    rating: 4.5,
    priceRange: "$$",
    phone: "(808) 394-7743",
    hours: "7:00 AM - 2:00 PM",
    address: "1120 12th Ave, Honolulu, HI 96816",
    description: "Island-style brunch with creative dishes and local ingredients. Famous for their cornflake French toast.",
    highlights: ["Island Brunch", "Creative Dishes", "Local Ingredients"],
    website: "https://kokoheadcafe.com/",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&h=400&fit=crop",
    distanceFromDukes: "4 miles",
    walkingTime: "N/A",
    driveTime: "12 minutes",
    specialties: ["Cornflake French Toast", "Loco Moco", "Fried Rice"],
    parking: "Limited street parking"
  },
  
  // HONOLULU LOCAL LEGENDS
  {
    id: 79,
    name: "Helena's Hawaiian Food",
    category: "Hawaiian",
    cuisine: "Hawaiian",
    coordinates: { lat: 21.3178, lng: -157.8664 },
    rating: 4.6,
    priceRange: "$$",
    phone: "(808) 845-8044",
    hours: "10:00 AM - 7:30 PM (Tue-Fri)",
    address: "1240 N School St, Honolulu, HI 96817",
    description: "James Beard Award winner serving authentic Hawaiian food since 1946. The pipikaula short ribs are legendary.",
    highlights: ["James Beard Award", "Since 1946", "Hawaiian Authentic"],
    website: "https://helenashawaiianfood.com/",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    distanceFromDukes: "4.5 miles",
    walkingTime: "N/A",
    driveTime: "15 minutes",
    specialties: ["Pipikaula Short Ribs", "Laulau", "Squid Luau"],
    parking: "Street parking"
  },
  {
    id: 80,
    name: "Ono Hawaiian Foods",
    category: "Hawaiian",
    cuisine: "Hawaiian",
    coordinates: { lat: 21.3156, lng: -157.8489 },
    rating: 4.5,
    priceRange: "$$",
    phone: "(808) 737-2275",
    hours: "11:00 AM - 7:30 PM (Mon-Sat)",
    address: "726 Kapahulu Ave, Honolulu, HI 96816",
    description: "Family-run Hawaiian food restaurant serving traditional dishes since 1952. Known for their kalua pig and laulau.",
    highlights: ["Since 1952", "Family-Run", "Traditional Hawaiian"],
    website: "https://www.onohawaiianfoods.com/",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    distanceFromDukes: "1 mile",
    walkingTime: "20 minutes",
    driveTime: "5 minutes",
    specialties: ["Kalua Pig", "Laulau", "Poi"],
    parking: "Limited parking"
  },
  {
    id: 81,
    name: "Leonard's Bakery",
    category: "Bakery",
    cuisine: "Portuguese",
    coordinates: { lat: 21.2775, lng: -157.8153 },
    rating: 4.7,
    priceRange: "$",
    phone: "(808) 737-5591",
    hours: "5:30 AM - 7:00 PM",
    address: "933 Kapahulu Ave, Honolulu, HI 96816",
    description: "Iconic bakery famous for malasadas (Portuguese donuts) since 1952. The pink building is an Oahu landmark.",
    highlights: ["Famous Malasadas", "Since 1952", "Oahu Icon"],
    website: "https://leonardshawaii.com/",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&h=400&fit=crop",
    distanceFromDukes: "0.8 miles",
    walkingTime: "16 minutes",
    driveTime: "4 minutes",
    specialties: ["Malasadas", "Haupia Cream", "Custard Filling"],
    parking: "Small parking lot"
  },
  {
    id: 82,
    name: "Rainbow Drive-In",
    category: "Plate Lunch",
    cuisine: "Hawaiian",
    coordinates: { lat: 21.2801, lng: -157.8182 },
    rating: 4.4,
    priceRange: "$",
    phone: "(808) 737-0177",
    hours: "7:00 AM - 9:00 PM",
    address: "3308 Kanaina Ave, Honolulu, HI 96815",
    description: "Historic drive-in serving classic Hawaiian plate lunches since 1961. President Obama's favorite spot!",
    highlights: ["Since 1961", "Obama's Favorite", "Classic Plate Lunch"],
    website: "https://www.rainbowdrivein.com/",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    distanceFromDukes: "0.5 miles",
    walkingTime: "10 minutes",
    driveTime: "3 minutes",
    specialties: ["Loco Moco", "Mixed Plate", "Chili"],
    parking: "Small lot"
  },
  {
    id: 83,
    name: "Zippy's - Multiple Locations",
    category: "Local Chain",
    cuisine: "Local Favorites",
    coordinates: { lat: 21.2912, lng: -157.8428 },
    rating: 4.2,
    priceRange: "$",
    phone: "(808) 973-0880",
    hours: "24 hours (varies by location)",
    address: "Multiple Locations Across Oahu",
    description: "Iconic local chain serving everything from saimin to chili to plate lunches. Over 20 locations across Oahu.",
    highlights: ["Local Chain", "24 Hour (select locations)", "Hawaiian Comfort Food"],
    website: "https://www.zippys.com/",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop",
    distanceFromDukes: "Varies",
    walkingTime: "Varies",
    driveTime: "Varies",
    specialties: ["Zip Pac", "Chili", "Saimin"],
    parking: "Free parking at all locations"
  },
  {
    id: 84,
    name: "The Pig and the Lady",
    category: "Vietnamese Fusion",
    cuisine: "Vietnamese",
    coordinates: { lat: 21.3089, lng: -157.8612 },
    rating: 4.7,
    priceRange: "$$$",
    phone: "(808) 585-8255",
    hours: "10:00 AM - 9:00 PM",
    address: "83 N King St, Honolulu, HI 96817",
    description: "Award-winning Vietnamese fusion restaurant in Chinatown. Creative dishes that honor traditional Vietnamese cuisine.",
    highlights: ["Award-Winning", "Vietnamese Fusion", "Chinatown"],
    website: "https://www.thepigandthelady.com/",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    distanceFromDukes: "4 miles",
    walkingTime: "N/A",
    driveTime: "12 minutes",
    specialties: ["Pho French Dip", "Banh Mi", "Spring Rolls"],
    parking: "Street parking or nearby lots"
  },
  {
    id: 85,
    name: "Liliha Bakery",
    category: "Bakery",
    cuisine: "Local",
    coordinates: { lat: 21.3234, lng: -157.8542 },
    rating: 4.5,
    priceRange: "$",
    phone: "(808) 531-1651",
    hours: "24 hours (main location)",
    address: "515 N Kuakini St, Honolulu, HI 96817",
    description: "Historic 24-hour bakery and diner famous for Coco Puffs. A local institution since 1950.",
    highlights: ["Famous Coco Puffs", "24 Hours", "Since 1950"],
    website: "https://lilihabakery.com/",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop",
    distanceFromDukes: "3.5 miles",
    walkingTime: "N/A",
    driveTime: "10 minutes",
    specialties: ["Coco Puffs", "Poi Donuts", "Breakfast"],
    parking: "Limited parking lot"
  },

  // Indian Restaurants
  {
    id: 86,
    name: "Cafe Maharani",
    category: "Indian",
    cuisine: "Indian",
    coordinates: { lat: 21.2898, lng: -157.8390 },
    rating: 3.8,
    priceRange: "$$",
    phone: "(808) 951-7447",
    hours: "5:00 PM - 9:00 PM",
    address: "2509 S King St, Honolulu, HI 96826",
    description: "Established in 2000, Cafe Maharani serves authentic Indian cuisine made with fresh ingredients using traditional mother's recipes. Extensive vegetarian options available.",
    highlights: ["Authentic Indian", "Vegetarian Friendly", "Since 2000", "Traditional Recipes"],
    website: "https://www.cafemaharani.com/",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    distanceFromDukes: "1.2 miles",
    walkingTime: "24 minutes",
    driveTime: "6 minutes",
    specialties: ["Chicken Tikka Masala", "Lamb Vindaloo", "Garlic Naan"],
    parking: "Street parking available"
  },
  {
    id: 87,
    name: "Kamana Kitchen",
    category: "Indian",
    cuisine: "Indian",
    coordinates: { lat: 21.3090, lng: -157.8589 },
    rating: 4.1,
    priceRange: "$$",
    phone: "(808) 537-5309",
    hours: "10:00 AM - 9:00 PM (Closed Sunday)",
    address: "1104 Bishop St, Honolulu, HI 96813",
    description: "Downtown Honolulu's favorite Indian restaurant serving flavorful curries, tandoori dishes, and fresh naan. Beer and wine available.",
    highlights: ["Downtown Location", "Beer & Wine", "Lunch Specials", "Fresh Naan"],
    website: "https://www.newkamanakitchen.com/",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
    distanceFromDukes: "2.8 miles",
    walkingTime: "56 minutes",
    driveTime: "10 minutes",
    specialties: ["Butter Chicken", "Tandoori Chicken", "Biryani"],
    parking: "Nearby parking garages"
  },
  {
    id: 88,
    name: "Tadka Indian Cuisine",
    category: "Indian",
    cuisine: "Indian",
    coordinates: { lat: 21.2929, lng: -157.8327 },
    rating: 4.3,
    priceRange: "$$",
    phone: "(808) 941-0414",
    hours: "11:00 AM - 9:30 PM",
    address: "1960 Kapiolani Blvd STE 109, Honolulu, HI 96826",
    description: "Popular Indian restaurant featuring North and South Indian cuisine with excellent vegetarian and vegan options. Known for authentic flavors and friendly service.",
    highlights: ["Vegetarian Friendly", "Vegan Options", "North & South Indian", "Authentic Flavors"],
    website: "https://www.google.com/maps/search/Tadka+Indian+Cuisine+Honolulu/",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&h=400&fit=crop",
    distanceFromDukes: "1.4 miles",
    walkingTime: "28 minutes",
    driveTime: "7 minutes",
    specialties: ["Paneer Tikka", "Masala Dosa", "Chicken Curry"],
    parking: "Free parking lot"
  },
  {
    id: 89,
    name: "Spice Up House of Indian Cuisine",
    category: "Indian",
    cuisine: "Indian",
    coordinates: { lat: 21.2900, lng: -157.8460 },
    rating: 4.2,
    priceRange: "$$",
    phone: "(808) 784-0338",
    hours: "11:00 AM - 9:00 PM",
    address: "1289 S King St Unit 101, Honolulu, HI 96814",
    description: "Cozy Indian restaurant offering Himalayan and Nepalese specialties alongside classic Indian favorites. Great for vegetarians and vegans.",
    highlights: ["Himalayan Cuisine", "Nepalese Dishes", "Vegan Friendly", "Cozy Atmosphere"],
    website: "https://www.instagram.com/spiceupindian/",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop",
    distanceFromDukes: "1.4 miles",
    walkingTime: "28 minutes",
    driveTime: "7 minutes",
    specialties: ["Momo Dumplings", "Dal Makhani", "Tandoori Platter"],
    parking: "Street parking"
  }
];

// Helper function to get restaurants by category
export const getRestaurantsByCategory = (category: string): Restaurant[] => {
  if (category === "All") return restaurants;
  return restaurants.filter(restaurant => restaurant.category === category);
};

// Helper function to get restaurants by distance
export const getRestaurantsByDistance = (maxDistance: number): Restaurant[] => {
  return restaurants.filter(restaurant => {
    // Handle various distance formats
    const distanceText = restaurant.walkingTime.toLowerCase();
    if (distanceText.includes('same building') || distanceText.includes('0 min')) return true;
    
    const walkingMinutes = parseInt(distanceText.split(' ')[0]) || 0;
    return walkingMinutes <= maxDistance;
  });
};

export const getRestaurantsByPriceRange = (priceRange: string): Restaurant[] => {
  if (priceRange === "All") return restaurants;
  return restaurants.filter(restaurant => restaurant.priceRange === priceRange);
};

export const getRestaurantsByRating = (minRating: number): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.rating >= minRating);
};

// Enhanced search function for restaurants, food trucks, and all establishments
export const searchRestaurants = (query: string): Restaurant[] => {
  if (!query) return restaurants;
  
  const lowerQuery = query.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(lowerQuery) ||
    restaurant.cuisine.toLowerCase().includes(lowerQuery) ||
    restaurant.category.toLowerCase().includes(lowerQuery) ||
    restaurant.description.toLowerCase().includes(lowerQuery) ||
    restaurant.specialties.some(specialty => specialty.toLowerCase().includes(lowerQuery)) ||
    restaurant.highlights.some(highlight => highlight.toLowerCase().includes(lowerQuery)) ||
    restaurant.address.toLowerCase().includes(lowerQuery) ||
    (restaurant.hotel && restaurant.hotel.toLowerCase().includes(lowerQuery))
  );
};

export const getAdvancedSearchResults = (filters: {
  query?: string;
  category?: string;
  priceRange?: string;
  minRating?: number;
  maxDistance?: number;
  cuisine?: string;
}): Restaurant[] => {
  let results = restaurants;

  if (filters.query) {
    results = searchRestaurants(filters.query);
  }

  if (filters.category && filters.category !== "All") {
    results = results.filter(r => r.category === filters.category);
  }

  if (filters.priceRange && filters.priceRange !== "All") {
    results = results.filter(r => r.priceRange === filters.priceRange);
  }

  if (filters.minRating) {
    const minRating = filters.minRating;
    results = results.filter(r => r.rating >= minRating);
  }

  if (filters.maxDistance) {
    const maxDistance = filters.maxDistance;
    results = getRestaurantsByDistance(maxDistance).filter(r =>
      results.some(result => result.id === r.id)
    );
  }

  if (filters.cuisine && filters.cuisine !== "All") {
    results = results.filter(r => r.cuisine === filters.cuisine);
  }

  return results;
};

// Memoized static data - computed once and cached
export const categories = [...new Set(restaurants.map(r => r.category))];

// All unique cuisines in the database
export const cuisines = [...new Set(restaurants.map(r => r.cuisine))];

// All unique price ranges sorted
export const priceRanges = [...new Set(restaurants.map(r => r.priceRange))].sort();