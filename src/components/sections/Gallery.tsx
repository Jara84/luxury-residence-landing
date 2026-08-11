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
      title: "Open Social Area",
      category: "Social Area",
      alt: "Open social area with living room, dining room and kitchen.",
      className: "md:col-span-2 h-[600px]",
    },
    {
      src: livingRoom,
      title: "Living Room",
      category: "Social Area",
      alt: "Main living room.",
      className: "h-[350px]",
    },
    {
      src: livingRoom2,
      title: "Living Room Detail",
      category: "Social Area",
      alt: "Living room detail.",
      className: "h-[350px]",
    },
    {
      src: kitchen,
      title: "Contemporary Kitchen",
      category: "Kitchen",
      alt: "Contemporary kitchen.",
      className: "h-[350px]",
    },
    {
      src: kitchen2,
      title: "Kitchen Island",
      category: "Kitchen",
      alt: "Kitchen island and premium finishes.",
      className: "h-[350px]",
    },
    {
      src: balcony,
      title: "Main Balcony",
      category: "Outdoor",
      alt: "Main balcony overlooking Medellín.",
      className: "h-[350px]",
    },
    {
      src: mainRoom,
      title: "Master Bedroom",
      category: "Master Suite",
      alt: "Master bedroom.",
      className: "h-[350px]",
    },
    {
      src: livingRoom3,
      title: "Home Office",
      category: "Study",
      alt: "Double home office.",
      className: "h-[350px]",
    },
    {
      src: wc3,
      title: "Guest Bathroom",
      category: "Bathrooms",
      alt: "Guest bathroom.",
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
                    group-hover:scale-105
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