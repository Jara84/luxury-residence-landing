import { useTranslation } from "react-i18next";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import Container from "../ui/Container";
import { PHONE_DISPLAY, phoneUrl, whatsappUrl } from "../../lib/contact";
import { trackCall, trackWhatsapp } from "../../lib/analytics";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="border-t border-stone-200 bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl">
              El Cerro Boutique Residence
            </h3>

            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <MapPin className="h-4 w-4" />
              <span>Cerro Nutibara · Medellín · Colombia</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-stone-600">
            <a
              href={whatsappUrl(i18n.language)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsapp("footer")}
              className="flex items-center gap-3 transition hover:text-stone-900"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{t("footer.contactWhatsapp")}</span>
            </a>

            <a
              href={phoneUrl}
              onClick={() => trackCall("footer")}
              className="flex items-center gap-3 transition hover:text-stone-900"
            >
              <Phone className="h-5 w-5" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8 text-sm text-stone-400">
          © {new Date().getFullYear()} · El Cerro Boutique Residence ·{" "}
          {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
