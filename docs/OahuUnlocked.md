# OahuUnlocked.com

> Oahu travel guide — restaurants, adventures, golf. Affiliate-monetized Next.js site deployed on Vercel.

---

## Quick Links

- [[Site Overview]]
- [[Affiliate Programs]]
- [[Google AdSense]]
- [[Environment Variables]]
- [[Data & Listings]]
- [[Key Files]]
- [[UI & Design]]
- [[Gap Analysis]]
- [[Web Design Leads]]
- [[Changelog]]
- [[To Do]]

---

## Site Overview

| Field | Value |
|---|---|
| Domain | oahuunlocked.com |
| Repo | `~/webprojects/oahu-unlocked` |
| Stack | Next.js, Tailwind CSS, shadcn/ui |
| Hosting | Vercel (auto-deploy on push to `main`) |
| Analytics | Google Analytics `G-4PTMZTE67Z` |

**Deploy rule:** Always `git push` after committing — Vercel only deploys on push. Commits sitting local = nothing on the live site.

---

## Affiliate Programs

| Program | ID / Details | Status |
|---|---|---|
| Viator | PID `P00296758`, MCID `42383`, API key in Vercel | ✅ Live |
| Amazon Associates | Tag `donkguru-20` | ✅ Live |
| Booking.com | Publisher ID `2852063` | ✅ Live |
| GolfNow | Applied 2026-04-12 | ⏳ Pending approval |

**Key file:** `lib/affiliates.ts` — Amazon + Viator search links + Booking.com helpers.

---

## Google AdSense

| Field | Value |
|---|---|
| Publisher ID | `ca-pub-3052014745520931` |
| Ad Unit | `oahuHI` |
| Slot ID | `9993349200` (all placements) |
| Status | ⏳ "Getting ready" — under Google review |

**Placements:**
- Homepage mid-banner (`components/HomeClient.tsx`)
- Blog post mid (`app/blog/[slug]/page.tsx`)
- Neighborhood page mid (`app/neighborhoods/[area]/page.tsx`)

**Slot config:** `lib/adSlots.ts`

**Notes:**
- Once approved, consider creating separate ad units per placement for tracking
- Env var `NEXT_PUBLIC_ADSENSE_PUB_ID` is Production-only on Vercel — ads won't show on preview URLs or local
- "Getting ready" = Google is crawling and reviewing — normal for new sites, can take days to 2 weeks

---

## Environment Variables

