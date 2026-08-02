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
    {
      src: heroImage,
      alt: "Residencia El Cerro",
      className: "md:col-span-2 h-[600px]",
    },
    {
      src: livingRoom,
      alt: "Sala principal",
      className: "h-[350px]",
    },
    {
      src: livingRoom2,
      alt: "Sala detalle",
      className: "h-[350px]",
    },
    {
      src: kitchen,
      alt: "Cocina principal",
      className: "h-[350px]",
    },
    {
      src: kitchen2,
      alt: "Cocina detalle",
      className: "h-[350px]",
    },
    {
      src: balcony,
      alt: "Balcón con vista a Medellín",
      className: "h-[350px]",
    },
    {
      src: mainRoom,
      alt: "Habitación principal",
      className: "h-[350px]",
    },
    {
      src: livingRoom3,
      alt: "Sala principal vista adicional",
      className: "h-[350px]",
    },
        {
      src: wc3,
      alt: "Baño social",
      className: "h-[350px]",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            {t("gallery.label")}
          </p>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            {t("gallery.title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`
                ${image.className}
                w-full
                rounded-2xl
                object-cover
                cursor-pointer
                transition
                duration-500
                hover:scale-[1.02]
              `}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}