'use client'

import { useEffect, useRef } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { shouldReduceMotion } from '@/lib/motionConfig'

export interface ParallaxConfig {
  speed?: number
  opacity?: [number, number]
  scale?: [number, number]
  rotate?: [number, number]
}

/**
 * useParallax hook for scroll-based parallax effects
 * Returns motion values for y, opacity, scale, etc.
 */
export function useParallax(config: ParallaxConfig = {}) {
  const {
    speed = 0.5,
    opacity,
    scale,
    rotate,
  } = config

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Calculate parallax offset
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  
  // Optional opacity transformation
  const opacityValue = opacity 
    ? useTransform(scrollYProgress, [0, 1], opacity)
    : undefined
  
  // Optional scale transformation
  const scaleValue = scale
    ? useTransform(scrollYProgress, [0, 1], scale)
    : undefined
  
  // Optional rotate transformation
  const rotateValue = rotate
    ? useTransform(scrollYProgress, [0, 1], rotate)
    : undefined

  // If reduced motion is preferred, return static values
  if (shouldReduceMotion()) {
    return {
      ref,
      style: {},
      y: 0 as any,
      opacity: 1 as any,
      scale: 1 as any,
      rotate: 0 as any,
    }
  }

  return {
    ref,
    style: {
      y,
      opacity: opacityValue,
      scale: scaleValue,
      rotate: rotateValue,
    },
    y,
    opacity: opacityValue,
    scale: scaleValue,
    rotate: rotateValue,
    scrollYProgress,
  }
}

/**
 * Simple parallax for background elements
 */
export function useBackgroundParallax(speed = 0.3) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -300 * speed])
  
  if (shouldReduceMotion()) {
    return { y: 0 as any }
  }
  
  return { y }
}


