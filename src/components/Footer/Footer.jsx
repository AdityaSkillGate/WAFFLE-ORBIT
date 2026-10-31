import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck,
  Heart,
  Sparkles,
  Code2
} from 'lucide-react';
import { WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function Footer({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#FFF8EE] border-t-2 border-[#EFE6DC] text-[#6B5B52]">
      
      {/* Aditya Skill Gate Agency Banner Ribbon */}
      <div className="bg-[#1C130E] text-white py-3 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-amber-200/90 font-medium">Official Digital Platform</span>
            <span>•</span>
            <span className="font-bold text-white">WAFFLE ORBIT — Sankarankovil</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/90">
            <span>Crafted & Powered by:</span>
            <a
              href="https://adityaskillgate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-black text-amber-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>Aditya Skill Gate IT Solution</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-orbit-red to-orbit-gold shadow-md">
                <img 
                  src="/assets/logo.jpeg" 
                  alt="Waffle Orbit" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-[#1C130E] tracking-tight">
                  WAFFLE <span className="text-orbit-red">ORBIT</span>
                </h3>
                <p className="text-[11px] text-[#A75D00] font-black uppercase tracking-wider">
                  Feast of Fusion • Sankarankovil
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#6B5B52]">
              Sankarankovil's premier destination for artisanal Belgian waffles, sealed UFO burgers, stone-baked rectangle pizzas, crispy broasted chicken, and thick milkshakes.
            </p>

            <div className="flex items-center gap-2">
              <span className="badge-halal">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                100% Halal Food
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-white text-emerald-800 border border-emerald-300">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Fresh Made to Order
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-black text-sm text-[#1C130E] uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-orbit-red transition-colors">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-orbit-red transition-colors">
                  {t('nav.menu')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('offers')} className="hover:text-orbit-red transition-colors text-orbit-red font-bold">
                  {t('nav.offers')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-orbit-red transition-colors">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-orbit-red transition-colors">
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-orbit-red transition-colors">
                  {t('nav.visit')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Menu (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-black text-sm text-[#1C130E] uppercase tracking-wider">
              Popular Delicacies
            </h4>
            <ul className="space-y-2 text-xs text-[#1C130E] font-medium">
              <li>• Charcoal Noir Gelato Waffle (₹180)</li>
              <li>• Nutella Roasted Hazelnut Waffle (₹190)</li>
              <li>• Signature Chicken UFO Burger (₹150)</li>
              <li>• Paneer Tikka Rectangle Pizza (₹240)</li>
              <li>• Crispy Broast Chicken Bucket (₹299)</li>
              <li>• Blue Lagoon Cosmic Mojito (₹110)</li>
            </ul>
          </div>

          {/* Col 4: Shop Address & Call (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-black text-sm text-[#1C130E] uppercase tracking-wider">
              Visit & Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orbit-red shrink-0 mt-0.5" />
                <span className="text-[#1C130E] font-medium">
                  18, Sowdrapandiya, Vinayagar Kovil Street, Kalugumalai Rd, Sankarankoil, Tamil Nadu 627756
                  <br /><strong className="text-amber-800 text-[11px]">(Refresh Super Market West Side)</strong>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orbit-gold shrink-0" />
                <span className="text-[#1C130E] font-semibold">10:00 AM – 10:00 PM (Everyday)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href={`tel:+${WAFFLE_ORBIT_PHONE}`} className="text-orbit-red hover:underline font-black text-sm">
                  +91 96008 75941 / 97518 66187
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://www.instagram.com/waffleorbit25?exln=cm54Nm1zcmt2ZHpk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white hover:bg-pink-50 text-pink-600 border border-orbit-border shadow-sm transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WAFFLE_ORBIT_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white hover:bg-emerald-50 text-emerald-600 border border-orbit-border shadow-sm transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.zomato.com/cs/sankarankovil/waffle-orbit-sankarankovil-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-sm hover:bg-red-700 transition-colors"
                title="Zomato"
              >
                Zomato Order
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Agency Attribution Footer */}
        <div className="mt-12 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5B52]">
          <p>© 2026 WAFFLE ORBIT, Sankarankovil. All rights reserved.</p>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-orbit-border shadow-sm">
            <Code2 className="w-4 h-4 text-orbit-red" />
            <span>Designed & Developed by</span>
            <a 
              href="https://adityaskillgate.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-black text-orbit-red hover:underline flex items-center gap-1"
            >
              <span>Aditya Skill Gate IT Solution</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
