import React from 'react'
import { X } from 'lucide-react'
import JewelryFilterSidebar from './JewelryFilterSidebar'

const JewelryFilterDrawer = ({
  isOpen,
  onClose,
  selectedCategories,
  setSelectedCategories,
  selectedSizes,
  setSelectedSizes,
  selectedColors,
  setSelectedColors,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedOccasions,
  setSelectedOccasions,
  onClearAll,
  totalResultsCount,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-start lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Body */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-primary h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <h2 className="font-serif text-xl text-tertiary">Filter Products</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-stone-500 hover:text-tertiary cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
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
            onClearAll={onClearAll}
          />
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-stone-200 bg-secondary flex gap-3">
          <button
            type="button"
            onClick={onClearAll}
            className="flex-1 py-3 border border-stone-300 text-tertiary text-xs tracking-wider uppercase font-medium rounded-xs hover:bg-stone-100 cursor-pointer"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 bg-[#1B1B1B] text-white text-xs tracking-wider uppercase font-medium rounded-xs hover:bg-[#333] cursor-pointer"
          >
            Show ({totalResultsCount})
          </button>
        </div>
      </div>
    </div>
  )
}

export default JewelryFilterDrawer
