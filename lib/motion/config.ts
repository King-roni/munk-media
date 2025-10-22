/**
 * Central Motion Configuration
 * All animation timings, easings, and thresholds
 */

export const motion = {
  // Base timing
  base: {
    dur: 0.9,
    ease: "power3.inOut",
  },
  
  // Spring physics
  spring: {
    stiffness: 120,
    damping: 16,
    mass: 1,
  },
  
  // Reveal animations
  reveal: {
    stagger: 0.035,
    distance: 60,
    duration: 0.8,
    ease: "power3.out",
  },
  
  // Parallax speeds
  parallax: {
    bg: 0.25,    // Background - slowest
    fg: 0.6,     // Foreground - faster
    deep: 0.15,  // Deep background - very slow
    default: 0.4, // Default parallax
  },
  
  // Cursor effects
  cursor: {
    lerp: 0.15,
    magnetic: {
      distance: 80,
      strength: 0.4,
    },
    scale: {
      default: 1,
      hover: 1.6,
      click: 0.8,
    },
  },
  
  // 3D effects
  tilt: {
    max: 15,       // Max rotation degrees
    perspective: 1000,
    scale: 1.02,
    glare: 0.3,
  },
  
  // Page transitions
  pageTransition: {
    out: {
      duration: 0.4,
      ease: "power2.in",
    },
    in: {
      duration: 0.6,
      ease: "power2.out",
      delay: 0.1,
    },
  },
  
  // Shared element morph
  sharedElement: {
    duration: 0.7,
    ease: "power3.inOut",
  },
  
  // Split text
  splitText: {
    stagger: 0.03,
    duration: 0.6,
    ease: "power2.out",
    distance: 20,
  },
  
  // Kinetic typography
  kineticType: {
    amplitude: 3,
    frequency: 0.5,
    ease: "elastic.out(1, 0.5)",
  },
  
  // Performance thresholds
  thresholds: {
    gpu: 0.7,        // GPU capability check (0-1)
    fps: 50,         // Minimum FPS for heavy effects
    reducedMotion: true, // Respect user preference
  },
  
  // Displacement effects
  displacement: {
    strength: 0.3,
    duration: 0.8,
    ease: "power2.out",
  },
  
  // Smooth scroll (Lenis)
  smoothScroll: {
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  },
} as const

export type MotionConfig = typeof motion

