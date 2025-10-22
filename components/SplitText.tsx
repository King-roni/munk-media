'use client'

import { motion } from 'framer-motion'
import { splitText, splitTextVariants } from '@/animations/splitText'
import { shouldReduceMotion } from '@/lib/motionConfig'

interface SplitTextProps {
  children: string
  className?: string
  type?: 'chars' | 'words'
  delay?: number
  stagger?: number
}

export default function SplitText({ 
  children, 
  className = '',
  type = 'chars',
  delay = 0,
  stagger = 0.03,
}: SplitTextProps) {
  const units = splitText(children, type)
  
  // If reduced motion, render static text
  if (shouldReduceMotion()) {
    return <span className={className}>{children}</span>
  }

  return (
    <span className={className}>
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={splitTextVariants}
          style={{
            display: 'inline-block',
            ...(unit === ' ' && { width: '0.25em' }),
          }}
        >
          {unit === ' ' ? '\u00A0' : unit}
        </motion.span>
      ))}
    </span>
  )
}

/**
 * Gradient variant for hero headings
 */
export function SplitTextGradient({ 
  children, 
  className = '',
  delay = 0,
}: Omit<SplitTextProps, 'type'>) {
  const chars = splitText(children, 'chars')
  
  if (shouldReduceMotion()) {
    return <span className={`gradient-text ${className}`}>{children}</span>
  }

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            delay: delay + index * 0.04,
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block gradient-text"
          style={{
            transformOrigin: 'bottom',
            ...(char === ' ' && { width: '0.25em' }),
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}


