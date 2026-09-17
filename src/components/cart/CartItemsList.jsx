import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Gift, Heart, Minus, Plus, Trash2 } from 'lucide-react'

const CartItemsList = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  giftWrapAdded,
  onToggleGiftWrap,
}) => {
  const [wishlistedIds, setWishlistedIds] = useState([])

  const toggleWishlist = (id) => {
    if (wishlistedIds.includes(id)) {
      setWishlistedIds(wishlistedIds.filter((item) => item !== id))
    } else {
      setWishlistedIds([...wishlistedIds, id])
    }
  }

  return (
    <div className="space-y-6">
      
      {/* List Header */}
      <div className="flex items-center justify-between pb-4 border-b border-stone-200 font-sans">
        <h2 className="font-serif text-2xl font-normal text-tertiary">
          Shopping Cart <span className="text-stone-400 text-lg font-light ml-1">({cartItems.length})</span>
        </h2>
        
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-tertiary transition-colors font-light"
        >
          <ArrowLeft size={13} />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Cart Items Cards */}
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => {
            const isWishlisted = wishlistedIds.includes(item.id)
            return (
              <div
                key={item.id}
                className="bg-[#F7F5F0] p-4 sm:p-5 rounded-xs border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 shadow-2xs"
              >
                {/* Left Part: Image + Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xs overflow-hidden bg-stone-200 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="space-y-1 font-sans text-xs">
                    <h3 className="font-serif text-base font-normal text-tertiary">
                      {item.name}
                    </h3>
                    <p className="text-stone-500 font-light text-[11px]">
                      Size: <span className="text-stone-800 font-medium">{item.size}</span> &nbsp;|&nbsp; Color: <span className="text-stone-800 font-medium">{item.color}</span>
                    </p>

                    <div className="flex items-center gap-2 pt-1">
                      <span className="font-medium text-tertiary text-sm">
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-stone-400 line-through text-xs font-light">
                          ₹{item.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      {item.discountBadge && (
                        <span className="bg-[#EAE1D3] text-[#8C6D46] text-[10px] uppercase font-semibold px-2 py-0.5 rounded-xs">
                          {item.discountBadge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Part: Quantity Counter + Total + Actions */}
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-200/60">
                  
                  {/* Quantity Counter */}
                  <div className="flex items-center border border-stone-300 rounded-xs bg-white text-xs">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 text-stone-600 hover:text-tertiary cursor-pointer disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-8 text-center font-medium text-stone-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 text-stone-600 hover:text-tertiary cursor-pointer"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[75px]">
                    <span className="font-sans font-medium text-sm text-tertiary">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Wishlist & Remove Actions */}
                  <div className="flex items-center gap-2 text-stone-400">
                    <button
                      type="button"
                      onClick={() => toggleWishlist(item.id)}
                      className="p-1.5 hover:text-red-500 transition-colors cursor-pointer"
                      title="Move to Wishlist"
                    >
                      <Heart
                        size={16}
                        className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-stone-500'}
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 hover:text-stone-900 transition-colors cursor-pointer"
                      title="Remove Item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                </div>

              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-[#F7F5F0] rounded-xs border border-stone-200">
          <p className="font-serif text-lg text-stone-600">Your shopping cart is empty.</p>
          <Link
            to="/"
            className="mt-3 inline-block text-xs uppercase tracking-widest text-[#B58A5A] underline font-medium cursor-pointer"
          >
            Explore Collections
          </Link>
        </div>
      )}

      {/* Gift Wrap Add-on Box */}
      <div className="bg-[#F7F5F0] p-4 sm:p-5 rounded-xs border border-stone-200/80 flex items-center justify-between gap-4 font-sans shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B58A5A] flex-shrink-0">
            <Gift size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-stone-800">
              Add a gift wrap for ₹99
            </h4>
            <p className="text-[11px] text-stone-500 font-light">
              Make it extra special
            </p>
          </div>
        </div>

        <input
          type="checkbox"
          checked={giftWrapAdded}
          onChange={onToggleGiftWrap}
          className="w-4 h-4 rounded-xs accent-[#1B1B1B] border-stone-300 cursor-pointer"
        />
      </div>

    </div>
  )
}

export default CartItemsList
