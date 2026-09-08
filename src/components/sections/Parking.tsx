import { useTranslation } from "react-i18next";
import { BatteryCharging, Car, Gauge, DoorOpen } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import Picture from "../ui/Picture";
import FeatureItem from "../ui/FeatureItem";

export default function Parking() {
  const { t } = useTranslation();

  return (
    <Section id="parqueadero" className="bg-stone-900 text-white">
      <FadeIn>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
                {t("parking.label")}
              </p>

              <h2 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                {t("parking.title")}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300">
                {t("parking.description")}
              </p>

              <div className="mt-10 space-y-4">
                <FeatureItem icon={BatteryCharging} title={t("parking.items.ev")} tone="dark" />
                <FeatureItem icon={Car} title={t("parking.items.private")} tone="dark" />
                <FeatureItem icon={Gauge} title={t("parking.items.meter")} tone="dark" />
                <FeatureItem icon={DoorOpen} title={t("parking.items.visitors")} tone="dark" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <figure className="h-[300px] overflow-hidden rounded-2xl bg-stone-800 sm:h-[420px]">
                <Picture
                  name="parking"
                  alt={t("parking.images.parking.title")}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </figure>

              <figure className="h-[300px] overflow-hidden rounded-2xl bg-stone-800 sm:h-[420px]">
                <Picture
                  name="ev-charger"
                  alt={t("parking.images.evCharger.title")}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}
