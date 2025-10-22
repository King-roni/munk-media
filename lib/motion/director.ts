/**
 * Motion Director - Singleton for centralized animation orchestration
 * Manages GSAP timelines, plugins, and Lenis instance
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type Lenis from '@studio-freight/lenis'
import { motion } from './config'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type TimelineKey = string
type EaseKey = keyof typeof motion.base

class MotionDirector {
  private timelines: Map<TimelineKey, gsap.core.Timeline>
  private _lenis: Lenis | null = null
  private _safeMode: boolean = false
  private _gpu: number = 1
  private _fps: number = 60

  constructor() {
    this.timelines = new Map()
    
    if (typeof window !== 'undefined') {
      this._safeMode = this.checkReducedMotion()
      this._gpu = this.estimateGPU()
      this.measureFPS()
    }
  }

  /**
   * Check if reduced motion is preferred
   */
  private checkReducedMotion(): boolean {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  /**
   * Estimate GPU capability (simplified)
   */
  private estimateGPU(): number {
    if (typeof window === 'undefined') return 0.5
    
    // Check for hardware acceleration hints
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) return 0.3
    
    // Basic capability check
    const renderer = (gl as WebGLRenderingContext).getParameter(
      (gl as WebGLRenderingContext).RENDERER
    )
    
    // Higher score for discrete GPUs
    if (typeof renderer === 'string') {
      if (renderer.includes('NVIDIA') || renderer.includes('AMD')) return 1
      if (renderer.includes('Intel')) return 0.6
    }
    
    return 0.7
  }

  /**
   * Measure average FPS
   */
  private measureFPS() {
    if (typeof window === 'undefined') return
    
    let frames = 0
    let lastTime = performance.now()
    
    const measure = () => {
      frames++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        this._fps = Math.round((frames * 1000) / (currentTime - lastTime))
        frames = 0
        lastTime = currentTime
      }
      
      if (frames < 120) {
        requestAnimationFrame(measure)
      }
    }
    
    requestAnimationFrame(measure)
  }

  /**
   * Register GSAP plugins
   */
  register(...plugins: any[]) {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(...plugins)
  }

  /**
   * Get or create a named timeline
   */
  timeline(key: TimelineKey, options?: gsap.TimelineVars): gsap.core.Timeline {
    if (!this.timelines.has(key)) {
      this.timelines.set(key, gsap.timeline(options))
    }
    return this.timelines.get(key)!
  }

  /**
   * Kill and remove a timeline
   */
  killTimeline(key: TimelineKey) {
    const tl = this.timelines.get(key)
    if (tl) {
      tl.kill()
      this.timelines.delete(key)
    }
  }

  /**
   * Kill all timelines
   */
  killAll() {
    this.timelines.forEach(tl => tl.kill())
    this.timelines.clear()
  }

  /**
   * Set Lenis instance
   */
  set lenis(instance: Lenis | null) {
    this._lenis = instance
  }

  /**
   * Get Lenis instance
   */
  get lenis(): Lenis | null {
    return this._lenis
  }

  /**
   * Check if safe mode is active
   */
  get safe(): boolean {
    return this._safeMode || this._fps < motion.thresholds.fps
  }

  /**
   * Get GPU capability score
   */
  get gpu(): number {
    return this._gpu
  }

  /**
   * Get current FPS
   */
  get fps(): number {
    return this._fps
  }

  /**
   * Check if advanced effects should be enabled
   */
  get canUseAdvanced(): boolean {
    return !this.safe && this._gpu >= motion.thresholds.gpu
  }

  /**
   * Create a GSAP context for cleanup
   */
  context(scope: Element | string, func: () => void) {
    return gsap.context(func, scope)
  }

  /**
   * Batch DOM operations
   */
  batch(operations: () => void) {
    if (typeof window === 'undefined') return
    
    // Use requestAnimationFrame to batch
    requestAnimationFrame(() => {
      operations()
    })
  }

  /**
   * Animate with safe fallback
   */
  to(target: gsap.TweenTarget, vars: gsap.TweenVars) {
    if (this.safe) {
      // Instant animation in safe mode
      return gsap.set(target, { ...vars, duration: 0 })
    }
    return gsap.to(target, vars)
  }

  /**
   * From animation with safe fallback
   */
  from(target: gsap.TweenTarget, vars: gsap.TweenVars) {
    if (this.safe) {
      return gsap.set(target, { clearProps: 'all' })
    }
    return gsap.from(target, vars)
  }

  /**
   * FromTo animation with safe fallback
   */
  fromTo(target: gsap.TweenTarget, fromVars: gsap.TweenVars, toVars: gsap.TweenVars) {
    if (this.safe) {
      return gsap.set(target, toVars)
    }
    return gsap.fromTo(target, fromVars, toVars)
  }
}

// Export singleton instance
export const director = new MotionDirector()

