import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    tag: 'AUTUMN, DEFINED',
    titleLine1: 'Natural textures.',
    titleLine2: 'Considered form.',
    description: 'A considered edit of tailored silhouettes, breathable pure linen, and architectural drape designed for effortless elegance.',
    buttonText: 'EXPLORE COLLECTION',
    buttonLink: '/collections',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Natural textures and considered form - Luxury Linen Collection',
    objectPosition: 'object-[65%_center] sm:object-center',
  },
  {
    id: 2,
    tag: 'SIGNATURE JEWELRY · HEIRLOOM',
    titleLine1: 'Artisanal gold.',
    titleLine2: 'Modern heirlooms.',
    description: 'Exquisite Kundan, royal Polki bangles, and heirloom adornments handcrafted by master artisans to celebrate every milestone.',
    buttonText: 'SHOP BANGLES & JEWELRY',
    buttonLink: '/jewelry',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Artisanal gold modern heirlooms jewelry collection',
    objectPosition: 'object-center',
  },
  {
    id: 3,
    tag: 'ROYAL WEDDING & FESTIVE 2026',
    titleLine1: 'Timeless majesty.',
    titleLine2: 'Regal celebrations.',
    description: 'Bespoke bridal lehengas, luminous silks, and ceremonial adornments designed for your most unforgettable moments.',
    buttonText: 'VIEW BRIDAL EDIT',
    buttonLink: '/women',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Royal wedding and festive collections',
    objectPosition: 'object-center',
  },
  {
    id: 4,
    tag: 'NEW ARRIVALS · SPRING 2026',
    titleLine1: 'Quiet luxury.',
    titleLine2: 'Everyday grace.',
    description: 'Understated silhouettes, neutral earthy tones, and refined detailing designed to move seamlessly with the modern muse.',
    buttonText: 'DISCOVER NEW IN',
    buttonLink: '/women',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2400&q=85',
    imageAlt: 'Quiet luxury everyday grace fashion collection',
    objectPosition: 'object-center',
  },
]

const HeroCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [autoPlayKey, setAutoPlayKey] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const totalSlides = heroSlides.length

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides)
    setAutoPlayKey((k) => k + 1)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setAutoPlayKey((k) => k + 1)
  }, [totalSlides])

  const goToSlide = (index) => {
    setCurrentSlideIndex(index)
    setAutoPlayKey((k) => k + 1)
  }

  // Auto-play timer (6 seconds per slide), resets on user manual navigation or pause
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused, autoPlayKey, totalSlides])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Robust touch swipe support for mobile & tablet (with tap protection)
  const handleTouchStart = (e) => {
    const startX = e.touches[0].clientX
    touchStartX.current = startX
    touchEndX.current = startX // initialize to same so tap diff is 0!
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    const threshold = 45 // minimum pixel distance to trigger swipe

    if (diff > threshold) {
      nextSlide()
    } else if (diff < -threshold) {
      prevSlide()
    }

    // Reset coordinates after gesture completes
    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1B1B1B] select-none"
      aria-label="Featured Collections Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Responsive Height Container */}
      <div className="relative w-full h-[460px] xs:h-[480px] sm:h-[500px] md:h-[540px] lg:h-[580px] xl:h-[640px]">
        {/* Slides rendering */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlideIndex

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* High-Definition Photography with subtle ambient zoom */}
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className={`w-full h-full object-cover ${slide.objectPosition} transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                {/* Cinematic multi-stop gradient scrims for pristine typography readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent sm:from-black/75 sm:via-black/35 sm:to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Text Overlay Content with pb-16/pb-20 on mobile to strictly prevent overlapping bottom controls */}
                <div className="absolute inset-0 flex items-center pb-16 sm:pb-0">
                  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
                    <div className="max-w-xl lg:max-w-2xl text-left">
                      {/* Upper Tagline */}
                      <div
                        className={`inline-flex items-center gap-2 mb-2 sm:mb-4 transition-all duration-700 delay-100 ${
                          isActive
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                      >
                        <span className="h-px w-5 sm:w-8 bg-heading" />
                        <span className="text-[10px] sm:text-xs font-sans tracking-[0.22em] sm:tracking-[0.25em] uppercase text-stone-200 font-medium drop-shadow-sm">
                          {slide.tag}
                        </span>
                      </div>

                      {/* Main Headline */}
                      <h2
                        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.1] tracking-tight mb-3 sm:mb-5 drop-shadow-md transition-all duration-700 delay-200 ${
                          isActive
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {slide.titleLine1} <br />
                        <span className="font-light italic text-[#EBE0D2]">
                          {slide.titleLine2}
                        </span>
                      </h2>

                      {/* Description (line-clamped to 2 lines on mobile) */}
                      <p
                        className={`text-xs sm:text-sm md:text-base text-stone-200/90 font-sans font-light leading-relaxed mb-5 sm:mb-8 max-w-xs sm:max-w-lg line-clamp-2 sm:line-clamp-none drop-shadow-sm transition-all duration-700 delay-300 ${
                          isActive
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {slide.description}
                      </p>

                      {/* CTA Button */}
                      <div
                        className={`transition-all duration-700 delay-400 ${
                          isActive
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <Link
                          to={slide.buttonLink}
                          className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-2.5 sm:py-3.5 border border-white/70 bg-white/10 hover:bg-white hover:text-tertiary active:scale-[0.98] text-white text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium backdrop-blur-xs transition-all duration-300 group shadow-md cursor-pointer"
                        >
                          <span>{slide.buttonText}</span>
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform duration-200"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* Desktop Side Navigation Arrows (Floating) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prevSlide()
          }}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/25 backdrop-blur-xs transition-all duration-200 cursor-pointer focus:outline-none"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            nextSlide()
          }}
          aria-label="Next slide"
          className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/25 backdrop-blur-xs transition-all duration-200 cursor-pointer focus:outline-none"
        >
          <ChevronRight size={20} />
        </button>

        {/* Floating Slide Control Pill (Bottom Right) */}
        <div
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 sm:bottom-6 sm:right-8 lg:right-12 z-20 bg-black/80 sm:bg-black/60 backdrop-blur-md px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full border border-white/25 shadow-xl flex items-center gap-2 sm:gap-3 text-white"
        >
          {/* Slide Indicator Dots/Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5" aria-label="Slide indicators">
            {heroSlides.map((_, index) => {
              const isCurrent = index === currentSlideIndex
              return (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    goToSlide(index)
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                    isCurrent
                      ? 'w-5 sm:w-7 bg-white'
                      : 'w-1.5 sm:w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              )
            })}
          </div>

          {/* Slide Index Counter */}
          <span className="text-[10px] sm:text-xs font-serif tracking-widest text-white/90 pl-1 border-l border-white/20 select-none">
            0{currentSlideIndex + 1} <span className="text-white/40 font-light mx-0.5">/</span> 0{totalSlides}
          </span>

          {/* Quick Prev / Next Arrows with generous touch targets */}
          <div className="flex items-center gap-1 border-l border-white/20 pl-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              aria-label="Previous Slide"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 active:bg-white/30 rounded-full transition-colors cursor-pointer focus:outline-none"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              aria-label="Next Slide"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 active:bg-white/30 rounded-full transition-colors cursor-pointer focus:outline-none"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
