import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import PhotoStrip from "../ui/PhotoStrip";

export default function Building() {
  const { t } = useTranslation();

  const items = [
    { name: "facade",         category: t("building.images.facade.category"),        title: t("building.images.facade.title") },
    { name: "facade-entry",   category: t("building.images.facadeEntry.category"),   title: t("building.images.facadeEntry.title") },
    { name: "common-terrace", category: t("building.images.commonTerrace.category"), title: t("building.images.commonTerrace.title") },
  ];

  return (
    <Section id="edificio">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("building.label")}
            </p>

            <h2 className="mt-6 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
              {t("building.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              {t("building.description")}
            </p>
          </div>

          <PhotoStrip items={items} className="mt-16" />
        </Container>
      </FadeIn>
    </Section>
  );
}
