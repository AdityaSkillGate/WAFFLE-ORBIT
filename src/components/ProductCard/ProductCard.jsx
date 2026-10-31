import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Check, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct }) {
  const { language, t } = useLanguage();
  const { addToCart, cartItems } = useCart();

  const isTa = language === 'ta';
  const isHi = language === 'hi';
  const displayName = isTa && product.name_ta ? product.name_ta : (isHi && product.name_hi ? product.name_hi : product.name);

  const cartItem = cartItems.find(item => item.id === product.id);
  const qtyInCart = cartItem ? cartItem.quantity : 0;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, [], 1);
  };

  return (
    <div 
      onClick={() => onSelectProduct(product)}
      className="food-card overflow-hidden flex flex-col justify-between cursor-pointer group"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FFF8EE]">
        <img 
          src={product.image} 
          alt={displayName} 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/wa2.jpeg';
          }}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges (Veg/Non-Veg + Signature) */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5">
            {/* Standard Indian FSSAI Dietary Dot Indicator */}
            <span className={`w-4 h-4 rounded-sm border p-0.5 flex items-center justify-center bg-white shadow-sm ${
              product.isVeg ? 'border-emerald-600' : 'border-red-600'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                product.isVeg ? 'bg-emerald-600' : 'bg-red-600'
              }`} />
            </span>

            {product.isHalal && (
              <span className="badge-halal text-[10px] py-0.5 px-2 bg-white/95 shadow-sm">
                Halal
              </span>
            )}
          </div>

          {product.isSignature && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-orbit-red text-white shadow-md">
              <Sparkles className="w-2.5 h-2.5" />
              SIGNATURE
            </span>
          )}
        </div>

        {/* Star Rating Floating Badge */}
        <div className="absolute bottom-2.5 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-white/95 text-[#1C130E] shadow-sm">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>{product.rating}</span>
          <span className="text-[10px] text-[#6B5B52] font-normal">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <h3 className="font-heading font-black text-base sm:text-lg text-[#1C130E] group-hover:text-orbit-red transition-colors line-clamp-1">
            {displayName}
          </h3>
          <p className="text-xs text-[#6B5B52] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="pt-2 border-t border-orbit-border flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-[#94857C] font-bold">Price</span>
            <span className="text-lg sm:text-xl font-black text-[#1C130E]">
              ₹{product.price}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {product.customizations && product.customizations.length > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProduct(product);
                }}
                className="p-2 rounded-xl bg-[#FFF8EE] hover:bg-[#FEEFCF] text-[#6B5B52] hover:text-[#1C130E] border border-orbit-border transition-colors"
                title="Customize extras"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={handleQuickAdd}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shadow-sm ${
                qtyInCart > 0 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                  : 'bg-orbit-red hover:bg-orbit-red-bright text-white'
              }`}
            >
              {qtyInCart > 0 ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Added ({qtyInCart})</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  <span>{t('menu.addToCart')}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
