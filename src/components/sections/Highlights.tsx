import { useTranslation } from "react-i18next";
import { Ruler, BedDouble, PanelsTopLeft, MoveUp } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

export default function Highlights() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Ruler,
      title: t("highlights.area.title"),
      description: t("highlights.area.description"),
    },
    {
      icon: BedDouble,
      title: t("highlights.rooms.title"),
      description: t("highlights.rooms.description"),
    },
    {
      icon: PanelsTopLeft,
      title: t("highlights.balconies.title"),
      description: t("highlights.balconies.description"),
    },
    {
      icon: MoveUp,
      title: t("highlights.ceiling.title"),
      description: t("highlights.ceiling.description"),
    },
  ];

  return (
    <Section className="bg-stone-900 text-white">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
              {t("highlights.label")}
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight md:text-5xl">
              {t("highlights.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-300">
              {t("highlights.description")}
            </p>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-stone-700 bg-stone-700 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-stone-900 p-8 transition-colors duration-300 hover:bg-stone-800"
                >
                  <Icon
                    className="h-6 w-6 text-stone-400"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-10 text-3xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}