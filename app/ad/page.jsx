'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdPage(){
  useEffect(() => {
    // simulate ad server reading and redirecting (after small delay)
    const utm = '?utm_source=google&utm_medium=cpc&utm_campaign=test_ad_01'
    // fire an analytics event (ad click)
    fetch('/api/analytics/event', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ event:'ad_click', campaign:'test_ad_01', ts: Date.now() })
    }).catch(()=>{})
    // small delay to create traffic pattern
    setTimeout(() => {
      window.location.href = '/landing' + utm
    }, 800)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mock Ad (click will redirect with UTM)</h2>
      <p>Simulates an ad click → redirect to landing with UTM params.</p>
    </div>
  )
}
