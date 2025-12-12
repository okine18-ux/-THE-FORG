import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, Translation } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Try to auto-detect browser language
    // Handle 'tl' for Tagalog (sometimes 'fil')
    const browserLangFull = navigator.language.toLowerCase();
    const browserLangShort = browserLangFull.split('-')[0];

    let detectedLang: Language = 'en';

    if (['es', 'pt', 'fr', 'de', 'ar', 'th'].includes(browserLangShort)) {
      detectedLang = browserLangShort as Language;
    } else if (browserLangShort === 'tl' || browserLangShort === 'fil' || browserLangFull.includes('ph')) {
      detectedLang = 'tl';
    }

    // Only set if we actually detected something different than default to avoid flicker or issues
    if (detectedLang !== 'en') {
      setLanguage(detectedLang);
    }
  }, []);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
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