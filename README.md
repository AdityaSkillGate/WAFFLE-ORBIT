# WAFFLE ORBIT — Feast of Fusion
### Sankarankovil, Tamil Nadu 627756

Official modern, responsive, animated client demo website built for **WAFFLE ORBIT**.

---

## 🌟 Visual Theme & Design System

The visual identity is grounded directly in the official **WAFFLE ORBIT** brand logo and menu board:
* **Brand Concept:** "Feast of Fusion" — Sweet Belgian waffles harmoniously paired with savory sealed UFO burgers and rectangular stone-baked pizzas.
* **Palette:**
  * **Brand Crimson Red:** `#C41E24`
  * **Toasted Waffle Gold / Warm Amber:** `#F5A623` / `#FFC72C`
  * **Decadent Dark Cocoa / Espresso:** `#1F0E07`
  * **Cosmic Velvet Black:** `#0C0604`
  * **Warm Milk Cream:** `#FFF9F2`

---

## 🚀 Key Features

1. **Cinematic Hero Experience:**
   * 3D Three.js Waffle Planet with orbital golden rings and cosmic chocolate particles
   * GSAP layer-by-layer assembly animation (bottom waffle disc, top waffle, chocolate drizzle cascade, and UFO burger badge)
   * High-contrast typography and instant order CTAs

2. **Trilingual Website Support:**
   * **English (EN)**
   * **Tamil (TA - தமிழ்)**: Natural Unicode Tamil translations for all navigation, menus, cart, and assistant
   * **Hindi (HI - हिंदी)**: Natural Hindi translations
   * Persistent language preference across sessions

3. **Complete Product Catalog & Customization:**
   * Categorized by Belgian Waffles, Mini Pancakes, UFO Burgers, Rectangle Pizza, Broast Chicken, Sandwiches, Mojitos, Milkshakes, Coffee, and Pasta/Fries.
   * Veg / Non-Veg indicators (Indian FSSAI standard green square and red square)
   * 100% Halal certified indicators
   * Interactive modal with optional extras (Extra Gelato scoop, Nutella drizzle, Cheese burst, etc.) and real-time bill tally

4. **Dynamic Offers & Promotions:**
   * Centralized configuration in `src/data/offers.js`
   * 1-click coupon code copying (`ORBIT20`, `UFOMEAL`, `FEAST100`, `STUDENT15`)
   * Automated date expiry filtering (expired offers are never displayed active)
   * Minimum order validation

5. **Orbit AI Assistant (Floating Chatbot):**
   * Natural language answers for budget queries (e.g., *"Enakku ₹200 kulla waffle venum"*, *"Waffles under ₹200"*), pure veg filters, chicken/halal options, shop timings, and location
   * Direct Google Maps directions and WhatsApp quick-dial links

6. **Instant WhatsApp Order Integration:**
   * Builds formatted, itemized order summaries with customer details, order type (Take Away vs Home Delivery in Sankarankovil), cooking instructions, and coupon discount breakdown
   * Official shop telephone: `+91 96008 75941` / `97518 66187`

7. **Verified Business Credentials & Maps:**
   * Full Address: 18, Sowdrapandiya, Vinayagar Kovil Street, Kalugumalai Rd, Sankarankoil, Tamil Nadu 627756 (Refresh Super Market West Side)
   * Live Google Maps embed
   * Direct links to official Zomato ordering page & Instagram profile (`@waffleorbit25`)

---

## 🛠️ Tech Stack

* **React 18** + **Vite 5**
* **Tailwind CSS** with custom glassmorphism & cosmic gradients
* **GSAP** for cinematic scroll and hero animations
* **Three.js** for procedural 3D waffle universe scene
* **Lucide React** for crisp icons
* **Canvas Confetti** for celebratory order interactions

---

## 🏃 Running the Application

### Development Server:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
```

### Preview Production Build:
```bash
npm run preview
```
