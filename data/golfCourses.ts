// Import golf course images

export interface GolfCourse {
  id: number;
  name: string;
  type: "Public" | "Private" | "Resort" | "Municipal";
  description: string;
  location: string;
  holes: number;
  designer: string;
  yearEstablished: number;
  greenFees: {
    residents?: string;
    nonResidents: string;
    twilight?: string;
  };
  courseRating: string;
  slope: string;
  yardage: string;
  amenities: string[];
  highlights: string[];
  website: string;
  image: string;
  phone: string;
  distanceFromWaikiki: string;
  driveTime: string;
  bestTime: string;
  signatureFeature: string;
}

export const golfCourses: GolfCourse[] = [
  {
    id: 1,
    name: "Ko Olina Golf Club",
    type: "Resort",
    description: "Championship course designed by Ted Robinson featuring stunning lagoon and ocean views. Known for its immaculate conditioning and challenging layout with water hazards on 10 holes.",
    location: "Kapolei, West Oahu",
    holes: 18,
    designer: "Ted Robinson",
    yearEstablished: 1989,
    greenFees: {
      nonResidents: "$199-$239",
      twilight: "$139"
    },
    courseRating: "73.2",
    slope: "135",
    yardage: "6,867 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Bar", "Practice Greens", "Cart GPS", "Lessons", "Clubhouse"],
    highlights: ["Ko Olina Resort Location", "Water Features", "Ocean Views", "Championship Layout"],
    website: "https://www.koolinagolf.com/",
    image: "/assets/golf-ko-olina.jpg",
    phone: "(808) 676-5300",
    distanceFromWaikiki: "23 miles",
    driveTime: "35 minutes",
    bestTime: "Early morning for best conditions",
    signatureFeature: "Signature 12th hole with dramatic ocean backdrop"
  },
  {
    id: 2,
    name: "Turtle Bay - Arnold Palmer Course",
    type: "Resort",
    description: "Legendary North Shore course designed by Arnold Palmer himself. Features dramatic oceanfront holes and trade wind challenges that have tested professionals and amateurs alike.",
    location: "Kahuku, North Shore",
    holes: 18,
    designer: "Arnold Palmer & Ed Seay",
    yearEstablished: 1992,
    greenFees: {
      nonResidents: "$195-$225",
      twilight: "$125"
    },
    courseRating: "75.3",
    slope: "143",
    yardage: "7,199 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Bar", "Practice Greens", "Cart GPS", "Lessons", "Clubhouse"],
    highlights: ["Oceanfront Holes", "Trade Wind Challenge", "North Shore Views", "PGA Tour Host"],
    website: "https://www.turtlebayresort.com/golf",
    image: "/assets/golf-turtle-bay-palmer.jpg",
    phone: "(808) 293-8574",
    distanceFromWaikiki: "35 miles",
    driveTime: "55 minutes",
    bestTime: "Morning before trade winds pick up",
    signatureFeature: "Holes 17 & 18 along dramatic coastline"
  },
  {
    id: 3,
    name: "Turtle Bay - George Fazio Course",
    type: "Resort",
    description: "More forgiving companion course to the Palmer Course, but equally scenic. Winds through natural Hawaiian landscape with spectacular mountain and ocean views.",
    location: "Kahuku, North Shore",
    holes: 18,
    designer: "George Fazio",
    yearEstablished: 1971,
    greenFees: {
      nonResidents: "$125-$155",
      twilight: "$85"
    },
    courseRating: "72.1",
    slope: "131",
    yardage: "6,535 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Practice Greens", "Cart GPS", "Clubhouse"],
    highlights: ["Player-Friendly Layout", "Natural Hawaiian Setting", "Mountain Views", "Resort Amenities"],
    website: "https://www.turtlebayresort.com/golf",
    image: "/assets/golf-turtle-bay-palmer.jpg",
    phone: "(808) 293-8574",
    distanceFromWaikiki: "35 miles",
    driveTime: "55 minutes",
    bestTime: "Afternoon for beautiful lighting",
    signatureFeature: "Natural terrain and native vegetation throughout"
  },
  {
    id: 4,
    name: "Waialae Country Club",
    type: "Private",
    description: "Home of the PGA Tour's Sony Open in Hawaii. This prestigious private club offers one of Hawaii's most challenging and beautifully maintained championship courses.",
    location: "Kahala, Honolulu",
    holes: 18,
    designer: "Seth Raynor",
    yearEstablished: 1927,
    greenFees: {
      nonResidents: "Members & Guests Only"
    },
    courseRating: "74.4",
    slope: "142",
    yardage: "7,060 yards",
    amenities: ["Pro Shop", "Driving Range", "Restaurant", "Bar", "Practice Greens", "Lessons", "Clubhouse", "Tennis Courts", "Pool"],
    highlights: ["Sony Open Host", "PGA Tour Venue", "Historic Club", "Championship Conditioning"],
    website: "https://www.waialaecc.com/",
    image: "/assets/golf-waialae.jpg",
    phone: "(808) 734-2151",
    distanceFromWaikiki: "3.5 miles",
    driveTime: "12 minutes",
    bestTime: "Members only access",
    signatureFeature: "PGA Tour's signature finishing stretch"
  },
  {
    id: 5,
    name: "Royal Hawaiian Golf Club",
    type: "Public",
    description: "Spectacular mountain course nestled in Kailua's lush valley with dramatic Ko'olau Mountain backdrop. Formerly Luana Hills Country Club, offering challenging elevation changes.",
    location: "Kailua, Windward Oahu",
    holes: 18,
    designer: "Pete & Perry Dye",
    yearEstablished: 1993,
    greenFees: {
      residents: "$70-$90",
      nonResidents: "$135-$165",
      twilight: "$95"
    },
    courseRating: "72.8",
    slope: "137",
    yardage: "6,408 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Practice Greens", "Cart GPS", "Lessons", "Clubhouse"],
    highlights: ["Mountain Valley Setting", "Dye Design", "Dramatic Elevation", "Windward Views"],
    website: "https://www.royalhawaiianclub.com/",
    image: "/assets/golf-royal-hawaiian.jpg",
    phone: "(808) 262-2139",
    distanceFromWaikiki: "12 miles",
    driveTime: "25 minutes",
    bestTime: "Morning for clearest mountain views",
    signatureFeature: "Elevated tee boxes with panoramic valley views"
  },
  {
    id: 6,
    name: "Hawaii Prince Golf Club",
    type: "Public",
    description: "Unique 27-hole facility offering three distinct 9-hole courses (A, B, and C). Designed by Arnold Palmer, featuring water hazards, strategic bunkering, and Ewa Plain views.",
    location: "Ewa Beach, West Oahu",
    holes: 27,
    designer: "Arnold Palmer",
    yearEstablished: 1991,
    greenFees: {
      residents: "$90-$110",
      nonResidents: "$150-$180",
      twilight: "$110"
    },
    courseRating: "73.0 (A/B)",
    slope: "130",
    yardage: "6,867 yards (A/B)",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Bar", "Practice Greens", "Cart GPS", "Lessons", "Clubhouse"],
    highlights: ["Three 9-Hole Courses", "Palmer Design", "Strategic Layout", "Water Features"],
    website: "https://www.princeresortsHawaii.com/golf/",
    image: "/assets/golf-hawaii-prince.jpg",
    phone: "(808) 944-4567",
    distanceFromWaikiki: "17 miles",
    driveTime: "30 minutes",
    bestTime: "Early morning or twilight",
    signatureFeature: "27 holes allow different combinations"
  },
  {
    id: 7,
    name: "Olomana Golf Links",
    type: "Public",
    description: "Beautiful and affordable course with stunning Olomana Mountain backdrop. Known for excellent conditioning, friendly staff, and great value for both locals and visitors.",
    location: "Waimanalo, Windward Oahu",
    holes: 18,
    designer: "Bob Baldock",
    yearEstablished: 1969,
    greenFees: {
      residents: "$50-$65",
      nonResidents: "$95-$115",
      twilight: "$75"
    },
    courseRating: "70.8",
    slope: "125",
    yardage: "6,326 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Practice Greens", "Cart GPS", "Clubhouse"],
    highlights: ["Affordable Golf", "Mountain Views", "Local Favorite", "Excellent Value"],
    website: "https://www.olomanagolflinks.com/",
    image: "/assets/golf-olomana.jpg",
    phone: "(808) 259-7926",
    distanceFromWaikiki: "14 miles",
    driveTime: "28 minutes",
    bestTime: "Anytime, great for beginners",
    signatureFeature: "Dramatic Olomana Mountain backdrop on every hole"
  },
  {
    id: 8,
    name: "Pearl Country Club",
    type: "Public",
    description: "Historic course near Pearl Harbor offering challenging play with water hazards and mature trees. Recently renovated with improved conditioning and facilities.",
    location: "Aiea, Central Oahu",
    holes: 18,
    designer: "Hideo Tsujimura",
    yearEstablished: 1967,
    greenFees: {
      residents: "$55-$70",
      nonResidents: "$100-$125",
      twilight: "$80"
    },
    courseRating: "71.4",
    slope: "128",
    yardage: "6,450 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Bar", "Practice Greens", "Cart GPS", "Clubhouse"],
    highlights: ["Historic Course", "Central Location", "Strategic Layout", "Good Value"],
    website: "https://www.pearlcc.com/",
    image: "/assets/golf-pali.jpg",
    phone: "(808) 487-3802",
    distanceFromWaikiki: "11 miles",
    driveTime: "22 minutes",
    bestTime: "Morning tee times recommended",
    signatureFeature: "Mature trees and strategic water hazards"
  },
  {
    id: 9,
    name: "Kapolei Golf Course",
    type: "Municipal",
    description: "West Oahu municipal course designed by Ted Robinson Sr. Features links-style layout with strategic bunkering and challenging wind conditions. Great value for money.",
    location: "Kapolei, West Oahu",
    holes: 18,
    designer: "Ted Robinson Sr.",
    yearEstablished: 2001,
    greenFees: {
      residents: "$50",
      nonResidents: "$110",
      twilight: "$70"
    },
    courseRating: "72.1",
    slope: "132",
    yardage: "6,686 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Restaurant", "Practice Greens", "Cart GPS"],
    highlights: ["Links-Style Design", "Municipal Rates", "Wind Challenge", "West Oahu Location"],
    website: "https://www.kapoleigolf.com/",
    image: "/assets/golf-ko-olina.jpg",
    phone: "(808) 674-2227",
    distanceFromWaikiki: "24 miles",
    driveTime: "38 minutes",
    bestTime: "Early morning before wind picks up",
    signatureFeature: "Links-style bunkers and open layout"
  },
  {
    id: 10,
    name: "Ala Wai Golf Course",
    type: "Municipal",
    description: "Most played municipal golf course in the United States! Located adjacent to Waikiki with views of Diamond Head. Extremely popular - book tee times well in advance.",
    location: "Honolulu, Near Waikiki",
    holes: 18,
    designer: "Donald Mackay",
    yearEstablished: 1931,
    greenFees: {
      residents: "$56",
      nonResidents: "$59",
      twilight: "$30"
    },
    courseRating: "70.0",
    slope: "120",
    yardage: "6,424 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Practice Greens", "Cart Rentals"],
    highlights: ["Most Played in USA", "Near Waikiki", "Historic Course", "Affordable Rates"],
    website: "https://www.chronogolf.com/club/ala-wai-golf-course",
    image: "/assets/golf-ala-wai.jpg",
    phone: "(808) 733-7387",
    distanceFromWaikiki: "1 mile",
    driveTime: "5 minutes",
    bestTime: "Book early - extremely popular",
    signatureFeature: "Views of Diamond Head and Waikiki skyline"
  },
  {
    id: 11,
    name: "Pali Golf Course",
    type: "Municipal",
    description: "Scenic municipal course with stunning Ko'olau Mountain backdrop. Features rolling terrain, mature trees, and excellent value. Popular with locals and budget-conscious visitors.",
    location: "Kaneohe, Windward Oahu",
    holes: 18,
    designer: "Willard Wilkinson",
    yearEstablished: 1953,
    greenFees: {
      residents: "$56",
      nonResidents: "$59",
      twilight: "$30"
    },
    courseRating: "70.3",
    slope: "119",
    yardage: "6,524 yards",
    amenities: ["Pro Shop", "Driving Range", "Club Rentals", "Practice Greens", "Cart Rentals", "Restaurant"],
    highlights: ["Mountain Views", "Municipal Rates", "Scenic Beauty", "Local Favorite"],
    website: "https://www.chronogolf.com/club/pali-golf-course",
    image: "/assets/golf-pali.jpg",
    phone: "(808) 266-7612",
    distanceFromWaikiki: "11 miles",
    driveTime: "23 minutes",
    bestTime: "Morning for best mountain views",
    signatureFeature: "Dramatic Ko'olau Mountain backdrop"
  },
  {
    id: 12,
    name: "Kahuku Golf Course",
    type: "Municipal",
    description: "Charming 9-hole North Shore course with ocean views and a relaxed, local vibe. Perfect for a quick round before or after beach time. Very affordable and beginner-friendly.",
    location: "Kahuku, North Shore",
    holes: 9,
    designer: "Local Design",
    yearEstablished: 1937,
    greenFees: {
      residents: "$20",
      nonResidents: "$25"
    },
    courseRating: "N/A",
    slope: "N/A",
    yardage: "2,699 yards",
    amenities: ["Pro Shop", "Club Rentals", "Cart Rentals"],
    highlights: ["9-Hole Layout", "Ocean Views", "Very Affordable", "North Shore Charm"],
    website: "https://www.chronogolf.com/club/kahuku-golf-course",
    image: "/assets/golf-turtle-bay-palmer.jpg",
    phone: "(808) 293-5842",
    distanceFromWaikiki: "36 miles",
    driveTime: "58 minutes",
    bestTime: "Perfect for beach day golf",
    signatureFeature: "Casual North Shore atmosphere with ocean breezes"
  },
  {
    id: 13,
    name: "Mid-Pacific Country Club",
    type: "Private",
    description: "Historic private club in Lanikai with spectacular ocean and island views. Known for excellent conditioning and intimate club atmosphere. Members and guests only.",
    location: "Lanikai, Kailua",
    holes: 18,
    designer: "Seth Raynor",
    yearEstablished: 1926,
    greenFees: {
      nonResidents: "Members & Guests Only"
    },
    courseRating: "72.5",
    slope: "136",
    yardage: "6,517 yards",
    amenities: ["Pro Shop", "Driving Range", "Restaurant", "Bar", "Practice Greens", "Lessons", "Clubhouse", "Tennis Courts", "Pool"],
    highlights: ["Historic Club", "Ocean Views", "Island Vistas", "Exclusive Access"],
    website: "https://www.midpaccc.com/",
    image: "/assets/golf-royal-hawaiian.jpg",
    phone: "(808) 262-2411",
    distanceFromWaikiki: "12 miles",
    driveTime: "25 minutes",
    bestTime: "Members only access",
    signatureFeature: "Lanikai ocean and Mokulua Island views"
  },
  {
    id: 14,
    name: "Oahu Country Club",
    type: "Private",
    description: "One of Hawaii's most exclusive private clubs in Nuuanu Valley. Features challenging mountain course with lush tropical setting. Restricted to members and their guests.",
    location: "Nuuanu, Honolulu",
    holes: 18,
    designer: "Allison & Macauley",
    yearEstablished: 1906,
    greenFees: {
      nonResidents: "Members Only"
    },
    courseRating: "71.8",
    slope: "133",
    yardage: "6,225 yards",
    amenities: ["Pro Shop", "Driving Range", "Restaurant", "Bar", "Practice Greens", "Lessons", "Clubhouse", "Tennis Courts"],
    highlights: ["Historic Prestige", "Mountain Setting", "Members Only", "Lush Tropical"],
    website: "https://www.oahucc.org/",
    image: "/assets/golf-royal-hawaiian.jpg",
    phone: "(808) 595-6331",
    distanceFromWaikiki: "5 miles",
    driveTime: "15 minutes",
    bestTime: "Members only access",
    signatureFeature: "Historic prestige and exclusive mountain valley setting"
  }
];
