import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import { FeedProvider } from './context/FeedContext'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Explore from './pages/Explore'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default function App() {
  return (
    <CartProvider>
      <FeedProvider>
        <RootLayout>
          <AppRoutes />
        </RootLayout>
      </FeedProvider>
    </CartProvider>
  )
}
