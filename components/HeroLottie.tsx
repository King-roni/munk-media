'use client'

import { useEffect, useState, useRef } from 'react'
import Lottie from 'lottie-react'

export default function HeroLottie() {
  const [animationData, setAnimationData] = useState(null)
  const [mounted, setMounted] = useState(false)
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    setMounted(true)
    
    // Load the Lottie file dynamically
    fetch('/Website-landing-page-with-blocs.json')
      .then(res => res.json())
      .then(data => {
        console.log('✅ Lottie file loaded successfully')
        setAnimationData(data)
      })
      .catch(err => {
        console.error('❌ Failed to load Lottie file:', err)
      })
  }, [])

  // Handle tab visibility for performance
  useEffect(() => {
    if (!lottieRef.current || !mounted) return

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lottieRef.current?.pause()
      } else {
        lottieRef.current?.play()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [mounted])

  // Handle prefers-reduced-motion
  useEffect(() => {
    if (!lottieRef.current) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleReducedMotion = () => {
      if (mediaQuery.matches) {
        lottieRef.current?.goToAndStop(0, true)
      } else {
        lottieRef.current?.play()
      }
    }

    handleReducedMotion()
    mediaQuery.addEventListener('change', handleReducedMotion)
    
    return () => mediaQuery.removeEventListener('change', handleReducedMotion)
  }, [mounted, animationData])

  if (!mounted || !animationData) {
    return null
  }

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity: 0.28,
        zIndex: 1, // Behind text/CTA content
        background: 'transparent',
        mixBlendMode: 'normal',
      }}
      aria-hidden="true"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
          clearCanvas: true,
        }}
      />
    </div>
  )
}
