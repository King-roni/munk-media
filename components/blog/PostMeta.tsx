import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock } from 'lucide-react'
import { BlogPost } from '@/lib/blog/types'

interface PostMetaProps {
  post: BlogPost
  showAuthor?: boolean
}

export function PostMeta({ post, showAuthor = true }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
      {showAuthor && (
        <Link 
          href={`/blog/author/${post.author.handle}`}
          className="flex items-center gap-2 hover:text-mm-brown transition-colors"
        >
          {post.author.avatar && (
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span className="font-medium">{post.author.name}</span>
        </Link>
      )}
      <time dateTime={post.date} className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        {new Date(post.date).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </time>
      {post.updated && post.updated !== post.date && (
        <span className="text-xs text-gray-500">
          (Updated {new Date(post.updated).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
          })})
        </span>
      )}
      <span className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {post.readingTime} min read
      </span>
    </div>
  )
}

