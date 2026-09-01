import { useTranslation } from "react-i18next";
import FadeIn from "../ui/FadeIn";
import { Ruler, BedDouble, MoveUp } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import PremiumStatCard from "../ui/PremiumStatCard";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <Section id="residencia">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("introduction.label")}
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              {t("introduction.title")}
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
              {t("introduction.description")}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <PremiumStatCard
              icon={Ruler}
              value={t("introduction.cards.area.value")}
              title={t("introduction.cards.area.title")}
              description={t("introduction.cards.area.description")}
            />

            <PremiumStatCard
              icon={BedDouble}
              value={t("introduction.cards.rooms.value")}
              title={t("introduction.cards.rooms.title")}
              description={t("introduction.cards.rooms.description")}
            />

            <PremiumStatCard
              icon={MoveUp}
              value={t("introduction.cards.ceiling.value")}
              title={t("introduction.cards.ceiling.title")}
              description={t("introduction.cards.ceiling.description")}
            />
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}