'use client'

import { motion } from 'framer-motion'
import { viewportConfig, springConfigs, shouldReduceMotion } from '@/lib/motionConfig'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: RevealSectionProps) {
  if (shouldReduceMotion()) {
    return <div className={className}>{children}</div>
  }

  const directionVariants = {
    up: { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -60 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
    none: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  }

  const variant = directionVariants[direction]

  return (
    <motion.div
      className={className}
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={{ ...viewportConfig, once }}
      transition={{
        ...springConfigs.smooth,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Stagger reveal for grids and lists
 */
export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  if (shouldReduceMotion()) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Item for use inside StaggerReveal
 */
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: springConfigs.smooth,
        },
      }}
    >
      {children}
    </motion.div>
  )
}


