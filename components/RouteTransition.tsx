'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { director } from '@/lib/motion/director'
import { motion } from '@/lib/motion/config'

interface RouteTransitionProps {
  children: React.ReactNode
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const previousPathnameRef = useRef<string>()

  useEffect(() => {
    if (director.safe || !containerRef.current) return

    const container = containerRef.current
    const isInitialLoad = !previousPathnameRef.current

    if (isInitialLoad) {
      // First load - just fade in
      gsap.from(container, {
        opacity: 0,
        y: 20,
        duration: motion.pageTransition.in.duration,
        ease: motion.pageTransition.in.ease,
        delay: motion.pageTransition.in.delay,
      })
    } else {
      // Route change - transition out then in
      const tl = gsap.timeline()

      // Find shared elements
      const sharedElements = document.querySelectorAll('[data-se]')
      const sharedElementMap = new Map()

      sharedElements.forEach((el) => {
        const key = el.getAttribute('data-se')
        if (key) {
          const rect = el.getBoundingClientRect()
          sharedElementMap.set(key, {
            element: el,
            rect: rect,
            originalTransform: el.style.transform,
          })
        }
      })

      // Out transition
      tl.to(container, {
        opacity: 0,
        y: -20,
        duration: motion.pageTransition.out.duration,
        ease: motion.pageTransition.out.ease,
      })

      // Shared element morph
      if (sharedElementMap.size > 0) {
        sharedElementMap.forEach((data, key) => {
          const { element, rect } = data
          tl.to(element, {
            scale: 0.9,
            opacity: 0.7,
            duration: motion.sharedElement.duration,
            ease: motion.sharedElement.ease,
          }, 0)
        })
      }

      // In transition
      tl.set(container, { opacity: 0, y: 20 })
      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: motion.pageTransition.in.duration,
        ease: motion.pageTransition.in.ease,
      })

      // Restore shared elements
      if (sharedElementMap.size > 0) {
        sharedElementMap.forEach((data, key) => {
          const { element, originalTransform } = data
          tl.to(element, {
            scale: 1,
            opacity: 1,
            duration: motion.sharedElement.duration,
            ease: motion.sharedElement.ease,
          }, '-=0.3')
        })
      }
    }

    previousPathnameRef.current = pathname
  }, [pathname])

  return (
    <div ref={containerRef} className="route-transition-container">
      {children}
    </div>
  )
}
