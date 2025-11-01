export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  author: {
    name: string
    handle: string
    avatar?: string
  }
  category: string
  tags: string[]
  cover?: {
    src: string
    alt: string
    credit?: string
  }
  readingTime: number
  draft: boolean
  content?: string
  mdxSource?: any
}

export interface BlogMetadata {
  categories: string[]
  tags: string[]
  authors: {
    name: string
    handle: string
    avatar?: string
  }[]
}

