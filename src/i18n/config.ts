import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from './locales/es/common.json';
import esNav from './locales/es/nav.json';
import enCommon from './locales/en/common.json';
import enNav from './locales/en/nav.json';

const resources = {
  es: {
    common: esCommon,
    nav: esNav,
  },
  en: {
    common: enCommon,
    nav: enNav,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React ya maneja el escape de XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio-language',
      caches: ['localStorage'],
    },
  });

// Sincroniza dinámicamente el atributo lang en el elemento <html>
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng.startsWith('en') ? 'en' : 'es';
  }
});

// Sincronización inicial
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';
}

export default i18n;
