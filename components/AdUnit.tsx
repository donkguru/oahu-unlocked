'use client'

import { useEffect, useRef } from 'react'

interface AdUnitProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
}

const PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID

export default function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (!PUB_ID || pushed.current) return
    try {
      // @ts-expect-error adsbygoogle is injected by the AdSense script
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      pushed.current = true
    } catch {
      // silently ignore push errors (e.g. ad blockers)
    }
  }, [])

  // Render nothing until a publisher ID is configured
  if (!PUB_ID) return null

  return (
    <div className={`ad-unit overflow-hidden text-center ${className}`}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
