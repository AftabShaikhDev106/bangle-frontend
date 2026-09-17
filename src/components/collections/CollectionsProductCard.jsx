import React, { useState } from 'react'
import { Heart } from 'lucide-react'

const CollectionsProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#F7F4EF')

  return (
    <div className="group flex flex-col h-full bg-primary font-sans transition-all duration-300">
      
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EFE9] rounded-xs shadow-2xs">
        
        {/* Badge (Top Left) */}
        {product.badge && (
          <span className={`absolute top-3 left-3 z-10 text-white text-[10px] font-sans uppercase font-medium tracking-wider px-2.5 py-1 rounded-xs ${
            product.badge.includes('%') ? 'bg-[#B65D46]' : 'bg-[#1B1B1B]'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button (Top Right) */}
        <button
          type="button"
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-red-500 hover:bg-white transition-all cursor-pointer shadow-2xs"
          aria-label="Add to Wishlist"
        >
          <Heart
            size={16}
            className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-700'}
          />
        </button>

        {/* Product Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Subtle Quick View / Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
          <button
            type="button"
            className="w-full py-2 bg-white/90 backdrop-blur-xs text-[#1B1B1B] text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors shadow-sm cursor-pointer"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3 pb-2 flex flex-col flex-grow justify-between space-y-2">
        <div>
          <h3 className="font-serif text-sm sm:text-base text-tertiary font-normal group-hover:text-[#B58A5A] transition-colors leading-snug">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 mt-1 font-sans text-xs sm:text-sm">
            <span className="font-medium text-tertiary">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-stone-400 line-through text-xs font-light">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.colors.map((colorHex, idx) => {
              const active = selectedColor === colorHex
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedColor(colorHex)}
                  className={`w-3.5 h-3.5 rounded-full border border-stone-300 transition-all cursor-pointer ${
                    active ? 'ring-1 ring-stone-900 ring-offset-1 scale-110' : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: colorHex }}
                />
              )
            })}
          </div>
        )}
      </div>

    </div>
  )
}

export default CollectionsProductCard
