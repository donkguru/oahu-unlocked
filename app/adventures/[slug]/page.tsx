import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { adventures } from '@/data/adventures'
import { slugify } from '@/lib/slugify'
import { Clock, MapPin, DollarSign, ExternalLink, ChevronLeft, Zap, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { adventureGear, amazonSearchUrl, viatorLinks, bookingUrlForLocation } from '@/lib/affiliates'
import { searchViatorTours, viatorCategorySearch } from '@/lib/viator'
import ViatorTours from '@/components/ViatorTours'

export async function generateStaticParams() {
  return adventures.map((a) => ({ slug: slugify(a.name) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const adventure = adventures.find((a) => slugify(a.name) === slug)
  if (!adventure) return {}

  return {
    title: `${adventure.name} — ${adventure.category} on Oahu Hawaii`,
    description: adventure.description,
    alternates: { canonical: `https://oahuunlocked.com/adventures/${slug}` },
    openGraph: {
      title: adventure.name,
      description: adventure.description,
      images: [{ url: adventure.image, width: 800, height: 512, alt: adventure.name }],
    },
  }
}

const difficultyColor: Record<string, string> = {
  Easy: 'bg-green-100 text-green-800',
  Moderate: 'bg-yellow-100 text-yellow-800',
  Challenging: 'bg-orange-100 text-orange-800',
  Expert: 'bg-red-100 text-red-800',
}

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const adventure = adventures.find((a) => slugify(a.name) === slug)
  if (!adventure) notFound()

  const searchTerm = viatorCategorySearch[adventure.category] || adventure.name
  const viatorTours = await searchViatorTours(searchTerm)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 md:h-96 bg-muted overflow-hidden">
        <img
          src={adventure.image}
          alt={`${adventure.name} — ${adventure.category} at ${adventure.location}, Oahu Hawaii`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link
            href="/#adventures"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-3 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Adventures
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{adventure.name}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <Badge variant="secondary">{adventure.category}</Badge>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColor[adventure.difficulty]}`}>
              {adventure.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">{adventure.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Highlights</h2>
                <div className="flex flex-wrap gap-2">
                  {adventure.highlights.map((h) => (
                    <Badge key={h} variant="secondary">{h}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <ViatorTours tours={viatorTours} />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Price</p>
                    <p className="text-sm text-muted-foreground">{adventure.priceRange}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{adventure.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{adventure.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Best Time</p>
                    <p className="text-sm text-muted-foreground">{adventure.bestTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <a
              href={adventure.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Book Now
            </a>

            <a
              href={bookingUrlForLocation(adventure.location)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Find Hotels Nearby
            </a>

            {viatorLinks[adventure.name] && (
              <a
                href={viatorLinks[adventure.name]}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white hover:bg-orange-600 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Book on Viator
              </a>
            )}

            {adventureGear[adventure.category] && (
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">Gear & Essentials</p>
                  </div>
                  <ul className="space-y-2">
                    {adventureGear[adventure.category].map((item) => (
                      <li key={item.label}>
                        <a
                          href={amazonSearchUrl(item.query)}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          className="text-sm text-primary hover:underline"
                        >
                          {item.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-3">
                    As an Amazon Associate we earn from qualifying purchases.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
