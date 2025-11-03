# Footer Social Links

This document explains how footer social media icons are configured and managed.

## Configuration

**File:** `lib/socials.ts`

All social media links are centralized in a single configuration object:

```typescript
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/munkmediaagency/",
  linkedin: "https://www.linkedin.com/in/matisse-unkel-242692395/",
  tiktok: "https://www.tiktok.com/@munk.media?_r=1&_t=ZN-915mgT7pcmc",
  x: "https://x.com/MediaMunk",
} as const;
```

This ensures:
- ✅ Single source of truth
- ✅ Easy to update links
- ✅ Type safety
- ✅ No hardcoded URLs in components

## Footer Implementation

**File:** `components/Footer.tsx`

The footer imports and uses these links:

```tsx
import { SOCIAL_LINKS } from '@/lib/socials'

<a href={SOCIAL_LINKS.instagram}>...</a>
```

## Link Attributes

Each social icon link includes:

- ✅ **target="_blank"** - Opens in new tab
- ✅ **rel="noopener noreferrer"** - Security best practice
- ✅ **aria-label** - Screen reader accessibility ("Open <Network> (new tab)")
- ✅ **data-cta="social"** - Analytics tracking
- ✅ **data-network** - Network identifier (instagram, linkedin, tiktok, x)
- ✅ **focus:ring** - Keyboard navigation focus indicator

## Current Links

- **Instagram**: https://www.instagram.com/munkmediaagency/
- **LinkedIn**: https://www.linkedin.com/in/matisse-unkel-242692395/ (personal profile)
- **TikTok**: https://www.tiktok.com/@munk.media?_r=1&_t=ZN-915mgT7pcmc
- **X**: https://x.com/MediaMunk

## Updating a Link

To change a social media URL:

1. Open `lib/socials.ts`
2. Update the URL in the `SOCIAL_LINKS` object
3. Save the file
4. The change automatically applies to the footer

Example:
```typescript
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/munk-media/", // new company page
} as const;
```

## Adding a New Social Network

1. Add the new entry to `lib/socials.ts`
2. Update `components/Footer.tsx` to include the new icon
3. Follow the same attribute pattern as existing icons

## Notes

### LinkedIn Profile

Currently uses a **personal profile** link. This was intentional:
- ✅ Represents individual founder/team member
- ✅ Can be switched to company LinkedIn page when available
- ✅ Just update the URL in `lib/socials.ts`

### TikTok Link Parameters

The TikTok URL includes query parameters (`?_r=1&_t=ZN-915mgT7pcmc`):
- These are part of the canonical URL
- Keep them when copying/updating
- They help with analytics attribution

### Accessibility

All links have:
- Semantic `<a>` tags
- Descriptive `aria-label`
- Keyboard-accessible focus rings
- Proper `rel` attributes for security

### Analytics Tracking

The `data-cta` and `data-network` attributes enable click tracking:

```javascript
// Track social link clicks
document.querySelectorAll('[data-cta="social"]').forEach(link => {
  link.addEventListener('click', () => {
    analytics.track('Social Click', {
      network: link.dataset.network
    })
  })
})
```

## Testing

1. Click each social icon
2. Verify correct URL opens in new tab
3. Test keyboard navigation (Tab to focus, Enter to activate)
4. Verify focus ring appears on keyboard focus
5. Confirm no console errors

## Browser Support

All links work across all modern browsers. The `rel="noopener noreferrer"` ensures:
- ✅ Security best practices
- ✅ Performance optimization
- ✅ No referrer leakage

