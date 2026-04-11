'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExternalLink from "@/components/ui/external-link";
import { 
  Clock, 
  DollarSign, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  TrendingUp,
  Heart,
  Award,
  Camera
} from "lucide-react";

const localTips = [
  {
    category: "Insider Secrets",
    icon: Sparkles,
    tips: [
      {
        title: "Happy Hour Gold Mine",
        description: "Many high-end restaurants offer 50% off appetizers and drinks during happy hour (usually 3-6 PM). Perfect for trying expensive places on a budget.",
        locations: [
          { name: "La Mer", website: "https://www.halekulani.com/dining/la-mer/" },
          { name: "House Without a Key", website: "https://www.halekulani.com/dining/house-without-a-key/" },
          { name: "Azure Restaurant", website: "https://www.azurewaikiki.com/" }
        ]
      },
      {
        title: "Local Plate Lunch Spots",
        description: "Skip tourist traps and eat where locals do. Look for places with long lines of construction workers and office staff - that's your sign.",
        locations: [
          { name: "Helena's Hawaiian Food", website: "https://www.helenashawaiianfood.com/index.html" },
          { name: "Rainbow Drive-In", website: "https://rainbowdrivein.com/" },
          { name: "L&L Hawaiian Barbecue", website: "https://www.hawaiianbarbecue.com/" }
        ]
      },
      {
        title: "Sunset Timing is Everything",
        description: "Book ocean-view restaurants 30 minutes before sunset. You'll catch the golden hour and avoid the post-sunset dinner rush.",
        timeframe: "5:30-6:30 PM (varies by season)"
      }
    ]
  },
  {
    category: "Best Times",
    icon: Clock,
    tips: [
      {
        title: "Avoid Tourist Rush Hours",
        description: "Eat lunch before noon or after 2 PM, dinner before 6 PM or after 8 PM to avoid crowds and sometimes get better service.",
        timeframe: "11 AM-12 PM, 2-6 PM, 8-9 PM"
      },
      {
        title: "Weekday vs Weekend",
        description: "Many local favorites are closed Sundays/Mondays. High-end restaurants are less crowded Tuesday-Thursday.",
        bestDays: ["Tuesday", "Wednesday", "Thursday"]
      },
      {
        title: "Seasonal Considerations",
        description: "December-March is peak season with higher prices and crowds. April-May and September-November offer better deals.",
        peakSeason: "December - March",
        lowSeason: "April - May, September - November"
      }
    ]
  },
  {
    category: "Budget Hacks",
    icon: DollarSign,
    tips: [
      {
        title: "Lunch vs Dinner Pricing",
        description: "Many upscale restaurants offer the same quality at lunch for 30-40% less. Perfect for experiencing fine dining on a budget.",
        savings: "30-40% less than dinner"
      },
      {
        title: "Hotel Restaurant Deals",
        description: "Hotel guests often get 20% off at hotel restaurants. Some hotels extend this to local residents with ID.",
        discount: "Up to 20% off"
      },
      {
        title: "Food Truck Excellence",
        description: "Waikiki's food trucks serve restaurant-quality food at fraction of the price. Check out Kamehameha Schools parking lot.",
        averageCost: "$8-15 per meal"
      }
    ]
  }
];

