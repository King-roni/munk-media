'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from '@/lib/motion/config'
import { director } from '@/lib/motion/director'

export default function MagneticCursorUltra() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const magneticTarget = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return
    
    // Hide on touch devices
    if ('ontouchstart' in window) return

    setIsVisible(true)

    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

      let currentScale = 1
      let targetScale = 1

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }

      // Check for magnetic elements
      const target = (e.target as HTMLElement).closest('[data-magnetic]') as HTMLElement
      
      if (target && target !== magneticTarget.current) {
        magneticTarget.current = target
        targetScale = 1.6 // hover scale
      } else if (!target && magneticTarget.current) {
        magneticTarget.current = null
        targetScale = 1
      }

      // Magnetic pull effect
      if (magneticTarget.current) {
        const rect = magneticTarget.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        )

        if (distance < motion.cursor.magnetic.distance) {
          const pull = (1 - distance / motion.cursor.magnetic.distance) * motion.cursor.magnetic.strength
          const dx = (centerX - e.clientX) * pull * 20
          const dy = (centerY - e.clientY) * pull * 20
          
          gsap.to(magneticTarget.current, {
            x: -dx,
            y: -dy,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      }
    }

    // Mouse down/up handlers
    const handleMouseDown = () => {
      targetScale = 0.8 // click scale
    }

    const handleMouseUp = () => {
      targetScale = magneticTarget.current ? 1.6 : 1
    }

    // Reset magnetic elements
    const handleMouseLeave = () => {
      if (magneticTarget.current) {
        gsap.to(magneticTarget.current, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        })
        magneticTarget.current = null
      }
    }

    // Animation loop with lerp
    let animationFrameId: number
    const animate = () => {
      // Lerp cursor position
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * motion.cursor.lerp
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * motion.cursor.lerp

      // Lerp scale
      currentScale += (targetScale - currentScale) * 0.1

      // Update cursor position
      if (cursor) {
        cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) scale(${currentScale})`
      }

      // Update dot position (faster follow)
      if (cursorDot) {
        cursorDot.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.querySelectorAll('[data-magnetic]').forEach(el => {
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Cursor ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          mixBlendMode: 'difference',
          filter: 'url(#goo)',
        }}
      >
        <div className="w-full h-full border-2 border-white rounded-full" />
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          mixBlendMode: 'difference',
        }}
      />

      {/* SVG Gooey filter */}
      <svg className="fixed top-0 left-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>
    </>
  )
}

