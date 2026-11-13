import React from 'react'
import TopBar from '../components/layout/TopBar'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

import HeroCarousel from '../components/home/HeroCarousel'
import HeroSection from '../components/home/HeroSection'
import CategoryBar from '../components/home/CategoryBar'
import ShopByCategorySection from '../components/home/ShopByCategorySection'
import EditorialBannerSection from '../components/home/EditorialBannerSection'
import BestSellersSection from '../components/home/BestSellersSection'
import NewArrivalsSection from '../components/home/NewArrivalsSection'
import ShopByOccasionSection from '../components/home/ShopByOccasionSection'
import ValuePropsSection from '../components/home/ValuePropsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ShopTheFeedSection from '../components/home/ShopTheFeedSection'
import StyleClubSection from '../components/home/StyleClubSection'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary font-sans antialiased text-tertiary">
      {/* Announcement Bar */}
      <TopBar />

      {/* Main Navigation */}
      <NavBar />

      {/* Landing Page Body Sections */}
      <main className="flex-grow">
        {/* 1. Top Hero Carousel Banner */}
        <HeroCarousel />

        {/* 2. Hero Editorial Introduction */}
        <HeroSection />

        {/* 2. Scrollable Category Avatar Bar */}
        <CategoryBar />

        {/* 3. Shop by Category (Curated Edits Grid) */}
        <ShopByCategorySection />

        {/* 4. Editorial Banner (Vol. 12 New Season) */}
        <EditorialBannerSection />

        {/* 5. Best Sellers Section */}
        <BestSellersSection />

        {/* 6. New Arrivals Section */}
        <NewArrivalsSection />

        {/* 7. Shop by Occasion Section */}
        <ShopByOccasionSection />

        {/* 8. Brand Value Propositions Grid */}
        <ValuePropsSection />

        {/* 9. Loved by Women, Everywhere (Testimonials) */}
        <TestimonialsSection />

        {/* 10. Shop the Feed Section (@maisonora) */}
        <ShopTheFeedSection />

        {/* 11. Style Club Newsletter Section */}
        <StyleClubSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home