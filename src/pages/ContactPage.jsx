import React from 'react'
import TopBar from '../components/layout/TopBar'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

import ContactHero from '../components/contact/ContactHero'
import ContactInfoCards from '../components/contact/ContactInfoCards'
import ContactFormSection from '../components/contact/ContactFormSection'
import StoreLocationSection from '../components/contact/StoreLocationSection'
import ContactSupportCards from '../components/contact/ContactSupportCards'
import NewsletterBanner from '../components/contact/NewsletterBanner'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary font-sans antialiased text-tertiary">
      
      {/* Announcement Bar */}
      <TopBar />

      {/* Main Navigation */}
      <NavBar />

      {/* Hero Banner */}
      <ContactHero />

      {/* 4 Contact Info Cards */}
      <ContactInfoCards />

      {/* Contact Form & Brand Promise Section */}
      <ContactFormSection />

      {/* Store Location & Interactive Map Section */}
      <StoreLocationSection />

      {/* 4 Quick Support Cards */}
      <ContactSupportCards />

      {/* Newsletter Subscription Bar */}
      <NewsletterBanner />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default ContactPage
