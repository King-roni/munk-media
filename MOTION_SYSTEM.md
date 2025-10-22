# 🎬 Munk Media Motion System

## Overview

A comprehensive cinematic motion system built with Framer Motion, GSAP, and Lenis for the Munk Media website. This system implements advanced transitions, parallax effects, and interactive animations while maintaining performance and accessibility.

---

## ✨ Features Implemented

### 1. **Magnetic Cursor**
- Custom cursor that follows mouse movement with physics-based spring animation
- Expands and glows on hover over links and buttons
- Responds to different interactive elements with size variations
- Hidden on mobile/touch devices
- Respects `prefers-reduced-motion`

**Component:** `components/MagneticCursor.tsx`

### 2. **Smooth Scrolling (Lenis)**
- Inertia-based smooth scrolling across all pages
- Configurable easing and duration
- Automatically disabled for reduced motion preference
- GPU-accelerated performance

**Component:** `components/SmoothScroll.tsx`

### 3. **Scroll Progress Indicator**
- Horizontal progress bar at the top of the page
- Spring-based animation for fluid movement
- Tracks scroll depth across the entire page

**Component:** `components/ScrollProgress.tsx`

### 4. **Split Text Animations**
- Character-by-character and word-by-word reveals
- Staggered animations with configurable delays
- Special gradient variant for hero headings
- 3D rotation effects on reveal

**Components:**
- `components/SplitText.tsx`
- `animations/splitText.ts`

**Usage Example:**
```tsx
<SplitText delay={0.3}>Your Text Here</SplitText>
<SplitTextGradient delay={0.5}>Gradient Heading</SplitTextGradient>
```

### 5. **Parallax Effects**
- Scroll-based parallax for backgrounds and elements
- Configurable speed, opacity, and scale transformations
- Multiple layers for depth perception
- Background and foreground parallax variants

**Components:**
- `components/ParallaxSection.tsx`
- `hooks/useParallax.ts`

**Usage Example:**
```tsx
<ParallaxSection speed={0.5} opacity={[1, 0.3]}>
  <YourContent />
</ParallaxSection>

<ParallaxBackground speed={0.3}>
  <BackgroundElements />
</ParallaxBackground>
```

### 6. **Magnetic Buttons**
- Interactive buttons that respond to mouse proximity
- Magnetic pull effect when hovering
- Spring-based animations for natural feel
- Scale effects on hover and tap

**Component:** `components/MagneticButton.tsx`

**Usage Example:**
```tsx
<MagneticButton className="btn-luxury" strength={0.3}>
  Click Me
</MagneticButton>
```

### 7. **Enhanced Cards with 3D Effects**
- 3D tilt effect following mouse movement
- Glow effect that tracks cursor position
- Shine/shimmer overlay on hover
- Scale animation on hover
- Scroll-triggered reveals

**Component:** `components/EnhancedCard.tsx`

**Usage Example:**
```tsx
<EnhancedCard glowColor="rgba(82, 52, 31, 0.2)">
  <CardContent />
</EnhancedCard>
```

### 8. **Glow Buttons**
- Animated glow effect on hover
- Shimmer/shine animation
- Pulsing glow for emphasis
- Configurable glow colors

**Component:** `components/GlowButton.tsx`

### 9. **Scroll-Triggered Reveals**
- Section reveals with directional animations (up, down, left, right)
- Stagger reveals for grids and lists
- IntersectionObserver-based triggering
- Configurable viewport thresholds

**Component:** `components/RevealSection.tsx`

**Usage Example:**
```tsx
<RevealSection direction="up" delay={0.2}>
  <YourSection />
</RevealSection>

<StaggerReveal staggerDelay={0.1}>
  <StaggerItem><Card1 /></StaggerItem>
  <StaggerItem><Card2 /></StaggerItem>
  <StaggerItem><Card3 /></StaggerItem>
</StaggerReveal>
```

### 10. **Page Transitions**
- Smooth fade and slide transitions between routes
- Spring-based physics for natural movement
- AnimatePresence for exit animations
- Automatic route change detection

**Component:** `components/PageTransitionWrapper.tsx`

### 11. **Hero Section Enhancements**
- Split-text character reveals for headings
- Parallax background layers with floating elements
- Magnetic CTA buttons
- Animated play button with rotation
- Staggered content reveals

**Component:** `components/Hero.tsx` (enhanced)

---

## 🎨 Motion Configuration

All animation settings are centralized in `lib/motionConfig.ts`:

### Spring Configurations
- **Gentle:** Large elements, page loads (stiffness: 100, damping: 20)
- **Snappy:** Interactive elements, buttons (stiffness: 400, damping: 30)
- **Bouncy:** Playful elements (stiffness: 300, damping: 15)
- **Smooth:** Text reveals (stiffness: 120, damping: 25)
- **Magnetic:** Cursor and hover effects (stiffness: 200, damping: 20)

