// Centralized Product Catalog for WAFFLE ORBIT
// All prices in INR. Derived from official menu & shop offerings.

export const CATEGORIES = [
  { id: 'all', name: 'All Specialties', name_ta: 'அனைத்து உணவுகள்', name_hi: 'सभी व्यंजन', icon: 'Sparkles' },
  { id: 'waffles', name: 'Belgian Waffles', name_ta: 'பெல்ஜியன் வாஃபிள்ஸ்', name_hi: 'बेल्जियन वैफल्स', icon: 'Layers' },
  { id: 'pancakes', name: 'Mini Pancakes', name_ta: 'மினி பான்கேக்ஸ்', name_hi: 'मिनी पैनकेक्स', icon: 'CircleDot' },
  { id: 'ufo-burgers', name: 'UFO Burgers', name_ta: 'யுஎஃப்ஓ பர்கர்கள்', name_hi: 'यूएफओ बर्गर', icon: 'Disc' },
  { id: 'pizza', name: 'Rectangle Pizza', name_ta: 'செவ்வக பீட்சா', name_hi: 'रेक्टैंगल पिज़्ज़ा', icon: 'Pizza' },
  { id: 'fried-chicken', name: 'Fried Chicken', name_ta: 'ஃபிரைடு சிக்கன்', name_hi: 'फ्राइड चिकन', icon: 'Flame' },
  { id: 'sandwiches', name: 'Sandwiches', name_ta: 'சாண்ட்விச்கள்', name_hi: 'सैंडविच', icon: 'Square' },
  { id: 'mojitos', name: 'Mojitos', name_ta: 'மொஜித்தோஸ்', name_hi: 'मोहितो', icon: 'GlassWater' },
  { id: 'milkshakes', name: 'Thick Milkshakes', name_ta: 'மில்க்ஷேக்குகள்', name_hi: 'मिल्कशेक', icon: 'Coffee' },
  { id: 'coffee', name: 'Tea & Coffee', name_ta: 'டீ & காபி', name_hi: 'चाय और कॉफ़ी', icon: 'CupSoda' },
  { id: 'pasta-fries', name: 'Pasta & Fries', name_ta: 'பாஸ்தா & ஃப்ரைஸ்', name_hi: 'पास्ता और फ्राइज', icon: 'UtensilsCrossed' }
];

