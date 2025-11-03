import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    RESEND_API_KEY: Boolean(!!process.env.RESEND_API_KEY),
    EMAIL_FROM: Boolean(!!process.env.EMAIL_FROM),
    EMAIL_TO: Boolean(!!process.env.EMAIL_TO),
    NODE_ENV: process.env.NODE_ENV,
  })
}

