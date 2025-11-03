# Feat/Calendly Links

## Summary

All "Book a call", "Schedule a call", and "Book a Discovery Call" buttons now open the Calendly booking page in a new tab.

## Link

https://calendly.com/matisse-unkel8/30min

## Affected Pages

### Homepage

- ✅ Hero Section: "Book a Call" button → Calendly
- ✅ Contact Section: "Schedule a call" info card → Calendly

### Contact Page

- ✅ Contact Info: "Schedule a call" info card → Calendly

### Services Page

- ✅ Services Section: "Book a Discovery Call" button → Calendly
- ✅ CTA Section: "Book a Discovery Call" button → Calendly

## Implementation

All booking buttons now:

- Open `https://calendly.com/matisse-unkel8/30min` in new tab
- Include `target="_blank"` for new tab behavior
- Include `rel="noopener noreferrer"` for security
- Include `aria-label` for accessibility
- Include `data-cta="calendly"` for analytics tracking
- Include `data-location` to track conversion source

## Files Changed

- `components/Hero.tsx` - Hero booking button
- `components/Contact.tsx` - Contact section booking card
- `app/contact/page.tsx` - Contact page booking card
- `app/services/page.tsx` - Services page booking buttons
- `docs/CALENDLY_LINKS.md` - Documentation

## Validation

- ✅ Build passes (`npm run lint && npm run check:linux && npm run build`)
- ✅ All buttons open Calendly in a new tab
- ✅ No console or lint errors
- ✅ All unused imports removed

## Testing

1. Click "Book a Call" on homepage hero
2. Click "Schedule a call" in contact section
3. Click "Schedule a call" on contact page
4. Click "Book a Discovery Call" on services page (both locations)
5. Verify Calendly opens in new tab
6. Verify booking flow works

## Documentation

See `docs/CALENDLY_LINKS.md` for:
- Link configuration
- Button locations
- How to update the link
- Analytics tracking setup

