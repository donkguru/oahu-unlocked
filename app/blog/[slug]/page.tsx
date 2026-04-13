import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPost } from '@/data/posts'
import { ChevronLeft } from 'lucide-react'
import Header from '@/components/Header'
import { BreadcrumbStructuredData, FAQStructuredData } from '@/components/seo/StructuredData'

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | OahuUnlocked`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://oahuunlocked.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  // Build FAQ schema from any h2 + following p sections
  const faqs = post.sections
    .reduce<Array<{ q: string; a: string }>>((acc, section, i) => {
      if (section.type === 'h2' && post.sections[i + 1]?.type === 'p') {
        acc.push({
          q: section.content as string,
          a: post.sections[i + 1].content as string,
        })
      }
      return acc
    }, [])
    .slice(0, 5)

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <BreadcrumbStructuredData items={[
        { name: 'Home', url: 'https://oahuunlocked.com' },
        { name: 'Blog', url: 'https://oahuunlocked.com/blog' },
        { name: post.title, url: `https://oahuunlocked.com/blog/${slug}` },
      ]} />
      {faqs.length > 0 && (
        <FAQStructuredData faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      )}
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-white/80 hover:text-white mb-3 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                All Articles
              </Link>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">{post.title}</h1>
              <p className="text-sm text-white/70 mt-2">{formatDate(post.date)} · By {post.author}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="container mx-auto max-w-3xl px-6 py-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">
            {post.excerpt}
          </p>

          <div className="prose-content space-y-5">
            {post.sections.map((section, i) => {
              if (section.type === 'h2') {
                return <h2 key={i} className="text-2xl font-bold mt-10 mb-3 text-foreground">{section.content as string}</h2>
              }
              if (section.type === 'h3') {
                return <h3 key={i} className="text-xl font-semibold mt-6 mb-2 text-foreground">{section.content as string}</h3>
              }
              if (section.type === 'p') {
                return <p key={i} className="text-base text-foreground/80 leading-relaxed">{section.content as string}</p>
              }
              if (section.type === 'ul') {
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {(section.content as string[]).map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (section.type === 'tip') {
                return (
                  <div key={i} className="rounded-xl bg-accent/10 border border-accent/30 p-4">
                    <p className="text-sm font-semibold text-accent mb-1">Local Tip</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{section.content as string}</p>
                  </div>
                )
              }
              return null
            })}
          </div>

          {/* More articles */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-xl font-bold mb-6">More from OahuUnlocked</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-xl border bg-card overflow-hidden hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="h-32 overflow-hidden bg-muted">
                      <img
                        src={p.image}
                        alt={p.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground mb-1">{formatDate(p.date)}</p>
                      <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">{p.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  )
}
