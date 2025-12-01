// Next.js App Router replacement for deprecated `export const config`
// No configuration block is needed here.

export async function GET(req) {
  const gif = Buffer.from(
    '47494638396101000100800000ffffff00000021f90401000001002c00000000010001000002024401003b',
    'hex'
  )

  return new Response(gif, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store'
    }
  })
}
