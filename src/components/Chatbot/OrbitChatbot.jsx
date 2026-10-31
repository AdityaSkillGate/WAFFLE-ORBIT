import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { processChatMessage } from '../../services/chatbot';
import { 
  X, 
  Send, 
  Sparkles, 
  ExternalLink, 
  MapPin,
  Trash2,
  MessageCircle
} from 'lucide-react';
import { WAFFLE_ORBIT_PHONE } from '../../services/whatsapp';

export default function OrbitChatbot({ onSelectProduct }) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      id: 'welcome',
      sender: 'bot',
      text: t('chatbot.welcome'),
      actions: [
        t('chatbot.suggest1'),
        t('chatbot.suggest2'),
        t('chatbot.suggest3'),
        t('chatbot.suggest4')
      ]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = processChatMessage(query, language);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: response.reply,
        products: response.products,
        mapLink: response.mapLink,
        actions: response.actions
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleActionClick = (actionText) => {
    if (actionText === 'Get Google Maps Directions') {
      window.open('https://maps.app.goo.gl/k3m1Wqum1mVwPpLK9', '_blank');
      return;
    }
    if (actionText.startsWith('Call')) {
      window.location.href = `tel:+${WAFFLE_ORBIT_PHONE}`;
      return;
    }
    if (actionText === 'Order on WhatsApp' || actionText === 'WhatsApp Staff') {
      window.open(`https://wa.me/${WAFFLE_ORBIT_PHONE}`, '_blank');
      return;
    }
    handleSend(actionText);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: t('chatbot.welcome'),
        actions: [
          t('chatbot.suggest1'),
          t('chatbot.suggest2'),
          t('chatbot.suggest3'),
          t('chatbot.suggest4')
        ]
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-orbit-gold shadow-xl text-xs font-black text-[#1C130E] animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-orbit-red" />
            <span>{t('chatbot.trigger')}</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-orbit-red to-orbit-gold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open AI Assistant"
          >
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/logo.jpeg" 
                alt="Orbit Assistant" 
                className="w-9 h-9 rounded-full object-cover group-hover:rotate-12 transition-transform"
              />
            </div>
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[400px] h-[550px] max-h-[85vh] bg-white border-2 border-orbit-border rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#FFF5E6] via-[#FFF8EE] to-[#FFF0D4] border-b border-orbit-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-orbit-red to-orbit-gold shadow-sm">
                <img 
                  src="/assets/logo.jpeg" 
                  alt="Assistant" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#1C130E] flex items-center gap-1.5">
                  <span>Orbit Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </h3>
                <p className="text-[10px] text-[#A75D00] font-bold">
                  Ask about waffles under ₹200, veg items, offers!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="p-2 rounded-xl text-gray-400 hover:text-black hover:bg-black/5 transition-colors"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-black hover:bg-black/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FFFDF9]">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-orbit-red text-white shadow-md rounded-br-none'
                    : 'bg-white text-[#1C130E] border border-orbit-border rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}

                  {/* Google Map Link Button if present */}
                  {msg.mapLink && (
                    <div className="mt-3">
                      <a
                        href={msg.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-orbit-red hover:bg-red-100 font-bold text-xs transition-colors border border-red-200"
                      >
                        <MapPin className="w-3.5 h-3.5 text-orbit-red" />
                        <span>Open Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  {/* Matching Products Cards */}
                  {msg.products && msg.products.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.products.map(p => (
                        <div 
                          key={p.id}
                          className="bg-[#FFF8EE] border border-amber-200 rounded-xl p-2 flex items-center justify-between gap-2.5"
                        >
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1 min-w-0 text-left">
                            <p className="text-xs font-bold text-[#1C130E] truncate">{p.name}</p>
                            <p className="text-[11px] font-black text-orbit-red">₹{p.price}</p>
                          </div>
                          <button
                            onClick={() => addToCart(p, [], 1)}
                            className="px-2.5 py-1.5 rounded-lg bg-orbit-red hover:bg-orbit-red-bright text-white text-[11px] font-bold shrink-0 transition-colors"
                          >
                            + Bag
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Action Suggestion Chips */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        onClick={() => handleActionClick(act)}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFF8EE] hover:bg-[#FEEFCF] text-[#9E5804] border border-amber-300 transition-colors text-left"
                      >
                        {act}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-orbit-border w-20 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-orbit-red animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-orbit-red animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-orbit-red animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-orbit-border flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask in English, தமிழ் or हिंदी..."
              className="flex-1 bg-[#FFFDF9] border border-orbit-border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none focus:border-orbit-red transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-orbit-red hover:bg-orbit-red-bright disabled:opacity-40 text-white transition-all active:scale-95 shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
