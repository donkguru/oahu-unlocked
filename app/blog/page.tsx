import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/data/posts'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Oahu Travel Blog — Tips, Guides & Local Advice | OahuUnlocked',
  description: 'Expert guides to restaurants, hiking, golf, and local food on Oahu Hawaii. Written by locals who know the island.',
  alternates: { canonical: 'https://oahuunlocked.com/blog' },
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto max-w-4xl px-6 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Oahu Travel Blog</h1>
            <p className="text-xl text-muted-foreground">Local guides, tips, and insider advice for visiting Oahu, Hawaii.</p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row gap-6 rounded-2xl border bg-card p-5 hover:border-primary hover:shadow-md transition-all">
                  <div className="sm:w-56 flex-shrink-0 h-40 sm:h-36 rounded-xl overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-xs text-muted-foreground mb-2">{formatDate(post.date)}</p>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <span className="mt-3 text-sm font-semibold text-primary">Read more →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
