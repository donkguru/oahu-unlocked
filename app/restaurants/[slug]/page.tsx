import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { restaurants } from '@/data/restaurants'
import { slugify } from '@/lib/slugify'
import { RestaurantStructuredData } from '@/components/seo/StructuredData'
import { MapPin, Clock, Phone, DollarSign, Star, ExternalLink, ChevronLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export async function generateStaticParams() {
  return restaurants.map((r) => ({ slug: slugify(r.name) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const restaurant = restaurants.find((r) => slugify(r.name) === slug)
  if (!restaurant) return {}

  return {
    title: `${restaurant.name} — ${restaurant.cuisine} in ${restaurant.address.split(',')[0]} Oahu`,
    description: restaurant.description,
    alternates: { canonical: `https://oahuunlocked.com/restaurants/${slug}` },
    openGraph: {
      title: restaurant.name,
      description: restaurant.description,
      images: [{ url: restaurant.image, width: 800, height: 512, alt: restaurant.name }],
    },
  }
}

export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const restaurant = restaurants.find((r) => slugify(r.name) === slug)
  if (!restaurant) notFound()

  return (
    <>
      <RestaurantStructuredData
        restaurant={{
          name: restaurant.name,
          cuisine: restaurant.cuisine,
          rating: restaurant.rating,
          priceRange: restaurant.priceRange,
          description: restaurant.description,
          website: restaurant.website,
          phone: restaurant.phone,
          address: restaurant.address,
          image: restaurant.image,
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero image */}
        <div className="relative h-64 md:h-96 bg-muted overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <Link
              href="/#featured-restaurants"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-3 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Restaurants
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <Badge variant="secondary">{restaurant.cuisine}</Badge>
              <Badge variant="outline" className="text-white border-white/50">{restaurant.category}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{restaurant.description}</p>
                </CardContent>
              </Card>

              {restaurant.specialties.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3">Specialties</h2>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((s) => (
                        <Badge key={s} variant="secondary">{s}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {restaurant.highlights.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-3">Highlights</h2>
                    <ul className="space-y-2">
                      {restaurant.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">{restaurant.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href={`tel:${restaurant.phone}`} className="text-sm text-primary hover:underline">
                        {restaurant.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Price Range</p>
                      <p className="text-sm text-muted-foreground">{restaurant.priceRange}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Parking</p>
                      <p className="text-sm text-muted-foreground">{restaurant.parking}</p>
                    </div>
                  </div>

                  {restaurant.distanceFromDukes && (
                    <div>
                      <p className="text-sm font-medium">Distance from Waikiki</p>
                      <p className="text-sm text-muted-foreground">
                        {restaurant.distanceFromDukes} · {restaurant.walkingTime}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <a
                href={restaurant.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>

              {restaurant.hotel && (
                <Card>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Located at</p>
                    <p className="text-sm font-medium">{restaurant.hotel}</p>
                    {restaurant.hotelWebsite && (
                      <a
                        href={restaurant.hotelWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        Hotel website →
                      </a>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
