import React from 'react'
import StarRating from '../common/StarRating'

const TestimonialCard = ({ testimonial }) => {
  const { initial, name, city, rating, text } = testimonial

  return (
    <div className="bg-secondary p-6 md:p-8 flex flex-col justify-between h-full border border-stone-200/60 rounded-xs shadow-xs hover:shadow-md transition-shadow">
      <div>
        <StarRating rating={rating} size={14} className="mb-4" />
        <p className="font-serif text-base md:text-lg text-tertiary font-normal italic leading-relaxed">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-300/40">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C49A6C] to-[#E6DFD3] text-tertiary flex items-center justify-center font-serif text-lg font-medium shadow-xs">
          {initial}
        </div>
        <div className="flex flex-col">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-tertiary">
            {name}
          </span>
          <span className="font-sans text-[11px] uppercase tracking-widest text-placeholder">
            {city}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
