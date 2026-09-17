import React from 'react'
import { ArrowRight } from 'lucide-react'
import { womenCategories } from '../../data/womenData'

const WomenCategoryBar = ({ activeCategory, onSelectCategory }) => {
  return (
    <section className="bg-[#FAF8F5] border-b border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-2">
          {womenCategories.map((cat) => {
            const isActive = activeCategory === cat.name
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className={`group flex flex-col w-32 sm:w-36 lg:w-40 flex-shrink-0 rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer focus:outline-none text-left bg-white shadow-2xs ${
                  isActive
                    ? 'border-[#B58A5A] ring-2 ring-[#B58A5A]/30 shadow-sm'
                    : 'border-stone-200/80 hover:border-stone-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Top Image Container */}
                <div className="w-full h-24 sm:h-28 lg:h-32 overflow-hidden bg-stone-100 relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Bottom Label Container with Arrow */}
                <div className="w-full bg-[#F6F4F0] px-3 py-2.5 flex items-center justify-between border-t border-stone-200/60 font-sans text-xs">
                  <span className={`font-medium tracking-tight ${isActive ? 'text-[#B58A5A] font-semibold' : 'text-stone-800 group-hover:text-tertiary'}`}>
                    {cat.name}
                  </span>
                  <ArrowRight
                    size={12}
                    className={`transition-transform duration-300 group-hover:translate-x-1 ${
                      isActive ? 'text-[#B58A5A]' : 'text-stone-600'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WomenCategoryBar
