import React, { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section className="bg-primary py-12 sm:py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#F7F5F0] p-6 sm:p-10 rounded-sm border border-stone-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block mb-2">
                SEND US A MESSAGE
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl text-tertiary font-light mb-2">
                We're Here to Help
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 font-light mb-6 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xs flex items-center gap-3 text-xs font-sans my-4 animate-in fade-in">
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span>Thank you! Your message has been sent successfully. We will get back to you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-stone-700 font-medium mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xs focus:outline-none focus:border-tertiary text-tertiary"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-stone-700 font-medium mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xs focus:outline-none focus:border-tertiary text-tertiary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-stone-700 font-medium mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xs focus:outline-none focus:border-tertiary text-tertiary"
                      />
                    </div>

                    {/* Select Subject */}
                    <div>
                      <label className="block text-stone-700 font-medium mb-1.5">Select Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xs focus:outline-none focus:border-tertiary text-stone-800 cursor-pointer"
                      >
                        <option value="">Choose an option</option>
                        <option value="Order Inquiry">Order Inquiry</option>
                        <option value="Product Customization">Product Customization</option>
                        <option value="Sizing & Fit">Sizing & Fit</option>
                        <option value="Returns & Exchanges">Returns & Exchanges</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-stone-700 font-medium mb-1.5">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-stone-200 rounded-xs focus:outline-none focus:border-tertiary text-tertiary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1B1B1B] text-white px-8 py-3.5 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#333] transition-all cursor-pointer shadow-2xs group"
                    >
                      <span>Send Message</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Brand Promise Box */}
          <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-stone-200/80 shadow-2xs min-h-[400px] flex flex-col justify-end p-8 sm:p-12 text-center bg-stone-900">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
              alt="Brand Promise Fabric"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Promise Box Overlay Content */}
            <div className="relative z-10 space-y-4 max-w-md mx-auto text-white">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#B58A5A] font-semibold block">
                OUR PROMISE
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-light">
                Your Happiness Matters to Us
              </h2>

              <p className="text-xs sm:text-sm text-stone-200 font-light leading-relaxed">
                At Maison Ora, we're more than just a fashion brand — we're a community. Your trust and support inspire us to bring you timeless designs, exceptional quality, and a seamless shopping experience.
              </p>

              <div className="pt-4 border-t border-white/20">
                <span className="font-serif italic text-lg sm:text-xl text-[#B58A5A] tracking-wide block">
                  Let's stay connected ♡
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
