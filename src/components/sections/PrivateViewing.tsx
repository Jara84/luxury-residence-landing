import { useTranslation } from "react-i18next";
import { Clock3, Download, MessageCircle } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";

export default function PrivateViewing() {
  const { t } = useTranslation();

  return (
    <Section className="bg-stone-900 text-white">
      <FadeIn>
         <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Contenido */}
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
                {t("privateViewing.label")}
              </p>

              <h2 className="mt-6 text-4xl font-medium leading-tight md:text-5xl">
                {t("privateViewing.title")}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300">
                {t("privateViewing.description")}
              </p>

              <div className="mt-10 flex items-center gap-3 text-stone-400">
                <Clock3 size={20} />

                <span>{t("privateViewing.responseTime")}</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col gap-5">
              <a
                href="https://wa.me/573002276016"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8
                  py-5
                  font-semibold
                  text-stone-900
                  no-underline
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-stone-100
                  hover:shadow-xl
                "
              >
                <MessageCircle className="h-5 w-5 text-stone-900" />
                <span className="text-stone-900">
                  {t("privateViewing.schedule")}
                </span>
              </a>

              <button
                disabled
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-stone-700
                  px-8
                  py-5
                  text-lg
                  text-stone-500
                  cursor-not-allowed
                "
              >
                <Download size={22} />

                {t("privateViewing.brochure")}
              </button>
            </div>
          </div>
        </Container>
      </FadeIn>  
    </Section>
  );
}