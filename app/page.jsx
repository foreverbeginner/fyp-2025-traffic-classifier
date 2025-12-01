export default function Home(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Direct Traffic Landing</h2>
      <p className="mb-4">This page acts as the reference for direct visits (no UTM/referrer).</p>
      <div className="space-x-4">
        <a href="/contact" className="btn">Contact</a>
        <a href="/landing" className="btn">Open landing</a>
        <a href="/search" className="btn">Fake search (organic)</a>
      </div>
    </div>
  )
}
