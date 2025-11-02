# Resend Email Setup

This document explains how to configure Resend email sending for the contact forms.

## Overview

Contact form submissions are now sent via Resend to `info@munk-media.com`. The "Send us an email" links open the user's mail client with a prefilled mailto.

## Environment Variables

You need to create a `.env.local` file in the project root with the following variables:

```env
RESEND_API_KEY=YOUR_RESEND_API_KEY
CONTACT_TO_EMAIL=info@munk-media.com
CONTACT_FROM_EMAIL=Website <no-reply@munk-media.com>
```

## Setup Steps

### 1. Create Resend Account

1. Go to https://resend.com
2. Sign up for a free account
3. Navigate to **API Keys** in the dashboard
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

#### Local Development (.env.local)

Create `.env.local` in your project root:

```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_TO_EMAIL=info@munk-media.com
CONTACT_FROM_EMAIL=Website <no-reply@munk-media.com>
```

**Important:** `.env.local` is already in `.gitignore` and will not be committed.

#### Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add the following variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_TO_EMAIL`: `info@munk-media.com`
   - `CONTACT_FROM_EMAIL`: `Website <no-reply@munk-media.com>`
4. Make sure to add them to **Production**, **Preview**, and **Development** environments
5. Redeploy your application

### 3. Verify Sending Domain (Optional but Recommended)

For best deliverability:

1. In Resend dashboard, go to **Domains**
2. Add `munk-media.com` as a sending domain
3. Follow the DNS verification steps
4. Once verified, update `CONTACT_FROM_EMAIL` to use your verified domain:
   ```env
   CONTACT_FROM_EMAIL=Website <no-reply@munk-media.com>
   ```

## Testing

### Local Testing

1. Make sure `.env.local` is properly configured
2. Start the dev server: `npm run dev`
3. Navigate to the homepage or contact page
4. Submit the contact form
5. Check your `info@munk-media.com` inbox

### Testing Mailto Link

Click the "Send us an email" link on either the homepage or contact page. It should open your default email client with:
- **To:** info@munk-media.com
- **Subject:** Project Inquiry — Munk Media
- **Body:** Hi Munk Media,\n\nMy project is...

## How It Works

### Form Submission Flow

1. User fills out and submits the contact form
2. Client-side validation runs (Zod schema)
3. Data is sent to the server action `submitContactForm` or API route `/api/contact`
4. Server validates the data and checks the honeypot field
5. Resend sends the email to `info@munk-media.com`
6. Success/error message is displayed to the user

### Security Features

- **Honeypot field**: Hidden `website` field to catch bots
- **Validation**: Zod schema validates all inputs
- **Rate limiting**: Can be added later if needed
- **Error handling**: Graceful degradation if email fails

## Troubleshooting

### Emails not sending

1. Check that `RESEND_API_KEY` is correctly set in Vercel
2. Verify the API key is valid in Resend dashboard
3. Check Vercel logs for error messages
4. Make sure you haven't exceeded Resend's free tier limits (3,000 emails/month)

### Test Email Working but Production Not

1. Ensure environment variables are set in Vercel for Production environment
2. Redeploy your application after adding environment variables
3. Check Vercel build logs for any errors

### Domain Not Verified

If you haven't verified your domain, Resend will still send emails but they might be marked as spam. To improve deliverability, verify your domain in the Resend dashboard.

## Free Tier Limits

Resend's free tier includes:
- 3,000 emails/month
- 100 emails/day
- All essential features

This should be more than sufficient for most contact forms.

## Alternative Email Services

If you prefer a different email service:

### SendGrid

Update `app/api/contact/route.ts` and `app/actions/contact.ts` to use SendGrid instead of Resend.

### Gmail with Nodemailer

Can be configured using App Passwords for a Google Workspace inbox. This is generally not recommended for production due to deliverability concerns.

## Support

For issues or questions:
1. Check Resend documentation: https://resend.com/docs
2. Review Vercel logs for error messages
3. Contact the development team

