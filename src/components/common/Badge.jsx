import React from 'react'

const Badge = ({ text, variant = 'dark', className = '' }) => {
  const styles = {
    dark: 'bg-tertiary text-white',
    light: 'bg-white text-tertiary shadow-xs',
    accent: 'bg-heading text-white',
    sale: 'bg-[#B65D46] text-white',
    outline: 'border border-tertiary/20 text-tertiary bg-transparent',
  }

  return (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-sans font-semibold ${styles[variant] || styles.dark} ${className}`}
    >
      {text}
    </span>
  )
}

export default Badge
