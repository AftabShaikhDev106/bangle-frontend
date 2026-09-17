import React, { useRef } from 'react'
import SectionHeader from '../common/SectionHeader'
import ProductCard from '../cards/ProductCard'
import { bestSellers } from '../../data/landingData'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BestSellersSection = () => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-secondary border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex items-end justify-between mb-8">
          <SectionHeader
            tagline="THIS WEEK"
            title="Best Sellers"
            description="Pieces our community keeps coming back for."
            linkText="View All"
            align="left"
          />

          {/* Navigation Chevron Buttons */}
          <div className="hidden sm:flex items-center gap-2 pb-6">
            <button
              onClick={scrollLeft}
              type="button"
              aria-label="Previous items"
              className="p-2.5 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 hover:text-black transition-colors shadow-xs active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              type="button"
              aria-label="Next items"
              className="p-2.5 rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 hover:text-black transition-colors shadow-xs active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Product Cards Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-1 sm:px-0 scroll-pl-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="flex-none w-[240px] sm:w-[290px] md:w-[310px] lg:w-[320px] snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BestSellersSection
