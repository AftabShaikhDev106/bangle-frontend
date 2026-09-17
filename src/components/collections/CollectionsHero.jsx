import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const collectionsHeroSlides = [
  {
    id: 1,
    subtitle: 'OUR COLLECTIONS',
    titleLine1: 'Timeless Styles.',
    titleLine2: 'For Every You.',
    description: 'Explore our curated collections of traditional, festive, bridal and everyday wear — each piece crafted to celebrate your unique story.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    subtitle: 'BRIDAL EDIT',
    titleLine1: 'Heritage Royal',
    titleLine2: 'Craftsmanship.',
    description: 'Bespoke bridal lehengas and heirloom jewelry crafted to make your wedding day majestic.',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    subtitle: 'FESTIVE CELEBRATION',
    titleLine1: 'Luminous Colors &',
    titleLine2: 'Intricate Details.',
    description: 'Vibrant drapes and exquisite embroideries designed for every festive gathering.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    subtitle: 'EVERYDAY ELEGANCE',
    titleLine1: 'Effortless Silk &',
    titleLine2: 'Breathable Linens.',
    description: 'Understated luxury for the modern woman who values comfort and sophisticated style.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80',
  },
]

const CollectionsHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % collectionsHeroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + collectionsHeroSlides.length) % collectionsHeroSlides.length)
  }

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlideIndex])

  const activeSlide = collectionsHeroSlides[currentSlideIndex]

  return (
    <section className="relative w-full bg-[#F5F2ED] border-b border-stone-200 overflow-hidden">
      {/* Sleek landscape rectangular ratio grid */}
      <div className="w-full h-auto lg:h-[400px] xl:h-[430px] grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Side: Text Box */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 py-8 lg:py-10 z-10">
          
          {/* Slide Text Content */}
          <div key={activeSlide.id} className="space-y-3 sm:space-y-3.5 animate-in fade-in duration-500">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#B58A5A] font-semibold">
              {activeSlide.subtitle}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-tertiary leading-[1.15] font-light">
              {activeSlide.titleLine1} <br />
              <span className="italic font-normal">{activeSlide.titleLine2}</span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md leading-relaxed">
              {activeSlide.description}
            </p>
          </div>

        </div>

        {/* Right Side: Sleek full-bleed rectangular hero image */}
        <div className="lg:col-span-6 xl:col-span-7 relative h-64 sm:h-80 lg:h-full w-full overflow-hidden bg-stone-200">
          <img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.subtitle}
            className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-700"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F2ED] to-transparent hidden lg:block pointer-events-none" />
        </div>

        {/* Floating Slide Control Pill (Bottom Right) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:right-12 z-20 bg-white/95 backdrop-blur-md px-4 py-2 flex items-center gap-3.5 text-xs font-sans rounded-xs shadow-md border border-stone-200/80">
          <span className="font-serif text-xs sm:text-sm tracking-widest font-medium text-stone-800">
            0{currentSlideIndex + 1} <span className="text-stone-300 font-light mx-1">——</span> 0{collectionsHeroSlides.length}
          </span>
          <div className="flex items-center gap-1 border-l border-stone-200 pl-2.5">
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 text-stone-600 hover:text-tertiary transition-colors cursor-pointer focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 text-stone-600 hover:text-tertiary transition-colors cursor-pointer focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CollectionsHero
