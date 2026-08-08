import { useTranslation } from "react-i18next";

type LanguageSwitcherProps = {
  scrolled?: boolean;
};

export default function LanguageSwitcher({
  scrolled = false,
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "es" | "en") => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const textColor = scrolled ? "text-stone-700" : "text-white";

  return (
    <div
      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${textColor}`}
    >
      <button
        onClick={() => changeLanguage("es")}
        className={
          i18n.language === "es"
            ? "font-semibold opacity-100"
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
            ? "font-semibold opacity-100"
            : "opacity-60 hover:opacity-100"
        }
      >
        EN
      </button>
    </div>
  );
}