import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es";
import en from "./en";

function detectLanguage(): "es" | "en" {
  try {
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // localStorage puede fallar en modo privado: seguimos con el idioma del navegador
  }
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

const language = detectLanguage();

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: language,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

// Mantiene <html lang> sincronizado: importa para SEO y para lectores de pantalla.
document.documentElement.lang = language;
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
