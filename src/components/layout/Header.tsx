import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const LINKS = [
  { href: "#residencia", key: "header.residence" },
  { href: "#galeria", key: "header.gallery" },
  { href: "#vistas", key: "header.views" },
  { href: "#ubicacion", key: "header.location" },
  { href: "#ficha", key: "header.specs" },
];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // El panel móvil siempre tiene fondo claro; la barra solo cuando hay scroll.
  const solid = scrolled || menuOpen;

  const goToViewing = () => {
    setMenuOpen(false);
    document.getElementById("private-viewing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        solid
          ? "border-b border-stone-200/60 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#top"
          className={`transition-colors duration-300 ${
            solid ? "text-stone-900" : "text-white"
          }`}
        >
          <span className="block text-base font-semibold tracking-[0.12em] sm:text-lg">
            EL CERRO
          </span>
          <span className="block text-[10px] uppercase tracking-[0.28em] opacity-80 sm:text-xs">
            Boutique Residence
          </span>
        </a>

        <nav
          className={`hidden items-center gap-8 text-sm transition-colors duration-300 md:flex ${
            solid ? "text-stone-700" : "text-white"
          }`}
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-all duration-300 hover:opacity-70"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher scrolled={solid} />

          <div className="hidden sm:block">
            <Button onClick={goToViewing}>{t("header.visit")}</Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors md:hidden ${
              solid ? "text-stone-900 hover:bg-stone-100" : "text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-stone-200 bg-white/95 backdrop-blur-xl md:hidden"
      >
        <nav className="flex flex-col px-5 py-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-stone-100 py-3 text-base text-stone-800 last:border-0"
            >
              {t(link.key)}
            </a>
          ))}

          <div className="pt-4">
            <Button onClick={goToViewing}>{t("header.visit")}</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
