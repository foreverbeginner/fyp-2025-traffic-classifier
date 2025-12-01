'use client'
import { useEffect } from 'react'

export default function AnalyticsClient(){
  useEffect(() => {
    // pageview
    fetch('/api/analytics/pageview', { method:'POST' }).catch(()=>{})

    // time-on-page pings every 3s
    const t = setInterval(() => {
      fetch('/api/analytics/event', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ event:'time_ping', ts:Date.now() })
      }).catch(()=>{})
    }, 3000)

    // scroll events (sampled)
    let lastPercent = -1
    const onScroll = () => {
      const percent = Math.min(100, Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100))
      if (percent !== lastPercent && percent % 25 === 0) {
        lastPercent = percent
        fetch('/api/analytics/event', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({ event:'scroll', percent, ts:Date.now() })
        }).catch(()=>{})
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => { clearInterval(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  return null
}
