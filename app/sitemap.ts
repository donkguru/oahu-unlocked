import type { MetadataRoute } from 'next'
import { restaurants } from '@/data/restaurants'
import { adventures } from '@/data/adventures'
import { golfCourses } from '@/data/golfCourses'
import { posts } from '@/data/posts'
import { neighborhoods } from '@/data/neighborhoods'
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

  const blogUrls = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const neighborhoodUrls = neighborhoods.map((n) => ({
    url: `${base}/neighborhoods/${n.slug}`,
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
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...neighborhoodUrls,
    ...restaurantUrls,
    ...adventureUrls,
    ...golfUrls,
    ...blogUrls,
  ]
}
