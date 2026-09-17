import React from 'react'
import { Headphones, RotateCcw, ShieldCheck, Sparkles, Truck, Zap } from 'lucide-react'

const iconMap = {
  Truck: Truck,
  RotateCcw: RotateCcw,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones,
  Zap: Zap,
}

const FeatureCard = ({ feature }) => {
  const { title, desc, iconName } = feature
  const IconComponent = iconMap[iconName] || Sparkles

  return (
    <div className="flex flex-col items-center text-center p-6 bg-secondary/80 border border-stone-200/50 rounded-xs transition-transform hover:-translate-y-1">
      <div className="w-12 h-12 rounded-full bg-white text-tertiary flex items-center justify-center mb-4 shadow-xs">
        <IconComponent size={20} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-lg font-normal text-tertiary mb-1">
        {title}
      </h3>
      <p className="font-sans text-xs text-placeholder leading-relaxed font-light">
        {desc}
      </p>
    </div>
  )
}

export default FeatureCard
