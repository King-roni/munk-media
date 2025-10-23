'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { director } from '@/lib/motion/director'
import { motion } from '@/lib/motion/config'

interface FXCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export default function FXCard({ 
  children, 
  className = '', 
  intensity = 1 
}: FXCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (director.safe || !cardRef.current) return

    const card = cardRef.current
    const shine = shineRef.current
    if (!card) return

    let mouseX = 0
    let mouseY = 0
    let cardX = 0
    let cardY = 0

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return

      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      mouseX = (e.clientX - centerX) / rect.width
      mouseY = (e.clientY - centerY) / rect.height

      // Calculate rotation based on mouse position
      const rotateX = mouseY * motion.tilt.max * intensity
      const rotateY = -mouseX * motion.tilt.max * intensity

      // Lerp rotation for smooth movement
      cardX += (rotateX - cardX) * 0.1
      cardY += (rotateY - cardY) * 0.1

      // Apply 3D transform
      gsap.to(card, {
        rotateX: cardX,
        rotateY: cardY,
        duration: 0.1,
        ease: 'none',
      })

      // Move shine effect
      if (shine) {
        const shineX = (mouseX + 1) * 50 // Convert to percentage
        gsap.to(shine, {
          x: `${shineX}%`,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      
      gsap.to(card, {
        scale: motion.tilt.scale,
        duration: 0.3,
        ease: 'power2.out',
      })

      if (shine) {
        gsap.to(shine, {
          opacity: 1,
          duration: 0.3,
        })
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)

      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      if (shine) {
        gsap.to(shine, {
          opacity: 0,
          duration: 0.3,
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovering, intensity])

  return (
    <div
      ref={cardRef}
      className={`fx-card relative overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: `${motion.tilt.perspective}px`,
        willChange: 'transform',
      }}
    >
      {/* Shine effect */}
      <div
        ref={shineRef}
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
          transform: 'translateX(-100%)',
        }}
      />

      {/* Content */}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>

      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, rgba(82, 52, 31, ${motion.tilt.glare}) 0%, transparent 70%)`,
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  )
}

