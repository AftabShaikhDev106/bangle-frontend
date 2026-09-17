import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CategoryCard = ({ category, className = '', style = {} }) => {
  const { id, title, subTitle, image } = category

  let targetLink = '/women'
  if (id === 'jewelry') targetLink = '/jewelry'
  if (id === 'wedding' || id === 'party') targetLink = '/collections'

  return (
    <Link
      to={targetLink}
      style={style}
      className={`group relative overflow-hidden rounded-[20px] sm:rounded-[24px] w-full min-h-[250px] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 block ${className}`}
    >
      {/* Background Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

      {/* Card Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between z-10">
        <div className="flex flex-col justify-end">
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-white/75 font-medium uppercase mb-1">
            {subTitle || 'COLLECTION'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight drop-shadow-sm">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-sans uppercase font-medium tracking-[0.2em] text-white/90 group-hover:translate-x-1.5 transition-transform duration-300">
          <span className="border-b border-white/40 pb-0.5 group-hover:border-white">Explore</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
