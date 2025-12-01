export const config = { api: { responseLimit: false } }

export async function GET(req){
  const url = new URL(req.url)
  const src = url.searchParams.get('src') || 'unknown'
  console.log('[API] pixel', src)
  const gif = Buffer.from('47494638396101000100800000ffffff00000021f90401000001002c00000000010001000002024401003b', 'hex')
  return new Response(gif, { status:200, headers: { 'Content-Type': 'image/gif' } })
}
