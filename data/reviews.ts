// Editorial "Our Take" reviews — Siskel & Ebert style, honest and opinionated
// Keyed by the ID used in each data file

export const restaurantReviews: Record<number, string> = {
  // Waikiki — Outrigger
  1: "Duke's doesn't just trade on its legendary name — it earns it. The Hula Pie alone is worth the trip, the beachfront setting is unmatched, and the live music most evenings turns dinner into an event. Book ahead or arrive at the bar early.",
  2: "Sister restaurant to Duke's, sharing the same prime beachfront real estate. The food is solid Hawaiian regional — fresh fish, good cocktails — but it's the sunset views from the open-air dining room that really sell it. A reliable option when Duke's is full.",
  3: "The mainland Blue Note franchise translates beautifully to Waikiki. World-class jazz acts in an intimate room make this more concert venue than restaurant, though the contemporary American menu holds its own. Reserve a table, not just a bar seat.",
  60: "Exactly what the name promises — unpretentious, fun, and satisfying after a long beach day. The burgers are above-average for the price range, the tropical cocktails are strong, and the open-air atmosphere beats most fast-casual options in the area. Good family pick.",

  // Waikiki — Moana Surfrider
  4: "Afternoon tea at the Veranda inside the Moana Surfrider is one of Oahu's great civilised pleasures. The Victorian oceanfront setting is genuinely historic, the scones are excellent, and the service is polished. Worth every dollar for a special occasion.",
  5: "Fine dining done honestly — local ingredients, clean preparations, and a beachfront setting that the kitchen wisely lets speak for itself. Not as theatrical as some Waikiki competitors, but consistently more satisfying.",

  // Waikiki — Halekulani
  6: "Hawaii's only Forbes Five Star, AAA Five Diamond restaurant delivers a meal that justifies every superlative. The French technique applied to Hawaiian ingredients produces something genuinely singular. Expensive? Yes. Worth it for a once-in-a-trip occasion? Absolutely.",
  7: "The Sunday brunch at Orchids is one of Oahu's great food experiences — an extraordinary spread in a room that opens directly onto the ocean. The setting alone would carry a lesser menu, but the kitchen is excellent. Don't miss it.",
  8: "The greatest cocktail hour in Hawaii. Sipping a mai tai while watching a former Miss Hawaii perform hula as the sun sets behind Diamond Head is an experience that simply doesn't exist anywhere else on earth. The food is secondary — come for the atmosphere.",

  // Waikiki — Hyatt Regency
  9: "Sophisticated Asian fusion that holds its own in a competitive market. The robata grill items and omakase-style presentations show real kitchen skill. Not cheap, but the quality justifies the prices in a city where mediocre Asian food is easy to find.",
  10: "Solid hotel seafood with a Pacific Rim twist. The locally sourced fish is the menu's strongest suit — keep to the catch of the day and you'll eat well. Less memorable than some Waikiki neighbors but reliably good for a hotel restaurant.",

  // Extended Waikiki
  11: "Chef D.K. Kodama's creative Japanese-fusion menu has earned devoted fans for over two decades. The late-night menu (50% off after 10pm on weekends) is one of Waikiki's best-kept secrets. The sushi quality is the real deal.",
  12: "Iron Chef Masaharu Morimoto brings serious kitchen credentials to a fun pan-Asian menu. The dumplings, duck bao, and whole fish preparations show off why he earned the reputation. Theatrical without being gimmicky.",

  // Greater Honolulu
  13: "The godfather of Hawaiian Regional Cuisine still sets the standard. Alan Wong's approach — local ingredients, global techniques, honest prices for the quality — has influenced a generation of Oahu chefs. Reserve weeks in advance.",
  14: "The Kahala Hotel's fine dining anchor delivers French-Hawaiian fusion that rivals anything in Waikiki. The oceanfront terrace setting is romantic, the local ingredient sourcing is exemplary. Worth the 25-minute drive from central Honolulu.",
  15: "Roy Yamaguchi's Hawaiian Fusion landmark continues to deliver. The misoyaki butterfish — caramelised, buttery, perfect — has been on the menu since opening and remains the standard by which all others are measured. A Hawaii dining institution.",

  // Chun Wah Kam
  48: "West Oahu's outpost for the Chun Wah Kam classics. The quality matches the other locations — same bao, same dim sum, same excellent value. A genuine community staple for Kapolei residents.",
  49: "The Aiea location brings the same legendary manapua and dim sum to West Oahu without the downtown hustle. Reliable, consistent, and genuinely delicious local-style Chinese food at prices that haven't kept pace with inflation.",
  50: "One of Oahu's most beloved local institutions — manapua, char siu, and dim sum made the way locals actually eat it. The lines form before opening for a reason. Don't overthink it: get the manapua and the pork hash.",

  // Food trucks
  51: "The legendary North Shore truck occasionally parks closer to Waikiki — if you spot it, stop. The garlic shrimp plate with two scoops of rice is one of Hawaii's defining food truck meals. Follow their social media to track location.",
  52: "Fresh, customisable poke bowls near Kapiolani Park. The ahi is genuinely fresh, the portions are generous, and the value is real. A rotating food truck is only as reliable as its schedule — check before making a special trip.",
  53: "Hawaiian shave ice done with proper technique — the ice must be finely milled, not chunky. This truck gets it right. The li hing mui flavour with azuki beans on the bottom is the classic order, though the rainbow is the crowd-pleaser for photos.",
  54: "The perfect post-Diamond Head hike reward. Thick, properly made acai with fresh local fruit and granola — genuinely healthy and genuinely delicious. The location near Diamond Head Beach Park means the timing usually works out perfectly.",
  55: "Spam musubi is one of Hawaii's great local foods, and this truck makes a solid version. The early hours make it a natural breakfast option for beach-going early risers. Simple, cheap, and distinctly Hawaiian.",

  // Chinatown & beyond
  56: "Andrew Le's Chinatown restaurant is one of the best meals you can eat in Honolulu. The Vietnamese-influenced dishes — especially the pho French dip and the banh mi — are creative without being precious. A serious restaurant that happens to be fun.",
  57: "A James Beard Award winner that operates with no fanfare and no pretence. The pipikaula short ribs and the squid luau have been the same since 1946 for a reason — they're perfect. Don't wait until your last day in Honolulu to visit.",
  58: "The most honest seafood value on Oahu. The fish was on a boat this morning, and by noon it's on your plate at Nico's. The ahi katsu and the fresh catch plates are standouts. Dress code is flip flops — you're at the working harbour.",

  // North Shore
  59: "The original garlic shrimp truck and still the best. The white truck covered in signatures is an Oahu landmark — the garlic shrimp plate (extra napkins required) is a rite of passage for every first-time North Shore visitor. Arrive before noon.",
  // 60 is also Haleiwa Joe's — handled below as duplicate of Waikiki ID 60 above
  61: "Since 1951, the line outside Matsumoto's has been a North Shore constant. The shave ice is not just a tourist trap — it's genuinely excellent, the technique is right, and the flavours are authentic. The guava, passion fruit, and li hing mui are the local picks.",
  62: "A solid local burger chain for a post-surf meal in Haleiwa town. The burgers are honest, the portions are large, and the prices are fair. Not a destination in itself, but a reliable feed before the long drive back to Waikiki.",
  63: "The original Haleiwa location since 1975 remains a North Shore pilgrimage. The mahimahi sandwich with avocado is as good as it's ever been, the fresh-cut fries are excellent, and the no-frills atmosphere is exactly right for the neighbourhood.",

  // Kailua
  64: "Home to the macadamia nut pancakes that Kailua locals have been arguing about for years — are they the best in Hawaii? Close enough. The generous portions, reasonable prices, and genuinely welcoming atmosphere make the weekend wait worthwhile.",
  65: "The guava chiffon pancakes here are among the great breakfast dishes of Hawaii. Light, slightly sweet, with a tropical character that feels genuinely local. Arrive early on weekends — the wait can stretch past an hour but moves quickly.",
  66: "A Kailua institution since 1932 — part market, part cafe, entirely excellent. The coffee is good, the sandwiches are fresh and generous, and the proximity to Kailua Beach makes it the natural first stop before a beach day. The locals-to-tourists ratio is always reassuring.",
  67: "The salad bar at Buzz's has been a Kailua tradition since 1962 — enormous, fresh, and worth the trip by itself. The steaks are solid, the fresh fish is excellent, and the setting across from Kailua Beach Park adds context that city steak houses can't replicate.",

  // Kaneohe
  68: "Possibly the most romantic restaurant setting on Oahu. Dining amid lush tropical gardens in the Kaneohe hills, with Ko'olau Mountain views — the setting alone would carry a lesser menu, but the macadamia nut-crusted fish is genuinely outstanding.",
  69: "Hawaii's craft spirits scene comes of age at Ko'olau. The Hawaiian rum is exceptional — complex, genuine, worth taking home. The food menu is above-average for a tasting room. A stop here pairs perfectly with a Kaneohe day trip.",
  70: "The most atmospheric lunch spot on Kaneohe Bay. Sitting at a waterfront table with a breakfast burrito and a view of the bay before a day of kayaking or a sandbar tour is one of Oahu's simple pleasures. The local coffee is excellent.",

  // Pearl City & Aiea
  71: "A local Japanese institution since 1981 that flies under the radar of most visitors. The garlic ahi and the volcano roll are standouts, the portions are generous, and the prices are what Pearl City regulars have come to expect: excellent value.",
  72: "Same beloved handmade noodles and Chinese-Hawaiian comfort food as the original, now convenient to Ala Moana. The wonton mein and char siu are the orders to make. Quick service and honest pricing in a busy mall location.",
  73: "The Kapolei branch delivers the same Chun Wah Kam quality West Oahu residents need without the drive into town. Reliable, consistent, and a genuine community staple for families in the Kapolei corridor.",
  74: "The Boom Boom Chicken at Fooki has earned its Instagram status — but unlike most social media darlings, the food actually delivers. Crispy, well-seasoned, properly fried. The beef noodle soup and scallion pancakes are equally strong. Worth the Aiea drive.",
  75: "A local Japanese institution since 1981 that flies under the radar of most visitors. The garlic ahi and the volcano roll are standouts, the portions are generous, and the prices are what Pearl City regulars have come to expect: excellent value.",

  // Hawaii Kai
  76: "The original Roy's — where Hawaiian Fusion cuisine was born in 1988. The misoyaki butterfish and the melting hot chocolate soufflé have been on the menu since day one and remain benchmarks. The Hawaii Kai waterfront setting adds to the experience.",
  77: "The original Hawaii location of the famous Kona brand does justice to its craft beer heritage. The Big Wave Golden Ale on draft is the order. The food is pub-honest — pizzas, fish tacos, reliable bar snacks. The outdoor seating area is excellent.",
  78: "Lee Anne Wong's brunch destination has earned its reputation with genuine creativity. The cornflake French toast is a revelation, the fried rice is complex and satisfying, and the execution is consistent. Worth the short drive from Waikiki for a special breakfast.",

  // Honolulu local legends
  79: "A James Beard Award winner that operates with no fanfare and no pretence. The pipikaula short ribs and the squid luau have been the same since 1946 for a reason — they're perfect. Don't wait until your last day in Honolulu to visit.",
  80: "Family-run traditional Hawaiian food since 1952 on Kapahulu — the kalua pig and laulau are prepared the right way: slow-cooked, properly seasoned, genuine. No frills, no pretence. A necessary stop for visitors who want to understand what Hawaiian food actually is.",
  81: "The malasada is one of Hawaii's great food contributions to the world, and Leonard's has been making the definitive version since 1952. Hot, sugar-dusted, with custard or haupia cream filling — arrive early and eat them while they're fresh.",
  82: "President Obama ate here. More importantly, the locals have eaten here since 1961 and show no signs of stopping. The mixed plate and the loco moco are quintessential Hawaii comfort food at prices that haven't changed much. The line moves fast.",
  83: "The defining local fast-casual chain of Oahu. Every resident has a Zippy's order and an opinion about it. The Zip Pac, the saimin, the chili — these are the flavours of everyday Hawaii. Essential for understanding what local eating actually looks like.",
  84: "Andrew Le's Chinatown restaurant is one of the best meals you can eat in Honolulu. The Vietnamese-influenced dishes — especially the pho French dip and the banh mi — are creative without being precious. A serious restaurant that happens to be fun.",
  85: "The Coco Puff at Liliha — a cream puff topped with chocolate chantilly — is one of Oahu's most beloved baked goods and has been since 1950. The 24-hour original location is an institution. Get a box of Coco Puffs, get a plate of breakfast, feel like a local.",

  // Indian
  86: "Oahu's Indian food scene is modest, and Cafe Maharani is its most established player. The traditional recipes — chicken tikka masala, lamb vindaloo — are made with care, the vegetarian options are extensive, and the BYOB policy makes it even better value.",
  87: "Downtown Honolulu's go-to Indian lunch spot. The weekday lunch specials are excellent value, the curries are well-spiced without being timid, and the location near Bishop Street makes it convenient for a working lunch. Arrive before 12:30 or wait.",
  88: "Among the best Indian food on Oahu, with both North and South Indian dishes done with genuine skill. The masala dosa is outstanding, the paneer tikka is properly charred, and the vegan options are thoughtful rather than an afterthought. Recommended.",
  89: "The Himalayan and Nepalese specialties set Spice Up apart from the standard Indian restaurant playbook. The momo dumplings are excellent, the dal makhani is rich and properly slow-cooked. A small, cosy restaurant that punches well above its size.",

  // Haleiwa Joe's — separate IDs for the two locations
  // ID 60 above is Cheeseburger in Paradise; Haleiwa Joe's Seafood (North Shore) is handled below
}

// Haleiwa Joe's Seafood Grill (North Shore) — uses same numeric ID as Cheeseburger in Paradise (60) but different slug
// We use the name-based lookup in the page instead
export const haleiwaJoesNorthShoreReview = "The best sit-down restaurant on the North Shore. The macadamia nut-crusted fish is excellent, the harbour views are gorgeous, and the service is reliably good. A proper meal before or after a day on the North Shore beaches."

export const adventureReviews: Record<number, string> = {
  1: "Taking a surf lesson on Waikiki Beach is one of those Hawaii experiences that actually lives up to the hype. The gentle, consistent waves of Queens Beach are the world's best learning ground, the instructors are genuine watermen, and the feeling of standing up for the first time is unforgettable.",
  2: "Hanauma Bay is one of the most beautiful snorkelling sites on earth, and the conservation-focused management has kept it that way. Book online weeks in advance and arrive at opening for the best conditions and fewest people.",
  3: "Swimming alongside Hawaiian green sea turtles in open water is a bucket-list experience that Turtle Canyon tours deliver reliably. The small-boat format keeps group sizes manageable, and the guides' knowledge of the marine environment adds genuine depth to the experience.",
  4: "The calm waters of Ala Moana Beach make SUP boarding genuinely accessible to beginners, while the Diamond Head backdrop makes even a basic paddle feel special. Rent for two hours — you'll be standing confidently within 20 minutes.",
  5: "Paddling from Kailua Beach to the Mokulua Islands is one of the great outdoor experiences on Oahu. The turquoise water, the sea turtles below the hull, the empty landing beach on Moku Nui — it's the windward coast at its finest. Go with a guided tour if you're new to kayaking.",
  6: "The most iconic hike in Hawaii delivers exactly what it promises: a moderately challenging climb through volcanic history to a summit with one of the Pacific's great panoramic views. Go at sunrise or shortly after opening — the crater gets hot and crowded by 9am.",
  7: "An easy rainforest walk to a 150-foot waterfall that feels nothing like the Waikiki you drove from 30 minutes earlier. The bamboo forest section is magical, the falls are reliably impressive, and the trail is accessible to most fitness levels. Wear shoes you don't mind getting muddy.",
  8: "Oahu's most brutal workout delivers its most rewarding views. The 1,048 railway tie steps are relentless — there's no gentle section to recover — but the panorama of Hanauma Bay, the Ko'olau range, and the Pacific from the top is extraordinary. Start before 6am in summer.",
  9: "Short enough for a casual morning hike, dramatic enough to be worth every step. The WWII pillboxes sit at the exact height where the turquoise of Lanikai Beach, the green of the ridgeline, and the blue of the Pacific create a view that explains why people love this coast so deeply.",
  10: "The most accessible dramatic coastal walk on Oahu — paved, not too steep, and consistently spectacular. In winter, bring binoculars for the humpback whales that pass close to this headland. The lighthouse itself is a beautiful subject at any time of year.",
  11: "The USS Arizona Memorial is one of America's most powerful and sobering historical sites. Allow at least three hours to do it properly — the museum, the film, and the boat tour to the memorial itself. The oil still rising from the sunken ship makes the history viscerally real.",
  12: "The PCC is genuinely one of the most impressive cultural experiences in the Pacific. The six island villages are staffed by people from those islands, the luau feast is extensive, and the evening show is spectacular. Budget the full day — it earns it.",
  13: "The only royal palace on US soil tells a story of Hawaiian sovereignty, cultural pride, and American imperialism that is more complex and more moving than the beautiful Victorian architecture initially suggests. An essential stop for anyone serious about understanding Hawaii.",
  14: "The Bishop Museum's Hawaiian Hall is one of the great natural and cultural history exhibitions in the Americas. The scale of the collection — artefacts, genealogies, natural specimens — is remarkable. The planetarium is a bonus. Allow half a day.",
  15: "A good luau is genuinely fun — the imu ceremony (pig from the underground oven), the poi, the hula, the open bar. Paradise Cove does it better than most: the oceanfront setting adds to the experience. Book the better seating tier for a properly memorable evening.",
  16: "Jumping from 14,000 feet over the North Shore's turquoise bays is arguably the most dramatic way to see Oahu. The tandem format makes it accessible to first-timers, and the views on the way down — 60 seconds of freefall over the Pacific — are unlike anything else on the island.",
  17: "Three miles offshore, in a cage with Galapagos and sandbar sharks circling — it sounds terrifying and turns out to be fascinating. Hawaii Shark Encounters runs a professional, safety-focused operation. Not for the faint-hearted, but controlled, educational, and genuinely thrilling.",
  18: "The doors-off helicopter tour reveals an Oahu that simply can't be accessed any other way — sheer sea cliffs, hidden valleys, waterfalls visible only from the air. The aerial photography potential is extraordinary. A legitimate splurge for the right visitor.",
  19: "Parasailing above Waikiki is gentler than it looks from the beach — the ascent is smooth, the view of Diamond Head from 500 feet is outstanding, and the whole experience is calm enough that first-timers rarely regret it. An easy adventure for mixed-ability groups.",
  20: "ClimbWorks runs the best zip line operation on Oahu. The 750-foot dual racing line is genuinely thrilling, the botanical garden setting is beautiful, and the safety standards are evident throughout. Book morning tours before the trade winds make things gustier.",
  21: "The sunset catamaran sail off Waikiki is one of the island's most reliable pleasures. Open bar, live ukulele, the silhouette of Diamond Head turning gold — the formula works because the setting is genuinely extraordinary. Book the 5:30pm departure for the best light.",
  22: "Humpback whale watching from December through April off Oahu's coast is extraordinary — these 40-ton animals breach close enough to feel the spray. The Star of Honolulu whale watch includes a naturalist, which transforms a wildlife sighting into genuine education.",
  23: "The North Shore beach drive from Haleiwa to Turtle Bay is one of the great free days on Oahu. Pipeline, Sunset Beach, Waimea Bay — each beach has its own character and history. Add shrimp trucks, shave ice, and a proper sunset and you have the definitive North Shore day.",
  24: "The Kaneohe Bay sandbar — appearing in the middle of the bay at low tide — is one of Hawaii's most surreal natural phenomena. Waist-deep turquoise water in the middle of a bay, with the Ko'olau ridgeline as backdrop. Time your visit around the tide tables.",
  25: "Lanikai Beach consistently ranks among the world's most beautiful beaches, and the ranking is not inflated. The sand is powdery and white, the water is turquoise and calm, and the offshore Mokulua Islands complete a view that seems almost compositionally perfect. Park early — spaces disappear quickly.",
  26: "Riding through Ka'a'awa Valley on horseback, surrounded by the towering ridges where Jurassic Park was filmed, is one of those Hawaii experiences that combines genuine natural wonder with movie magic. All levels welcome, and the staff handle first-timers with patience and skill.",
  27: "The movie site tour is remarkable because the valley is actually more beautiful in person than on screen. Standing in the spot where the T-Rex first appeared in Jurassic Park while surrounded by these ancient ridges is genuinely thrilling — even for non-film buffs.",
  28: "Driving ATVs through the same muddy valleys where Jurassic World was filmed is exactly as fun as it sounds. Kualoa's guides are excellent, the terrain is genuinely challenging in places, and the views from the upper trails are spectacular. Book weeks ahead.",
  29: "Eight ziplines through Ka'a'awa Valley at Kualoa is the most dramatic zipline experience on Oahu. The final lines cross open valley with the full panorama of mountains and ocean below. The Jurassic connection adds context that most zip line parks simply can't offer.",
  30: "Kailua Beach is the windward coast's crown jewel — two miles of white sand, steady trade wind breezes, and warm clear water perfect for swimming, kayaking, and paddleboarding. The proximity to Kailua town makes it easy to combine beach time with excellent local food.",
  31: "Exploring Oahu by moped or Scoot Coupe is one of the best ways to cover the island at your own pace. Hawaiian Style Rentals in Waikiki has the best selection and the most reliable vehicles. The Scoot Coupes are particularly fun for couples doing a Diamond Head loop.",
}

