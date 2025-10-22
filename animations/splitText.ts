/**
 * Split Text Animation Utilities
 * Character-by-character and word-by-word reveal animations
 */

export interface SplitTextConfig {
  type?: 'chars' | 'words' | 'lines'
  delay?: number
  stagger?: number
  duration?: number
}

/**
 * Split text into animatable units
 */
export function splitText(text: string, type: 'chars' | 'words' | 'lines' = 'chars'): string[] {
  switch (type) {
    case 'chars':
      return text.split('')
    case 'words':
      return text.split(' ')
    case 'lines':
      return text.split('\n')
    default:
      return text.split('')
  }
}

/**
 * Framer Motion variants for split text animations
 */
export const splitTextVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

export const splitTextVariantsFast = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

export const splitTextVariantsSlide = {
  hidden: {
    opacity: 0,
    x: -20,
    rotateY: 90,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

/**
 * GSAP-based split text reveal
 * Use this for more complex animations with ScrollTrigger
 */
export function gsapSplitTextReveal(
  element: HTMLElement,
  config: SplitTextConfig = {}
) {
  const { type = 'chars', delay = 0, stagger = 0.03, duration = 0.6 } = config
  
  if (typeof window === 'undefined') return
  
  const text = element.textContent || ''
  const units = splitText(text, type)
  
  // Clear existing content
  element.innerHTML = ''
  
  // Wrap each unit in a span
  units.forEach((unit, index) => {
    const span = document.createElement('span')
    span.textContent = unit
    span.style.display = 'inline-block'
    span.style.opacity = '0'
    span.style.transform = 'translateY(20px)'
    span.setAttribute('data-index', index.toString())
    
    // Preserve spaces
    if (unit === ' ') {
      span.style.width = '0.25em'
    }
    
    element.appendChild(span)
  })
  
  // Return cleanup function
  return () => {
    element.textContent = text
  }
}


