import React, { useState, useMemo } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Search, 
  Sparkles, 
  X,
  SlidersHorizontal
} from 'lucide-react';

export default function MenuPage({ onSelectProduct }) {
  const { t, language } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'non-veg'
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'price-asc' | 'price-desc' | 'rating'

  const isTa = language === 'ta';
  const isHi = language === 'hi';

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Dietary Filter
      if (dietaryFilter === 'veg' && !product.isVeg) return false;
      if (dietaryFilter === 'non-veg' && product.isVeg) return false;

      // Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(q) ||
          (product.name_ta && product.name_ta.toLowerCase().includes(q)) ||
          (product.name_hi && product.name_hi.toLowerCase().includes(q));
        const descMatch = product.shortDescription.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);
        const catMatch = product.category.toLowerCase().includes(q);

        if (!nameMatch && !descMatch && !catMatch) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0) || (b.reviewsCount - a.reviewsCount);
    });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF0D4] text-[#A75D00] border border-[#FAD190]">
          <Sparkles className="w-3.5 h-3.5 text-orbit-gold" />
          Fresh Made to Order • 100% Halal
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E]">
          {t('menu.title')}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B5B52]">
          {t('menu.subtitle')}
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-white border-2 border-orbit-border rounded-3xl p-4 sm:p-6 space-y-4 shadow-md">
        
        {/* Search Input, Veg Toggle & Sort */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('menu.searchPlaceholder')}
              className="w-full bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Toggle Filter */}
          <div className="flex items-center bg-[#FFF8EE] border border-orbit-border rounded-2xl p-1 gap-1">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                dietaryFilter === 'all' ? 'bg-orbit-red text-white shadow-sm' : 'text-[#6B5B52] hover:text-black'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                dietaryFilter === 'veg' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:text-emerald-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                dietaryFilter === 'non-veg' ? 'bg-red-700 text-white shadow-sm' : 'text-red-700 hover:text-red-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-600" />
              Non-Veg
            </button>
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFF8EE] border border-orbit-border rounded-2xl px-3.5 py-2.5 text-xs text-[#1C130E] font-bold focus:outline-none focus:border-orbit-red"
            >
              <option value="popular">Most Popular</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Scrollable) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const catName = isTa && cat.name_ta ? cat.name_ta : (isHi && cat.name_hi ? cat.name_hi : cat.name);
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-orbit-red text-white shadow-md scale-102'
                    : 'bg-[#FFF8EE] border border-orbit-border text-[#6B5B52] hover:text-[#1C130E] hover:bg-white'
                }`}
              >
                <span>{catName}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between text-xs text-[#6B5B52] px-2">
        <span>
          Showing <strong className="text-[#1C130E]">{filteredProducts.length}</strong> delicious options
        </span>
        {(searchQuery || selectedCategory !== 'all' || dietaryFilter !== 'all') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setDietaryFilter('all');
            }}
            className="text-orbit-red hover:underline font-bold"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-orbit-border rounded-3xl space-y-4 max-w-lg mx-auto shadow-sm">
          <p className="text-sm text-[#6B5B52]">
            {t('menu.noProducts')}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setDietaryFilter('all');
            }}
            className="btn-primary text-xs py-2 px-5"
          >
            Show Full Menu
          </button>
        </div>
      )}

    </div>
  );
}
