// WhatsApp Integration Service for WAFFLE ORBIT
// Official Shop Contact: +91 96008 75941

export const WAFFLE_ORBIT_PHONE = "919600875941";

/**
 * Builds formatted WhatsApp order message preserving customer language preference
 */
export const buildWhatsAppOrderUrl = ({
  cartItems,
  customer,
  subtotal,
  discount,
  grandTotal,
  appliedOffer,
  language = 'en'
}) => {
  const isTa = language === 'ta';
  const isHi = language === 'hi';

  const title = isTa 
    ? "🧇 *வாஃபிள் ஆர்பிட் — புதிய ஆர்டர் கோரிக்கை* 🧇" 
    : isHi 
    ? "🧇 *वैफल ऑर्बिट — नया ऑर्डर अनुरोध* 🧇" 
    : "🧇 *WAFFLE ORBIT — NEW ORDER REQUEST* 🧇";

  const custHeader = isTa 
    ? "📋 *வாடிக்கையாளர் தகவல்கள்:*" 
    : isHi 
    ? "📋 *ग्राहक विवरण:*" 
    : "📋 *CUSTOMER DETAILS:*";

  const itemsHeader = isTa 
    ? "🍽️ *ஆர்டர் செய்யப்பட்ட உணவுகள்:*" 
    : isHi 
    ? "🍽️ *ऑर्डर किए गए व्यंजन:*" 
    : "🍽️ *ORDERED ITEMS:*";

  const totalHeader = isTa 
    ? "💳 *கட்டண விவரம்:*" 
    : isHi 
    ? "💳 *बिल सारांश:*" 
    : "💳 *BILL SUMMARY:*";

  let lines = [
    title,
    `📅 ${new Date().toLocaleString()}`,
    "",
    custHeader,
    `👤 *Name:* ${customer.name || 'Not provided'}`,
    `📞 *Phone:* ${customer.phone || 'Not provided'}`,
    `🛵 *Type:* ${customer.orderType === 'takeaway' ? 'Take Away (Pickup at Shop)' : 'Home Delivery in Sankarankovil'}`,
    `📍 *Address:* ${customer.address || 'Pickup at Kalugumalai Rd Shop'}`,
    customer.instructions ? `📝 *Notes:* ${customer.instructions}` : null,
    "",
    itemsHeader
  ].filter(Boolean);

  cartItems.forEach((item, index) => {
    const itemName = isTa && item.name_ta ? item.name_ta : (isHi && item.name_hi ? item.name_hi : item.name);
    const addonsText = item.selectedCustomizations && item.selectedCustomizations.length > 0
      ? `   ↳ Extras: ${item.selectedCustomizations.map(c => c.name).join(', ')}`
      : null;

    lines.push(`${index + 1}. *${itemName}* x ${item.quantity} = ₹${item.itemTotalPrice * item.quantity}`);
    if (addonsText) lines.push(addonsText);
  });

  lines.push("");
  lines.push(totalHeader);
  lines.push(`• Subtotal: ₹${subtotal}`);
  if (discount > 0) {
    lines.push(`• Discount (${appliedOffer?.code || 'Promo'}): -₹${discount}`);
  }
  lines.push(`• *Grand Total: ₹${grandTotal}*`);
  lines.push("");
  lines.push(isTa 
    ? "✨ *தயவுசெய்து இந்த ஆர்டரை உறுதிசெய்து தயாரிக்கும் நேரத்தை தெரிவிக்கவும்.*" 
    : isHi 
    ? "✨ *कृपया इस ऑर्डर की पुष्टि करें और अनुमानित समय बताएं।* " 
    : "✨ *Please confirm availability and preparation time.*");
  lines.push("📍 _18, Kalugumalai Rd, Near Refresh Super Market, Sankarankoil_");

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WAFFLE_ORBIT_PHONE}?text=${encoded}`;
};

/**
 * Builds quick inquiry link
 */
export const buildWhatsAppInquiryUrl = (topic = "Menu Inquiry", language = 'en') => {
  const isTa = language === 'ta';
  const isHi = language === 'hi';

  const greeting = isTa
    ? `வணக்கம் வாஃபிள் ஆர்பிட்! நான் ${topic} பற்றி விசாரிக்க விரும்புகிறேன்.`
    : isHi
    ? `नमस्ते वैफल ऑर्बिट! मैं ${topic} के बारे में जानकारी चाहता हूँ।`
    : `Hello Waffle Orbit! I would like to inquire about ${topic}.`;

  return `https://wa.me/${WAFFLE_ORBIT_PHONE}?text=${encodeURIComponent(greeting)}`;
};
