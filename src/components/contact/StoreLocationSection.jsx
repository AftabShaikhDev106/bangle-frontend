import React from 'react'
import { ArrowRight, Clock, MapPin, Maximize2, Minus, Plus } from 'lucide-react'

const StoreLocationSection = () => {
  return (
    <section className="bg-primary py-12 sm:py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block mb-1">
            VISIT OUR STORE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-tertiary font-light">
            Find Us
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light mt-1 max-w-lg">
            Experience the world of Maison Ora in person. Visit our flagship store and explore our latest collections, curated just for you.
          </p>
        </div>

        {/* Store Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F5F0] p-6 sm:p-8 rounded-sm border border-stone-200/80 shadow-2xs">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B58A5A] flex-shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-tertiary">
                    Maison Ora Flagship Store
                  </h3>
                  <p className="text-xs font-sans text-stone-600 font-light mt-1 leading-relaxed">
                    123, Fashion Street, Banjara Hills<br />
                    Hyderabad, Telangana – 500034
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B58A5A] flex-shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div className="font-sans text-xs space-y-1">
                  <h4 className="font-medium text-stone-800 uppercase tracking-wider text-[11px]">
                    Store Hours
                  </h4>
                  <p className="text-stone-600 font-light">
                    <span className="font-medium text-stone-700">Mon – Sat:</span> 10:00 AM – 7:00 PM
                  </p>
                  <p className="text-stone-600 font-light">
                    <span className="font-medium text-stone-700">Sun:</span> 11:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#8C6D46] text-white px-6 py-3 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#6D5333] transition-all duration-300 shadow-2xs group"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Interactive Map Mockup Card */}
          <div className="lg:col-span-7 h-72 sm:h-80 lg:h-96 rounded-sm overflow-hidden border border-stone-300 relative shadow-sm bg-[#E5E3DD]">
            {/* Map Background Layer */}
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Map view Banjara Hills"
              className="w-full h-full object-cover opacity-80"
            />
            
            <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />

            {/* Custom Location Marker Pin pointing to Maison Ora */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
              <div className="bg-[#1B1B1B] text-white px-3.5 py-1.5 rounded-xs text-xs font-sans font-medium shadow-md flex items-center gap-1.5 border border-stone-700 animate-bounce">
                <MapPin size={14} className="text-[#B58A5A]" />
                <span>Maison Ora</span>
              </div>
              <div className="w-3 h-3 bg-[#1B1B1B] rotate-45 -mt-1.5" />
            </div>

            {/* Map UI Controls */}
            <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
              <button
                type="button"
                className="w-8 h-8 bg-white text-stone-700 hover:text-tertiary flex items-center justify-center rounded-xs shadow-sm border border-stone-200 cursor-pointer"
                aria-label="Expand map"
              >
                <Maximize2 size={14} />
              </button>
            </div>

            <div className="absolute bottom-3 right-3 flex flex-col gap-1 z-10">
              <button
                type="button"
                className="w-8 h-8 bg-white text-stone-700 hover:text-tertiary flex items-center justify-center rounded-xs shadow-sm border border-stone-200 cursor-pointer"
                aria-label="Zoom in"
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                className="w-8 h-8 bg-white text-stone-700 hover:text-tertiary flex items-center justify-center rounded-xs shadow-sm border border-stone-200 cursor-pointer"
                aria-label="Zoom out"
              >
                <Minus size={14} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default StoreLocationSection
