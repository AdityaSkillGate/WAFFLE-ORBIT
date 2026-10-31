import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { X, Star, Plus, Minus, Check, ShieldCheck, Sparkles, ShoppingBag } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProductModal({ product, onClose }) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const isTa = language === 'ta';
  const isHi = language === 'hi';
  const displayName = isTa && product.name_ta ? product.name_ta : (isHi && product.name_hi ? product.name_hi : product.name);

  const toggleCustomization = (addon) => {
    setSelectedCustomizations(prev => {
      const exists = prev.find(item => item.name === addon.name);
      if (exists) {
        return prev.filter(item => item.name !== addon.name);
      } else {
        return [...prev, addon];
      }
    });
  };

  const addonsTotal = selectedCustomizations.reduce((sum, item) => sum + item.price, 0);
  const singleItemPrice = product.price + addonsTotal;
  const totalPrice = singleItemPrice * quantity;

  const handleAdd = () => {
    addToCart(product, selectedCustomizations, quantity);
    setJustAdded(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D91D24', '#F5A623', '#25D366']
    });

    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-orbit-border rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1C130E] transition-colors border border-black/10 shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          
          {/* Main Visual Header */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FFF8EE] border border-orbit-border">
            <img 
              src={product.image} 
              alt={displayName} 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/wa2.jpeg';
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-4 flex items-center gap-2">
              <span className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center bg-white shadow-sm ${
                product.isVeg ? 'border-emerald-600' : 'border-red-600'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  product.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                }`} />
              </span>

              {product.isHalal && (
                <span className="badge-halal text-xs py-0.5 px-2.5 bg-white shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  100% Halal
                </span>
              )}

              {product.isSignature && (
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-black bg-orbit-red text-white shadow-md">
                  <Sparkles className="w-3 h-3" />
                  SIGNATURE
                </span>
              )}
            </div>
          </div>

          {/* Titles & Description */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1C130E]">
                {displayName}
              </h2>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FFF8EE] border border-orbit-border text-[#1C130E] font-bold text-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-xs text-[#6B5B52] font-normal">({product.reviewsCount})</span>
              </div>
            </div>

            <p className="text-sm text-[#6B5B52] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Customization Options */}
          {product.customizations && product.customizations.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-orbit-border">
              <h4 className="text-xs font-black text-[#1C130E] uppercase tracking-wider">
                {t('product.addons')}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.customizations.map((addon) => {
                  const isChecked = selectedCustomizations.some(item => item.name === addon.name);
                  return (
                    <button
                      key={addon.name}
                      type="button"
                      onClick={() => toggleCustomization(addon)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isChecked 
                          ? 'bg-[#FFF5E6] border-orbit-gold text-[#1C130E] shadow-sm' 
                          : 'bg-white border-orbit-border text-[#6B5B52] hover:border-orbit-border-dark hover:text-[#1C130E]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-orbit-red border-orbit-red text-white' : 'border-gray-300'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-bold">{addon.name}</span>
                      </div>
                      <span className="text-xs font-extrabold text-[#D91D24]">+₹{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity & Summary */}
          <div className="pt-4 border-t border-orbit-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#94857C] font-bold">
                {t('product.quantity')}
              </span>
              <div className="flex items-center bg-[#FFF8EE] border border-orbit-border rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 rounded-lg hover:bg-white text-[#1C130E] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-black text-[#1C130E]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 rounded-lg hover:bg-white text-[#1C130E] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-[#94857C] block font-bold">
                {t('product.totalPrice')}
              </span>
              <span className="text-2xl font-black text-[#1C130E]">
                ₹{totalPrice}
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer / Add Button */}
        <div className="p-4 sm:p-6 bg-[#FFF8EE] border-t border-orbit-border flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-orbit-border text-xs font-bold text-[#6B5B52] hover:text-[#1C130E] hover:bg-white transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
              justAdded 
                ? 'bg-emerald-600 text-white scale-[1.02]' 
                : 'btn-primary'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('product.addedSuccess')}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{t('menu.addToCart')} • ₹{totalPrice}</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
