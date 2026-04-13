const TAG = process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID || 'donkguru-20'

export function amazonSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${TAG}`
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
