'use client'

import { createContext, useContext, useState, useEffect, useRef, useMemo, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { director } from '@/lib/motion/director'
import { motion as motionConfig } from '@/lib/motion/config'

// Dynamic import for Lenis
let Lenis: any = null
if (typeof window !== 'undefined') {
  import('@studio-freight/lenis').then(mod => {
    Lenis = mod.default
  })
}

interface MotionContextType {
  safeMode: boolean
  setSafeMode: (safe: boolean) => void
  lenis: any | null
  gpu: number
  fps: number
}

const MotionContext = createContext<MotionContextType>({
  safeMode: false,
  setSafeMode: () => {},
  lenis: null,
  gpu: 1,
  fps: 60,
})

export const useMotion = () => useContext(MotionContext)

interface MotionProviderProps {
  children: ReactNode
}

export default function MotionProvider({ children }: MotionProviderProps) {
  const [safeMode, setSafeMode] = useState(true) // Start with safe mode for SSR
  const [gpu, setGpu] = useState(1)
  const [fps, setFps] = useState(60)
  const lenisRef = useRef<any>(null)
  const pathname = usePathname()

  // Check for safe mode on client
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const envSafeMode = process.env.NEXT_PUBLIC_SAFE_MODE === 'true'
    const shouldBeSafe = reducedMotion || envSafeMode
    
    setSafeMode(shouldBeSafe)
    setGpu(director.gpu)
    setFps(director.fps)
  }, [])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (safeMode || !Lenis || typeof window === 'undefined') return

    const initLenis = async () => {
      const LenisModule = await import('@studio-freight/lenis')
      const LenisClass = LenisModule.default

      const lenis = new LenisClass({
        duration: motionConfig.smoothScroll.duration,
        easing: motionConfig.smoothScroll.easing,
        smoothWheel: motionConfig.smoothScroll.smoothWheel,
        wheelMultiplier: 1.2, // Increase wheel responsiveness
        touchMultiplier: 2, // Smooth touch on mobile
        infinite: false,
      })

      lenisRef.current = lenis
      director.lenis = lenis

      // Animation loop
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Sync with ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update)

      // Refresh on resize
      const handleResize = () => ScrollTrigger.refresh()
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
        lenis.destroy()
      }
    }

    const cleanup = initLenis()
    return () => {
      cleanup.then(fn => fn && fn())
      director.lenis = null
    }
  }, [safeMode])

  // Page load animation
  useEffect(() => {
    if (safeMode || typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Logo micro-bounce
      const logo = document.querySelector('[data-logo]')
      if (logo) {
        gsap.from(logo, {
          scale: 0.96,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        })
      }
    })

    return () => ctx.revert()
  }, [pathname, safeMode])

  return (
    <MotionContext.Provider value={{ safeMode, setSafeMode, lenis: lenisRef.current, gpu, fps }}>
      {children}
    </MotionContext.Provider>
  )
}
