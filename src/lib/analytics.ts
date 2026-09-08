// Capa fina sobre GA4. Si no hay Measurement ID configurado, no hace nada
// (y en desarrollo deja el evento en consola para poder verificarlo).
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID: string = import.meta.env.VITE_GA_ID ?? "";

let initialized = false;

export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === "undefined") return;
  initialized = true;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (import.meta.env.DEV) {
    console.info("[analytics]", event, params);
  }
  window.gtag?.("event", event, params);
}

/** Eventos de conversión de la landing. */
export const trackWhatsapp = (location: string) =>
  track("contact_whatsapp", { method: "whatsapp", location });

export const trackCall = (location: string) =>
  track("contact_call", { method: "phone", location });

export const trackBrochure = () => track("download_brochure", { method: "pdf" });

export const trackGallery = (image: string) =>
  track("view_gallery_image", { image });
