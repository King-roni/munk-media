'use server'

import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'
import { Resend } from 'resend'

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    // Honeypot check - if website field is filled, it's a bot
    if (validatedData.website) {
      return { success: false, error: 'Invalid submission' }
    }

    // Check for API key
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('[contact] Missing RESEND_API_KEY')
      return { 
        success: false, 
        error: 'Email service not configured. Please email us directly at info@munk-media.com.'
      }
    }

    // Lazy-init Resend only when we have the API key
    const resend = new Resend(apiKey)

    // Get email addresses with fallbacks
    const to = process.env.CONTACT_TO_EMAIL || 'info@munk-media.com'
    
    // Smart fallback: use Resend onboarding email if domain not verified
    const useOnboarding = process.env.RESEND_USE_ONBOARDING === '1'
    const from = (process.env.CONTACT_FROM_EMAIL && !useOnboarding)
      ? process.env.CONTACT_FROM_EMAIL
      : 'Munk Media <onboarding@resend.dev>'

    // Send email using Resend
    const subject = `New inquiry from ${validatedData.name} — Munk Media`
    const html = `
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Company:</strong> ${validatedData.company || '-'}</p>
      <p><strong>Phone:</strong> ${validatedData.phone || '-'}</p>
      <p><strong>Project Details:</strong></p>
      <pre style="white-space:pre-wrap;font-family:Inter,system-ui,Arial;background:#f5f5f5;padding:15px;border-radius:8px;">${validatedData.message}</pre>
      <hr />
      <small>Sent from munk-media.com</small>
    `

    await resend.emails.send({
      from,
      to,
      replyTo: validatedData.email,
      subject,
      html,
    })

    // Return success
    return {
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    
    return {
      success: false,
      error: 'Failed to send message. Please email us directly at info@munk-media.com.',
    }
  }
}


