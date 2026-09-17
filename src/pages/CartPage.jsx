import React, { useState, useMemo } from 'react'
import TopBar from '../components/layout/TopBar'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

import CartHero from '../components/cart/CartHero'
import CartItemsList from '../components/cart/CartItemsList'
import CartOrderSummary from '../components/cart/CartOrderSummary'
import CartRecommendations from '../components/cart/CartRecommendations'
import NewsletterBanner from '../components/contact/NewsletterBanner'

import { initialCartItems } from '../data/cartData'

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [giftWrapAdded, setGiftWrapAdded] = useState(false)

  // Quantity updates
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty < 1) return
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  // Remove item
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // Add recommended product to cart
  const handleAddRecommendedToCart = (product) => {
    const existing = cartItems.find((item) => item.name === product.name)
    if (existing) {
      handleUpdateQuantity(existing.id, existing.quantity + 1)
    } else {
      setCartItems([
        ...cartItems,
        {
          id: Date.now(),
          name: product.name,
          category: product.category,
          price: product.price,
          originalPrice: product.originalPrice,
          discountBadge: null,
          size: product.size || 'M',
          color: 'Standard',
          quantity: 1,
          image: product.image,
        },
      ])
    }
  }

  // Cost calculations matching the reference screenshot
  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 0)
  }, [cartItems])

  const totalDiscount = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      if (item.originalPrice) {
        return sum + (item.originalPrice - item.price) * item.quantity
      }
      return sum
    }, 0)
  }, [cartItems])

  const itemsSubtotalAfterDiscount = subtotal - totalDiscount
  const giftWrapFee = giftWrapAdded ? 99 : 0
  const taxEstimate = Math.round(itemsSubtotalAfterDiscount * 0.05) // Estimated 5% GST
  const grandTotal = itemsSubtotalAfterDiscount + giftWrapFee

  const totalItemsCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }, [cartItems])

  return (
    <div className="min-h-screen flex flex-col bg-primary font-sans antialiased text-tertiary">
      
      {/* Announcement Bar */}
      <TopBar />

      {/* Main Navigation */}
      <NavBar />

      {/* Cart Hero Banner */}
      <CartHero />

      {/* Main Cart Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Cart Items & Gift Wrap Add-on */}
          <div className="lg:col-span-7 xl:col-span-8">
            <CartItemsList
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              giftWrapAdded={giftWrapAdded}
              onToggleGiftWrap={() => setGiftWrapAdded(!giftWrapAdded)}
            />
          </div>

          {/* Right Column: Order Summary Box */}
          <div className="lg:col-span-5 xl:col-span-4">
            <CartOrderSummary
              subtotal={subtotal}
              discount={totalDiscount}
              tax={taxEstimate}
              giftWrapFee={giftWrapFee}
              total={grandTotal}
              totalItemsCount={totalItemsCount}
            />
          </div>

        </div>
      </main>

      {/* Recommendations Section ("Complete Your Look") */}
      <CartRecommendations onAddToCart={handleAddRecommendedToCart} />

      {/* Newsletter Subscription Banner */}
      <NewsletterBanner />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default CartPage
