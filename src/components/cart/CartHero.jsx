import React from 'react'

const CartHero = () => {
  return (
    <section className="relative w-full bg-[#F5F2ED] border-b border-stone-200 overflow-hidden">
      {/* Sleek landscape rectangular ratio grid */}
      <div className="w-full h-auto lg:h-[400px] xl:h-[430px] grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* Left Side: Text Box */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 py-8 lg:py-10 z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[11px] text-stone-500 mb-3 font-sans">
            <a href="/" className="hover:text-tertiary transition-colors">Home</a>
            <span>›</span>
            <span className="text-tertiary font-medium">Cart</span>
          </nav>

          {/* Hero Content */}
          <div className="space-y-3 sm:space-y-3.5">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#B58A5A] font-semibold">
              YOUR CART
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-tertiary leading-[1.15] font-light">
              A Little Closer <br />
              <span>to Something </span>
              <span className="italic font-normal">Beautiful</span>
            </h1>

            <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md leading-relaxed">
              Your selected pieces are waiting for you.
            </p>
          </div>

        </div>

        {/* Right Side: Full-bleed Hero Image */}
        <div className="lg:col-span-6 xl:col-span-7 relative h-64 sm:h-80 lg:h-full w-full overflow-hidden bg-stone-200">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1600&q=80"
            alt="Your Selected Pieces"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F2ED] to-transparent hidden lg:block pointer-events-none" />
        </div>

      </div>
    </section>
  )
}

export default CartHero
