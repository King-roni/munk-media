# 🎬 Ultra Motion System - Implementation Guide

## Overview

A JavaScript-driven cinematic motion system built on GSAP + Lenis + Framer Motion that attaches to existing HTML via data attributes. **No layout rewrites required** — pure motion enhancement.

---

## ✨ Core Philosophy

- **Data-driven**: Opt-in via `data-*` attributes on existing HTML
- **Progressive**: Falls back gracefully for `prefers-reduced-motion` and low-FPS devices
- **Centralized**: All config, timings, and easings in `lib/motion/config.ts`
- **GPU-accelerated**: Transform-based animations with `will-change` hints
- **SSR-safe**: Client-only execution with proper cleanup

---

## 🗂️ Architecture

```
lib/motion/
  ├── config.ts         # Central timing/easing/threshold config
  └── director.ts       # Singleton orchestrator (GSAP, Lenis, FPS probe)

components/
  ├── MotionProvider.tsx         # Mount Lenis, ScrollTrigger, safe mode
  ├── MagneticCursorUltra.tsx    # Magnetic cursor with gooey filter
  └── [other components]

animations/
  └── splitText.ts      # Character/word split utility with GSAP stagger

hooks/
  └── useDataParallax.ts  # ScrollTrigger-based parallax by data attribute

styles/
  └── filters.css       # Gooey filters, GPU hints
```

---

## 🎯 Data-Attribute API

### 1. **Parallax**

```html
<!-- Slow background parallax -->
<div data-parallax="bg">
  Background element
</div>

<!-- Fast foreground parallax -->
<div data-parallax="fg">
  Foreground element
</div>

<!-- Deep/very slow -->
<div data-parallax="deep">
  Far background
</div>

<!-- Horizontal parallax -->
<div data-parallax-x="0.5">
  Moves horizontally
</div>

<!-- Fade on scroll -->
<div data-parallax-fade="out">
  Fades out while scrolling
</div>

<!-- Scale on scroll -->
<div data-parallax-scale="1.3">
  Scales up while scrolling
</div>
```

**Speeds** (from `lib/motion/config.ts`):
- `bg`: 0.25 (slowest)
- `fg`: 0.6 (faster)
- `deep`: 0.15 (very slow)
- `default`: 0.4

---

### 2. **Magnetic Cursor**

```html
<!-- Any button/link attracts the custom cursor -->
<button data-magnetic>
  Book a Call
</button>

<a href="/about" data-magnetic>
  Learn More
</a>
```

**Behavior**:
- Cursor scales to 1.6× on hover
- Element pulls toward cursor within 80px radius
- Gooey blend effect via SVG filter
- Auto-hidden on touch devices

---

### 3. **Split Text Reveals**

Use the `splitText` utility in your components:

```tsx
import { splitText, animateSplitOnScroll } from '@/animations/splitText'

// In useEffect
useEffect(() => {
  const result = animateSplitOnScroll('h1[data-split]', {
    type: 'chars',
    direction: 'up',
    stagger: 0.03,
    distance: 20,
  })
  
  return () => result?.revert()
}, [])
```

Or manually trigger:

```tsx
const result = splitText('.hero-title', {
  type: 'chars',
  stagger: 0.05,
  rotation: 90, // 3D flip effect
})

result.timeline.play()
```

---

### 4. **Scroll Reveals** (Coming Soon)

```html
<!-- Reveal from bottom -->
<div data-reveal="up" data-delay="0.2">
  Content fades in from bottom
</div>

<!-- Reveal from left -->
<div data-reveal="left" data-stagger="0.1">
  <div class="item">1</div>
  <div class="item">2</div>
</div>

<!-- Scale reveal -->
<div data-reveal="scale">
  Scales in
</div>
```

---

### 5. **Pinned Sections** (Coming Soon)

```html
<section data-pin data-pin-duration="200%">
  <!-- This section pins while scrolling -->
  <h2>Pinned content</h2>
</section>
```

