import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Lightbox from "../ui/Lightbox";

import ppalSocial from "../../assets/images/ppal_social.jpg";
import entrada from "../../assets/images/entrada.jpg";
import ppalIsla from "../../assets/images/ppal_isla.jpg";
import ppalSala from "../../assets/images/ppal_sala.jpg";
import cafe from "../../assets/images/cafe.jpg";
import cocina from "../../assets/images/cocina.jpg";
import sala from "../../assets/images/sala.jpg";
import mainBath from "../../assets/images/main_bath.jpg";
import banoSocial from "../../assets/images/bano_social.jpg";

export default function Gallery() {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: ppalSocial,
      category: t("gallery.images.hero.category"),
      title: t("gallery.images.hero.title"),
      alt: t("gallery.images.hero.title"),
      className: "md:col-span-2 h-[420px] md:h-[560px]",
    },
    {
      src: entrada,
      category: t("gallery.images.entrance.category"),
      title: t("gallery.images.entrance.title"),
      alt: t("gallery.images.entrance.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: ppalIsla,
      category: t("gallery.images.island.category"),
      title: t("gallery.images.island.title"),
      alt: t("gallery.images.island.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: ppalSala,
      category: t("gallery.images.social.category"),
      title: t("gallery.images.social.title"),
      alt: t("gallery.images.social.title"),
      className: "md:col-span-2 h-[360px] md:h-[460px]",
    },
    {
      src: cafe,
      category: t("gallery.images.detail.category"),
      title: t("gallery.images.detail.title"),
      alt: t("gallery.images.detail.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: cocina,
      category: t("gallery.images.kitchen.category"),
      title: t("gallery.images.kitchen.title"),
      alt: t("gallery.images.kitchen.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: sala,
      category: t("gallery.images.living.category"),
      title: t("gallery.images.living.title"),
      alt: t("gallery.images.living.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: mainBath,
      category: t("gallery.images.masterBath.category"),
      title: t("gallery.images.masterBath.title"),
      alt: t("gallery.images.masterBath.title"),
      className: "h-[320px] md:h-[400px]",
    },
    {
      src: banoSocial,
      category: t("gallery.images.bathroom.category"),
      title: t("gallery.images.bathroom.title"),
      alt: t("gallery.images.bathroom.title"),
      className: "h-[320px] md:h-[400px]",
    },
  ];

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <>
      <Section id="galeria">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("gallery.label")}
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              {t("gallery.title")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              {t("gallery.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-2xl text-left ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 pt-16">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/75">
                    {image.category}
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-white md:text-2xl">
                    {image.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}