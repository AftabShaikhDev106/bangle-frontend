import React from 'react'
import { ArrowRight, MoveRight, Plus } from 'lucide-react'

const Button = ({
  text,
  onClick,
  bg = 'bg-tertiary',
  color = 'text-white',
  variant = 'solid', // solid, outline, link
  arrow = false,
  plus = false,
  className = '',
  type = 'button',
  children,
}) => {
  if (variant === 'link') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center gap-2 border-b border-tertiary pb-1 text-sm uppercase tracking-[0.2em] text-tertiary font-sans hover:opacity-75 transition-opacity cursor-pointer ${className}`}
      >
        <span>{text || children}</span>
        {arrow && <ArrowRight size={16} />}
      </button>
    )
  }

  if (variant === 'outline') {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center justify-center gap-2 border border-tertiary px-6 py-3 text-xs uppercase tracking-[0.2em] text-tertiary font-sans hover:bg-tertiary hover:text-white transition-all cursor-pointer ${className}`}
      >
        <span>{text || children}</span>
        {arrow && <MoveRight size={16} strokeWidth={1.5} />}
        {plus && <Plus size={16} strokeWidth={1.5} />}
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all cursor-pointer ${bg} ${color} hover:opacity-90 active:scale-[0.99] ${className}`}
    >
      <span>{text || children}</span>
      {arrow && <MoveRight size={18} strokeWidth={1.5} />}
      {plus && <Plus size={18} strokeWidth={1.5} />}
    </button>
  )
}

export default Button