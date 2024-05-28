import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations.js'

const resources = {
  en: {
    translation: translations.en
    
  },
  ua: {
    translation: translations.ua
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;