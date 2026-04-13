export interface PostSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'tip'
  content: string | string[]
}

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  imageAlt: string
  keywords: string[]
  sections: PostSection[]
}

export const posts: Post[] = [
  {
    slug: 'best-shrimp-trucks-north-shore-oahu',
    title: 'Best Shrimp Trucks on the North Shore of Oahu',
    excerpt: "The North Shore shrimp truck scene is one of Oahu's most iconic food experiences. Here's where to go, what to order, and how to make the most of your trip.",
    date: '2026-01-15',
    author: 'OahuUnlocked',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1200&h=630&fit=crop',
    imageAlt: 'Garlic shrimp plate from a North Shore Oahu shrimp truck',
    keywords: ['north shore shrimp trucks oahu', 'giovanni shrimp truck oahu', 'best shrimp oahu', 'haleiwa food'],
    sections: [
      { type: 'p', content: "If you've heard one thing about eating on the North Shore of Oahu, it's the shrimp trucks. Parked along Kamehameha Highway in Kahuku and Haleiwa, these mobile kitchens serve some of the best garlic butter shrimp you'll ever taste — and the setting, surrounded by sugar cane fields and mountain views, makes it even better." },
      { type: 'h2', content: "Why the North Shore is Famous for Shrimp" },
      { type: 'p', content: "The shrimp truck tradition started in the 1990s when local farmers began selling fresh-farmed shrimp directly from roadside trucks. The Kahuku area on Oahu's northeastern tip was home to aquaculture shrimp farms, making it the logical hub. Today, the shrimp is often imported, but the tradition — and the recipes — remain uniquely North Shore." },
      { type: 'h2', content: "Giovanni's Shrimp Truck — The Original" },
      { type: 'p', content: "Giovanni's is the truck that put North Shore shrimp on the map. Founded in 1993, their graffiti-covered white truck is now a landmark. The scampi-style garlic shrimp — a full pound, twelve prawns swimming in butter and garlic — is the standard by which all others are judged." },
      { type: 'ul', content: [
        "Must order: Garlic Shrimp Scampi (original recipe)",
        "Location: 66-472 Kamehameha Hwy, Kahuku (also a Haleiwa location)",
        "Price: ~$16-18 per plate, includes two scoops of rice",
        "Cash only at most trucks — bring small bills",
        "Arrive before noon — lines get long by 11am"
      ]},
      { type: 'h2', content: "Other Trucks Worth Stopping For" },
      { type: 'p', content: "Romy's Kahuku Prawns & Shrimp is the other heavyweight — their shrimp is locally farmed on-site, which is increasingly rare. The hot and spicy version is legendary. Fumi's Kahuku Shrimp is a local favorite for its lighter, less butter-heavy preparation. If you want something beyond shrimp, Macky's Sweet Shrimp offers a coconut and sweet chili variation that divides the crowd but has a cult following." },
      { type: 'h2', content: "How to Do the Shrimp Truck Route" },
      { type: 'p', content: "The classic move is to drive the full North Shore loop from Haleiwa to Kahuku. Start with a surf check at Pipeline or Sunset Beach, grab shrimp from Romy's or Giovanni's in Kahuku, then head back through Haleiwa for shave ice at Matsumoto's or a plate lunch at Kua Aina Sandwich Shop. The whole loop takes 3-4 hours from Waikiki." },
      { type: 'tip', content: "Pro tip: The trucks run out of shrimp. Seriously. Arrive by 11am or call ahead. Most trucks close when the shrimp is gone, which can be as early as 2pm on busy days." },
      { type: 'h2', content: "Getting to the North Shore from Waikiki" },
      { type: 'p', content: "It's about 35-45 miles from Waikiki to Kahuku, roughly an hour each way without traffic. Take H-1 West to H-2 North, then Highway 99 (the Kamehameha Highway) through Haleiwa. Alternatively, take the coastal route via the Pali Highway through Kaneohe — longer but far more scenic. Rental cars are the easiest option; TheBus Route 60 also runs to Haleiwa but takes 2+ hours each way." }
    ]
  },
  {
    slug: 'diamond-head-hike-complete-guide',
    title: 'Diamond Head Hike: Complete Guide for 2026',
    excerpt: "Everything you need to know about hiking Diamond Head Crater on Oahu — trail details, what to bring, how to get there, and tips to beat the crowds.",
    date: '2026-01-22',
    author: 'OahuUnlocked',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&h=630&fit=crop',
    imageAlt: 'View from the summit of Diamond Head crater trail Oahu Hawaii',
    keywords: ['diamond head hike guide', 'diamond head crater trail oahu', 'hiking diamond head', 'diamond head summit oahu'],
    sections: [
      { type: 'p', content: "Diamond Head is Oahu's most recognizable landmark and its most popular hike. The 1.6-mile round trip trail climbs inside the volcanic crater to a summit with sweeping panoramic views of Waikiki, the Pacific Ocean, and the Ko'olau Mountains. It's accessible, rewarding, and — if you time it right — not even that crowded." },
      { type: 'h2', content: "Trail Overview" },
      { type: 'ul', content: [
        "Distance: 1.6 miles round trip",
        "Elevation gain: 560 feet",
        "Difficulty: Easy to Moderate",
        "Time: 1.5 to 2 hours round trip",
        "Hours: 6:00 AM – 6:00 PM daily (last entry 4:30 PM)",
        "Parking fee: $10/car | Entry fee: $5/person"
      ]},
      { type: 'h2', content: "What to Expect on the Trail" },
      { type: 'p', content: "The trail starts paved and relatively flat inside the crater. About halfway up it gets steeper, with a series of switchbacks carved into the crater wall. Near the summit you'll pass through two tunnels blasted through the rock during WWII — bring your phone torch. The final push involves a steep spiral staircase and a ladder, then you emerge at the observation deck with one of the best views in Hawaii." },
      { type: 'h2', content: "Best Time to Go" },
      { type: 'p', content: "Early morning is the clear winner. Gates open at 6am and the first hour is magical — golden light on Waikiki, cooler temperatures, and far fewer people. By 9am the parking lot fills and the trail gets congested on the narrow sections. Avoid weekends entirely if possible. The 6am slot on a Tuesday or Wednesday is the sweet spot." },
      { type: 'tip', content: "Reservations are required for non-residents. Book online at hawaiistateparks.org up to 30 days in advance. Walk-ins are limited and often sold out by 8am on busy days." },
      { type: 'h2', content: "What to Bring" },
      { type: 'ul', content: [
        "Water — at least 500ml, more in summer",
        "Sunscreen — reef-safe if you're planning to swim after",
        "Closed-toe shoes — flip flops are not suitable",
        "Small flashlight or phone torch for the tunnels",
        "Cash or card for parking and entry fees",
        "Arrive with a full charge on your phone for photos"
      ]},
      { type: 'h2', content: "Getting There" },
      { type: 'p', content: "Diamond Head State Monument is at 18th Avenue and Diamond Head Road, about 2 miles east of central Waikiki. By car, take Kalakaua Avenue east and follow signs. Parking is $10 inside the crater — arrive early or it fills up. TheBus Route 23 stops nearby. Rideshare drop-offs work well; arrange a pickup time since cell service can be patchy inside the crater." },
      { type: 'h2', content: "After the Hike" },
      { type: 'p', content: "The stretch of Waikiki at the base of Diamond Head has some of the best beaches and restaurants on the island. Kaimana Beach (Sans Souci Beach) is quieter than central Waikiki and a 10-minute walk from the trailhead. For food, head back along Monsarrat Avenue toward Kapahulu for excellent acai bowls, shave ice, and local plate lunches." }
    ]
  },
  {
    slug: 'where-to-stay-oahu-first-time-visitors',
    title: "Where to Stay on Oahu: A First Timer's Guide",
    excerpt: "Choosing where to stay on Oahu shapes your entire trip. We break down every neighborhood — who it's best for, what it costs, and what you can walk to.",
    date: '2026-02-03',
    author: 'OahuUnlocked',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop',
    imageAlt: 'Waikiki Beach hotels and skyline from the ocean, Oahu Hawaii',
    keywords: ['where to stay oahu', 'best area to stay oahu', 'oahu hotels guide', 'waikiki vs kailua oahu'],
    sections: [
      { type: 'p', content: "Where you stay on Oahu determines how your days flow. Stay in Waikiki and you'll roll out of bed to surf lessons and oceanfront restaurants. Stay in Kailua and your mornings start on one of the most beautiful beaches in the world, surrounded by locals. Each neighborhood has a distinct personality — here's how to choose the right one for your trip." },
      { type: 'h2', content: "Waikiki — Best for First-Timers" },
      { type: 'p', content: "Waikiki remains the top pick for first-time visitors, and for good reason. Everything is walkable: the beach, dozens of restaurants, surf schools, the Honolulu Zoo, and the base of Diamond Head. The hotel density means competitive pricing. The trade-off is it can feel touristy — but that's also what makes it easy." },
      { type: 'ul', content: [
        "Best for: First-timers, anyone without a car, beach lovers",
        "Getting around: Mostly walkable, TheBus coverage is excellent",
        "Price range: Budget hostels to $1,000+/night luxury resorts",
        "Can't miss: Duke's Waikiki, Diamond Head hike, Hanauma Bay day trip"
      ]},
      { type: 'h2', content: "Kailua — Best for Beach Quality" },
      { type: 'p', content: "If your priority is beach quality over convenience, Kailua wins. Kailua Beach and Lanikai Beach consistently rank among the best beaches in the world — calm, clear water, white sand, minimal crowds compared to Waikiki. The town itself has excellent local restaurants and a laid-back neighborhood feel. The downside: you'll need a car to get around, and it's 30 minutes from Honolulu." },
      { type: 'ul', content: [
        "Best for: Beach seekers, couples, repeat visitors",
        "Getting around: Car required",
        "Price range: Vacation rentals and boutique hotels, mid-range",
        "Can't miss: Lanikai Beach, kayaking to the Mokulua Islands, Boots & Kimo's breakfast"
      ]},
      { type: 'h2', content: "North Shore — Best for Surf Culture" },
      { type: 'p', content: "The North Shore attracts surfers, photographers, and anyone who wants to see Hawaii away from the resort strip. In winter (November–February), the waves at Pipeline and Sunset Beach are world-famous. The small town of Haleiwa has great local food, surf shops, and the best shave ice on the island. Accommodation is limited and books up fast — vacation rentals dominate." },
      { type: 'h2', content: "Ko Olina — Best for Families" },
      { type: 'p', content: "Ko Olina on the west coast is purpose-built for resort living. Four man-made lagoons offer calm, protected swimming perfect for young kids. The Aulani Disney Resort is here, as is the Four Seasons. It's removed from the rest of Oahu's attractions, which is either a blessing or a drawback depending on your travel style." },
      { type: 'h2', content: "Kaneohe & Windward Side — Best for Nature Access" },
      { type: 'p', content: "Staying on the windward (east) side puts you close to Kualoa Ranch, He'eia Pier, the Haiku Stairs, and some of Oahu's most dramatic scenery. It's the lush, green Hawaii you see in movies. More vacation rentals than hotels, and you'll definitely need a car." },
      { type: 'tip', content: "Budget tip: Staying just outside Waikiki in the Kapahulu or McCully neighborhoods cuts hotel costs by 20-40% while keeping you within a 15-minute walk or short bus ride of the beach." }
    ]
  },
  {
    slug: 'best-hawaiian-food-honolulu',
    title: 'Best Hawaiian Food in Honolulu — Beyond the Tourist Trail',
    excerpt: "Skip the hotel buffets. These are the spots where locals eat Hawaiian food — plate lunches, poke, loco moco, malasadas, and the real shave ice experience.",
    date: '2026-02-18',
    author: 'OahuUnlocked',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&h=630&fit=crop',
    imageAlt: 'Traditional Hawaiian plate lunch with poi kalua pork and lomi salmon, Honolulu',
    keywords: ['best hawaiian food honolulu', 'local food oahu', 'plate lunch oahu', 'best poke honolulu', 'where locals eat oahu'],
    sections: [
      { type: 'p', content: "Hawaiian food is one of the most underrated culinary traditions in the United States. It's not just spam and pineapple — traditional Hawaiian cuisine is deeply connected to the land and ocean, with bold flavors built around taro, fresh fish, pork, and tropical fruit. Here's where to find the real thing in Honolulu." },
      { type: 'h2', content: "Plate Lunches — The Hawaiian Everyday Meal" },
      { type: 'p', content: "The plate lunch is the cornerstone of local food culture in Hawaii. A two-scoop rice, macaroni salad, and protein (usually chicken katsu, kalbi short ribs, or garlic shrimp) served in a styrofoam container. It's filling, cheap, and delicious. Rainbow Drive-In on Kapahulu Avenue has been serving Honolulu's best plate lunches since 1961 — the mixed plate with gravy is the move." },
      { type: 'h2', content: "Helena's Hawaiian Food — A James Beard Institution" },
      { type: 'p', content: "Helena's Hawaiian Food in Kalihi is a James Beard Award-winning restaurant that has been serving traditional Hawaiian food since 1946. The pipikaula (beef short ribs marinated and dried), laulau (pork wrapped in taro leaves), and poi are the real deal. It's not in a tourist neighborhood, it's not fancy, and that's exactly the point. Go for lunch — they close by 7pm and sell out of dishes early." },
      { type: 'h2', content: "Poke — Fresh Fish Hawaiian Style" },
      { type: 'p', content: "Poke (pronounced poh-kay) is cubed raw fish marinated in soy sauce, sesame oil, and green onion. Hawaii's version is far superior to the mainland trend. Ono Hawaiian Foods on Kapahulu is a classic stop. For the freshest poke in Honolulu, head to the Tamura's Fine Wine & Liquors locations — it sounds unlikely but their poke counter is legendary among locals." },
      { type: 'h2', content: "Leonard's Bakery — Malasadas Since 1952" },
      { type: 'p', content: "Malasadas are Portuguese donuts brought to Hawaii by immigrant workers in the 1800s. Leonard's Bakery on King Street has been making them since 1952 and the line out the door on weekends tells you everything. The original sugar malasada is perfect. The filled versions (custard, haupia, dobash) are exceptional. Get them fresh — they're best in the first 20 minutes." },
      { type: 'h2', content: "Shave Ice — It's Not a Snow Cone" },
      { type: 'p', content: "Hawaiian shave ice is categorically different from a snow cone. The ice is shaved to a texture closer to powder than crushed ice, absorbing the syrup rather than letting it sink to the bottom. Matsumoto's in Haleiwa is the most famous. In Honolulu, Waiola Shave Ice in Moiliili has a devoted local following. Order it with ice cream on the bottom and azuki beans on top." },
      { type: 'h2', content: "Zippy's — The Local Chain That Visitors Miss" },
      { type: 'p', content: "Zippy's is the most beloved local restaurant chain in Hawaii — a comfort food institution that visitors almost never discover. Open 24 hours at most locations, serving chili rice, saimin (local noodle soup), and the famous Zip Pac bento. It's not fine dining. It's exactly what you want at 2am after a long day." },
      { type: 'tip', content: "Avoid the Waikiki tourist traps marketing 'authentic Hawaiian luau' dinners in hotel ballrooms. The real Hawaiian food is in neighborhood spots in Kalihi, Kapahulu, and Moiliili — a 10-15 minute drive from the beach." }
    ]
  },
  {
    slug: 'oahu-golf-guide-best-courses-every-budget',
    title: "Oahu Golf Guide: Best Courses for Every Budget",
    excerpt: "From municipal courses you can walk to from Waikiki to world-class resort layouts on the North Shore — here's how to plan golf on Oahu for any budget.",
    date: '2026-03-01',
    author: 'OahuUnlocked',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=630&fit=crop',
    imageAlt: 'Golf course with ocean views on Oahu Hawaii',
    keywords: ['oahu golf guide', 'best golf courses oahu', 'golf oahu hawaii', 'cheap golf oahu', 'ko olina golf club'],
    sections: [
      { type: 'p', content: "Oahu has some of the most diverse golf in the United States — ocean-view resort courses, lush jungle layouts, and affordable municipal tracks. The challenge is knowing which course fits your game and your budget. Here's the breakdown." },
      { type: 'h2', content: "Best Scenic Course: Ko Olina Golf Club" },
      { type: 'p', content: "Ko Olina Golf Club on the west coast is Oahu's most visually spectacular course. Designed by Ted Robinson, the layout winds through tropical gardens with ocean glimpses throughout. The par-72 course is challenging but not punishing, with wide fairways and well-maintained greens. Green fees for non-residents run $175-200. Worth every cent for the scenery alone." },
      { type: 'h2', content: "Best Resort Experience: Turtle Bay Resort" },
      { type: 'p', content: "Turtle Bay on the North Shore has two courses — the Arnold Palmer Course and the George Fazio Course. The Palmer is the star: a links-style layout hugging the coastline with ocean breezes that will humble even single-digit handicappers. The Fazio is more forgiving. Combined with the North Shore setting, Turtle Bay is a bucket-list golf experience. Book well in advance — it fills up." },
      { type: 'h2', content: "Best Budget Option: Ala Wai Golf Course" },
      { type: 'p', content: "Ala Wai Golf Course in Honolulu is one of the busiest golf courses in the world, and one of the cheapest. Non-resident rates are under $60 and the course is literally walkable from Waikiki hotels. It's flat, has no ocean views, and is crowded — but as a warm-up round before heading to Ko Olina or as a standalone affordable option, it's unbeatable value." },
      { type: 'h2', content: "Best for Serious Golfers: Royal Hawaiian Golf Club" },
      { type: 'p', content: "The Royal Hawaiian Golf Club in Kailua is carved through a dramatic jungle valley in the Ko'olau Mountains. The course plays through lush tropical forest with elevation changes, narrow fairways, and mountain views. Greens fees are in the $175+ range but the experience is unlike any other course on the island. This is for golfers who want a serious round in a jaw-dropping setting." },
      { type: 'h2', content: "Golf Tips for Visitors" },
      { type: 'ul', content: [
        "Book tee times 2-4 weeks in advance for resort courses, especially in high season (Dec-Mar)",
        "Twilight rates (after 1-2pm) cut fees by 30-50% at most courses",
        "Trade winds pick up in the afternoon — morning rounds are usually calmer",
        "Sunscreen is non-negotiable. Bring reef-safe SPF 50+",
        "Many courses require shirts with collars — check dress code before you arrive",
        "Rental clubs are available at all major courses if you don't want to travel with yours"
      ]},
      { type: 'h2', content: "When to Play Golf on Oahu" },
      { type: 'p', content: "Golf on Oahu is a year-round activity. Winter (December-February) brings slightly more rain but cooler temperatures — ideal for walking courses. Summer is drier but hot by midday. The sweet spot is April-June or September-November: moderate temperatures, less rain than winter, and smaller crowds than peak season. Early morning tee times are cooler and less windy regardless of season." }
    ]
  }
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
