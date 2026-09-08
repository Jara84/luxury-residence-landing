import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  /** "light" sobre fondo claro (por defecto), "dark" sobre fondo oscuro */
  tone?: "light" | "dark";
};

export default function FeatureItem({
  icon: Icon,
  title,
  tone = "light",
}: FeatureItemProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 ease-out hover:translate-x-1 ${
        isDark ? "hover:bg-white/5" : "hover:bg-stone-50"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
          isDark
            ? "bg-white/10 group-hover:bg-white"
            : "bg-stone-100 group-hover:bg-stone-900"
        }`}
      >
        <Icon
          className={`h-5 w-5 transition-colors duration-300 ${
            isDark
              ? "text-stone-200 group-hover:text-stone-900"
              : "text-stone-700 group-hover:text-white"
          }`}
        />
      </div>

      <span className={`text-lg ${isDark ? "text-stone-200" : "text-stone-800"}`}>
        {title}
      </span>
    </div>
  );
}
