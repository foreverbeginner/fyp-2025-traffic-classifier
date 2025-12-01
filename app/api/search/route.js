export async function POST(req){
  const body = await req.json().catch(()=>({}))
  console.log('[API] search', body)
  return new Response(JSON.stringify({ results:['item1','item2'] }), { status:200 })
}
