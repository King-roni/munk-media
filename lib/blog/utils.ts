import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost } from './types'

const contentDirectory = path.join(process.cwd(), 'content/blog')

function getAllPostDirectories(): string[] {
  const dirs: string[] = []
  
  function walkDir(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      // Skip template and special directories
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) {
        continue
      }
      
      if (entry.isDirectory()) {
        // Check if this directory contains an index.mdx
        const indexPath = path.join(fullPath, 'index.mdx')
        if (fs.existsSync(indexPath)) {
          dirs.push(fullPath)
        } else {
          // Recursively walk subdirectories
          walkDir(fullPath)
        }
      }
    }
  }
  
  if (fs.existsSync(contentDirectory)) {
    walkDir(contentDirectory)
  }
  
  return dirs
}

function parsePostFrontmatter(filePath: string): Partial<BlogPost> {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // Calculate reading time if not provided
  const calculatedReadingTime = data.readingTime || Math.ceil(readingTime(content).minutes)
  
  // Resolve cover image path
  const postDir = path.dirname(filePath)
  let coverSrc = data.cover?.src
  
  if (coverSrc && !coverSrc.startsWith('/') && !coverSrc.startsWith('http')) {
    const coverPath = path.join(postDir, coverSrc)
    if (fs.existsSync(coverPath)) {
      // Convert to web-accessible path
      const relativePath = path.relative(process.cwd(), coverPath)
      coverSrc = `/${relativePath.replace(/\\/g, '/')}`
    } else {
      coverSrc = undefined
    }
  }
  
  return {
    slug: data.slug || '',
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    updated: data.updated || undefined,
    author: {
      name: data.author?.name || 'Munk Media',
      handle: data.author?.handle || 'munk-media',
      avatar: data.author?.avatar || undefined,
    },
    category: data.category || 'Uncategorized',
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: coverSrc ? {
      src: coverSrc,
      alt: data.cover?.alt || '',
      credit: data.cover?.credit || undefined,
    } : undefined,
    readingTime: calculatedReadingTime,
    draft: data.draft === true,
    content,
  }
}

export function getAllPosts(options: { includeDraft?: boolean } = {}): BlogPost[] {
  const postDirs = getAllPostDirectories()
  const posts: BlogPost[] = []
  
  for (const dir of postDirs) {
    const indexPath = path.join(dir, 'index.mdx')
    
    if (fs.existsSync(indexPath)) {
      try {
        const post = parsePostFrontmatter(indexPath) as BlogPost
        
        // Skip drafts unless explicitly included
        if (post.draft && !options.includeDraft) {
          continue
        }
        
        // Skip if required fields are missing
        if (!post.slug || !post.title || !post.date) {
          continue
        }
        
        posts.push(post)
      } catch (error) {
        console.error(`Error parsing post in ${dir}:`, error)
      }
    }
  }
  
  // Sort by date descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts({ includeDraft: true })
  return allPosts.find(post => post.slug === slug) || null
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getPostsByAuthor(handle: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => 
    post.author.handle.toLowerCase() === handle.toLowerCase()
  )
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set<string>()
  posts.forEach(post => categories.add(post.category))
  return Array.from(categories).sort()
}

export function getPostsWithAdjacent(slug: string): {
  post: BlogPost | null
  prev: BlogPost | null
  next: BlogPost | null
} {
  const allPosts = getAllPosts({ includeDraft: true })
  const currentIndex = allPosts.findIndex(post => post.slug === slug)
  
  if (currentIndex === -1) {
    return { post: null, prev: null, next: null }
  }
  
  return {
    post: allPosts[currentIndex],
    prev: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}

export function getAllAuthors(): { name: string; handle: string; avatar?: string }[] {
  const posts = getAllPosts()
  const authorsMap = new Map<string, { name: string; handle: string; avatar?: string }>()
  
  posts.forEach(post => {
    if (!authorsMap.has(post.author.handle)) {
      authorsMap.set(post.author.handle, {
        name: post.author.name,
        handle: post.author.handle,
        avatar: post.author.avatar,
      })
    }
  })
  
  return Array.from(authorsMap.values()).sort((a, b) => 
    a.name.localeCompare(b.name)
  )
}

export function getTopTags(limit: number = 8): string[] {
  const posts = getAllPosts()
  const tagCounts = new Map<string, number>()
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
    })
  })
  
  return Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag)
}

