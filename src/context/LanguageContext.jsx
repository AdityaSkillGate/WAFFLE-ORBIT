import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../data/translations/en.json';
import ta from '../data/translations/ta.json';
import hi from '../data/translations/hi.json';

const translations = { en, ta, hi };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('waffle_orbit_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('waffle_orbit_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language] || translations.en;
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
