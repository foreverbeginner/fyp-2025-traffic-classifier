export async function POST(req){
  try {
    const body = await req.json().catch(()=>({}))
    console.log('[API] conversion', body)
    // You can also write to a simple file or external logging if needed (but avoid in Vercel)
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch(e){
    console.error(e)
    return new Response(JSON.stringify({ ok:false }), { status: 500 })
  }
}
