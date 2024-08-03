import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAr from "./locales/ar/translation.json";
import translationEn from "./locales/en/translation.json";
const resources = {
  en: {
    translation: translationEn,
  },
  ar: {
    translation: translationAr,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"],
    lng: "ar",
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    resources,
    react: { useSuspense: false },
  });

export default i18n;
