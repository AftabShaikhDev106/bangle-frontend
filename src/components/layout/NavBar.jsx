import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag, User, X, PhoneCall, ChevronDown } from 'lucide-react'
import CategoryNav from './CategoryNav'
import { navCategories } from '../../data/landingData'
import { useWishlist } from '../../context/WishlistContext'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileWomenOpen, setMobileWomenOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { openWishlist, wishlistCount } = useWishlist()

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Mobile Menu Button & Search Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden flex-shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-tertiary hover:text-heading cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <button
              type="button"
              className="p-1 text-placeholder hover:text-tertiary cursor-pointer lg:hidden"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search size={16} className="absolute left-3 text-placeholder" />
            <input
              type="text"
              placeholder="Search dresses, jewelry, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-secondary/80 rounded-full border border-stone-200 focus:outline-none focus:border-tertiary transition-colors text-tertiary placeholder:text-placeholder font-light"
            />
          </div>

          {/* Brand Logo - MAISON ORA */}
          <div className="text-center px-1">
            <Link to="/" className="inline-block">
              <h1 className="font-serif text-lg sm:text-2xl lg:text-3xl tracking-[0.12em] sm:tracking-[0.15em] font-normal text-tertiary whitespace-nowrap">
                MAISON ORA
              </h1>
              <span className="block text-[7px] sm:text-[8px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-placeholder -mt-0.5 sm:-mt-1 font-sans">
                NEW DELHI · PARIS
              </span>
            </Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-4 flex-shrink-0">
            <button
              type="button"
              className="p-1 text-tertiary hover:text-heading transition-colors cursor-pointer hidden sm:block"
              aria-label="Account"
              title="Account"
            >
              <User size={19} />
            </button>

            {/* Contact Icon beside Wishlist and Cart */}
            <Link
              to="/contact"
              className="p-1 text-tertiary hover:text-heading transition-colors cursor-pointer"
              aria-label="Contact Us"
              title="Contact Us"
            >
              <PhoneCall size={18} />
            </Link>

            {/* Wishlist Icon */}
            <button
              type="button"
              onClick={openWishlist}
              className="p-1 text-tertiary hover:text-heading transition-colors cursor-pointer relative"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart size={19} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-tertiary text-white rounded-full text-[8px] sm:text-[9px] font-sans flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Button linking to /cart */}
            <Link
              to="/cart"
              className="p-1 text-tertiary hover:text-heading transition-colors cursor-pointer relative inline-block pr-1 sm:pr-0"
              aria-label="Shopping bag"
              title="Cart"
            >
              <ShoppingBag size={19} />
              <span className="absolute -top-1 right-0 sm:-right-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-heading text-white rounded-full text-[8px] sm:text-[9px] font-sans flex items-center justify-center font-medium">
                3
              </span>
            </Link>
          </div>

        </div>

        {/* Desktop Category Navigation */}
        <div className="hidden lg:block">
          <CategoryNav />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-primary px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-3 text-placeholder" />
            <input
              type="text"
              placeholder="Search dresses, jewelry..."
              className="w-full pl-9 pr-4 py-2 text-xs font-sans bg-secondary rounded-full border border-stone-200 focus:outline-none text-tertiary"
            />
          </div>

          <nav className="flex flex-col space-y-3 font-sans text-xs uppercase tracking-widest">
            {navCategories.map((item) => {
              if (item.hasDropdown && item.subCategories) {
                return (
                  <div key={item.name} className="border-b border-stone-100 py-1">
                    <button
                      type="button"
                      onClick={() => setMobileWomenOpen(!mobileWomenOpen)}
                      className="w-full flex items-center justify-between py-1 text-tertiary font-medium uppercase tracking-widest"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          mobileWomenOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileWomenOpen && (
                      <div className="pl-4 pt-2 pb-1 flex flex-col space-y-2 border-l border-stone-200/80 my-1">
                        {item.subCategories.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[11px] text-stone-600 hover:text-stone-900 font-normal py-0.5 tracking-wider"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 border-b border-stone-100 text-tertiary font-medium"
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="pt-4 border-t border-stone-200 flex justify-between items-center text-xs font-sans uppercase tracking-widest text-placeholder">
            <span>Help & Support</span>
            <span>EN / ₹ INR</span>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar