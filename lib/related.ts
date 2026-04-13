import { restaurants, Restaurant } from '@/data/restaurants'
import { adventures, Adventure } from '@/data/adventures'
import { golfCourses, GolfCourse } from '@/data/golfCourses'
import { slugify } from '@/lib/slugify'

// Map a free-text location/address string to a canonical area key
export function extractArea(text: string): string {
  const t = text.toLowerCase()
  if (t.includes('haleiwa') || t.includes('north shore') || t.includes('kahuku') || t.includes('laie')) return 'north-shore'
  if (t.includes('kailua') || t.includes('lanikai') || t.includes('windward')) return 'kailua'
  if (t.includes('kaneohe') || t.includes('kualoa') || t.includes('heeia') || t.includes('haiku')) return 'kaneohe'
  if (t.includes('kapolei') || t.includes('ko olina') || t.includes('ewa') || t.includes('west oahu')) return 'kapolei'
  if (t.includes('pearl harbor') || t.includes('aiea') || t.includes('central oahu') || t.includes('nuuanu')) return 'central'
  if (t.includes('manoa') || t.includes('kaimuki') || t.includes('diamond head') || t.includes('hawaii kai') || t.includes('kahala') || t.includes('koko head')) return 'east-honolulu'
  if (t.includes('chinatown') || t.includes('downtown') || t.includes('n king') || t.includes('nimitz') || t.includes('pier 38')) return 'downtown'
  // Default: waikiki / central honolulu
  return 'waikiki'
}

export function getRelatedRestaurants(
  currentName: string,
  areaHint: string,
  limit = 3
): Array<Restaurant & { slug: string }> {
  const area = extractArea(areaHint)
  return restaurants
    .filter((r) => r.name !== currentName)
    .map((r) => ({ ...r, slug: slugify(r.name), area: extractArea(r.address + ' ' + (r.hotel || '')) }))
    .filter((r) => r.area === area)
    .slice(0, limit)
}

export function getRelatedAdventures(
  currentName: string,
  areaHint: string,
  limit = 3
): Array<Adventure & { slug: string }> {
  const area = extractArea(areaHint)
  return adventures
    .filter((a) => a.name !== currentName)
    .map((a) => ({ ...a, slug: slugify(a.name), area: extractArea(a.location) }))
    .filter((a) => a.area === area)
    .slice(0, limit)
}

export function getRelatedGolf(
  currentName: string,
  areaHint: string,
  limit = 2
): Array<GolfCourse & { slug: string }> {
  const area = extractArea(areaHint)
  return golfCourses
    .filter((g) => g.name !== currentName)
    .map((g) => ({ ...g, slug: slugify(g.name), area: extractArea(g.location) }))
    .filter((g) => g.area === area)
    .slice(0, limit)
}
