'use client'

import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'
import { springConfigs, viewportConfig } from '@/lib/motionConfig'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  opacity?: [number, number]
  scale?: [number, number]
  delay?: number
}

export default function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  opacity,
  scale,
  delay = 0,
}: ParallaxSectionProps) {
  const { ref, style } = useParallax({
    speed,
    opacity,
    scale,
  })

  return (
    <motion.section
      ref={ref as any}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{
        ...springConfigs.smooth,
        delay,
      }}
    >
      {children}
    </motion.section>
  )
}

/**
 * Parallax background layer
 */
export function ParallaxBackground({
  children,
  className = '',
  speed = 0.3,
}: {
  children?: React.ReactNode
  className?: string
  speed?: number
}) {
  const { y } = useParallax({ speed })

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  )
}


