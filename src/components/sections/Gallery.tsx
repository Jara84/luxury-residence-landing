import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";

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

  const images = [
    { src: heroImage, alt: "Residencia El Cerro" },
    { src: livingRoom, alt: "Sala principal" },
    { src: livingRoom2, alt: "Sala detalle" },
    { src: kitchen, alt: "Cocina principal" },
    { src: kitchen2, alt: "Cocina detalle" },
    { src: balcony, alt: "Balcón" },
    { src: mainRoom, alt: "Habitación principal" },
    { src: livingRoom3, alt: "Sala adicional" },
    { src: wc3, alt: "Baño social" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            {t("gallery.label")}
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            {t("gallery.title")}
          </h2>
        </div>

        <div className="overflow-hidden rounded-[32px]">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="
              h-[650px]
              w-full
              object-cover
              transition-all
              duration-500
            "
          />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-5">
          {images.map((image) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image)}
              className={`
                overflow-hidden
                rounded-2xl
                transition-all
                duration-300
                ${
                  selectedImage.src === image.src
                    ? "ring-2 ring-stone-900"
                    : "opacity-70 hover:opacity-100"
                }
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-28 w-full object-cover"
              />
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
}