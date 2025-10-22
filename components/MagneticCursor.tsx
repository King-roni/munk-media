'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { magneticSettings, shouldReduceMotion } from '@/lib/motionConfig'

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'button'>('default')
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    if (shouldReduceMotion()) return

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('link')
        setIsHovering(true)
      } else if (
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.classList.contains('btn-luxury')
      ) {
        setCursorVariant('button')
        setIsHovering(true)
      } else {
        setCursorVariant('default')
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (shouldReduceMotion()) return null

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="bg-white rounded-full"
          animate={{
            width: isHovering ? 8 : 12,
            height: isHovering ? 8 : 12,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Cursor follower/glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border-2 border-mm-brown/30"
          style={{
            background: cursorVariant === 'button' 
              ? 'radial-gradient(circle, rgba(82, 52, 31, 0.15) 0%, transparent 70%)'
              : 'transparent',
          }}
          animate={{
            width: cursorVariant === 'button' ? 60 : cursorVariant === 'link' ? 45 : 35,
            height: cursorVariant === 'button' ? 60 : cursorVariant === 'link' ? 45 : 35,
            borderColor: isHovering ? 'rgba(82, 52, 31, 0.5)' : 'rgba(82, 52, 31, 0.3)',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  )
}


