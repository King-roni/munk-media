'use client'

import { useEffect, useRef } from 'react'

// Import GSAP dynamically to avoid SSR issues
let gsap: any

if (typeof window !== 'undefined') {
  gsap = require('gsap')
}

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorFollowerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap) return

    const cursor = cursorRef.current
    const cursorFollower = cursorFollowerRef.current

    if (!cursor || !cursorFollower) return

    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    // Follower animation
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1

      gsap.set(cursorFollower, {
        x: followerX,
        y: followerY
      })

      requestAnimationFrame(animateFollower)
    }

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0.8, opacity: 1 })
      gsap.to(cursorFollower, { scale: 2, opacity: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 0 })
      gsap.to(cursorFollower, { scale: 1, opacity: 0 })
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Start follower animation
    animateFollower()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return { cursorRef, cursorFollowerRef }
}
