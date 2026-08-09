import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  try {
    const { serviceName, formData, timestamp } = await request.json()

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const fields = Object.entries(formData || {})
      .map(([key, value]) => `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:capitalize;">${key}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${String(value).replace(/</g, '&lt;')}</td></tr>`)
      .join('')

    await resend.emails.send({
      from: 'Boodow Website <onboarding@resend.dev>',
      to: ['info@boodowsolutions.com'],
      subject: `New Request: ${serviceName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0A2342;padding:24px;text-align:center;">
            <h1 style="color:#FEDD00;margin:0;font-size:20px;">New ${serviceName} Request</h1>
          </div>
          <div style="padding:24px;background:#f9fafb;">
            <table style="width:100%;border-collapse:collapse;background:#fff;">${fields}</table>
            <p style="color:#6b7280;font-size:12px;margin-top:16px;">Submitted: ${timestamp || new Date().toISOString()}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
