import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Welcome to OG Store</h1>
      <p className="text-gray-600 max-w-xl mb-8">Discover street-ready essentials in a fast, swipe-like grid. Tap into the Explore feed to browse categories and add your favorites to cart.</p>
      <Link
        to="/explore"
        className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md text-lg hover:opacity-90"
      >
        Explore Products
      </Link>
    </div>
  )
}
