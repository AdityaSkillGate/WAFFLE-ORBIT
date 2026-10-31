import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Flame, 
  Clock, 
  MapPin,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { buildWhatsAppInquiryUrl, WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function Hero({ onNavigate }) {
  const { t, language } = useLanguage();

  return (
    <section className="relative pt-36 sm:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFF5E6] via-[#FFFDF9] to-[#FFFDF9]">
      
      {/* Decorative Warm Waffle Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-radial from-amber-400/20 via-red-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-300/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Story, Headline & Actions (7 cols) */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Top Pill Badges */}
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#FFF0D4] text-[#A75D00] border border-[#FAD190] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-orbit-gold" />
              Sankarankovil's #1 Waffle & UFO Burger Hub
            </span>
            <span className="badge-halal text-xs py-1 px-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              100% Halal Certified
            </span>
            <span className="badge-veg text-xs py-1 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Pure Veg & Non-Veg
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-[#1C130E] leading-[1.08]">
              Taste Beyond The Usual — <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91D24] via-[#F5A623] to-[#D91D24]">
                Feast of Fusion!
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-amber-900 italic">
              "Orbit of Taste... Beyond the Usual!" • Kalugumalai Road, Sankarankovil
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#6B5B52] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Savor freshly ironed Belgian honeycomb waffles, our signature <strong>zero-leak sealed UFO burgers</strong>, stone-baked rectangle pizzas, and crunchy broasted chicken. Made fresh to order with love and authentic ingredients!
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => onNavigate('menu')}
              className="btn-primary text-sm sm:text-base font-bold px-7 py-3.5 shadow-lg shadow-red-500/25 group"
            >
              <span>Explore Menu (50+ Items)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${WAFFLE_ORBIT_PHONE}?text=${encodeURIComponent("Hello Waffle Orbit! I want to order from the website menu.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm sm:text-base font-bold px-7 py-3.5 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Instant WhatsApp Order</span>
            </a>
          </div>

          {/* Trust Highlights Ribbon */}
          <div className="pt-6 border-t border-orbit-border flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6B5B52]">
            <div className="flex items-center gap-1.5 font-bold text-[#1C130E]">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 Star Customer Love</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 font-semibold">
              <Clock className="w-4 h-4 text-orbit-red" />
              <span>10:00 AM – 10:00 PM</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Take Away & Home Delivery</span>
            </div>
          </div>

        </div>

        {/* Right Column: Mouth-Watering Visual Food Showcase (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center">
            
            {/* Back Glow Backdrop */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-amber-400/30 via-red-500/15 to-transparent blur-2xl scale-110" />

            {/* Main Central Food Dish: Real Strawberry Classic Waffle with Gelato */}
            <div className="relative z-10 w-[92%] h-[92%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img 
                src="/assets/wa2.jpeg" 
                alt="Waffle Orbit Golden Classic Waffle" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full bg-orbit-gold text-black">
                  Bestseller
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl mt-1 drop-shadow-md">
                  Golden Classic Berry Waffle
                </h3>
                <p className="text-xs text-amber-100 font-semibold drop-shadow">
                  Fresh Strawberries, Blueberries & Vanilla Gelato • ₹170
                </p>
              </div>
            </div>

            {/* Floating Card 1: Official Logo Badge */}
            <div className="absolute -top-4 -right-3 z-20 bg-white border border-orbit-border p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-slow">
              <img 
                src="/assets/logo.jpeg" 
                alt="Logo" 
                className="w-11 h-11 rounded-xl object-cover" 
              />
              <div className="text-left pr-1">
                <p className="text-xs font-black text-[#1C130E] leading-tight">WAFFLE ORBIT</p>
                <p className="text-[10px] font-bold text-orbit-red">Feast of Fusion</p>
              </div>
            </div>

            {/* Floating Card 2: Signature UFO Burger Spotlight */}
            <div className="absolute -bottom-5 -left-4 z-20 bg-white border border-orbit-border p-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-amber-500 p-0.5 shadow-sm">
                <img 
                  src="/assets/ufo-chicken-burger.jpg" 
                  alt="UFO Burger" 
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-black text-orbit-red tracking-wider flex items-center gap-1">
                  <Flame className="w-3 h-3 text-orbit-red" />
                  Sealed Flying Saucer
                </span>
                <p className="text-xs font-black text-[#1C130E]">Chicken & Veg UFO Burger</p>
                <p className="text-xs font-extrabold text-[#F5A623]">From ₹110</p>
              </div>
            </div>

            {/* Floating Card 3: Fresh Made With Love Stamp */}
            <div className="absolute top-1/2 -left-6 z-20 bg-[#FFF0D4] border border-[#FAD190] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-xs font-extrabold text-[#9E5804] -rotate-6">
              <Sparkles className="w-3.5 h-3.5 text-orbit-gold" />
              <span>Fresh Made With Love</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
