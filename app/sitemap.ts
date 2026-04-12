import type { MetadataRoute } from 'next'
import { restaurants } from '@/data/restaurants'
import { adventures } from '@/data/adventures'
import { golfCourses } from '@/data/golfCourses'
import { slugify } from '@/lib/slugify'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://oahuunlocked.com'

  const restaurantUrls = restaurants.map((r) => ({
    url: `${base}/restaurants/${slugify(r.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const adventureUrls = adventures.map((a) => ({
    url: `${base}/adventures/${slugify(a.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const golfUrls = golfCourses.map((g) => ({
    url: `${base}/golf/${slugify(g.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...restaurantUrls,
    ...adventureUrls,
    ...golfUrls,
  ]
}
