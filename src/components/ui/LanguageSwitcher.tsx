import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "es" | "en") => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <button
        onClick={() => changeLanguage("es")}
        className={
          i18n.language === "es"
            ? "font-semibold"
            : "opacity-60 hover:opacity-100"
        }
      >
        ES
      </button>

      <span className="opacity-50">|</span>

      <button
        onClick={() => changeLanguage("en")}
        className={
          i18n.language === "en"
            ? "font-semibold"
            : "opacity-60 hover:opacity-100"
        }
      >
        EN
      </button>
    </div>
  );
}