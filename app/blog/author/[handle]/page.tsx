import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getAllAuthors, getPostsByAuthor, getAllCategories, getTopTags } from '@/lib/blog/utils'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { PostCard } from '@/components/blog/PostCard'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AuthorPage({ params }: { params: { handle: string } }) {
  const handle = decodeURIComponent(params.handle)
  const posts = getPostsByAuthor(handle)
  const allAuthors = getAllAuthors()

  const author = allAuthors.find(a => a.handle.toLowerCase() === handle.toLowerCase())

  if (!author || posts.length === 0) {
    notFound()
  }

  const categories = getAllCategories()
  const topTags = getTopTags(8)

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <BlogHero />
      
      <BlogFilters 
        categories={categories}
        topTags={topTags}
      />

      <div className="container-max py-12">
        {/* Author Header */}
        <div className="luxury-card mb-12">
          <div className="flex items-start gap-6">
            {author.avatar && (
              <Image
                src={author.avatar}
                alt={author.name}
                width={120}
                height={120}
                className="rounded-full"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold text-mm-ink mb-2">{author.name}</h1>
              <p className="text-gray-600 mb-4">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'} published
              </p>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No posts by this author yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  const authors = getAllAuthors()
  return authors.map(author => ({
    handle: author.handle,
  }))
}

export const metadata = {
  title: 'Author | Munk Media Blog',
}

