import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            {t("introduction.label")}
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            {t("introduction.title")}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            {t("introduction.description")}
          </p>

        </div>


        <div className="mt-16 grid gap-8 text-center md:grid-cols-3">

          <div>
            <p className="text-4xl font-semibold text-stone-900">
              144 m²
            </p>
            <p className="mt-2 text-stone-500">
              {t("introduction.stats.area")}
            </p>
          </div>


          <div>
            <p className="text-4xl font-semibold text-stone-900">
              3
            </p>
            <p className="mt-2 text-stone-500">
              {t("introduction.stats.rooms")}
            </p>
          </div>


          <div>
            <p className="text-4xl font-semibold text-stone-900">
              Medellín
            </p>
            <p className="mt-2 text-stone-500">
              {t("introduction.stats.location")}
            </p>
          </div>

        </div>

      </Container>
    </Section>
  );
}