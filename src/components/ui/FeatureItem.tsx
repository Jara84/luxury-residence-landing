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
        flex
        items-center
        gap-4
        rounded-xl
        p-3
        transition-colors
        duration-300
        hover:bg-stone-50
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
        "
      >
        <Icon className="h-5 w-5 text-stone-700" />
      </div>

      <span className="text-lg text-stone-800">
        {title}
      </span>
    </div>
  );
}