export const golfReviews: Record<number, string> = {
  1: "Ted Robinson's 1989 design remains one of Hawaii's finest resort courses — immaculate conditioning, dramatic water features on 10 holes, and sunset views from the back nine that are extraordinary. At $200+ a round it commands resort prices, but the experience justifies every dollar.",
  2: "Playing the Palmer Course at Turtle Bay, with the Pacific crashing below the cliffs on the final two holes, is a golf experience that ranks among the most dramatic in the sport. The slope rating of 143 respects the trade wind challenge that humbles even strong players.",
  3: "The Fazio Course offers a more forgiving but equally beautiful companion to the Palmer layout. Natural terrain, native vegetation, and the same North Shore setting at a noticeably lower price point. The best-value option at Turtle Bay.",
  4: "Host of the PGA Tour's Sony Open in Hawaii, Waialae is one of America's great private clubs — a Seth Raynor design from 1927 that remains as relevant as ever. Visitors need a member introduction, but if you can arrange access, a round here is not to be missed.",
  5: "The Pete & Perry Dye design in Kailua's mountain valley is an underrated gem. The elevation changes are dramatic, the Ko'olau Mountain backdrop is spectacular, and the resident/non-resident pricing differential is significant — worth playing regardless of your budget.",
  6: "Arnold Palmer's 27-hole facility in Ewa Beach offers the unique advantage of three interchangeable 9-hole combinations. The strategic layout rewards course management over length. Less visually dramatic than the North Shore or Ko Olina options, but a solid technical test.",
  7: "The best-value round on Oahu. The Olomana Mountain backdrop on every hole is legitimately spectacular, the conditioning is consistently good, and the non-resident fee is reasonable for what you get. The Waimanalo setting has a genuine local character most resort courses can't manufacture.",
  8: "A well-maintained historic course that delivers an honest, strategic test without resort price tags. The mature trees and water hazards require proper course management. The recently renovated facilities make this a solid mid-range option for golfers based in central Oahu.",
  9: "Ted Robinson Sr.'s links-style design in Kapolei plays differently depending on the trade winds — on a calm morning it's manageable, when the wind picks up it becomes a genuine battle. Municipal rates for a course that plays above its price class.",
  10: "The most-played municipal golf course in America sits one mile from Waikiki with Diamond Head views. The course itself is modest in design, but playing early morning at Ala Wai — surrounded by Honolulu waking up — has a character that no resort course can replicate. Book weeks ahead.",
  11: "The Ko'olau Mountain backdrop at Pali is dramatic enough to improve any golfer's mood between holes. The municipal rate makes it one of Oahu's genuinely accessible options, and the course quality — rolling terrain, mature trees — exceeds expectations for the price.",
  12: "The most relaxed 9 holes on Oahu. The Kahuku course is simple, affordable, and thoroughly charming — a local course on the North Shore with ocean breezes and no pretension. Play it as an add-on to a North Shore day, not as a stand-alone destination.",
  13: "Seth Raynor's 1926 design in Lanikai is one of Hawaii's most historic and beautiful private courses. The ocean and Mokulua Island views are extraordinary on the back nine. Members and guests only — worth the effort to arrange access if you have a Hawaii connection.",
  14: "Established in 1906, Oahu Country Club is the oldest golf club in Hawaii. The Nuuanu Valley mountain setting is dramatic and lush, the course is a proper test, and the history is palpable in every corner of the clubhouse. Members only — a private experience that reflects Hawaii's oldest golf traditions.",
}
