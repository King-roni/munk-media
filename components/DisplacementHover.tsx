'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { director } from '@/lib/motion/director'
import { motion } from '@/lib/motion/config'

interface DisplacementHoverProps {
  src: string
  alt: string
  className?: string
  strength?: number
}

export default function DisplacementHover({ 
  src, 
  alt, 
  className = '',
  strength = motion.displacement.strength 
}: DisplacementHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [useWebGL, setUseWebGL] = useState(false)

  useEffect(() => {
    if (director.safe || !containerRef.current || !imageRef.current) return

    const container = containerRef.current
    const image = imageRef.current
    const canvas = canvasRef.current

    // Check WebGL capability
    if (canvas && director.canUseAdvanced) {
      const gl = canvas.getContext('webgl') as WebGLRenderingContext | null
      if (gl) {
        setUseWebGL(true)
        initWebGLDisplacement(gl, image, canvas)
      }
    }

    // Fallback to GSAP blur + scale
    if (!useWebGL) {
      initGSAPDisplacement(image)
    }
  }, [src, strength, useWebGL])

  const initWebGLDisplacement = (gl: WebGLRenderingContext, image: HTMLImageElement, canvas: HTMLCanvasElement) => {
    // Simplified WebGL displacement shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `

    const fragmentShaderSource = `
      precision mediump float;
      uniform sampler2D u_texture;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;
      
      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Displacement effect
        float displacement = sin(uv.x * 10.0 + u_time) * 0.02;
        uv.y += displacement;
        
        vec4 color = texture2D(u_texture, uv);
        gl_FragColor = color;
      }
    `

    // Create shader program (simplified)
    const program = gl.createProgram()
    if (!program) return

    // Set up geometry and uniforms
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1
    ]), gl.STATIC_DRAW)

    // Mouse move handler for WebGL
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      // Update uniforms (simplified)
      // In a real implementation, you'd update the mouse uniform here
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }

  const initGSAPDisplacement = (image: HTMLImageElement) => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / rect.width
      const deltaY = (e.clientY - centerY) / rect.height

      // Displacement effect using GSAP
      gsap.to(image, {
        x: deltaX * 20 * strength,
        y: deltaY * 20 * strength,
        scale: 1 + Math.abs(deltaX) * 0.05 * strength,
        filter: `blur(${Math.abs(deltaX) * 2}px)`,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    image.addEventListener('mousemove', handleMouseMove)
    image.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      image.removeEventListener('mousemove', handleMouseMove)
      image.removeEventListener('mouseleave', handleMouseLeave)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`displacement-container relative overflow-hidden ${className}`}
    >
      {/* WebGL Canvas (hidden if not used) */}
      {useWebGL && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: useWebGL ? 'block' : 'none' }}
        />
      )}

      {/* Fallback Image */}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300"
        style={{
          willChange: 'transform, filter',
          transform: 'translate3d(0, 0, 0)', // GPU acceleration
        }}
      />

      {/* Overlay effect */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
        }}
      />
    </div>
  )
}

