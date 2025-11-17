import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="group rounded-xl overflow-hidden border bg-white hover:shadow-md transition-shadow">
      <div
        className="aspect-[3/4] w-full bg-gray-100 overflow-hidden cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold line-clamp-1">{product.name}</h4>
          <span className="font-bold">${product.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-black text-white rounded-md py-2 text-sm hover:opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
