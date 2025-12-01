export async function POST(req){
  const body = await req.json().catch(()=>({}))
  console.log('[API] event', body)
  return new Response(JSON.stringify({ ok:true }), { status:200 })
}
