import React from 'react'
import { Link } from 'react-router-dom'
import { circleCategories } from '../../data/landingData'

const CategoryBar = () => {
  return (
    <section className="bg-primary border-b border-stone-200/70 py-3.5 sm:py-5 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Container: centered on larger screens, smooth horizontal scroll on mobile */}
        <div className="flex items-center gap-5 sm:gap-7 md:gap-9 lg:gap-11 overflow-x-auto no-scrollbar py-1 justify-start sm:justify-center">
          {circleCategories.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="flex flex-col items-center gap-2 group shrink-0 cursor-pointer focus:outline-none"
            >
              {/* Circular Avatar Ring matching the screenshot */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full p-[2.5px] border border-[#D7CBBC] group-hover:border-heading transition-all duration-300 shadow-2xs group-hover:shadow-md bg-[#F4EFEA]">
                <div className="w-full h-full rounded-full overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Category Label */}
              <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-tertiary group-hover:text-heading transition-colors duration-200 text-center whitespace-nowrap">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBar
