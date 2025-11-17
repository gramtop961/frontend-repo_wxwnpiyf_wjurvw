import { useFeed } from '../context/FeedContext'
import ProductCard from '../components/ProductCard'

export default function Explore() {
  const { products, hasMore, loadMore, categories, category, setCategory } = useFeed()

  return (
    <div className="flex-1">
      {/* Top filter bar */}
      <div className="sticky top-14 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border ${
                category === c ? 'bg-black text-white border-black' : 'hover:bg-gray-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid like TikTok tiles */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center py-8">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-md bg-black text-white hover:opacity-90"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
