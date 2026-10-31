import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { Tag, Copy, Check, Clock, Sparkles } from 'lucide-react';

export default function OfferCard({ offer, onApplyToCart }) {
  const { language, t } = useLanguage();
  const { applyCoupon } = useCart();
  const [copied, setCopied] = useState(false);

  const isTa = language === 'ta';
  const isHi = language === 'hi';
  const title = isTa && offer.title_ta ? offer.title_ta : (isHi && offer.title_hi ? offer.title_hi : offer.title);
  const tagline = isTa && offer.tagline_ta ? offer.tagline_ta : (isHi && offer.tagline_hi ? offer.tagline_hi : offer.tagline);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApply = (e) => {
    e.stopPropagation();
    applyCoupon(offer.code);
    if (onApplyToCart) onApplyToCart(offer.code);
  };

  return (
    <div className="food-card overflow-hidden flex flex-col justify-between group">
      {/* Banner */}
      <div className="h-36 relative overflow-hidden bg-amber-500">
        <img 
          src={offer.image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-orbit-gold text-black shadow-md">
            <Sparkles className="w-3 h-3 fill-black" />
            {offer.badge}
          </span>
        </div>

        {/* Expiry Pill */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#1C130E] shadow-sm">
          <Clock className="w-3 h-3 text-orbit-red" />
          <span>Valid till {new Date(offer.endDate).toLocaleDateString()}</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-heading font-black text-base drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1">
          <p className="text-sm font-black text-orbit-red">
            {tagline}
          </p>
          <p className="text-xs text-[#6B5B52] leading-relaxed">
            {offer.description}
          </p>
        </div>

        {/* Promo Code Box */}
        <div className="pt-3 border-t border-orbit-border flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 bg-[#FFF8EE] border border-dashed border-amber-400 rounded-2xl px-3 py-2 flex-1">
            <Tag className="w-3.5 h-3.5 text-orbit-red shrink-0" />
            <span className="font-mono font-black text-xs sm:text-sm text-[#1C130E] tracking-wider">
              {offer.code}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm ${
              copied 
                ? 'bg-emerald-600 text-white' 
                : 'bg-orbit-red text-white hover:bg-orbit-red-bright'
            }`}
            title="Copy coupon"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t('offers.codeCopied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t('offers.copyCode')}</span>
              </>
            )}
          </button>
        </div>

        {/* Minimum Order Note */}
        <div className="flex items-center justify-between text-[11px] text-[#6B5B52]">
          <span>Min Order: <strong className="text-[#1C130E]">₹{offer.minOrderAmount}</strong></span>
          <span className="text-orbit-red font-bold">Auto-applied in Bag</span>
        </div>
      </div>
    </div>
  );
}
