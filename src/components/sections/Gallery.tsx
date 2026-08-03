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
      alt: "El Cerro Boutique Residence",
      className: "md:col-span-2 h-[600px]",
    },
    {
      src: livingRoom,
      alt: "Living Room",
      className: "h-[350px]",
    },
    {
      src: livingRoom2,
      alt: "Living Room Detail",
      className: "h-[350px]",
    },
    {
      src: kitchen,
      alt: "Kitchen",
      className: "h-[350px]",
    },
    {
      src: kitchen2,
      alt: "Kitchen Detail",
      className: "h-[350px]",
    },
    {
      src: balcony,
      alt: "Main Balcony",
      className: "h-[350px]",
    },
    {
      src: mainRoom,
      alt: "Master Bedroom",
      className: "h-[350px]",
    },
    {
      src: livingRoom3,
      alt: "Living Room",
      className: "h-[350px]",
    },
    {
      src: wc3,
      alt: "Guest Bathroom",
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
      <Section>
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
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedIndex(index)}
                className={`
                  ${image.className}
                  w-full
                  cursor-pointer
                  rounded-2xl
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  hover:shadow-xl
                `}
              />
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