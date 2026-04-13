import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { neighborhoods, getNeighborhood } from '@/data/neighborhoods'
import { restaurants } from '@/data/restaurants'
import { adventures } from '@/data/adventures'
import { slugify } from '@/lib/slugify'
import { extractArea } from '@/lib/related'
import { MapPin, BedDouble, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import { BreadcrumbStructuredData, FAQStructuredData } from '@/components/seo/StructuredData'
import AdUnit from '@/components/AdUnit'
import { AD_SLOTS } from '@/lib/adSlots'

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ area: n.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>
}): Promise<Metadata> {
  const { area } = await params
  const hood = getNeighborhood(area)
  if (!hood) return {}
  return {
    title: `${hood.name} Oahu — Restaurants, Things to Do & Where to Stay | OahuUnlocked`,
    description: hood.description,
    alternates: { canonical: `https://oahuunlocked.com/neighborhoods/${area}` },
    openGraph: {
      title: `${hood.name} Oahu Travel Guide`,
      description: hood.description,
      images: [{ url: hood.image, width: 1200, height: 630, alt: hood.imageAlt }],
    },
  }
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ area: string }>
}) {
  const { area } = await params
  const hood = getNeighborhood(area)
  if (!hood) notFound()

  const areaRestaurants = restaurants
    .filter((r) => extractArea(r.address + ' ' + (r.hotel || '')) === hood.areaKey)
    .slice(0, 6)

  const areaAdventures = adventures
    .filter((a) => extractArea(a.location) === hood.areaKey)
    .slice(0, 6)

  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: 'https://oahuunlocked.com' },
        { name: 'Neighborhoods', url: 'https://oahuunlocked.com' },
        { name: hood.name, url: `https://oahuunlocked.com/neighborhoods/${area}` },
      ]} />
      <FAQStructuredData faqs={hood.faqs} />
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden bg-muted">
          <img src={hood.image} alt={hood.imageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                <MapPin className="h-4 w-4" />
                <span>Oahu, Hawaii</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{hood.name}</h1>
              <p className="text-lg text-white/80">{hood.tagline}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-6 py-12 space-y-16">

          {/* Overview */}
          <section>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">{hood.longDescription}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Highlights</h3>
                <ul className="space-y-2">
                  {hood.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {hood.bestFor.map((b) => (
                    <Badge key={b} variant="secondary">{b}</Badge>
                  ))}
                </div>
                <a
                  href={hood.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <BedDouble className="h-4 w-4" />
                  Find Hotels in {hood.name}
                </a>
              </div>
            </div>
          </section>

          {/* Restaurants */}
          {areaRestaurants.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Restaurants in {hood.name}</h2>
                <Link href="/#featured-restaurants" className="text-sm text-primary hover:underline">
                  All restaurants →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {areaRestaurants.map((r) => (
                  <Link
                    key={r.id}
                    href={`/restaurants/${slugify(r.name)}`}
                    className="group rounded-xl border bg-card overflow-hidden hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="h-36 overflow-hidden bg-muted">
                      <img
                        src={r.image}
                        alt={`${r.name} — ${r.cuisine} restaurant in ${hood.name}, Oahu Hawaii`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.cuisine} · {r.priceRange}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Adventures */}
          {areaAdventures.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Things to Do in {hood.name}</h2>
                <Link href="/#adventures" className="text-sm text-primary hover:underline">
                  All adventures →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {areaAdventures.map((a) => (
                  <Link
                    key={a.id}
                    href={`/adventures/${slugify(a.name)}`}
                    className="group rounded-xl border bg-card overflow-hidden hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="h-36 overflow-hidden bg-muted">
                      <img
                        src={a.image}
                        alt={`${a.name} — ${a.category} in ${hood.name}, Oahu Hawaii`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">{a.name}</p>
                      <p className="text-xs text-muted-foreground">{a.category} · {a.difficulty}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Ad unit between content and FAQ */}
          <AdUnit slot={AD_SLOTS.neighborhoodMid} format="horizontal" className="py-2" />

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{hood.name} FAQ</h2>
            <div className="space-y-4">
              {hood.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border bg-card p-5">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other neighborhoods */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Explore Other Areas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {neighborhoods
                .filter((n) => n.slug !== area)
                .map((n) => (
                  <Link
                    key={n.slug}
                    href={`/neighborhoods/${n.slug}`}
                    className="group rounded-xl border bg-card overflow-hidden hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="h-24 overflow-hidden bg-muted">
                      <img src={n.image} alt={n.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors">{n.name}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
