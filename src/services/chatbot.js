// Orbit AI Assistant Engine
// Grounded directly in WAFFLE ORBIT's live catalog, offers, and store credentials.
import { PRODUCTS } from '../data/products';
import { getActiveOffers } from '../data/offers';
import { WAFFLE_ORBIT_PHONE } from './whatsapp';

export const processChatMessage = (input, currentLanguage = 'en') => {
  const query = input.trim().toLowerCase();
  const activeOffers = getActiveOffers();

  // 1. Budget Query: "under 200", "200 kulla", "₹150", etc.
  const budgetMatch = query.match(/(?:under|below|kulla|kulle|kam|less than|within|₹)?\s*(\d{2,3})/i);
  if (budgetMatch && (query.includes('waffle') || query.includes('under') || query.includes('kulla') || query.includes('₹') || query.includes('budget') || query.includes('rupees') || query.includes('rs'))) {
    const maxPrice = parseInt(budgetMatch[1], 10);
    const matchingProducts = PRODUCTS.filter(p => p.price <= maxPrice && (query.includes('waffle') ? p.category === 'waffles' : true));

    if (matchingProducts.length > 0) {
      let replyText = "";
      if (currentLanguage === 'ta') {
        replyText = `இதோ ₹${maxPrice} விலைக்குள் கிடைக்கும் எங்களின் சிறந்த உணவுகள் (${matchingProducts.length} வகைகள்):`;
      } else if (currentLanguage === 'hi') {
        replyText = `यहाँ ₹${maxPrice} के अंदर उपलब्ध हमारे स्वादिष्ट व्यंजन हैं (${matchingProducts.length} विकल्प):`;
      } else {
        replyText = `Here are our delicious specialties available within ₹${maxPrice} (${matchingProducts.length} options):`;
      }

      return {
        reply: replyText,
        products: matchingProducts.slice(0, 4),
        actions: ['Explore All Menu', 'View Active Offers']
      };
    }
  }

  // 2. Vegetarian / Pure Veg Query
  if (query.includes('veg') || query.includes('சைவம்') || query.includes('சைவ') || query.includes('शाकाहारी')) {
    const vegItems = PRODUCTS.filter(p => p.isVeg);
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `எங்களிடம் தூய சைவ வாஃபிள்ஸ், மினி பான்கேக்ஸ், வெஜ் யுஎஃப்ஓ பர்கர், பனீர் டிக்கா பீட்சா மற்றும் மில்க்ஷேக்குகள் உள்ளன:`;
    } else if (currentLanguage === 'hi') {
      replyText = `हमारे पास शुद्ध शाकाहारी वैफल्स, मिनी पैनकेक्स, वेज यूएफओ बर्गर, पनीर टिक्का पिज़्ज़ा और शेक्स उपलब्ध हैं:`;
    } else {
      replyText = `We have an exquisite pure vegetarian selection including Belgian Waffles, UFO Veg & Paneer Burgers, Paneer Tikka Pizza, and Thick Shakes:`;
    }

    return {
      reply: replyText,
      products: vegItems.slice(0, 4),
      actions: ['Show All Veg Items', 'Order on WhatsApp']
    };
  }

  // 3. Non-veg / Chicken / Halal Query
  if (query.includes('non-veg') || query.includes('chicken') || query.includes('halal') || query.includes('சிக்கன்') || query.includes('அசைவம்') || query.includes('चिकन')) {
    const nonVegItems = PRODUCTS.filter(p => !p.isVeg);
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `எங்கள் அனைத்து சிக்கன் உணவுகளும் 100% ஹலால் சான்றிதழ் பெற்றவை! இதோ எங்களின் புகழ்பெற்ற சிக்கன் யுஎஃப்ஓ பர்கர் & ப்ரோஸ்ட் பக்கெட்டுகள்:`;
    } else if (currentLanguage === 'hi') {
      replyText = `हमारा सभी चिकन 100% हलाल प्रमाणित है! पेश हैं हमारे प्रसिद्ध चिकन यूएफओ बर्गर और क्रिस्पी ब्रोस्ट बकेट:`;
    } else {
      replyText = `All our chicken is 100% Halal certified and fresh! Here are our popular Chicken UFO Burgers, Broast Chicken Buckets & BBQ Pizzas:`;
    }

    return {
      reply: replyText,
      products: nonVegItems.slice(0, 4),
      actions: ['Explore Full Menu', 'Order on WhatsApp']
    };
  }

  // 4. Offers / Deals / Discounts: "What offers are available", "offers", "discount", "promo"
  if (query.includes('offer') || query.includes('deal') || query.includes('discount') || query.includes('coupon') || query.includes('சலுகை') || query.includes('தள்ளுபடி') || query.includes('ऑफ़र') || query.includes('छूट')) {
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `இன்று செல்லுபடியாகும் சிறப்புக் கூப்பன்கள்:\n` +
        activeOffers.map(o => `✨ *${o.code}*: ${o.tagline_ta || o.tagline} (Min Order ₹${o.minOrderAmount})`).join('\n');
    } else if (currentLanguage === 'hi') {
      replyText = `आज के सक्रिय प्रोमो कोड:\n` +
        activeOffers.map(o => `✨ *${o.code}*: ${o.tagline_hi || o.tagline} (न्यूनतम ऑर्डर ₹${o.minOrderAmount})`).join('\n');
    } else {
      replyText = `Here are today's active coupon codes:\n` +
        activeOffers.map(o => `✨ *${o.code}*: ${o.tagline} (Min Order ₹${o.minOrderAmount})`).join('\n');
    }

    return {
      reply: replyText,
      actions: ['Go to Offers Page', 'Explore Menu']
    };
  }

  // 5. Location / Address / "Shop enga irukku" / "Dukaan kahan hai"
  if (query.includes('location') || query.includes('address') || query.includes('enga') || query.includes('engae') || query.includes('where') || query.includes('route') || query.includes('map') || query.includes('எங்கு') || query.includes('முகவரி') || query.includes('कहाँ') || query.includes('पता')) {
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `📍 *வாஃபிள் ஆர்பிட் இருப்பிடம்:*\n18, சௌந்திரபாண்டிய, விநாயகர் கோவில் தெரு, கழுகுமலை ரோடு, சங்கரன்கோவில், தமிழ்நாடு 627756.\n(ரிப்ரெஷ் சூப்பர் மார்க்கெட் மேற்கு பக்கம்)\n\n⏰ திறக்கும் நேரம்: காலை 10:00 – இரவு 10:00 (அனைத்து நாட்களும்)\n📞 அழைப்புகளுக்கு: +91 96008 75941`;
    } else if (currentLanguage === 'hi') {
      replyText = `📍 *वैफल ऑर्बिट का पता:*\n18, सौद्रपांडिया, विनायक कोविल स्ट्रीट, कलुगुमलाई रोड, शंकरनकोविल, तमिलनाडु 627756।\n(रिफ्रेश सुपर मार्केट के पश्चिम में)\n\n⏰ समय: सुबह 10:00 से रात 10:00 बजे तक (प्रतिदिन)\n📞 संपर्क: +91 96008 75941`;
    } else {
      replyText = `📍 *WAFFLE ORBIT Store Address:*\n18, Sowdrapandiya, Vinayagar Kovil Street, Kalugumalai Rd, Sankarankoil, Tamil Nadu 627756.\n(Near Refresh Super Market, West Side)\n\n⏰ Opening Hours: 10:00 AM – 10:00 PM (Everyday)\n📞 Phone: +91 96008 75941`;
    }

    return {
      reply: replyText,
      mapLink: "https://maps.app.goo.gl/k3m1Wqum1mVwPpLK9",
      actions: ['Get Google Maps Directions', 'Call +91 96008 75941']
    };
  }

  // 6. Timings / Hours
  if (query.includes('time') || query.includes('timing') || query.includes('open') || query.includes('close') || query.includes('நேரம்') || query.includes('समय')) {
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `வாஃபிள் ஆர்பிட் தினமும் காலை 10:00 மணி முதல் இரவு 10:00 மணி வரை திறந்திருக்கும். டேக் அவே மற்றும் ஹோம் டெலிவரி வசதியும் உண்டு!`;
    } else if (currentLanguage === 'hi') {
      replyText = `वैफल ऑर्बिट प्रतिदिन सुबह 10:00 बजे से रात 10:00 बजे तक खुला रहता है। टेक अवे और होम डिलीवरी भी उपलब्ध है!`;
    } else {
      replyText = `We are open every single day from 10:00 AM to 10:00 PM. Take Away and Home Delivery in Sankarankovil are both available!`;
    }
    return {
      reply: replyText,
      actions: ['View Store Location', 'Order on WhatsApp']
    };
  }

  // 7. UFO Burger Query
  if (query.includes('ufo') || query.includes('burger') || query.includes('பர்கர்') || query.includes('बर्गर')) {
    const ufoBurgers = PRODUCTS.filter(p => p.category === 'ufo-burgers');
    return {
      reply: currentLanguage === 'ta'
        ? `எங்களின் தனித்துவமான யுஎஃப்ஓ பர்கர்கள் சாஸ்கள் சிந்தாமல் சீல் செய்யப்பட்டு மொறுமொறுப்பாக பரிமாறப்படுகின்றன:`
        : currentLanguage === 'hi'
        ? `हमारे सिग्नेचर यूएफओ बर्गर सील किए गए बन्स में भरे जाते हैं जिससे स्वाद पूरी तरह अंदर बंद रहता है:`
        : `Our signature UFO Flying Saucer burgers crimp and heat-seal the bun edges so not a drop of delicious sauce or cheese leaks out!`,
      products: ufoBurgers,
      actions: ['Explore Full Menu', 'Order on WhatsApp']
    };
  }

  // 8. Waffle Specific Query
  if (query.includes('waffle') || query.includes('வாஃபிள்') || query.includes('वैफल')) {
    const waffles = PRODUCTS.filter(p => p.category === 'waffles');
    return {
      reply: currentLanguage === 'ta'
        ? `எங்களின் சுவைமிக்க பெல்ஜியன் வாஃபிள்ஸ் (Nutella Hazelnut, Charcoal Gelato, Cosmic Blue Velvet, Triple Chocolate):`
        : currentLanguage === 'hi'
        ? `हमारे लजीज बेल्जियन वैफल्स (Nutella Hazelnut, Charcoal Gelato, Cosmic Blue Velvet, Triple Chocolate):`
        : `Our world-class freshly ironed Belgian waffles made to order:`,
      products: waffles.slice(0, 4),
      actions: ['Explore All Waffles', 'Check Deals']
    };
  }

  // 9. How to order / WhatsApp instructions
  if (query.includes('order') || query.includes('delivery') || query.includes('swiggy') || query.includes('zomato') || query.includes('ஆர்டர்') || query.includes('டெலிவரி') || query.includes('ऑर्डर')) {
    let replyText = "";
    if (currentLanguage === 'ta') {
      replyText = `நீங்கள் 3 எளிய வழிகளில் ஆர்டர் செய்யலாம்:\n1. இந்த இணையதளத்தில் பொருட்களைத் தேர்ந்தெடுத்து வாட்ஸ்அப் மூலம் நேரடியாக ஆர்டர் செய்யுங்கள்.\n2. Zomato & Swiggy தளங்கள் வழியாக ஆர்டர் செய்யுங்கள்.\n3. கடைக்கு நேரில் வந்து டேக் அவே பார்சல் பெறலாம் (+91 96008 75941).`;
    } else if (currentLanguage === 'hi') {
      replyText = `आप 3 आसान तरीकों से ऑर्डर कर सकते हैं:\n1. इस वेबसाइट से आइटम जोड़कर सीधे व्हाट्सएप पर ऑर्डर करें।\n2. Zomato व Swiggy ऐप के ज़रिये ऑर्डर करें।\n3. दुकान से सीधे टेक अवे पार्सल लें (+91 96008 75941)।`;
    } else {
      replyText = `You can order in 3 quick ways:\n1. Build your bag on this website and checkout directly via WhatsApp for priority preparation.\n2. Order on Zomato or Swiggy.\n3. Walk into our Kalugumalai Rd shop or call +91 96008 75941 for takeaway.`;
    }
    return {
      reply: replyText,
      actions: ['Open Cart', 'Order on Zomato', 'Order on WhatsApp']
    };
  }

  // Fallback
  let fallbackText = "";
  if (currentLanguage === 'ta') {
    fallbackText = `மன்னிக்கவும், உங்கள் கேள்விக்கு என்னால் துல்லியமான தகவலைக் கண்டுபிடிக்க முடியவில்லை. நீங்கள் வாஃபிள்ஸ், யுஎஃப்ஓ பர்கர்கள், பீட்சா, சலுகைகள் அல்லது கடை இருப்பிடம் பற்றி கேட்கலாம். அல்லது நேரடியாக எங்கள் வாட்ஸ்அப் எண்ணிற்கு தொடர்பு கொள்ளலாம் (+91 96008 75941)!`;
  } else if (currentLanguage === 'hi') {
    fallbackText = `क्षमा करें, मुझे इस प्रश्न का सीधा उत्तर नहीं मिला। आप वैफल्स, यूएफओ बर्गर, पिज़्ज़ा, ऑफ़र या दुकान के पते के बारे में पूछ सकते हैं, या सीधे हमारे व्हाट्सएप पर संपर्क कर सकते हैं (+91 96008 75941)!`;
  } else {
    fallbackText = `I couldn't find an exact match for that, but I can assist you with our Belgian Waffles, UFO Burgers, Rectangle Pizzas, active promo codes, or shop directions! You can also reach our staff directly on WhatsApp (+91 96008 75941).`;
  }

  return {
    reply: fallbackText,
    actions: ['Waffles under ₹200', 'Today’s Offers', 'Shop Location & Timings', 'WhatsApp Staff']
  };
};
