'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'ivory' | 'stone' | 'brown' | 'ink'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function Section({ 
  children, 
  className = '',
  background = 'ivory',
  padding = 'lg',
}: SectionProps) {
  const backgroundMap = {
    ivory: 'bg-mm-ivory',
    stone: 'bg-mm-stone',
    brown: 'bg-mm-brown',
    ink: 'bg-mm-ink',
  }

  const paddingMap = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  }

  return (
    <section className={`${backgroundMap[background]} ${paddingMap[padding]} ${className}`}>
      {children}
    </section>
  )
}

/**
 * Container with brand grid system
 */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`container-max mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

/**
 * Headline component with brand typography
 */
export function Headline({ 
  level = 1, 
  children, 
  className = '',
  accent = false,
}: { 
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  accent?: boolean
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const sizeClasses = {
    '1': 'text-4xl md:text-6xl lg:text-7xl',
    '2': 'text-3xl md:text-5xl',
    '3': 'text-2xl md:text-4xl',
    '4': 'text-xl md:text-3xl',
    '5': 'text-lg md:text-2xl',
    '6': 'text-base md:text-xl',
  }

  return (
    <Tag className={`font-heading ${sizeClasses[level as keyof typeof sizeClasses]} ${accent ? 'font-accent' : ''} ${className}`}>
      {children}
    </Tag>
  )
}

/**
 * Prose styles for long-form content
 */
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {children}
    </div>
  )
}

