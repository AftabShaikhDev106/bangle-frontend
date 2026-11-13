import React from 'react'
import { Link } from 'react-router-dom'
import { MoveRight, RotateCcw, ShieldCheck, Sparkles, Truck } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-primary py-14 sm:py-18 lg:py-22 overflow-hidden border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtitle / Tagline */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="h-px w-8 bg-heading" />
            <span className="text-xs font-sans font-light tracking-[0.25em] uppercase text-heading">
              NEW · LINEN SERIES / SPRING / SUMMER 2026
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-tertiary leading-[1.08] tracking-tight mb-5 sm:mb-6">
            Elevate Your <br />
            <span className="italic text-heading font-serif">Everyday</span> Style.
          </h2>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-placeholder font-sans font-light leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            A considered edit of tailored silhouettes, breathable fabrics, and fine jewelry — designed to move with the modern woman, from morning coffee to candlelit evenings.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-tertiary text-white text-xs font-medium uppercase tracking-[0.2em] hover:bg-stone-800 active:scale-[0.99] transition-all duration-300 group shadow-xs cursor-pointer"
            >
              <span>SHOP COLLECTION</span>
              <MoveRight
                size={18}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

            <Link
              to="/women"
              className="inline-flex items-center justify-center px-8 py-4 border border-tertiary text-tertiary text-xs font-medium uppercase tracking-[0.2em] hover:bg-tertiary hover:text-white active:scale-[0.99] transition-all duration-300 cursor-pointer"
            >
              <span>VIEW LOOKBOOK</span>
            </Link>
          </div>

          {/* Value Propositions Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-stone-300/60 text-xs font-sans text-stone-600">
            <div className="flex items-center gap-2.5">
              <Truck size={17} className="text-heading shrink-0" />
              <span className="font-medium text-stone-700">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RotateCcw size={17} className="text-heading shrink-0" />
              <span className="font-medium text-stone-700">Easy Returns</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck size={17} className="text-heading shrink-0" />
              <span className="font-medium text-stone-700">Secure Pay</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles size={17} className="text-heading shrink-0" />
              <span className="font-medium text-stone-700">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
