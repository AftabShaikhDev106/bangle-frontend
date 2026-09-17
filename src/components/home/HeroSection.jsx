import React from 'react'
import Button from '../common/Button'
import PlaceholderImage from '../common/PlaceholderImage'
import { RotateCcw, ShieldCheck, Sparkles, Truck } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="bg-secondary py-12 lg:py-20 overflow-hidden border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-heading" />
              <span className="text-xs font-sans font-light tracking-[0.25em] uppercase text-heading">
                NEW · LINEN SERIES / SPRING / SUMMER 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-tertiary leading-[1.05] tracking-tight mb-6">
              Elevate Your <br />
              <span className="italic text-heading font-serif">Everyday</span> Style.
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-placeholder font-sans font-light leading-relaxed mb-8 max-w-xl">
              A considered edit of tailored silhouettes, breathable fabrics, and fine jewelry — designed to move with the modern woman, from morning coffee to candlelit evenings.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <Button text="SHOP COLLECTION" arrow />
              <Button variant="outline" text="VIEW LOOKBOOK" />
            </div>

            {/* Value Propositions Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-300/60 text-xs font-sans text-stone-600">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-heading shrink-0" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-heading shrink-0" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-heading shrink-0" />
                <span>Secure Pay</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-heading shrink-0" />
                <span>Premium Quality</span>
              </div>
            </div>

          </div>

          {/* Right Featured Product Placeholder Div Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Featured Image Placeholder */}
              <PlaceholderImage
                aspectRatio="aspect-[4/5]"
                bgGradient="from-[#EBE0D2] via-[#DFCFBC] to-[#C9B59D]"
                badge="FEATURED"
                badgeBg="bg-heading text-white"
                showIcon={false}
                className="shadow-xl rounded-xs"
              >
                {/* Visual Editorial Element inside Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full border border-white/40 flex items-center justify-center mb-4 bg-white/10 backdrop-blur-xs">
                    <span className="font-serif text-3xl font-light text-tertiary">ORA</span>
                  </div>
                  <span className="font-serif text-2xl text-tertiary font-normal tracking-wider">
                    Sun Wrap Dress
                  </span>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-tertiary/70 mt-1">
                    Linen Collection
                  </span>
                </div>

                {/* Floating Product Price Tag Card */}
                <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm p-4 shadow-lg border border-stone-200 rounded-xs flex items-center gap-4 animate-in fade-in duration-700">
                  <div>
                    <span className="block text-[10px] uppercase font-sans tracking-widest text-placeholder">
                      Featured Piece
                    </span>
                    <h4 className="font-serif text-base text-tertiary font-medium">
                      Sun Wrap Dress
                    </h4>
                    <span className="font-sans text-sm font-semibold text-tertiary">
                      ₹ 5,290
                    </span>
                  </div>
                  <button
                    type="button"
                    className="px-3 py-2 bg-tertiary text-white text-[10px] uppercase font-sans tracking-widest hover:bg-heading transition-colors cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </PlaceholderImage>

              {/* Decorative Accent Background Box */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-heading/30 -z-10 rounded-xs hidden sm:block" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection