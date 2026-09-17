import React from 'react'
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'

const contactInfoData = [
  {
    id: 1,
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    subtext: 'Mon – Sat, 10:00 AM – 7:00 PM',
  },
  {
    id: 2,
    icon: Mail,
    title: 'Email Us',
    value: 'hello@maisonora.com',
    subtext: "We'll respond within 24 hours",
  },
  {
    id: 3,
    icon: MapPin,
    title: 'Our Store',
    value: '123, Fashion Street, Banjara Hills',
    subtext: 'Hyderabad, Telangana – 500034',
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Live Chat',
    value: 'Chat with us',
    subtext: 'Mon – Sat, 10:00 AM – 6:00 PM',
  },
]

const ContactInfoCards = () => {
  return (
    <section className="bg-primary border-b border-stone-200 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Continuous Horizontal Bar Container with Vertical Dividers */}
        <div className="bg-[#F7F5F0] rounded-xs border border-stone-200/80 shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            {contactInfoData.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-8 flex flex-col items-start text-left space-y-2.5 group"
                >
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#EFECE6] border border-[#B58A5A]/30 flex items-center justify-center text-[#B58A5A] group-hover:scale-105 transition-transform duration-300 mb-1">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base font-normal text-tertiary">
                    {item.title}
                  </h3>

                  {/* Value */}
                  <p className="text-xs font-sans font-medium text-stone-800">
                    {item.value}
                  </p>

                  {/* Subtext */}
                  <p className="text-[11px] font-sans text-stone-500 font-light">
                    {item.subtext}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactInfoCards
