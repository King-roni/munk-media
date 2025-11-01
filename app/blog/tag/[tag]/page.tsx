import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag, getAllCategories, getTopTags } from '@/lib/blog/utils'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { PostCard } from '@/components/blog/PostCard'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)
  const allTags = getAllTags()

  if (posts.length === 0 && !allTags.some(t => t.toLowerCase() === tag.toLowerCase())) {
    notFound()
  }

  const displayTag = allTags.find(t => t.toLowerCase() === tag.toLowerCase()) || tag
  const categories = getAllCategories()
  const topTags = getTopTags(8)

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <BlogHero />
      
      <BlogFilters 
        categories={categories}
        topTags={topTags}
        currentTag={displayTag}
      />

      <div className="container-max py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-mm-ink mb-2">
            #{displayTag}
          </h1>
          <p className="text-gray-600">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with this
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No posts with this tag yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  const tags = getAllTags()
  return tags.map(tag => ({
    tag: tag.toLowerCase(),
  }))
}

export const metadata = {
  title: 'Tag | Munk Media Blog',
}

