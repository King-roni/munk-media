import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath?: string
}

export function Pagination({ currentPage, totalPages, basePath = '/blog' }: PaginationProps) {
  if (totalPages <= 1) return null

  const prevPage = currentPage > 1 ? currentPage - 1 : null
  const nextPage = currentPage < totalPages ? currentPage + 1 : null

  return (
    <nav className="flex items-center justify-center gap-4 mt-12" aria-label="Pagination">
      {prevPage ? (
        <Link
          href={prevPage === 1 ? basePath : `${basePath}?page=${prevPage}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-mm-brown text-mm-ivory hover:opacity-90 transition-opacity"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </span>
      )}

      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      {nextPage ? (
        <Link
          href={`${basePath}?page=${nextPage}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-mm-brown text-mm-ivory hover:opacity-90 transition-opacity"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  )
}

