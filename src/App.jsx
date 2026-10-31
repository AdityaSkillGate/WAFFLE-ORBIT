import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import MenuPage from './pages/Menu/MenuPage';
import OffersPage from './pages/Offers/OffersPage';
import AboutPage from './pages/About/AboutPage';
import GalleryPage from './pages/Gallery/GalleryPage';
import ContactPage from './pages/Contact/ContactPage';
import CartPage from './pages/Cart/CartPage';
import ProductModal from './components/ProductModal/ProductModal';
import OrbitChatbot from './components/Chatbot/OrbitChatbot';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { MessageCircle } from 'lucide-react';
import { WAFFLE_ORBIT_PHONE } from './services/whatsapp';

function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#1C130E] relative selection:bg-orbit-red selection:text-white flex flex-col justify-between">
      {/* Sticky Top Navigation */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
      />

      {/* Main Pages */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectProduct={setSelectedProduct} 
          />
        )}
        {activePage === 'menu' && (
          <MenuPage 
            onSelectProduct={setSelectedProduct} 
          />
        )}
        {activePage === 'offers' && (
          <OffersPage 
            onNavigate={handleNavigate} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage />
        )}
        {activePage === 'contact' && (
          <ContactPage />
        )}
        {activePage === 'cart' && (
          <CartPage 
            onNavigate={handleNavigate} 
          />
        )}
      </main>

      {/* Global Interactive Overlays */}
      {/* 1. Product Detail Customization Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* 2. Floating Orbit AI Chatbot across all pages */}
      <OrbitChatbot 
        onSelectProduct={setSelectedProduct} 
      />

      {/* 3. Floating WhatsApp Direct Contact Button (Left side) */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${WAFFLE_ORBIT_PHONE}?text=${encodeURIComponent("Hello Waffle Orbit! I want to order from your menu.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white"
          title="Chat with Waffle Orbit on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </a>
      </div>

      {/* Global Footer with Aditya Skill Gate IT Solution Attribution */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
}
