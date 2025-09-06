// src/context/language-context.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import en from '@/lib/translations/en.json';
import hi from '@/lib/translations/hi.json';

type Language = 'en' | 'hi';

const translations = { en, hi };

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof typeof en) => {
    return translations[language][key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
