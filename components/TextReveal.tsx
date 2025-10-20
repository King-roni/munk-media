'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const text = textRef.current
    const words = text.textContent?.split(' ') || []
    let ctx: gsap.Context | undefined
    
    const initAnimation = () => {
      // Clear text and wrap each word in a span
      text.innerHTML = words.map(word => `<span class="inline-block opacity-0 translate-y-full">${word}</span>`).join(' ')

      const spans = text.querySelectorAll('span')

      ctx = gsap.context(() => {
        gsap.fromTo(spans,
          {
            y: 100,
            opacity: 0,
            rotationX: 90
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            delay: delay,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }, text)
    }

    const raf = requestAnimationFrame(initAnimation)

    return () => {
      cancelAnimationFrame(raf)
      if (ctx) ctx.revert()
    }
  }, [delay])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}
