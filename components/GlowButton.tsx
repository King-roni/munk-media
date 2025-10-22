'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { springConfigs, shouldReduceMotion } from '@/lib/motionConfig'

interface GlowButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  glowColor?: string
}

export default function GlowButton({
  children,
  className = '',
  onClick,
  href,
  glowColor = 'rgba(82, 52, 31, 0.4)',
}: GlowButtonProps) {
  const [isHovering, setIsHovering] = useState(false)

  if (shouldReduceMotion()) {
    const Component = href ? 'a' : 'button'
    return (
      <Component 
        href={href} 
        onClick={onClick} 
        className={className}
      >
        {children}
      </Component>
    )
  }

  const Component = motion[href ? 'a' : 'button'] as any

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{
        scale: 1.05,
        transition: springConfigs.snappy,
      }}
      whileTap={{
        scale: 0.95,
        transition: springConfigs.snappy,
      }}
    >
      {/* Animated glow */}
      <motion.div
        className="absolute -inset-1 rounded-xl blur-lg opacity-0"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovering ? [0, 0.6, 0.4] : 0,
          scale: isHovering ? [1, 1.1, 1.05] : 1,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovering ? Infinity : 0,
          repeatType: 'reverse',
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden"
        initial={false}
        animate={{
          background: isHovering
            ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
            : 'transparent',
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            x: isHovering ? ['0%', '200%'] : '0%',
          }}
          transition={{
            duration: 1.5,
            repeat: isHovering ? Infinity : 0,
            ease: 'linear',
          }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
            width: '50%',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        animate={{
          y: isHovering ? -2 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </Component>
  )
}


