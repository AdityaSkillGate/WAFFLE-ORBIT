import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Instagram, ExternalLink, X, Heart, Eye } from 'lucide-react';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    {
      src: '/assets/wa1.jpeg',
      title: 'Charcoal Noir Gelato Waffle with Cherry',
      category: 'Belgian Waffle',
      likes: '342'
    },
    {
      src: '/assets/wa2.jpeg',
      title: 'Golden Classic Berry Waffle with Ice Cream',
      category: 'Signature Waffle',
      likes: '289'
    },
    {
      src: '/assets/wa3.jpeg',
      title: 'Nutella Roasted Hazelnut Waffle Sandwich',
      category: 'Waffle Sandwich',
      likes: '412'
    },
    {
      src: '/assets/wa4.jpeg',
      title: 'Cosmic Blue Velvet Cream Cheese Waffle',
      category: 'Cosmic Creation',
      likes: '378'
    },
    {
      src: '/assets/wa5.jpeg',
      title: 'Triple Chocolate Overload Cascade',
      category: 'Chocoholic Dream',
      likes: '520'
    },
    {
      src: '/assets/wa6.jpeg',
      title: 'Crunchy Peanut Butter Waffle Bar',
      category: 'Snack Bar',
      likes: '198'
    },
    {
      src: '/assets/pizza.jpg',
      title: 'Paneer Tikka Rectangle Pizza',
      category: 'Artisan Pizza',
      likes: '315'
    },
    {
      src: '/assets/red.jpg',
      title: 'Red Velvet Belgian Waffle with Vanilla Gelato',
      category: 'Specialty Waffle',
      likes: '450'
    },
    {
      src: '/assets/1.jpg',
      title: 'Cosmic Mojito Trio (Blue Lagoon, Strawberry, Lemon)',
      category: 'Coolers & Mocktails',
      likes: '330'
    },
    {
      src: '/assets/3.jpg',
      title: 'The Ultimate Table Spread: Pizza, Waffle & Shake',
      category: 'Combo Feast',
      likes: '610'
    },
    {
      src: '/assets/4.jpg',
      title: 'Grand Party Platter with UFO Burger & Broast',
      category: 'Party Feast',
      likes: '480'
    },
    {
      src: '/assets/5.jpg',
      title: 'Pistachio Berry Royal Waffle',
      category: 'Gourmet Dessert',
      likes: '390'
    },
    {
      src: '/assets/6.jpg',
      title: 'Creamy Alfredo & Arrabbiata Pasta Trio',
      category: 'Italian Fusion',
      likes: '260'
    },
    {
      src: '/assets/img.jpg',
      title: 'Molten Belgian Chocolate Pour over Fresh Stack',
      category: 'Action Shot',
      likes: '725'
    },
    {
      src: '/assets/ufo-chicken-burger.jpg',
      title: 'Signature Sealed Chicken UFO Burger with Cheddar',
      category: 'UFO Burger',
      likes: '580'
    },
    {
      src: '/assets/fried-chicken-bucket.jpg',
      title: 'Crispy Broast Halal Chicken Bucket with Garlic Dip',
      category: 'Fried Chicken',
      likes: '620'
    },
    {
      src: '/assets/shake-oreo.jpg',
      title: 'Oreo Overload Thick Shake with Whipped Cream',
      category: 'Thick Milkshake',
      likes: '495'
    },
    {
      src: '/assets/coffee-filter.jpg',
      title: 'Traditional South Indian Filter Coffee in Brass Dabarah',
      category: 'Tea & Coffee',
      likes: '380'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-200">
          <Instagram className="w-3.5 h-3.5 text-pink-600" />
          Instagram @waffleorbit25
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E]">
          {t('gallery.title')}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B5B52]">
          {t('gallery.subtitle')}
        </p>
      </div>

      {/* Instagram Follow Callout */}
      <div className="flex items-center justify-center">
        <a
          href="https://www.instagram.com/waffleorbit25?exln=cm54Nm1zcmt2ZHpk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-opacity"
        >
          <Instagram className="w-4 h-4" />
          <span>Follow @waffleorbit25 on Instagram</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Visual Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setActivePhoto(item)}
            className="group relative aspect-square rounded-3xl overflow-hidden bg-white border border-orbit-border cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={item.src} 
              alt={item.title} 
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
              <span className="text-[10px] uppercase font-bold text-orbit-gold tracking-wider">
                {item.category}
              </span>
              <p className="text-xs font-bold text-white line-clamp-2">
                {item.title}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs text-amber-200">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                  {item.likes}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/80 font-semibold">
                  <Eye className="w-3 h-3" />
                  View Full
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div 
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={activePhoto.src} 
                alt={activePhoto.title} 
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-5 flex items-center justify-between bg-white border-t border-orbit-border">
              <div>
                <span className="text-[10px] uppercase font-black text-orbit-red">
                  {activePhoto.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-[#1C130E]">
                  {activePhoto.title}
                </h3>
              </div>

              <a
                href="https://www.instagram.com/waffleorbit25?exln=cm54Nm1zcmt2ZHpk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
