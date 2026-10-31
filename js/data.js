/**
 * WAFFLE ORBIT — Official Product & Business Catalog
 * Exactly matched to the Official Store Menu Board & Brand Identity
 * Designed & Developed by Aditya Skill Gate IT Solution | Sankarankovil
 * Website: https://adityaskillgate.com/
 */

const SHOP_CONFIG = {
  name: "WAFFLE ORBIT",
  tagline: "Orbit of Taste... Beyond the Usual!",
  subTagline: "★ GOOD FOOD ★ GOOD MOOD ★ GOOD TIME ★",
  slogan: "SIP • BITE • RELAX • REPEAT",
  address: "Kalugumalai Road, Sankarankovil, Tamil Nadu 627756",
  landmark: "Refresh Super Market West Side",
  phonePrimary: "9600875941",
  phoneSecondary: "9751866187",
  phoneFormatted: "+91 96008 75941 / 97518 66187",
  timings: "10:00 AM – 10:00 PM (Open Everyday)",
  mapsUrl: "https://maps.app.goo.gl/k3m1Wqum1mVwPpLK9",
  instagramUrl: "https://www.instagram.com/waffleorbit25?exln=cm54Nm1zcmt2ZHpk",
  whatsappUrl: "https://wa.me/919600875941",
  facebookUrl: "https://www.facebook.com/",
  youtubeUrl: "https://www.youtube.com/",
  zomatoUrl: "https://www.zomato.com/cs/sankarankovil/waffle-orbit-sankarankovil-locality/order",
  agencyName: "Aditya Skill Gate IT Solution",
  agencyUrl: "https://adityaskillgate.com/",
  agencyTagline: "IT Training & Software Services, Sankarankovil"
};

