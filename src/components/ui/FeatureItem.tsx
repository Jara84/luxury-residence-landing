import type { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
};

export default function FeatureItem({
  icon: Icon,
  title,
}: FeatureItemProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-4
        rounded-xl
        p-3
        transition-all
        duration-300
        ease-out
        hover:bg-stone-50
        hover:translate-x-1
      "
    >
    <div
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-stone-100
        transition-colors
        duration-300
        group-hover:bg-stone-900
      "
    >
      <Icon
        className="
          h-5
          w-5
          text-stone-700
          transition-colors
          duration-300
          group-hover:text-white
        "
      />
      </div>

      <span className="text-lg text-stone-800">
        {title}
      </span>
    </div>
  );
}