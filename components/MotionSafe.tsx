"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMotion } from "./MotionProvider";

export default function MotionSafe({ count = 60 }: { count?: number }) {
  const root = useRef<HTMLDivElement | null>(null);
  const { safeMode } = useMotion();

  useEffect(() => {
    if (safeMode || typeof window === "undefined" || !root.current) return;
    
    const ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray<HTMLSpanElement>(".particle");
      nodes.forEach((n, i) => {
        gsap.set(n, { 
          x: gsap.utils.random(-150, 150), 
          y: gsap.utils.random(-100, 100), 
          opacity: 0.6, 
          scale: 1 
        });
        gsap.to(n, { 
          x: `+=${gsap.utils.random(-40, 40)}`, 
          y: `+=${gsap.utils.random(-30, 30)}`, 
          duration: gsap.utils.random(3, 6), 
          ease: "sine.inOut", 
          yoyo: true, 
          repeat: -1, 
          delay: i * 0.02 
        });
      });
    }, root);
    
    return () => ctx.revert();
  }, [safeMode]);

  if (safeMode) {
    return null; // No animation in safe mode
  }

  return (
    <div ref={root} className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <span 
          key={i} 
          className="particle absolute left-1/2 top-1/2 block w-2 h-2 rounded-full" 
          style={{ 
            background: "radial-gradient(closest-side, rgba(255,255,255,.9), rgba(255,255,255,0))" 
          }} 
        />
      ))}
    </div>
  );
}
