'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface MotionContextType {
  safeMode: boolean
  setSafeMode: (safe: boolean) => void
}

const MotionContext = createContext<MotionContextType>({
  safeMode: false,
  setSafeMode: () => {},
})

export const useMotion = () => useContext(MotionContext)

interface MotionProviderProps {
  children: ReactNode
}

export default function MotionProvider({ children }: MotionProviderProps) {
  // Initialize safeMode to true to ensure content is immediately visible on SSR
  const [safeMode, setSafeMode] = useState(true)

  return (
    <MotionContext.Provider value={{ safeMode, setSafeMode }}>
      {children}
    </MotionContext.Provider>
  )
}
