import type { LucideIcon } from "lucide-react";

interface LocationItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function LocationItem({
  icon: Icon,
  title,
  value,
}: LocationItemProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-stone-200
        bg-white
        px-6
        py-5
        transition-all
        duration-300
        hover:shadow-lg
      "
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-stone-100 p-3">
          <Icon size={24} className="text-stone-700" />
        </div>

        <span className="text-lg font-medium text-stone-800">
          {title}
        </span>
      </div>

      <span className="text-stone-500 font-medium">
        {value}
      </span>
    </div>
  );
}