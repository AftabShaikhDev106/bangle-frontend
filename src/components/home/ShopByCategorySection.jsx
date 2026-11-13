import React from 'react'
import SectionHeader from '../common/SectionHeader'
import CategoryCard from '../cards/CategoryCard'
import { curatedCategories } from '../../data/landingData'

const ShopByCategorySection = () => {
  const gridAreas = {
    western: 'western',
    ethnic: 'ethnic',
    office: 'office',
    party: 'party',
    wedding: 'wedding',
    jewelry: 'jewelry',
  }

  return (
    <section className="py-10 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          tagline="CURATED EDITS"
          title="Shop by Category"
          description="From tailored workwear to occasion pieces — six moods, one considered aesthetic."
          align="center"
        />

        {/* Asymmetric Editorial Bento Grid on Desktop & 1-Column Vertical List on Mobile */}
        <div className="max-w-[920px] mx-auto mt-6 md:mt-8">
          {/* Desktop & Tablet Grid (md+) */}
          <div
            className="hidden md:grid gap-2.5 lg:gap-3"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: '340px 170px 170px 170px',
              gridTemplateAreas: `
                "western ethnic ."
                "office office party"
                "wedding . party"
                "wedding jewelry jewelry"
              `,
              alignItems: 'stretch',
            }}
          >
            {curatedCategories.map((category) => {
              
              return (
              <CategoryCard
                key={category.id}
                category={category}
                style={{ gridArea: gridAreas[category.id] || category.id }}
                className="h-full"
              />
            )
            })}
          </div>

          {/* Mobile Layout (< md): Clean 1-Column Vertical List */}
          <div className="flex flex-col md:hidden space-y-4 w-full">
            {curatedCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                className="h-[280px] sm:h-[320px] w-full"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ShopByCategorySection
