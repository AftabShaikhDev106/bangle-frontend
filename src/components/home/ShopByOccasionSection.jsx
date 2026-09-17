import React from 'react'
import SectionHeader from '../common/SectionHeader'
import OccasionCard from '../cards/OccasionCard'
import { occasions } from '../../data/landingData'

const ShopByOccasionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tagline="WARDROBE BY MOMENT"
          title="Shop by Occasion"
          description="From boardroom to ballroom — an edit for every hour of your life."
          align="center"
        />

        {/* Equal 3x2 Grid for Occasions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {occasions.map((occasion) => (
            <OccasionCard key={occasion.id} occasion={occasion} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ShopByOccasionSection
