import { notFound } from 'next/navigation'
import { getAllCategories, getPostsByCategory, getTopTags } from '@/lib/blog/utils'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { PostCard } from '@/components/blog/PostCard'
import { Pagination } from '@/components/blog/Pagination'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const POSTS_PER_PAGE = 12

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category)
  const posts = getPostsByCategory(category)
  const allCategories = getAllCategories()

  if (posts.length === 0 && !allCategories.some(c => c.toLowerCase() === category.toLowerCase())) {
    notFound()
  }

  const displayCategory = allCategories.find(c => c.toLowerCase() === category.toLowerCase()) || category
  const topTags = getTopTags(8)

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <BlogHero />
      
      <BlogFilters 
        categories={allCategories}
        topTags={topTags}
        currentCategory={displayCategory}
      />

      <div className="container-max py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-mm-ink mb-2">
            {displayCategory}
          </h1>
          <p className="text-gray-600">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
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
            <p className="text-xl text-gray-600">No posts in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map(category => ({
    category: category.toLowerCase(),
  }))
}

export const metadata = {
  title: 'Category | Munk Media Blog',
}