### Easing Curves
- `easeOutExpo`: [0.16, 1, 0.3, 1]
- `easeInOutCubic`: [0.65, 0, 0.35, 1]
- `easeOutCubic`: [0.33, 1, 0.68, 1]
- `easeInOutQuart`: [0.76, 0, 0.24, 1]

### Animation Variants
Pre-configured variants for common animations:
- Page transitions
- Fade in/out
- Slide (up, down, left, right)
- Scale in/out
- Stagger children

---

## 🔧 Usage Guide

### Adding Animations to New Components

1. **Import motion utilities:**
```tsx
import { motion } from 'framer-motion'
import { springConfigs, variants } from '@/lib/motionConfig'
```

2. **Apply scroll-triggered reveal:**
```tsx
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.3 }}
  variants={variants.slideUp}
  transition={springConfigs.smooth}
>
  <YourContent />
</motion.div>
```

3. **Add hover effects:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={springConfigs.snappy}
>
  Button
</motion.button>
```

---

## ♿ Accessibility

All animations respect user preferences:

- **`prefers-reduced-motion`** is detected and honored
- Components automatically disable animations when reduced motion is preferred
- Fallback to static rendering for critical content
- Keyboard navigation fully supported
- Focus states maintained

**Check utility:**
```tsx
import { shouldReduceMotion } from '@/lib/motionConfig'

if (shouldReduceMotion()) {
  // Render without animations
}
```

---

## 🚀 Performance Optimizations

- **GPU Acceleration:** All transforms use `translateZ()` or `will-change`
- **Dynamic Imports:** GSAP and Lenis loaded dynamically to avoid SSR issues
- **RequestAnimationFrame:** Smooth animations synced with browser refresh rate
- **Intersection Observer:** Animations trigger only when visible
- **Viewport Configuration:** Only animate elements entering viewport
- **Once: true** for most scroll animations to prevent re-triggering

---

## 📦 Components Reference

### Core Motion Components
- `MagneticCursor.tsx` - Custom cursor with magnetic effect
- `SmoothScroll.tsx` - Lenis-based smooth scrolling
- `ScrollProgress.tsx` - Scroll progress indicator
- `SplitText.tsx` - Character/word reveal animations
- `ParallaxSection.tsx` - Parallax scroll effects
- `MagneticButton.tsx` - Interactive magnetic buttons
- `EnhancedCard.tsx` - 3D card with hover effects
- `GlowButton.tsx` - Glowing button with shimmer
- `RevealSection.tsx` - Scroll-triggered section reveals
- `PageTransitionWrapper.tsx` - Route transition animations

### Utilities
- `lib/motionConfig.ts` - Central configuration
- `animations/splitText.ts` - Text animation utilities
- `hooks/useParallax.ts` - Parallax scroll hook

---

## 🎯 Next Steps (Optional Enhancements)

If you want to add more advanced features:

1. **Pinned Sections** - Use GSAP ScrollTrigger for pinned scroll sections
2. **Path Animations** - SVG path drawing animations for logos
3. **Text Scramble** - Glitch/scramble effect for headings
4. **Morphing Shapes** - SVG morph animations
5. **Particle System** - Advanced WebGL particles
6. **Video Auto-play** - Scroll-triggered video playback
7. **Color Transitions** - Section-based theme color changes
8. **Timeline Orchestration** - Global animation timeline

---

## 🔍 Testing the Motion System

Visit **http://localhost:3000** and test:

1. ✅ **Cursor** - Move mouse around, hover over buttons/links
2. ✅ **Smooth Scroll** - Scroll with mouse wheel or trackpad
3. ✅ **Progress Bar** - Watch top bar as you scroll
4. ✅ **Hero Animations** - Character-by-character text reveal
5. ✅ **Parallax** - Hero background moves at different speeds
6. ✅ **Magnetic Buttons** - Hover over "Book a Call" button
7. ✅ **Section Reveals** - Scroll down to see sections fade in
8. ✅ **Page Transitions** - Navigate between routes
9. ✅ **Reduced Motion** - Test with system accessibility settings

---

## 📝 Commit Message

```
feat(motion): implement advanced transitions & automations for Munk Media (Vercel paused)

- Add magnetic cursor with hover effects and morphing
- Implement Lenis smooth scrolling with inertia
- Add scroll progress indicator
- Create split-text character reveal animations
- Add parallax backgrounds and scroll-triggered effects
- Implement magnetic buttons with spring physics
- Create enhanced cards with 3D tilt and glow effects
- Add glow buttons with shimmer animations
- Implement scroll-triggered section reveals with stagger
- Add page route transitions with fade and slide
- Create central motion configuration with physics-based springs
- Respect prefers-reduced-motion for accessibility
- All animations are GPU-accelerated and performant
```

---

## 🎉 Result

The Munk Media website now features a cinematic, fluid motion system that enhances the user experience while maintaining performance and accessibility. All animations are physics-based with natural easing, and the system gracefully degrades for users who prefer reduced motion.

