import React from 'react';
import Hero from '../../components/Hero/Hero';
import CinematicWaffleShowcase from '../../components/CinematicShowcase/CinematicWaffleShowcase';
import ProductCard from '../../components/ProductCard/ProductCard';
import OfferCard from '../../components/OfferCard/OfferCard';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { getActiveOffers } from '../../data/offers';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Layers, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  ShieldCheck, 
  Heart,
  ExternalLink,
  Code2,
  CheckCircle2,
  Disc,
  Coffee,
  Pizza,
  Utensils
} from 'lucide-react';
import { WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function HomePage({ onNavigate, onSelectProduct }) {
  const { t, language } = useLanguage();
  const activeOffers = getActiveOffers();

  // Bestsellers for homepage showcase (all with dedicated high-res downloaded images)
  const bestsellers = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);

  const testimonials = [
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

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Cinematic Sunlit Hero */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Cinematic Waffle Video Experience (Inspired by Bruva / animation_1.mp4) */}
      <CinematicWaffleShowcase onNavigate={onNavigate} />

      {/* 3. Visual Category Discovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-orbit-red">
            Craving Something Delicious?
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-[#1C130E]">
            Explore by Category
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B52]">
            From Belgian honeycomb waffles to flying-saucer UFO burgers & rectangle pizzas
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate('menu')}
              className="p-4 rounded-3xl bg-white border border-orbit-border hover:border-orbit-red text-center space-y-2.5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FFF8EE] group-hover:bg-[#FEEFCF] flex items-center justify-center transition-colors">
                <Sparkles className="w-6 h-6 text-orbit-red" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#1C130E] group-hover:text-orbit-red transition-colors">
                {language === 'ta' && cat.name_ta ? cat.name_ta : (language === 'hi' && cat.name_hi ? cat.name_hi : cat.name)}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 4. Bestselling Signature Delicacies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="space-y-1.5">
            <span className="badge-halal">
              <Flame className="w-3.5 h-3.5 text-orbit-red" />
              Sankarankovil's Most Loved
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-[#1C130E]">
              Signature Creations
            </h2>
            <p className="text-sm text-[#6B5B52]">
              Made fresh to order with authentic Belgian batter, real butter, and secret seasoning.
            </p>
          </div>

          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 text-sm font-bold text-orbit-red hover:underline group"
          >
            <span>View Complete Menu (50+ Items)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4x2 Grid of Cards with Dedicated High-Res Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelectProduct={onSelectProduct} 
            />
          ))}
        </div>
      </section>

      {/* 5. The UFO Burger Revolution Feature Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#FFF5E6] via-[#FFF8EE] to-[#FFF0D4] border-2 border-[#FAD190] p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-orbit-red text-white">
                <Disc className="w-3.5 h-3.5" />
                The UFO Burger Revolution
              </span>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-[#1C130E] leading-tight">
                Say Goodbye to Messy Dripping Burgers: <br />
                <span className="text-orbit-red">
                  100% Sealed Flying Saucer Buns!
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
                Tired of burgers dripping sauce and cheese all over your hands? 
                At <strong>WAFFLE ORBIT</strong>, our special high-heat crimp press seals the burger bun edges into a flying saucer. 
                Every single bite stays 100% leak-proof, hot, crispy, and delicious!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-orbit-border shadow-sm">
                  <p className="text-xs font-black text-[#1C130E]">Zero Leaks</p>
                  <p className="text-[11px] text-[#6B5B52] mt-0.5">Eat cleanly anywhere without stains</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-orbit-border shadow-sm">
                  <p className="text-xs font-black text-[#1C130E]">Crispy Toasted Edge</p>
                  <p className="text-[11px] text-[#6B5B52] mt-0.5">Toasted crimped crust with soft core</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-orbit-border shadow-sm">
                  <p className="text-xs font-black text-[#1C130E]">100% Halal Chicken</p>
                  <p className="text-[11px] text-[#6B5B52] mt-0.5">Also in Paneer & Veg variants</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="btn-primary text-xs sm:text-sm py-3 px-7"
                >
                  <span>Order a UFO Burger Now (From ₹110)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img 
                  src="/assets/ufo-chicken-burger.jpg" 
                  alt="UFO Burger Waffle Orbit" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded-2xl shadow-md border border-orbit-border flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black text-[#1C130E]">Chicken UFO Burger</p>
                    <p className="text-[11px] text-[#6B5B52]">Sealed Cheddar Melt</p>
                  </div>
                  <span className="text-base font-black text-orbit-red">₹150</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Active Promotions & Combos */}
      {activeOffers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-wider text-orbit-red">
                Limited Time Deals
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1C130E]">
                {t('offers.title')}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('offers')}
              className="text-xs sm:text-sm font-bold text-orbit-red hover:underline"
            >
              View All Offers →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeOffers.slice(0, 3).map((offer) => (
              <OfferCard 
                key={offer.id} 
                offer={offer} 
                onApplyToCart={() => onNavigate('cart')} 
              />
            ))}
          </div>
        </section>
      )}

      {/* 7. Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-orbit-red">
            Verified Customer Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-[#1C130E]">
            Loved By Sankarankovil
          </h2>
          <p className="text-xs text-[#6B5B52]">
            Over 1,000+ happy food lovers visited us on Kalugumalai Road
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="p-6 rounded-3xl bg-white border border-orbit-border shadow-md flex flex-col justify-between space-y-4 hover:border-orbit-red transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1C130E] italic leading-relaxed font-medium">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-orbit-border flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#1C130E]">{test.name}</h4>
                  <p className="text-[11px] text-[#6B5B52]">{test.location}</p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FFF8EE] text-[#A75D00] border border-amber-200">
                  {test.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Dedicated Technology Showcase: Aditya Skill Gate IT Solution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1C130E] via-[#2B150C] to-[#1C130E] text-white p-8 sm:p-12 shadow-2xl border-2 border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5 text-orbit-gold" />
              <span>Technology & Digital Experience Engineered By</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              Aditya Skill Gate IT Solution
            </h3>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Empowering local businesses in Sankarankovil and beyond with high-performance web platforms, online ordering workflows, and cinematic brand storytelling. 
              IT Training & Software Services based in Sankarankovil, Tamil Nadu.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-amber-200/90 pt-1">
              <span>✓ Full-Stack Web Development</span>
              <span>•</span>
              <span>✓ IT Skills Training</span>
              <span>•</span>
              <span>✓ Custom E-Commerce</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="https://adityaskillgate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-3.5 px-8 flex items-center gap-2 shadow-lg shadow-red-600/40"
            >
              <span>Visit adityaskillgate.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 9. Store Location & Google Map Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
          
          <div className="lg:col-span-5 space-y-5">
            <span className="badge-halal">
              <MapPin className="w-3.5 h-3.5 text-orbit-red" />
              Visit Our Shop
            </span>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1C130E]">
              Find Us in Sankarankovil
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#6B5B52]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orbit-red shrink-0 mt-0.5" />
                <span className="text-[#1C130E] font-semibold leading-relaxed">
                  18, Sowdrapandiya, Vinayagar Kovil Street, Kalugumalai Rd, Sankarankoil, Tamil Nadu 627756
                  <br /><strong className="text-orbit-red text-xs">(West Side of Refresh Super Market)</strong>
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orbit-gold shrink-0" />
                <span className="text-[#1C130E] font-medium">Open Everyday: 10:00 AM – 10:00 PM</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:+${WAFFLE_ORBIT_PHONE}`} className="text-orbit-red font-black text-sm hover:underline">
                  +91 96008 75941 / 97518 66187
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/k3m1Wqum1mVwPpLK9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-5 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`tel:+${WAFFLE_ORBIT_PHONE}`}
                className="btn-secondary text-xs py-3 px-5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Shop</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-orbit-border shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531578.443488981!2d76.03393438449565!3d9.13638274008889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06979edcdff633%3A0xe69b6ef1b410a508!2sWAFFLE%20ORBIT!5e0!3m2!1sen!2sin!4v1793348525707!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Waffle Orbit Google Map Sankarankovil"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