---

### 6. **Kinetic Typography** (Coming Soon)

```html
<h1 data-kt>
  Characters float on scroll
</h1>
```

---

### 7. **3D Tilt Cards** (Coming Soon)

```html
<div class="fx-card">
  <!-- Card tilts with cursor, shows inner shine -->
  <img src="/hero.jpg" alt="Hero" />
</div>
```

---

### 8. **Image Displacement Hover** (Coming Soon)

```html
<img src="/image.jpg" data-displace alt="Hover me" />
```

**Effect**: WebGL displacement map on hover (fallback to blur + scale)

---

## 🧩 Usage in Pages

### Import Hooks

```tsx
'use client'

import { useDataParallax, useHorizontalParallax, useOpacityParallax } from '@/hooks/useDataParallax'
import { useEffect } from 'react'
import { splitText } from '@/animations/splitText'

export default function HomePage() {
  // Auto-attach parallax to [data-parallax] elements
  useDataParallax()
  useHorizontalParallax()
  useOpacityParallax()

  // Split text reveal
  useEffect(() => {
    const result = splitText('.hero-title', {
      type: 'chars',
      direction: 'up',
      stagger: 0.04,
    })
    
    result?.timeline.play()
    
    return () => result?.revert()
  }, [])

  return (
    <div>
      <h1 className="hero-title">Scale with creators</h1>
      <div data-parallax="bg">Background</div>
      <button data-magnetic>CTA</button>
    </div>
  )
}
```

---

## 🎨 Adding Motion to Existing Components

### Example: Hero Section

**Before** (plain HTML):
```tsx
export default function Hero() {
  return (
    <section className="hero">
      <h1>Scale with creators</h1>
      <p>Full-funnel influencer campaigns</p>
      <button>Book a Call</button>
    </section>
  )
}
```

**After** (motion-enabled):
```tsx
'use client'

import { useEffect } from 'react'
import { splitText } from '@/animations/splitText'
import { useDataParallax } from '@/hooks/useDataParallax'

export default function Hero() {
  useDataParallax()

  useEffect(() => {
    // Split-text character reveal
    const h1Result = splitText('h1', {
      type: 'chars',
      direction: 'up',
      stagger: 0.03,
    })
    
    h1Result?.timeline.play()
    
    return () => h1Result?.revert()
  }, [])

  return (
    <section className="hero">
      <h1>Scale with creators</h1>
      <p>Full-funnel influencer campaigns</p>
      
      {/* Add data-magnetic for cursor effect */}
      <button data-magnetic>Book a Call</button>
      
      {/* Add parallax background */}
      <div className="bg-element" data-parallax="bg">
        {/* decorative bg */}
      </div>
    </section>
  )
}
```

**No layout changes** — just added hooks + data attributes.

---

## ⚙️ Configuration

Edit `lib/motion/config.ts` to adjust all timings globally:

```ts
export const motion = {
  base: {
    dur: 0.9,          // Base duration
    ease: "power3.inOut",
  },
  
  parallax: {
    bg: 0.25,          // Background speed
    fg: 0.6,           // Foreground speed
  },
  
  cursor: {
    lerp: 0.15,        // Smoothing (lower = smoother)
    magnetic: {
      distance: 80,    // Attraction radius
      strength: 0.4,   // Pull strength
    },
  },
  
  splitText: {
    stagger: 0.03,     // Delay between characters
    duration: 0.6,
    distance: 20,      // Initial offset
  },
  
  thresholds: {
    gpu: 0.7,          // Min GPU score for advanced effects
    fps: 50,           // Min FPS to keep effects enabled
  },
}
```

---

## 🔐 Safety & Performance

### Reduced Motion

The system automatically detects `prefers-reduced-motion: reduce` and:
- Disables Lenis smooth scroll
- Skips heavy GSAP timelines
- Shows instant fades instead of animations

### FPS Monitoring

