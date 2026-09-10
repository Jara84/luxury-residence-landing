import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

/** Claves de la ficha, en el orden en que se muestran. */
const KEYS = [
  "price",
  "area",
  "rooms",
  "baths",
  "balconies",
  "floor",
  "elevator",
  "stratum",
  "admin",
  "year",
  "parking",
  "includes",
] as const;

/** Las que merecen destacarse visualmente sobre el resto. */
const HIGHLIGHT = new Set<string>(["price", "area"]);

export default function Specs() {
  const { t } = useTranslation();

  return (
    <Section id="ficha" className="bg-white">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("specs.label")}
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              {t("specs.title")}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600">
              {t("specs.description")}
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {KEYS.map((key) => {
              const strong = HIGHLIGHT.has(key);

              return (
                <div key={key} className="flex flex-col gap-2 bg-white p-6">
                  <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">
                    {t(`specs.items.${key}.label`)}
                  </dt>

                  <dd
                    className={
                      strong
                        ? "text-2xl font-medium leading-snug text-stone-900"
                        : "text-base leading-snug text-stone-700"
                    }
                  >
                    {t(`specs.items.${key}.value`)}
                  </dd>
                </div>
              );
            })}
          </dl>

          <p className="mx-auto mt-6 max-w-5xl text-sm leading-relaxed text-stone-500">
            {t("specs.note")}
          </p>
        </Container>
      </FadeIn>
    </Section>
  );
}
