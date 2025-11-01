import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blog/types'
import { Calendar, Clock } from 'lucide-react'

interface PostCardProps {
  post: BlogPost
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="luxury-card overflow-hidden hover:shadow-xl transition-all duration-300">
          {post.cover && (
            <div className="relative w-full h-64 md:h-80 overflow-hidden bg-mm-stone/30">
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {post.cover.credit && (
                <div className="absolute bottom-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                  {post.cover.credit}
                </div>
              )}
            </div>
          )}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
              <span className="bg-mm-brown/10 text-mm-brown px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mm-ink mb-4 group-hover:text-mm-brown transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
              </div>
              <span className="text-mm-brown font-semibold group-hover:underline">
                Read more →
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="luxury-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {post.cover && (
          <div className="relative w-full h-48 overflow-hidden bg-mm-stone/30">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3 text-xs">
            <span className="bg-mm-brown/10 text-mm-brown px-2 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime} min
            </span>
          </div>
          <h3 className="text-xl font-bold text-mm-ink mb-2 group-hover:text-mm-brown transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
            <span className="text-mm-brown font-semibold group-hover:underline">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

