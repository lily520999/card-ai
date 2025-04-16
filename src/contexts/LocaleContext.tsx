import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Locale, t as translate } from '@/i18n/translations';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ 
  children, 
  initialLocale = 'en-US' 
}) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  // 翻译函数
  const t = (key: string) => translate(key, locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}; 