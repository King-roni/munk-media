# Email Forms Documentation

This document explains how the website forms are wired to send emails via Resend.

## Environment Variables

### Required

Set these in Vercel Project → Settings → Environment Variables:

- `RESEND_API_KEY`: Your Resend API key from https://resend.com
- `EMAIL_TO`: Default recipient for form submissions (e.g., `info@munk-media.com`)
- `EMAIL_FROM`: Default sender address (e.g., `Munk Media <info@munk-media.com>`)

**Local Development:** Copy `.env.local.example` to `.env.local` and add your values.

## Architecture

### Core Email Utility

**File:** `lib/email.ts`

The `sendEmail()` function handles all email sending:
- Reads `RESEND_API_KEY` from environment
- Falls back to `EMAIL_TO` and `EMAIL_FROM` if not specified per-email
- Supports both HTML and plain text
- Sets reply-to for easy response handling
- Throws error if API key is missing

**Usage:**
```ts
import { sendEmail } from '@/lib/email'

await sendEmail({
  subject: 'Subject here',
  html: '<p>HTML content</p>',
  text: 'Plain text content',
  replyTo: 'user@example.com',
  to: 'custom@recipient.com' // optional, uses EMAIL_TO if not set
})
```

### Email Templates

**File:** `emails/templates.ts`

Contains template functions for different form types:

- `contactHtml()` / `contactText()` - Contact form emails
- `creatorHtml()` / `creatorText()` - Creator application emails

Templates use `renderKV()` to create HTML tables and `escapeText()` to prevent XSS.

### Server Actions

**Files:**
- `app/actions/contact.ts` - Handles contact form submissions
- `app/actions/creator-application.ts` - Handles creator application submissions

Both actions:
- Validate input with Zod schemas
- Check honeypot fields
- Send email via `sendEmail()`
- Return `{ ok: boolean, error?: string }`

## Forms

### Contact Forms

**Locations:**
- Homepage: Section 5 (components/Contact.tsx)
- Contact Page: (app/contact/page.tsx)

**Fields:**
- `name` (optional)
- `email` (required)
- `message` (required, min 10 chars)
- `page` (hidden, "home" or "contact")
- `company` (hidden honeypot field)

**Server Action:** `submitContact()`

### Creator Application Form

**Location:**
- Homepage: Section 4 (components/CreatorNetwork.tsx)

**Fields:**
- `creatorName` (optional)
- `email` (required)
- `socials`, `niche`, `followers`, `contentLinks`, `country`, `notes` (all optional)
- `ageConfirmed` (checkbox)
- `company` (hidden honeypot field)

**Server Action:** `submitCreatorApplication()`

## Editing Content

### Subject Lines

Edit in the server action files:
- Contact: `app/actions/contact.ts` line with `subject: 'New Message from...'`
- Creator: `app/actions/creator-application.ts` line with `subject: 'New Creator Application...'`

### Success Messages

Edit in the form components where `formState.success` is checked.

### Error Messages

Edit in the server actions where errors are returned.

### Adding Fields to Creator Application

1. Update the Zod schema in `app/actions/creator-application.ts`
2. Add the field to the form in `components/CreatorNetwork.tsx`
3. The template functions automatically include all fields via `renderKV()`

## Security

- **Honeypot:** Hidden `company` field catches bots
- **Validation:** Zod schemas prevent invalid data
- **XSS Prevention:** `escapeText()` sanitizes all user input
- **Reply-To:** Properly set so replies go to submitter

## Testing

1. Set environment variables in Vercel or `.env.local`
2. Submit forms on the website
3. Check inbox at `EMAIL_TO`
4. Verify Reply-To works (reply should go to submitter)
5. Test honeypot (fill company field = error)

## Troubleshooting

**Emails not sending:**
- Check `RESEND_API_KEY` is set
- Verify API key is valid in Resend dashboard
- Check Vercel logs for errors

**Build failing:**
- Ensure `resend` package is installed: `npm i resend`
- Run `npm run lint && npm run check:linux && npm run build`

**Honeypot triggering:**
- Check form isn't accidentally filling the hidden `company` field
- Verify field has `className="hidden"` and `tabIndex="-1"`

