import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X, Trash2, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    closeWishlist,
    wishlistItems,
    removeFromWishlist,
    addToCartFromWishlist,
    toastMessage
  } = useWishlist();

  // Prevent background body scrolling when drawer is open
  useEffect(() => {
    if (isWishlistOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isWishlistOpen]);

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Semi-transparent Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 animate-in fade-in"
        onClick={closeWishlist}
        aria-label="Close wishlist drawer"
      />

      {/* Slide-over Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#FAF8F5] h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-in slide-in-from-right">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 bg-tertiary text-white text-xs font-sans px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-in fade-in zoom-in duration-200">
            <Check size={14} className="text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-stone-200/80 bg-[#FAF8F5] flex justify-between items-start flex-shrink-0">
          <div>
            <div className="flex items-center gap-2.5">
              <Heart size={22} className="text-tertiary stroke-[1.75]" />
              <h2 className="font-serif text-xl sm:text-2xl text-tertiary tracking-wide font-normal">
                My Wishlist{' '}
                <span className="text-stone-500 font-sans text-sm font-light ml-1">
                  ({wishlistItems.length})
                </span>
              </h2>
            </div>
            <p className="text-xs font-sans text-stone-500 font-light mt-1">
              Saved for later, just for you.
            </p>
          </div>

          <button
            type="button"
            onClick={closeWishlist}
            className="p-1 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer rounded-full hover:bg-stone-200/50"
            aria-label="Close Wishlist"
          >
            <X size={22} />
          </button>
        </div>

        {/* Wishlist Items List (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5 custom-scrollbar">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
                <Heart size={28} className="text-stone-300 stroke-1" />
              </div>
              <h3 className="font-serif text-lg text-tertiary font-normal">Your Wishlist is Empty</h3>
              <p className="text-xs text-stone-500 font-sans mt-1 max-w-xs">
                Explore our fine jewelry and apparel collections to save your favorite pieces for later.
              </p>
              <Link
                to="/jewelry"
                onClick={closeWishlist}
                className="mt-6 px-6 py-2.5 bg-tertiary hover:bg-heading text-white text-xs font-sans tracking-widest uppercase rounded-xs transition-colors"
              >
                Discover Collection
              </Link>
            </div>
          ) : (
            <>
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/80 border border-stone-200/70 p-3.5 rounded-xs shadow-2xs flex flex-col gap-3 group hover:border-stone-300/80 transition-all"
                >
                  <div className="flex gap-3.5 items-start">
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-xs bg-stone-100 flex-shrink-0 border border-stone-200/50"
                    />

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-sm font-medium text-tertiary leading-snug truncate">
                          {item.name}
                        </h3>
                        {/* Actions: Heart + Remove */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            type="button"
                            aria-label="Wishlisted"
                            className="p-1 text-[#A82531] cursor-default"
                          >
                            <Heart size={15} fill="#A82531" className="text-[#A82531]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromWishlist(item.id)}
                            className="p-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                            aria-label="Remove item"
                            title="Remove from wishlist"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>

                      <p className="text-[11px] font-sans text-stone-500 font-light mt-0.5">
                        {item.color} · {item.size}
                      </p>

                      {/* Price Section */}
                      <div className="flex items-baseline gap-2 mt-2 font-sans">
                        <span className="text-xs sm:text-sm font-semibold text-tertiary">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-stone-400 line-through font-light">
                            ₹{item.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => addToCartFromWishlist(item)}
                    className="w-full py-2 px-3 border border-stone-300 hover:border-tertiary bg-white hover:bg-stone-50 text-stone-700 hover:text-tertiary font-sans text-[10px] sm:text-[11px] tracking-[0.15em] font-medium uppercase transition-colors rounded-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag size={13} />
                    ADD TO CART
                  </button>
                </div>
              ))}

              {/* Bottom Card - Still Thinking? */}
              <div className="bg-[#EFECE6] p-5 rounded-xs border border-stone-200/70 mt-6 space-y-2">
                <Heart size={16} className="text-[#8C6D53]" />
                <h4 className="font-serif text-base text-tertiary font-normal">Still Thinking?</h4>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  Your favorite pieces are waiting for you.
                </p>
                <Link
                  to="/jewelry"
                  onClick={closeWishlist}
                  className="w-full mt-3 py-2.5 bg-[#8C6D53] hover:bg-[#785C44] text-white text-xs font-sans font-medium uppercase tracking-[0.12em] transition-colors rounded-xs text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  CONTINUE SHOPPING <ArrowRight size={14} />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;
