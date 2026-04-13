import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { golfCourses } from '@/data/golfCourses'
import { slugify } from '@/lib/slugify'
import { MapPin, Clock, Phone, DollarSign, ExternalLink, ChevronLeft, Flag, ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { golfGear, amazonSearchUrl, bookingUrlForLocation } from '@/lib/affiliates'

export async function generateStaticParams() {
  return golfCourses.map((g) => ({ slug: slugify(g.name) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = golfCourses.find((g) => slugify(g.name) === slug)
  if (!course) return {}

  return {
    title: `${course.name} — ${course.type} Golf Course Oahu Hawaii`,
    description: course.description,
    alternates: { canonical: `https://oahuunlocked.com/golf/${slug}` },
    openGraph: {
      title: course.name,
      description: course.description,
      images: [{ url: course.image, width: 800, height: 512, alt: course.name }],
    },
  }
}

export default async function GolfPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = golfCourses.find((g) => slugify(g.name) === slug)
  if (!course) notFound()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-64 md:h-96 bg-muted overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link
            href="/#golf"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-3 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Golf
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{course.name}</h1>
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <Badge variant="secondary">{course.type}</Badge>
            <span className="text-sm text-white/80">{course.holes} holes · Est. {course.yearEstablished}</span>
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
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Signature Feature</h2>
                <p className="text-muted-foreground">{course.signatureFeature}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Course Stats</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold">{course.holes}</p>
                    <p className="text-xs text-muted-foreground">Holes</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{course.courseRating}</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{course.slope}</p>
                    <p className="text-xs text-muted-foreground">Slope</p>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3">{course.yardage}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Highlights</h2>
                <div className="flex flex-wrap gap-2">
                  {course.highlights.map((h) => (
                    <Badge key={h} variant="secondary">{h}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {course.amenities.map((a) => (
                    <Badge key={a} variant="outline">{a}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Green Fees</p>
                  {course.greenFees.residents && (
                    <p className="text-sm text-muted-foreground">Residents: {course.greenFees.residents}</p>
                  )}
                  <p className="text-sm text-muted-foreground">Non-residents: {course.greenFees.nonResidents}</p>
                  {course.greenFees.twilight && (
                    <p className="text-sm text-muted-foreground">Twilight: {course.greenFees.twilight}</p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">{course.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">From Waikiki</p>
                    <p className="text-sm text-muted-foreground">{course.distanceFromWaikiki} · {course.driveTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href={`tel:${course.phone}`} className="text-sm text-primary hover:underline">
                      {course.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Flag className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Designed by</p>
                    <p className="text-sm text-muted-foreground">{course.designer}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Best Time</p>
                  <p className="text-sm text-muted-foreground">{course.bestTime}</p>
                </div>
              </CardContent>
            </Card>

            <a
              href={course.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Book Tee Time
            </a>

            <a
              href={bookingUrlForLocation(course.location)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Find Hotels Nearby
            </a>

            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-medium">Golf Essentials</p>
                </div>
                <ul className="space-y-2">
                  {golfGear.map((item) => (
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
          </div>
        </div>
      </div>
    </div>
  )
}
