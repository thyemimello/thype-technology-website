import { pt } from './locales/pt';
import { en } from './locales/en';
import { es } from './locales/es';

export const translations = {
  pt,
  en,
  es
};

export { I18nProvider, useTranslation } from './context';
export type { Language } from './context';
