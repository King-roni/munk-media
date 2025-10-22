'use client'

import { useEffect, useRef } from 'react'
import { shouldReduceMotion } from '@/lib/motionConfig'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    if (shouldReduceMotion() || typeof window === 'undefined') return

    let Lenis: any
    
    const initLenis = async () => {
      // Dynamically import Lenis to avoid SSR issues
      const LenisModule = await import('lenis')
      Lenis = LenisModule.default

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    initLenis()

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}


