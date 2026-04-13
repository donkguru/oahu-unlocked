import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData'
import { MapPin, Utensils, Waves, Flag, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About OahuUnlocked — Local Oahu Travel Guides',
  description: 'OahuUnlocked is an independent local guide to the best restaurants, outdoor adventures, golf courses, and neighborhoods on Oahu, Hawaii.',
  alternates: { canonical: 'https://oahuunlocked.com/about' },
}

const sections = [
  {
    icon: Utensils,
    title: 'Restaurants',
    description: 'From Michelin-worthy tasting menus in Waikiki to hole-in-the-wall plate lunch spots, we cover the full spectrum of Oahu dining — with honest takes on what is actually worth your time and money.',
    href: '/#featured-restaurants',
    label: 'Browse restaurants',
  },
  {
    icon: Waves,
    title: 'Adventures',
    description: 'Snorkeling at Hanauma Bay, surfing the North Shore, hiking Diamond Head at sunrise — we cover the outdoor experiences that make Oahu worth crossing an ocean for.',
    href: '/#adventures',
    label: 'Browse adventures',
  },
  {
    icon: Flag,
    title: 'Golf',
    description: 'Oahu has some of the most scenic golf courses in the world. We have reviewed every public and resort course on the island, from Ko Olina to Turtle Bay to the valleys of Kaneohe.',
    href: '/#golf',
    label: 'Browse courses',
  },
  {
    icon: MapPin,
    title: 'Neighborhoods',
    description: 'Waikiki, the North Shore, Kailua, Kaneohe, Ko Olina — each area of Oahu has a completely different character. We break down where to stay based on the kind of trip you want.',
    href: '/neighborhoods/waikiki',
    label: 'Explore neighborhoods',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: 'https://oahuunlocked.com' },
        { name: 'About', url: 'https://oahuunlocked.com/about' },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">

        {/* Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=500&fit=crop"
            alt="Waikiki Beach at sunset, Oahu Hawaii"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">About OahuUnlocked</h1>
              <p className="text-lg text-white/80">An independent local guide to Oahu, Hawaii</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-6 py-14 space-y-14">

          {/* Mission */}
          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/80 leading-relaxed">
              OahuUnlocked is an independent travel guide built by people who live on and love Oahu. Our goal is simple: cut through the noise of generic listicles and give you honest, specific recommendations for restaurants, outdoor adventures, golf, and accommodation on the island.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-4">
              We only cover places we have personally visited or thoroughly researched. Every restaurant listing includes real pricing, what to order, and who it is best for. Every adventure comes with difficulty, duration, and honest notes on what to expect. Every neighborhood guide is written to help you decide where to stay based on your travel style — not just which resort has the most star ratings.
            </p>
          </section>

          {/* What we cover */}
          <section>
            <h2 className="text-2xl font-bold mb-8">What We Cover</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {sections.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.title} className="rounded-xl border bg-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                    <Link href={s.href} className="text-sm text-primary font-medium hover:underline">
                      {s.label} →
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Blog */}
          <section className="rounded-xl border bg-card p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold">The Blog</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our blog goes deeper on specific topics — the best shrimp trucks on the North Shore, a complete Diamond Head hike guide, how to choose which side of Oahu to base yourself on. Practical articles built for people who want to get the most out of their time on the island.
            </p>
            <Link href="/blog" className="text-sm text-primary font-medium hover:underline">
              Read the blog →
            </Link>
          </section>

          {/* Affiliate disclosure */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Affiliate Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some links on OahuUnlocked are affiliate links — primarily hotel links through Booking.com and tour links through Viator. If you book through one of these links, we may earn a small commission at no extra cost to you. This helps us keep the site running and the guides free. We never recommend something solely because of an affiliate arrangement — if we link to it, we think it is genuinely worth your consideration.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-xl border bg-card p-8">
            <h2 className="text-xl font-bold mb-3">Got a Tip or Correction?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Oahu changes — restaurants close, trails get rerouted, green fees go up. If you spot something outdated or want to recommend a place we have missed, we want to hear it. Reach us at{' '}
              <a href="mailto:hello@oahuunlocked.com" className="text-primary hover:underline font-medium">
                hello@oahuunlocked.com
              </a>
              .
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
