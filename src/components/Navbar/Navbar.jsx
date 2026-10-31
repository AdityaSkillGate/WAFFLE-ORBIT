import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Globe, 
  PhoneCall, 
  Sparkles, 
  MessageCircle,
  MapPin,
  Flame,
  ArrowRight
} from 'lucide-react';
import { WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function Navbar({ activePage, onNavigate }) {
  const { t, language, setLanguage } = useLanguage();
  const { totalItemsCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'menu', label: t('nav.menu') },
    { id: 'offers', label: t('nav.offers'), isBadge: true },
    { id: 'about', label: t('nav.about') },
    { id: 'gallery', label: t('nav.gallery') },
    { id: 'contact', label: t('nav.visit') }
  ];

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' }
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Announcement Ribbon */}
      <div className="bg-gradient-to-r from-[#D91D24] via-[#F5A623] to-[#D91D24] text-white py-1 px-4 text-[11px] sm:text-xs font-bold tracking-wide flex items-center justify-between shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 fill-white animate-bounce" />
            <span>Feast of Fusion: Sankarankovil's #1 Belgian Waffle & UFO Burger Hub</span>
          </span>
          <div className="hidden md:flex items-center gap-3">
            <span>Open: 10:00 AM – 10:00 PM</span>
            <span>•</span>
            <a 
              href="https://adityaskillgate.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-100 hover:text-white underline font-extrabold flex items-center gap-1"
            >
              <span>Developed by Aditya Skill Gate IT Solution</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-orbit-border' 
          : 'bg-white/80 backdrop-blur-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left focus:outline-none"
            >
              <div className="relative">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-tr from-orbit-red to-orbit-gold shadow-md group-hover:scale-105 transition-transform">
                  <img 
                    src="/assets/logo.jpeg" 
                    alt="Waffle Orbit Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#1C130E] group-hover:text-orbit-red transition-colors flex items-center gap-1">
                  WAFFLE <span className="text-orbit-red">ORBIT</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-amber-900 font-bold -mt-1 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-orbit-red" />
                  Sankarankovil • Feast of Fusion
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#FFF8EE] border border-orbit-border rounded-full px-4 py-1.5 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-orbit-red to-orbit-red-bright shadow-md' 
                        : 'text-[#6B5B52] hover:text-[#1C130E] hover:bg-white/70'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {link.label}
                      {link.isBadge && (
                        <span className="px-1.5 py-0.2 text-[9px] font-black rounded-full bg-orbit-gold text-white animate-pulse">
                          DEALS
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons (Language, Call, WhatsApp, Cart) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFF8EE] hover:bg-[#FCEFD8] border border-orbit-border text-xs font-bold text-[#6B5B52] transition-colors"
                  title="Switch Language"
                >
                  <Globe className="w-3.5 h-3.5 text-orbit-red" />
                  <span className="uppercase text-[11px] font-extrabold">{language}</span>
                </button>

                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-36 rounded-2xl bg-white border border-orbit-border shadow-2xl py-1.5 z-50">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#FFF8EE] transition-colors ${
                          language === l.code ? 'text-orbit-red font-bold bg-[#FFF5E6]' : 'text-[#6B5B52]'
                        }`}
                      >
                        <span>{l.native}</span>
                        <span className="text-[10px] uppercase text-black/40">{l.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick WhatsApp Order Button */}
              <a
                href={`https://wa.me/${WAFFLE_ORBIT_PHONE}?text=${encodeURIComponent("Hello Waffle Orbit Sankarankovil! I want to order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-bold text-emerald-800 transition-all"
                title="WhatsApp Order"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Shopping Bag Button with Counter */}
              <button
                onClick={() => handleNavClick('cart')}
                className="relative p-2.5 rounded-full bg-orbit-red hover:bg-orbit-red-bright text-white transition-transform active:scale-95 shadow-md shadow-red-600/30"
                aria-label="View Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orbit-gold text-[10px] font-black text-black flex items-center justify-center shadow-md border-2 border-white animate-scale-in">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-[#FFF8EE] border border-orbit-border text-[#1C130E] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-orbit-red" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-white border-b border-orbit-border shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-orbit-red text-white' 
                      : 'text-[#6B5B52] hover:bg-[#FFF8EE]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.isBadge && (
                    <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-orbit-gold text-white">
                      OFFERS
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-orbit-border flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('cart')}
              className="w-full btn-primary text-xs py-3 justify-center"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t('nav.cart')} ({totalItemsCount} items)</span>
            </button>

            <a
              href={`tel:+${WAFFLE_ORBIT_PHONE}`}
              className="w-full btn-secondary text-xs py-3 justify-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Shop: +91 96008 75941</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#6B5B52]">
            <span>Language:</span>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  language === l.code ? 'bg-orbit-red text-white' : 'bg-[#FFF8EE] text-[#6B5B52]'
                }`}
              >
                {l.native}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
