import { useTranslation } from "react-i18next";

import {
  Building2,
  Trees,
  Bath,
  Zap,
  Sparkles,
  Snowflake,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SignatureCard from "../ui/SignatureCard";
import FadeIn from "../ui/FadeIn";

export default function SignatureFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Building2,
      title: t("signature.architecture.title"),
      description: t("signature.architecture.description"),
    },
    {
      icon: Trees,
      title: t("signature.balconies.title"),
      description: t("signature.balconies.description"),
    },
    {
      icon: Bath,
      title: t("signature.masterSuite.title"),
      description: t("signature.masterSuite.description"),
    },
    {
      icon: Zap,
      title: t("signature.smartLiving.title"),
      description: t("signature.smartLiving.description"),
    },
    {
      icon: Snowflake,
      title: t("signature.climate.title"),
      description: t("signature.climate.description"),
    },
    {
      icon: Sparkles,
      title: t("signature.renovation.title"),
      description: t("signature.renovation.description"),
    },
  ];

  return (
    <Section>
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("signature.label")}
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              {t("signature.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              {t("signature.description")}
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <SignatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}