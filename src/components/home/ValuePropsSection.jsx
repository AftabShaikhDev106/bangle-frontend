import React from 'react'
import FeatureCard from '../cards/FeatureCard'
import { valueProps } from '../../data/landingData'

const ValuePropsSection = () => {
  return (
    <section className="py-12 bg-primary border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {valueProps.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ValuePropsSection
