import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="p-6">
        <p>Product not found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="rounded-xl overflow-hidden border bg-white">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-extrabold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</div>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
