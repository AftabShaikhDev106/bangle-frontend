import React, { useState } from 'react'
import { Heart, ShoppingBag } from 'lucide-react'
import PlaceholderImage from '../common/PlaceholderImage'
import StarRating from '../common/StarRating'

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const {
    name,
    category,
    price,
    originalPrice,
    discount,
    rating,
    sizes,
    isNew,
    bgGradient,
    darkPlaceholder,
  } = product

  return (
    <div
      className="group flex flex-col w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      aria-label={`View ${name}`}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Div Placeholder */}
      <div className="relative overflow-hidden w-full">
        <PlaceholderImage
          aspectRatio="aspect-[3/4]"
          bgGradient={bgGradient || 'from-[#EFE7DC] to-[#DECFC0]'}
          badge={discount ? discount : isNew ? 'NEW' : null}
          badgeBg={discount ? 'bg-[#B65D46] text-white' : 'bg-tertiary text-white'}
          darkText={!darkPlaceholder}
          showIcon={false}
        >
          {/* Top Right Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 backdrop-blur-xs hover:bg-white text-tertiary transition-transform active:scale-90"
          >
            <Heart
              size={16}
              className={isLiked ? 'fill-rose-600 text-rose-600' : 'text-stone-700'}
            />
          </button>

          {/* Placeholder Visual Design Detail */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
            <span className={`font-serif text-2xl md:text-3xl font-light tracking-widest opacity-20 ${darkPlaceholder ? 'text-white' : 'text-tertiary'}`}>
              MAISON ORA
            </span>
            <span className={`mt-2 text-[10px] uppercase tracking-[0.25em] font-sans opacity-40 ${darkPlaceholder ? 'text-white' : 'text-tertiary'}`}>
              {category}
            </span>
          </div>

          {/* Quick Add Overlay on Hover */}
          <div
            className={`absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              type="button"
              className="w-full py-2.5 bg-white text-tertiary text-xs uppercase font-sans font-medium tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-stone-100 transition-colors shadow-md cursor-pointer"
            >
              <ShoppingBag size={14} />
              <span>Quick Add</span>
            </button>
          </div>
        </PlaceholderImage>
      </div>

      {/* Product Information */}
      <div className="pt-3 pb-2 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.15em] text-placeholder font-sans font-medium">
            {category}
          </span>
          {rating && <StarRating rating={rating} showScore size={12} />}
        </div>

        <h3 className="font-serif text-base text-tertiary font-normal tracking-wide group-hover:text-heading transition-colors line-clamp-1">
          {name}
        </h3>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-sm font-sans font-semibold text-tertiary">
            ₹ {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-xs font-sans text-stone-400 line-through">
              ₹ {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Available Sizes if present */}
        {sizes && sizes.length > 0 && (
          <div className="mt-1 text-[11px] font-sans text-stone-500 tracking-wider">
            {sizes.join(' · ')}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
