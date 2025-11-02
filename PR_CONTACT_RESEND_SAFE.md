# PR: Resilient Contact Email Flow

## Summary

Hardened the contact email flow to prevent build failures when environment variables are missing and display friendly error messages instead of crashing.

## Changes

### Key Improvements

✅ **No Build Crashes**: Resend is now lazy-initialized inside functions, not at module scope  
✅ **Graceful Degradation**: Friendly error messages when email service isn't configured  
✅ **User Guidance**: Error messages direct users to email directly at info@munk-media.com  
✅ **Developer Friendly**: Console warnings when API key is missing for easy debugging  
✅ **Fallback Values**: Email addresses have sensible defaults  

### Files Changed

1. **`app/api/contact/route.ts`**
   - Moved Resend initialization inside `POST` function
   - Check for `RESEND_API_KEY` before creating Resend instance
   - Return 500 with friendly message if missing
   - Use fallback email addresses when env vars absent

2. **`app/actions/contact.ts`**
   - Moved Resend initialization inside function
   - Same safety checks as API route
   - Updated error messages to guide users

### Before vs After

#### Before (Problematic)
```typescript
const resend = new Resend(process.env.RESEND_API_KEY)  // ❌ Module scope
```

#### After (Safe)
```typescript
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'Email service not configured' })
  }
  const resend = new Resend(apiKey)  // ✅ Function scope
}
```

## Testing

✅ **Build**: `npm run build` passes without errors  
✅ **Lint**: No linting errors introduced  
✅ **Error Handling**: Forms display friendly messages when email fails  
✅ **Mailto Links**: Still work correctly  
✅ **Security**: All validation and honeypot checks preserved  

## Deploy Requirements

For production/preview deployments to work correctly, these environment variables must be set in Vercel:

- `RESEND_API_KEY`: Your Resend API key
- `CONTACT_TO_EMAIL`: info@munk-media.com
- `CONTACT_FROM_EMAIL`: Website <no-reply@munk-media.com>

If these are not set, the site will build successfully but contact forms will show a friendly error message directing users to email directly.

## What Wasn't Changed

- Mailto links remain unchanged
- Form validation and honeypot checks preserved
- Success/error UI behavior identical
- All existing security measures intact

## Benefits

1. **Resilience**: Site never crashes due to missing env vars
2. **User Experience**: Clear error messages with fallback option
3. **Developer Experience**: Easy to spot configuration issues in logs
4. **Build Safety**: Preview deployments work even without email config
5. **Gradual Rollout**: Can deploy first, configure email service later

