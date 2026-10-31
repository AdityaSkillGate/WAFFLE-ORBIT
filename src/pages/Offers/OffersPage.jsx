import React from 'react';
import OfferCard from '../../components/OfferCard/OfferCard';
import { getActiveOffers } from '../../data/offers';
import { useLanguage } from '../../context/LanguageContext';
import { Tag, Sparkles, ArrowRight } from 'lucide-react';

export default function OffersPage({ onNavigate }) {
  const { t } = useLanguage();
  const activeOffers = getActiveOffers();

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF0D4] text-[#A75D00] border border-[#FAD190]">
          <Tag className="w-3.5 h-3.5 text-orbit-red" />
          {t('offers.badge')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E]">
          {t('offers.title')}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B5B52]">
          {t('offers.subtitle')}
        </p>
      </div>

      {/* Active Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onApplyToCart={() => onNavigate('cart')}
          />
        ))}
      </div>

      {/* How to Redeem Banner */}
      <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="font-heading font-black text-lg text-[#1C130E] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-orbit-red" />
          <span>How to Redeem Promo Codes</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#6B5B52]">
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-orbit-border space-y-1">
            <span className="font-mono font-black text-orbit-red text-sm">Step 1</span>
            <p className="font-bold text-[#1C130E]">Copy the Code</p>
            <p>Click "Copy Code" on any active promotion above.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-orbit-border space-y-1">
            <span className="font-mono font-black text-orbit-red text-sm">Step 2</span>
            <p className="font-bold text-[#1C130E]">Select Delicacies</p>
            <p>Browse our menu and meet the minimum order requirement.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-orbit-border space-y-1">
            <span className="font-mono font-black text-orbit-red text-sm">Step 3</span>
            <p className="font-bold text-[#1C130E]">Instant WhatsApp Discount</p>
            <p>Paste the coupon in your bag. The savings reflect automatically on your WhatsApp bill!</p>
          </div>
        </div>

        <div className="pt-2 flex justify-center">
          <button
            onClick={() => onNavigate('menu')}
            className="btn-primary text-xs py-3 px-7"
          >
            <span>Explore Menu & Apply Promo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