export const PRODUCTS = [
  // WAFFLES
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
    image: '/assets/wa1.jpeg',
    shortDescription: 'Signature activated charcoal dark waffle topped with rich vanilla bean gelato, chocolate shavings & maraschino cherry.',
    description: 'A visual and culinary spectacle. Freshly ironed crisp Belgian charcoal waffle with deep pockets, topped with velvety Madagascan vanilla gelato, shaved Belgian dark chocolate, and a glistening red cherry.',
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
    image: '/assets/wa2.jpeg',
    shortDescription: 'Double golden honeycomb waffle discs layered with fresh strawberries, blueberries, maple drizzle and two scoops of vanilla.',
    description: 'Crispy on the outside, fluffy inside. Two artisanal golden waffles crowned with sweet hand-sliced hill strawberries, blueberries, golden maple nectar, accompanied by two chilled vanilla scoops.',
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
    image: '/assets/wa3.jpeg',
    shortDescription: 'Warm Belgian waffle sandwich overflowing with authentic Nutella spread and crunchy roasted Turkish hazelnuts.',
    description: 'An indulgent chocoholic dream. Warm, fresh waffle sandwich loaded with generous layers of molten Nutella and a copious sprinkle of slow-roasted chopped hazelnuts that deliver the ultimate crunch in every bite.',
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
    image: '/assets/wa4.jpeg',
    shortDescription: 'Orbital celestial blue waffle sandwich stuffed with sweetened cream cheese and plump dark blueberries.',
    description: 'Inspired by the deep cosmos. A soft, vibrant teal-blue waffle sandwich infused with vanilla, stuffed with silky cream cheese frosting and ringed with fresh juicy blueberries.',
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
    image: '/assets/wa5.jpeg',
    shortDescription: 'Dark chocolate waffle wedges drowned in Belgian dark sauce, milk chocolate ganache and melted white chocolate cascade.',
    description: 'Three distinct chocolate profiles unite in harmony. Decadent cocoa-infused waffle triangles bathed in dark chocolate sauce, silken milk chocolate and warm creamy white chocolate drizzle.',
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
    image: '/assets/red.jpg',
    shortDescription: 'Vibrant crimson waffle heart served with sweet white chocolate glaze, toasted walnuts, and fresh raspberries.',
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
    image: '/assets/wa6.jpeg',
    shortDescription: 'Crisp waffle bar slathered in warm creamy peanut butter and topped with roasted split peanuts.',
    description: 'Rich, savory-sweet delight. Handcrafted waffle bar packed with protein-rich peanut butter and golden roasted peanuts for the ultimate snack.',
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
    image: '/assets/5.jpg',
    shortDescription: 'Royal dessert waffle layered with milk chocolate, white sauce, raspberries, blackberries and finely ground Iranian pistachios.',
    description: 'A gourmet masterpiece fit for celebrations. Fluffy waffle submerged in cascading chocolate and white cream, decorated with forest berries and vibrant crushed green pistachios.',
    customizations: [
      { name: 'Extra Pistachio Dust', price: 35 },
      { name: 'Double Berries', price: 40 }
    ]
  },

  // MINI PANCAKES
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
    image: '/assets/mini-pancakes-chocolate.jpg',
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
    image: '/assets/mini-pancakes-nutella.jpg',
    shortDescription: '8 warm mini pancakes layered with genuine Nutella spread and caramelized banana slices.',
    description: 'Golden mini pancakes combined with the timeless pair of warm Nutella and freshly sliced sweet bananas.',
    customizations: [
      { name: 'Roasted Almonds', price: 25 },
      { name: 'Whipped Cream', price: 25 }
    ]
  },

  // UFO BURGERS (Official Signature from Menu Board)
  {
    id: 'ufo-veg-burger',
    name: 'Veg UFO Burger',
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
    image: '/assets/ufo-veg-burger.jpg',
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
    name: 'Paneer UFO Burger',
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
    image: '/assets/ufo-paneer-burger.jpg',
    shortDescription: 'Sealed flying saucer burger with marinated tandoori paneer steak, mint mayo and crunchy onions.',
    description: 'Thick succulent slab of tandoori-marinated paneer encased in our signature sealed UFO bun with melted cheese, bell peppers, and signature house dressing.',
    customizations: [
      { name: 'Double Cheese Melt', price: 30 },
      { name: 'Jalapeno Kick', price: 20 }
    ]
  },
  {
    id: 'ufo-chicken-burger',
    name: 'Chicken UFO Burger',
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
    image: '/assets/ufo-chicken-burger.jpg',
    shortDescription: 'Signature UFO pressed burger filled with tender seasoned chicken breast patty, chipotle sauce and melted cheddar.',
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
    image: '/assets/ufo-spicy-burger.jpg',
    shortDescription: 'Fiery marinated fried chicken fillet with ghost pepper sauce and crunchy slaw sealed in a UFO bun.',
    description: 'Crispy fried spicy chicken tossed in red hot chili dust, sealed in our hot pressed UFO bun with creamy coleslaw to balance the intense heat.',
    customizations: [
      { name: 'Cooling Garlic Mayo', price: 20 },
      { name: 'Extra Cheese', price: 25 }
    ]
  },
  {
    id: 'ufo-cheese-burger',
    name: 'Cheese Burst UFO Burger',
    name_ta: 'சீஸ் பர்ஸ்ட் யுஎஃப்ஓ பர்கர்',
    name_hi: 'चीज़ बर्स्ट यूएफओ बर्गर',
    category: 'ufo-burgers',
    price: 135,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 95,
    isFeatured: false,
    isSignature: false,
    image: '/assets/ufo-cheese-burger.jpg',
    shortDescription: 'Triple-layer mozzarella and cheddar explosion inside a toasted flying-saucer bun.',
    description: 'For pure cheese lovers. A gooey molten core of mozzarella, cheddar, and processed cheese with Italian herbs, trapped in our crimped UFO bun.',
    customizations: [
      { name: 'Add Corn & Jalapenos', price: 25 }
    ]
  },

  // RECTANGLE PIZZA (Signature Menu Item)
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
    image: '/assets/pizza.jpg',
    shortDescription: 'Artisanal rectangular hand-stretched crust topped with clay-oven paneer cubes, red onions, mushrooms and mozzarella.',
    description: 'Our unique rectangular shape gives more crispy edge-to-crust ratio! Loaded with marinara, 100% dairy mozzarella, tandoori-spiced paneer tikka, button mushrooms and sliced red onions.',
    customizations: [
      { name: 'Cheese Burst Crust', price: 50 },
      { name: 'Extra Paneer', price: 40 },
      { name: 'Black Olives & Jalapenos', price: 30 }
    ]
  },
  {
    id: 'pizza-chicken-bbq',
    name: 'Smoky BBQ Chicken Rectangle Pizza',
    name_ta: 'ஸ்மோக்கி பார்பிக்யூ சிக்கன் செவ்வக பீட்சா',
    name_hi: 'स्मोकी बारबेक्यू चिकन रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 280,
    isVeg: false,
    isHalal: true,
    rating: 5.0,
    reviewsCount: 220,
    isFeatured: true,
    isSignature: true,
    image: '/assets/rectangle-pizza-bbq.jpg',
    shortDescription: 'Wood-fired rectangle crust with smoky BBQ glazed shredded chicken, caramelized onions and mozzarella.',
    description: 'Smothered in house smoky hickory barbecue sauce, premium mozzarella, tender grilled chicken chunks, sweet caramelized red onions, and fresh herb garnish on rectangular stone-baked sourdough.',
    customizations: [
      { name: 'Cheese Burst Base', price: 60 },
      { name: 'Extra BBQ Chicken', price: 50 }
    ]
  },
  {
    id: 'pizza-margherita',
    name: 'Classic Margherita Rectangle Pizza',
    name_ta: 'கிளாசிக் மார்கரிட்டா செவ்வக பீட்சா',
    name_hi: 'क्लासिक मार्गेरीटा रेक्टैंगल पिज़्ज़ा',
    category: 'pizza',
    price: 190,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 88,
    isFeatured: false,
    isSignature: false,
    image: '/assets/rectangle-pizza-margherita.jpg',
    shortDescription: 'Italian plum tomato sauce, fresh mozzarella cheese and sweet basil leaves on rectangular crispy crust.',
    description: 'Simplicity elevated. San Marzano style tomato puree, melted whole milk mozzarella, virgin olive oil drizzle and fresh basil on crisp Roman-style rectangular dough.',
    customizations: [
      { name: 'Double Mozzarella', price: 45 }
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
    image: '/assets/rectangle-pizza-periperi.jpg',
    shortDescription: 'Zesty African bird’s eye chili marinated chicken with bell peppers, sweet corn and stretchy mozzarella.',
    description: 'Spicy, tangy and vibrant! Diced chicken tossed in citrusy peri-peri spices, roasted bell peppers, crunchy golden sweet corn and mozzarella.',
    customizations: [
      { name: 'Cheese Burst Crust', price: 60 },
      { name: 'Extra Peri Peri Mayo Drizzle', price: 25 }
    ]
  },

  // FRIED CHICKEN (Official Brand Bucket)
  {
    id: 'fried-broast-chicken',
    name: 'Crispy Broast Chicken (4 Pcs Bucket)',
    name_ta: 'மொருமொருப்பான ப்ரோஸ்ட் சிக்கன் (4 துண்டுகள் பக்கெட்)',
    name_hi: 'क्रिस्पी ब्रोस्ट चिकन (4 पीस बकेट)',
    category: 'fried-chicken',
    price: 299,
    isVeg: false,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 260,
    isFeatured: true,
    isSignature: true,
    image: '/assets/fried-chicken-bucket.jpg',
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
    name: 'Crispy Chicken Strips (5 Pcs)',
    name_ta: 'ஃபிரைடு சிக்கன் ஸ்ட்ரிப்ஸ் (5 துண்டுகள்)',
    name_hi: 'क्रिस्पी चिकन स्ट्रिप्स (5 पीस)',
    category: 'fried-chicken',
    price: 180,
    isVeg: false,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 140,
    isFeatured: false,
    isSignature: false,
    image: '/assets/fried-chicken-strips.jpg',
    shortDescription: 'Tender 100% chicken breast fillets crumbed and flash fried to golden perfection with honey mustard.',
    description: 'Boneless tender chicken strips, perfectly seasoned and fried golden. Served hot with our signature tangy dipping sauce.',
    customizations: [
      { name: 'Garlic Mayo Dip', price: 20 },
      { name: 'Peri Peri Shake Seasoning', price: 20 }
    ]
  },
  {
    id: 'fried-chicken-popcorn',
    name: 'Crunchy Chicken Popcorn',
    name_ta: 'க்ரஞ்சி சிக்கன் பாப்கார்ன்',
    name_hi: 'क्रंची चिकन पॉपकॉर्न',
    category: 'fried-chicken',
    price: 140,
    isVeg: false,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 175,
    isFeatured: false,
    isSignature: false,
    image: '/assets/fried-chicken-popcorn.jpg',
    shortDescription: 'Addictive bite-sized crispy nuggets of spiced chicken breast tossed in savory seasoning.',
    description: 'Perfect for snacking while chilling with friends. High-protein, ultra-crispy chicken poppers with secret seasoning.',
    customizations: [
      { name: 'Cheesy Jalapeno Dip', price: 25 }
    ]
  },

  // SANDWICHES
  {
    id: 'sandwich-tandoori-paneer',
    name: 'Tandoori Paneer Grilled Sandwich',
    name_ta: 'தந்தூரி பனீர் கிரில்டு சாண்ட்விச்',
    name_hi: 'तंदूरी पनीर ग्रिल्ड सैंडविच',
    category: 'sandwiches',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 92,
    isFeatured: false,
    isSignature: false,
    image: '/assets/sandwich-tandoori-paneer.jpg',
    shortDescription: 'Three-layer grilled jumbo sandwich loaded with charred tandoori paneer, capsicum and mint chutney.',
    description: 'Crisp golden grill marks on buttery bread encasing spiced marinated paneer cubes, chopped capsicum, onions, and melted cheese.',
    customizations: [
      { name: 'Extra Cheese Slice', price: 20 },
      { name: 'Add French Fries', price: 50 }
    ]
  },
  {
    id: 'sandwich-corn-cheese',
    name: 'Corn & Cheese Golden Sandwich',
    name_ta: 'கார்ன் & சீஸ் கோல்டன் சாண்ட்விச்',
    name_hi: 'कॉर्न और चीज़ गोल्डन सैंडविच',
    category: 'sandwiches',
    price: 120,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 78,
    isFeatured: false,
    isSignature: false,
    image: '/assets/sandwich-corn-cheese.jpg',
    shortDescription: 'Sweet American corn kernels melted with mozzarella and seasoned with black pepper.',
    description: 'A comforting cafe classic. Juicy sweet corn smothered in creamy cheese spread and Italian herbs, grilled golden brown.',
    customizations: [
      { name: 'Add Green Chilies', price: 10 },
      { name: 'Extra Cheese', price: 20 }
    ]
  },

  // MOJITOS (Official From Menu Board)
  {
    id: 'mojito-blue-lagoon',
    name: 'Blue Lagoon Cosmic Mojito',
    name_ta: 'ப்ளூ லகூன் காஸ்மிக் மொஜித்தோ',
    name_hi: 'ब्लू लैगून कॉस्मिक मोहितो',
    category: 'mojitos',
    price: 110,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 165,
    isFeatured: true,
    isSignature: true,
    image: '/assets/mojito-blue-lagoon.jpg',
    shortDescription: 'Electric blue curacao fizz with freshly muddled garden mint, lime wedges and crushed ice.',
    description: 'Vibrant, tropical, and endlessly refreshing. Sparkling soda infused with blue curacao syrup, freshly slapped mint sprigs, and sour lime juice over crystalline ice.',
    customizations: [
      { name: 'Extra Mint & Lime', price: 15 },
      { name: 'Double Fizz Burst', price: 20 }
    ]
  },
  {
    id: 'mojito-strawberry',
    name: 'Wild Strawberry Mojito',
    name_ta: 'காட்டு ஸ்ட்ராபெரி மொஜித்தோ',
    name_hi: 'वाइल्ड स्ट्रॉबेरी मोहितो',
    category: 'mojitos',
    price: 120,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 112,
    isFeatured: true,
    isSignature: false,
    image: '/assets/mojito-strawberry.jpg',
    shortDescription: 'Muddled strawberries, fragrant mint leaves, fresh lime and chilled sparkling soda.',
    description: 'Sweet crushed strawberries mixed with tart lime juice and cooling mint leaves, topped with bubbly club soda.',
    customizations: [
      { name: 'Extra Strawberry Crush', price: 20 }
    ]
  },
  {
    id: 'mojito-mint-classic',
    name: 'Virgin Mint Lime Mojito',
    name_ta: 'வர்ஜின் புதினா எலுமிச்சை மொஜித்தோ',
    name_hi: 'वर्जिन मिंट लेमन मोहितो',
    category: 'mojitos',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 130,
    isFeatured: false,
    isSignature: false,
    image: '/assets/mojito-mint-classic.jpg',
    shortDescription: 'The ultimate refresher with freshly crushed mint, zesty lime slices and sparkling chilled soda.',
    description: 'Traditional Cuban-style virgin cooler made with hand-crushed fresh garden mint, raw cane sweetness, and tangy lime juice.',
    customizations: [
      { name: 'Extra Chilled', price: 10 }
    ]
  },

  // MILKSHAKES (Official From Menu Board)
  {
    id: 'shake-oreo-overload',
    name: 'Oreo Overload Thick Shake',
    name_ta: 'ஓரியோ ஓவர்லோட் திக் ஷேக்',
    name_hi: 'ओरियो ओवरलोड थिक शेक',
    category: 'milkshakes',
    price: 140,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 210,
    isFeatured: true,
    isSignature: true,
    image: '/assets/shake-oreo.jpg',
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
    name: 'KitKat Break Thick Shake',
    name_ta: 'கிட்காட் பிரேக் திக் ஷேக்',
    name_hi: 'किटकेट ब्रेक थिक शेक',
    category: 'milkshakes',
    price: 150,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 155,
    isFeatured: false,
    isSignature: false,
    image: '/assets/shake-kitkat.jpg',
    shortDescription: 'Crispy wafer KitKat fingers blended into rich chocolate milk with chocolate stick garnish.',
    description: 'Snap into satisfaction! Crispy chocolate-coated wafer bars crushed into chilled rich milk with chocolate ganache.',
    customizations: [
      { name: 'Extra KitKat Finger', price: 30 }
    ]
  },
  {
    id: 'shake-strawberry-thick',
    name: 'Creamy Strawberry Thick Shake',
    name_ta: 'கிரீமி ஸ்ட்ராபெரி திக் ஷேக்',
    name_hi: 'क्रीमी स्ट्रॉबेरी थिक शेक',
    category: 'milkshakes',
    price: 130,
    isVeg: true,
    isHalal: true,
    rating: 4.7,
    reviewsCount: 94,
    isFeatured: false,
    isSignature: false,
    image: '/assets/shake-strawberry.jpg',
    shortDescription: 'Fresh strawberry puree churned with thick cream, vanilla milk and whipped topping.',
    description: 'Velvety pink perfection prepared with luscious strawberry pulp, churned thick and garnished with white chocolate drops.',
    customizations: [
      { name: 'Whipped Cream', price: 25 }
    ]
  },

  // COFFEE & TEA
  {
    id: 'coffee-south-indian-filter',
    name: 'South Indian Filter Coffee',
    name_ta: 'தென்னிந்திய பில்டர் காபி',
    name_hi: 'साउथ इंडियन फ़िल्टर कॉफ़ी',
    category: 'coffee',
    price: 45,
    isVeg: true,
    isHalal: true,
    rating: 4.9,
    reviewsCount: 185,
    isFeatured: false,
    isSignature: false,
    image: '/assets/coffee-filter.jpg',
    shortDescription: 'Traditional Kumbakonam style aromatic chicory-blend decoction frothed with fresh milk.',
    description: 'Brewed with traditional brass filter decoction, poured back and forth from dabarah and tumbler for that legendary frothy aromatic sip.',
    customizations: [
      { name: 'Extra Strong Decoction', price: 10 },
      { name: 'Jaggery Sweetened', price: 10 }
    ]
  },
  {
    id: 'coffee-chilled-cold',
    name: 'Orbit Chilled Cold Coffee',
    name_ta: 'ஆர்பிட் சில்லென்ற கோல்ட் காபி',
    name_hi: 'ऑर्बिट चिल्ड कोल्ड कॉफ़ी',
    category: 'coffee',
    price: 99,
    isVeg: true,
    isHalal: true,
    rating: 4.8,
    reviewsCount: 140,
    isFeatured: true,
    isSignature: false,
    image: '/assets/coffee-cold.jpg',
    shortDescription: 'Espresso shot whipped with chilled milk, sugar and drizzled with Hershey’s chocolate syrup.',
    description: 'Rich roasted espresso blended until creamy and frothy with chilled full-cream milk, served over ice cubes with cocoa dust.',
    customizations: [
      { name: 'Vanilla Ice Cream Float', price: 35 },
      { name: 'Caramel Syrup Shot', price: 20 }
    ]
  },

  // PASTA & FRIES
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
    image: '/assets/pasta-creamy-alfredo.jpg',
    shortDescription: 'Fettuccine / penne in velvety garlic butter, parmesan cheese cream sauce with broccoli & mushrooms.',
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
    image: '/assets/fries-peri-peri.jpg',
    shortDescription: 'Golden crisp skin-on potato fries tossed in fiery African peri-peri spice dust.',
    description: 'Hot, crunchy, and packed with punchy spice. Served in our wire fry basket with cheesy dip.',
    customizations: [
      { name: 'Cheesy Melt Topping', price: 35 },
      { name: 'Garlic Mayo Dip', price: 20 }
    ]
  }
];
