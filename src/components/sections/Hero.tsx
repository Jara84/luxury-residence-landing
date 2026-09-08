import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo como <img>: permite prioridad de carga y srcset,
          cosa que un background-image de CSS no permite. */}
      <picture>
        <source
          type="image/webp"
          sizes="100vw"
          srcSet="/img/hero-800.webp 800w, /img/hero-1600.webp 1600w"
        />
        <img
          src="/img/hero-1600.jpg"
          alt={t("hero.alt")}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
          decoding="sync"
        />
      </picture>

      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative flex min-h-screen flex-col items-center justify-center py-28 text-center text-white">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-stone-200 sm:text-xs sm:tracking-[0.45em]">
            {t("hero.location")}
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-medium tracking-tight sm:text-5xl md:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-6 text-lg font-light tracking-wide text-stone-200 sm:text-xl md:text-2xl">
            {t("hero.subtitle")}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-200 sm:text-lg md:text-xl">
            {t("hero.description")}
          </p>

          <div className="mt-12">
            <Button
              onClick={() => {
                document
                  .getElementById("private-viewing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.button")}
            </Button>
          </div>

          <a
            href="#residencia"
            aria-label="Ir a la sección de la residencia"
            className="absolute bottom-8 flex flex-col items-center gap-2 text-stone-200 transition-opacity duration-300 hover:opacity-70"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
          </a>
        </div>
      </Container>
    </section>
  );
}
