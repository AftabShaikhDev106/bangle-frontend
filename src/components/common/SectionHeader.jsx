import React from 'react'
import { ArrowRight } from 'lucide-react'

const SectionHeader = ({
  tagline = '',
  title = '',
  description = '',
  linkText = '',
  linkHref = '#',
  align = 'center', // 'center' or 'left'
  className = '',
}) => {
  const isCentered = align === 'center'

  return (
    <div className={`mb-10 md:mb-14 ${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Subtitle Tagline */}
      {tagline && (
        <div className={`flex items-center gap-2 mb-3 ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <span className="h-[1px] w-6 bg-heading" />
          <span className="text-[11px] font-sans font-light tracking-[0.25em] uppercase text-heading">
            {tagline}
          </span>
          {isCentered && <span className="h-[1px] w-6 bg-heading" />}
        </div>
      )}

      {/* Main Heading & Optional View All Link */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 ${isCentered ? 'items-center' : 'items-start'}`}>
        <div className={isCentered ? 'max-w-2xl mx-auto' : 'max-w-xl'}>
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl font-normal text-tertiary tracking-tight leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-3 text-sm md:text-base text-placeholder font-sans font-light leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {linkText && (
          <a
            href={linkHref}
            className="inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.2em] text-tertiary border-b border-tertiary/40 pb-1 hover:border-tertiary transition-all"
          >
            <span>{linkText}</span>
            <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  )
}

export default SectionHeader
