import React from 'react'
import { Image } from 'lucide-react'

/**
 * Reusable PlaceholderImage component to replace <img> elements with
 * styled color/gradient div placeholders per prompt requirements.
 */
const PlaceholderImage = ({
  aspectRatio = 'aspect-[3/4]',
  bgGradient = 'from-[#EFE7DC] to-[#DECFC0]',
  title = '',
  subtitle = '',
  badge = null,
  badgeBg = 'bg-black text-white',
  darkText = false,
  showIcon = true,
  children = null,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b ${bgGradient} ${aspectRatio} flex flex-col justify-between p-4 transition-all duration-300 ${className}`}
    >
      {/* Subtle textured overlay background pattern */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

      {/* Top row: Badge or Status indicator */}
      <div className="relative z-10 flex justify-between items-start w-full">
        {badge ? (
          <span className={`px-2.5 py-1 text-[10px] uppercase font-sans tracking-wider font-semibold rounded-xs shadow-xs ${badgeBg}`}>
            {badge}
          </span>
        ) : <div />}

        {showIcon && (
          <span className={`p-1.5 rounded-full bg-white/30 backdrop-blur-xs ${darkText ? 'text-black/40' : 'text-white/50'}`}>
            <Image size={14} />
          </span>
        )}
      </div>

      {/* Custom children or Overlay Content */}
      {children}

      {/* Bottom overlay text if provided */}
      {(title || subtitle) && (
        <div className={`relative z-10 flex flex-col ${darkText ? 'text-tertiary' : 'text-white'}`}>
          {subtitle && (
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-75 font-sans font-medium">
              {subtitle}
            </span>
          )}
          {title && (
            <span className="font-serif text-lg md:text-xl font-normal leading-tight">
              {title}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default PlaceholderImage
