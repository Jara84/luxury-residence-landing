import { useRef, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

import { BROCHURE_URL, FORM_ENDPOINT } from "../../lib/contact";
import { getSource, trackBrochure, trackLead } from "../../lib/analytics";

/**
 * Descarga del brochure. Si hay endpoint de formulario, pide nombre y correo
 * antes de entregarlo: convierte a un curioso frío en un contacto al que sí
 * se le puede hacer seguimiento. Sin endpoint, descarga directa.
 */
export default function BrochureButton({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [sending, setSending] = useState(false);

  const gated = Boolean(FORM_ENDPOINT);

  function open(e: React.MouseEvent) {
    if (!gated) return; // deja pasar el enlace normal
    e.preventDefault();
    dialogRef.current?.showModal();
  }

  function download() {
    trackBrochure();
    window.open(BROCHURE_URL, "_blank", "noopener,noreferrer");
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    Object.entries(getSource()).forEach(([k, v]) => data.append(k, String(v)));
    data.append("_asunto", "Descarga del brochure - El Cerro Boutique Residence");

    setSending(true);

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      trackLead("brochure");
    } catch {
      // Si el envío falla igual entregamos el PDF: el visitante no tiene la culpa.
    } finally {
      setSending(false);
      dialogRef.current?.close();
      download();
    }
  }

  const field =
    "w-full rounded-xl border border-stone-300 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-stone-600 focus:outline-none";

  return (
    <>
      <a
        href={BROCHURE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={gated ? open : trackBrochure}
        className={className}
      >
        <Download size={20} />
        {t("privateViewing.brochure")}
      </a>

      {gated && (
        <dialog
          ref={dialogRef}
          className="m-auto w-[min(28rem,90vw)] rounded-2xl border border-stone-200 p-0 backdrop:bg-stone-900/60"
        >
          <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white p-8">
            <h3 className="text-2xl font-medium text-stone-900">
              {t("brochureGate.title")}
            </h3>

            <p className="text-sm leading-relaxed text-stone-600">
              {t("brochureGate.description")}
            </p>

            <label className="sr-only" htmlFor="bro-name">
              {t("form.name")}
            </label>
            <input
              id="bro-name"
              name="nombre"
              required
              autoComplete="name"
              placeholder={t("form.name")}
              className={field}
            />

            <label className="sr-only" htmlFor="bro-email">
              {t("form.email")}
            </label>
            <input
              id="bro-email"
              name="correo"
              type="email"
              required
              autoComplete="email"
              placeholder={t("form.email")}
              className={field}
            />

            <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-xl px-5 py-3 text-stone-600 transition hover:bg-stone-100"
              >
                {t("brochureGate.cancel")}
              </button>

              <button
                type="submit"
                disabled={sending}
                className="rounded-xl bg-stone-900 px-6 py-3 font-medium text-white transition hover:bg-stone-800 disabled:opacity-60"
              >
                {sending ? t("form.sending") : t("brochureGate.submit")}
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
}
