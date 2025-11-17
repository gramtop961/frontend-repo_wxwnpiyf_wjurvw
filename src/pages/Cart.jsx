import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, total, addToCart, removeFromCart, deleteFromCart, clearCart } = useCart()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link to="/explore" className="text-blue-600 hover:underline">Browse products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4 bg-white">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded" onClick={() => removeFromCart(item.id)}>-</button>
                <span className="w-6 text-center">{item.qty}</span>
                <button className="px-3 py-1 border rounded" onClick={() => addToCart(item)}>+</button>
              </div>
              <button className="text-sm text-red-600 hover:underline" onClick={() => deleteFromCart(item.id)}>Remove</button>
            </div>
          ))}

          <div className="flex items-center justify-between border-t pt-4">
            <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded" onClick={clearCart}>Clear</button>
              <Link to="/checkout" className="px-4 py-2 bg-black text-white rounded">Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
