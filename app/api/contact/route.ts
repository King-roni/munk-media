import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

type Body = {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  website?: string
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Body

    // Validate the data using the schema
    const validationResult = contactFormSchema.safeParse(data)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { ok: false, error: 'Invalid form data' },
        { status: 400 }
      )
    }

    const validatedData = validationResult.data

    // Honeypot check - if website field is filled, it's a bot
    if (validatedData.website) {
      return NextResponse.json(
        { ok: false, error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Compose email
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
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: validatedData.email,
      subject,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 }
    )
  }
}

