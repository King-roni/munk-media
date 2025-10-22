/**
 * Central Motion Configuration
 * Physics-based spring animations and global settings
 */

// Spring configurations for natural, physics-based motion
export const springConfigs = {
  // Gentle bounce - for page loads and large elements
  gentle: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  
  // Snappy - for interactive elements and buttons
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
    mass: 0.5,
  },
  
  // Bouncy - for playful elements
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 15,
    mass: 0.8,
  },
  
  // Smooth - for text reveals and subtle animations
  smooth: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 25,
    mass: 1,
  },
  
  // Magnetic - for cursor and hover effects
  magnetic: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 20,
    mass: 0.3,
  },
}

// Easing curves
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
}

// Transition presets
export const transitions = {
  // Page transitions
  pageEnter: {
    duration: 0.6,
    ease: easings.easeOutCubic,
  },
  pageExit: {
    duration: 0.4,
    ease: easings.easeInOutCubic,
  },
  
  // Element reveals
  fadeIn: {
    duration: 0.8,
    ease: easings.easeOutCubic,
  },
  slideUp: {
    duration: 0.7,
    ease: easings.easeOutCubic,
  },
  
  // Hover effects
  hover: {
    duration: 0.3,
    ease: easings.easeOutCubic,
  },
}

// Animation variants
export const variants = {
  // Page transitions
  page: {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  // Slide animations
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  },
  slideDown: {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  scaleOut: {
    initial: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  
  // Stagger children
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerFast: {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
}

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: '-100px',
}

// Parallax settings
export const parallaxSettings = {
  hero: {
    speed: 0.5,
    opacity: [1, 0],
  },
  background: {
    speed: 0.3,
    opacity: [0.8, 0.2],
  },
  foreground: {
    speed: 0.7,
    opacity: [1, 0.5],
  },
}

// Magnetic cursor settings
export const magneticSettings = {
  strength: 0.3,
  radius: 100,
  smoothing: 0.15,
}

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}


