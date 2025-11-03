# Feat/Footer Social Links

## Summary

Footer social icons are now wired to the correct profiles via a single config.

**Links**

- Instagram: https://www.instagram.com/munkmediaagency/
- LinkedIn: https://www.linkedin.com/in/matisse-unkel-242692395/
- TikTok: https://www.tiktok.com/@munk.media?_r=1&_t=ZN-915mgT7pcmc
- X: https://x.com/MediaMunk

## Implementation

- Centralized in `lib/socials.ts`
- Added `target="_blank"`, `rel="noopener noreferrer"`, `aria-label`
- Added `data-cta="social"` and `data-network="<name>"`

## Validation

- Lint ✅
- check:linux ✅
- Build ✅
- Manual: all 4 icons open the correct URLs in a new tab

## Notes

- Styling unchanged. Future changes can toggle to company LinkedIn when available.

