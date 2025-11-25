import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

type TranslationValue = string | Record<string, any>;

interface I18nProviderProps {
  children: ReactNode;
  translations: Record<Language, Record<string, TranslationValue>>;
  defaultLanguage?: Language;
}

export function I18nProvider({ children, translations, defaultLanguage = 'pt' }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('thype-language');
    return (saved as Language) || defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('thype-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, params: Record<string, string | number> = {}): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        break;
      }
    }

    if (value === undefined) {
      value = translations[defaultLanguage];
      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          break;
        }
      }
    }

    if (value === undefined) {
      return key;
    }

    if (typeof value === 'string') {
      let result = value;
      Object.keys(params).forEach(paramKey => {
        result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(params[paramKey]));
      });
      return result;
    }

    return value;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}