const bestOfLists = [
  {
    title: "Most Instagram-Worthy",
    icon: Camera,
    restaurants: [
      { name: "House Without a Key", feature: "Sunset hula dancing", website: "https://www.halekulani.com/dining/house-without-a-key" },
      { name: "La Mer", feature: "Ocean-view fine dining", website: "https://www.halekulani.com/dining/la-mer" },
      { name: "Duke's Waikiki", feature: "Beachfront atmosphere", website: "https://www.dukeswaikiki.com" },
      { name: "Monkeypod Kitchen", feature: "Colorful acai bowls", website: "https://monkeypodkitchen.com/" }
    ]
  },
  {
    title: "Local Favorites",
    icon: Heart,
    restaurants: [
      { name: "Ono Seafood", feature: "Best poke in Waikiki", website: "https://onoseafood.shop/" },
      { name: "Leonard's Bakery", feature: "Original malasadas", website: "https://www.leonardshawaii.com/" },
      { name: "Rainbow Drive-In", feature: "Plate lunch institution", website: "https://rainbowdrivein.com/" },
      { name: "Musubi Cafe Iyasume", feature: "Spam musubi perfection", website: "https://musubicafe.com/" }
    ]
  },
  {
    title: "Local Hawaiian",
    icon: Heart,
    restaurants: [
      { name: "L&L Hawaiian Barbecue", feature: "Authentic plate lunch", website: "https://www.hawaiianbarbecue.com/" },
      { name: "Rainbow Drive-In", feature: "Local institution since 1961", website: "https://rainbowdrivein.com/" },
      { name: "Helena's Hawaiian Food", feature: "Traditional Hawaiian cuisine", website: "https://www.helenashawaiianfood.com/" }
    ]
  },
  {
    title: "Award Winners",
    icon: Award,
    restaurants: [
      { name: "La Mer", feature: "AAA Five Diamond", website: "https://www.halekulani.com/dining/la-mer" },
      { name: "Orchids", feature: "OpenTable Diners' Choice", website: "https://www.halekulani.com/dining/orchids" },
      { name: "Azure Restaurant", feature: "Wine Spectator Award", website: "https://www.azurewaikiki.com/" },
      { name: "Chef Mavro", feature: "James Beard Recognition", website: "https://chefmavro.com/" },
      { name: "Doraku Sushi", feature: "Fine Japanese Fusion", website: "https://dorakusushi.com/waikiki/" }
    ]
  },
  {
    title: "Korean Fried Chicken",
    icon: Heart,
    restaurants: [
      { name: "Itchy Butt", feature: "Local favorite Korean fried chicken", website: "https://www.yelp.com/biz/itchy-butt-honolulu-2" },
      { name: "bb.q Chicken Hawaii", feature: "Premium Korean fried chicken", website: "https://bbdotqchickenhawaii.com/" },
      { name: "Soul Chicken Hawaii", feature: "Crafted Korean fried chicken", website: "https://soulchickenhawaii.com/" },
      { name: "Good Chicken", feature: "Asian fusion fried chicken", website: "https://stixasia.com/restaurants/good-chicken/" }
    ]
  },
  {
    title: "Trending Now",
    icon: TrendingUp,
    restaurants: [
      { name: "Livestock Tavern", feature: "Farm-to-table movement", website: "https://livestocktavern.com/" },
      { name: "Goofy Cafe", feature: "Viral pancake stacks", website: "https://goofycafe.com/" },
      { name: "Koko Head Cafe", feature: "Innovative brunch", website: "https://kokoheadcafe.com/" },
      { name: "Mud Hen Water", feature: "Modern Filipino fusion", website: "https://mudhenwater.com/" }
    ]
  },
  {
    title: "Premium Sushi & Japanese",
    icon: Heart,
    restaurants: [
      { name: "Yanagi Sushi", feature: "Traditional omakase experience", website: "https://www.yanagisushi-hawaii.com/" },
      { name: "Sushi Ginza Onodera", feature: "Michelin-starred Edomae sushi", website: "https://www.sushionodera.com/sushi-ginza-onodera-hawaii" },
      { name: "Gyotaku Japanese Restaurant", feature: "Local favorite authentic Japanese", website: "https://www.gyotakuhawaii.com/" },
      { name: "Kanoya Sushi", feature: "Fresh fish daily selection", website: "https://kanoyasushi.com/" }
    ]
  },
  {
    title: "Fresh Seafood",
    icon: Heart,
    restaurants: [
      { name: "Nico's Pier 38", feature: "Waterfront dining & fish market", website: "https://nicospier38.com/" },
      { name: "Fresh Catch", feature: "Daily boat-to-table seafood", website: "https://freshcatchhawaii.com/" },
      { name: "Sam Choy's Kai Lanai", feature: "Local-style seafood", website: "https://samchoyskailanai.com/" },
      { name: "53 By The Sea", feature: "Upscale oceanfront dining", website: "https://53bythesea.com/" }
    ]
  },
  {
    title: "Italian Excellence",
    icon: Heart,
    restaurants: [
      { name: "Assaggio Bistro", feature: "Authentic Italian in Kahala", website: "https://www.opentable.com/r/assaggio-bistro-kahala-honolulu-2" },
      { name: "Arancino", feature: "Northern Italian specialties", website: "https://arancinorestaurant.com/" },
      { name: "Vino Italian Tapas & Wine Bar", feature: "Small plates & wine pairings", website: "https://vinoitaliantapas.com/" },
      { name: "Buca di Beppo", feature: "Family-style Italian dining", website: "https://bucadibeppo.com/" }
    ]
  },
  {
    title: "Contemporary Fine Dining",
    icon: Award,
    restaurants: [
      { name: "MW Restaurant", feature: "Modern American by Michelle Karr-Ueoka", website: "https://mwrestaurant.com/" },
      { name: "Senia", feature: "Contemporary island cuisine", website: "https://seniarestaurant.com/" },
      { name: "Town Restaurant", feature: "Italian-inspired neighborhood gem", website: "https://townkaimuki.com/" },
      { name: "Vintage Cave Honolulu", feature: "Ultra-luxury dining experience", website: "https://vintagecave.com/" }
    ]
  },
  {
    title: "Hawaiian Regional Cuisine",
    icon: Award,
    restaurants: [
      { name: "Roy's Hawaii Kai", feature: "Original location of Hawaiian fusion", website: "https://www.royyamaguchi.com/roys-hawaiikai" },
      { name: "Alan Wong's Restaurant", feature: "Pioneer of modern Hawaiian cuisine", website: "https://www.alanwongs.com/" },
      { name: "Chef Chai", feature: "Pacific Rim fusion expertise", website: "https://chefchai.com/" },
      { name: "Indigo", feature: "Eurasian cuisine in historic Chinatown", website: "https://indigohawaii.com/" }
    ]
  },
  {
    title: "Vietnamese & Thai",
    icon: Heart,
    restaurants: [
      { name: "The Pig and the Lady", feature: "Vietnamese fusion by Andrew Le", website: "https://thepigandthelady.com/" },
      { name: "Pig & the Lady Pho Shop", feature: "Casual Vietnamese noodles", website: "https://thepigandthelady.com/" },
      { name: "Royal Thai Cuisine", feature: "Authentic Thai flavors", website: "https://royalthaicuisine.com/" },
      { name: "Noi Thai Cuisine", feature: "Family-owned Thai restaurant", website: "https://www.noithaicuisine.com/" }
    ]
  },
  {
    title: "Steakhouses",
    icon: Award,
    restaurants: [
      { name: "Hy's Steak House", feature: "Classic steakhouse since 1976", website: "https://hyshawaii.com/" },
      { name: "Ruth's Chris Steak House", feature: "Premium cuts & elegant dining", website: "https://www.ruthschris.com/" },
      { name: "Morton's The Steakhouse", feature: "Chicago-style steakhouse", website: "https://www.mortons.com/" },
      { name: "Strip House", feature: "Modern steakhouse experience", website: "https://thestriphousehawaii.com/" }
    ]
  },
  {
    title: "Breakfast & Brunch",
    icon: Heart,
    restaurants: [
      { name: "Koko Head Cafe", feature: "Island-style brunch innovation", website: "https://kokoheadcafe.com/" },
      { name: "Morning Glass Coffee", feature: "Artisan coffee & pastries", website: "https://morningglasscoffee.com/" },
      { name: "Bogart's Cafe", feature: "Local breakfast institution", website: "https://bogartscafe.com/" },
      { name: "Cinnamon's Restaurant", feature: "Famous for guava chiffon pancakes", website: "https://cinnamonsrestaurant.com/" }
    ]
  }
];

