import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import PhotoStrip from "../ui/PhotoStrip";

export default function Views() {
  const { t } = useTranslation();

  const items = [
    { name: "balcony",     category: t("views.images.balcony.category"),    title: t("views.images.balcony.title") },
    { name: "view-city",   category: t("views.images.viewCity.category"),   title: t("views.images.viewCity.title") },
    { name: "view-street", category: t("views.images.viewStreet.category"), title: t("views.images.viewStreet.title") },
  ];

  return (
    <Section id="vistas" className="bg-stone-50">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("views.label")}
            </p>

            <h2 className="mt-6 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              {t("views.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              {t("views.description")}
            </p>
          </div>

          <PhotoStrip items={items} className="mt-16" />
        </Container>
      </FadeIn>
    </Section>
  );
}
