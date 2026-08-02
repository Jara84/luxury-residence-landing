import type { LucideIcon } from "lucide-react";

type PremiumStatCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
  description?: string;
};

export default function PremiumStatCard({
  icon: Icon,
  value,
  title,
  description,
}: PremiumStatCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        rounded-[32px]
        border
        border-stone-200/70
        bg-white
        p-10
        min-h-[360px]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-stone-100
          transition-all
          duration-300
          group-hover:bg-stone-900
        "
      >
        <Icon
          className="
            h-9
            w-9
            text-stone-700
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <h3 className="mt-10 text-4xl font-semibold tracking-tight text-stone-900">
        {value}
      </h3>

      <p className="mt-4 text-xl font-medium text-stone-800">
        {title}
      </p>

      {description && (
        <>
          <div className="my-8 h-px bg-stone-200" />

          <p className="text-base leading-8 text-stone-500">
            {description}
          </p>
        </>
      )}
    </article>
  );
}