const neighborhoods = [
  // WAIKIKI AREA
  {
    name: "Kalakaua Avenue",
    description: "Main tourist strip with high-end restaurants and shopping",
    vibe: "Upscale, busy, tourist-friendly",
    bestFor: "Fine dining, people watching, convenience",
    priceRange: "$$$-$$$$",
    mustTry: [
      { name: "La Mer", website: "https://www.halekulani.com/dining/la-mer" },
      { name: "Duke's Waikiki", website: "https://www.dukeswaikiki.com" },
      { name: "House Without a Key", website: "https://www.halekulani.com/dining/house-without-a-key" },
      { name: "Doraku Sushi", website: "https://dorakusushi.com/waikiki/" }
    ]
  },
  {
    name: "Kuhio Avenue",
    description: "More affordable options with local flavor",
    vibe: "Casual, diverse, budget-friendly",
    bestFor: "Authentic local food, value dining",
    priceRange: "$-$$",
    mustTry: [
      { name: "Ono Seafood", website: "https://onoseafood.shop/" },
      { name: "Rainbow Drive-In", website: "https://rainbowdrivein.com/" },
      { name: "Leonard's Bakery", website: "https://www.leonardshawaii.com/" }
    ]
  },
  {
    name: "Kapahulu Avenue",
    description: "Local dining strip favored by residents",
    vibe: "Authentic, relaxed, local",
    bestFor: "Local culture, diverse cuisines",
    priceRange: "$-$$$",
    mustTry: [
      { name: "Helena's Hawaiian Food", website: "https://www.helenashawaiianfood.com/" },
      { name: "Spalding House Cafe", website: "https://spaldinghousecafe.com/" },
      { name: "Side Street Inn", website: "https://sidestreetinn.com/" }
    ]
  },
  
  // GREATER HONOLULU
  {
    name: "Chinatown",
    description: "Historic district with authentic Asian eateries and trendy bars",
    vibe: "Eclectic, artistic, multicultural",
    bestFor: "Vietnamese, Chinese, craft cocktails, art galleries",
    priceRange: "$-$$",
    mustTry: [
      { name: "The Pig and the Lady", website: "https://thepigandthelady.com/" },
      { name: "Livestock Tavern", website: "https://livestocktavern.com/" },
      { name: "Lucky Belly", website: "https://luckybelly.com/" }
    ]
  },
  {
    name: "Kakaako",
    description: "Urban neighborhood with modern eateries and breweries",
    vibe: "Hip, contemporary, creative",
    bestFor: "Craft beer, innovative dining, food halls",
    priceRange: "$$-$$$",
    mustTry: [
      { name: "Piggy Smalls", website: "https://www.piggysmallshawaii.com/" },
      { name: "Bevy", website: "https://www.bevyhawaii.com/" },
      { name: "Honolulu Beerworks", website: "https://honolulubeerworks.com/" }
    ]
  },
  {
    name: "Ala Moana",
    description: "Shopping district with diverse dining options",
    vibe: "Convenient, varied, family-friendly",
    bestFor: "Shopping breaks, diverse cuisines, quick meals",
    priceRange: "$-$$$",
    mustTry: [
      { name: "Mariposa", website: "https://neimanmarcus.com/" },
      { name: "Shirokiya Japan Village Walk", website: "https://www.shirokiya.com/" },
      { name: "Chun Wah Kam Noodle Factory", website: "https://www.chun-wah-kam.com/" }
    ]
  },
  {
    name: "Kaimuki",
    description: "Charming neighborhood known for restaurants and local boutiques",
    vibe: "Trendy, neighborhood feel, walkable",
    bestFor: "Date nights, brunch spots, local dining",
    priceRange: "$$-$$$",
    mustTry: [
      { name: "Town Restaurant", website: "https://townkaimuki.com/" },
      { name: "Koko Head Cafe", website: "https://kokoheadcafe.com/" },
      { name: "Mud Hen Water", website: "https://mudhenwater.com/" }
    ]
  },
  {
    name: "Manoa",
    description: "Residential valley with hidden gem restaurants",
    vibe: "Quiet, residential, nature-close",
    bestFor: "Casual dining, coffee shops, rainforest proximity",
    priceRange: "$-$$",
    mustTry: [
      { name: "Manoa Marketplace eateries", website: "https://manoamarketplace.com/" },
      { name: "Andy's Sandwiches & Smoothies", website: "https://www.andyssandwiches.com/" }
    ]
  },
  {
    name: "Moiliili",
    description: "Student-friendly area near University of Hawaii",
    vibe: "Casual, affordable, diverse",
    bestFor: "Budget eats, ethnic food, late-night dining",
    priceRange: "$-$$",
    mustTry: [
      { name: "Sweet Home Cafe", website: "https://www.sweethomecafehawaii.com/" },
      { name: "Imanas Tei", website: "https://imanastei.com/" },
      { name: "Peace Cafe", website: "https://www.peacecafehawaii.com/" }
    ]
  },
  
  // EAST OAHU
  {
    name: "Kahala",
    description: "Upscale residential area with refined dining",
    vibe: "Elegant, quiet, upscale",
    bestFor: "Special occasions, refined dining, resort restaurants",
    priceRange: "$$$-$$$$",
    mustTry: [
      { name: "Hoku's at Kahala Resort", website: "https://www.kahalaresort.com/dining/hokus" },
      { name: "Plumeria Beach House", website: "https://www.kahalaresort.com/dining/plumeria-beach-house" },
      { name: "Assaggio Bistro", website: "https://www.opentable.com/r/assaggio-bistro-kahala-honolulu-2" }
    ]
  },
  {
    name: "Hawaii Kai",
    description: "Suburban marina community with waterfront dining",
    vibe: "Family-friendly, relaxed, waterfront",
    bestFor: "Sunset views, seafood, casual dining",
    priceRange: "$$-$$$",
    mustTry: [
      { name: "Roy's Hawaii Kai", website: "https://www.royyamaguchi.com/roys-hawaiikai" },
      { name: "Kona Brewing Company", website: "https://konabrewingco.com/" },
      { name: "Koko Marina Center eateries", website: "https://kokomarina.com/" }
    ]
  },
  
  // WINDWARD SIDE
  {
    name: "Kailua",
    description: "Beach town with excellent brunch and cafe scene",
    vibe: "Beachy, health-conscious, laid-back",
    bestFor: "Brunch, acai bowls, beach-day fuel",
    priceRange: "$-$$",
    mustTry: [
      { name: "Boots & Kimo's", website: "https://www.bootsandkimos.com/" },
      { name: "Cinnamon's Restaurant", website: "https://cinnamonsrestaurant.com/" },
      { name: "Kalapawai Market", website: "https://kalapawaimarket.com/" }
    ]
  },
  {
    name: "Kaneohe",
    description: "Windward community with local plate lunch spots",
    vibe: "Local, residential, authentic",
    bestFor: "Plate lunch, local Hawaiian food, scenic dining",
    priceRange: "$-$$",
    mustTry: [
      { name: "Haleiwa Joe's Haiku Gardens", website: "https://haleiwajoes.com/" },
      { name: "He'eia Pier General Store & Deli", website: "https://www.heeiapier.com/" },
      { name: "L&L Hawaiian Barbecue", website: "https://www.hawaiianbarbecue.com/" }
    ]
  },
  {
    name: "Waimanalo",
    description: "Small beach town with food trucks and local spots",
    vibe: "Authentic local, rural, friendly",
    bestFor: "Food trucks, beach stops, local culture",
    priceRange: "$",
    mustTry: [
      { name: "Keneke's Grill", website: "https://www.kenekesgrill.com/" },
      { name: "Shrimp Shack", website: "https://www.shrimpshackhawaii.com/" }
    ]
  },
  
  // NORTH SHORE
  {
    name: "Haleiwa",
    description: "Surf town with iconic shrimp trucks and shave ice",
    vibe: "Surf culture, casual, iconic",
    bestFor: "Shrimp plates, shave ice, surf-watching",
    priceRange: "$-$$",
    mustTry: [
      { name: "Giovanni's Shrimp Truck", website: "https://www.giovannisshrimptruck.com/" },
      { name: "Haleiwa Joe's", website: "https://haleiwajoes.com/" },
      { name: "Matsumoto Shave Ice", website: "https://www.matsumotoshaveice.com/" }
    ]
  },
  {
    name: "Turtle Bay",
    description: "North Shore resort area with upscale dining",
    vibe: "Resort, scenic, upscale casual",
    bestFor: "Ocean views, resort dining, special occasions",
    priceRange: "$$-$$$",
    mustTry: [
      { name: "Roy's Beach House", website: "https://www.royyamaguchi.com/" },
      { name: "Ola at Turtle Bay", website: "https://www.turtlebayresort.com/" }
    ]
  },
  {
    name: "Sunset Beach / Pupukea",
    description: "Rural North Shore with food trucks and local spots",
    vibe: "Laid-back, beachy, authentic",
    bestFor: "Beach day meals, casual eats, sunset watching",
    priceRange: "$",
    mustTry: [
      { name: "Shark's Cove Grill", website: "https://www.sharkscovegrill.com/" },
      { name: "Ted's Bakery", website: "https://www.tedsbakery.com/" }
    ]
  },
  
  // CENTRAL OAHU
  {
    name: "Pearl City",
    description: "Central Oahu hub with Asian and local eateries",
    vibe: "Suburban, diverse, family-oriented",
    bestFor: "Asian cuisine, local favorites, value dining",
    priceRange: "$-$$",
    mustTry: [
      { name: "Gyotaku Japanese Restaurant", website: "https://www.gyotakuhawaii.com/" },
      { name: "Chun Wah Kam Noodle Factory", website: "https://www.chun-wah-kam.com/" },
      { name: "Zippy's", website: "https://www.zippys.com/" }
    ]
  },
  {
    name: "Aiea",
    description: "Central location with shopping and diverse restaurants",
    vibe: "Convenient, family-friendly, local",
    bestFor: "Shopping center dining, diverse cuisines",
    priceRange: "$-$$",
    mustTry: [
      { name: "Nico's Pier 38", website: "https://nicospier38.com/" },
      { name: "Chun Wah Kam Noodle Factory", website: "https://www.chun-wah-kam.com/" }
    ]
  },
  {
    name: "Mililani",
    description: "Planned community with family restaurants and chains",
    vibe: "Suburban, family-oriented, convenient",
    bestFor: "Family dining, chain restaurants, shopping center meals",
    priceRange: "$-$$",
    mustTry: [
      { name: "Mililani Shopping Center eateries", website: "https://www.mililanishoppingcenter.com/" }
    ]
  },
  
  // LEEWARD/WEST SIDE
  {
    name: "Kapolei",
    description: "Second city of Oahu with modern shopping and dining",
    vibe: "Modern, suburban, growing",
    bestFor: "New restaurants, shopping center dining, family-friendly",
    priceRange: "$-$$",
    mustTry: [
      { name: "Chun Wah Kam Noodle Factory", website: "https://www.chun-wah-kam.com/" },
      { name: "Monkeypod Kitchen", website: "https://monkeypodkitchen.com/" },
      { name: "Ka Makana Ali'i eateries", website: "https://www.kamakanaalii.com/" }
    ]
  },
  {
    name: "Ewa Beach",
    description: "Growing residential area with local dining options",
    vibe: "Residential, local, family-friendly",
    bestFor: "Local plate lunch, neighborhood spots",
    priceRange: "$-$$",
    mustTry: [
      { name: "L&L Hawaiian Barbecue", website: "https://www.hawaiianbarbecue.com/" },
      { name: "Local food trucks", website: "#" }
    ]
  },
  {
    name: "Waianae",
    description: "West side town with authentic Hawaiian culture and food",
    vibe: "Authentic Hawaiian, local, cultural",
    bestFor: "Hawaiian food, local culture, beach proximity",
    priceRange: "$",
    mustTry: [
      { name: "Hannara Restaurant", website: "https://www.hannararestaurant.com/" },
      { name: "Ohana Hawaiian BBQ", website: "https://www.ohanafoodshawaii.com/" }
    ]
  },
  {
    name: "Ko Olina",
    description: "Resort area with luxury dining and lagoons",
    vibe: "Resort, luxurious, scenic",
    bestFor: "Resort dining, special occasions, lagoon views",
    priceRange: "$$$-$$$$",
    mustTry: [
      { name: "Aulani Disney Resort restaurants", website: "https://www.disneyaulani.com/" },
      { name: "Four Seasons Ko Olina dining", website: "https://www.fourseasons.com/oahu/" }
    ]
  }
];

