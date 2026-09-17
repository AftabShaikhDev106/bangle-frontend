import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, RefreshCw, ShieldCheck, Truck } from 'lucide-react'

const CartOrderSummary = ({
  subtotal,
  discount,
  tax,
  giftWrapFee,
  total,
  totalItemsCount,
}) => {
  return (
    <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-xs border border-stone-200/80 font-sans space-y-6 shadow-2xs sticky top-28">
      
      {/* Title */}
      <h2 className="font-serif text-2xl font-normal text-tertiary pb-3 border-b border-stone-200">
        Order Summary
      </h2>

      {/* Cost Breakdown List */}
      <div className="space-y-3 text-xs font-sans">
        <div className="flex items-center justify-between text-stone-600">
          <span>Subtotal ({totalItemsCount} items)</span>
          <span className="font-medium text-stone-800">
            ₹{subtotal.toLocaleString('en-IN')}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between text-stone-600">
            <span>Discount</span>
            <span className="font-medium text-[#B65D46]">
              - ₹{discount.toLocaleString('en-IN')}
            </span>
          </div>
        )}

        {giftWrapFee > 0 && (
          <div className="flex items-center justify-between text-stone-600">
            <span>Gift Wrap</span>
            <span className="font-medium text-stone-800">
              ₹{giftWrapFee.toLocaleString('en-IN')}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-stone-600">
          <span>Shipping Charges</span>
          <span className="font-semibold text-emerald-700 uppercase tracking-wider text-[11px]">
            FREE
          </span>
        </div>

        <div className="flex items-center justify-between text-stone-500 font-light text-[11px]">
          <span>Tax (incl. of all taxes)</span>
          <span>₹{tax.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
        <span className="font-serif text-lg font-light text-tertiary">Total</span>
        <span className="font-sans text-xl font-bold text-tertiary">
          ₹{total.toLocaleString('en-IN')}
        </span>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-3 bg-[#1B1B1B] text-white py-3.5 text-xs font-sans tracking-[0.2em] uppercase font-medium hover:bg-[#333] transition-all cursor-pointer shadow-2xs group"
        >
          <span>Proceed to Checkout</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="text-center">
          <span className="text-[10px] text-stone-400 uppercase tracking-widest font-sans">
            —— OR ——
          </span>
        </div>

        <Link
          to="/"
          className="w-full inline-flex items-center justify-center py-3 border border-stone-300 bg-white text-tertiary text-xs font-sans tracking-[0.15em] uppercase font-medium hover:bg-stone-50 transition-colors cursor-pointer"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="pt-4 border-t border-stone-200/80 space-y-3 text-xs font-sans text-stone-600 font-light">
        <div className="flex items-start gap-3">
          <div className="p-1 text-[#B58A5A] flex-shrink-0 mt-0.5">
            <Truck size={16} />
          </div>
          <div>
            <h4 className="font-medium text-stone-800 text-[11px]">Free Shipping</h4>
            <p className="text-[11px] text-stone-500">On orders above ₹999</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-1 text-[#B58A5A] flex-shrink-0 mt-0.5">
            <ShieldCheck size={16} />
          </div>
          <div>
            <h4 className="font-medium text-stone-800 text-[11px]">Secure Payments</h4>
            <p className="text-[11px] text-stone-500">100% secure & safe</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-1 text-[#B58A5A] flex-shrink-0 mt-0.5">
            <RefreshCw size={16} />
          </div>
          <div>
            <h4 className="font-medium text-stone-800 text-[11px]">Easy 7-Day Returns</h4>
            <p className="text-[11px] text-stone-500">Hassle free returns</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartOrderSummary
