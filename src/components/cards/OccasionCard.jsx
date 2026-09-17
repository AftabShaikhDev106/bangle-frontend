import React from 'react'
import { ChevronRight } from 'lucide-react'

const OccasionCard = ({ occasion }) => {
  const { name, image } = occasion

  return (
    <div className="group relative overflow-hidden rounded-[24px] w-full h-[380px] sm:h-[420px] lg:h-[460px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
      {/* Background Image */}
      {image && (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

      {/* Card Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between z-10">
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight drop-shadow-sm">
          {name}
        </h3>

        <div className="flex items-center justify-center text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
          <ChevronRight size={22} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default OccasionCard