const LocalInsights = () => {
  return (
    <section id="insights" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Users className="h-4 w-4 mr-2" />
            Local Insider Knowledge
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Eat Like a <span className="gradient-text">Local</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Skip the tourist traps and discover the real Waikiki dining scene with insider tips 
            from locals, food critics, and long-time residents.
          </p>
        </div>
        
        <Tabs defaultValue="insider-tips" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="insider-tips">Insider Tips</TabsTrigger>
            <TabsTrigger value="best-of">Best Of Lists</TabsTrigger>
            <TabsTrigger value="neighborhoods">Neighborhoods</TabsTrigger>
          </TabsList>
          
          {/* Insider Tips Tab */}
          <TabsContent value="insider-tips" className="space-y-8">
            {localTips.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.tips.map((tip, tipIndex) => (
                        <Card key={tipIndex} className="border-2 border-muted">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{tip.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">{tip.description}</p>
                            
                            {'locations' in tip && tip.locations && (
                              <div>
                                <h4 className="font-medium text-sm mb-1">Try at:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {tip.locations.map((location, locIndex) => {
                                    if (typeof location === 'string') {
                                      return (
                                        <Badge key={locIndex} variant="secondary" className="text-xs">
                                          {location}
                                        </Badge>
                                      );
                                     } else {
                                       return (
                                         <ExternalLink
                                           key={locIndex}
                                           href={location.website}
                                           className="hover:opacity-80 transition-opacity"
                                           showIcon={false}
                                         >
                                           <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-primary/20">
                                             {location.name}
                                           </Badge>
                                         </ExternalLink>
                                       );
                                     }
                                  })}
                                </div>
                              </div>
                            )}
                            
                            {'timeframe' in tip && tip.timeframe && (
                              <div className="text-xs text-accent font-medium">
                                ⏰ {tip.timeframe}
                              </div>
                            )}

                            {'bestDays' in tip && tip.bestDays && (
                              <div className="text-xs text-accent font-medium">
                                📅 Best: {(tip.bestDays as string[]).join(", ")}
                              </div>
                            )}

                            {'savings' in tip && tip.savings && (
                              <div className="text-xs text-accent font-medium">
                                💰 Save: {tip.savings as string}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
          
          {/* Best Of Lists Tab */}
          <TabsContent value="best-of" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {bestOfLists.map((list, index) => {
                const Icon = list.icon;
                return (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{list.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {list.restaurants.map((restaurant, restIndex) => (
                          <div key={restIndex} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                            <div>
                              <h4 className="font-medium">{restaurant.name}</h4>
                              <p className="text-sm text-muted-foreground">{restaurant.feature}</p>
                            </div>
                            {restaurant.website ? (
                              <ExternalLink href={restaurant.website}>
                                <Button variant="ghost" size="sm">
                                  View
                                </Button>
                              </ExternalLink>
                            ) : (
                              <Button variant="ghost" size="sm" disabled>
                                View
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
          
          {/* Neighborhoods Tab */}
          <TabsContent value="neighborhoods" className="space-y-6">
            <div className="grid gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          {neighborhood.name}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {neighborhood.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{neighborhood.priceRange}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Vibe</h4>
                        <p className="text-sm text-muted-foreground">{neighborhood.vibe}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Best For</h4>
                        <p className="text-sm text-muted-foreground">{neighborhood.bestFor}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Must Try</h4>
                        <div className="flex flex-wrap gap-1">
                          {neighborhood.mustTry.map((restaurant, restIndex) => (
                            <ExternalLink
                              key={restIndex}
                              href={restaurant.website}
                              className="hover:opacity-80 transition-opacity"
                              showIcon={false}
                            >
                              <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-primary/20">
                                {restaurant.name}
                              </Badge>
                            </ExternalLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LocalInsights;