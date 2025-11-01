import { notFound } from 'next/navigation'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug, getPostsWithAdjacent } from '@/lib/blog/utils'
import { PostMeta } from '@/components/blog/PostMeta'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { Callout } from '@/components/blog/Callout'
import { PostCard } from '@/components/blog/PostCard'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const components = {
  Callout,
  h1: (props: any) => <h1 className="text-4xl font-bold text-mm-ink mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-mm-ink mt-8 mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-mm-ink mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed text-gray-700" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => <a className="text-mm-brown hover:underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-mm-brown pl-4 italic my-6 text-gray-600" {...props} />
  ),
  img: (props: any) => (
    <div className="my-8">
      <img className="w-full rounded-lg" {...props} />
      {props.alt && !props.alt.startsWith('http') && (
        <p className="text-sm text-gray-500 mt-2 text-center">{props.alt}</p>
      )}
    </div>
  ),
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { post, prev, next } = getPostsWithAdjacent(params.slug)

  if (!post || post.draft) {
    notFound()
  }

  // Get related posts (same category or shared tags)
  const allPosts = (await import('@/lib/blog/utils')).getAllPosts()
  const relatedPosts = allPosts
    .filter(p => 
      p.slug !== post.slug && 
      (p.category === post.category || 
       p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3)

  // Parse MDX content
  let mdxSource
  if (post.content) {
    mdxSource = await serialize(post.content, {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    })
  }

  return (
    <main className="min-h-screen bg-mm-ivory">
      <Navigation />
      
      <article className="container-max pt-40 pb-12">
        {/* Header */}
        <header className="max-w-3xl mx-auto mb-8">
          <div className="mb-4">
            <Link 
              href={`/blog/category/${encodeURIComponent(post.category.toLowerCase())}`}
              className="inline-block bg-mm-brown/10 text-mm-brown px-4 py-2 rounded-full font-medium text-sm hover:bg-mm-brown hover:text-mm-ivory transition-colors"
            >
              {post.category}
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-mm-ink mb-6">
            {post.title}
          </h1>
          <PostMeta post={post} />
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="text-xs bg-mm-stone/30 text-mm-ink px-3 py-1 rounded-full hover:bg-mm-brown hover:text-mm-ivory transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        {post.cover && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden bg-mm-stone/30">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {post.cover.credit && (
                <div className="absolute bottom-4 right-4 text-sm text-white bg-black/60 px-3 py-1 rounded">
                  {post.cover.credit}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-mm-ink prose-a:text-mm-brown prose-strong:text-mm-ink">
          {mdxSource && <MDXRemote {...mdxSource} components={components} />}
        </div>

        {/* Share */}
        <div className="max-w-3xl mx-auto mt-12">
          <ShareButtons title={post.title} url={`/blog/${post.slug}`} description={post.description} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto mt-16 pt-12 border-t border-mm-stone/50">
            <h2 className="text-2xl font-bold text-mm-ink mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className="max-w-3xl mx-auto mt-16 pt-12 border-t border-mm-stone/50">
          <div className="grid grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/blog/${prev.slug}`}
                className="group p-4 rounded-lg border border-mm-stone/50 hover:border-mm-brown hover:bg-mm-brown/5 transition-colors"
              >
                <div className="text-sm text-gray-600 mb-1">Previous Post</div>
                <div className="font-semibold text-mm-ink group-hover:text-mm-brown">
                  {prev.title}
                </div>
              </Link>
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}`}
                className="group p-4 rounded-lg border border-mm-stone/50 hover:border-mm-brown hover:bg-mm-brown/5 transition-colors text-right"
              >
                <div className="text-sm text-gray-600 mb-1">Next Post</div>
                <div className="font-semibold text-mm-ink group-hover:text-mm-brown">
                  {next.title}
                </div>
              </Link>
            )}
          </div>
        </nav>
      </article>

      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post || post.draft) {
    return {
      title: 'Post Not Found | Munk Media Blog',
    }
  }

  const ogImage = post.cover?.src || '/og-default.jpg'

  return {
    title: `${post.title} | Munk Media Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  }
}

