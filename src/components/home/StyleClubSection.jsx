import React, { useState } from 'react'
import PlaceholderImage from '../common/PlaceholderImage'
import Button from '../common/Button'

const StyleClubSection = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Split Grid */}
        <div className="bg-secondary border border-stone-200/80 rounded-xs overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Visual Color Placeholder Div */}
          <div className="lg:col-span-5 h-full min-h-[280px]">
            <PlaceholderImage
              aspectRatio="aspect-auto h-full min-h-[280px]"
              bgGradient="from-[#3A322C] via-[#2A231E] to-[#1C1713]"
              darkText={false}
              showIcon={false}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 text-white pointer-events-none">
                <span className="text-xs uppercase tracking-[0.3em] font-sans text-heading font-medium">
                  MEMBERSHIP
                </span>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-normal leading-tight">
                    Maison Ora <br /> Style Club
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-sans mt-2 block">
                    EST. 2026
                  </span>
                </div>
              </div>
            </PlaceholderImage>
          </div>

          {/* Right Newsletter Content & Form */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-6 bg-heading" />
              <span className="text-[11px] font-sans font-light tracking-[0.25em] uppercase text-heading">
                THE STYLE CLUB
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-tertiary tracking-tight leading-tight mb-4">
              Join Our Style Club.
            </h2>

            <p className="font-sans text-sm md:text-base text-placeholder font-light leading-relaxed mb-8 max-w-lg">
              First access to new drops, private sales, editorial films, and a 10% welcome credit toward your first order.
            </p>

            {subscribed ? (
              <div className="p-4 bg-emerald-900/10 border border-emerald-800/20 text-emerald-900 text-sm font-sans rounded-xs animate-in fade-in">
                Thank you for subscribing! Check your inbox for your 10% welcome credit code.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row items-stretch gap-3 max-w-lg">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 text-sm font-sans bg-white border border-stone-300 rounded-xs focus:outline-none focus:border-tertiary text-tertiary placeholder:text-placeholder"
                  />
                  <Button
                    type="submit"
                    text="SUBSCRIBE"
                    bg="bg-tertiary"
                    color="text-white"
                  />
                </div>
                <p className="text-[11px] font-sans text-placeholder font-light">
                  By subscribing you agree to our <a href="#" className="underline">Privacy Policy</a>. Unsubscribe anytime.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}

export default StyleClubSection
