import { NextRequest, NextResponse } from 'next/server'

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let email: string

  try {
    const body = await req.json()
    email = (body.email ?? '').trim().toLowerCase()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  // ── Mailchimp integration (optional) ──────────────────────────────────────
  // To enable, set these env vars in Vercel:
  //   MAILCHIMP_API_KEY   e.g. abc123-us1
  //   MAILCHIMP_LIST_ID   e.g. a1b2c3d4e5
  // The data centre is the suffix after the dash in your API key (e.g. "us1")
  const apiKey = process.env.MAILCHIMP_API_KEY
  const listId = process.env.MAILCHIMP_LIST_ID

  if (apiKey && listId) {
    const dc = apiKey.split('-')[1]
    const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      // 400 with title "Member Exists" is fine — already subscribed
      if (data.title !== 'Member Exists') {
        return NextResponse.json({ error: 'Subscription failed. Please try again.' }, { status: 500 })
      }
    }

    return NextResponse.json({ ok: true })
  }

  // ── Fallback: no provider configured ──────────────────────────────────────
  // Still return success so the UI works during development / before Mailchimp is set up.
  // In production without env vars, signups are acknowledged but not persisted.
  console.log(`[subscribe] email captured (no provider): ${email}`)
  return NextResponse.json({ ok: true })
}
