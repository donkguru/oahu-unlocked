import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface RelatedItem {
  name: string
  slug: string
  image: string
  subtitle: string
}

interface RelatedLinksProps {
  title: string
  basePath: string
  items: RelatedItem[]
}

export default function RelatedLinks({ title, basePath, items }: RelatedLinksProps) {
  if (items.length === 0) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`${basePath}/${item.slug}`}
            className="group flex gap-3 items-center rounded-xl border bg-card p-3 hover:border-primary hover:shadow-sm transition-all"
          >
            <div className="h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0 group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  )
}
