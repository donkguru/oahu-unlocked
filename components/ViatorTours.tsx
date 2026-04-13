import { Star, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { ViatorTour } from '@/lib/viator'

export default function ViatorTours({ tours }: { tours: ViatorTour[] }) {
  if (!tours.length) return null

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Book a Tour on Viator</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {tours.map((tour) => (
          <a
            key={tour.productCode}
            href={tour.productUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group block"
          >
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              {tour.image && (
                <div className="h-40 overflow-hidden bg-muted">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-4 space-y-2">
                <p className="font-medium text-sm leading-snug line-clamp-2">{tour.title}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{tour.rating.toFixed(1)}</span>
                  <span className="text-xs text-muted-foreground">({tour.reviewCount.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">From ${tour.fromPrice}</p>
                  <span className="text-xs text-orange-500 flex items-center gap-1 font-medium">
                    Book <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Tours provided by Viator. We may earn a commission on bookings at no extra cost to you.
      </p>
    </div>
  )
}
