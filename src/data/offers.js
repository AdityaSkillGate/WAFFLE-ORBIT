// Dynamic Offers and Promotions Management for WAFFLE ORBIT
// Designed for client demo with active/expired checks, coupon codes, and promo countdowns.

export const OFFERS = [
  {
    id: 'offer-waffle-duo',
    code: 'ORBIT20',
    title: 'Waffle Orbit Duo Discount',
    title_ta: 'வாஃபிள் ஆர்பிட் இரட்டையர் தள்ளுபடி',
    title_hi: 'वैफल ऑर्बिट डुओ डिस्काउंट',
    tagline: 'Order Any 2 Waffles & Get 20% Off',
    tagline_ta: 'எந்த 2 வாஃபிள்களையும் ஆர்டர் செய்து 20% தள்ளுபடி பெறுங்கள்',
    tagline_hi: 'कोई भी 2 वैफल ऑर्डर करें और 20% की छूट पाएं',
    description: 'Double the sweetness! Add any two Belgian waffles to your bag and enjoy an instant 20% discount on waffles.',
    discountType: 'percentage', // 'percentage' | 'fixed'
    discountValue: 20,
    minOrderAmount: 300,
    applicableCategories: ['waffles'],
    badge: 'Trending Combo',
    image: '/assets/wa3.jpeg',
    startDate: '2026-10-01',
    endDate: '2026-12-31', // Active
    isActive: true,
    bannerColor: 'from-amber-600/30 to-red-600/20'
  },
  {
    id: 'offer-ufo-combo',
    code: 'UFOMEAL',
    title: 'Galactic UFO Burger + Mojito Meal',
    title_ta: 'கலாக்டிக் யுஎஃப்ஓ பர்கர் + மொஜித்தோ காம்போ',
    title_hi: 'गैलेक्टिक यूएफओ बर्गर + मोहितो कॉम्बो',
    tagline: 'Flat ₹50 Off on UFO Burger & Mojito Pairing',
    tagline_ta: 'யுஎஃப்ஓ பர்கர் மற்றும் மொஜித்தோ ஜோடிக்கு ₹50 தள்ளுபடி',
    tagline_hi: 'यूएफओ बर्गर और मोहितो पर फ्लैट ₹50 की छूट',
    description: 'Bite into our sealed flying-saucer burger and wash it down with a frosty Blue Lagoon or Wild Strawberry Mojito.',
    discountType: 'fixed',
    discountValue: 50,
    minOrderAmount: 220,
    applicableCategories: ['ufo-burgers', 'mojitos'],
    badge: 'Bestseller',
    image: '/assets/1.jpg',
    startDate: '2026-10-15',
    endDate: '2026-11-30', // Active
    isActive: true,
    bannerColor: 'from-blue-600/30 to-cyan-500/20'
  },
  {
    id: 'offer-weekend-family',
    code: 'FEAST100',
    title: 'Weekend Fusion Grand Feast',
    title_ta: 'வார இறுதி பிரமாண்ட விருந்து சலுகை',
    title_hi: 'वीकेंड फ़्यूज़न ग्रैंड फ़ीस्ट',
    tagline: 'Flat ₹100 Off on Orders Above ₹599',
    tagline_ta: '₹599க்கு மேற்பட்ட ஆர்டர்களுக்கு ₹100 தள்ளுபடி',
    tagline_hi: '₹599 से अधिक के ऑर्डर पर ₹100 की छूट',
    description: 'Celebrate the weekend with family and friends! Valid across the entire menu including Rectangle Pizzas, Broast Buckets & Waffles.',
    discountType: 'fixed',
    discountValue: 100,
    minOrderAmount: 599,
    applicableCategories: ['all'],
    badge: 'Weekend Special',
    image: '/assets/4.jpg',
    startDate: '2026-10-01',
    endDate: '2026-11-15', // Active
    isActive: true,
    bannerColor: 'from-red-600/30 to-rose-600/20'
  },
  {
    id: 'offer-student-dessert',
    code: 'STUDENT15',
    title: 'Student Sweet Hour',
    title_ta: 'மாணவர்கள் இனிப்பு நேரம்',
    title_hi: 'स्टूडेंट स्वीट ऑवर',
    tagline: '15% Off on Mini Pancakes & Thick Shakes',
    tagline_ta: 'மினி பான்கேக்ஸ் & திக் ஷேக்குகளுக்கு 15% தள்ளுபடி',
    tagline_hi: 'मिनी पैनकेक्स और थिक शेक पर 15% की छूट',
    description: 'Show your college/school ID or use code STUDENT15 between 2 PM and 6 PM on weekdays for special dessert cravings.',
    discountType: 'percentage',
    discountValue: 15,
    minOrderAmount: 180,
    applicableCategories: ['pancakes', 'milkshakes'],
    badge: 'College Craving',
    image: '/assets/img.jpg',
    startDate: '2026-10-01',
    endDate: '2026-12-15', // Active
    isActive: true,
    bannerColor: 'from-purple-600/30 to-pink-600/20'
  },
  {
    id: 'offer-diwali-past',
    code: 'DIWALI50',
    title: 'Diwali Festive Sweet Box (Past)',
    title_ta: 'தீபாவளி இனிப்பு பெட்டி சலுகை (முடிவடைந்தது)',
    title_hi: 'दिवाली फेस्टिव स्वीट बॉक्स (समाप्त)',
    tagline: 'Expired Promotional Offer',
    tagline_ta: 'காலாவதியான சலுகை',
    tagline_hi: 'समाप्त हो चुका ऑफर',
    description: 'Sample expired promotion to verify the dynamic offer filtering system properly ignores past events.',
    discountType: 'percentage',
    discountValue: 25,
    minOrderAmount: 400,
    applicableCategories: ['waffles'],
    badge: 'Expired',
    image: '/assets/5.jpg',
    startDate: '2026-09-01',
    endDate: '2026-10-20', // Explicitly Expired
    isActive: true, // Marked true in flag, but date is expired so system must filter it out!
    bannerColor: 'from-gray-700/30 to-gray-800/20'
  }
];

// Helper to filter only active and unexpired offers
export const getActiveOffers = () => {
  const today = new Date();
  return OFFERS.filter(offer => {
    if (!offer.isActive) return false;
    const end = new Date(offer.endDate);
    return end >= today;
  });
};

export const findOfferByCode = (code) => {
  if (!code) return null;
  const cleanCode = code.trim().toUpperCase();
  const activeOffers = getActiveOffers();
  return activeOffers.find(o => o.code.toUpperCase() === cleanCode) || null;
};
