'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface BlogHeroProps {
  onSearch?: (query: string) => void
}

export function BlogHero({ onSearch }: BlogHeroProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  return (
    <section className="pt-40 pb-12 bg-gradient-to-br from-mm-stone/30 to-mm-ivory">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-mm-ink mb-4">
            The Munk <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Creative strategy, creator economy insights, and influencer marketing playbooks.
          </p>
          {onSearch && (
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-mm-brown focus:border-transparent"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

