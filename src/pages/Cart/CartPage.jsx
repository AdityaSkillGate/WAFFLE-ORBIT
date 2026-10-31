import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  ArrowRight, 
  MessageCircle, 
  MapPin, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  Truck,
  Store
} from 'lucide-react';
import { buildWhatsAppOrderUrl, WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function CartPage({ onNavigate }) {
  const { language, t } = useLanguage();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discount,
    grandTotal,
    appliedOffer,
    applyCoupon,
    removeCoupon,
    couponError,
    couponSuccess
  } = useCart();

  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    orderType: 'delivery',
    instructions: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const isTa = language === 'ta';
  const isHi = language === 'hi';

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    applyCoupon(couponCodeInput);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleProceedToWhatsApp = () => {
    const errors = {};
    if (!customer.name.trim()) errors.name = 'Please enter your name';
    if (!customer.phone.trim()) errors.phone = 'Please enter your mobile number';
    if (customer.orderType === 'delivery' && !customer.address.trim()) {
      errors.address = 'Please provide your delivery address or landmark in Sankarankovil';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const url = buildWhatsAppOrderUrl({
      cartItems,
      customer,
      subtotal,
      discount,
      grandTotal,
      appliedOffer,
      language
    });

    window.open(url, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] pt-36 pb-20 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-orbit-border rounded-3xl p-8 text-center space-y-6 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#FFF8EE] border border-amber-200 flex items-center justify-center">
            <ShoppingBag className="w-10 h-10 text-orbit-red" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold font-display text-[#1C130E]">
              {t('cart.emptyTitle')}
            </h2>
            <p className="text-sm text-[#6B5B52]">
              {t('cart.emptySubtitle')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('menu')}
            className="btn-primary w-full py-3.5 text-sm"
          >
            <span>{t('cart.browseMenu')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-[#1C130E]">
            {t('cart.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5B52] mt-1">
            {t('cart.directDeliveryNote')}
          </p>
        </div>

        <button
          onClick={clearCart}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Bag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-7 space-y-4">
          {cartItems.map((item) => {
            const displayName = isTa && item.name_ta ? item.name_ta : (isHi && item.name_hi ? item.name_hi : item.name);
            return (
              <div 
                key={item.cartItemId}
                className="bg-white border border-orbit-border rounded-3xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-[#FFF8EE] shrink-0 border border-orbit-border">
                  <img 
                    src={item.image} 
                    alt={displayName} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <h3 className="font-heading font-black text-sm sm:text-base text-[#1C130E] truncate">
                    {displayName}
                  </h3>

                  {item.selectedCustomizations && item.selectedCustomizations.length > 0 && (
                    <div className="text-[11px] text-amber-900 font-semibold flex flex-wrap gap-1">
                      {item.selectedCustomizations.map(c => (
                        <span key={c.name} className="bg-[#FFF8EE] px-2 py-0.5 rounded-md border border-amber-200">
                          +{c.name} (₹{c.price})
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm font-black text-orbit-red">
                    ₹{item.itemTotalPrice}
                  </p>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                  <div className="flex items-center bg-[#FFF8EE] border border-orbit-border rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                      className="p-1 rounded-lg hover:bg-white text-[#1C130E] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-7 text-center text-xs sm:text-sm font-black text-[#1C130E]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                      className="p-1 rounded-lg hover:bg-white text-[#1C130E] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}

          <div className="p-4 rounded-2xl bg-[#FFF8EE] border border-amber-200 flex items-center justify-between">
            <span className="text-xs text-[#6B5B52] font-semibold">Want to add waffles, mojitos or shakes?</span>
            <button
              onClick={() => onNavigate('menu')}
              className="text-xs font-black text-orbit-red hover:underline"
            >
              + Add More Items
            </button>
          </div>
        </div>

        {/* Right Column: Customer Details & Bill */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 space-y-5 shadow-lg">
            <h3 className="font-heading font-black text-lg text-[#1C130E] flex items-center gap-2">
              <Store className="w-4 h-4 text-orbit-red" />
              <span>{t('checkout.customerDetails')}</span>
            </h3>

            {/* Order Type Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setCustomer(prev => ({ ...prev, orderType: 'delivery' }))}
                className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  customer.orderType === 'delivery'
                    ? 'bg-orbit-red border-orbit-red text-white shadow-md'
                    : 'bg-[#FFF8EE] border-orbit-border text-[#6B5B52] hover:text-[#1C130E]'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Home Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setCustomer(prev => ({ ...prev, orderType: 'takeaway' }))}
                className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                  customer.orderType === 'takeaway'
                    ? 'bg-orbit-red border-orbit-red text-white shadow-md'
                    : 'bg-[#FFF8EE] border-orbit-border text-[#6B5B52] hover:text-[#1C130E]'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Take Away (Shop)</span>
              </button>
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#1C130E] mb-1">
                  {t('checkout.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleInputChange}
                  placeholder={t('checkout.namePlaceholder')}
                  className={`w-full bg-[#FFFDF9] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors ${
                    formErrors.name ? 'border-red-500' : 'border-orbit-border focus:border-orbit-red'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C130E] mb-1">
                  {t('checkout.phone')} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder={t('checkout.phonePlaceholder')}
                  className={`w-full bg-[#FFFDF9] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors ${
                    formErrors.phone ? 'border-red-500' : 'border-orbit-border focus:border-orbit-red'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>
                )}
              </div>

              {customer.orderType === 'delivery' && (
                <div>
                  <label className="block text-xs font-bold text-[#1C130E] mb-1">
                    {t('checkout.address')} *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={customer.address}
                    onChange={handleInputChange}
                    placeholder={t('checkout.addressPlaceholder')}
                    className={`w-full bg-[#FFFDF9] border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors ${
                      formErrors.address ? 'border-red-500' : 'border-orbit-border focus:border-orbit-red'
                    }`}
                  />
                  {formErrors.address && (
                    <p className="text-[11px] text-red-500 mt-1">{formErrors.address}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#1C130E] mb-1">
                  {t('checkout.instructions')}
                </label>
                <input
                  type="text"
                  name="instructions"
                  value={customer.instructions}
                  onChange={handleInputChange}
                  placeholder={t('checkout.instructionsPlaceholder')}
                  className="w-full bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Coupon Code Input */}
          <div className="bg-white border border-orbit-border rounded-3xl p-5 space-y-3 shadow-sm">
            <h4 className="text-xs font-black text-[#1C130E] uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-orbit-red" />
              <span>{t('cart.applyCoupon')}</span>
            </h4>

            {appliedOffer ? (
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-emerald-800">
                    Coupon: {appliedOffer.code}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold">
                    {appliedOffer.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeCoupon}
                  className="text-xs text-red-600 hover:text-red-700 underline font-bold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCodeInput}
                  onChange={(e) => setCouponCodeInput(e.target.value)}
                  placeholder={t('cart.couponPlaceholder')}
                  className="flex-1 bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-xl px-3 py-2 text-xs sm:text-sm text-[#1C130E] uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal placeholder:text-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-orbit-gold text-black font-extrabold text-xs hover:bg-amber-400 transition-colors"
                >
                  {t('cart.applyBtn')}
                </button>
              </form>
            )}

            {couponError && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{couponError}</span>
              </p>
            )}
            {couponSuccess && (
              <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{couponSuccess}</span>
              </p>
            )}
          </div>

          {/* Bill Summary */}
          <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 space-y-4 shadow-lg">
            <h3 className="font-heading font-black text-base text-[#1C130E]">
              {t('cart.itemTotal')}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm border-b border-orbit-border pb-4">
              <div className="flex justify-between text-[#6B5B52]">
                <span>Item Subtotal</span>
                <span className="font-bold text-[#1C130E]">₹{subtotal}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Promo Discount ({appliedOffer?.code})</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <div className="flex justify-between text-[#6B5B52]">
                <span>Delivery & Packing</span>
                <span className="text-emerald-600 font-black">{t('cart.freeDelivery')}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <span className="text-base font-black text-[#1C130E]">{t('cart.grandTotal')}</span>
              <span className="text-2xl font-black text-orbit-red">₹{grandTotal}</span>
            </div>

            {/* Submit to WhatsApp Button */}
            <button
              onClick={handleProceedToWhatsApp}
              className="w-full btn-whatsapp py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>{t('checkout.sendOrder')}</span>
            </button>

            <p className="text-[11px] text-center text-[#6B5B52]">
              {t('checkout.reviewNote')}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
