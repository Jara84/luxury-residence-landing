import { useTranslation } from "react-i18next";
import { Clock3, Download, MessageCircle, Phone, Tag } from "lucide-react";

import Container from "../ui/Container";
import Section from "../ui/Section";
import FadeIn from "../ui/FadeIn";
import { PHONE_DISPLAY, phoneUrl, whatsappUrl } from "../../lib/contact";
import { trackBrochure, trackCall, trackWhatsapp } from "../../lib/analytics";

export default function PrivateViewing() {
  const { t, i18n } = useTranslation();

  return (
    <Section id="private-viewing" className="bg-stone-900 text-white">
      <FadeIn>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-stone-400">
                {t("privateViewing.label")}
              </p>

              <h2 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
                {t("privateViewing.title")}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300">
                {t("privateViewing.description")}
              </p>

              {/* Precio */}
              <div className="mt-10 rounded-2xl border border-stone-700 bg-stone-800/60 p-6">
                <div className="flex items-center gap-3">
                  <Tag size={18} className="text-stone-400" />
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                    {t("privateViewing.priceLabel")}
                  </p>
                </div>

                <p className="mt-3 text-2xl font-medium sm:text-3xl">
                  {t("privateViewing.priceValue")}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {t("privateViewing.priceNote")}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 text-stone-400">
                <Clock3 size={20} />
                <span>{t("privateViewing.responseTime")}</span>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col gap-4">
              <a
                href={whatsappUrl(i18n.language)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsapp("private_viewing")}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 font-semibold text-stone-900 no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-stone-100 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5 text-stone-900" />
                <span className="text-stone-900">{t("privateViewing.schedule")}</span>
              </a>

              <a
                href={phoneUrl}
                onClick={() => trackCall("private_viewing")}
                className="inline-flex flex-col items-center justify-center gap-1 rounded-2xl border border-stone-600 px-8 py-4 text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:bg-white/5"
              >
                <span className="inline-flex items-center gap-3 text-lg font-medium">
                  <Phone size={20} />
                  {t("privateViewing.call")}
                </span>
                <span className="text-sm tracking-wide text-stone-400">
                  {PHONE_DISPLAY}
                </span>
              </a>

              <a
                href="/brochure-el-cerro-boutique-residence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackBrochure}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-stone-700 px-8 py-4 text-stone-300 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-stone-500 hover:text-white"
              >
                <Download size={20} />
                {t("privateViewing.brochure")}
              </a>
            </div>
          </div>
        </Container>
      </FadeIn>
    </Section>
  );
}
