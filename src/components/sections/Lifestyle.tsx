import { useTranslation } from "react-i18next";

import {
  ChefHat,
  CookingPot,
  MapPinned,
  Refrigerator,
  Sparkles,
  Sun,
  Trees,
  WashingMachine,
  Snowflake,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FeatureItem from "../ui/FeatureItem";

export default function Lifestyle() {
  const { t } = useTranslation();

  return (
    <Section className="bg-stone-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            {t("lifestyle.label")}
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            {t("lifestyle.title")}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-stone-600">
            {t("lifestyle.description")}
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Interior */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <h3 className="mb-8 text-2xl font-semibold text-stone-900">
              {t("lifestyle.interiorTitle")}
            </h3>

            <div className="space-y-4">
              <FeatureItem
                icon={CookingPot}
                title={t("lifestyle.interior.dishwasher")}
              />

              <FeatureItem
                icon={ChefHat}
                title={t("lifestyle.interior.kitchen")}
              />

              <FeatureItem
                icon={Refrigerator}
                title={t("lifestyle.interior.pantry")}
              />

              <FeatureItem
                icon={WashingMachine}
                title={t("lifestyle.interior.laundry")}
              />

              <FeatureItem
                icon={Snowflake}
                title={t("lifestyle.interior.airConditioning")}
              />
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-[32px] bg-white p-10 shadow-sm">
            <h3 className="mb-8 text-2xl font-semibold text-stone-900">
              {t("lifestyle.lifestyleTitle")}
            </h3>

            <div className="space-y-4">
              <FeatureItem
                icon={MapPinned}
                title={t("lifestyle.features.location")}
              />

              <FeatureItem
                icon={Sun}
                title={t("lifestyle.features.light")}
              />

              <FeatureItem
                icon={Trees}
                title={t("lifestyle.features.neighborhood")}
              />

              <FeatureItem
                icon={Sparkles}
                title={t("lifestyle.features.premiumFinishes")}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}