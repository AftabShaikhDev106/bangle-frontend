import React from 'react'
import SectionHeader from '../common/SectionHeader'
import TestimonialCard from '../cards/TestimonialCard'
import { testimonials } from '../../data/landingData'

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tagline="STYLE NOTES"
          title="Loved by Women, Everywhere"
          description="A few words from the Maison Ora community."
          align="center"
        />

        {/* 3 Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
