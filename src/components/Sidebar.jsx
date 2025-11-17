import { NavLink } from 'react-router-dom'
import { useFeed } from '../context/FeedContext'

export default function Sidebar() {
  const { categories, category, setCategory } = useFeed()

  return (
    <aside className="hidden md:block w-56 shrink-0 border-r bg-white/60">
      <div className="p-4 space-y-2 sticky top-14">
        <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-2">Categories</h3>
        <div className="flex flex-col gap-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                category === c ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
