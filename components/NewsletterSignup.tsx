'use client'

import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (state === 'loading' || state === 'success') return
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setState('error')
      } else {
        setState('success')
        setEmail('')
      }
    } catch {
      setErrorMsg('Network error. Please try again.')
      setState('error')
    }
  }

  return (
    <section className="py-16 px-6 bg-primary">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-5">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">
          Oahu insider tips, straight to your inbox
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          New restaurant finds, hidden beaches, and local events — no spam, unsubscribe any time.
        </p>

        {state === 'success' ? (
          <div className="flex items-center justify-center gap-3 text-white">
            <CheckCircle className="h-6 w-6 flex-shrink-0" />
            <span className="text-lg font-medium">You're in! Talk to you soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={state === 'loading'}
              className="flex-1 rounded-lg px-4 py-3 text-foreground bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 font-semibold hover:bg-accent/90 transition-colors disabled:opacity-60"
            >
              {state === 'loading' ? 'Subscribing…' : (
                <>Subscribe <ArrowRight className="h-4 w-4" /></>
              )}
            </button>
          </form>
        )}

        {state === 'error' && (
          <p className="mt-3 text-sm text-white/80">{errorMsg}</p>
        )}

        <p className="mt-5 text-xs text-white/50">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  )
}
