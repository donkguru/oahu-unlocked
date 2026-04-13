export interface ViatorTour {
  productCode: string
  title: string
  description: string
  image: string
  rating: number
  reviewCount: number
  fromPrice: number
  currency: string
  productUrl: string
}

const VIATOR_API_KEY = process.env.VIATOR_API_KEY || ''
const OAHU_DESTINATION_ID = '672'

export async function searchViatorTours(query: string, count = 4): Promise<ViatorTour[]> {
  if (!VIATOR_API_KEY) return []

  try {
    const res = await fetch('https://api.viator.com/partner/products/search', {
      method: 'POST',
      headers: {
        'exp-api-key': VIATOR_API_KEY,
        'Accept': 'application/json;version=2.0',
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filtering: {
          destination: OAHU_DESTINATION_ID,
          searchTerm: query,
        },
        sorting: { sort: 'TRAVELER_RATING', order: 'DESCENDING' },
        pagination: { start: 1, count },
        currency: 'USD',
      }),
      next: { revalidate: 86400 }, // cache 24h
    })

    if (!res.ok) return []

    const data = await res.json()
    const products = data.products || []

    return products.map((p: any) => {
      const coverImage = p.images?.find((img: any) => img.isCover) || p.images?.[0]
      const imageVariant = coverImage?.variants?.find((v: any) => v.width === 480) ||
        coverImage?.variants?.[0]

      return {
        productCode: p.productCode,
        title: p.title,
        description: p.description?.slice(0, 150) + '...',
        image: imageVariant?.url || '',
        rating: p.reviews?.combinedAverageRating || 0,
        reviewCount: p.reviews?.totalReviews || 0,
        fromPrice: p.pricing?.summary?.fromPrice || 0,
        currency: p.pricing?.currency || 'USD',
        productUrl: p.productUrl,
      }
    })
  } catch {
    return []
  }
}

// Map adventure categories to Viator search terms
export const viatorCategorySearch: Record<string, string> = {
  'Water Activities': 'snorkeling surfing water activities oahu',
  'Beach Activities': 'beach catamaran sunset cruise oahu',
  'Hiking & Nature': 'hiking nature tour oahu',
  'Cultural Experiences': 'cultural tour pearl harbor luau oahu',
  'Extreme Adventures': 'skydiving helicopter extreme adventure oahu',
}
