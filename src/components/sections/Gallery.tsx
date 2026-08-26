import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Lightbox from "../ui/Lightbox";

import heroImage from "../../assets/images/hero.jpg";
import mainRoom from "../../assets/images/main-room.jpg";
import livingRoom from "../../assets/images/living-room.jpg";
import livingRoom2 from "../../assets/images/living-room2.jpg";
import livingRoom3 from "../../assets/images/living-room3.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import kitchen2 from "../../assets/images/kitchen2.jpg";
import balcony from "../../assets/images/balcony.jpg";
import wc3 from "../../assets/images/wc3.jpg";
export default function Gallery() {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: heroImage,
      title: t("gallery.images.socialArea.title"),
      category: t("gallery.images.socialArea.category"),
      alt: t("gallery.images.socialArea.alt"),
      className: "md:col-span-2 h-[600px]",
    },
    {
      src: livingRoom,
      title: t("gallery.images.livingRoom.title"),
      category: t("gallery.images.livingRoom.category"),
      alt: t("gallery.images.livingRoom.alt"),
      className: "h-[350px]",
    },
    {
      src: livingRoom2,
      title: t("gallery.images.livingRoomDetail.title"),
      category: t("gallery.images.livingRoomDetail.category"),
      alt: t("gallery.images.livingRoomDetail.alt"),
      className: "h-[350px]",
    },
    {
      src: kitchen,
      title: t("gallery.images.kitchen.title"),
      category: t("gallery.images.kitchen.category"),
      alt: t("gallery.images.kitchen.alt"),
      className: "h-[350px]",
    },
    {
      src: kitchen2,
      title: t("gallery.images.kitchenIsland.title"),
      category: t("gallery.images.kitchenIsland.category"),
      alt: t("gallery.images.kitchenIsland.alt"),
      className: "h-[350px]",
    },
    {
      src: balcony,
      title: t("gallery.images.balcony.title"),
      category: t("gallery.images.balcony.category"),
      alt: t("gallery.images.balcony.alt"),
      className: "h-[350px]",
    },
    {
      src: mainRoom,
      title: t("gallery.images.masterBedroom.title"),
      category: t("gallery.images.masterBedroom.category"),
      alt: t("gallery.images.masterBedroom.alt"),
      className: "h-[350px]",
    },
    {
      src: livingRoom3,
      title: t("gallery.images.homeOffice.title"),
      category: t("gallery.images.homeOffice.category"),
      alt: t("gallery.images.homeOffice.alt"),
      className: "h-[350px]",
    },
    {
      src: wc3,
      title: t("gallery.images.guestBathroom.title"),
      category: t("gallery.images.guestBathroom.category"),
      alt: t("gallery.images.guestBathroom.alt"),
      className: "h-[350px]",
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
                <div
                  key={image.src}
                  className={`group relative overflow-hidden rounded-2xl ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setSelectedIndex(index)}
                    className="
                      h-full
                      w-full
                      cursor-pointer
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/20
                      to-transparent
                      p-6
                      pt-16
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                      {image.category}
                    </p>

                    <p className="mt-2 text-lg font-medium text-white">
                      {image.title}
                    </p>
                  </div>
                </div>
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