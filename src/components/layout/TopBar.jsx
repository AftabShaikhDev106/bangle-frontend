import React from 'react'
import { ChevronDown, RefreshCw, ShieldCheck, Truck } from 'lucide-react'

export const TopBar = () => {
  return (
    <div className="bg-[#1B1B1B] text-white font-sans text-[10px] sm:text-[11px] uppercase font-light tracking-[0.12em] sm:tracking-[0.15em] border-b border-stone-800">
      <div className="px-3 sm:px-6 py-2 w-full flex items-center justify-center sm:justify-between mx-auto max-w-7xl">
        {/* Left Announcements (Centered on Mobile) */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-stone-300 w-full sm:w-auto text-center">
          <span className="flex items-center justify-center gap-1.5 text-white">
            <Truck size={12} className="text-[#B58A5A] flex-shrink-0" />
            <span className="whitespace-nowrap">FREE SHIPPING ON ORDERS ABOVE ₹999</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-stone-400">
            <ShieldCheck size={12} className="text-[#B58A5A] flex-shrink-0" />
            <span>COD Available</span>
          </span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-stone-400">
            <RefreshCw size={12} className="text-[#B58A5A] flex-shrink-0" />
            <span>Easy 7-Day Returns</span>
          </span>
        </div>

        {/* Right Utility Links (Hidden on small mobile screens to prevent bloat) */}
        <div className="hidden sm:flex items-center gap-3.5 text-stone-300 flex-shrink-0">
          <a href="#" className="hover:text-white transition-colors">Track Order</a>
          <span>·</span>
          <a href="#" className="hover:text-white transition-colors">Help</a>
          <span>·</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-white text-stone-200">
            <span>INR (₹)</span>
            <ChevronDown size={11} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
