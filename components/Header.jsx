export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-xl font-semibold">Ammar — Marketing FYP</h1>
        <nav className="space-x-4">
          <a href="/">Home</a>
          <a href="/ad">Ad</a>
          <a href="/search">Search</a>
          <a href="/landing">Landing</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
