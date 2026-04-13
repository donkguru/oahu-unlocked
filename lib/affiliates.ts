// Booking.com
const BOOKING_AID = process.env.NEXT_PUBLIC_BOOKING_AID || '2852063'

export function bookingSearchUrl(location: string): string {
  return `https://www.booking.com/searchresults.html?aid=${BOOKING_AID}&ss=${encodeURIComponent(location)}`
}

export function bookingHotelUrl(hotelSlug: string): string {
  return `https://www.booking.com/hotel/us/${hotelSlug}.html?aid=${BOOKING_AID}`
}

// Map adventure/golf locations to Booking.com search areas
export const bookingAreaLinks: Record<string, string> = {
  'Waikiki': bookingSearchUrl('Waikiki, Honolulu, Hawaii'),
  'North Shore': bookingSearchUrl('North Shore, Oahu, Hawaii'),
  'Kailua': bookingSearchUrl('Kailua, Oahu, Hawaii'),
  'Kaneohe': bookingSearchUrl('Kaneohe, Oahu, Hawaii'),
  'Kapolei': bookingSearchUrl('Kapolei, Oahu, Hawaii'),
  'Default': bookingSearchUrl('Oahu, Hawaii'),
}

export function bookingUrlForLocation(location: string): string {
  for (const [area, url] of Object.entries(bookingAreaLinks)) {
    if (location.toLowerCase().includes(area.toLowerCase())) return url
  }
  return bookingAreaLinks['Default']
}

// Amazon Associates
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID || 'donkguru-20'

export function amazonSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`
}

// Viator
const VIATOR_PID = process.env.NEXT_PUBLIC_VIATOR_PID || 'P00296758'
const VIATOR_MCID = '42383'

export function viatorSearchUrl(query: string): string {
  return `https://www.viator.com/search/Oahu?q=${encodeURIComponent(query)}&pid=${VIATOR_PID}&mcid=${VIATOR_MCID}&medium=link`
}

// Map each adventure name to a Viator search query
export const viatorLinks: Record<string, string> = {
  'Waikiki Surf Lessons': viatorSearchUrl('surf lessons waikiki'),
  'Hanauma Bay Snorkeling': viatorSearchUrl('hanauma bay snorkeling'),
  'Turtle Canyon Snorkel Tour': viatorSearchUrl('turtle canyon snorkel'),
  'Stand-Up Paddleboarding': viatorSearchUrl('paddleboarding oahu'),
  'Kayak to Lanikai Beach': viatorSearchUrl('kayak lanikai oahu'),
  'Diamond Head Crater Trail': viatorSearchUrl('diamond head hiking tour'),
  'Manoa Falls Trail': viatorSearchUrl('manoa falls hike'),
  'Koko Head Stairs': viatorSearchUrl('koko head oahu'),
  'Lanikai Pillbox Hike': viatorSearchUrl('lanikai pillbox hike'),
  'Makapuu Lighthouse Trail': viatorSearchUrl('makapuu lighthouse trail'),
  'Kualoa Ranch Horseback Riding': viatorSearchUrl('kualoa ranch horseback'),
  'Pearl Harbor & USS Arizona': viatorSearchUrl('pearl harbor tour'),
  'Polynesian Cultural Center': viatorSearchUrl('polynesian cultural center'),
  'Iolani Palace Tour': viatorSearchUrl('iolani palace tour'),
  'Bishop Museum': viatorSearchUrl('bishop museum honolulu'),
  'Traditional Luau Experience': viatorSearchUrl('luau oahu'),
  'Kualoa Ranch Movie Site Tour': viatorSearchUrl('kualoa ranch movie tour'),
  'Skydiving Oahu': viatorSearchUrl('skydiving oahu'),
  'Shark Cage Diving': viatorSearchUrl('shark cage diving oahu'),
  'Helicopter Doors-Off Tour': viatorSearchUrl('helicopter doors off oahu'),
  'Parasailing Waikiki': viatorSearchUrl('parasailing waikiki'),
  'North Shore Zip Line': viatorSearchUrl('zipline north shore oahu'),
  'Kualoa Ranch ATV Adventure': viatorSearchUrl('kualoa ranch atv'),
  'Kualoa Ranch Zipline': viatorSearchUrl('kualoa ranch zipline'),
  'Waikiki Sunset Catamaran': viatorSearchUrl('sunset catamaran waikiki'),
  'Whale Watching Tour': viatorSearchUrl('whale watching oahu'),
  'North Shore Beach Hopping': viatorSearchUrl('north shore oahu tour'),
  'Sandbar Kaneohe Bay': viatorSearchUrl('kaneohe bay sandbar'),
  'Lanikai Beach Relaxation': viatorSearchUrl('lanikai beach oahu'),
  'Kailua Beach Park': viatorSearchUrl('kailua beach oahu'),
  'Hawaiian Style Rentals & Sales': viatorSearchUrl('beach rentals oahu'),
}

export const adventureGear: Record<string, { label: string; query: string }[]> = {
  'Water Activities': [
    { label: 'Snorkel Gear', query: 'snorkel gear set' },
    { label: 'Reef-Safe Sunscreen', query: 'reef safe sunscreen hawaii' },
    { label: 'Water Shoes', query: 'water shoes men women' },
    { label: 'Waterproof Bag', query: 'dry bag waterproof' },
  ],
  'Beach Activities': [
    { label: 'Beach Towel', query: 'quick dry beach towel' },
    { label: 'Reef-Safe Sunscreen', query: 'reef safe sunscreen hawaii' },
    { label: 'Waterproof Phone Case', query: 'waterproof phone case beach' },
    { label: 'Portable Cooler', query: 'portable beach cooler' },
  ],
  'Hiking & Nature': [
    { label: 'Hiking Shoes', query: 'trail hiking shoes' },
    { label: 'Day Backpack', query: 'lightweight day hiking backpack' },
    { label: 'Trekking Poles', query: 'collapsible trekking poles' },
    { label: 'Insect Repellent', query: 'deet insect repellent spray' },
  ],
  'Cultural Experiences': [
    { label: 'Hawaii Travel Guide', query: 'hawaii travel guide book' },
    { label: 'Travel Journal', query: 'travel journal notebook' },
    { label: 'Camera', query: 'compact travel camera' },
  ],
  'Extreme Adventures': [
    { label: 'GoPro Camera', query: 'GoPro action camera' },
    { label: 'Polarized Sunglasses', query: 'polarized sport sunglasses' },
    { label: 'Reef-Safe Sunscreen', query: 'reef safe sunscreen hawaii' },
    { label: 'Rash Guard', query: 'rash guard UPF 50' },
  ],
}

export const golfGear: { label: string; query: string }[] = [
  { label: 'Golf Gloves', query: 'golf gloves men women' },
  { label: 'Golf Sunscreen', query: 'sport sunscreen golf SPF 50' },
  { label: 'Golf Balls', query: 'premium golf balls' },
  { label: 'Golf Towel', query: 'golf towel clip' },
]
