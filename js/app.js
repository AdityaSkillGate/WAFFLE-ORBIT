/**
 * WAFFLE ORBIT — Luxury Food Experience App
 * Pure Vanilla JavaScript + Tailwind CSS
 * Designed & Developed by Aditya Skill Gate IT Solution | Sankarankovil
 * Website: https://adityaskillgate.com/
 */

// Application State
const state = {
  activePage: 'home',
  language: 'en',
  category: 'all',
  searchQuery: '',
  dietaryFilter: 'all',
  sortBy: 'popular',
  cart: JSON.parse(localStorage.getItem('waffle_orbit_cart') || '[]'),
  appliedCoupon: null,
  activeProductModal: null,
  modalSelectedAddons: [],
  modalQuantity: 1,
  currentHeroVideo: 'assets/gemini_generated_video_a8045179.mp4',
  isVideoMuted: false,
  isVideoPlaying: true,
  selectedBoardColumn: 'all'
};

// Comprehensive Translations Dictionary for English, Tamil & Hindi
const TRANSLATIONS = {
  en: {
    top_shop_info: "WAFFLE ORBIT • Kalugumalai Road, Sankarankovil • Open 10 AM – 10 PM • Call: +91 96008 75941",
    nav_home: "Home",
    nav_menu: "Menu (50+)",
    nav_offers: "Offers",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_contact: "Visit Us",
    hero_badge: "★ 100% Halal Certified • Sankarankovil's #1 Waffle & UFO Hub",
    hero_title_1: "Taste Beyond",
    hero_title_2: "The Usual!",
    hero_tagline: "\"Orbit of Taste... Beyond the Usual!\"",
    hero_desc: "Freshly ironed Belgian honeycomb waffles, our signature zero-leak sealed UFO flying-saucer burgers, stone-baked rectangle pizzas, and crunchy broasted chicken. Made fresh to order with love!",
    btn_explore_menu: "Explore Menu (50+ Items)",
    btn_whatsapp_order: "Order on WhatsApp",
    stat_rating: "4.9 Customer Rating",
    stat_hours: "10:00 AM – 10:00 PM",
    stat_delivery: "Take Away & Home Delivery",
    video_reel_label: "Cinematic Reel:",
    cat_sec_tag: "Sip • Bite • Relax • Repeat",
    cat_sec_title: "Explore by Category",
    sig_badge: "Sankarankovil's Most Loved",
    sig_title: "Signature Creations",
    sig_subtitle: "Made fresh to order with authentic Belgian batter, real butter, and secret seasoning.",
    view_all_menu: "View Complete Menu (50+ Items) →",
    ufo_badge: "The UFO Burger Innovation",
    ufo_title: "Say Goodbye to Messy Dripping Burgers: 100% Sealed Flying Saucers!",
    ufo_desc: "Tired of burgers dripping sauce and cheese all over your hands? At WAFFLE ORBIT, our special high-heat crimp press seals the burger bun edges into a flying saucer. Every single bite stays 100% leak-proof, hot, crispy, and delicious!",
    ufo_f1_t: "Zero Leaks",
    ufo_f1_d: "Eat cleanly anywhere without clothes stains",
    ufo_f2_t: "Crispy Crimped Crust",
    ufo_f2_d: "Toasted crimped edges with juicy molten core",
    ufo_f3_t: "100% Halal Chicken",
    ufo_f3_d: "Also available in Paneer & Cheese variants",
    ufo_btn: "Order a UFO Burger Now (From ₹110)",
    offers_sec_tag: "Limited Time Promotions",
    offers_sec_title: "Today's Best Deals",
    view_all_offers: "View All Offers →",
    reviews_sec_tag: "Verified Customer Reviews",
    reviews_sec_title: "Loved by Sankarankovil",
    reviews_sec_sub: "Over 1,000+ happy food lovers visited us on Kalugumalai Road",
    visit_sec_badge: "Visit Our Shop",
    visit_sec_title: "Find Us in Sankarankovil",
    btn_get_directions: "Get Google Maps Directions",
    btn_call_shop: "Call Shop",
    cart_title: "Your Feast Tray",
    cart_empty: "Your feast tray is empty! Add some delicious waffles or UFO burgers.",
    cart_subtotal: "Subtotal",
    cart_discount: "Coupon Discount",
    cart_total: "Estimated Total",
    btn_checkout_whatsapp: "Send Order via WhatsApp",
    search_placeholder: "Search waffles, UFO burgers, pizzas, milkshakes...",
    filter_all: "All",
    filter_veg: "Pure Veg",
    filter_non_veg: "Non-Veg",
    btn_add_to_cart: "Add to Cart",
    btn_added: "Added ✓",
    social_connect: "Connect With Us:"
  },
  ta: {
    top_shop_info: "வாஃபிள் ஆர்பிட் • கழுகுமலை ரோடு, சங்கரன்கோவில் • காலை 10 – இரவு 10 • +91 96008 75941",
    nav_home: "முகப்பு",
    nav_menu: "உணவுப் பட்டியல்",
    nav_offers: "சலுகைகள்",
    nav_about: "எங்களைப் பற்றி",
    nav_gallery: "புகைப்படங்கள்",
    nav_contact: "நேரில் வர",
    hero_badge: "★ 100% ஹலால் சான்றளிக்கப்பட்டது • சங்கரன்கோவிலின் #1 வாஃபிள் ஹப்",
    hero_title_1: "வழக்கத்திற்கு அப்பாற்பட்ட",
    hero_title_2: "சுவையின் சங்கமம்!",
    hero_tagline: "\"சுவையின் சுற்றுப்பாதை... வழக்கத்திற்கு அப்பால்!\"",
    hero_desc: "சூடான மொறுமொறுப்பான பெல்ஜியன் வாஃபிள்ஸ், சாஸ் சிந்தாத யுஎஃப்ஓ பறக்கும் தட்டு பர்கர்கள், செவ்வக பீட்சாக்கள் மற்றும் சுவையான ப்ரோஸ்ட் சிக்கன். 100% ஹலால் & சுத்தமான முறையில் தயாரிக்கப்படுகிறது!",
    btn_explore_menu: "மெனு பார்க்க (50+ உணவுகள்)",
    btn_whatsapp_order: "வாட்ஸ்அப் ஆர்டர்",
    stat_rating: "4.9 வாடிக்கையாளர் மதிப்பீடு",
    stat_hours: "காலை 10:00 – இரவு 10:00",
    stat_delivery: "பார்சல் & ஹோம் டெலிவரி",
    video_reel_label: "வீடியோ பதிவு:",
    cat_sec_tag: "பருகுக • சுவைக்க • மகிழ்க",
    cat_sec_title: "வகைகள் வாரியாக ஆராய்க",
    sig_badge: "சங்கரன்கோவிலின் விருப்ப உணவுகள்",
    sig_title: "முக்கிய ஸ்பெஷல் உணவுகள்",
    sig_subtitle: "அசல் பெல்ஜியன் மாவு, தூய வெண்ணெய் மற்றும் மசாலாக்களுடன் புதிதாக சுடப்படுகிறது.",
    view_all_menu: "முழு மெனு பார்க்க (50+ உணவுகள்) →",
    ufo_badge: "யுஎஃப்ஓ பர்கர் புதுமை",
    ufo_title: "சாஸ் சிந்தும் பர்கர்களுக்கு விடை கொடுங்கள்: 100% சீல் செய்யப்பட்ட பறக்கும் தட்டுகள்!",
    ufo_desc: "பர்கர் சாப்பிடும் போது சாஸ் கைகளில் சிந்துகிறதா? வாஃபிள் ஆர்பிட்டில் எங்களின் பிரத்யேக இயந்திரம் பர்கர் ரொட்டியின் ஓரங்களை முழுமையாக சீல் செய்கிறது. சாஸ் சிறிதும் சிந்தாமல் மொறுமொறுப்பாக சுவைக்கலாம்!",
    ufo_f1_t: "சிந்தாத வடிவமைப்பு",
    ufo_f1_d: "துணிகளில் கறை படியாமல் எங்கும் சாப்பிடலாம்",
    ufo_f2_t: "மொறுமொறுப்பான விளிம்புகள்",
    ufo_f2_d: "மொருமொருப்பான விளிம்புகளுடன் சூடான சீஸ் & சிக்கன்",
    ufo_f3_t: "100% ஹலால் சிக்கன்",
    ufo_f3_d: "பனீர் மற்றும் சீஸ் வகைகளிலும் கிடைக்கிறது",
    ufo_btn: "இப்போதே யுஎஃப்ஓ பர்கர் ஆர்டர் செய்ய (₹110 முதல்)",
    offers_sec_tag: "வரையறுக்கப்பட்ட நேர சலுகைகள்",
    offers_sec_title: "இன்றைய சிறந்த சலுகைகள்",
    view_all_offers: "அனைத்து சலுகைகளையும் பார்க்க →",
    reviews_sec_tag: "உண்மையான வாடிக்கையாளர் விமர்சனங்கள்",
    reviews_sec_title: "சங்கரன்கோவில் மக்களின் பேரன்பு",
    reviews_sec_sub: "1,000+ திருப்திகரமான வாடிக்கையாளர்கள் எங்கள் கடைக்கு வருகை தந்துள்ளனர்",
    visit_sec_badge: "எங்கள் கடைக்கு வருகை தருக",
    visit_sec_title: "சங்கரன்கோவிலில் எங்களை கண்டறிய",
    btn_get_directions: "கூகுள் மேப் வழிகாட்டல்",
    btn_call_shop: "கடைக்கு அழைக்க",
    cart_title: "உங்கள் உணவுப் பட்டியல்",
    cart_empty: "உங்கள் தட்டில் இன்னும் உணவுகள் சேர்க்கப்படவில்லை!",
    cart_subtotal: "கூட்டுத்தொகை",
    cart_discount: "தள்ளுபடி",
    cart_total: "மொத்தத் தொகை",
    btn_checkout_whatsapp: "வாட்ஸ்அப் மூலம் ஆர்டர் அனுப்பவும்",
    search_placeholder: "வாஃபிள்ஸ், பர்கர்கள், பீட்சா தேட...",
    filter_all: "அனைத்தும்",
    filter_veg: "சைவம் மட்டும்",
    filter_non_veg: "அசைவம்",
    btn_add_to_cart: "சேர்க்கவும்",
    btn_added: "சேர்க்கப்பட்டது ✓",
    social_connect: "சமூக வலைத்தளங்கள்:"
  },
  hi: {
    top_shop_info: "वैफल ऑर्बिट • कलुगुमलाई रोड, शंकरनकोविल • सुबह 10 – रात 10 • +91 96008 75941",
    nav_home: "होम",
    nav_menu: "मेनू (50+)",
    nav_offers: "ऑफ़र्स",
    nav_about: "हमारे बारे में",
    nav_gallery: "गैलरी",
    nav_contact: "संपर्क करें",
    hero_badge: "★ 100% हलाल प्रमाणित • शंकरनकोविल का #1 वैफल हब",
    hero_title_1: "स्वाद जो हो",
    hero_title_2: "सबसे अनोखा!",
    hero_tagline: "\"स्वाद का ऑर्बिट... साधारण से परे!\"",
    hero_desc: "क्रिसपी बेल्जियन वैफल्स, लीक-प्रूफ सील्ड यूएफओ बर्गर, रेक्टैंगल पिज़्ज़ा और क्रिस्पी फ्राइड चिकन का लुत्फ़ उठाएं। 100% हलाल और ताज़ा बनाया गया!",
    btn_explore_menu: "मेनू देखें (50+ व्यंजन)",
    btn_whatsapp_order: "व्हाट्सएप ऑर्डर",
    stat_rating: "4.9 ग्राहक रेटिंग",
    stat_hours: "सुबह 10:00 – रात 10:00",
    stat_delivery: "टेकअवे और डिलीवरी",
    video_reel_label: "सिनेमैटिक रील:",
    cat_sec_tag: "सिप • बाइट • रिलैक्स",
    cat_sec_title: "श्रेणी अनुसार खोजें",
    sig_badge: "शंकरनकोविल की पसंद",
    sig_title: "सिग्नेचर क्रिएशन्स",
    sig_subtitle: "असली बेल्जियन बैटर और शुद्ध मक्खन के साथ ताज़ा बनाया गया।",
    view_all_menu: "पूरा मेनू देखें (50+) →",
    ufo_badge: "यूएफओ बर्गर इनोवेशन",
    ufo_title: "सॉस टपकने से छुटकारा: 100% सील्ड फ्लाइंग सॉसर बर्गर!",
    ufo_desc: "क्या बर्गर खाते समय सॉस हाथों पर गिरता है? वाफल ऑर्बिट में हमारी विशेष मशीन बन्स को सील कर देती है ताकि बिना किसी रिसाव के आप पूरा मज़ा ले सकें!",
    ufo_f1_t: "ज़ीरो लीकेज",
    ufo_f1_d: "बिना कपड़ों पर गिरे आराम से खाएं",
    ufo_f2_t: "क्रिस्पी टोस्टेड ब्रेड",
    ufo_f2_d: "क्रिस्पी किनारों के साथ रसीला चीज़ और पैटी",
    ufo_f3_t: "100% हलाल चिकन",
    ufo_f3_d: "पनीर और चीज़ में भी उपलब्ध",
    ufo_btn: "यूएफओ बर्गर अभी ऑर्डर करें (₹110 से)",
    offers_sec_tag: "लिमिटेड टाइम ऑफर्स",
    offers_sec_title: "आज के सर्वश्रेष्ठ ऑफ़र्स",
    view_all_offers: "सभी ऑफ़र्स देखें →",
    reviews_sec_tag: "सत्यापित ग्राहक समीक्षाएं",
    reviews_sec_title: "शंकरनकोविल का पसंदीदा",
    reviews_sec_sub: "1,000+ से अधिक खुश ग्राहक कलुगुमलाई रोड पर आए",
    visit_sec_badge: "दुकान पर पधारें",
    visit_sec_title: "शंकरनकोविल में हमें खोजें",
    btn_get_directions: "गूगल मैप्स दिशा-निर्देश",
    btn_call_shop: "कॉल करें",
    cart_title: "आपकी थाली",
    cart_empty: "आपकी ट्रे खाली है! स्वादिष्ट वैफल्स या बर्गर जोड़ें।",
    cart_subtotal: "उप-योग",
    cart_discount: "छूट",
    cart_total: "अनुमानित कुल",
    btn_checkout_whatsapp: "व्हाट्सएप पर ऑर्डर भेजें",
    search_placeholder: "वैफल, बर्गर, पिज़्ज़ा खोजें...",
    filter_all: "सभी",
    filter_veg: "शुद्ध शाकाहारी",
    filter_non_veg: "मांसाहारी",
    btn_add_to_cart: "जोड़ें",
    btn_added: "जुड़ गया ✓",
    social_connect: "सोशल मीडिया:"
  }
};

