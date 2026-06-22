import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Lang } from '../config/translations';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang');
    return saved === 'fr' || saved === 'en' ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'fr' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Convenience hook: returns the translation bundle for the current language.
export const useT = () => {
  const { lang } = useLanguage();
  return translations[lang];
};
