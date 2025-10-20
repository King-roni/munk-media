'use client'

import { useCursor } from '@/hooks/useCursor'

export default function CustomCursor() {
  const { cursorRef, cursorFollowerRef } = useCursor()

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-mm-brown rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Cursor follower */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-mm-brown/30 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
