import React from 'react'
import SectionHeader from '../common/SectionHeader'
import PlaceholderImage from '../common/PlaceholderImage'
import { Camera, ShoppingBag } from 'lucide-react'
import { feedPosts } from '../../data/landingData'

const ShopTheFeedSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tagline="@MAISONORA"
          title="Shop the Feed"
          description="Tag your looks with #InMaisonOra for a chance to be featured."
          align="center"
        />

        {/* 8 Grid Instagram Feed Frames (2 rows x 4 cards each) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden cursor-pointer rounded-xs"
            >
              <PlaceholderImage
                aspectRatio="aspect-square"
                bgGradient={post.bgGradient}
                showIcon={false}
              >
                {/* Visual Monogram/Pattern placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none">
                  <Camera size={20} className="text-white/40 mb-1" />
                  <span className="text-[10px] uppercase tracking-widest text-white/60 font-sans">
                    {post.tag}
                  </span>
                </div>

                {/* Hover Overlay with Shop Icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                  <ShoppingBag size={20} />
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold">
                    Shop Look
                  </span>
                </div>
              </PlaceholderImage>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ShopTheFeedSection
