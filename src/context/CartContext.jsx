import React, { createContext, useContext, useState, useEffect } from 'react';
import { findOfferByCode } from '../data/offers';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('waffle_orbit_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedOffer, setAppliedOffer] = useState(() => {
    try {
      const saved = localStorage.getItem('waffle_orbit_offer');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  useEffect(() => {
    localStorage.setItem('waffle_orbit_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('waffle_orbit_offer', JSON.stringify(appliedOffer));
  }, [appliedOffer]);

  const addToCart = (product, selectedCustomizations = [], quantity = 1) => {
    // Unique key considering selected add-ons
    const customKey = selectedCustomizations.map(c => c.name).sort().join('|');
    const cartItemId = `${product.id}__${customKey}`;

    const addonsCost = selectedCustomizations.reduce((acc, c) => acc + c.price, 0);
    const itemTotalPrice = product.price + addonsCost;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, {
          ...product,
          cartItemId,
          selectedCustomizations,
          itemTotalPrice,
          quantity
        }];
      }
    });
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedOffer(null);
    setCouponSuccess('');
    setCouponError('');
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.itemTotalPrice * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Apply Coupon
  const applyCoupon = (code) => {
    setCouponError('');
    setCouponSuccess('');
    if (!code) {
      setCouponError('Please enter a coupon code');
      return false;
    }

    const offer = findOfferByCode(code);
    if (!offer) {
      setCouponError('Invalid or expired coupon code');
      return false;
    }

    if (subtotal < offer.minOrderAmount) {
      setCouponError(`Minimum order amount of ₹${offer.minOrderAmount} required for ${offer.code}`);
      return false;
    }

    setAppliedOffer(offer);
    setCouponSuccess(`Coupon ${offer.code} applied successfully!`);
    return true;
  };

  const removeCoupon = () => {
    setAppliedOffer(null);
    setCouponSuccess('');
    setCouponError('');
  };

  // Discount calculation
  let discount = 0;
  if (appliedOffer && subtotal >= appliedOffer.minOrderAmount) {
    if (appliedOffer.discountType === 'percentage') {
      discount = Math.round((subtotal * appliedOffer.discountValue) / 100);
    } else {
      discount = appliedOffer.discountValue;
    }
  }

  const grandTotal = Math.max(0, subtotal - discount);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      subtotal,
      discount,
      grandTotal,
      totalItemsCount,
      appliedOffer,
      applyCoupon,
      removeCoupon,
      couponError,
      couponSuccess
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
