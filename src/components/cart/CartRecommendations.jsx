import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { cartRecommendedProducts } from '../../data/cartData'

const CartRecommendations = ({ onAddToCart }) => {
  const [wishlistIds, setWishlistIds] = useState([])

  const toggleWishlist = (id) => {
    if (wishlistIds.includes(id)) {
      setWishlistIds(wishlistIds.filter((item) => item !== id))
    } else {
      setWishlistIds([...wishlistIds, id])
    }
  }

  return (
    <section className="bg-primary py-12 sm:py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block mb-1">
              YOU MAY ALSO LIKE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-tertiary font-light">
              Complete Your Look
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:text-tertiary hover:border-stone-800 transition-colors cursor-pointer"
              aria-label="Previous Products"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:text-tertiary hover:border-stone-800 transition-colors cursor-pointer"
              aria-label="Next Products"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {cartRecommendedProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id)
            return (
              <div key={product.id} className="group flex flex-col justify-between space-y-3 font-sans">
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F3EFE9] rounded-xs shadow-2xs">
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-stone-700 hover:text-red-500 hover:bg-white transition-all cursor-pointer"
                  >
                    <Heart
                      size={16}
                      className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-700'}
                    />
                  </button>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-serif text-sm sm:text-base text-tertiary font-normal group-hover:text-[#B58A5A] transition-colors leading-snug">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 font-sans text-xs">
                    <span className="font-medium text-tertiary">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-stone-400 line-through text-xs font-light">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* Color dots */}
                  {product.colors && (
                    <div className="flex items-center gap-1.5 pt-1">
                      {product.colors.map((hex, idx) => (
                        <span
                          key={idx}
                          className="w-3 h-3 rounded-full border border-stone-300"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* ADD TO CART Button */}
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2.5 bg-white border border-stone-300 text-tertiary text-[11px] font-sans uppercase tracking-widest font-semibold hover:bg-[#1B1B1B] hover:text-white hover:border-[#1B1B1B] transition-all cursor-pointer rounded-xs"
                >
                  ADD TO CART
                </button>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default CartRecommendations
