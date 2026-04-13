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

  // ── Brevo integration ─────────────────────────────────────────────────────
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (apiKey && listId) {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(listId)],
        updateEnabled: true,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      // code 'duplicate_parameter' means already subscribed — treat as success
      if (data.code !== 'duplicate_parameter') {
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
