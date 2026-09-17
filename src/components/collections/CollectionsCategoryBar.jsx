import React from 'react'
import { LayoutGrid } from 'lucide-react'
import { collectionsCategories } from '../../data/collectionsData'

const CollectionsCategoryBar = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="bg-primary border-b border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar py-2">
          {collectionsCategories.map((cat) => {
            const isActive = activeCategory === cat.name || (cat.id === 'all-collections' && activeCategory === 'All')
            
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className="flex flex-col items-center group flex-shrink-0 cursor-pointer focus:outline-none"
              >
                {/* Avatar Circle Container */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-[#B58A5A] ring-offset-2 scale-105'
                      : 'hover:ring-1 hover:ring-stone-300 hover:scale-105'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#F5F2ED] relative shadow-2xs flex items-center justify-center">
                    {cat.isGridIcon ? (
                      <div className="w-full h-full bg-[#EFECE6] flex items-center justify-center text-[#B58A5A] group-hover:scale-110 transition-transform">
                        <LayoutGrid size={24} strokeWidth={1.5} />
                      </div>
                    ) : (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>

                {/* Category Label */}
                <span
                  className={`mt-2.5 text-xs font-sans tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#B58A5A] font-semibold'
                      : 'text-stone-700 group-hover:text-tertiary font-normal'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CollectionsCategoryBar
