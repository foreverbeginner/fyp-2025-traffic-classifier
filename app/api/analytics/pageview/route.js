export async function POST(req){
  console.log('[API] pageview', Date.now())
  return new Response(JSON.stringify({ ok:true }), { status:200 })
}
