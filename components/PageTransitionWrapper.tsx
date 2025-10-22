'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { transitions, variants, springConfigs } from '@/lib/motionConfig'
import { shouldReduceMotion } from '@/lib/motionConfig'

interface PageTransitionWrapperProps {
  children: React.ReactNode
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname()
  const reducedMotion = shouldReduceMotion()

  if (reducedMotion) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            y: 20,
            scale: 0.98,
          },
          enter: {
            opacity: 1,
            y: 0,
            scale: 1,
          },
          exit: {
            opacity: 0,
            y: -20,
            scale: 0.98,
          },
        }}
        transition={springConfigs.smooth}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}


