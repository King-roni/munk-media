/**
 * Split Text Animation Utility
 * Splits text into words/characters with GSAP stagger animations
 */

import { gsap } from 'gsap'
import { motion } from '@/lib/motion/config'
import { director } from '@/lib/motion/director'

export interface SplitTextOptions {
  type?: 'chars' | 'words' | 'lines'
  stagger?: number
  duration?: number
  ease?: string
  distance?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  rotation?: number
  scale?: number
}

export interface SplitTextResult {
  elements: HTMLElement[]
  timeline: gsap.core.Timeline
  revert: () => void
}

/**
 * Split text element into animatable units
 */
export function splitText(
  element: HTMLElement | string,
  options: SplitTextOptions = {}
): SplitTextResult | null {
  if (typeof window === 'undefined') return null
  
  const {
    type = 'chars',
    stagger = motion.splitText.stagger,
    duration = motion.splitText.duration,
    ease = motion.splitText.ease,
    distance = motion.splitText.distance,
    direction = 'up',
    rotation = 0,
    scale = 0,
  } = options

  const target = typeof element === 'string' 
    ? document.querySelector(element) as HTMLElement
    : element

  if (!target) return null

  // Store original text
  const originalText = target.textContent || ''
  const originalHTML = target.innerHTML

  // Split based on type
  let units: string[] = []
  if (type === 'chars') {
    units = originalText.split('')
  } else if (type === 'words') {
    units = originalText.split(' ')
  } else if (type === 'lines') {
    units = originalText.split('\n')
  }

  // Clear and rebuild with spans
  target.innerHTML = ''
  target.style.display = 'block'

  const elements: HTMLElement[] = []
  
  units.forEach((unit, index) => {
    const span = document.createElement('span')
    span.textContent = unit
    span.style.display = 'inline-block'
    span.style.whiteSpace = type === 'lines' ? 'normal' : 'pre'
    span.setAttribute('data-split-index', index.toString())
    
    // Add space after words
    if (type === 'words' && index < units.length - 1) {
      const space = document.createTextNode(' ')
      target.appendChild(span)
      target.appendChild(space)
    } else {
      target.appendChild(span)
    }
    
    elements.push(span)
  })

  // Calculate initial transform based on direction
  let initialTransform: gsap.TweenVars = { opacity: 0 }
  
  switch (direction) {
    case 'up':
      initialTransform.y = distance
      break
    case 'down':
      initialTransform.y = -distance
      break
    case 'left':
      initialTransform.x = distance
      break
    case 'right':
      initialTransform.x = -distance
      break
  }
  
  if (rotation) {
    initialTransform.rotation = rotation
  }
  
  if (scale) {
    initialTransform.scale = scale
  }

  // Create animation timeline
  const tl = gsap.timeline({ paused: true })
  
  if (director.safe) {
    // Instant reveal in safe mode
    gsap.set(elements, { opacity: 1 })
  } else {
    tl.from(elements, {
      ...initialTransform,
      duration,
      ease,
      stagger: {
        each: stagger,
        from: 'start',
      },
      clearProps: 'all',
    })
  }

  // Revert function
  const revert = () => {
    target.innerHTML = originalHTML
    tl.kill()
  }

  return {
    elements,
    timeline: tl,
    revert,
  }
}

/**
 * Animate existing split text on scroll
 */
export function animateSplitOnScroll(
  element: HTMLElement | string,
  options: SplitTextOptions = {}
) {
  if (typeof window === 'undefined') return null
  
  const result = splitText(element, options)
  if (!result) return null

  const { ScrollTrigger } = require('gsap/ScrollTrigger')
  
  ScrollTrigger.create({
    trigger: typeof element === 'string' ? element : element,
    start: 'top 80%',
    once: true,
    onEnter: () => result.timeline.play(),
  })

  return result
}

/**
 * Create kinetic typography effect
 */
export function kineticType(
  element: HTMLElement | string,
  options: { amplitude?: number; frequency?: number } = {}
) {
  if (typeof window === 'undefined' || director.safe) return null

  const { amplitude = motion.kineticType.amplitude, frequency = motion.kineticType.frequency } = options

  const result = splitText(element, { type: 'chars' })
  if (!result) return null

  const { ScrollTrigger } = require('gsap/ScrollTrigger')

  result.elements.forEach((char, i) => {
    gsap.to(char, {
      y: `+=${amplitude}`,
      duration: 0.5 + i * 0.02,
      repeat: -1,
      yoyo: true,
      ease: motion.kineticType.ease,
      scrollTrigger: {
        trigger: char,
        start: 'top bottom',
        end: 'bottom top',
        scrub: frequency,
      },
    })
  })

  return result
}
