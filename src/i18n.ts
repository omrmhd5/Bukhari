import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const updateDocumentLanguage = (lng: string) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  localStorage.setItem("language", lng);
};

const savedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;
const initialLanguage =
  savedLanguage === "en" || savedLanguage === "ar" ? savedLanguage : "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", updateDocumentLanguage);
updateDocumentLanguage(initialLanguage);

export default i18n;
