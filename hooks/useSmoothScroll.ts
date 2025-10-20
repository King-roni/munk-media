'use client'

import { useEffect, useRef } from 'react'

// Import Lenis dynamically to avoid SSR issues
let Lenis: any

if (typeof window !== 'undefined') {
  Lenis = require('lenis').default
}

export function useSmoothScroll() {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !Lenis) return

    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // RAF loop
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return lenisRef.current
}
