'use client'

import { createContext, useContext, ReactNode } from 'react'
import { SLOGANS, TONE, VOICE_PRINCIPLE, VALUES, CTAs } from './voice'

interface BrandContextType {
  slogans: typeof SLOGANS
  tone: typeof TONE
  principle: string
  values: typeof VALUES
  ctas: typeof CTAs
  colors: {
    brown: string
    ivory: string
    stone: string
    ink: string
  }
  typography: {
    heading: string[]
    body: string[]
    accent: string[]
  }
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

interface BrandProviderProps {
  children: ReactNode
}

export default function BrandProvider({ children }: BrandProviderProps) {
  const brandContext: BrandContextType = {
    slogans: SLOGANS,
    tone: TONE,
    principle: VOICE_PRINCIPLE,
    values: VALUES,
    ctas: CTAs,
    colors: {
      brown: '#52341f',
      ivory: '#fef7f2',
      stone: '#dcdcdb',
      ink: '#322012',
    },
    typography: {
      heading: ['Horizon', 'Archivo Black', 'system-ui', 'sans-serif'],
      body: ['DM Sans', 'system-ui', 'sans-serif'],
      accent: ['Tan Mon Cheri', 'system-ui', 'serif'],
    },
  }

  return (
    <BrandContext.Provider value={brandContext}>
      {children}
    </BrandContext.Provider>
  )
}

/**
 * Hook to access brand context
 */
export function useBrand() {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error('useBrand must be used within BrandProvider')
  }
  return context
}

