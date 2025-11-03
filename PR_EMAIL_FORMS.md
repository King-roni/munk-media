# Email Infrastructure + Forms

## Summary

Wire all website forms to send email via Resend with reply-to and reliable UX.

## Changes

### Email Infrastructure

✅ **Core Utility (`lib/email.ts`)**
- `sendEmail()` function with Resend integration
- `escapeText()` for XSS prevention
- `renderKV()` for HTML table rendering
- Throws clear error if API key missing

✅ **Email Templates (`emails/templates.ts`)**
- `contactHtml()` / `contactText()` - Contact form emails
- `creatorHtml()` / `creatorText()` - Creator application emails
- Auto-escapes user input to prevent XSS
- Clean HTML and plain text versions

✅ **Documentation (`docs/EMAIL_FORMS.md`)**
- Environment variables setup
- Architecture explanation
- Form locations and fields
- Editing guide for subjects/messages
- Troubleshooting tips

### Server Actions

✅ **Contact Form (`app/actions/contact.ts`)**
- Zod validation with honeypot check
- Fields: name, email, message, page
- Reply-to set to submitter's email
- Returns `{ ok: boolean, error?: string }`

✅ **Creator Application (`app/actions/creator-application.ts`)**
- Passthrough schema for all fields
- Collects all form data dynamically
- Reply-to set to creator's email
- Extensible for additional fields

### Form Updates

✅ **Homepage Contact Form (`components/Contact.tsx`)**
- Uses `useFormState` with `submitContact`
- Hidden honeypot field
- Page field set to "home"
- Success/error messages

✅ **Contact Page Form (`app/contact/page.tsx`)**
- Uses `useFormState` with `submitContact`
- Hidden honeypot field
- Page field set to "contact"
- Success/error messages

✅ **Creator Application Form (`components/CreatorNetwork.tsx`)**
- Uses `useFormState` with `submitCreatorApplication`
- Hidden honeypot field
- Success/error messages

### Configuration

✅ **TypeScript (`tsconfig.json`)**
- Added `downlevelIteration: true` for FormData iteration

## Environment Variables Required

Set these in Vercel Project → Settings → Environment Variables:

```env
RESEND_API_KEY=your_resend_api_key_here
EMAIL_TO=info@munk-media.com
EMAIL_FROM=Munk Media <info@munk-media.com>
```

**Local Development:** Copy `.env.local.example` to `.env.local` and add values.

## Testing

### How to Test

1. Set `RESEND_API_KEY` in environment
2. Submit contact form on homepage
3. Submit contact form on `/contact` page
4. Submit creator application form on homepage
5. Check inbox at `EMAIL_TO`
6. Verify Reply-To works (reply should go to submitter)
7. Test honeypot (fill `company` field = error)

### Local Validation

Run: `npm run lint && npm run check:linux && npm run build`

✅ Lint: Passes
✅ Linux: Passes
✅ Build: Passes

## Security Features

- **Honeypot:** Hidden `company` field catches bots
- **Validation:** Zod schemas prevent invalid data
- **XSS Prevention:** `escapeText()` sanitizes all user input
- **Reply-To:** Properly set so replies go to submitter

## Email Flow

1. User submits form
2. Server action validates with Zod
3. Checks honeypot field
4. Sends email via Resend with reply-to
5. Returns success or error state
6. Form displays appropriate message

## Benefits

1. **Reliable Delivery:** Resend for email delivery
2. **Proper Threading:** Reply-to enables conversation threading
3. **Bot Protection:** Honeypot prevents spam
4. **User-Friendly:** Clear error messages with fallback
5. **Extensible:** Easy to add new fields or forms
6. **Type-Safe:** Full TypeScript coverage
7. **Well-Documented:** Clear setup and usage docs

## Files Changed

**New Files:**
- `lib/email.ts`
- `emails/templates.ts`
- `app/actions/creator-application.ts`
- `docs/EMAIL_FORMS.md`

**Modified Files:**
- `app/actions/contact.ts`
- `components/Contact.tsx`
- `app/contact/page.tsx`
- `components/CreatorNetwork.tsx`
- `tsconfig.json`

## Next Steps

After merging this PR:
1. Set environment variables in Vercel
2. Deploy and test forms
3. Monitor Resend dashboard for delivery
4. Set up custom domain in Resend (optional, improves deliverability)

