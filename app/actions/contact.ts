'use server'

import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact'

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    // Honeypot check - if website field is filled, it's a bot
    if (validatedData.website) {
      return { success: false, error: 'Invalid submission' }
    }

    // TODO: In production, integrate with your email service (SendGrid, Resend, etc.)
    // For now, we'll just log the submission
    console.log('📧 Contact form submission:', {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      phone: validatedData.phone,
      budget: validatedData.budget,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    })

    // Simulate a brief delay (as if sending email)
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success
    return {
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      }
    }
    
    return {
      success: false,
      error: 'Something went wrong. Please try again.',
    }
  }
}

