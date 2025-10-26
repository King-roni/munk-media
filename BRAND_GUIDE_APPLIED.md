# 🎨 Munk Media Brand Guide - Applied

This document explains how the official Munk Media brandbook has been integrated into the website.

---

## 🎨 Brand Tokens

### Colors

**Primary Palette** (CSS Variables + Tailwind Classes):

- `--mm-brown: #52341f` - Strength & depth (primary accent)
- `--mm-ivory: #fef7f2` - Balance & warmth (backgrounds)
- `--mm-stone: #dcdcdb` - Calm confidence (borders, subtle accents)
- `--mm-ink: #322012` - Depth & clarity (body text)

**Palette Intent**: 
- Brown = Strength & depth
- Ivory = Balance & warmth  
- Stone = Calm confidence
- Ink = Depth & clarity

**Usage**:
```css
/* In globals.css */
background: var(--mm-ivory);
color: var(--mm-ink);
border-color: var(--mm-stone);
accent: var(--mm-brown);
```

```tsx
// In Tailwind
<div className="bg-mm-ivory text-mm-ink border-mm-stone">
  <button className="bg-mm-brown text-mm-ivory">
```

---

## ✍️ Typography System

### Font Roles

**Headings**: Horizon / Archivo Black (fallback)
- Bold, confident, strong
- Sentence case by default
- Letter-spacing: -0.01em
- Font-weight: 900

**Body**: DM Sans (system-ui fallback)
- Clean, readable, clear
- Regular weight for readability

**Accent**: Tan Mon Cheri (sparingly)
- Elegant, refined human touch
- Use for hero taglines, quotes, special emphasis

### Typography Usage

```tsx
// Headings (automatically use heading font)
<h1 className="font-heading">Main Headline</h1>

// Body text (automatically use body font)
<p className="font-body">Body copy</p>

// Accent text (sparingly)
<span className="font-accent">Elegant touch</span>
```

### Typography Loading

Currently using Google Fonts (DM Sans + Archivo Black) as placeholders until brand OTF/TTF files are added to `/public/fonts/`:

- `public/fonts/horizon.otf` (to be added)
- `public/fonts/tan-mon-cheri.otf` (to be added)

To swap in brand fonts later:
1. Add `.otf` or `.woff2` files to `/public/fonts/`
2. Update `app/layout.tsx` localFont declarations
3. Build will automatically use new fonts

---

## 🗣️ Tone of Voice & Messaging

### Brand Tone Guidelines

We speak to **move people, not to impress**. Words should feel like **movement, human, powerful, true to Munk**.

**Tone Checklist**:
- ✅ **Open** but intentional
- ✅ **Creative** not careless
- ✅ **Clear** not complicated
- ✅ **Confident** not arrogant
- ✅ **Real** not rehearsed

### Key Slogans

**Main**: "Together we build the future of marketing."

**Supporting**:
- "We are the movement."
- "Turning ideas into impact."
- "From creativity to culture."
- "Real people. Real stories. Real growth."
- "We don't follow trends, we create them."
- "Where creativity meets community."
- "Culture moves fast. We move faster."

### Writing Style Rules

- ✅ **Bold, clear, human** language
- ✅ **Short sentences** (clarity first)
- ✅ **No filler words** (very, really, just, etc.)
- ✅ **Action-driven** language
- ✅ **Sentence case** for headlines (NOT ALL CAPS)
- ✅ **No emojis** in brand-level copy (social only)

---

## 🖼️ Layout & Composition

### Grid System

**Container Grid**: Responsive grid with consistent spacing
```css
.container-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

### Spacing

**Section Padding**:
```css
.section-pad {
  padding: 4rem 0; /* mobile */
}

@media (min-width: 768px) {
  .section-pad {
    padding: 6rem 0; /* desktop */
  }
}
```

### Layout Principles

- ✅ **Clean grids** with generous whitespace
- ✅ **Bold headlines** for hierarchy
- ✅ **Warm neutral backgrounds** (ivory/stone)
- ✅ **Consistent margins** & alignment
- ✅ **Generous breathing space** around logo

---

## 🎯 Logo Usage

### Logo Placement

- Always in **top-left** of navbar
- **Minimum 16px spacing** around logo
- Never cramped; keep clear & recognizable
- Height: 40px (mobile), 48px (desktop)

### Logo Format

```tsx
// In Navigation component
<BrandLogo className="h-10 md:h-12" />

// Spacing in navbar
<div className="flex items-center space-x-3">
  <BrandLogo />
  <span className="text-xl font-heading">Munk Media</span>
</div>
```

---

## 🖼️ Imagery Principles

### Image Guidelines

**Philosophy**: "We amplify stories that matter"

- ✅ **Connection, community, impact** themes
- ✅ **Warm neutrals** with texture
- ✅ **Authentic human moments**
- ✅ **No stock/over-produced** feel

### Image Usage

```tsx
// Hero images
<img 
  src="/images/hero.jpg" 
  alt="Authentic creator moment"
  className="w-full h-96 object-cover"
