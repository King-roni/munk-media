'use client'

import { useEffect, useRef } from 'react'

// Import GSAP and ScrollTrigger dynamically to avoid SSR issues
let gsap: any
let ScrollTrigger: any

if (typeof window !== 'undefined') {
  gsap = require('gsap')
  ScrollTrigger = require('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollAnimation() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (typeof window === 'undefined' || !gsap || !ScrollTrigger) return

    // Staggered text animation
    const animateText = (selector: string, delay: number = 0) => {
      gsap.fromTo(selector, 
        { 
          y: 100, 
          opacity: 0,
          rotationX: 90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          delay: delay,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Card animations
    const animateCards = (selector: string) => {
      gsap.fromTo(selector,
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: selector,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Parallax effects
    const createParallax = (selector: string, speed: number = 0.5) => {
      gsap.to(selector, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: selector,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

    // Apply animations
    animateText('.animate-text')
    animateCards('.animate-card')
    createParallax('.parallax-bg', 0.3)
    createParallax('.parallax-slow', 0.1)

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
    }
  }, [])

  return { sectionRefs }
}
