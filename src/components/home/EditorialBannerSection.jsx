import React from 'react'
import Button from '../common/Button'

const EditorialBannerSection = () => {
  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width Editorial Banner Placeholder Div */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#2C2621] via-[#3B342E] to-[#1F1B18] text-white p-8 md:p-16 lg:p-20 rounded-xs shadow-xl min-h-[420px] flex items-center">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Decorative Floating Monogram Emblem Placeholder */}
          <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 opacity-10 font-serif text-[180px] lg:text-[240px] leading-none select-none pointer-events-none text-white hidden md:block">
            VOL.12
          </div>

          <div className="relative z-10 max-w-xl">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-heading" />
              <span className="text-xs font-sans font-light tracking-[0.25em] uppercase text-heading">
                EDITORIAL · VOL. 12
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mb-4">
              New Season <br /> Collection.
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-8">
              Soft tailoring, sun-washed neutrals, and heirloom jewelry — a wardrobe built for the golden months ahead.
            </p>

            {/* CTA Button */}
            <Button
              text="SHOP NOW"
              bg="bg-heading"
              color="text-white"
              arrow
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default EditorialBannerSection
