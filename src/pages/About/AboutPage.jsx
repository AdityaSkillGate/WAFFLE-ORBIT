import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Clock, 
  Star, 
  MapPin, 
  ArrowRight,
  Code2,
  ExternalLink
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF0D4] text-[#A75D00] border border-[#FAD190]">
          <Sparkles className="w-3.5 h-3.5 text-orbit-gold" />
          The Story of Waffle Orbit
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E]">
          {t('about.title')}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B5B52]">
          {t('about.subtitle')}
        </p>
      </div>

      {/* Main Story & Visual Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-orbit-red uppercase tracking-wider">
              {t('about.storyHeading')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-[#1C130E]">
              Bringing an International Dessert & Fusion Cafe to Kalugumalai Road
            </h2>
          </div>

          <p className="text-sm text-[#6B5B52] leading-relaxed">
            {t('about.storyP1')}
          </p>

          <p className="text-sm text-[#6B5B52] leading-relaxed">
            {t('about.storyP2')}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-orbit-border shadow-sm space-y-1">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-sm text-[#1C130E]">100% Halal Meat</h4>
              <p className="text-xs text-[#6B5B52]">Certified, hygienically sourced, 12-hour marinated chicken.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-orbit-border shadow-sm space-y-1">
              <Layers className="w-5 h-5 text-orbit-red" />
              <h4 className="font-bold text-sm text-[#1C130E]">Fresh Waffle Batter</h4>
              <p className="text-xs text-[#6B5B52]">Never frozen. Cast-iron baked to crispy golden honeycomb perfection.</p>
            </div>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl p-1 bg-gradient-to-tr from-orbit-red to-orbit-gold">
            <img 
              src="/assets/logo.jpeg" 
              alt="Waffle Orbit Brand Symbol" 
              className="w-full h-full object-cover rounded-[22px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-orbit-gold">Official Brand Mark</p>
                <p className="text-lg font-black text-white">Feast of Fusion — Waffles & UFO Burgers</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-white border border-orbit-border shadow-sm text-center space-y-1">
          <p className="text-3xl font-black text-orbit-red">{t('about.stat1')}</p>
          <p className="text-xs text-[#6B5B52] font-semibold">{t('about.stat1Label')}</p>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-orbit-border shadow-sm text-center space-y-1">
          <p className="text-3xl font-black text-orbit-red">{t('about.stat2')}</p>
          <p className="text-xs text-[#6B5B52] font-semibold">{t('about.stat2Label')}</p>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-orbit-border shadow-sm text-center space-y-1">
          <p className="text-3xl font-black text-orbit-red">{t('about.stat3')}</p>
          <p className="text-xs text-[#6B5B52] font-semibold">{t('about.stat3Label')}</p>
        </div>
        <div className="p-6 rounded-3xl bg-white border border-orbit-border shadow-sm text-center space-y-1">
          <p className="text-3xl font-black text-orbit-red">{t('about.stat4')}</p>
          <p className="text-xs text-[#6B5B52] font-semibold">{t('about.stat4Label')}</p>
        </div>
      </div>

      {/* Technology Partner Spotlight: Aditya Skill Gate IT Solution */}
      <div className="rounded-3xl bg-[#1C130E] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 flex items-center justify-center md:justify-start gap-1.5">
            <Code2 className="w-4 h-4 text-orbit-gold" />
            Software Architecture & Technology Partner
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-display">
            Designed & Engineered by Aditya Skill Gate IT Solution
          </h3>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl">
            Sankarankovil's premier IT Training & Software Services company, delivering high-performance digital commerce and web experiences for local businesses.
          </p>
        </div>

        <a
          href="https://adityaskillgate.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-3 px-6 whitespace-nowrap gap-2 shrink-0"
        >
          <span>Visit adityaskillgate.com</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
