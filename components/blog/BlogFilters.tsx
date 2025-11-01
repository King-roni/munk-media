'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import Link from 'next/link'

interface BlogFiltersProps {
  categories: string[]
  topTags: string[]
  currentCategory?: string
  currentTag?: string
}

export function BlogFilters({ 
  categories, 
  topTags, 
  currentCategory,
  currentTag 
}: BlogFiltersProps) {
  return (
    <section className="py-6 bg-white border-b border-mm-stone/50 sticky top-20 z-40">
      <div className="container-max">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-mm-brown">
            <Filter className="w-4 h-4" />
            <span className="font-medium text-sm">Filter:</span>
          </div>

          {/* Category Dropdown */}
          <select 
            defaultValue={currentCategory || ''}
            onChange={(e) => {
              if (e.target.value) {
                window.location.href = `/blog/category/${encodeURIComponent(e.target.value.toLowerCase())}`
              } else {
                window.location.href = '/blog'
              }
            }}
            className="px-4 py-2 border border-mm-stone rounded-lg text-mm-ink focus:ring-2 focus:ring-mm-brown focus:border-transparent text-sm"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Tag Cloud */}
          <div className="flex flex-wrap gap-2 flex-1">
            <span className="text-sm text-gray-600 mr-2">Tags:</span>
            {topTags.map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  currentTag?.toLowerCase() === tag.toLowerCase()
                    ? 'bg-mm-brown text-mm-ivory'
                    : 'bg-mm-stone/30 text-mm-ink hover:bg-mm-brown hover:text-mm-ivory'
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

