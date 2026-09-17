import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Gem, Feather, ArrowRight } from 'lucide-react';
import TopBar from '../components/layout/TopBar';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import heroModelImg from '../assets/about_hero_model.png';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F2] flex flex-col font-sans text-tertiary">
      {/* Top Header & Navigation */}
      <TopBar />
      <NavBar />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* SECTION 1: HERO BANNER (Responsive Mobile Stacking + Full-Bleed Desktop) */}
        <section className="relative w-full bg-[#EAE2D5] overflow-hidden border-b border-stone-300/60 min-h-0 lg:min-h-[540px] flex flex-col lg:flex-row lg:items-center">
          {/* Text Container */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 lg:py-16 relative z-10">
            <div className="w-full lg:w-1/2 space-y-3.5 sm:space-y-4 pr-0 lg:pr-8">
              {/* Breadcrumbs inside Hero */}
              <nav className="flex items-center gap-2 text-xs font-sans text-stone-600 font-light mb-4 sm:mb-6">
                <Link to="/" className="hover:text-stone-900 transition-colors">
                  Home
                </Link>
                <span>&gt;</span>
                <span className="text-stone-900 font-medium">About Us</span>
              </nav>

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9A7446] font-sans font-semibold block">
                OUR STORY
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-tertiary font-normal leading-[1.15]">
                More Than <br className="hidden sm:inline" />
                <span className="text-[#9A7446] font-serif">Just a Brand.</span>
              </h1>
              <p className="text-stone-700 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-md pt-1">
                Maison Ora is a celebration of timeless elegance, rooted in tradition and designed for the modern you.
              </p>
              
              {/* Ornamental divider line */}
              <div className="flex items-center gap-2 pt-2 sm:pt-4">
                <span className="w-8 h-[1px] bg-[#9A7446]/50" />
                <span className="w-1.5 h-1.5 rotate-45 border border-[#9A7446]" />
                <span className="w-8 h-[1px] bg-[#9A7446]/50" />
              </div>
            </div>
          </div>

          {/* Image Container: Full Width Stack on Mobile, Absolute Right Bleed on Desktop */}
          <div className="w-full lg:w-[54%] h-[320px] sm:h-[420px] lg:h-full lg:absolute lg:inset-y-0 lg:right-0 z-0 overflow-hidden">
            <img
              src={heroModelImg}
              alt="Maison Ora Heritage"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage: 'var(--hero-mask, none)',
                WebkitMaskImage: 'var(--hero-mask, none)'
              }}
            />
          </div>
        </section>


        {/* SECTION 2: STORY DEEP DIVE ("A Journey of Tradition, Elegance & You.") */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Fabric Image + Cursive Overlay */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xs shadow-sm bg-stone-200 border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80"
                  alt="Tradition in every detail"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Right Cursive Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xs px-6 py-3 rounded-xs border border-stone-200/80 shadow-xs">
                <span className="font-serif italic text-lg sm:text-xl text-[#785C44] block tracking-wide">
                  Tradition in every detail
                </span>
              </div>
            </div>

            {/* Right Column: Story Text */}
            <div className="lg:col-span-6 space-y-4 max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A4784C] font-sans font-medium block">
                OUR STORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal leading-[1.2]">
                A Journey of <br />
                Tradition, Elegance & <span className="text-[#A4784C] font-serif">You.</span>
              </h2>
              
              <div className="space-y-4 text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed pt-2">
                <p>
                  Maison Ora was born from a simple belief — that every woman carries a unique story, and her style should reflect it. We bring together the richness of traditional craftsmanship with modern design sensibilities, creating pieces that are timeless, versatile and effortlessly elegant.
                </p>
                <p>
                  From handpicked fabrics to intricately crafted jewelry, every detail at Maison Ora is a tribute to heritage, artistry and the modern woman.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3: VALUES ("What We Stand For") */}
        <section className="bg-[#F6F3EC] py-16 lg:py-24 border-y border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Section Header */}
            <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
              <div className="flex items-center justify-center gap-4 text-xs tracking-[0.25em] uppercase text-[#A4784C] font-sans font-medium">
                <span className="h-[1px] w-8 bg-[#A4784C]/50" />
                <span>OUR VALUES</span>
                <span className="h-[1px] w-8 bg-[#A4784C]/50" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-tertiary font-normal">
                What We Stand For
              </h2>
            </div>

            {/* 4 Values - Inline Layout with Vertical Dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-stone-300/70">
              
              {/* Value 1 */}
              <div className="px-4 lg:px-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full border border-[#A4784C]/40 flex items-center justify-center mx-auto text-[#785C44] bg-[#FAF8F5]">
                  <Feather size={22} className="stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg text-tertiary font-medium">Authenticity</h3>
                <p className="text-xs text-stone-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
                  We stay true to our roots, celebrating real craftsmanship and cultural heritage.
                </p>
              </div>

              {/* Value 2 */}
              <div className="px-4 lg:px-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full border border-[#A4784C]/40 flex items-center justify-center mx-auto text-[#785C44] bg-[#FAF8F5]">
                  <Gem size={22} className="stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg text-tertiary font-medium">Quality</h3>
                <p className="text-xs text-stone-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
                  Only the finest materials, carefully selected for lasting beauty.
                </p>
              </div>

              {/* Value 3 */}
              <div className="px-4 lg:px-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full border border-[#A4784C]/40 flex items-center justify-center mx-auto text-[#785C44] bg-[#FAF8F5]">
                  <Heart size={22} className="stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg text-tertiary font-medium">Empowerment</h3>
                <p className="text-xs text-stone-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
                  We create pieces that make you feel confident, graceful and uniquely you.
                </p>
              </div>

              {/* Value 4 */}
              <div className="px-4 lg:px-6 text-center space-y-3">
                <div className="w-14 h-14 rounded-full border border-[#A4784C]/40 flex items-center justify-center mx-auto text-[#785C44] bg-[#FAF8F5]">
                  <Sparkles size={22} className="stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg text-tertiary font-medium">Sustainability</h3>
                <p className="text-xs text-stone-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
                  Thoughtful choices for a kinder planet and a brighter future.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 4: CRAFTSMANSHIP ("Handcrafted with Heart") */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image: Artisan */}
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xs shadow-sm bg-stone-200 border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
                  alt="Craftsman working on jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Craftsmanship Text */}
            <div className="lg:col-span-6 space-y-4 max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A4784C] font-sans font-medium block">
                OUR CRAFTSMANSHIP
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal leading-tight">
                Handcrafted <br />
                <span className="text-[#A4784C] font-serif">with Heart</span>
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed pt-2">
                Behind every piece lies the skill, patience and passion of our artisans. We work with experienced craftsmen who have inherited generations of knowledge, ensuring that each creation is a masterpiece of tradition and detail.
              </p>
              
              <div className="pt-4">
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#9A7B56] hover:bg-[#856745] text-white text-xs font-sans tracking-[0.15em] font-medium uppercase rounded-xs transition-colors shadow-2xs"
                >
                  OUR COLLECTIONS <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 5: STATS COUNTER BAR */}
        <section className="bg-[#EFE9DF] border-y border-stone-300/60 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-300/70">
              
              <div className="pt-4 sm:pt-0">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal block">
                  5+
                </span>
                <span className="text-[11px] text-stone-600 font-sans font-light tracking-[0.15em] uppercase mt-1.5 block">
                  Years of Heritage
                </span>
              </div>

              <div className="pt-4 sm:pt-0">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal block">
                  10K+
                </span>
                <span className="text-[11px] text-stone-600 font-sans font-light tracking-[0.15em] uppercase mt-1.5 block">
                  Happy Customers
                </span>
              </div>

              <div className="pt-4 sm:pt-0">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal block">
                  500+
                </span>
                <span className="text-[11px] text-stone-600 font-sans font-light tracking-[0.15em] uppercase mt-1.5 block">
                  Unique Designs
                </span>
              </div>

              <div className="pt-4 sm:pt-0">
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-tertiary font-normal block">
                  100%
                </span>
                <span className="text-[11px] text-stone-600 font-sans font-light tracking-[0.15em] uppercase mt-1.5 block">
                  Crafted with Love
                </span>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 6: BOTTOM QUOTE BANNER */}
        <section className="relative bg-[#FAF7F2] py-20 lg:py-28 text-center px-4 overflow-hidden">
          {/* Subtle background flowers texture effect */}
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-[10px] uppercase tracking-[0.35em] text-stone-400 font-sans font-medium block">
              MAISON ORA
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-tertiary font-normal leading-snug">
              Elegance is <span className="italic">not just</span> what you wear, <br />
              <span className="italic text-[#A4784C]">it's how you feel.</span>
            </blockquote>
            
            <div className="flex items-center justify-center gap-2 pt-4">
              <span className="w-8 h-[1px] bg-[#A4784C]/50" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#A4784C]" />
              <span className="w-8 h-[1px] bg-[#A4784C]/50" />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;
