// Datos de contacto centralizados: cambiarlos aquí los cambia en toda la página.
import { getSourceLabel } from "./analytics";

export const PHONE_E164 = "+573002276016";
export const PHONE_DISPLAY = "+57 300 227 6016";
export const WHATSAPP_NUMBER = "573002276016";

export const SITE_URL = "https://elcerroresidence.com";

/** Endpoint del formulario (Formspree o similar). Vacío = sin formulario. */
export const FORM_ENDPOINT: string = import.meta.env.VITE_FORM_ENDPOINT ?? "";

export const BROCHURE_URL = "/brochure-el-cerro-boutique-residence.pdf";

const WA_TEXT_ES =
  "Hola, vi El Cerro Boutique Residence en elcerroresidence.com y me gustaría agendar una visita privada.";
const WA_TEXT_EN =
  "Hi, I saw El Cerro Boutique Residence on elcerroresidence.com and I'd like to book a private viewing.";

export function whatsappUrl(lang: string) {
  const base = lang.startsWith("en") ? WA_TEXT_EN : WA_TEXT_ES;

  // El origen viaja dentro del mensaje: es la única forma de saber qué portal
  // trajo la conversación, porque WhatsApp no conserva los UTM del enlace.
  const label = getSourceLabel();
  const text = label ? `${base} [ref: ${label}]` : base;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const phoneUrl = `tel:${PHONE_E164}`;
