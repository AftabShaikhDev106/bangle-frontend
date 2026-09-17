import React from 'react'
import { ArrowRight } from 'lucide-react'

const CollectionsPromoBanner = () => {
  return (
    <section className="bg-[#F6F4F0] my-12 sm:my-16 py-8 sm:py-12 border-y border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Model Image */}
          <div className="md:col-span-4 h-64 sm:h-72 lg:h-80 rounded-xs overflow-hidden bg-stone-200 shadow-2xs">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
              alt="Model with statement jewelry"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Middle Text Area */}
          <div className="md:col-span-4 text-center md:text-left space-y-3 px-2 lg:px-4 py-4">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block">
              COMPLETE YOUR LOOK
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-tertiary leading-tight font-light">
              Handpicked Looks, <br />
              <span className="italic font-normal">Just for You</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              From statement pieces to everyday essentials, explore our curated collections and find your perfect style.
            </p>

            <div className="pt-2">
              <a
                href="#collections-catalog"
                className="inline-flex items-center gap-3 bg-[#8C6D46] text-white px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#6D5333] transition-all duration-300 group shadow-2xs"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Product Detail Image */}
          <div className="md:col-span-4 h-64 sm:h-72 lg:h-80 rounded-xs overflow-hidden bg-stone-200 shadow-2xs">
            <img
              src="https://images.unsplash.com/photo-1611591475285-a36ad5e14391?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Bangles Collection"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CollectionsPromoBanner
