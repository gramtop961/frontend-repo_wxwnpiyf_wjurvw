import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Home, Compass } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { items } = useCart()
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg">
          <span className="inline-block bg-black text-white px-2 py-1 rounded">OG</span>
          <span>Store</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            <span className="inline-flex items-center gap-1"><Home size={16}/> Home</span>
          </NavLink>
          <NavLink to="/explore" className={navLinkClass}>
            <span className="inline-flex items-center gap-1"><Compass size={16}/> Explore</span>
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            <span className="inline-flex items-center gap-1"><ShoppingCart size={16}/> Cart ({count})</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
