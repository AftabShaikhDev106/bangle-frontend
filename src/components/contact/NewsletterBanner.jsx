import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const NewsletterBanner = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <section className="relative bg-[#F5F2ED] py-12 sm:py-16 overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block">
              STAY CONNECTED
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-tertiary font-light">
              Join Our Exclusive List
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-light max-w-lg">
              Be the first to know about new arrivals, special offers and more.
            </p>

            {/* Subscription Form */}
            <div className="pt-3 max-w-md">
              {subscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-xs flex items-center gap-2 text-xs font-sans">
                  <Check size={16} className="text-emerald-600" />
                  <span>You're subscribed! Check your inbox for exclusive updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs font-sans bg-white rounded-xs border border-stone-300 focus:outline-none focus:border-tertiary text-tertiary placeholder:text-stone-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#1B1B1B] text-white px-6 py-2.5 text-xs font-sans tracking-[0.15em] uppercase font-medium hover:bg-[#333] transition-colors cursor-pointer shadow-2xs group flex-shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Decorative Jewelry Image */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="w-48 h-32 rounded-xs overflow-hidden shadow-sm border border-stone-200 bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1611591475285-a36ad5e14391?auto=format&fit=crop&w=600&q=80"
                alt="Gold Jewelry Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsletterBanner
