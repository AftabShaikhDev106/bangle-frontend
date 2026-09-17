import React, { useState, useMemo } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import TopBar from '../components/layout/TopBar'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

import JewelryHero from '../components/jewelry/JewelryHero'
import JewelryCategoryBar from '../components/jewelry/JewelryCategoryBar'
import JewelryFilterSidebar from '../components/jewelry/JewelryFilterSidebar'
import JewelryFilterDrawer from '../components/jewelry/JewelryFilterDrawer'
import JewelryProductCard from '../components/jewelry/JewelryProductCard'
import JewelryPromoBanner from '../components/jewelry/JewelryPromoBanner'

import { jewelryProducts } from '../data/jewelryData'

const JewelryPage = () => {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('Necklaces')
  const [selectedCategories, setSelectedCategories] = useState(['Necklaces'])
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedPriceRange, setSelectedPriceRange] = useState(null)
  const [selectedOccasions, setSelectedOccasions] = useState([])
  const [sortBy, setSortBy] = useState('Popularity')
  
  // Mobile Filter Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Category Bar Quick Selection Sync
  const handleSelectCategoryFromBar = (catName) => {
    setSelectedCategory(catName)
    setSelectedCategories([catName])
  }

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategory('All Products')
    setSelectedCategories([])
    setSelectedSizes([])
    setSelectedColors([])
    setSelectedPriceRange(null)
    setSelectedOccasions([])
  }

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return jewelryProducts.filter((product) => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }
      // Size filter
      if (selectedSizes.length > 0 && !selectedSizes.includes(product.size)) {
        return false
      }
      // Occasion filter
      if (selectedOccasions.length > 0 && !selectedOccasions.includes(product.occasion)) {
        return false
      }
      // Price range filter
      if (selectedPriceRange) {
        if (product.price < selectedPriceRange.min || product.price > selectedPriceRange.max) {
          return false
        }
      }
      return true
    }).sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price
      if (sortBy === 'Price: High to Low') return b.price - a.price
      if (sortBy === 'Newest') return (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0)
      return a.id - b.id // Default / Popularity
    })
  }, [selectedCategories, selectedSizes, selectedColors, selectedPriceRange, selectedOccasions, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-primary font-sans antialiased text-tertiary">
      
      {/* Announcement Bar */}
      <TopBar />

      {/* Main Brand & Navigation Header */}
      <NavBar />

      {/* Hero Banner Section */}
      <JewelryHero />

      {/* Category Avatars Row */}
      <JewelryCategoryBar
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategoryFromBar}
      />

      {/* Main Catalog Section */}
      <main id="catalog-grid" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        
        {/* Mobile Filter & Sort Bar */}
        <div className="flex items-center justify-between lg:hidden mb-6 pb-4 border-b border-stone-200">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-xs font-sans uppercase font-medium tracking-wider text-tertiary bg-secondary px-4 py-2.5 rounded-xs border border-stone-200 cursor-pointer"
          >
            <SlidersHorizontal size={14} />
            <span>Filters & Sort</span>
          </button>

          <span className="text-xs text-stone-500 font-light">
            {filteredProducts.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Desktop Left Sidebar Filters */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <JewelryFilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedSizes={selectedSizes}
                setSelectedSizes={setSelectedSizes}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                selectedPriceRange={selectedPriceRange}
                setSelectedPriceRange={setSelectedPriceRange}
                selectedOccasions={selectedOccasions}
                setSelectedOccasions={setSelectedOccasions}
                onClearAll={handleClearAll}
              />
            </div>
          </div>

          {/* Right Product Grid Area */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Grid Header Bar */}
            <div className="hidden lg:flex items-center justify-between pb-4 border-b border-stone-200">
              <div>
                <h2 className="font-serif text-2xl font-normal text-tertiary tracking-wide">
                  {selectedCategories.length === 1 ? selectedCategories[0] : 'Jewelry Collection'}
                </h2>
                <p className="text-xs text-stone-400 font-light mt-0.5">
                  124 products
                </p>
              </div>

              {/* Sort By Selector */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-500 font-light">Sort by:</span>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-secondary text-xs font-sans text-stone-800 font-medium py-2 pl-3 pr-8 rounded-xs border border-stone-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Popularity">Popularity</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest">Newest</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <JewelryProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-secondary/50 rounded-xs border border-stone-200">
                <p className="font-serif text-lg text-stone-600">No products found matching your filters.</p>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="mt-3 text-xs uppercase tracking-widest text-[#B58A5A] underline font-medium cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 pt-10 pb-4 font-sans text-xs">
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-tertiary cursor-pointer transition-colors"
                aria-label="Previous Page"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
                  currentPage === 1 ? 'bg-[#1B1B1B] text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                1
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(2)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
                  currentPage === 2 ? 'bg-[#1B1B1B] text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                2
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(3)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
                  currentPage === 3 ? 'bg-[#1B1B1B] text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                3
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(4)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
                  currentPage === 4 ? 'bg-[#1B1B1B] text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                4
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(5)}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs cursor-pointer ${
                  currentPage === 5 ? 'bg-[#1B1B1B] text-white font-medium' : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                5
              </button>
              <span className="text-stone-400 px-1">...</span>
              <button
                type="button"
                onClick={() => setCurrentPage(12)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                12
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 hover:text-tertiary cursor-pointer transition-colors"
                aria-label="Next Page"
              >
                ›
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* Promotional Banner */}
      <JewelryPromoBanner />

      {/* Footer */}
      <Footer />

      {/* Mobile Slide-Over Filter Drawer */}
      <JewelryFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
        selectedOccasions={selectedOccasions}
        setSelectedOccasions={setSelectedOccasions}
        onClearAll={handleClearAll}
        totalResultsCount={filteredProducts.length}
      />

    </div>
  )
}

export default JewelryPage
