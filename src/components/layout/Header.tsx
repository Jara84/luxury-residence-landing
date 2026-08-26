import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-stone-200/60 bg-white/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Marca */}
        <div
          className={`
            transition-colors
            duration-300
            ${scrolled ? "text-stone-900" : "text-white"}
          `}
        >
          <h1 className="text-lg font-semibold tracking-[0.12em]">
            EL CERRO
          </h1>

          <p className="text-xs uppercase tracking-[0.28em] opacity-80">
            Boutique Residence
          </p>
        </div>

        {/* Navegación */}
        <nav
          className={`
            hidden
            items-center
            gap-8
            text-sm
            md:flex
            transition-colors
            duration-300
            ${scrolled ? "text-stone-700" : "text-white"}
          `}
        >
          <a
            href="#residencia"
            className="transition-all duration-300 hover:opacity-70"
          >
            {t("header.residence")}
          </a>

          <a
            href="#galeria"
            className="transition-all duration-300 hover:opacity-70"
          >
            {t("header.gallery")}
          </a>

          <a
            href="#ubicacion"
            className="transition-all duration-300 hover:opacity-70"
          >
            {t("header.location")}
          </a>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher scrolled={scrolled} />

          <Button
            onClick={() => {
              document
                .getElementById("private-viewing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("header.visit")}
          </Button>
        </div>
      </div>
    </header>
  );
}