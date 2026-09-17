import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { filterOptions } from '../../data/jewelryData'

const JewelryFilterSidebar = ({
  selectedCategories = [],
  setSelectedCategories,
  selectedSizes = [],
  setSelectedSizes,
  selectedColors = [],
  setSelectedColors,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedOccasions = [],
  setSelectedOccasions,
  onClearAll,
}) => {
  const [openSections, setOpenSections] = useState({
    category: true,
    size: true,
    color: true,
    price: true,
    occasion: true,
  })

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleCheckboxChange = (item, currentList, setList) => {
    if (currentList.includes(item)) {
      setList(currentList.filter((i) => i !== item))
    } else {
      setList([...currentList, item])
    }
  }

  return (
    <aside className="w-full space-y-6 font-sans text-xs">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-200">
        <h2 className="font-serif text-lg font-normal text-tertiary tracking-wide">Filters</h2>
        <button
          type="button"
          onClick={onClearAll}
          className="text-stone-400 hover:text-stone-700 underline text-xs transition-colors cursor-pointer"
        >
          Clear All
        </button>
      </div>

      {/* 1. Category Section */}
      <div className="border-b border-stone-200 pb-5">
        <button
          type="button"
          onClick={() => toggleSection('category')}
          className="w-full flex items-center justify-between font-medium text-stone-800 py-1 cursor-pointer"
        >
          <span className="font-semibold text-xs tracking-wider uppercase">Category</span>
          {openSections.category ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.category && (
          <div className="mt-3 space-y-2.5 max-h-60 overflow-y-auto no-scrollbar pr-1">
            {filterOptions.categories.map((cat) => {
              const checked = selectedCategories.includes(cat.label)
              return (
                <label
                  key={cat.label}
                  className="flex items-center justify-between cursor-pointer group text-stone-600 hover:text-tertiary"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        handleCheckboxChange(cat.label, selectedCategories, setSelectedCategories)
                      }
                      className="w-3.5 h-3.5 rounded-xs accent-[#1B1B1B] border-stone-300 cursor-pointer"
                    />
                    <span className={`text-xs font-light ${checked ? 'text-tertiary font-medium' : ''}`}>
                      {cat.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-400 font-light">({cat.count})</span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      {/* 2. Size Section */}
      <div className="border-b border-stone-200 pb-5">
        <button
          type="button"
          onClick={() => toggleSection('size')}
          className="w-full flex items-center justify-between font-medium text-stone-800 py-1 cursor-pointer"
        >
          <span className="font-semibold text-xs tracking-wider uppercase">Size</span>
          {openSections.size ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.size && (
          <div className="mt-3 space-y-2.5">
            {filterOptions.sizes.map((size) => {
              const checked = selectedSizes.includes(size)
              return (
                <label
                  key={size}
                  className="flex items-center gap-2.5 cursor-pointer text-stone-600 hover:text-tertiary"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(size, selectedSizes, setSelectedSizes)}
                    className="w-3.5 h-3.5 rounded-xs accent-[#1B1B1B] border-stone-300 cursor-pointer"
                  />
                  <span className={`text-xs font-light ${checked ? 'text-tertiary font-medium' : ''}`}>
                    {size}
                  </span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      {/* 3. Color Section */}
      <div className="border-b border-stone-200 pb-5">
        <button
          type="button"
          onClick={() => toggleSection('color')}
          className="w-full flex items-center justify-between font-medium text-stone-800 py-1 cursor-pointer"
        >
          <span className="font-semibold text-xs tracking-wider uppercase">Color</span>
          {openSections.color ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.color && (
          <div className="mt-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              {filterOptions.colors.map((color) => {
                const isSelected = selectedColors.includes(color.name)
                return (
                  <button
                    key={color.name}
                    type="button"
                    title={color.name}
                    onClick={() => handleCheckboxChange(color.name, selectedColors, setSelectedColors)}
                    className={`w-5 h-5 rounded-full border border-stone-300 transition-all cursor-pointer relative ${
                      isSelected ? 'ring-2 ring-stone-900 ring-offset-1 scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                )
              })}
            </div>
            <button
              type="button"
              className="mt-3 text-[11px] text-stone-500 hover:text-tertiary underline cursor-pointer font-light"
            >
              + More
            </button>
          </div>
        )}
      </div>

      {/* 4. Price Section */}
      <div className="border-b border-stone-200 pb-5">
        <button
          type="button"
          onClick={() => toggleSection('price')}
          className="w-full flex items-center justify-between font-medium text-stone-800 py-1 cursor-pointer"
        >
          <span className="font-semibold text-xs tracking-wider uppercase">Price</span>
          {openSections.price ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.price && (
          <div className="mt-3 space-y-2.5">
            {filterOptions.prices.map((p, idx) => {
              const isSelected = selectedPriceRange?.label === p.label
              return (
                <label
                  key={idx}
                  className="flex items-center gap-2.5 cursor-pointer text-stone-600 hover:text-tertiary"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={isSelected}
                    onChange={() => setSelectedPriceRange(isSelected ? null : p)}
                    className="w-3.5 h-3.5 accent-[#1B1B1B] border-stone-300 cursor-pointer"
                  />
                  <span className={`text-xs font-light ${isSelected ? 'text-tertiary font-medium' : ''}`}>
                    {p.label}
                  </span>
                </label>
              )
            })}
          </div>
        )}
      </div>

      {/* 5. Occasion Section */}
      <div className="pb-2">
        <button
          type="button"
          onClick={() => toggleSection('occasion')}
          className="w-full flex items-center justify-between font-medium text-stone-800 py-1 cursor-pointer"
        >
          <span className="font-semibold text-xs tracking-wider uppercase">Occasion</span>
          {openSections.occasion ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openSections.occasion && (
          <div className="mt-3 space-y-2.5">
            {filterOptions.occasions.map((occ) => {
              const checked = selectedOccasions.includes(occ)
              return (
                <label
                  key={occ}
                  className="flex items-center gap-2.5 cursor-pointer text-stone-600 hover:text-tertiary"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleCheckboxChange(occ, selectedOccasions, setSelectedOccasions)}
                    className="w-3.5 h-3.5 rounded-xs accent-[#1B1B1B] border-stone-300 cursor-pointer"
                  />
                  <span className={`text-xs font-light ${checked ? 'text-tertiary font-medium' : ''}`}>
                    {occ}
                  </span>
                </label>
              )
            })}
          </div>
        )}
      </div>

    </aside>
  )
}

export default JewelryFilterSidebar
