'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Landing(){
  const sp = useSearchParams()
  const utm = sp.get('utm_source') || null

  useEffect(() => {
    // If utm present, fire a pixel fetch and an analytics event
    if (utm) {
      const img = new Image()
      img.src = `/api/pixel?src=paid&utm=${encodeURIComponent(utm)}`
      fetch('/api/analytics/event', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ event:'landing_view', utm, ts: Date.now() })
      }).catch(()=>{})
    }
  }, [utm])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Landing Page</h2>
      {utm ? (
        <p className="mb-2">UTM detected: <strong>{utm}</strong></p>
      ) : (
        <p className="mb-2">No UTM (organic or direct)</p>
      )}
      <a href="/contact" className="btn">Contact</a>
    </div>
  )
}
