'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Import GSAP dynamically to avoid SSR issues
let gsap: any

if (typeof window !== 'undefined') {
  gsap = require('gsap')
}

interface SmartButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function SmartButton({ children, onClick, variant = 'primary', className = '' }: SmartButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !buttonRef.current) return

    const button = buttonRef.current

    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      })

      // Create ripple effect
      const ripple = document.createElement('div')
      ripple.className = 'absolute inset-0 bg-mm-brown/20 rounded-full scale-0'
      button.appendChild(ripple)

      gsap.to(ripple, {
        scale: 2,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => ripple.remove()
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300"
  
  const variantClasses = variant === 'primary' 
    ? "bg-mm-ink text-mm-ivory hover:bg-mm-brown hover:text-mm-ivory border border-mm-brown/20"
    : "bg-transparent text-mm-ink border-2 border-mm-ink hover:bg-mm-ink hover:text-mm-ivory"

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'power2.out' }}
      viewport={{ once: true }}
    >
      {children}
      
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-mm-brown to-mm-stone opacity-0"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
