import React from 'react'
import { Star } from 'lucide-react'

const StarRating = ({ rating = 5, showScore = false, size = 14, className = '' }) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center text-amber-600">
        {stars.map((star) => (
          <Star
            key={star}
            size={size}
            className={star <= Math.floor(rating) ? 'fill-amber-600 text-amber-600' : 'text-stone-300'}
          />
        ))}
      </div>
      {showScore && (
        <span className="text-xs font-sans text-stone-600 font-medium ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}

export default StarRating
