import React from 'react'
import { quickCategories } from '../../data/landingData'

const CategoryBar = () => {
  return (
    <section className="bg-primary py-6 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal Scroll Container */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-2">
          {quickCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              className="flex flex-col items-center gap-2 group shrink-0 cursor-pointer focus:outline-none"
            >
              {/* Circular Color Avatar Placeholder Div */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr ${item.color} p-0.5 shadow-xs border-2 border-transparent group-hover:border-heading transition-all group-hover:scale-105 flex items-center justify-center`}
              >
                <div className="w-full h-full rounded-full bg-white/40 backdrop-blur-2xs flex items-center justify-center">
                  <span className="font-serif text-sm font-medium text-tertiary">
                    {item.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Label */}
              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-tertiary group-hover:text-heading transition-colors">
                {item.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CategoryBar
