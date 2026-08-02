import Button from "../ui/Button";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="absolute top-0 left-0 z-10 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <div className="text-lg font-medium tracking-wide text-white">
          Residencia El Cerro
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white md:flex">
          <a href="#residencia">
            {t("header.residence")}
          </a>
          
          <a href="#galeria">
            {t("header.gallery")}
          </a>

          <a href="#ubicacion">
            {t("header.location")}
          </a>
        </nav>

        <LanguageSwitcher />

        <Button>
          {t("header.visit")}
        </Button>

      </div>
    </header>
  );
}