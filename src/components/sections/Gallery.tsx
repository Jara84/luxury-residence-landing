import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Lightbox, { type LightboxImage } from "../ui/Lightbox";
import Picture from "../ui/Picture";
import { trackGallery } from "../../lib/analytics";

/** Ancho real que ocupa la tarjeta, para que el navegador baje el archivo correcto. */
const SIZES_WIDE = "(min-width: 1280px) 1216px, 100vw";
const SIZES_HALF = "(min-width: 1280px) 596px, (min-width: 768px) 50vw, 100vw";

/** name = archivo en /public/img · key = nodo en gallery.images del i18n */
const ITEMS: { name: string; key: string; className: string; wide?: boolean }[] = [
  { name: "social-open",    key: "socialOpen",    className: "md:col-span-2 h-[300px] sm:h-[420px] md:h-[560px]", wide: true },
  { name: "living",         key: "living",        className: "h-[280px] md:h-[400px]" },
  { name: "kitchen-island", key: "kitchenIsland", className: "h-[280px] md:h-[400px]" },
  { name: "kitchen",        key: "kitchen",       className: "md:col-span-2 h-[300px] sm:h-[360px] md:h-[460px]", wide: true },
  { name: "kitchen-bar",    key: "kitchenBar",    className: "h-[280px] md:h-[400px]" },
  { name: "pantry",         key: "pantry",        className: "h-[280px] md:h-[400px]" },
  { name: "master-bedroom", key: "masterBedroom", className: "h-[280px] md:h-[400px]" },
  { name: "master-closet",  key: "masterCloset",  className: "h-[280px] md:h-[400px]" },
  { name: "master-bath",    key: "masterBath",    className: "h-[280px] md:h-[400px]" },
  { name: "bath-2",         key: "bath2",         className: "h-[280px] md:h-[400px]" },
  { name: "bedroom-2",      key: "bedroom2",      className: "h-[280px] md:h-[400px]" },
  { name: "laundry",        key: "laundry",       className: "h-[280px] md:h-[400px]" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images: LightboxImage[] = ITEMS.map((item) => ({
    name: item.name,
    category: t(`gallery.images.${item.key}.category`),
    title: t(`gallery.images.${item.key}.title`),
    alt: t(`gallery.images.${item.key}.title`),
  }));

  const open = (index: number) => {
    setSelectedIndex(index);
    trackGallery(ITEMS[index].name);
  };

  return (
    <>
      <Section id="galeria">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("gallery.label")}
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              {t("gallery.title")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              {t("gallery.description")}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {ITEMS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => open(index)}
                aria-label={images[index].title}
                className={`group relative overflow-hidden rounded-2xl bg-stone-200 text-left ${item.className}`}
              >
                <Picture
                  name={item.name}
                  alt={images[index].alt}
                  sizes={item.wide ? SIZES_WIDE : SIZES_HALF}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 pt-16 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/75 sm:text-xs">
                    {images[index].category}
                  </p>

                  <h3 className="mt-2 text-lg font-medium text-white sm:text-xl md:text-2xl">
                    {images[index].title}
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
          onPrevious={() =>
            setSelectedIndex((i) => (i === 0 ? images.length - 1 : (i ?? 0) - 1))
          }
          onNext={() =>
            setSelectedIndex((i) => (i === images.length - 1 ? 0 : (i ?? 0) + 1))
          }
        />
      )}
    </>
  );
}
