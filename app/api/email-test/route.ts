import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function GET() {
  try {
    await sendEmail({
      subject: 'Resend Preview Test',
      html: '<b>This is a Resend preview test</b>',
      text: 'This is a Resend preview test',
      replyTo: 'test@example.com',
    })
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message })
  }
}

