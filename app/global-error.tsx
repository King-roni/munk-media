'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen grid place-items-center p-6 bg-luxury-white">
          <div className="max-w-md text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">!</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-luxury-black">Application Error</h1>
              <p className="text-gray-600">
                A critical error occurred. Please refresh the page or contact support if the problem persists.
              </p>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => reset()}
                className="px-6 py-3 bg-luxury-black text-white rounded-full hover:bg-luxury-gold hover:text-luxury-black transition-colors font-semibold"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 border border-luxury-black text-luxury-black rounded-full hover:bg-luxury-black hover:text-white transition-colors font-semibold"
              >
                Go Home
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left bg-gray-100 p-4 rounded-lg">
                <summary className="cursor-pointer font-semibold text-sm">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">
                  {error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
