import React, { createContext, useContext, useMemo, useState } from 'react'
import { products as allProducts, categories as baseCategories } from '../data/products'

const FeedContext = createContext(null)

export function FeedProvider({ children }) {
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)
  const pageSize = 6

  const filtered = category === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === category)

  const paginated = filtered.slice(0, page * pageSize)
  const hasMore = paginated.length < filtered.length

  const loadMore = () => setPage((p) => p + 1)

  const categories = baseCategories

  const value = useMemo(
    () => ({ category, setCategory, page, products: paginated, hasMore, loadMore, categories }),
    [category, page, paginated, hasMore]
  )

  return <FeedContext.Provider value={value}>{children}</FeedContext.Provider>
}

export function useFeed() {
  const ctx = useContext(FeedContext)
  if (!ctx) throw new Error('useFeed must be used within FeedProvider')
  return ctx
}
