import React, { createContext, useContext, useState } from 'react';
import { initialWishlistItems } from '../data/wishlistData';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [toastMessage, setToastMessage] = useState(null);

  const openWishlist = () => setIsWishlistOpen(true);
  const closeWishlist = () => setIsWishlistOpen(false);
  const toggleWishlist = () => setIsWishlistOpen((prev) => !prev);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from Wishlist');
  };

  const addToCartFromWishlist = (item) => {
    showToast(`Added ${item.name} to Cart`);
  };

  return (
    <WishlistContext.Provider
      value={{
        isWishlistOpen,
        openWishlist,
        closeWishlist,
        toggleWishlist,
        wishlistItems,
        removeFromWishlist,
        addToCartFromWishlist,
        wishlistCount: wishlistItems.length,
        toastMessage
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
