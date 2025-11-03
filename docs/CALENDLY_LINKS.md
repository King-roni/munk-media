# Calendly Links

This document explains how booking/calendar links are configured across the website.

## Link Configuration

**Calendly URL:** `https://calendly.com/matisse-unkel8/30min`

This URL is used consistently across all booking buttons on the website.

## Button Locations

### Homepage

1. **Hero Section** (`components/Hero.tsx`)
   - Button text: "Book a Call"
   - Location: Homepage hero
   - `data-location="home"`

2. **Contact Section** (`components/Contact.tsx`)
   - Button text: "Schedule a call"
   - Location: Contact section info card
   - `data-location="contact"`

### Contact Page

3. **Contact Page** (`app/contact/page.tsx`)
   - Button text: "Schedule a call"
   - Location: Contact info card
   - `data-location="contact"`

### Services Page

4. **Services Page** (`app/services/page.tsx`)
   - Button text: "Book a Discovery Call" (appears twice)
   - Location: End of services section and CTA section
   - `data-location="services"`

## Implementation Details

All booking buttons include:

- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security best practice
- `aria-label="Open Calendly booking (new tab)"` - Accessibility
- `data-cta="calendly"` - Analytics tracking
- `data-location` - Tracks which page the click came from

## Changing the Calendly Link

To update the Calendly URL:

1. Find all instances of `https://calendly.com/matisse-unkel8/30min` using your IDE's search
2. Replace with your new Calendly link
3. Ensure all buttons use the same URL for consistency
4. Run validation: `npm run lint && npm run check:linux && npm run build`

## Analytics

The `data-cta` and `data-location` attributes enable tracking:

- **data-cta="calendly"** - Identifies all Calendly bookings
- **data-location** - Tracks conversion by page/section

Example tracking implementation:

```javascript
// Track Calendly clicks
document.querySelectorAll('[data-cta="calendly"]').forEach(button => {
  button.addEventListener('click', () => {
    analytics.track('Calendly Click', {
      location: button.dataset.location
    })
  })
})
```

## Testing

1. Click each booking button
2. Verify Calendly opens in a new tab
3. Confirm booking flow works
4. Check for console errors
5. Test with keyboard navigation (Tab + Enter)

## Future Improvements

Potential enhancements:

- Add Calendly widget popup (instead of new tab)
- Add pre-fill parameters (name, email if available)
- Add timezone detection
- Add A/B testing different CTAs