Set in Vercel dashboard under **Production** environment.

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-4PTMZTE67Z` |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | From pin drive `MapAPIkey.odt` |
| `NEXT_PUBLIC_AMAZON_TRACKING_ID` | Amazon Associates |
| `NEXT_PUBLIC_VIATOR_PID` | Viator affiliate PID |
| `NEXT_PUBLIC_BOOKING_AID` | Booking.com publisher ID |
| `VIATOR_API_KEY` | Server-side Viator API |
| `NEXT_PUBLIC_ADSENSE_PUB_ID` | `ca-pub-3052014745520931` |
| `BREVO_API_KEY` | Email / newsletter |
| `BREVO_LIST_ID` | `2` |

---

## Data & Listings

Counts as of 2026-04-16:

| Category | Count |
|---|---|
| Restaurants | 102 |
| Adventures | 50 |
| Golf Courses | 22 |

**Data files:** `data/restaurants.ts`, `data/adventures.ts`, `data/golf.ts`

---

## Key Files

| File | Purpose |
|---|---|
| `lib/affiliates.ts` | Affiliate link helpers |
| `lib/viator.ts` | Viator API fetch (server-side, 24h cache) |
| `lib/adSlots.ts` | AdSense slot ID constants |
| `components/FeaturedRestaurants.tsx` | Restaurants grouped by hotel & distance from Duke's |
| `components/CuisineGuide.tsx` | Restaurants grouped by cuisine category |
| `components/IndianRestaurants.tsx` | Indian restaurant section |
| `components/ViatorTours.tsx` | Viator tour cards |
| `data/reviews.ts` | Editorial "Our Take" reviews |
| `scripts/gap-analysis.mjs` | Google Places gap analysis (re-runnable) |
| `public/llms.txt` | Static AI agent discovery file |
| `app/llms.txt/route.ts` | Dynamic llms.txt (auto-updates listing counts) |

---

## UI & Design

### Layout Changes (2026-04-17)
- Restaurant card grids switched from CSS grid to `flex flex-wrap justify-center` so partial rows center instead of left-aligning
- Affects: `FeaturedRestaurants.tsx`, `CuisineGuide.tsx`, `IndianRestaurants.tsx`
- Category headers in `CuisineGuide.tsx` switched from left-aligned flex row to `flex-col items-center text-center`

---

## Gap Analysis

Script: `scripts/gap-analysis.mjs`

- Uses **Places API (New)** — not legacy `nearbysearch`
- API key must have **no HTTP referrer restriction** (server-side script)
- Run: `GOOGLE_API_KEY=your_key node scripts/gap-analysis.mjs`
- Cost: ~$2–5 per run, covered by $200/month free credit
- Output report: `gap-report.json` (not committed to repo)

**Last run:** 2026-04-15
- Added 12 restaurants, 15 adventures, 8 golf courses (30 total)

**Re-run:** Anytime to catch new openings. Script handles deduplication.

---

## Web Design Leads

Restaurants listed on the site with no web presence — warm leads for web design services.

### No website at all
- Poke Bros Food Truck
- Shave Ice Paradise Truck
- Aloha Acai Bowl Truck
- Spam Musubi Express Truck
- Teddy's Bigger Burgers - Haleiwa *(old domain was malware — 2026-04-13)*
- Cinnamon's Restaurant *(cinnamonskailua.com dead — 2026-04-13)*
- Ono Hawaiian Foods *(domain parked at hugedomains.com — 2026-04-13)*

### Social media only
- He'eia Pier General Store & Deli — Facebook only
- Fooki — Instagram only
- Spice Up House of Indian Cuisine — Instagram only
- Tadka Indian Cuisine — Google Maps only

---

## Changelog

### 2026-04-17
- Centered restaurant card grids across all sections (FeaturedRestaurants, CuisineGuide, IndianRestaurants)
- Centered cuisine category headers in CuisineGuide
- Coral Crater Adventure Park (id 34) was already in data but hidden — fixed category to "Extreme Adventures" so it appears on site
- Added Salvation Army Kroc Center Hawaii (adventure id 47, Water Activities)
- Added Wai Kai Wave & Lagoon (adventure id 49, Water Activities)
- Added Wet 'n' Wild Hawaii (adventure id 50, Water Activities, moved from Extreme Adventures)
- Added The LookOut Food & Drink at Wai Kai (restaurant id 102)
- Updated images: Wai Kai → wave pool surfer, Coral Crater → aerial obstacle course, Wet n Wild → waterpark
- Added mobile quick-nav strip: horizontal scrollable orange pill buttons (Home, Restaurants, Adventures, Golf, Where to Stay, Blog, About) below header on mobile
- Fixed mobile scroll offset — sections no longer hidden behind taller sticky header
- Matched adventure & golf category tab buttons to orange pill style (consistent across mobile and desktop)
- Obsidian-style project notes created at docs/OahuUnlocked.md

### 2026-04-16 (session 2)
- AdSense slot ID `9993349200` activated in `lib/adSlots.ts`
- Slot sourced from AdData.txt on pin drive (USB321FD)

### 2026-04-16 (session 1)
- "Our Take" editorial reviews added for all 30 gap-analysis listings
- Fixed white haze on CuisineGuide card images
- Fixed restaurant name overlay layout

### 2026-04-15
- 30 new listings added via Google Places gap analysis
- Nav bug fixed: blog/about page links now navigate back to homepage sections correctly
- `llms.txt` added at oahuunlocked.com/llms.txt

---

## To Do

- [ ] GolfNow affiliate — check dashboard for approval (applied 2026-04-12)
- [ ] AdSense — once approved, create separate ad units per placement for better tracking
- [ ] Re-run gap analysis in a few weeks to catch new openings
- [ ] Consider pitching web design to the no-website restaurant leads above

---

## Known Gotchas

- Always `git add` new data files explicitly — untracked files cause Vercel "Module not found" build failures
- AdSense env var is Production-only — ads won't appear on preview URLs or local dev
- Google Maps API key must be unrestricted (no HTTP referrer restriction) to run the gap analysis script server-side
