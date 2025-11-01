'use client'

import { Twitter, Linkedin, Link2, Check } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  url: string
  description?: string
}

export function ShareButtons({ title, url, description = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${url}`
    : url

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(title)
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(fullUrl)}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="flex items-center gap-3 pt-6 border-t border-mm-stone/50">
      <span className="text-sm font-medium text-gray-600">Share:</span>
      <button
        onClick={shareOnTwitter}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors group"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5 text-gray-600 group-hover:text-blue-500" />
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center transition-colors group"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
      </button>
      <button
        onClick={handleCopy}
        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors group"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <Link2 className="w-5 h-5 text-gray-600 group-hover:text-mm-brown" />
        )}
      </button>
    </div>
  )
}

