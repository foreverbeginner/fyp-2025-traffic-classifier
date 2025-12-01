'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contact(){
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const router = useRouter()

  async function onSubmit(e){
    e.preventDefault()
    try {
      await fetch('/api/lead', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name, email, ts: Date.now() })
      })
      router.push('/thank-you')
    } catch(err){
      console.error(err)
      alert('submit failed')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact / Conversion Form</h2>
      <form onSubmit={onSubmit} className="space-y-3 max-w-md">
        <input className="w-full p-2 border rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Submit</button>
      </form>
    </div>
  )
}