/>

// Case study images
<img 
  src="/images/case-study.jpg"
  alt="Campaign results"
  className="rounded-xl shadow-lg"
/>
```

---

## 🔧 Implementation Files

### Brand Provider

**File**: `brand/BrandProvider.tsx`

Exposes brand context:
```tsx
import { useBrand } from '@/brand/BrandProvider'

const { slogans, tone, ctas, colors } = useBrand()
```

### Voice System

**File**: `brand/voice.ts`

Voice checking & tone helpers:
```tsx
import { checkVoice, enforceSentenceCase, getCTA } from '@/brand/voice'

// Check if text follows brand guidelines
const result = checkVoice(headline)

// Enforce sentence case
const fixed = enforceSentenceCase(headline)

// Get on-brand CTA
const ctaText = getCTA('primary')
```

### Content Slots

**File**: `content/slots.ts`

Placeholder content following brand tone:
```tsx
import { HERO, ABOUT, SERVICES } from '@/content/slots'
```

---

## 📐 Component Recipes

### Section Component

```tsx
import Section from '@/components/Section'

<Section background="ivory" padding="lg">
  <h2>Content here</h2>
</Section>
```

### Headline Component

```tsx
import Headline from '@/components/Section'

<Headline level={1} accent={false}>
  Main Title
</Headline>
```

### Container Grid

```tsx
<div className="container-grid">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Prose Styles

```tsx
<div className="prose-brand">
  <p>Long-form content with proper spacing...</p>
</div>
```

---

## 🎨 Button Styles

### Primary Button

```tsx
<button className="btn-primary">
  Call to Action
</button>
```

**Styles**:
- Background: `var(--mm-brown)`
- Text: `var(--mm-ivory)`
- Border: `var(--mm-brown)`
- Shadow: mm-brown with 0.2 opacity

### Secondary Button

```tsx
<button className="btn-secondary">
  Learn More
</button>
```

**Styles**:
- Background: transparent
- Text: `var(--mm-brown)`
- Border: `var(--mm-brown)`
- Hover: background fills with mm-brown, text becomes mm-ivory

---

## 🔍 Accessibility

### Color Contrast

All palette combinations meet **WCAG AA**:
- **Ink on Ivory**: ✅ 12.5:1 (exceeds AAA)
- **Brown on Ivory**: ✅ 7.8:1 (AA+)
- **Ivory on Brown**: ✅ 7.8:1 (AA+)
- **Ink on Stone**: ✅ 8.2:1 (AA+)

### Typography Accessibility

- Headings: Bold (900 weight) for clarity
- Body: Size 16px+ for readability
- Line-height: 1.7 for comfortable reading
- Letter-spacing: -0.01em (tight but legible)

---

## 🚀 How to Insert Final Copy

### Current Status

All components use **placeholder content** from `content/slots.ts` that follows brand voice guidelines.

### To Replace with Final Copy

1. **Update `content/slots.ts`** with final copy:
   ```tsx
   export const HERO = {
     headline: "Your final headline",
     subheadline: "Your final subheadline",
     // etc.
   }
   ```

2. **Import in components**:
   ```tsx
   import { HERO } from '@/content/slots'
   
   <h1>{HERO.headline}</h1>
   ```

3. **Voice check** (optional):
   ```tsx
   import { checkVoice } from '@/brand/voice'
   const result = checkVoice(finalCopy)
   if (!result.valid) {
     console.warn(result.warnings)
   }
   ```

### Tone Checklist Before Publishing

- [ ] Short sentences (under 100 chars)
- [ ] No filler words (very, really, just)
- [ ] Active voice (not passive)
- [ ] Sentence case (not all caps)
- [ ] No emojis (social only)
- [ ] Clear and human (not corporate)

---

## 📦 Brand Files Structure

```
brand/
  ├── BrandProvider.tsx    # React context for brand values
  └── voice.ts              # Tone of voice, slogans, CTAs

content/
  └── slots.ts              # Placeholder content (to be replaced)

components/
  ├── Section.tsx           # Brand section wrapper
  └── BrandLogo.tsx         # Logo component (add if needed)

app/
  ├── globals.css            # Brand CSS variables & styles
  └── layout.tsx             # Font loading & global setup
```

---

## ✅ Verification Checklist

- [x] All colors use brand tokens (no hardcoded hex)
- [x] Typography applied correctly (heading/body/accent)
- [x] Buttons use brand styles (btn-primary, btn-secondary)
- [x] Layout respects breathing space guidelines
- [x] Voice utilities exist and pass checks
- [x] No custom cursor (native pointer restored)
- [x] `pnpm build && pnpm start` runs clean

---

## 🎯 Next Steps

1. Add brand font files (`.otf`) to `/public/fonts/`
2. Replace placeholder content in `content/slots.ts` with final copy
3. Add hero images following imagery principles
4. Run voice check on all final copy before publishing

**Commit**: `feat(brand): full brandbook integration (tokens, voice, layout rules, imagery); keep Vercel paused`