function t(key) {
  const lang = state.language;
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || key;
}

// Translate All Dynamic DOM Elements with data-i18n
function updatePageTranslations() {
  const lang = state.language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });
}

// Language Switcher Function
function setLanguage(lang) {
  state.language = lang;
  document.documentElement.lang = lang;
  
  // 1. Update text of all static data-i18n tags immediately
  updatePageTranslations();

  // 2. Re-render dynamic lists (categories, products, cards)
  renderCategories();
  renderOfficialBoard();
  renderHomeBestsellers();
  renderProducts();
  renderOffers();
  renderCartDrawer();

  // 3. Update language switcher pill buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-amber-500', 'text-black', 'font-black');
      btn.classList.remove('text-stone-400');
    } else {
      btn.classList.remove('bg-amber-500', 'text-black', 'font-black');
      btn.classList.add('text-stone-400');
    }
  });

  if (window.lucide) window.lucide.createIcons();
}

// Save Cart
function saveCart() {
  localStorage.setItem('waffle_orbit_cart', JSON.stringify(state.cart));
  updateCartBadge();
  renderCartDrawer();
}

// Update Cart Badge Counter
function updateCartBadge() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = totalItems;
    if (totalItems > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });
}

// Navigation Handler
function scrollToSection(sectionId) {
  state.activePage = sectionId;
  const cleanId = sectionId.startsWith('section-') ? sectionId : 'section-' + sectionId;
  const el = document.getElementById(cleanId);
  if (el) {
    const yOffset = -90; 
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  closeMobileMenu();
}

function navigateTo(sectionId) {
  scrollToSection(sectionId);
}

// Video Controls & Switcher
function adaptHeroVideoFrame(videoPath) {
  const video = document.getElementById('hero-main-video');
  const frame = document.getElementById('hero-video-frame');
  if (!video || !frame) return;

  const isOfficialBoard = (videoPath && videoPath.includes('official_board')) || 
                          (video.src && video.src.includes('official_board'));

  if (isOfficialBoard) {
    // 3:2 exact aspect ratio for the official board: 100% visible, zero top/bottom cropping, zero black bars
    frame.style.aspectRatio = "1080 / 720";
    video.className = "w-full h-full object-contain bg-[#0C0604]";
  } else {
    // 16:9 widescreen for signature reels: edge-to-edge fill, zero top/bottom black bars
    frame.style.aspectRatio = "16 / 9";
    video.className = "w-full h-full object-cover";
  }
}

function switchHeroVideo(videoPath, title) {
  const video = document.getElementById('hero-main-video');
  const titleBadge = document.getElementById('hero-video-active-title');
  if (!video) return;

  adaptHeroVideoFrame(videoPath);

  video.src = videoPath;
  video.currentTime = 0;
  video.muted = state.isVideoMuted; // Keep unmuted state
  video.play().catch(e => console.log('Autoplay handled', e));
  state.currentHeroVideo = videoPath;
  state.isVideoPlaying = true;
  updatePlayButtonIcon();
  updateSoundButtonIcon();

  if (titleBadge) {
    titleBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span><span>${title || "1080P HD • Deconstructed Reel"}</span>`;
  }

  // Update video selector button styles
  document.querySelectorAll('.hero-video-tab').forEach(tab => {
    if (tab.dataset.path === videoPath) {
      tab.classList.add('bg-amber-500', 'text-black', 'font-black', 'shadow-lg', 'shadow-amber-500/40');
      tab.classList.remove('bg-white/10', 'text-white');
    } else {
      tab.classList.remove('bg-amber-500', 'text-black', 'font-black', 'shadow-lg', 'shadow-amber-500/40');
      tab.classList.add('bg-white/10', 'text-white');
    }
  });
}

function toggleVideoPlay() {
  const video = document.getElementById('hero-main-video');
  if (!video) return;
  if (video.paused) {
    video.play();
    state.isVideoPlaying = true;
  } else {
    video.pause();
    state.isVideoPlaying = false;
  }
  updatePlayButtonIcon();
}

function updatePlayButtonIcon() {
  const playBtn = document.getElementById('hero-video-play-btn');
  if (!playBtn) return;
  playBtn.innerHTML = state.isVideoPlaying 
    ? '<i data-lucide="pause" class="w-4 h-4"></i>' 
    : '<i data-lucide="play" class="w-4 h-4"></i>';
  if (window.lucide) window.lucide.createIcons();
}

function toggleVideoAudio() {
  const video = document.getElementById('hero-main-video');
  if (!video) return;
  video.muted = !video.muted;
  state.isVideoMuted = video.muted;
  if (!video.muted && video.paused) {
    video.play().catch(e => console.log('Audio unmuted play:', e));
    state.isVideoPlaying = true;
    updatePlayButtonIcon();
  }
  updateSoundButtonIcon();
}

// Alias for toggleVideoMute
function toggleVideoMute() {
  toggleVideoAudio();
}

function updateSoundButtonIcon() {
  const soundBtn = document.getElementById('hero-video-sound-btn') || document.getElementById('hero-video-mute-btn');
  if (!soundBtn) return;
  
  if (state.isVideoMuted) {
    soundBtn.className = "p-2 rounded-full bg-black/75 backdrop-blur-md hover:bg-black text-stone-300 border border-white/20 transition-all hover:scale-105 shadow-md flex items-center gap-1.5 px-2.5 sm:px-3";
    soundBtn.innerHTML = `
      <i data-lucide="volume-x" class="w-4 h-4 text-red-400"></i>
      <span id="hero-sound-label" class="text-[10px] font-black uppercase text-stone-300">Muted</span>
    `;
    soundBtn.title = "Click to Unmute Sound";
  } else {
    soundBtn.className = "p-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black backdrop-blur-md hover:from-amber-400 hover:to-amber-300 border border-amber-300 transition-all hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center gap-1.5 px-2.5 sm:px-3";
    soundBtn.innerHTML = `
      <i data-lucide="volume-2" class="w-4 h-4 text-black animate-pulse"></i>
      <span id="hero-sound-label" class="text-[10px] font-black uppercase text-black">Unmuted</span>
    `;
    soundBtn.title = "Click to Mute Sound";
  }
  if (window.lucide) window.lucide.createIcons();
}

function initHeroVideoAudio() {
  const video = document.getElementById('hero-main-video');
  if (!video) return;

  // Adapt frame to current video (16:9 for signatures, 3:2 for official board)
  adaptHeroVideoFrame(state.currentHeroVideo);

  video.addEventListener('loadedmetadata', () => {
    adaptHeroVideoFrame(video.src);
  });

  // Disable browser-injected Picture-in-Picture button
  video.disablePictureInPicture = true;

  // Unmuted by default per user request
  video.muted = false;
  state.isVideoMuted = false;
  updateSoundButtonIcon();

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      state.isVideoPlaying = true;
      updatePlayButtonIcon();
      updateSoundButtonIcon();
    }).catch(error => {
      console.log('Unmuted autoplay deferred until user interaction by browser policy:', error);
      // Browser autoplay policy requires user gesture before playing audio
      video.muted = true;
      state.isVideoMuted = true;
      updateSoundButtonIcon();
      video.play().catch(e => console.log('Autoplay fallback:', e));

      const unmuteOnFirstGesture = () => {
        video.muted = false;
        state.isVideoMuted = false;
        updateSoundButtonIcon();
        ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
          document.removeEventListener(evt, unmuteOnFirstGesture);
        });
      };
      ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
        document.addEventListener(evt, unmuteOnFirstGesture, { once: true, passive: true });
      });
    });
  }
}

// Render Hero Video Tab Switcher
function renderHeroVideoTabs() {
  const container = document.getElementById('hero-video-tabs');
  if (!container) return;

  const videoOptions = [
    {
      title: "All Signatures — Waffle, UFO Burger, Pizza & Mojito",
      path: "assets/gemini_generated_video_a8045179.mp4",
      badge: "★ All Signatures (Waffle, Burger, Pizza, Mojito)"
    },
    {
      title: "Belgian Brioche Waffle Craft",
      path: "assets/gemini_generated_video_81dcad99.mp4",
      badge: "🧇 Waffle Craft"
    },
    {
      title: "UFO Flying Saucer Zero-Leak Burger",
      path: "assets/gemini_generated_video_41e23558.mp4",
      badge: "🛸 UFO Burger"
    },
    {
      title: "Official In-Store Menu Board Video",
      path: "assets/official_board_reel.mp4",
      badge: "📋 Official Shop Board"
    }
  ];

  container.innerHTML = videoOptions.map((opt) => `
    <button
      onclick="switchHeroVideo('${opt.path}', '${opt.title}')"
      data-path="${opt.path}"
      class="hero-video-tab px-3.5 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
        state.currentHeroVideo === opt.path 
          ? 'bg-amber-500 text-black font-black shadow-lg shadow-amber-500/40' 
          : 'bg-white/10 hover:bg-white/20 text-white font-medium border border-white/10'
      }"
    >
      <span>${opt.badge}</span>
    </button>
  `).join('');
}

// Render Categories Bar in Menu
function renderCategories() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const isTa = state.language === 'ta';
    const isHi = state.language === 'hi';
    const name = isTa && cat.name_ta ? cat.name_ta : (isHi && cat.name_hi ? cat.name_hi : cat.name);
    const isActive = state.category === cat.id;

    return `
      <button 
        onclick="setCategory('${cat.id}')"
        class="cat-btn px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all whitespace-nowrap flex items-center gap-2 ${
          isActive 
            ? 'active' 
            : 'bg-[#1C1009] text-stone-300 border-[#2E1C12] hover:border-amber-500/50 hover:text-white'
        }"
      >
        <i data-lucide="${cat.icon}" class="w-4 h-4 ${isActive ? 'text-black' : 'text-amber-400'}"></i>
        <span>${name}</span>
      </button>
    `;
  }).join('');
}

function setCategory(catId) {
  state.category = catId;
  renderCategories();
  renderProducts();
}

function setDietary(diet) {
  state.dietaryFilter = diet;
  document.querySelectorAll('.diet-btn').forEach(btn => {
    if (btn.dataset.diet === diet) {
      btn.classList.add('bg-amber-500', 'text-black', 'font-black');
      btn.classList.remove('bg-transparent', 'text-stone-300');
    } else {
      btn.classList.remove('bg-amber-500', 'text-black', 'font-black');
      btn.classList.add('bg-transparent', 'text-stone-300');
    }
  });
  renderProducts();
}

// Render Product Card
function createProductCardHTML(product) {
  const isTa = state.language === 'ta';
  const isHi = state.language === 'hi';
  const name = isTa && product.name_ta ? product.name_ta : (isHi && product.name_hi ? product.name_hi : product.name);
  const cartItem = state.cart.find(c => c.id === product.id);
  const qty = cartItem ? cartItem.quantity : 0;

  return `
    <div class="luxury-food-card group">
      <!-- Image Box -->
      <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#160D08] cursor-pointer" onclick="openProductModal('${product.id}')">
        <img 
          src="${product.image}" 
          alt="${name}" 
          loading="lazy"
          onerror="this.onerror=null; this.src='./assets/wa2.jpeg';"
          class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
          <div class="flex items-center gap-1.5">
            <div class="${product.isVeg ? 'veg-dot-box' : 'non-veg-dot-box'} shadow-md">
              <div class="${product.isVeg ? 'veg-dot' : 'non-veg-dot'}"></div>
            </div>

            ${product.isHalal ? `
              <span class="badge-halal-luxury backdrop-blur-sm">Halal</span>
            ` : ''}
          </div>

          ${product.isSignature ? `
            <span class="badge-signature-luxury">
              <i data-lucide="sparkles" class="w-2.5 h-2.5"></i>
              SIGNATURE
            </span>
          ` : ''}
        </div>

        <!-- Rating Floating Pill -->
        <div class="absolute bottom-2.5 left-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-black/75 backdrop-blur-md text-amber-300 border border-white/10 z-10">
          <i data-lucide="star" class="w-3 h-3 fill-amber-400 text-amber-400"></i>
          <span>${product.rating}</span>
          <span class="text-[10px] text-stone-400 font-normal">(${product.reviewsCount})</span>
        </div>
      </div>

      <!-- Content Info -->
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div class="space-y-1.5">
          <h3 
            onclick="openProductModal('${product.id}')"
            class="font-heading font-black text-base sm:text-lg text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
          >
            ${name}
          </h3>
          <p class="text-xs text-stone-400 line-clamp-2 leading-relaxed">
            ${product.shortDescription}
          </p>
        </div>

        <!-- Price & Action Button -->
        <div class="pt-3 border-t border-[#26150D] flex items-center justify-between gap-3">
          <div class="flex flex-col">
            <span class="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Price</span>
            <span class="text-lg sm:text-xl font-black text-amber-400">₹${product.price}</span>
          </div>

          <div class="flex items-center gap-2">
            ${product.customizations && product.customizations.length > 0 ? `
              <button 
                onclick="openProductModal('${product.id}')" 
                class="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 transition-colors"
                title="Customize"
              >
                <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
              </button>
            ` : ''}

            <button 
              onclick="quickAddToCart('${product.id}')"
              class="px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 ${
                qty > 0 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' 
                  : 'btn-gold-primary py-2 px-4 text-xs'
              }"
            >
              <i data-lucide="${qty > 0 ? 'check' : 'plus'}" class="w-3.5 h-3.5"></i>
              <span>${qty > 0 ? `${qty} in Tray` : t('btn_add_to_cart')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Products Grid on Menu Page
function renderProducts() {
  const container = document.getElementById('menu-products-grid');
  if (!container) return;

  if (state.category === 'board') {
    container.className = "col-span-full";
    container.innerHTML = `
      <div class="official-board-frame p-4 sm:p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-amber-500/20">
          <div>
            <span class="text-xs font-black uppercase text-amber-400">Authentic In-Store Layout</span>
            <h3 class="text-2xl font-display font-black text-white">The Official Shop Board</h3>
          </div>
          <button 
            onclick="openLightbox('assets/official-menu-board.png', 'Official Waffle Orbit Store Menu Board')"
            class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2"
          >
            <i data-lucide="maximize-2" class="w-4 h-4 text-amber-400"></i>
            <span>Zoom High-Res Photo</span>
          </button>
        </div>
        <div id="menu-board-inner-container" class="space-y-4"></div>
      </div>
    `;
    renderOfficialBoard('menu-board-inner-container');
    if (window.lucide) window.lucide.createIcons();
    return;
  } else {
    container.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6";
  }

  const query = state.searchQuery.toLowerCase().trim();
  const filtered = PRODUCTS.filter(p => {
    if (state.category !== 'all' && p.category !== state.category) return false;
    if (state.dietaryFilter === 'veg' && !p.isVeg) return false;
    if (state.dietaryFilter === 'non-veg' && p.isVeg) return false;
    if (query) {
      const matchName = p.name.toLowerCase().includes(query) || 
        (p.name_ta && p.name_ta.toLowerCase().includes(query)) ||
        (p.name_hi && p.name_hi.toLowerCase().includes(query));
      const matchDesc = p.shortDescription.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
      if (!matchName && !matchDesc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
          <i data-lucide="utensils" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-white">No specialties found</h3>
        <p class="text-xs text-stone-400">Try adjusting your search query or dietary filter</p>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(createProductCardHTML).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

// Render Bestsellers on Home Page
function renderHomeBestsellers() {
  const container = document.getElementById('home-bestsellers-grid');
  if (!container) return;

  const bestsellers = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);
  container.innerHTML = bestsellers.map(createProductCardHTML).join('');
  if (window.lucide) window.lucide.createIcons();
}

// Render Offers Page
function renderOffers() {
  const container = document.getElementById('offers-cards-grid');
  if (!container) return;

  container.innerHTML = OFFERS.map(offer => {
    const isTa = state.language === 'ta';
    const isHi = state.language === 'hi';
    const title = isTa && offer.title_ta ? offer.title_ta : (isHi && offer.title_hi ? offer.title_hi : offer.title);

    return `
      <div class="luxury-food-card p-6 sm:p-8 space-y-5 bg-gradient-to-br ${offer.gradient} border border-amber-500/30">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-black uppercase tracking-wider">
            ${offer.badge}
          </span>
          <span class="text-2xl font-black text-amber-400">
            ${offer.discount}
          </span>
        </div>

        <div class="space-y-2">
          <h3 class="font-heading font-black text-xl sm:text-2xl text-white">
            ${title}
          </h3>
          <p class="text-xs sm:text-sm text-stone-300 leading-relaxed">
            ${offer.description}
          </p>
        </div>

        <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xs text-stone-400">Code:</span>
            <span class="font-mono font-black text-sm px-3 py-1 rounded-xl bg-black/60 border border-amber-400/40 text-amber-300 tracking-wider">
              ${offer.code}
            </span>
          </div>

          <button 
            onclick="applyCouponCode('${offer.code}')"
            class="px-4 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-amber-500 hover:text-black text-white border border-white/20 transition-all flex items-center gap-1.5"
          >
            <span>Apply to Tray</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Render Gallery Grid
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  container.innerHTML = GALLERY_PHOTOS.map((photo) => `
    <div 
      onclick="openLightbox('${photo.src}', '${photo.title}')"
      class="group relative aspect-square rounded-3xl overflow-hidden border border-[#2E1C12] bg-[#160D08] cursor-pointer shadow-lg hover:border-amber-500/60 transition-all hover:-translate-y-1"
    >
      <img 
        src="${photo.src}" 
        alt="${photo.title}" 
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
        <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">${photo.category}</span>
        <h4 class="font-heading font-black text-white text-sm mt-1">${photo.title}</h4>
        <div class="flex items-center gap-1 text-xs text-rose-400 mt-2">
          <i data-lucide="heart" class="w-3.5 h-3.5 fill-rose-500"></i>
          <span>${photo.likes} loves</span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Lightbox Modal
function openLightbox(src, title) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-title');
  if (!modal || !img) return;

  img.src = src;
  if (caption) caption.textContent = title;
  modal.classList.add('open');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('open');
}

// Cart Drawer Handlers
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId && (!item.customizations || item.customizations.length === 0));
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      name_ta: product.name_ta,
      price: product.price,
      quantity: 1,
      image: product.image,
      customizations: []
    });
  }

  saveCart();
  renderProducts();
  renderHomeBestsellers();
  triggerConfetti();
}

function triggerConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F5A623', '#D91D24', '#25D366']
    });
  }
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;
  renderCartDrawer();
  backdrop.classList.add('open');
  drawer.classList.add('open');
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
}

function updateCartItemQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  renderProducts();
  renderHomeBestsellers();
}

function removeCartItem(index) {
  if (!state.cart[index]) return;
  state.cart.splice(index, 1);
  saveCart();
  renderProducts();
  renderHomeBestsellers();
}

function applyCouponCode(code) {
  const found = OFFERS.find(o => o.code === code);
  if (!found) {
    alert("Invalid promo code");
    return;
  }
  state.appliedCoupon = found;
  openCart();
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountEl = document.getElementById('cart-discount-val');
  const totalEl = document.getElementById('cart-total-val');
  const discountRow = document.getElementById('cart-discount-row');
  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
          <i data-lucide="shopping-bag" class="w-7 h-7"></i>
        </div>
        <p class="text-sm text-stone-400">${t('cart_empty')}</p>
        <button onclick="closeCart(); navigateTo('menu');" class="btn-gold-primary text-xs py-2 px-5">
          ${t('btn_explore_menu')}
        </button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    if (totalEl) totalEl.textContent = '₹0';
    if (discountRow) discountRow.classList.add('hidden');
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let subtotal = 0;
  itemsContainer.innerHTML = state.cart.map((item, idx) => {
    const addonsTotal = (item.customizations || []).reduce((sum, a) => sum + a.price, 0);
    const itemTotal = (item.price + addonsTotal) * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="p-3.5 rounded-2xl bg-[#1C110A] border border-[#2B190F] flex items-center gap-3">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0" 
        />
        <div class="flex-1 min-w-0">
          <h4 class="font-heading font-black text-sm text-white truncate">${item.name}</h4>
          ${item.customizations && item.customizations.length > 0 ? `
            <p class="text-[10px] text-amber-300 truncate">+ ${item.customizations.map(c => c.name).join(', ')}</p>
          ` : ''}
          <p class="text-xs font-black text-amber-400 mt-1">₹${item.price + addonsTotal}</p>
        </div>

        <div class="flex items-center gap-2">
          <button 
            onclick="updateCartItemQty(${idx}, -1)" 
            class="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-black"
          >-</button>
          <span class="text-xs font-bold text-white w-4 text-center">${item.quantity}</span>
          <button 
            onclick="updateCartItemQty(${idx}, 1)" 
            class="w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center text-sm font-black"
          >+</button>
          <button 
            onclick="removeCartItem(${idx})" 
            class="text-stone-500 hover:text-red-400 p-1 ml-1"
          >
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  let discount = 0;
  if (state.appliedCoupon) {
    if (subtotal >= state.appliedCoupon.minOrder) {
      if (state.appliedCoupon.discountPercent) {
        discount = Math.round((subtotal * state.appliedCoupon.discountPercent) / 100);
      } else if (state.appliedCoupon.discountFixed) {
        discount = state.appliedCoupon.discountFixed;
      }
    }
  }

  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (discountEl) discountEl.textContent = `-₹${discount}`;
  if (totalEl) totalEl.textContent = `₹${finalTotal}`;

  if (discountRow) {
    if (discount > 0) {
      discountRow.classList.remove('hidden');
    } else {
      discountRow.classList.add('hidden');
    }
  }

  if (window.lucide) window.lucide.createIcons();
}

// Send WhatsApp Order Request
function sendWhatsAppOrder() {
  if (state.cart.length === 0) {
    alert("Please add items to your cart first!");
    return;
  }

  const nameInput = document.getElementById('checkout-customer-name');
  const phoneInput = document.getElementById('checkout-customer-phone');
  const addressInput = document.getElementById('checkout-customer-address');
  const typeSelect = document.getElementById('checkout-order-type');
  const noteInput = document.getElementById('checkout-order-note');

  const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "";
  const customerPhone = phoneInput && phoneInput.value.trim() ? phoneInput.value.trim() : "";
  const orderType = typeSelect ? typeSelect.value : "Home Delivery";
  const customerAddress = addressInput && addressInput.value.trim() ? addressInput.value.trim() : "";
  const note = noteInput && noteInput.value.trim() ? noteInput.value.trim() : "None";

  // Validate customer details
  if (!customerName) {
    alert("Please enter your name (உங்கள் பெயர்)");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!customerPhone) {
    alert("Please enter your mobile or WhatsApp contact number (போன் எண்)");
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (orderType === 'Home Delivery' && !customerAddress) {
    alert("Please enter your delivery address and landmark in Sankarankovil (முகவரி / அடையாளம்)");
    if (addressInput) addressInput.focus();
    return;
  }

  let subtotal = 0;
  let itemsText = state.cart.map((item, idx) => {
    const addonsTotal = (item.customizations || []).reduce((sum, a) => sum + a.price, 0);
    const itemTotal = (item.price + addonsTotal) * item.quantity;
    subtotal += itemTotal;
    const addonsStr = item.customizations && item.customizations.length > 0 
      ? ` (+ ${item.customizations.map(c => c.name).join(', ')})` 
      : '';
    return `${idx + 1}. *${item.name}* x ${item.quantity}${addonsStr} - ₹${itemTotal}`;
  }).join('\n');

  let discount = 0;
  if (state.appliedCoupon && subtotal >= state.appliedCoupon.minOrder) {
    discount = state.appliedCoupon.discountPercent 
      ? Math.round((subtotal * state.appliedCoupon.discountPercent) / 100) 
      : (state.appliedCoupon.discountFixed || 0);
  }
  const grandTotal = Math.max(0, subtotal - discount);

  const message = 
`🪐 *NEW ORDER REQUEST — WAFFLE ORBIT*
━━━━━━━━━━━━━━━━━━━━━
👤 *Customer:* ${customerName}
📞 *Phone / Contact:* ${customerPhone}
🛵 *Order Type:* ${orderType}
${customerAddress ? `📍 *Delivery Address:* ${customerAddress}\n` : ''}📝 *Notes / Request:* ${note}
━━━━━━━━━━━━━━━━━━━━━
*ITEMS ORDERED:*
${itemsText}
━━━━━━━━━━━━━━━━━━━━━
*Subtotal:* ₹${subtotal}
${discount > 0 ? `*Coupon Discount (${state.appliedCoupon.code}):* -₹${discount}\n` : ''}*Estimated Total:* *₹${grandTotal}*
━━━━━━━━━━━━━━━━━━━━━
📍 *Shop Location:* Kalugumalai Road, Sankarankovil
⏰ *Timings:* 10:00 AM – 10:00 PM
_Kindly confirm my order and estimated time. Thank you!_`;

  const waUrl = `https://wa.me/91${SHOP_CONFIG.phonePrimary}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// Product Detail Modal
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeProductModal = product;
  state.modalSelectedAddons = [];
  state.modalQuantity = 1;

  const modal = document.getElementById('product-detail-modal');
  if (!modal) return;

  const isTa = state.language === 'ta';
  const isHi = state.language === 'hi';
  const name = isTa && product.name_ta ? product.name_ta : (isHi && product.name_hi ? product.name_hi : product.name);

  document.getElementById('modal-product-img').src = product.image;
  document.getElementById('modal-product-name').textContent = name;
  document.getElementById('modal-product-desc').textContent = product.description;
  document.getElementById('modal-product-rating').textContent = product.rating;
  document.getElementById('modal-product-reviews').textContent = `(${product.reviewsCount} reviews)`;

  // Dietary tag
  const dietBadge = document.getElementById('modal-diet-badge');
  if (dietBadge) {
    dietBadge.innerHTML = product.isVeg 
      ? '<span class="text-emerald-400 font-bold text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Pure Vegetarian</span>'
      : '<span class="text-red-400 font-bold text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> 100% Halal Non-Veg</span>';
  }

  // Customizations
  const addonList = document.getElementById('modal-addons-list');
  if (addonList) {
    if (product.customizations && product.customizations.length > 0) {
      addonList.innerHTML = product.customizations.map((addon) => `
        <label class="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 cursor-pointer transition-colors">
          <div class="flex items-center gap-2.5">
            <input 
              type="checkbox" 
              value="${addon.name}" 
              data-price="${addon.price}"
              onchange="toggleModalAddon('${addon.name}', ${addon.price})"
              class="w-4 h-4 accent-amber-500 rounded" 
            />
            <span class="text-xs font-semibold text-white">${addon.name}</span>
          </div>
          <span class="text-xs font-bold text-amber-400">+₹${addon.price}</span>
        </label>
      `).join('');
    } else {
      addonList.innerHTML = '<p class="text-xs text-stone-500 italic">No extra customisation needed for this delicacy.</p>';
    }
  }

  updateModalTotal();
  modal.classList.add('open');
  if (window.lucide) window.lucide.createIcons();
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.remove('open');
}

function toggleModalAddon(name, price) {
  const idx = state.modalSelectedAddons.findIndex(a => a.name === name);
  if (idx > -1) {
    state.modalSelectedAddons.splice(idx, 1);
  } else {
    state.modalSelectedAddons.push({ name, price });
  }
  updateModalTotal();
}

function updateModalQuantity(delta) {
  state.modalQuantity = Math.max(1, state.modalQuantity + delta);
  const qtyEl = document.getElementById('modal-qty-val');
  if (qtyEl) qtyEl.textContent = state.modalQuantity;
  updateModalTotal();
}

function updateModalTotal() {
  if (!state.activeProductModal) return;
  const addonsSum = state.modalSelectedAddons.reduce((sum, a) => sum + a.price, 0);
  const total = (state.activeProductModal.price + addonsSum) * state.modalQuantity;
  const totalEl = document.getElementById('modal-total-btn-val');
  if (totalEl) totalEl.textContent = `₹${total}`;
}

function addModalItemToCart() {
  if (!state.activeProductModal) return;

  const item = {
    id: state.activeProductModal.id + (state.modalSelectedAddons.length ? '-' + Date.now() : ''),
    name: state.activeProductModal.name,
    price: state.activeProductModal.price,
    quantity: state.modalQuantity,
    image: state.activeProductModal.image,
    customizations: [...state.modalSelectedAddons]
  };

  state.cart.push(item);
  saveCart();
  closeProductModal();
  renderProducts();
  renderHomeBestsellers();
  triggerConfetti();
  openCart();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-nav-menu');
  if (menu) menu.classList.toggle('hidden');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-nav-menu');
  if (menu) menu.classList.add('hidden');
}

// AI Orbit Assistant Floating Chatbot
function toggleChatbot() {
  const chat = document.getElementById('orbit-chatbot-window');
  if (chat) chat.classList.toggle('hidden');
}

function askChatbot(query) {
  const chatBody = document.getElementById('chatbot-messages');
  if (!chatBody) return;

  chatBody.innerHTML += `
    <div class="flex justify-end">
      <div class="bg-amber-500 text-black px-3.5 py-2 rounded-2xl rounded-tr-none text-xs font-bold max-w-[80%]">
        ${query}
      </div>
    </div>
  `;

  let answer = "";
  const q = query.toLowerCase();

  if (q.includes("200") || q.includes("budget") || q.includes("விலை")) {
    answer = "🧇 *Top Waffles under ₹200:*<br>• Charcoal Noir Gelato Waffle (₹180)<br>• Golden Classic Berry Waffle (₹170)<br>• Nutella Roasted Hazelnut (₹190)<br>• Triple Chocolate Overload (₹185)";
  } else if (q.includes("ufo") || q.includes("burger") || q.includes("பர்கர்")) {
    answer = "🛸 *What is a UFO Burger?*<br>Our flying-saucer machine hot-seals the toasted bun edges completely! Zero sauce drips, crispy toasted edges, melted cheddar & juicy halal chicken inside!";
  } else if (q.includes("halal") || q.includes("ஹலால்")) {
    answer = "✅ *100% Halal Certified:*<br>All our chicken dishes (UFO Burgers, Broasted Chicken Buckets, BBQ Pizzas) are strictly 100% Halal certified and prepared hygienically.";
  } else if (q.includes("address") || q.includes("location") || q.includes("எங்க") || q.includes("map")) {
    answer = "📍 *Shop Address:*<br>18, Sowdrapandiya, Vinayagar Kovil St, Kalugumalai Rd, Sankarankoil, 627756 (Refresh Super Market West Side). Open 10 AM - 10 PM everyday!";
  } else if (q.includes("offer") || q.includes("discount") || q.includes("சலுகை")) {
    answer = "🎁 *Active Offers Today:*<br>• Use code *ORBIT20* for 20% OFF on Waffles & Shakes (above ₹299)<br>• *UFOMEAL* saves ₹50 on Burger + Mojito combo!";
  } else {
    answer = "✨ Welcome to Waffle Orbit! You can explore our 50+ delicacies on the menu or click 'Order on WhatsApp' to connect directly with our kitchen in Sankarankovil!";
  }

  setTimeout(() => {
    chatBody.innerHTML += `
      <div class="flex justify-start">
        <div class="bg-white/10 border border-white/10 text-white px-3.5 py-2.5 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%]">
          ${answer}
        </div>
      </div>
    `;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 400);

  chatBody.scrollTop = chatBody.scrollHeight;
}

// Official Shop Menu Board Category Spotlight Navigation
function selectBoardColumn(colId) {
  state.selectedBoardColumn = colId;
  renderOfficialBoard('official-board-columns-container');
  const menuContainer = document.getElementById('menu-board-inner-container');
  if (menuContainer) renderOfficialBoard('menu-board-inner-container');
  
  // Smoothly scroll so the user is looking directly at the expanded card
  const boardSection = document.getElementById('official-board-columns-container') || document.getElementById('menu-board-inner-container');
  if (boardSection) {
    boardSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function resetBoardColumn() {
  state.selectedBoardColumn = 'all';
  renderOfficialBoard('official-board-columns-container');
  const menuContainer = document.getElementById('menu-board-inner-container');
  if (menuContainer) renderOfficialBoard('menu-board-inner-container');
}

function prevBoardColumn() {
  if (!window.OFFICIAL_BOARD_COLUMNS) return;
  const cols = window.OFFICIAL_BOARD_COLUMNS;
  const currIdx = cols.findIndex(c => c.id === state.selectedBoardColumn);
  if (currIdx <= 0) {
    state.selectedBoardColumn = cols[cols.length - 1].id;
  } else {
    state.selectedBoardColumn = cols[currIdx - 1].id;
  }
  selectBoardColumn(state.selectedBoardColumn);
}

function nextBoardColumn() {
  if (!window.OFFICIAL_BOARD_COLUMNS) return;
  const cols = window.OFFICIAL_BOARD_COLUMNS;
  const currIdx = cols.findIndex(c => c.id === state.selectedBoardColumn);
  if (currIdx === -1 || currIdx >= cols.length - 1) {
    state.selectedBoardColumn = cols[0].id;
  } else {
    state.selectedBoardColumn = cols[currIdx + 1].id;
  }
  selectBoardColumn(state.selectedBoardColumn);
}

// Render Single Card Spotlight (Zero Truncation, Spacious, Crystal-Clear)
function renderSingleBoardSpotlight(col, isTa, isHi) {
  const title = isTa && col.title_ta ? col.title_ta : (isHi && col.title_hi ? col.title_hi : col.title);
  const subTitle = isTa ? col.title : (col.title_ta || 'Official Waffle Orbit Recipe');
  const allCols = window.OFFICIAL_BOARD_COLUMNS;
  const colIndex = allCols.findIndex(c => c.id === col.id);

  return `
    <div class="board-spotlight-card bg-[#140A06] border-2 rounded-3xl p-5 sm:p-8 shadow-2xl transition-all" style="border-color: ${col.borderColor};">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
        <button 
          onclick="resetBoardColumn()" 
          class="px-4 py-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500 hover:text-black border border-amber-500/50 text-amber-300 font-extrabold text-xs flex items-center gap-2 transition-all shadow-lg group"
        >
          <span class="group-hover:-translate-x-1 transition-transform text-sm">←</span>
          <span>View All 7 Columns (${isTa ? 'அனைத்து பலகை' : 'Back to Grid'})</span>
        </button>

        <div class="text-center">
          <div class="flex items-center justify-center gap-2">
            <span class="text-2xl">${col.bulletIcon}</span>
            <h2 class="font-display font-black text-2xl sm:text-3xl tracking-wider text-white uppercase">
              ${title}
            </h2>
          </div>
          <p class="text-xs text-amber-300 font-heading italic mt-1">
            ${subTitle} • ${col.items.length} Delicacies Available • 100% Halal
          </p>
        </div>

        <div class="flex items-center gap-2">
          <button 
            onclick="prevBoardColumn()" 
            class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-stone-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow"
            title="Previous Category"
          >
            <span>‹</span>
            <span>Prev</span>
          </button>
          <button 
            onclick="nextBoardColumn()" 
            class="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-stone-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow"
            title="Next Category"
          >
            <span>Next</span>
            <span>›</span>
          </button>
        </div>
      </div>

      <!-- Main Content Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
        
        <!-- Left: Image & Category Summary -->
        <div class="lg:col-span-4 space-y-4">
          <div class="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl group">
            <img 
              src="${col.image}" 
              alt="${title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
              <span class="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/50 text-amber-300 font-bold">
                ${col.items.length} Authentic Options
              </span>
              <span class="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 font-bold">
                100% Halal
              </span>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-stone-300 space-y-2">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <span>★</span>
              <span>Kalugumalai Road Store Specialty</span>
            </div>
            <p class="leading-relaxed">
              Every item is crafted fresh to order using original shop recipes. Click any item or <strong>(+) Add</strong> to instantly place into your order tray!
            </p>
          </div>

          <button 
            onclick="navigateTo('menu'); setCategory('${col.id}');"
            class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <span>Explore All Menu Cards with Photos</span>
            <span>→</span>
          </button>
        </div>

        <!-- Right: Crystal-Clear Full Item Cards (ZERO TRUNCATION) -->
        <div class="lg:col-span-8 space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-stone-400 font-bold uppercase tracking-wider">
            <span>Delicacy Name & Specifications</span>
            <span>Price & Order</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            ${col.items.map(item => {
              const itemName = isTa && item.name_ta ? item.name_ta : item.name;
              const subName = isTa ? item.name : (item.name_ta || '');
              const cartItem = state.cart.find(c => c.id === item.id && (!c.customizations || c.customizations.length === 0));
              const qty = cartItem ? cartItem.quantity : 0;

              return `
                <div 
                  class="p-4 rounded-2xl bg-gradient-to-br from-[#1C100A] to-[#120804] border border-white/10 hover:border-amber-400/70 transition-all duration-200 group flex items-center justify-between gap-3 shadow-lg hover:shadow-2xl hover:translate-y-[-2px] cursor-pointer"
                  onclick="quickAddToCart('${item.id}')"
                  title="Click to add ${item.name} to tray"
                >
                  <div class="flex items-start gap-3 min-w-0 flex-1">
                    <!-- Veg / Non-Veg Indicator -->
                    <div class="w-4 h-4 rounded-sm border ${item.isVeg ? 'border-emerald-500' : 'border-red-500'} p-0.5 flex items-center justify-center shrink-0 mt-1">
                      <div class="w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}"></div>
                    </div>

                    <div class="min-w-0">
                      <!-- 100% UNTRUNCATED FULL DELICACY NAME -->
                      <h4 class="font-heading font-black text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors leading-snug">
                        ${itemName}
                      </h4>
                      ${subName ? `<p class="text-[11px] text-stone-400 font-medium mt-0.5">${subName}</p>` : ''}
                    </div>
                  </div>

                  <!-- Price & Interactive Add Button -->
                  <div class="flex items-center gap-2.5 shrink-0">
                    <span class="font-mono font-black text-base sm:text-lg text-amber-400">₹${item.price}</span>
                    <button 
                      onclick="event.stopPropagation(); quickAddToCart('${item.id}');"
                      class="px-3.5 py-1.5 rounded-full font-black text-xs transition-all flex items-center gap-1 shadow-md ${
                        qty > 0 
                          ? 'bg-emerald-600 text-white shadow-emerald-600/30' 
                          : 'bg-amber-500 text-black hover:bg-amber-400 shadow-amber-500/20'
                      }"
                      title="Add ${item.name} to tray"
                    >
                      <span>${qty > 0 ? '✓' : '+'}</span>
                      <span>${qty > 0 ? `${qty}` : 'Add'}</span>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom Help Notice & Tray Summary -->
          <div class="pt-4 mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 bg-white/5 p-3.5 rounded-2xl border border-white/5">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All items freshly cooked to order. In Tray: <strong class="text-amber-300 font-mono">${state.cart.reduce((s, i) => s + i.quantity, 0)} items</strong></span>
            </div>
            <button 
              onclick="openCart()" 
              class="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-300 font-black text-xs transition-colors flex items-center gap-1"
            >
              <span>Review Order Tray</span>
              <span>→</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  `;
}

// Render Official Shop Menu Board (Interactive Switcher + 7-Column Grid / Single-Card Spotlight)
function renderOfficialBoard(containerId = 'official-board-columns-container') {
  const container = document.getElementById(containerId);
  if (!container || !window.OFFICIAL_BOARD_COLUMNS) return;

  const isTa = state.language === 'ta';
  const isHi = state.language === 'hi';
  const cols = window.OFFICIAL_BOARD_COLUMNS;

  // 1. Render Category Filter Tabs Bar
  const tabsHtml = `
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-2xl bg-black/70 border border-amber-500/30 shadow-xl">
      <div class="flex items-center gap-2 text-xs font-bold text-amber-300">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
        <span>${isTa ? 'விருப்பமான கார்டை கிளிக் செய்து முழு மெனுவை தெளிவாகப் படிக்கவும்:' : 'Click any card to expand & read all menu items clearly:'}</span>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-1.5 text-xs">
        <button 
          onclick="resetBoardColumn()" 
          class="board-cat-btn ${state.selectedBoardColumn === 'all' ? 'active' : ''}"
        >
          <span>🌟</span>
          <span>${isTa ? 'அனைத்து 7 வரிசைகள்' : 'All 7 Columns'}</span>
        </button>

        ${cols.map(c => {
          const cTitle = isTa && c.title_ta ? c.title_ta : (isHi && c.title_hi ? c.title_hi : c.title);
          const isActive = state.selectedBoardColumn === c.id;
          return `
            <button 
              onclick="selectBoardColumn('${c.id}')" 
              class="board-cat-btn ${isActive ? 'active' : ''}"
              title="Click to view ${c.title}"
            >
              <span>${c.bulletIcon}</span>
              <span>${cTitle}</span>
              <span class="text-[10px] opacity-70">(${c.items.length})</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // 2. Check if a single column is selected or all 7 columns
  if (state.selectedBoardColumn !== 'all') {
    const selectedCol = cols.find(c => c.id === state.selectedBoardColumn) || cols[0];
    const spotlightHtml = renderSingleBoardSpotlight(selectedCol, isTa, isHi);
    container.innerHTML = tabsHtml + spotlightHtml;
  } else {
    // 3. Render All 7 Columns with Improved Text Wrapping & Expand Badges
    const doodles = {
      'coffee': '☕ ♨️',
      'sandwiches': '🥪 ✨',
      'ufo-burgers': '🛸 🪐',
      'pizza': '🍕 🧀',
      'fried-chicken': '🍗 🌶️',
      'mojitos': '🍸 🍃',
      'milkshakes': '🥤 🍫'
    };

    const columnsGridHtml = `
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3.5 pt-1">
        ${cols.map(col => {
          const title = isTa && col.title_ta ? col.title_ta : (isHi && col.title_hi ? col.title_hi : col.title);
          const doodle = doodles[col.id] || '✨';

          return `
            <div 
              class="board-column-card border shadow-lg group hover:border-amber-400/80 hover:shadow-amber-500/20 transition-all duration-300" 
              style="border-color: ${col.borderColor};"
            >
              
              <!-- Column Header (Clickable to Expand) -->
              <div 
                onclick="selectBoardColumn('${col.id}')"
                class="p-2.5 text-center bg-gradient-to-b ${col.headerBg} border-b border-white/10 shadow-sm cursor-pointer group-hover:brightness-110 transition-all"
                title="Click to expand ${title} menu in full view"
              >
                <div class="flex items-center justify-between text-white">
                  <div class="flex items-center gap-1 min-w-0">
                    <i data-lucide="${col.icon}" class="w-3.5 h-3.5 text-amber-300 shrink-0"></i>
                    <h3 class="font-heading font-black text-xs tracking-wider uppercase truncate">${title}</h3>
                  </div>
                  <span class="text-[9px] bg-black/60 px-1.5 py-0.5 rounded text-amber-300 border border-amber-400/40 shrink-0 font-bold hover:scale-105 transition-transform">
                    🔍 Expand
                  </span>
                </div>
              </div>

              <!-- Food Photo (Clickable to Expand) -->
              <div 
                onclick="selectBoardColumn('${col.id}')"
                class="p-1.5 bg-black/40 cursor-pointer relative"
                title="Click to view full category"
              >
                <div class="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                  <img 
                    src="${col.image}" 
                    alt="${title}" 
                    loading="lazy" 
                    onerror="this.onerror=null; this.src='./assets/wa2.jpeg';"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                    <span class="px-2 py-1 rounded-full bg-black/80 text-amber-300 font-extrabold text-[10px] border border-amber-400/50 shadow-lg">
                      Read Clearly (${col.items.length}) 🔍
                    </span>
                  </div>
                </div>
              </div>

              <!-- Items List -->
              <div class="p-2 flex-1 flex flex-col justify-between space-y-1 bg-[#120804]">
                <div class="space-y-1">
                  ${col.items.map(item => {
                    const itemName = isTa && item.name_ta ? item.name_ta : item.name;
                    return `
                      <div 
                        class="board-item-row group/row" 
                        onclick="quickAddToCart('${item.id}')"
                        title="Click to add ${item.name} to tray"
                      >
                        <div class="flex items-start gap-1 text-stone-200 group-hover/row:text-amber-300 min-w-0 pr-1 flex-1">
                          <span class="text-[10px] text-amber-400 font-bold shrink-0 mt-0.5">${col.bulletIcon}</span>
                          <span class="font-bold text-[10.5px] leading-tight break-words">${itemName}</span>
                        </div>

                        <div class="flex items-center gap-1 shrink-0 ml-1">
                          <span class="font-mono font-black text-[11px] text-amber-400">₹${item.price}</span>
                          <button 
                            onclick="event.stopPropagation(); quickAddToCart('${item.id}');"
                            class="board-item-add w-4 h-4 rounded-full bg-amber-500/20 text-amber-300 group-hover/row:bg-amber-500 group-hover/row:text-black flex items-center justify-center font-bold text-[9px] transition-all"
                            title="Add to tray"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>

                <!-- Bottom Bar: Direct Expand Action -->
                <div class="pt-1.5 mt-1 border-t border-white/5 flex items-center justify-between px-1 text-[10px]">
                  <span class="tracking-widest text-stone-500">${doodle}</span>
                  <button 
                    onclick="selectBoardColumn('${col.id}')" 
                    class="text-[10px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 hover:underline"
                    title="Click to open full clear readable view"
                  >
                    <span>Read Clearly</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    `;

    container.innerHTML = tabsHtml + columnsGridHtml;
  }

  if (window.lucide) window.lucide.createIcons();
}

// Initialise Application
function renderAll() {
  updatePageTranslations();
  renderHeroVideoTabs();
  renderCategories();
  renderOfficialBoard();
  renderHomeBestsellers();
  renderProducts();
  renderOffers();
  renderGallery();
  updateCartBadge();
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initScrollSpy();
  initHeroVideoAudio();

  // Search Input Listener
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }
});


// Language Switcher Dropdown Handler
function toggleLangDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function changeLanguage(lang) {
  setLanguage(lang);
  const menu = document.getElementById('lang-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  
  const label = document.getElementById('current-lang-label');
  if (label) {
    const names = { en: 'English', ta: 'தமிழ்', hi: 'हिंदी' };
    label.textContent = names[lang] || 'English';
  }
}

// Close language dropdown on outside click
document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('lang-dropdown-wrapper');
  const menu = document.getElementById('lang-dropdown-menu');
  if (wrapper && menu && !wrapper.contains(e.target)) {
    menu.classList.add('hidden');
  }
});


// Real-time Scrollspy for Header Navigation Active Highlight
function initScrollSpy() {
  const sectionIds = ['home', 'about', 'menu', 'board', 'offers', 'reels', 'gallery', 'contact'];
  const sections = sectionIds.map(id => document.getElementById('section-' + id)).filter(Boolean);
  const desktopLinks = document.querySelectorAll('.nav-link[data-nav]');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link[data-nav]');

  function updateActiveNavOnScroll() {
    const scrollPosition = window.scrollY + 120;
    let currentId = 'home';

    for (let i = 0; i < sections.length; i++) {
      const sec = sections[i];
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = sec.id.replace('section-', '');
        break;
      }
    }

    // Near page bottom, mark contact
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 90) {
      currentId = 'contact';
    }

    // Map official board to menu active state
    const targetNavId = (currentId === 'board') ? 'menu' : currentId;

    // Highlight desktop links
    desktopLinks.forEach(link => {
      const target = link.getAttribute('data-nav');
      if (target === targetNavId) {
        link.classList.add('active-nav-pill');
        link.classList.remove('inactive-nav-link');
      } else {
        link.classList.remove('active-nav-pill');
        link.classList.add('inactive-nav-link');
      }
    });

    // Highlight mobile links
    mobileLinks.forEach(link => {
      const target = link.getAttribute('data-nav');
      if (target === targetNavId) {
        link.classList.add('bg-amber-500/20', 'text-amber-300', 'border-amber-400/40');
      } else {
        link.classList.remove('bg-amber-500/20', 'text-amber-300', 'border-amber-400/40');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavOnScroll, { passive: true });
  updateActiveNavOnScroll();
}
