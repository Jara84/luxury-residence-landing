import { useTranslation } from "react-i18next";

import {
  Building2,
  Car,
  Landmark,
  Plane,
  Trees,
} from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import LocationItem from "../ui/LocationItem";
import FadeIn from "../ui/FadeIn";

export default function TheLocation() {
  const { t } = useTranslation();

  return (
    <Section id="ubicacion" className="bg-stone-50">
      <FadeIn>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              {t("location.label")}
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              {t("location.title")}
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-stone-600">
              {t("location.description")}
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <LocationItem
                icon={Landmark}
                title={t("location.items.alpujarra")}
                value="8 min"
              />

              <LocationItem
                icon={Car}
                title={t("location.items.provenza")}
                value="10 min"
              />

              <LocationItem
                icon={Building2}
                title={t("location.items.milla")}
                value="10 min"
              />

              <LocationItem
                icon={Trees}
                title={t("location.items.nutibara")}
                value={t("location.walking")}
              />

              <LocationItem
                icon={Plane}
                title={t("location.items.airport")}
                value="30 min"
              />
            </div>

            <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white shadow-sm">
              <iframe
                title={t("location.mapTitle")}
                src="https://www.google.com/maps?q=Cerro%20Nutibara%2C%20Medell%C3%ADn%2C%20Colombia&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full border-0 sm:h-[340px]"
              />

              <div className="p-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {t("location.mapLabel")}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-stone-900">
                  Cerro Nutibara
                </h3>

                <p className="mt-4 leading-7 text-stone-600">
                  {t("location.mapDescription")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}