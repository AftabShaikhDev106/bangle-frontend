import React from 'react'
import { footerLinks } from '../../data/landingData'

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white pt-16 pb-12 font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-normal tracking-[0.15em] text-white mb-3">
                MAISON ORA
              </h2>
              <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
                A modern maison for the considered wardrobe. Designed in India, made for the world.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-stone-400 text-xs">
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors" aria-label="Pinterest">Pinterest</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">Facebook</a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-heading mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.name === 'Jewelry' ? '/jewelry' : link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-heading mb-4">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-heading mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-heading mb-4">
              About
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-300 font-light">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Payment Methods, Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>© 2026 Maison Ora. All rights reserved.</p>

          {/* Payment Methods Badges */}
          <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-wider text-stone-400">
            <span className="px-2 py-0.5 border border-stone-700 rounded-xs">Visa</span>
            <span className="px-2 py-0.5 border border-stone-700 rounded-xs">Mastercard</span>
            <span className="px-2 py-0.5 border border-stone-700 rounded-xs">Amex</span>
            <span className="px-2 py-0.5 border border-stone-700 rounded-xs">UPI</span>
            <span className="px-2 py-0.5 border border-stone-700 rounded-xs">Paypal</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors" aria-label="Cookies policy">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