The `director` singleton probes FPS on load:
- If FPS < 50, `director.safe` = `true` → animations disabled
- If GPU score < 0.7, advanced WebGL effects are skipped

### GPU Hints

```css
.parallax-element {
  will-change: transform;
  transform: translate3d(0, 0, 0); /* GPU compositing */
}
```

### Cleanup

Every effect uses `gsap.context()` or returns cleanup:

```ts
useEffect(() => {
  const ctx = gsap.context(() => {
    // animations
  })
  
  return () => ctx.revert() // automatic cleanup
}, [])
```

---

## 🧪 Testing Checklist

Visit **http://localhost:3001** and verify:

- [ ] **Smooth scroll** with mouse wheel (Lenis)
- [ ] **Parallax**: Background elements move slower than foreground
- [ ] **Magnetic cursor**: Hover over buttons with `data-magnetic`
- [ ] **Split text**: Character-by-character reveal on Hero heading
- [ ] **Logo bounce**: Subtle scale animation on page load
- [ ] **Reduced motion**: Enable in OS settings → animations become instant
- [ ] **Mobile**: Cursor hidden on touch devices

---

## 🎯 Next Steps (Optional Enhancements)

1. **Route Transitions**: Shared-element morphs + shader wipes
2. **Pinned Sections**: ScrollTrigger `pin` for hero/showcases
3. **3D Tilt Cards**: Perspective transforms following cursor
4. **Image Displacement**: WebGL distortion on hover
5. **Kinetic Typography**: Characters float on scroll
6. **Color Transitions**: Section-based theme shifts via CSS vars

---

## 📦 File Checklist

### ✅ Created
- `lib/motion/config.ts` - Central configuration
- `lib/motion/director.ts` - Motion orchestrator singleton
- `components/MotionProvider.tsx` - Lenis + ScrollTrigger setup
- `components/MagneticCursorUltra.tsx` - Custom magnetic cursor
- `animations/splitText.ts` - Character reveal utility
- `hooks/useDataParallax.ts` - Parallax data-attribute hooks

### 🔄 Enhanced
- `components/MotionProvider.tsx` - Added Lenis integration
- Existing components can now use data attributes

---

## 🚀 Quick Start

1. **Add MotionProvider** (already in `app/layout.tsx`)
2. **Add magnetic cursor**:
   ```tsx
   import MagneticCursorUltra from '@/components/MagneticCursorUltra'
   
   // In layout
   <MagneticCursorUltra />
   ```

3. **Add data attributes** to existing HTML:
   ```html
   <button data-magnetic>Click me</button>
   <div data-parallax="bg">Background</div>
   ```

4. **Import hooks** in page components:
   ```tsx
   import { useDataParallax } from '@/hooks/useDataParallax'
   useDataParallax()
   ```

5. **Split text** for character reveals:
   ```tsx
   import { splitText } from '@/animations/splitText'
   const result = splitText('h1', { type: 'chars' })
   result.timeline.play()
   ```

---

## 📝 Commit Message

```
feat(ultra-motion): JS-driven transitions & automations (Vercel paused)

- Add motion director singleton for GSAP orchestration
- Implement Lenis smooth scroll with ScrollTrigger sync
- Create data-parallax system (bg/fg/deep/horizontal)
- Build magnetic cursor with gooey SVG filter
- Add split-text character reveal utility
- Configure central motion timing/easing system
- Respect prefers-reduced-motion and FPS thresholds
- All motion via data attributes - no layout rewrites
```

---

## 🎉 Result

The Munk Media website now has a **cinematic, data-driven motion system** that:
- ✅ Attaches via data attributes (no HTML rewrites)
- ✅ GPU-accelerated and performant
- ✅ Respects accessibility preferences
- ✅ Falls back gracefully on low-power devices
- ✅ Centralized configuration for easy tweaking

**No Vercel deployment** — ready for local testing at http://localhost:3001

