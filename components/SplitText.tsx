'use client'

import { motion } from 'framer-motion'

interface SplitTextProps {
  children: string
  className?: string
}

export default function SplitText({ 
  children, 
  className = '',
}: SplitTextProps) {
  return (
    <span className={className}>{children}</span>
  )
}

export function SplitTextGradient({ 
  children, 
  className = '',
}: SplitTextProps) {
  return (
    <span className={`gradient-text ${className}`}>{children}</span>
  )
}
