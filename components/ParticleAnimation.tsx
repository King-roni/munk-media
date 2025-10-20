'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function ParticleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particles: HTMLDivElement[] = []
    let ctx: gsap.Context | undefined

    const initParticles = () => {
      // Create particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div')
        particle.className = 'absolute w-1 h-1 bg-mm-brown/20 rounded-full'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        container.appendChild(particle)
        particles.push(particle)
      }

      // Animate particles with GSAP context
      ctx = gsap.context(() => {
        particles.forEach((particle, index) => {
          gsap.set(particle, {
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
          })

          gsap.to(particle, {
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.02
          })

          gsap.to(particle, {
            scale: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 2 + 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.03
          })
        })
      }, container)
    }

    // Use requestAnimationFrame to ensure DOM is ready
    const raf = requestAnimationFrame(initParticles)

    return () => {
      cancelAnimationFrame(raf)
      if (ctx) ctx.revert()
      particles.forEach(particle => particle.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
