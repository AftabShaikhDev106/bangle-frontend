import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    subtitle: 'TIMELESS COLLECTION',
    titleLine1: 'Jewelry That',
    titleLine2: 'Completes You.',
    description: 'From everyday elegance to grand celebrations, find pieces that tell your story.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80',
    buttonText: 'EXPLORE ALL JEWELRY',
    buttonLink: '#catalog-grid',
  },
  {
    id: 2,
    subtitle: 'ROYAL KUNDAN EDIT',
    titleLine1: 'Crafted for',
    titleLine2: 'Grand Moments.',
    description: 'Exquisite traditional Kundan & Polki designs handcrafted by master artisans.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1600&q=80',
    buttonText: 'DISCOVER KUNDAN',
    buttonLink: '#catalog-grid',
  },
  {
    id: 3,
    subtitle: 'PEARL & DIAMOND',
    titleLine1: 'Elegance in',
    titleLine2: 'Every Detail.',
    description: 'Luminous pearls and shimmering accents designed to elevate any outfit.',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1600&q=80',
    buttonText: 'SHOP PEARL EDIT',
    buttonLink: '#catalog-grid',
  },
  {
    id: 4,
    subtitle: 'BRIDAL CELEBRATION',
    titleLine1: 'The Ultimate',
    titleLine2: 'Statement Sets.',
    description: 'Heritage craftsmanship made to make your special day truly unforgettable.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80',
    buttonText: 'VIEW BRIDAL SETS',
    buttonLink: '#catalog-grid',
  },
]

const JewelryHero = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlideIndex])

  const activeSlide = heroSlides[currentSlideIndex]

  return (
    <section className="relative w-full bg-[#F5F2ED] border-b border-stone-200 overflow-hidden">
      {/* Sleek landscape rectangular ratio grid */}
      <div className="w-full h-auto lg:h-[400px] xl:h-[430px] grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Side: Text Box */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 py-8 lg:py-10 z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[11px] text-stone-500 mb-3 font-sans">
            <a href="/" className="hover:text-tertiary transition-colors">Home</a>
            <span>›</span>
            <span className="text-tertiary font-medium">Jewelry</span>
          </nav>

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

            <div className="pt-2">
              <a
                href={activeSlide.buttonLink}
                className="inline-flex items-center gap-3 bg-[#1B1B1B] text-white px-6 py-3 text-[11px] font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#333] transition-all duration-300 group shadow-2xs"
              >
                <span>{activeSlide.buttonText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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
          {/* Subtle soft gradient fade on desktop left border */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F2ED] to-transparent hidden lg:block pointer-events-none" />
        </div>

        {/* Floating Slide Control Pill (Bottom Right) */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:right-12 z-20 bg-white/95 backdrop-blur-md px-4 py-2 flex items-center gap-3.5 text-xs font-sans rounded-xs shadow-md border border-stone-200/80">
          <span className="font-serif text-xs sm:text-sm tracking-widest font-medium text-stone-800">
            0{currentSlideIndex + 1} <span className="text-stone-300 font-light mx-1">——</span> 0{heroSlides.length}
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

export default JewelryHero
