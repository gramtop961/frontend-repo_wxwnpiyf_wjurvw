import React, { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.item.id)
      let items
      if (existing) {
        items = state.items.map((i) =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        )
      } else {
        items = [...state.items, { ...action.item, qty: 1 }]
      }
      const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
      return { items, total }
    }
    case 'REMOVE': {
      const items = state.items
        .map((i) => (i.id === action.id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
      const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
      return { items, total }
    }
    case 'DELETE': {
      const items = state.items.filter((i) => i.id !== action.id)
      const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
      return { items, total }
    }
    case 'CLEAR':
      return { items: [], total: 0 }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

  const value = useMemo(
    () => ({
      items: state.items,
      total: state.total,
      addToCart: (item) => dispatch({ type: 'ADD', item }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE', id }),
      deleteFromCart: (id) => dispatch({ type: 'DELETE', id }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    }),
    [state]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