// 7 Official Menu Columns from the Authentic Shop Board
const OFFICIAL_BOARD_COLUMNS = [
  {
    id: 'coffee',
    title: 'TEA & COFFEE',
    title_ta: 'டீ & காபி',
    title_hi: 'चाय और कॉफ़ी',
    icon: 'coffee',
    headerColor: '#68381e',
    headerBg: 'from-[#5a2a12] to-[#7b3f1b]',
    borderColor: '#a35528',
    image: './assets/coffee-filter.jpg',
    bulletIcon: '☕',
    items: [
      { name: 'Tea', name_ta: 'டீ', price: 25, isVeg: true, id: 'tea-kadak' },
      { name: 'Black Tea', name_ta: 'பிளாக் டீ', price: 25, isVeg: true, id: 'tea-black' },
      { name: 'Green Tea', name_ta: 'கிரீன் டீ', price: 35, isVeg: true, id: 'tea-green' },
      { name: 'Filter Coffee', name_ta: 'பில்டர் காபி', price: 45, isVeg: true, id: 'coffee-south-indian-filter' },
      { name: 'Hot Coffee', name_ta: 'ஹாட் காபி', price: 50, isVeg: true, id: 'coffee-hot' },
      { name: 'Cappuccino', name_ta: 'கப்புச்சினோ', price: 75, isVeg: true, id: 'coffee-cappuccino' },
      { name: 'Cold Coffee', name_ta: 'கோல்ட் காபி', price: 99, isVeg: true, id: 'coffee-chilled-cold' }
    ]
  },
  {
    id: 'sandwiches',
    title: 'SANDWICH',
    title_ta: 'சாண்ட்விச்',
    title_hi: 'सैंडविच',
    icon: 'sandwich',
    headerColor: '#275E28',
    headerBg: 'from-[#1e4b1f] to-[#2e6930]',
    borderColor: '#438e45',
    image: './assets/sandwich-tandoori-paneer.jpg',
    bulletIcon: '🥪',
    items: [
      { name: 'Veg Sandwich', name_ta: 'வெஜ் சாண்ட்விச்', price: 90, isVeg: true, id: 'sandwich-veg' },
      { name: 'Cheese Sandwich', name_ta: 'சீஸ் சாண்ட்விச்', price: 110, isVeg: true, id: 'sandwich-cheese' },
      { name: 'Corn & Cheese Sandwich', name_ta: 'கார்ன் & சீஸ் சாண்ட்விச்', price: 120, isVeg: true, id: 'sandwich-corn-cheese' },
      { name: 'Paneer Sandwich', name_ta: 'பனீர் சாண்ட்விச்', price: 130, isVeg: true, id: 'sandwich-paneer' },
      { name: 'Tandoori Paneer Sandwich', name_ta: 'தந்தூரி பனீர் சாண்ட்விச்', price: 140, isVeg: true, id: 'sandwich-tandoori-paneer' },
      { name: 'Club Sandwich', name_ta: 'கிளப் சாண்ட்விச்', price: 160, isVeg: true, id: 'sandwich-club' }
    ]
  },
  {
    id: 'ufo-burgers',
    title: 'UFO BURGER',
    title_ta: 'யுஎஃப்ஓ பர்கர்',
    title_hi: 'यूएफओ बर्गर',
    icon: 'disc',
    headerColor: '#A83818',
    headerBg: 'from-[#8e2b10] to-[#b83e1b]',
    borderColor: '#db5730',
    image: './assets/ufo-chicken-burger.jpg',
    bulletIcon: '★',
    items: [
      { name: 'Veg UFO Burger', name_ta: 'வெஜ் யுஎஃப்ஓ பர்கர்', price: 110, isVeg: true, id: 'ufo-veg-burger' },
      { name: 'Paneer UFO Burger', name_ta: 'பனீர் யுஎஃப்ஓ பர்கர்', price: 140, isVeg: true, id: 'ufo-paneer-burger' },
      { name: 'Chicken UFO Burger', name_ta: 'சிக்கன் யுஎஃப்ஓ பர்கர்', price: 150, isVeg: false, id: 'ufo-chicken-burger' },
      { name: 'Spicy Chicken UFO Burger', name_ta: 'காரசாரமான சிக்கன் யுஎஃப்ஓ', price: 165, isVeg: false, id: 'ufo-spicy-chicken-burger' },
      { name: 'Cheese UFO Burger', name_ta: 'சீஸ் யுஎஃப்ஓ பர்கர்', price: 135, isVeg: true, id: 'ufo-cheese-burger' }
    ]
  },
  {
    id: 'pizza',
    title: 'RECTANGLE PIZZA',
    title_ta: 'செவ்வக பீட்சா',
    title_hi: 'रेक्टैंगल पिज़्ज़ा',
    icon: 'pizza',
    headerColor: '#881313',
    headerBg: 'from-[#6e0d0d] to-[#991b1b]',
    borderColor: '#c52828',
    image: './assets/pizza.jpg',
    bulletIcon: '☑',
    items: [
      { name: 'Margherita', name_ta: 'மார்கரிட்டா', price: 190, isVeg: true, id: 'pizza-margherita' },
      { name: 'Veg Delight', name_ta: 'வெஜ் டிலைட்', price: 220, isVeg: true, id: 'pizza-veg-delight' },
      { name: 'Paneer Tikka', name_ta: 'பனீர் டிக்கா', price: 240, isVeg: true, id: 'pizza-paneer-tikka' },
      { name: 'Farm House', name_ta: 'பார்ம் ஹவுஸ்', price: 250, isVeg: true, id: 'pizza-farmhouse' },
      { name: 'Chicken BBQ', name_ta: 'சிக்கன் பார்பிக்யூ', price: 280, isVeg: false, id: 'pizza-chicken-bbq' },
      { name: 'Peri Peri Chicken', name_ta: 'பெரி பெரி சிக்கன்', price: 290, isVeg: false, id: 'pizza-peri-peri-chicken' },
      { name: 'Cheese Burst', name_ta: 'சீஸ் பர்ஸ்ட்', price: 320, isVeg: true, id: 'pizza-cheeseburst' }
    ]
  },
  {
    id: 'fried-chicken',
    title: 'FRIED CHICKEN',
    title_ta: 'ஃபிரைடு சிக்கன்',
    title_hi: 'फ्राइड चिकन',
    icon: 'flame',
    headerColor: '#8F5B10',
    headerBg: 'from-[#734709] to-[#a36814]',
    borderColor: '#c68422',
    image: './assets/fried-chicken-bucket.jpg',
    bulletIcon: '🍗',
    items: [
      { name: 'Broast Chicken', name_ta: 'ப்ரோஸ்ட் சிக்கன் (4 Pcs)', price: 299, isVeg: false, id: 'fried-broast-chicken' },
      { name: 'Chicken Strips', name_ta: 'சிக்கன் ஸ்ட்ரிப்ஸ்', price: 180, isVeg: false, id: 'fried-chicken-strips' },
      { name: 'Chicken Popcorn', name_ta: 'சிக்கன் பாப்கார்ன்', price: 140, isVeg: false, id: 'fried-chicken-popcorn' },
      { name: 'Chicken Wings', name_ta: 'சிக்கன் விங்ஸ்', price: 190, isVeg: false, id: 'fried-chicken-wings' },
      { name: 'Hot & Spicy Chicken', name_ta: 'ஹாட் & ஸ்பைசி சிக்கன்', price: 220, isVeg: false, id: 'fried-chicken-spicy' }
    ]
  },
  {
    id: 'mojitos',
    title: 'MOJITO',
    title_ta: 'மொஜித்தோ',
    title_hi: 'मोहितो',
    icon: 'glass-water',
    headerColor: '#0E6E6E',
    headerBg: 'from-[#0b5454] to-[#128383]',
    borderColor: '#19a7a7',
    image: './assets/mojito-blue-lagoon.jpg',
    bulletIcon: '💠',
    items: [
      { name: 'Mint Mojito', name_ta: 'புதினா மொஜித்தோ', price: 99, isVeg: true, id: 'mojito-mint-classic' },
      { name: 'Blue Lagoon', name_ta: 'ப்ளூ லகூன்', price: 110, isVeg: true, id: 'mojito-blue-lagoon' },
      { name: 'Green Apple', name_ta: 'கிரீன் ஆப்பிள்', price: 110, isVeg: true, id: 'mojito-green-apple' },
      { name: 'Watermelon', name_ta: 'தர்பூசணி', price: 115, isVeg: true, id: 'mojito-watermelon' },
      { name: 'Lemon Mojito', name_ta: 'லெமன் மொஜித்தோ', price: 99, isVeg: true, id: 'mojito-lemon' },
      { name: 'Strawberry Mojito', name_ta: 'ஸ்ட்ராபெரி மொஜித்தோ', price: 120, isVeg: true, id: 'mojito-strawberry' }
    ]
  },
  {
    id: 'milkshakes',
    title: 'MILKSHAKE',
    title_ta: 'மில்க்ஷேக்',
    title_hi: 'मिल्कशेक',
    icon: 'cup-soda',
    headerColor: '#50225E',
    headerBg: 'from-[#3e174b] to-[#612874]',
    borderColor: '#823b9a',
    image: './assets/shake-oreo.jpg',
    bulletIcon: '🥤',
    items: [
      { name: 'Chocolate', name_ta: 'சாக்லேட் ஷேக்', price: 120, isVeg: true, id: 'shake-chocolate' },
      { name: 'Oreo', name_ta: 'ஓரியோ ஓவர்லோட்', price: 140, isVeg: true, id: 'shake-oreo-overload' },
      { name: 'KitKat', name_ta: 'கிட்காட் பிரேக்', price: 150, isVeg: true, id: 'shake-kitkat-crunch' },
      { name: 'Butterscotch', name_ta: 'பட்டர்ஸ்காட்ச்', price: 130, isVeg: true, id: 'shake-butterscotch' },
      { name: 'Strawberry', name_ta: 'ஸ்ட்ராபெரி', price: 130, isVeg: true, id: 'shake-strawberry-thick' },
      { name: 'Vanilla', name_ta: 'வெனிலா கிளாசிக்', price: 110, isVeg: true, id: 'shake-vanilla' },
      { name: 'Mango', name_ta: 'மாம்பழ ஷேக்', price: 130, isVeg: true, id: 'shake-mango' }
    ]
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Specialties', name_ta: 'அனைத்து உணவுகள்', name_hi: 'सभी व्यंजन', icon: 'sparkles' },
  { id: 'board', name: '★ Official Shop Board', name_ta: '★ அதிகாரப்பூர்வ மெனு போர்டு', name_hi: '★ आधिकारिक मेन्यू बोर्ड', icon: 'layout' },
  { id: 'waffles', name: 'Belgian Waffles', name_ta: 'பெல்ஜியன் வாஃபிள்ஸ்', name_hi: 'बेल्जियन वैफल्स', icon: 'layers' },
  { id: 'ufo-burgers', name: 'UFO Burgers', name_ta: 'யுஎஃப்ஓ பர்கர்கள்', name_hi: 'यूएफओ बर्गर', icon: 'disc' },
  { id: 'pizza', name: 'Rectangle Pizza', name_ta: 'செவ்வக பீட்சா', name_hi: 'रेक्टैंगल पिज़्ज़ा', icon: 'pizza' },
  { id: 'fried-chicken', name: 'Fried Chicken', name_ta: 'ஃபிரைடு சிக்கன்', name_hi: 'फ्राइड चिकन', icon: 'flame' },
  { id: 'sandwiches', name: 'Sandwiches', name_ta: 'சாண்ட்விச்கள்', name_hi: 'सैंडविच', icon: 'sandwich' },
  { id: 'mojitos', name: 'Mojitos', name_ta: 'மொஜித்தோஸ்', name_hi: 'मोहितो', icon: 'glass-water' },
  { id: 'milkshakes', name: 'Thick Milkshakes', name_ta: 'மில்க்ஷேக்குகள்', name_hi: 'मिल्कशेक', icon: 'cup-soda' },
  { id: 'coffee', name: 'Tea & Coffee', name_ta: 'டீ & காபி', name_hi: 'चाय और कॉफ़ी', icon: 'coffee' },
  { id: 'pancakes', name: 'Mini Pancakes', name_ta: 'மினி பான்கேக்ஸ்', name_hi: 'मिनी पैनकेक्स', icon: 'circle-dot' },
  { id: 'pasta-fries', name: 'Pasta & Fries', name_ta: 'பாஸ்தா & ஃப்ரைஸ்', name_hi: 'पास्ता और फ्राइज', icon: 'utensils-crossed' }
];

const PRODUCTS = [
  // 1. BELGIAN WAFFLES (Shop Namesake Flagship)
  {
    id: 'waffle-charcoal-noir',
    name: 'Charcoal Noir Gelato Waffle',
    name_ta: 'சார்கோல் நோயர் ஜெலாட்டோ வாஃபிள்',
    name_hi: 'चारकोल नोयर जिलेटो वैफल',
    category: 'waffles',
    price: 180,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 142,
    isFeatured: true,
    isSignature: true,
    image: './assets/wa1.jpeg',
    shortDescription: 'Signature activated charcoal dark waffle with vanilla bean gelato, chocolate shavings & cherry.',
    description: 'Freshly ironed crisp Belgian charcoal waffle with deep pockets, topped with velvety Madagascan vanilla gelato, shaved Belgian dark chocolate, and a glistening red maraschino cherry.',
    customizations: [
      { name: 'Extra Gelato Scoop', price: 40 },
      { name: 'Warm Chocolate Fudge Drizzle', price: 30 },
      { name: 'Roasted Almond Flakes', price: 25 }
    ]
  },
  {
    id: 'waffle-golden-classic',
    name: 'Golden Classic Berry Waffle',
    name_ta: 'கோல்டன் கிளாசிக் பெர்ரி வாஃபிள்',
    name_hi: 'गोल्डन क्लासिक बेरी वैफल',
    category: 'waffles',
    price: 170,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 98,
    isFeatured: true,
    isSignature: false,
    image: './assets/wa2.jpeg',
    shortDescription: 'Double golden honeycomb waffle discs with fresh strawberries, blueberries and two scoops of vanilla.',
    description: 'Crispy on the outside, fluffy inside. Two artisanal golden waffles crowned with sweet hand-sliced hill strawberries, fresh blueberries, golden maple nectar, and two chilled vanilla gelato scoops.',
    customizations: [
      { name: 'Extra Vanilla Scoop', price: 35 },
      { name: 'Whipped Cream Rose', price: 25 },
      { name: 'Pure Honey Drizzle', price: 20 }
    ]
  },
  {
    id: 'waffle-hazelnut-nutella',
    name: 'Nutella Roasted Hazelnut Waffle',
    name_ta: 'நூட்டெல்லா வறுத்த ஹேசல்நட் வாஃபிள்',
    name_hi: 'नुटेला रोस्टेड हेज़लनट वैफल',
    category: 'waffles',
    price: 190,
    isVeg: true,
    isHalal: true,
    rating: 5.0,
    reviewsCount: 215,
    isFeatured: true,
    isSignature: true,
    image: './assets/wa3.jpeg',
    shortDescription: 'Warm Belgian waffle sandwich overflowing with authentic Nutella spread and crunchy roasted hazelnuts.',
    description: 'An indulgent chocoholic dream. Warm, fresh waffle sandwich loaded with generous layers of molten Nutella and a copious sprinkle of slow-roasted chopped hazelnuts delivering crunch in every bite.',
    customizations: [
      { name: 'Extra Nutella Overflow', price: 40 },
      { name: 'Vanilla Ice Cream on Side', price: 35 }
    ]
  },
  {
    id: 'waffle-cosmic-blue-velvet',
    name: 'Cosmic Blue Velvet Waffle',
    name_ta: 'காஸ்மிக் ப்ளூ வெல்வெட் வாஃபிள்',
    name_hi: 'कॉस्मिक ब्लू वेलवेट वैफल',
    category: 'waffles',
    price: 199,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 164,
    isFeatured: true,
    isSignature: true,
    image: './assets/wa4.jpeg',
    shortDescription: 'Orbital celestial blue waffle sandwich with sweetened cream cheese and plump dark blueberries.',
    description: 'Inspired by the deep cosmos. A vibrant teal-blue waffle sandwich infused with vanilla, stuffed with silky cream cheese frosting and ringed with fresh juicy blueberries.',
    customizations: [
      { name: 'Blueberry Coulis Drizzle', price: 30 },
      { name: 'White Chocolate Dip', price: 30 }
    ]
  },
  {
    id: 'waffle-triple-chocolate',
    name: 'Triple Chocolate Overload Waffle',
    name_ta: 'டிரிபிள் சாக்லேட் ஓவர்லோட் வாஃபிள்',
    name_hi: 'ट्रिपल चॉकलेट ओवरलोड वैफल',
    category: 'waffles',
    price: 185,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 188,
    isFeatured: true,
    isSignature: true,
    image: './assets/wa5.jpeg',
    shortDescription: 'Dark chocolate waffle wedges in Belgian dark sauce, milk chocolate ganache and melted white cascade.',
    description: 'Decadent cocoa-infused waffle triangles bathed in dark chocolate sauce, silken milk chocolate and warm creamy white chocolate drizzle.',
    customizations: [
      { name: 'Chocolate Ice Cream Scoop', price: 35 },
      { name: 'Choco Chips & Sprinkles', price: 20 }
    ]
  },
  {
    id: 'waffle-red-velvet',
    name: 'Red Velvet Belgian Waffle',
    name_ta: 'ரெட் வெல்வெட் பெல்ஜியன் வாஃபிள்',
    name_hi: 'रेड वेलवेट बेल्जियन वैफल',
    category: 'waffles',
    price: 175,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 130,
    isFeatured: false,
    isSignature: false,
    image: './assets/red.jpg',
    shortDescription: 'Vibrant crimson waffle heart served with sweet white chocolate glaze, toasted walnuts, and fresh berries.',
    description: 'Signature red velvet batter with subtle cocoa notes, pressed to perfection, drizzled with sweet cream glaze, crunchy walnuts, and a scoop of rich vanilla ice cream.',
    customizations: [
      { name: 'Vanilla Ice Cream', price: 35 },
      { name: 'Extra White Chocolate', price: 25 }
    ]
  },
  {
    id: 'waffle-peanut-butter-bar',
    name: 'Crunchy Peanut Butter Waffle Bar',
    name_ta: 'க்ரஞ்சி பீனட் பட்டர் வாஃபிள் பார்',
    name_hi: 'क्रंची पीनट बटर वैफल बार',
    category: 'waffles',
    price: 150,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 82,
    isFeatured: false,
    isSignature: false,
    image: './assets/wa6.jpeg',
    shortDescription: 'Crisp waffle bar slathered in warm creamy peanut butter and topped with roasted split peanuts.',
    description: 'Rich, savory-sweet delight. Handcrafted waffle bar packed with protein-rich peanut butter and golden roasted peanuts for the ultimate crunch.',
    customizations: [
      { name: 'Honey Drizzle', price: 20 },
      { name: 'Dark Chocolate Swirl', price: 25 }
    ]
  },
  {
    id: 'waffle-pistachio-berry',
    name: 'Pistachio Berry Royal Waffle',
    name_ta: 'பிஸ்தா பெர்ரி ராயல் வாஃபிள்',
    name_hi: 'पिस्ता बेरी रॉयल वैफल',
    category: 'waffles',
    price: 210,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 94,
    isFeatured: true,
    isSignature: true,
    image: './assets/5.jpg',
    shortDescription: 'Royal dessert waffle layered with milk chocolate, white sauce, raspberries and Iranian pistachios.',
    description: 'A gourmet masterpiece. Fluffy waffle submerged in cascading chocolate and white cream, decorated with forest berries and crushed green pistachios.',
    customizations: [
      { name: 'Extra Pistachio Dust', price: 35 },
      { name: 'Double Berries', price: 40 }
    ]
  },

  // 2. UFO BURGERS (Official Board Category)
  {
    id: 'ufo-veg-burger',
    name: 'Veg UFO Burger (Sealed Bun)',
    name_ta: 'வெஜ் யுஎஃப்ஓ பர்கர்',
    name_hi: 'वेज यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 76,
    isFeatured: false,
    isSignature: true,
    image: './assets/ufo-veg-burger.jpg',
    shortDescription: 'Crimped flying-saucer sealed burger bun locking in spiced vegetable patty, cheese melt and secret sauce.',
    description: 'Our proprietary UFO burger machine hot-seals the edges of the toasted bun into a flying saucer, preventing any messy leaks while sealing maximum flavor, molten cheese, and crisp veggies inside.',
    customizations: [
      { name: 'Extra Cheese Slice', price: 25 },
      { name: 'Spicy Peri Peri Dip', price: 20 },
      { name: 'Add French Fries', price: 50 }
    ]
  },
  {
    id: 'ufo-paneer-burger',
    name: 'Paneer UFO Burger (Tandoori Melt)',
    name_ta: 'பனீர் யுஎஃப்ஓ பர்கர்',
    name_hi: 'पनीर यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 140,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 104,
    isFeatured: true,
    isSignature: true,
    image: './assets/ufo-paneer-burger.jpg',
    shortDescription: 'Sealed flying saucer burger with marinated tandoori paneer steak, mint mayo and crunchy onions.',
    description: 'Thick succulent slab of tandoori-marinated paneer encased in our signature sealed UFO bun with melted cheese, bell peppers, and signature house dressing.',
    customizations: [
      { name: 'Double Cheese Melt', price: 30 },
      { name: 'Jalapeno Kick', price: 20 }
    ]
  },
  {
    id: 'ufo-chicken-burger',
    name: 'Chicken UFO Burger (Zero Leak)',
    name_ta: 'சிக்கன் யுஎஃப்ஓ பர்கர்',
    name_hi: 'चिकन यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 150,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 192,
    isFeatured: true,
    isSignature: true,
    image: './assets/ufo-chicken-burger.jpg',
    shortDescription: 'Signature UFO pressed burger filled with tender chicken patty, chipotle sauce and melted cheddar.',
    description: 'The hero of Waffle Orbit! Juicy 100% Halal chicken patty seasoned with secret orbit herbs, seared and crimped into our trademark UFO bun with crisp lettuce and cheddar.',
    customizations: [
      { name: 'Double Chicken Patty', price: 60 },
      { name: 'Extra Cheddar Cheese', price: 25 },
      { name: 'Spicy Ghost Chili Sauce', price: 20 }
    ]
  },
  {
    id: 'ufo-spicy-chicken-burger',
    name: 'Spicy Chicken UFO Burger',
    name_ta: 'காரசாரமான சிக்கன் யுஎஃப்ஓ பர்கர்',
    name_hi: 'स्पाइसी चिकन यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 165,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 167,
    isFeatured: true,
    isSignature: true,
    image: './assets/ufo-spicy-burger.jpg',
    shortDescription: 'Fiery marinated fried chicken fillet with ghost pepper sauce and crunchy slaw sealed in a UFO bun.',
    description: 'Crispy fried spicy chicken tossed in red hot chili dust, sealed in our hot pressed UFO bun with creamy coleslaw to balance the heat.',
    customizations: [
      { name: 'Cooling Garlic Mayo', price: 20 },
      { name: 'Extra Cheese', price: 25 }
    ]
  },
  {
    id: 'ufo-cheese-burger',
    name: 'Cheese UFO Burger (Triple Melt)',
    name_ta: 'சீஸ் யுஎஃப்ஓ பர்கர்',
    name_hi: 'चीज़ यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 135,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 95,
    isFeatured: false,
    isSignature: false,
    image: './assets/ufo-cheese-burger.jpg',
    shortDescription: 'Triple-layer mozzarella and cheddar explosion inside a toasted flying-saucer bun.',
    description: 'For pure cheese lovers. A gooey molten core of mozzarella, cheddar, and processed cheese with Italian herbs, trapped in our crimped UFO bun.',
    customizations: [
      { name: 'Add Corn & Jalapenos', price: 25 }
    ]
  },

  // 3. RECTANGLE PIZZA (Official Board Category)
  {
    id: 'pizza-margherita',
    name: 'Margherita Rectangle Pizza',
    name_ta: 'மார்கரிட்டா செவ்வக பீட்சா',
    name_hi: 'मार्गेरीटा रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 190,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 88,
    isFeatured: false,
    isSignature: false,
    image: './assets/rectangle-pizza-margherita.jpg',
    shortDescription: 'Italian plum tomato sauce, fresh whole milk mozzarella and sweet basil leaves on rectangular crispy crust.',
    description: 'San Marzano style tomato puree, melted whole milk mozzarella, virgin olive oil drizzle and fresh basil on crisp Roman-style rectangular dough.',
    customizations: [
      { name: 'Double Mozzarella', price: 45 }
    ]
  },
  {
    id: 'pizza-veg-delight',
    name: 'Veg Delight Rectangle Pizza',
    name_ta: 'வெஜ் டிலைட் செவ்வக பீட்சா',
    name_hi: 'वेज डिलाइट रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 220,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 95,
    isFeatured: false,
    isSignature: false,
    image: './assets/rectangle-pizza-veg-delight.jpg',
    shortDescription: 'Crisp rectangle base loaded with golden sweet corn, crisp capsicum, black olives and stringy mozzarella.',
    description: 'Loaded with farm-fresh crunchy bell peppers, sweet American corn kernels, sliced red onions and mozzarella on herb tomato marinara.',
    customizations: [
      { name: 'Extra Cheese Burst Base', price: 50 },
      { name: 'Jalapeno Topping', price: 25 }
    ]
  },
  {
    id: 'pizza-paneer-tikka',
    name: 'Paneer Tikka Rectangle Pizza',
    name_ta: 'பனீர் டிக்கா செவ்வக பீட்சா',
    name_hi: 'पनीर टिक्का रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 240,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 156,
    isFeatured: true,
    isSignature: true,
    image: './assets/pizza.jpg',
    shortDescription: 'Rectangular hand-stretched crust topped with clay-oven paneer cubes, red onions, mushrooms and mozzarella.',
    description: 'Our unique rectangular shape gives more crispy edge-to-crust ratio! Loaded with marinara, 100% dairy mozzarella, tandoori paneer tikka, button mushrooms and sliced red onions.',
    customizations: [
      { name: 'Cheese Burst Crust', price: 50 },
      { name: 'Extra Paneer', price: 40 },
      { name: 'Black Olives & Jalapenos', price: 30 }
    ]
  },
  {
    id: 'pizza-farmhouse',
    name: 'Farm House Rectangle Pizza',
    name_ta: 'பார்ம் ஹவுஸ் செவ்வக பீட்சா',
    name_hi: 'फार्म हाउस रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 250,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 112,
    isFeatured: false,
    isSignature: false,
    image: './assets/rectangle-pizza-farmhouse.jpg',
    shortDescription: 'Rustic harvest mix of sliced button mushrooms, juicy tomatoes, sweet corn, capsicum and mozzarella.',
    description: 'An earthy garden medley featuring button mushrooms, ripened tomatoes, green peppers, sweet corn, and double mozzarella on a crisp golden crust.',
    customizations: [
      { name: 'Cheese Burst Base', price: 50 }
    ]
  },
  {
    id: 'pizza-chicken-bbq',
    name: 'Smoky Chicken BBQ Rectangle Pizza',
    name_ta: 'சிக்கன் பார்பிக்யூ செவ்வக பீட்சா',
    name_hi: 'चिकन बारबेक्यू रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 280,
    isVeg: false,
    isHalal: true,
    rating: 5.0,
    reviewsCount: 220,
    isFeatured: true,
    isSignature: true,
    image: './assets/rectangle-pizza-bbq.jpg',
    shortDescription: 'Wood-fired rectangle crust with smoky BBQ shredded chicken, caramelized onions and stretchy mozzarella.',
    description: 'Smothered in house smoky hickory barbecue sauce, premium mozzarella, tender grilled chicken chunks, sweet caramelized red onions, and fresh herb garnish.',
    customizations: [
      { name: 'Cheese Burst Base', price: 60 },
      { name: 'Extra BBQ Chicken', price: 50 }
    ]
  },
  {
    id: 'pizza-peri-peri-chicken',
    name: 'Peri Peri Chicken Rectangle Pizza',
    name_ta: 'பெரி பெரி சிக்கன் செவ்வக பீட்சா',
    name_hi: 'पेरी पेरी चिकन रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 290,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 145,
    isFeatured: true,
    isSignature: false,
    image: './assets/rectangle-pizza-periperi.jpg',
    shortDescription: 'African bird’s eye chili marinated chicken with bell peppers, sweet corn and stretchy mozzarella.',
    description: 'Spicy, tangy and vibrant! Diced chicken tossed in citrusy peri-peri spices, roasted bell peppers, crunchy sweet corn and mozzarella.',
    customizations: [
      { name: 'Cheese Burst Crust', price: 60 },
      { name: 'Extra Peri Peri Mayo Drizzle', price: 25 }
    ]
  },
  {
    id: 'pizza-cheeseburst',
    name: 'Cheese Burst Rectangle Pizza',
    name_ta: 'சீஸ் பர்ஸ்ட் செவ்வக பீட்சா',
    name_hi: 'चीज़ बर्स्ट रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 320,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 178,
    isFeatured: true,
    isSignature: true,
    image: './assets/rectangle-pizza-cheeseburst.jpg',
    shortDescription: 'Gooey liquid cheese river sealed inside the rectangle crust with double layer mozzarella topping.',
    description: 'The ultimate indulgence for cheese lovers. Liquid cheddar river hidden within the double-layered crust and crowned with golden baked mozzarella.',
    customizations: [
      { name: 'Add Sweet Corn & Jalapeno', price: 30 }
    ]
  },

  // 4. FRIED CHICKEN (Official Board Category)
  {
    id: 'fried-broast-chicken',
    name: 'Broast Chicken (4 Pcs Bucket)',
    name_ta: 'ப்ரோஸ்ட் சிக்கன் (4 துண்டுகள்)',
    name_hi: 'ब्रोस्ट चिकन (4 पीस बकेट)',
    category: 'fried-chicken',
    price: 299,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 260,
    isFeatured: true,
    isSignature: true,
    image: './assets/fried-chicken-bucket.jpg',
    shortDescription: '4 pieces of pressure-fried juicy bone-in chicken in official Waffle Orbit bucket with garlic dip.',
    description: 'Marinated for 12 hours in 11 aromatic spices, coated in double-crunch dredge and pressure-broasted to seal in maximum natural juices while achieving an ultra-crispy shell. 100% Halal certified.',
    customizations: [
      { name: 'Add French Fries', price: 50 },
      { name: 'Extra Garlic Toum Dip', price: 25 },
      { name: 'Spicy Peri Peri Sprinkle', price: 20 }
    ]
  },
  {
    id: 'fried-chicken-strips',
    name: 'Chicken Strips (5 Pcs)',
    name_ta: 'சிக்கன் ஸ்ட்ரிப்ஸ் (5 துண்டுகள்)',
    name_hi: 'चिकन स्ट्रिप्स (5 पीस)',
    category: 'fried-chicken',
    price: 180,
    isVeg: false,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 140,
    isFeatured: false,
    isSignature: false,
    image: './assets/fried-chicken-strips.jpg',
    shortDescription: 'Tender 100% chicken breast fillets crumbed and flash fried to golden perfection with dip.',
    description: 'Boneless tender chicken strips, perfectly seasoned and fried golden. Served hot with our signature tangy dipping sauce.',
    customizations: [
      { name: 'Garlic Mayo Dip', price: 20 },
      { name: 'Peri Peri Shake Seasoning', price: 20 }
    ]
  },
  {
    id: 'fried-chicken-popcorn',
    name: 'Chicken Popcorn',
    name_ta: 'சிக்கன் பாப்கார்ன்',
    name_hi: 'चिकन पॉपकॉर्न',
    category: 'fried-chicken',
    price: 140,
    isVeg: false,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 175,
    isFeatured: false,
    isSignature: false,
    image: './assets/fried-chicken-popcorn.jpg',
    shortDescription: 'Addictive bite-sized crispy nuggets of spiced chicken breast tossed in savory seasoning.',
    description: 'High-protein, ultra-crispy chicken poppers with secret seasoning. Perfect for quick cafe snacking.',
    customizations: [
      { name: 'Cheesy Jalapeno Dip', price: 25 }
    ]
  },
  {
    id: 'fried-chicken-wings',
    name: 'Crispy Chicken Wings (4 Pcs)',
    name_ta: 'மொருமொருப்பான சிக்கன் விங்ஸ்',
    name_hi: 'क्रिस्पी चिकन विंग्स',
    category: 'fried-chicken',
    price: 190,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 118,
    isFeatured: true,
    isSignature: false,
    image: './assets/fried-chicken-wings.jpg',
    shortDescription: 'Crispy seasoned bone-in wings tossed in tangy hot sauce with cool herb dip.',
    description: 'Whole chicken wings double-battered for maximum crunch and glazed with our chef special glaze.',
    customizations: [
      { name: 'BBQ Dip', price: 20 }
    ]
  },
  {
    id: 'fried-chicken-spicy',
    name: 'Hot & Spicy Chicken (3 Pcs)',
    name_ta: 'ஹாட் & ஸ்பைசி சிக்கன்',
    name_hi: 'हॉट एंड स्पाइसी चिकन',
    category: 'fried-chicken',
    price: 220,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 134,
    isFeatured: false,
    isSignature: true,
    image: './assets/fried-chicken-spicy.jpg',
    shortDescription: 'Extra-fiery marinated bone-in chicken with cayenne dust and crunchy rippled crust.',
    description: 'For spice enthusiasts! Deeply marinated in ghost pepper blend, double coated and fried till scorching crisp.',
    customizations: [
      { name: 'Garlic Toum Dip', price: 25 }
    ]
  },

  // 5. SANDWICHES (Official Board Category)
  {
    id: 'sandwich-veg',
    name: 'Veg Sandwich',
    name_ta: 'வெஜ் சாண்ட்விச்',
    name_hi: 'वेज सैंडविच',
    category: 'sandwiches',
    price: 90,
    isVeg: true,
    isHalal: true,
    rating: 4.6,
    reviewsCount: 65,
    isFeatured: false,
    isSignature: false,
    image: './assets/sandwich-veg.jpg',
    shortDescription: 'Fresh garden cucumbers, tomatoes, bell peppers and mint chutney in toasted bread.',
    description: 'Light, crisp and wholesome toasted sandwich layered with sliced cucumbers, tomatoes, spiced potatoes, and homemade green chutney.',
    customizations: [
      { name: 'Add Cheese Slice', price: 20 }
    ]
  },
  {
    id: 'sandwich-cheese',
    name: 'Cheese Sandwich',
    name_ta: 'சீஸ் சாண்ட்விச்',
    name_hi: 'चीज़ सैंडविच',
    category: 'sandwiches',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 84,
    isFeatured: false,
    isSignature: false,
    image: './assets/sandwich-cheese.jpg',
    shortDescription: 'Double melted cheddar and mozzarella slices grilled with Italian seasoning.',
    description: 'Golden grilled sandwich bread filled with melting layers of rich cheese and aromatic oregano flakes.',
    customizations: [
      { name: 'Extra Cheese', price: 25 }
    ]
  },
  {
    id: 'sandwich-corn-cheese',
    name: 'Corn & Cheese Sandwich',
    name_ta: 'கார்ன் & சீஸ் சாண்ட்விச்',
    name_hi: 'कॉर्न और चीज़ सैंडविच',
    category: 'sandwiches',
    price: 120,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 78,
    isFeatured: false,
    isSignature: false,
    image: './assets/sandwich-corn-cheese.jpg',
    shortDescription: 'Sweet American corn kernels melted with mozzarella and seasoned with black pepper.',
    description: 'Juicy sweet corn smothered in creamy cheese spread and Italian herbs, grilled golden brown.',
    customizations: [
      { name: 'Extra Cheese', price: 20 }
    ]
  },
  {
    id: 'sandwich-paneer',
    name: 'Paneer Sandwich',
    name_ta: 'பனீர் சாண்ட்விச்',
    name_hi: 'पनीर सैंडविच',
    category: 'sandwiches',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 90,
    isFeatured: false,
    isSignature: false,
    image: './assets/sandwich-tandoori-paneer.jpg',
    shortDescription: 'Spiced fresh malai paneer cubes, chopped capsicum and creamy sauce grilled crisp.',
    description: 'Soft cottage cheese tossed in cumin and chaat masala, layered with fresh capsicum and mint spread in toasted bread.',
    customizations: [
      { name: 'Add Cheese Slice', price: 20 }
    ]
  },
  {
    id: 'sandwich-tandoori-paneer',
    name: 'Tandoori Paneer Sandwich',
    name_ta: 'தந்தூரி பனீர் சாண்ட்விச்',
    name_hi: 'तंदूरी पनीर सैंडविच',
    category: 'sandwiches',
    price: 140,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 92,
    isFeatured: true,
    isSignature: true,
    image: './assets/sandwich-tandoori-paneer.jpg',
    shortDescription: 'Three-layer grilled jumbo sandwich with charred tandoori paneer, capsicum and mint chutney.',
    description: 'Crisp golden grill marks on buttery bread encasing spiced marinated paneer cubes, chopped capsicum, onions, and melted cheese.',
    customizations: [
      { name: 'Extra Cheese Slice', price: 20 },
      { name: 'Add French Fries', price: 50 }
    ]
  },
  {
    id: 'sandwich-club',
    name: 'Club Sandwich (Triple Decker)',
    name_ta: 'கிளப் சாண்ட்விச்',
    name_hi: 'क्लब सैंडविच',
    category: 'sandwiches',
    price: 160,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 110,
    isFeatured: true,
    isSignature: false,
    image: './assets/sandwich-club.jpg',
    shortDescription: 'Three toasted bread tiers packed with cheese, fresh veggies, coleslaw and potato crisps.',
    description: 'The classic triple-decker! Crisp lettuce, tomatoes, cucumber, cheese, and seasoned filling cut into triangular quarters.',
    customizations: [
      { name: 'Extra Cheese', price: 25 }
    ]
  },

  // 6. MOJITOS (Official Board Category)
  {
    id: 'mojito-mint-classic',
    name: 'Mint Mojito',
    name_ta: 'புதினா மொஜித்தோ',
    name_hi: 'मिंट मोहितो',
    category: 'mojitos',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 130,
    isFeatured: false,
    isSignature: false,
    image: './assets/mojito-mint-classic.jpg',
    shortDescription: 'The ultimate refresher with freshly crushed mint, zesty lime slices and sparkling chilled soda.',
    description: 'Hand-crushed fresh garden mint, raw cane sweetness, and tangy lime juice frothed over crystal ice cubes.',
    customizations: [
      { name: 'Extra Chilled', price: 10 }
    ]
  },
  {
    id: 'mojito-blue-lagoon',
    name: 'Blue Lagoon Mojito',
    name_ta: 'ப்ளூ லகூன் மொஜித்தோ',
    name_hi: 'ब्लू लैगून मोहितो',
    category: 'mojitos',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 165,
    isFeatured: true,
    isSignature: true,
    image: './assets/mojito-blue-lagoon.jpg',
    shortDescription: 'Electric blue curacao fizz with freshly muddled garden mint, lime wedges and crushed ice.',
    description: 'Vibrant, tropical, and endlessly refreshing. Sparkling soda infused with blue curacao syrup, freshly slapped mint sprigs, and sour lime juice over ice.',
    customizations: [
      { name: 'Extra Mint & Lime', price: 15 },
      { name: 'Double Fizz Burst', price: 20 }
    ]
  },
  {
    id: 'mojito-green-apple',
    name: 'Green Apple Mojito',
    name_ta: 'கிரீன் ஆப்பிள் மொஜித்தோ',
    name_hi: 'ग्रीन एप्पल मोहितो',
    category: 'mojitos',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 98,
    isFeatured: false,
    isSignature: false,
    image: './assets/mojito-green-apple.jpg',
    shortDescription: 'Crisp green Granny Smith apple cooler with crushed ice, mint leaves and lemon.',
    description: 'Sweet and sour crisp green apple flavor bubbly soda, muddled mint sprigs, and lime wheels over cracked ice.',
    customizations: [
      { name: 'Extra Fizz', price: 15 }
    ]
  },
  {
    id: 'mojito-watermelon',
    name: 'Watermelon Mojito',
    name_ta: 'தர்பூசணி மொஜித்தோ',
    name_hi: 'तरबूज मोहितो',
    category: 'mojitos',
    price: 115,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 85,
    isFeatured: false,
    isSignature: false,
    image: './assets/mojito-watermelon.jpg',
    shortDescription: 'Juicy crushed summer watermelon, fresh mint leaves, lime and sparkling bubbles.',
    description: 'Sweet real watermelon essence shaken with mint leaves, lemon spritz, and chilled club soda.',
    customizations: [
      { name: 'Extra Mint', price: 10 }
    ]
  },
  {
    id: 'mojito-lemon',
    name: 'Lemon Mojito',
    name_ta: 'லெமன் மொஜித்தோ',
    name_hi: 'लेमन मोहितो',
    category: 'mojitos',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 92,
    isFeatured: false,
    isSignature: false,
    image: './assets/mojito-mint-classic.jpg',
    shortDescription: 'Classic double lime cooler with muddled mint leaves and iced effervescent soda.',
    description: 'Tart, thirst-quenching lemon cooler made with freshly squeezed citrus and sparkling water.',
    customizations: [
      { name: 'Sweet & Salty Twist', price: 10 }
    ]
  },
  {
    id: 'mojito-strawberry',
    name: 'Strawberry Mojito',
    name_ta: 'ஸ்ட்ராபெரி மொஜித்தோ',
    name_hi: 'स्ट्रॉबेरी मोहितो',
    category: 'mojitos',
    price: 120,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 112,
    isFeatured: true,
    isSignature: false,
    image: './assets/mojito-strawberry.jpg',
    shortDescription: 'Muddled strawberries, fragrant mint leaves, fresh lime and chilled sparkling soda.',
    description: 'Sweet crushed strawberries mixed with tart lime juice and cooling mint leaves, topped with bubbly club soda.',
    customizations: [
      { name: 'Extra Strawberry Crush', price: 20 }
    ]
  },

  // 7. MILKSHAKES (Official Board Category)
  {
    id: 'shake-chocolate',
    name: 'Chocolate Milkshake',
    name_ta: 'சாக்லேட் மில்க்ஷேக்',
    name_hi: 'चॉकलेट मिल्कशेक',
    category: 'milkshakes',
    price: 120,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 115,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-chocolate.jpg',
    shortDescription: 'Pure cocoa ice-cream shake blended thick with Hershey’s chocolate syrup drizzle.',
    description: 'Classic velvety chocolate shake blended with rich whole milk, cocoa cream, and chocolate fudge swirls.',
    customizations: [
      { name: 'Whipped Cream', price: 25 },
      { name: 'Ice Cream Scoop', price: 35 }
    ]
  },
  {
    id: 'shake-oreo-overload',
    name: 'Oreo Milkshake',
    name_ta: 'ஓரியோ மில்க்ஷேக்',
    name_hi: 'ओरियो मिल्कशेक',
    category: 'milkshakes',
    price: 140,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 210,
    isFeatured: true,
    isSignature: true,
    image: './assets/shake-oreo.jpg',
    shortDescription: 'Rich ice-cream milkshake blended with crushed Oreo cookies, chocolate syrup and whipped cream crown.',
    description: 'Thick, creamy and decadent. Made with four whole Oreo cookies blended into whole milk and vanilla ice cream, topped with chocolate fudge and cookie crumb crunch.',
    customizations: [
      { name: 'Extra Oreo Crumble', price: 20 },
      { name: 'Whipped Cream Rose', price: 25 },
      { name: 'Ice Cream Scoop on Top', price: 35 }
    ]
  },
  {
    id: 'shake-kitkat-crunch',
    name: 'KitKat Milkshake',
    name_ta: 'கிட்காட் மில்க்ஷேக்',
    name_hi: 'किटकेट मिल्कशेक',
    category: 'milkshakes',
    price: 150,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 155,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-kitkat.jpg',
    shortDescription: 'Crispy wafer KitKat fingers blended into rich chocolate milk with chocolate stick garnish.',
    description: 'Crispy chocolate-coated wafer bars crushed into chilled rich milk with chocolate ganache.',
    customizations: [
      { name: 'Extra KitKat Finger', price: 30 }
    ]
  },
  {
    id: 'shake-butterscotch',
    name: 'Butterscotch Milkshake',
    name_ta: 'பட்டர்ஸ்காட்ச் மில்க்ஷேக்',
    name_hi: 'बटरस्कॉच मिल्कशेक',
    category: 'milkshakes',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 88,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-butterscotch.jpg',
    shortDescription: 'Caramelized toffee syrup and crunchy praline nuts blended in creamy milk.',
    description: 'Golden butterscotch ice cream blitzed with caramel ribbon and crunchy nut praline bits.',
    customizations: [
      { name: 'Extra Praline Crunch', price: 20 }
    ]
  },
  {
    id: 'shake-strawberry-thick',
    name: 'Strawberry Milkshake',
    name_ta: 'ஸ்ட்ராபெரி மில்க்ஷேக்',
    name_hi: 'स्ट्रॉबेरी मिल्कशेक',
    category: 'milkshakes',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 94,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-strawberry.jpg',
    shortDescription: 'Fresh strawberry puree churned with thick cream, vanilla milk and whipped topping.',
    description: 'Velvety pink perfection prepared with luscious strawberry pulp, churned thick and garnished with white chocolate drops.',
    customizations: [
      { name: 'Whipped Cream', price: 25 }
    ]
  },
  {
    id: 'shake-vanilla',
    name: 'Vanilla Milkshake',
    name_ta: 'வெனிலா மில்க்ஷேக்',
    name_hi: 'वेनिला मिल्कशेक',
    category: 'milkshakes',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 76,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-strawberry.jpg',
    shortDescription: 'Madagascar vanilla bean ice cream shaken with chilled whole milk and sweet syrup.',
    description: 'Silky smooth classic vanilla shake with pure vanilla essence and creamy dairy richness.',
    customizations: [
      { name: 'Choco Chips', price: 15 }
    ]
  },
  {
    id: 'shake-mango',
    name: 'Mango Milkshake',
    name_ta: 'மாம்பழ மில்க்ஷேக்',
    name_hi: 'मैंगो मिल्कशेक',
    category: 'milkshakes',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 102,
    isFeatured: false,
    isSignature: false,
    image: './assets/shake-mango.jpg',
    shortDescription: 'Alphonso mango pulp whipped with milk and cream into a thick golden shake.',
    description: 'Sun-ripened Alphonso mango goodness blended to thick golden perfection with a cherry on top.',
    customizations: [
      { name: 'Ice Cream Scoop', price: 35 }
    ]
  },

  // 8. TEA & COFFEE (Official Board Category)
  {
    id: 'tea-kadak',
    name: 'Tea (Masala Chai)',
    name_ta: 'டீ (மசாலா டீ)',
    name_hi: 'चाय (मसाला चाय)',
    category: 'coffee',
    price: 25,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 220,
    isFeatured: false,
    isSignature: false,
    image: './assets/tea-kadak.jpg',
    shortDescription: 'Steaming hot Indian milk tea infused with crushed cardamom and ginger.',
    description: 'Freshly brewed aromatic tea leaves simmered with ginger, cardamom, and fresh whole milk.',
    customizations: [
      { name: 'Ginger Extra', price: 5 }
    ]
  },
  {
    id: 'tea-black',
    name: 'Black Tea',
    name_ta: 'பிளாக் டீ',
    name_hi: 'ब्लैक टी',
    category: 'coffee',
    price: 25,
    isVeg: true,
    isHalal: true,
    rating: 4.6,
    reviewsCount: 68,
    isFeatured: false,
    isSignature: false,
    image: './assets/tea-kadak.jpg',
    shortDescription: 'Crisp Assam liquor black tea with lemon slice and natural sweetener.',
    description: 'Clean amber liquor made from premium Assam tea leaves with refreshing citrus notes.',
    customizations: [
      { name: 'Add Lemon', price: 5 }
    ]
  },
  {
    id: 'tea-green',
    name: 'Green Tea',
    name_ta: 'கிரீன் டீ',
    name_hi: 'ग्रीन टी',
    category: 'coffee',
    price: 35,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 80,
    isFeatured: false,
    isSignature: false,
    image: './assets/tea-green.jpg',
    shortDescription: 'Antioxidant-rich whole leaf green tea infused with organic honey and lemon.',
    description: 'Pure loose-leaf green tea steeped lightly for smooth herbal notes and wellness rejuvenation.',
    customizations: [
      { name: 'Pure Honey', price: 10 }
    ]
  },
  {
    id: 'coffee-south-indian-filter',
    name: 'Filter Coffee',
    name_ta: 'பில்டர் காபி',
    name_hi: 'फ़िल्टर कॉफ़ी',
    category: 'coffee',
    price: 45,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 185,
    isFeatured: true,
    isSignature: true,
    image: './assets/coffee-filter.jpg',
    shortDescription: 'Traditional Kumbakonam style aromatic chicory-blend decoction frothed with fresh milk.',
    description: 'Brewed with traditional brass filter decoction, poured back and forth from dabarah and tumbler for that legendary frothy aromatic sip.',
    customizations: [
      { name: 'Extra Strong Decoction', price: 10 }
    ]
  },
  {
    id: 'coffee-hot',
    name: 'Hot Coffee',
    name_ta: 'ஹாட் காபி',
    name_hi: 'हॉट कॉफ़ी',
    category: 'coffee',
    price: 50,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 95,
    isFeatured: false,
    isSignature: false,
    image: './assets/coffee-filter.jpg',
    shortDescription: 'Steaming hot coffee made with roasted beans and creamy milk froth.',
    description: 'Rich roasted espresso blended with piping hot foamed milk.',
    customizations: [
      { name: 'Extra Sugar', price: 0 }
    ]
  },
  {
    id: 'coffee-cappuccino',
    name: 'Cappuccino',
    name_ta: 'கப்புச்சினோ',
    name_hi: 'कपुचीनो',
    category: 'coffee',
    price: 75,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 110,
    isFeatured: false,
    isSignature: false,
    image: './assets/coffee-cappuccino.jpg',
    shortDescription: 'Velvety espresso shot crowned with silky milk foam and cocoa art dusting.',
    description: 'Double espresso topped with steamed micro-foam and artisan chocolate dusting.',
    customizations: [
      { name: 'Caramel Drizzle', price: 15 }
    ]
  },
  {
    id: 'coffee-chilled-cold',
    name: 'Cold Coffee',
    name_ta: 'கோல்ட் காபி',
    name_hi: 'कोल्ड कॉफ़ी',
    category: 'coffee',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 140,
    isFeatured: true,
    isSignature: false,
    image: './assets/coffee-cold.jpg',
    shortDescription: 'Espresso shot whipped with chilled milk, sugar and drizzled with Hershey’s chocolate syrup.',
    description: 'Rich roasted espresso blended until creamy and frothy with chilled full-cream milk, served over ice cubes with cocoa dust.',
    customizations: [
      { name: 'Vanilla Ice Cream Float', price: 35 }
    ]
  },

  // 9. MINI PANCAKES (Shop Specialty)
  {
    id: 'pancakes-chocolate-delight',
    name: 'Belgian Chocolate Mini Pancakes (8 Pcs)',
    name_ta: 'பெல்ஜியன் சாக்லேட் மினி பான்கேக்ஸ் (8 துண்டுகள்)',
    name_hi: 'बेल्जियन चॉकलेट मिनी पैनकेक्स (8 पीस)',
    category: 'pancakes',
    price: 140,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 110,
    isFeatured: true,
    isSignature: false,
    image: './assets/mini-pancakes-chocolate.jpg',
    shortDescription: '8 fluffy mini silver-dollar pancakes smothered in warm molten chocolate and chocolate chips.',
    description: 'Eight bite-sized, feather-light pancakes made fresh to order on cast-iron griddles, drenched in rich Belgian chocolate sauce and dusted with powdered sugar.',
    customizations: [
      { name: 'Vanilla Ice Cream', price: 35 },
      { name: 'Crushed Oreo Dust', price: 20 }
    ]
  },
  {
    id: 'pancakes-nutella-banana',
    name: 'Nutella Banana Mini Pancakes (8 Pcs)',
    name_ta: 'நூட்டெல்லா பனானா மினி பான்கேக்ஸ் (8 துண்டுகள்)',
    name_hi: 'नुटेला बनाना मिनी पैनकेक्स (8 पीस)',
    category: 'pancakes',
    price: 160,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 88,
    isFeatured: false,
    isSignature: false,
    image: './assets/mini-pancakes-nutella.jpg',
    shortDescription: '8 warm mini pancakes layered with genuine Nutella spread and caramelized banana slices.',
    description: 'Golden mini pancakes combined with the timeless pair of warm Nutella and freshly sliced sweet bananas.',
    customizations: [
      { name: 'Whipped Cream', price: 25 }
    ]
  },

  // 10. PASTA & FRIES (Savoury Snacks)
  {
    id: 'pasta-creamy-alfredo',
    name: 'Creamy White Sauce Alfredo Pasta',
    name_ta: 'கிரீமி ஒயிட் சாஸ் ஆல்ஃபிரடோ பாஸ்தா',
    name_hi: 'क्रीमी व्हाइट सॉस अल्फ्रेडो पास्ता',
    category: 'pasta-fries',
    price: 190,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 105,
    isFeatured: true,
    isSignature: false,
    image: './assets/pasta-creamy-alfredo.jpg',
    shortDescription: 'Penne in velvety garlic butter, parmesan cheese cream sauce with broccoli & mushrooms.',
    description: 'Al dente pasta tossed in an opulent sauce of heavy cream, pure butter, roasted garlic, cracked black pepper and parmesan, finished with sauteed vegetables.',
    customizations: [
      { name: 'Add Grilled Chicken Chunks', price: 50 },
      { name: 'Extra Melted Cheese', price: 30 }
    ]
  },
  {
    id: 'fries-peri-peri-crinkle',
    name: 'Peri Peri Crispy French Fries',
    name_ta: 'பெரி பெரி மொறுமொறுப்பான பிரெஞ்ச் ஃப்ரைஸ்',
    name_hi: 'पेरी पेरी क्रिस्पी फ्रेंच फ्राइज',
    category: 'pasta-fries',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 160,
    isFeatured: false,
    isSignature: false,
    image: './assets/fries-peri-peri.jpg',
    shortDescription: 'Golden crisp skin-on potato fries tossed in fiery African peri-peri spice dust.',
    description: 'Hot, crunchy, and packed with punchy spice. Served in our wire fry basket with cheesy dip.',
    customizations: [
      { name: 'Cheesy Melt Topping', price: 35 },
      { name: 'Garlic Mayo Dip', price: 20 }
    ]
  }
];

const OFFERS = [
  {
    id: 'offer-waffle20',
    title: 'Orbit 20% Off Launch Special',
    title_ta: 'ஆர்பிட் 20% தள்ளுபடி சலுகை',
    title_hi: 'ऑर्बिट 20% छूट स्पेशल',
    code: 'ORBIT20',
    discount: '20% OFF',
    discountPercent: 20,
    minOrder: 299,
    description: 'Enjoy 20% flat discount on orders above ₹299 across all Belgian waffles and thick milkshakes.',
    badge: 'Trending Offer',
    gradient: 'from-amber-500/20 to-red-500/20'
  },
  {
    id: 'offer-ufomeal',
    title: 'UFO Burger + Mojito Combo',
    title_ta: 'யுஎஃப்ஓ பர்கர் + மொஜித்தோ காம்போ',
    title_hi: 'यूएफओ बर्गर + मोहितो कॉम्बो',
    code: 'UFOMEAL',
    discount: 'Save ₹50',
    discountFixed: 50,
    minOrder: 240,
    description: 'Buy any Signature Chicken or Paneer UFO Burger and get a Blue Lagoon Mojito at just ₹60.',
    badge: 'Bestseller Combo',
    gradient: 'from-red-500/20 to-amber-500/20'
  },
  {
    id: 'offer-feast100',
    title: 'Weekend Family Feast Discount',
    title_ta: 'வார இறுதி குடும்ப விருந்து தள்ளுபடி',
    title_hi: 'वीकेंड फैमिली फीस्ट डिस्काउंट',
    code: 'FEAST100',
    discount: '₹100 OFF',
    discountFixed: 100,
    minOrder: 699,
    description: 'Flat ₹100 instant cash discount on Rectangle Pizza + Broasted Chicken Bucket family combo.',
    badge: 'Weekend Special',
    gradient: 'from-emerald-500/20 to-amber-500/20'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Karthik R.",
    location: "Sankarankovil",
    rating: 5,
    comment: "The Charcoal Noir waffle with vanilla gelato is unmatched anywhere in Tenkasi district! The waffle stays super crispy even with melted ice cream.",
    tag: "Charcoal Waffle Lover"
  },
  {
    id: 2,
    name: "Priya S.",
    location: "Kalugumalai Rd",
    rating: 5,
    comment: "Their sealed UFO Chicken Burger is pure genius. Absolutely zero sauce drips, perfectly toasted edges and juicy chicken patty inside!",
    tag: "UFO Burger Fan"
  },
  {
    id: 3,
    name: "Mohamed Aslam",
    location: "Sankarankoil Town",
    rating: 5,
    comment: "100% Halal certified broasted chicken bucket! Crunchy on the outside and super tender inside. Our whole family loved the rectangle pizza too.",
    tag: "Broast & Pizza Fan"
  }
];

const GALLERY_PHOTOS = [
  { src: './assets/official-menu-board.png', title: 'Official Waffle Orbit Shop Menu Board', category: 'Official Board', likes: '940' },
  { src: './assets/wa1.jpeg', title: 'Charcoal Noir Gelato Waffle with Cherry', category: 'Waffles', likes: '342' },
  { src: './assets/wa2.jpeg', title: 'Golden Classic Berry Waffle with Ice Cream', category: 'Waffles', likes: '289' },
  { src: './assets/wa3.jpeg', title: 'Nutella Roasted Hazelnut Waffle Sandwich', category: 'Waffles', likes: '412' },
  { src: './assets/wa4.jpeg', title: 'Cosmic Blue Velvet Cream Cheese Waffle', category: 'Waffles', likes: '378' },
  { src: './assets/wa5.jpeg', title: 'Triple Chocolate Overload Cascade', category: 'Waffles', likes: '520' },
  { src: './assets/wa6.jpeg', title: 'Crunchy Peanut Butter Waffle Bar', category: 'Waffles', likes: '198' },
  { src: './assets/ufo-chicken-burger.jpg', title: 'Signature Sealed Chicken UFO Burger', category: 'UFO Burgers', likes: '580' },
  { src: './assets/pizza.jpg', title: 'Paneer Tikka Rectangle Pizza', category: 'Pizzas', likes: '315' },
  { src: './assets/fried-chicken-bucket.jpg', title: 'Crispy Broast Halal Chicken Bucket', category: 'Fried Chicken', likes: '620' },
  { src: './assets/mojito-blue-lagoon.jpg', title: 'Blue Lagoon Cosmic Cooler', category: 'Mojitos', likes: '330' },
  { src: './assets/shake-oreo.jpg', title: 'Oreo Overload Thick Shake with Cream', category: 'Milkshakes', likes: '495' },
  { src: './assets/coffee-filter.jpg', title: 'South Indian Filter Coffee in Brass Dabarah', category: 'Beverages', likes: '380' }
];

window.SHOP_CONFIG = SHOP_CONFIG;
window.OFFICIAL_BOARD_COLUMNS = OFFICIAL_BOARD_COLUMNS;
window.CATEGORIES = CATEGORIES;
window.PRODUCTS = PRODUCTS;
window.OFFERS = OFFERS;
window.TESTIMONIALS = TESTIMONIALS;
window.GALLERY_PHOTOS = GALLERY_PHOTOS;
