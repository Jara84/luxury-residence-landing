// Capa fina sobre GA4 y el píxel de Meta. Si falta el ID de alguno de los dos,
// esa parte no se carga y la página funciona igual (en desarrollo el evento
// queda en consola para poder verificarlo).
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean };
    _fbq?: unknown;
  }
}

export const GA_ID: string = import.meta.env.VITE_GA_ID ?? "";
export const META_PIXEL_ID: string = import.meta.env.VITE_META_PIXEL_ID ?? "";

/* ------------------------------------------------------------------ */
/* Origen de la visita                                                 */
/* ------------------------------------------------------------------ */

/**
 * De dónde llegó el visitante. Se lee del enlace la primera vez y se guarda
 * durante la sesión, para que un lead que llegó por Fincaraíz siga contando
 * como Fincaraíz aunque escriba por WhatsApp media hora después.
 */
export type Source = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

const SOURCE_KEY = "elcerro.source";

let cachedSource: Source | null = null;

function readStoredSource(): Source {
  try {
    const raw = sessionStorage.getItem(SOURCE_KEY);
    return raw ? (JSON.parse(raw) as Source) : {};
  } catch {
    return {};
  }
}

function captureSource(): Source {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Source = {};

  const src = params.get("utm_source");
  const med = params.get("utm_medium");
  const camp = params.get("utm_campaign");

  if (src) fromUrl.utm_source = src;
  if (med) fromUrl.utm_medium = med;
  if (camp) fromUrl.utm_campaign = camp;

  // Los UTM del enlace mandan; si no hay, se conserva lo de la sesión.
  const merged: Source = { ...readStoredSource(), ...fromUrl };

  if (Object.keys(merged).length > 0) {
    try {
      sessionStorage.setItem(SOURCE_KEY, JSON.stringify(merged));
    } catch {
      /* navegación privada: seguimos sin persistir */
    }
  }

  cachedSource = merged;
  return merged;
}

export function getSource(): Source {
  if (cachedSource) return cachedSource;
  cachedSource = typeof window === "undefined" ? {} : captureSource();
  return cachedSource;
}

/** Etiqueta corta y legible del origen, para el mensaje de WhatsApp. */
export function getSourceLabel(): string {
  const { utm_source, utm_campaign } = getSource();
  if (!utm_source) return "";
  return utm_campaign ? `${utm_source}/${utm_campaign}` : utm_source;
}

/* ------------------------------------------------------------------ */
/* Carga de los scripts                                                */
/* ------------------------------------------------------------------ */

let initialized = false;

function initGA() {
  if (!GA_ID) return;

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

function initMetaPixel() {
  if (!META_PIXEL_ID || window.fbq) return;

  const fbq: Window["fbq"] = function (...args: unknown[]) {
    // El stub encola hasta que el script real toma el control.
    fbq!.queue!.push(args);
  } as NonNullable<Window["fbq"]>;

  fbq.queue = [];
  fbq.loaded = true;

  window.fbq = fbq;
  window._fbq = fbq;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  captureSource();
  initGA();
  initMetaPixel();
}

/* ------------------------------------------------------------------ */
/* Eventos                                                             */
/* ------------------------------------------------------------------ */

function send(event: string, params: Record<string, unknown> = {}) {
  const payload = { ...getSource(), ...params };

  if (import.meta.env.DEV) {
    console.info("[analytics]", event, payload);
  }

  window.gtag?.("event", event, payload);
  return payload;
}

/** Eventos de conversión de la landing. */
export const trackWhatsapp = (location: string) => {
  const payload = send("contact_whatsapp", { method: "whatsapp", location });
  window.fbq?.("track", "Contact", payload);
};

export const trackCall = (location: string) => {
  const payload = send("contact_call", { method: "phone", location });
  window.fbq?.("track", "Contact", payload);
};

export const trackLead = (location: string) => {
  const payload = send("generate_lead", { method: "form", location });
  window.fbq?.("track", "Lead", payload);
};

export const trackBrochure = () => {
  const payload = send("download_brochure", { method: "pdf" });
  window.fbq?.("trackCustom", "DownloadBrochure", payload);
};

export const trackGallery = (image: string) => send("view_gallery_image", { image });
