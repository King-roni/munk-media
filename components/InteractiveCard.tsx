'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Import GSAP dynamically to avoid SSR issues
let gsap: any

if (typeof window !== 'undefined') {
  gsap = require('gsap')
}

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function InteractiveCard({ children, className = '', delay = 0 }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !cardRef.current) return

    const card = cardRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        z: 50,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className={`bg-white rounded-3xl p-8 shadow-lg border border-mm-brown/10 transform-gpu ${className}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: 'power3.out'
      }}
      viewport={{ once: true }}
      whileHover={{ 
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
        borderColor: 'rgba(82, 52, 31, 0.3)'
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      
      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-mm-brown/5 to-transparent rounded-3xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
