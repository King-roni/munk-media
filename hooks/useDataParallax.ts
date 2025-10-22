/**
 * Data-driven Parallax Hook
 * Attaches parallax effects to elements with data-parallax attribute
 */

'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from '@/lib/motion/config'
import { director } from '@/lib/motion/director'

gsap.registerPlugin(ScrollTrigger)

export function useDataParallax() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-parallax]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const parallaxType = element.getAttribute('data-parallax') as 'bg' | 'fg' | 'deep' | 'default'
        const speed = motion.parallax[parallaxType] || motion.parallax.default

        // Calculate movement distance
        const distance = -100 * speed

        gsap.to(element, {
          y: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Horizontal parallax for specific elements
 */
export function useHorizontalParallax() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-parallax-x]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax-x') || '0.5')
        const distance = -100 * speed

        gsap.to(element, {
          x: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Opacity fade parallax
 */
export function useOpacityParallax() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-parallax-fade]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const direction = element.getAttribute('data-parallax-fade') || 'out'
        const [start, end] = direction === 'in' ? [0, 1] : [1, 0]

        gsap.fromTo(element,
          { opacity: start },
          {
            opacity: end,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}

/**
 * Scale parallax effect
 */
export function useScaleParallax() {
  useEffect(() => {
    if (typeof window === 'undefined' || director.safe) return

    const elements = document.querySelectorAll('[data-parallax-scale]')
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const scale = parseFloat(element.getAttribute('data-parallax-scale') || '1.2')

        gsap.fromTo(element,
          { scale: 1 },
          {
            scale,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}

