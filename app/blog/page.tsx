import { getAllPosts, getAllCategories, getTopTags } from '@/lib/blog/utils'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { PostCard } from '@/components/blog/PostCard'
import { Pagination } from '@/components/blog/Pagination'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


const POSTS_PER_PAGE = 12

export default function BlogPage() {
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const topTags = getTopTags(8)
  
  // Get featured post (most recent)
  const featuredPost = allPosts[0] || null
  const otherPosts = allPosts.slice(1)
  
  // Pagination
  const totalPages = Math.ceil(otherPosts.length / POSTS_PER_PAGE)
  const currentPage = 1
  const paginatedPosts = otherPosts.slice(0, POSTS_PER_PAGE)

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      <BlogHero />
      
      <BlogFilters 
        categories={categories}
        topTags={topTags}
      />

      <div className="container-max py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-mm-ink mb-6">Featured Post</h2>
            <PostCard post={featuredPost} featured />
          </div>
        )}

        {/* Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-mm-ink">All Posts</h2>
              <span className="text-gray-600">{allPosts.length} posts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}

export const metadata = {
  title: 'Blog | Munk Media',
  description: 'Creative strategy, creator economy insights, and influencer marketing playbooks from Munk Media.',
}

