import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Button from "../ui/Button";

import heroImage from "../../assets/images/entrada.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <Container>
        <div className="relative flex min-h-screen flex-col items-center justify-center text-center text-white">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-stone-200">
            {t("hero.location")}
          </p>
          <h1 className="mx-auto max-w-5xl text-5xl font-medium tracking-tight md:text-7xl">
            {t("hero.title")}
          </h1>

          <p className="mt-6 text-xl font-light tracking-wide text-stone-200 md:text-2xl">
            {t("hero.subtitle")}
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-200 md:text-xl">
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

          {/* Scroll Indicator */}

          <a
            href="#residencia"
            className="
              absolute
              bottom-10
              flex
              flex-col
              items-center
              gap-2
              text-stone-200
              transition-opacity
              duration-300
              hover:opacity-70
            "
          >
            <span className="text-xs uppercase tracking-[0.3em]">
              Scroll
            </span>

            <ChevronDown
              className="h-5 w-5 animate-bounce"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </Container>
    </section>
  );
}