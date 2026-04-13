import { bookingSearchUrl } from '@/lib/affiliates'

export interface Neighborhood {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  image: string
  imageAlt: string
  areaKey: string
  highlights: string[]
  bestFor: string[]
  bookingUrl: string
  faqs: Array<{ question: string; answer: string }>
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'waikiki',
    name: 'Waikiki',
    tagline: 'The heart of Oahu tourism',
    description: 'Waikiki is where most visitors to Oahu stay — and for good reason. Two miles of beach, world-class restaurants, surf lessons at every corner, and the iconic backdrop of Diamond Head.',
    longDescription: 'Waikiki has been Hawaii\'s premier resort district for over a century. The famous 2-mile stretch of beach offers calm swimming conditions, outrigger canoe rides, and surf lessons from some of the world\'s best teachers. The neighborhood is dense with dining options ranging from casual plate lunch spots to Michelin-caliber tasting menus. Diamond Head looms to the east, beckoning hikers every morning. Despite its touristy reputation, Waikiki has genuine local character — the Sunday farmers market at Kapiolani Park, the Duke Kahanamoku statue at the beach, and the persistent sound of slack-key guitar drifting from hotel bars.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop',
    imageAlt: 'Waikiki Beach with Diamond Head crater in the background, Oahu Hawaii',
    areaKey: 'waikiki',
    highlights: ['2 miles of beach', 'Diamond Head hike', 'World-class dining', 'Surf lessons', 'Nightlife & live music'],
    bestFor: ['First-time visitors', 'Beach lovers', 'Foodies', 'Couples', 'Anyone without a car'],
    bookingUrl: bookingSearchUrl('Waikiki, Honolulu, Hawaii'),
    faqs: [
      { question: 'Is Waikiki worth visiting?', answer: 'Yes — Waikiki delivers on its reputation. The beach is genuinely beautiful, the dining scene is excellent, and the walkability is unmatched in Hawaii. Ignore the "too touristy" complaints; Waikiki has real Hawaiian character beneath the resort veneer.' },
      { question: 'What can you walk to from Waikiki?', answer: 'From central Waikiki you can walk to the beach (obviously), Diamond Head trailhead (2 miles east), the Honolulu Zoo, Kapiolani Park, dozens of restaurants, surf schools, and the Ala Moana Shopping Center (1.5 miles west).' },
      { question: 'Do you need a car in Waikiki?', answer: 'No — Waikiki is one of the few places on Oahu where you can get by without a car. TheBus covers most of the island and rideshare is widely available. You\'ll need a car for North Shore or Kailua day trips.' },
    ]
  },
  {
    slug: 'north-shore',
    name: 'North Shore',
    tagline: 'Surf culture, shrimp trucks & small-town Hawaii',
    description: 'The North Shore of Oahu is surf legend territory. From Pipeline to Sunset Beach, winter swells draw the world\'s best surfers. Off-season, it\'s a paradise of shrimp trucks, shave ice, and deserted beaches.',
    longDescription: 'The North Shore stretches about 7 miles along Oahu\'s northern coast from Haleiwa town to Turtle Bay. In winter (November through February), waves at the Banzai Pipeline reach 20-30 feet and host the Triple Crown of Surfing — the most prestigious surf competition in the world. The rest of the year, the same beaches are calm enough for swimming and snorkeling. The town of Haleiwa is the cultural center: surf shops, art galleries, and the legendary shrimp trucks and shave ice stands that have become pilgrimage sites for food lovers. Turtle Bay Resort on the eastern end offers world-class golf and luxury accommodation.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop',
    imageAlt: 'Big wave surfing on the North Shore of Oahu Hawaii at Sunset Beach',
    areaKey: 'north-shore',
    highlights: ['Pipeline & Sunset Beach', 'Giovanni\'s Shrimp Truck', 'Matsumoto Shave Ice', 'Turtle Bay Golf', 'Haleiwa town'],
    bestFor: ['Surfers & surf fans', 'Food lovers', 'Photographers', 'Day-trippers from Waikiki', 'Golf enthusiasts'],
    bookingUrl: bookingSearchUrl('Haleiwa, North Shore, Oahu, Hawaii'),
    faqs: [
      { question: 'How far is the North Shore from Waikiki?', answer: 'The North Shore is about 35-45 miles from Waikiki, roughly an hour\'s drive without traffic. Via H-2 through central Oahu is fastest; the scenic coastal route through Kaneohe adds 20 minutes but is far more beautiful.' },
      { question: 'When is the best time to visit the North Shore?', answer: 'For surfing spectacle: November to February when giant swells hit Pipeline and Sunset Beach. For calm swimming and fewer crowds: May to September. The shrimp trucks and food scene are great year-round — arrive before noon as popular spots sell out.' },
      { question: 'What should I eat on the North Shore?', answer: 'Garlic shrimp from Giovanni\'s Shrimp Truck or Romy\'s, shave ice from Matsumoto\'s in Haleiwa, and a plate lunch from Kua Aina Sandwich Shop. If you have time, Haleiwa Joe\'s Seafood Grill overlooks the Anahulu River and is excellent for a sit-down meal.' },
    ]
  },
  {
    slug: 'kailua',
    name: 'Kailua',
    tagline: 'Windward coast beaches & boutique town',
    description: 'Kailua on the windward side of Oahu is home to two of the best beaches in the world — Kailua Beach and Lanikai Beach — plus a charming local town with excellent restaurants and boutique shops.',
    longDescription: 'Kailua sits on the windward (east) coast of Oahu, separated from Honolulu by the Ko\'olau Mountains. The drive over the Pali Highway is one of the most dramatic in Hawaii. The beaches are spectacular — Kailua Beach is a long arc of white sand with steady trade winds perfect for kitesurfing and kayaking, while Lanikai Beach is a postcard-perfect crescent with the Mokulua Islands just offshore. The town of Kailua itself has evolved from a sleepy bedroom community into a genuine food and arts destination, with farm-to-table restaurants, independent coffee shops, and a farmers market on Thursdays.',
    image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1200&h=630&fit=crop',
    imageAlt: 'Lanikai Beach with Mokulua Islands, Kailua Oahu Hawaii',
    areaKey: 'kailua',
    highlights: ['Lanikai Beach', 'Kailua Beach kayaking', 'Lanikai Pillbox hike', 'Local restaurants', 'Boutique shopping'],
    bestFor: ['Beach purists', 'Kayakers & paddlers', 'Hikers', 'Couples', 'Repeat visitors'],
    bookingUrl: bookingSearchUrl('Kailua, Oahu, Hawaii'),
    faqs: [
      { question: 'Is Kailua better than Waikiki?', answer: 'For beach quality, yes — Kailua and Lanikai beaches are objectively more beautiful than Waikiki. But Kailua requires a car, has fewer hotel options (mostly vacation rentals), and is less convenient for those wanting to explore the whole island. Many visitors do both: stay in Waikiki, do a day trip to Kailua.' },
      { question: 'How do you get to Kailua from Waikiki?', answer: 'By car via H-1 East and then the Pali Highway (Route 61) takes about 30 minutes. TheBus Route 67 runs from Ala Moana Center to Kailua in about 45 minutes. There is no direct highway — you cross the Ko\'olau Mountains via the Pali Highway or the Likelike Highway.' },
      { question: 'What are the best things to do in Kailua?', answer: 'Kayak to the Mokulua Islands offshore from Kailua Beach, hike the Lanikai Pillbox Trail for sunrise views, rent a paddleboard, grab breakfast at Cinnamon\'s Restaurant or Boots & Kimo\'s, and stroll Kailua town\'s independent shops in the afternoon.' },
    ]
  },
  {
    slug: 'kaneohe',
    name: 'Kaneohe',
    tagline: 'Lush valleys, Kualoa Ranch & Kaneohe Bay',
    description: 'Kaneohe on the windward coast is Oahu\'s green heart — lush valleys, the famous Kaneohe Bay sandbar, Kualoa Ranch, and He\'eia Pier. It\'s the Hawaii you see in movies.',
    longDescription: 'Kaneohe Bay is the largest sheltered body of water in Hawaii and home to one of Oahu\'s most unique experiences: the disappearing sandbar that appears at low tide in the middle of the bay. Kaneohe town sits behind the bay, backed by the dramatic Ko\'olau Mountains. Kualoa Ranch — the 4,000-acre valley used as a filming location for Jurassic Park, Lost, and dozens of other productions — is just north. He\'eia Pier General Store & Deli, right on the water, is one of the most atmospheric lunch spots on the island. The Royal Hawaiian Golf Club cuts through a jungle valley nearby.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
    imageAlt: 'Kaneohe Bay sandbar and Ko\'olau mountains, Oahu Hawaii',
    areaKey: 'kaneohe',
    highlights: ['Kaneohe Bay sandbar', 'Kualoa Ranch', 'He\'eia Pier', 'Haiku Gardens', 'Ko\'olau Mountain views'],
    bestFor: ['Adventure seekers', 'Movie location fans', 'Families', 'Photographers', 'Nature lovers'],
    bookingUrl: bookingSearchUrl('Kaneohe, Oahu, Hawaii'),
    faqs: [
      { question: 'What is the Kaneohe Bay sandbar?', answer: 'The Kaneohe Bay sandbar (locally called "the Kaneohe Sandbar" or "Ahu o Laka") is a shallow sandbar that sits in the middle of Kaneohe Bay. At low tide, it becomes a 6-acre stretch of white sand rising out of turquoise water. You can only reach it by boat — numerous tour operators run trips from He\'eia Kea Boat Harbor.' },
      { question: 'Is Kualoa Ranch worth visiting?', answer: 'Yes — Kualoa Ranch is one of Oahu\'s top attractions. The 4,000-acre valley is stunningly beautiful and recognizable from dozens of films and TV shows. ATV tours, zipline adventures, horseback riding, and movie site tours are all available. Book in advance, especially for ATVs and ziplines.' },
      { question: 'How far is Kaneohe from Waikiki?', answer: 'Kaneohe is about 13 miles from Waikiki — roughly 25-35 minutes via H-1 and the Likelike Highway. It\'s on the windward side of the Ko\'olau Mountains. The Haiku Garden restaurant area and Kualoa Ranch are about 30-40 minutes from Waikiki.' },
    ]
  },
  {
    slug: 'ko-olina',
    name: 'Ko Olina',
    tagline: 'Resort lagoons & luxury on the west coast',
    description: 'Ko Olina on Oahu\'s west coast is a master-planned resort community built around four beautiful man-made lagoons. Calm, protected swimming, world-class golf, and luxury resorts make it ideal for families.',
    longDescription: 'Ko Olina was developed in the 1990s as a resort destination separate from the bustle of Waikiki. Four interconnected lagoons — each about 200 yards across — offer calm, safe swimming conditions that parents with young children deeply appreciate. The Disney Aulani Resort and Four Seasons Ko Olina are the anchor properties. The Ko Olina Golf Club winds through the property with ocean views. Sunset views from the Ko Olina lagoons are among the best on the island, as this west-facing coast catches the last light of every day. A paved walking path connects all four lagoons and is popular with joggers and families.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop',
    imageAlt: 'Ko Olina lagoon with calm blue water and resort hotels, Oahu Hawaii',
    areaKey: 'kapolei',
    highlights: ['4 calm resort lagoons', 'Ko Olina Golf Club', 'Disney Aulani', 'Four Seasons', 'Sunset views'],
    bestFor: ['Families with young kids', 'Luxury travelers', 'Golfers', 'Anyone wanting calm water', 'Honeymooners'],
    bookingUrl: bookingSearchUrl('Ko Olina, Kapolei, Oahu, Hawaii'),
    faqs: [
      { question: 'Are the Ko Olina lagoons public?', answer: 'Yes — all four Ko Olina lagoons are public beaches, though parking in the resort area requires a fee. The lagoons themselves are accessible to anyone and are a great option for families with young children who want calm, protected swimming away from ocean surf.' },
      { question: 'How far is Ko Olina from Waikiki?', answer: 'Ko Olina is about 25 miles west of Waikiki — roughly 35-45 minutes by car via H-1. There is no direct public bus route that\'s convenient; a rental car is recommended. Rideshare fares from Waikiki to Ko Olina typically run $40-60 each way.' },
      { question: 'Is Ko Olina good for a day trip from Waikiki?', answer: 'Yes — Ko Olina makes an excellent half-day or full-day trip. The lagoons are beautiful for swimming, the golf course is world-class, and the sunset from the west-facing lagoons is spectacular. Most visitors combine Ko Olina with a stop at the Pearl Harbor National Memorial (15 minutes east) for a full west Oahu day.' },
    ]
  }
]

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug)
}
