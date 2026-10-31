import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Disc,
  Heart
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function CinematicWaffleShowcase({ onNavigate }) {
  const { language } = useLanguage();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('waffle');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const craftSteps = [
    {
      id: 'waffle',
      step: '01',
      title: 'Artisanal Belgian Honeycomb',
      title_ta: 'அசல் பெல்ஜியன் வாஃபிள் தட்டுகள்',
      desc: 'Imported Belgian waffle irons heated to 200°C for deep square pockets, golden crisp exterior and cloud-soft interior.',
      image: '/assets/wa2.jpeg',
      badge: 'Fresh Ironed'
    },
    {
      id: 'ufo',
      step: '02',
      title: 'Zero-Leak UFO Flying Saucer',
      title_ta: 'யுஎஃப்ஓ பறக்கும் தட்டு பர்கர்',
      desc: 'Our proprietary high-heat crimp press seals round burger buns completely. 100% leak-proof, locking in molten cheese and juicy patty.',
      image: '/assets/ufo-chicken-burger.jpg',
      badge: 'Crimped Edge'
    },
    {
      id: 'drizzle',
      step: '03',
      title: 'Molten Belgian Chocolate & Nutella',
      title_ta: 'உருகும் சாக்லேட் & நூட்டெல்லா',
      desc: 'Cascading layers of authentic Italian Nutella, rich dark chocolate ganache, and roasted Turkish hazelnuts.',
      image: '/assets/wa3.jpeg',
      badge: 'Pure Indulgence'
    },
    {
      id: 'broast',
      step: '04',
      title: 'Crispy Broasted Halal Chicken',
      title_ta: 'மொருமொருப்பான ப்ரோஸ்ட் சிக்கன்',
      desc: 'Pressure-broasted bone-in chicken marinated for 12 hours with secret spices. Extra crunchy skin with moist tender chicken.',
      image: '/assets/fried-chicken-bucket.jpg',
      badge: '100% Halal'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FFF6E9] to-[#FFFDF9] overflow-hidden">
      
      {/* Decorative Waffle Grid Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#B45309 1.5px, transparent 1.5px), radial-gradient(#B45309 1.5px, #FFFDF9 1.5px)`,
        backgroundSize: '28px 28px',
        backgroundPosition: '0 0, 14px 14px'
      }} />

      <div className="relative max-w-7xl mx-auto space-y-14 z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0D4] border border-[#FAD190] text-[#A75D00] text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orbit-gold" />
            <span>Cinematic Brand Film • Sankarankovil</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E] tracking-tight leading-tight">
            Crafted for Taste, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D91D24] via-[#F5A623] to-[#D91D24]">
              Rooted in Belgian Perfection
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B5B52] leading-relaxed">
            Experience the culinary artistry behind every dish at <strong>WAFFLE ORBIT</strong>. Watch our brand reel showcasing golden ironed waffles, crimped UFO flying-saucers, and molten chocolate waterfalls.
          </p>
        </div>

        {/* Video Cinema Showcase Screen (Laptop/Display Frame inspired by animation_1.mp4) */}
        <div className="relative max-w-5xl mx-auto rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-[#3E2316] to-[#1C1009] shadow-2xl border-4 border-[#E5C9A3]">
          
          {/* Top Bar of Cinematic Screen */}
          <div className="flex items-center justify-between px-3 py-2 text-xs text-amber-200/80 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 font-bold text-white text-[11px] hidden sm:inline">WAFFLE ORBIT — Official Cinematic Reel</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-black tracking-widest text-amber-400">
                1080P HD • Sound On
              </span>
            </div>
          </div>

          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner group">
            <video
              ref={videoRef}
              src="/assets/animation_1.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Bottom Overlay Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white transition-all shadow-lg pointer-events-auto"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white translate-x-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white transition-all shadow-lg pointer-events-auto"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="hidden sm:block text-xs font-bold drop-shadow">
                  <span>Waffle Orbit — Sankarankovil Food Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-4 py-2 rounded-full bg-orbit-red hover:bg-red-700 text-white text-xs font-black shadow-lg flex items-center gap-1.5 pointer-events-auto transition-transform hover:scale-105"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Floating Brand Badge */}
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-black tracking-wider text-white uppercase">Orbit of Taste</span>
            </div>
          </div>

          {/* Under Screen Agency Ribbon */}
          <div className="mt-3.5 pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-[11px] text-amber-200/90">
            <span className="font-semibold text-center sm:text-left">
              "Designed to feel rooted in artisanal waffle craft, built for modern digital commerce."
            </span>
            <a
              href="https://adityaskillgate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-black text-amber-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              <span>Designed & Developed by Aditya Skill Gate IT Solution</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* 4-Column Craft Story Cards (Each with real downloaded local images!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {craftSteps.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-5 rounded-3xl bg-white border-2 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                activeTab === item.id ? 'border-orbit-red ring-2 ring-orbit-red/20' : 'border-orbit-border hover:border-orbit-gold'
              }`}
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-inner bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-[10px] font-black text-white uppercase tracking-wider">
                    {item.step}
                  </div>
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-orbit-gold text-[10px] font-black text-[#1C130E] shadow-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-1.5">
                  <h3 className="font-display font-black text-base text-[#1C130E] leading-snug">
                    {language === 'ta' ? item.title_ta : item.title}
                  </h3>
                  <p className="text-xs text-[#6B5B52] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-orbit-border mt-3 flex items-center justify-between text-xs font-bold text-orbit-red">
                <span>Explore Specialty</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
