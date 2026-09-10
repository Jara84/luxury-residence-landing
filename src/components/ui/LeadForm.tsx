import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

import { FORM_ENDPOINT } from "../../lib/contact";
import { getSource, trackLead } from "../../lib/analytics";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Alternativa a WhatsApp para quien prefiere el correo: compradores
 * internacionales y buena parte de los mayores de 55 no escriben por chat.
 * Si no hay endpoint configurado el formulario no se monta.
 */
export default function LeadForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  if (!FORM_ENDPOINT) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    Object.entries(getSource()).forEach(([k, v]) => data.append(k, String(v)));
    data.append("_asunto", "Interesado en El Cerro Boutique Residence");

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(String(res.status));

      trackLead("private_viewing");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-stone-700 bg-stone-900/60 px-4 py-3 text-white placeholder:text-stone-500 focus:border-stone-400 focus:outline-none";

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-stone-700 bg-stone-800/60 p-6 text-stone-200">
        {t("form.success")}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <p className="text-sm text-stone-400">{t("form.description")}</p>

      <label className="sr-only" htmlFor="lead-name">
        {t("form.name")}
      </label>
      <input
        id="lead-name"
        name="nombre"
        required
        autoComplete="name"
        placeholder={t("form.name")}
        className={field}
      />

      <label className="sr-only" htmlFor="lead-email">
        {t("form.email")}
      </label>
      <input
        id="lead-email"
        name="correo"
        type="email"
        required
        autoComplete="email"
        placeholder={t("form.email")}
        className={field}
      />

      <label className="sr-only" htmlFor="lead-message">
        {t("form.message")}
      </label>
      <textarea
        id="lead-message"
        name="mensaje"
        rows={3}
        placeholder={t("form.messagePlaceholder")}
        className={field}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-3 rounded-2xl border border-stone-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? t("form.sending") : t("form.submit")}
      </button>

      {status === "error" && (
        <p className="text-sm text-amber-300" role="alert">
          {t("form.error")}
        </p>
      )}
    </form>
  );
}
