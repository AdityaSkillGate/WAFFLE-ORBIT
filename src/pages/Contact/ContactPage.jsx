import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  CheckCircle2,
  Instagram,
  Code2
} from 'lucide-react';
import { WAFFLE_ORBIT_PHONE, buildWhatsAppInquiryUrl } from '../../services/whatsapp';

export default function ContactPage() {
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const topic = `${formData.message || 'Customer Inquiry'} (From: ${formData.name}, Phone: ${formData.phone})`;
    const url = buildWhatsAppInquiryUrl(topic, language);
    window.open(url, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFF0D4] text-[#A75D00] border border-[#FAD190]">
          <MapPin className="w-3.5 h-3.5 text-orbit-red" />
          Sankarankovil, Tamil Nadu
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-[#1C130E]">
          {t('contact.title')}
        </h1>
        <p className="text-xs sm:text-sm text-[#6B5B52]">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Store Details & Quick Message (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 space-y-5 shadow-lg">
            <h3 className="font-heading font-black text-xl text-[#1C130E]">
              Store Information
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#6B5B52]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-orbit-red" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C130E] mb-0.5">{t('contact.addressTitle')}</h4>
                  <p className="leading-relaxed font-medium">
                    18, Sowdrapandiya, Vinayagar Kovil Street, Kalugumalai Rd, Sankarankoil, Tamil Nadu 627756
                  </p>
                  <p className="text-orbit-red font-bold text-xs mt-1">
                    {t('contact.landmark')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-orbit-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C130E] mb-0.5">{t('contact.hoursTitle')}</h4>
                  <p className="leading-relaxed font-bold text-[#1C130E]">
                    {t('contact.hoursText')}
                  </p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                    Dine-in, Takeaway & Home Delivery
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1C130E] mb-0.5">{t('contact.phoneTitle')}</h4>
                  <p className="text-orbit-red font-black text-sm">
                    <a href={`tel:+${WAFFLE_ORBIT_PHONE}`} className="hover:underline">
                      +91 96008 75941
                    </a>
                    {' / '}
                    <a href="tel:+919751866187" className="hover:underline">
                      97518 66187
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="https://maps.app.goo.gl/k3m1Wqum1mVwPpLK9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-xs py-3.5 justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{t('contact.getDirections')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${WAFFLE_ORBIT_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-xs py-3.5 justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('contact.chatWhatsApp')}</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white border-2 border-orbit-border rounded-3xl p-6 space-y-4 shadow-lg">
            <h3 className="font-heading font-black text-base text-[#1C130E]">
              Send Quick Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows="3"
                  placeholder="What would you like to inquire about?"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-[#FFFDF9] border border-orbit-border focus:border-orbit-red rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#1C130E] placeholder:text-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-xs py-3 justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send to WhatsApp</span>
              </button>

              {submitted && (
                <p className="text-xs text-emerald-600 font-bold flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Opening WhatsApp with your inquiry!</span>
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Right Column: Embedded Google Map & Store Overview (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border-2 border-orbit-border rounded-3xl overflow-hidden shadow-xl p-2">
            <div className="w-full h-[440px] rounded-2xl overflow-hidden bg-gray-100">
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

          {/* Delivery Platforms Card */}
          <div className="bg-white border border-orbit-border rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="font-bold text-[#1C130E] text-sm">Delivery & Social Profiles</h4>
              <p className="text-xs text-[#6B5B52]">Order directly via verified partner links</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.zomato.com/cs/sankarankovil/waffle-orbit-sankarankovil-locality/order"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Order on Zomato</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://www.instagram.com/waffleorbit25?exln=cm54Nm1zcmt2ZHpk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Software Partner Credit */}
          <div className="bg-[#FFF8EE] border border-amber-200 rounded-2xl p-4 flex items-center justify-between text-xs text-[#6B5B52]">
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-orbit-red" />
              <span>Technology Partner: <strong>Aditya Skill Gate IT Solution</strong></span>
            </span>
            <a
              href="https://adityaskillgate.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orbit-red font-bold underline flex items-center gap-1"
            >
              <span>adityaskillgate.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
