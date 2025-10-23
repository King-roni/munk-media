'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { director } from '@/lib/motion/director'
import { motion } from '@/lib/motion/config'

gsap.registerPlugin(ScrollTrigger)

/**
 * Data-driven reveal animations
 * Attaches to elements with data-reveal attribute
 */
export function useDataReveals() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const direction = element.getAttribute('data-reveal') as 'up' | 'down' | 'left' | 'right' | 'scale'
        const delay = parseFloat(element.getAttribute('data-delay') || '0')
        const stagger = parseFloat(element.getAttribute('data-stagger') || '0')

        // Set initial state
        let initialTransform: gsap.TweenVars = { opacity: 0 }
        
        switch (direction) {
          case 'up':
            initialTransform.y = motion.reveal.distance
            break
          case 'down':
            initialTransform.y = -motion.reveal.distance
            break
          case 'left':
            initialTransform.x = motion.reveal.distance
            break
          case 'right':
            initialTransform.x = -motion.reveal.distance
            break
          case 'scale':
            initialTransform.scale = 0.8
            break
        }

        gsap.set(element, initialTransform)

        // Animate on scroll
        gsap.to(element, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: motion.reveal.duration,
          ease: motion.reveal.ease,
          delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true,
          },
        })

        // Handle stagger for child elements
        if (stagger > 0) {
          const children = element.querySelectorAll(':scope > *')
          children.forEach((child, index) => {
            gsap.set(child, initialTransform)
            gsap.to(child, {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: motion.reveal.duration,
              ease: motion.reveal.ease,
              delay: delay + (index * stagger),
              scrollTrigger: {
                trigger: child,
                start: 'top 80%',
                once: true,
              },
            })
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Data-driven pinned sections
 * Attaches to elements with data-pin attribute
 */
export function useDataPins() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-pin]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const duration = element.getAttribute('data-pin-duration') || '100%'
        const pinSpacing = element.getAttribute('data-pin-spacing') || '0px'

        ScrollTrigger.create({
          trigger: element,
          start: 'top top',
          end: `+=${duration}`,
          pin: true,
          pinSpacing,
          scrub: 1,
          onEnter: () => {
            // Optional: Add pin enter animation
            gsap.from(element, {
              scale: 0.95,
              opacity: 0.8,
              duration: 0.5,
            })
          },
          onLeave: () => {
            // Optional: Add pin leave animation
            gsap.to(element, {
              scale: 1,
              opacity: 1,
              duration: 0.5,
            })
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Data-driven kinetic typography
 * Attaches to elements with data-kt attribute
 */
export function useDataKineticType() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-kt]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const amplitude = parseFloat(element.getAttribute('data-kt-amplitude') || motion.kineticType.amplitude.toString())
        const frequency = parseFloat(element.getAttribute('data-kt-frequency') || motion.kineticType.frequency.toString())
        
        // Split text into characters
        const text = element.textContent || ''
        const chars = text.split('')
        
        element.innerHTML = ''
        
        chars.forEach((char, index) => {
          const span = document.createElement('span')
          span.textContent = char === ' ' ? '\u00A0' : char
          span.style.display = 'inline-block'
          span.setAttribute('data-char-index', index.toString())
          element.appendChild(span)
        })

        const charElements = element.querySelectorAll('[data-char-index]')

        // Animate characters on scroll
        charElements.forEach((char, index) => {
          gsap.to(char, {
            y: `+=${amplitude}`,
            duration: 0.5 + index * 0.02,
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
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Data-driven hover effects
 * Attaches to elements with data-hover attribute
 */
export function useDataHover() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-hover]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const effect = element.getAttribute('data-hover') as 'lift' | 'glow' | 'scale' | 'rotate'
        const intensity = parseFloat(element.getAttribute('data-hover-intensity') || '1')

        const handleMouseEnter = () => {
          switch (effect) {
            case 'lift':
              gsap.to(element, {
                y: -10 * intensity,
                boxShadow: `0 ${20 * intensity}px ${40 * intensity}px rgba(0,0,0,0.1)`,
                duration: 0.3,
                ease: 'power2.out',
              })
              break
            case 'glow':
              gsap.to(element, {
                boxShadow: `0 0 ${30 * intensity}px rgba(82, 52, 31, 0.5)`,
                duration: 0.3,
                ease: 'power2.out',
              })
              break
            case 'scale':
              gsap.to(element, {
                scale: 1 + (0.1 * intensity),
                duration: 0.3,
                ease: 'power2.out',
              })
              break
            case 'rotate':
              gsap.to(element, {
                rotation: 5 * intensity,
                duration: 0.3,
                ease: 'power2.out',
              })
              break
          }
        }

        const handleMouseLeave = () => {
          gsap.to(element, {
            y: 0,
            scale: 1,
            rotation: 0,
            boxShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
          })
        }

        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mouseleave', handleMouseLeave)
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Master hook that combines all data-driven effects
 */
export function useDataMotion() {
  useDataReveals()
  useDataPins()
  useDataKineticType()
  useDataHover()
}

