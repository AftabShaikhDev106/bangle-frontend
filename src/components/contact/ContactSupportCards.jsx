import React from 'react'
import { ArrowRight, HelpCircle, RefreshCw, Shirt, Truck } from 'lucide-react'

const supportItems = [
  {
    id: 1,
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    description: 'Find quick answers to common queries.',
    linkText: 'View FAQ',
    href: '#',
  },
  {
    id: 2,
    icon: Truck,
    title: 'Order Support',
    description: 'Track your order or get help with your purchase.',
    linkText: 'Track Order',
    href: '#',
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Returns & Exchanges',
    description: 'Learn about our easy return policy.',
    linkText: 'Read Policy',
    href: '#',
  },
  {
    id: 4,
    icon: Shirt,
    title: 'Style & Size Guide',
    description: 'Find the perfect fit for you.',
    linkText: 'View Guide',
    href: '#',
  },
]

const ContactSupportCards = () => {
  return (
    <section className="bg-primary border-b border-stone-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Horizontal Bar with Vertical Dividers */}
        <div className="bg-[#F7F5F0] rounded-xs border border-stone-200/80 shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            {supportItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="p-6 flex items-start gap-4 text-left group"
                >
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-full border border-[#B58A5A] flex items-center justify-center text-[#B58A5A] flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Text & Link */}
                  <div className="space-y-1.5">
                    <h3 className="font-sans text-xs font-semibold text-stone-800 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-sans text-stone-500 font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-1.5">
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-wider font-semibold text-[#B58A5A] hover:text-tertiary transition-colors group-hover:translate-x-0.5"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactSupportCards
