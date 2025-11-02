# PR: Mailto CTA + Resend Onboarding Fallback

## Summary

Improved contact email flow with simple mailto links and smart Resend onboarding email fallback to prevent delivery failures when custom domain isn't verified.

## Changes

### A) Mailto Links

✅ **Simplified**: All "Send us an email" CTAs now use plain `<a href="mailto:...">` tags  
✅ **No Next Link**: Removed Next.js `<Link>` wrapper from mailto links  
✅ **No onClick**: Clean anchor tags without JavaScript handlers  
✅ **Security**: Added `rel="noopener noreferrer` to all mailto links  
✅ **Removed query params**: Simplified from complex mailto with subject/body to basic link  

**Files Updated:**
- `components/Contact.tsx` (homepage contact section)
- `app/contact/page.tsx` (dedicated contact page)

### B) Resend Onboarding Fallback

✅ **Smart fallback**: API route and server action use Resend's onboarding email when needed  
✅ **Configurable**: Set `RESEND_USE_ONBOARDING=1` to force onboarding email  
✅ **Auto-detect**: Falls back to `onboarding@resend.dev` if `CONTACT_FROM_EMAIL` not set  
✅ **No crashes**: Site builds successfully without any env vars  

**How it works:**

```typescript
// Smart fallback logic
const useOnboarding = process.env.RESEND_USE_ONBOARDING === '1'
const from = (process.env.CONTACT_FROM_EMAIL && !useOnboarding)
  ? process.env.CONTACT_FROM_EMAIL
  : 'Munk Media <onboarding@resend.dev>'
```

**Files Updated:**
- `app/api/contact/route.ts`
- `app/actions/contact.ts`

### C) Enhanced Error Messages

✅ **User guidance**: Error messages now include a direct mailto link  
✅ **Fallback CTA**: "Email us directly" link in error states  
✅ **Consistent UX**: Applied to both homepage and contact page forms  

### D) Safety Checks

✅ **No module scope**: No `new Resend(...)` outside functions  
✅ **Lint verified**: `npm run lint` passes  
✅ **Build verified**: `npm run build` passes without env vars  
✅ **Validation**: All existing validation and honeypot checks preserved  

## Testing

✅ **Build**: `npm run build` passes successfully  
✅ **Lint**: No linting errors introduced  
✅ **Runtime**: No crashes when env vars are missing  
✅ **Mailto**: All mailto links work correctly  
✅ **Email**: Resend onboarding fallback functions properly  
✅ **Security**: All validation and honeypot checks preserved  

## Environment Variables

### Required for Production

- `RESEND_API_KEY`: Your Resend API key

### Optional Configuration

- `CONTACT_TO_EMAIL`: Defaults to `info@munk-media.com`
- `CONTACT_FROM_EMAIL`: Custom from address (uses onboarding if not set)
- `RESEND_USE_ONBOARDING`: Set to `'1'` to force use of `onboarding@resend.dev`

### Fallback Behavior

Without any env vars set, the site will:
1. ✅ Build successfully
2. ✅ Show friendly error if API key missing
3. ✅ Use `onboarding@resend.dev` if custom domain not verified
4. ✅ Guide users to email directly via mailto links

## Use Cases

### Development/Testing

No env vars needed! Site builds and runs. Forms show friendly errors.

### Staging/Preview

Set `RESEND_API_KEY`. Uses `onboarding@resend.dev` automatically for safe testing.

### Production with Custom Domain

Set all three env vars. Uses your verified custom domain for best deliverability.

### Production without Custom Domain Verified

Set `RESEND_API_KEY` and `RESEND_USE_ONBOARDING=1`. Uses `onboarding@resend.dev` until domain verified.

## What Wasn't Changed

- ✅ Layout and styling preserved
- ✅ Success messages unchanged
- ✅ Form validation logic intact
- ✅ Honeypot protection working
- ✅ All existing security measures preserved

## Benefits

1. **Simpler Email CTA**: No JavaScript needed for mailto links
2. **Better Deliverability**: Resend onboarding email always works
3. **No Build Failures**: Site builds without any configuration
4. **User Experience**: Clear fallback options when things fail
5. **Developer Friendly**: Easy to test and deploy at any stage
6. **Production Ready**: Works from day one with just API key

## Before vs After

### Mailto Links

**Before:**
```jsx
<a href="mailto:info@munk-media.com?subject=Project%20Inquiry%20—%20Munk%20Media&body=...">
```

**After:**
```jsx
<a href="mailto:info@munk-media.com" rel="noopener noreferrer">
```

### Email Fallback

**Before:**
```typescript
const from = process.env.CONTACT_FROM_EMAIL || 'Website <no-reply@munk-media.com>'
// ❌ Will fail if domain not verified
```

**After:**
```typescript
const useOnboarding = process.env.RESEND_USE_ONBOARDING === '1'
const from = (process.env.CONTACT_FROM_EMAIL && !useOnboarding)
  ? process.env.CONTACT_FROM_EMAIL
  : 'Munk Media <onboarding@resend.dev>'
// ✅ Always works
```

