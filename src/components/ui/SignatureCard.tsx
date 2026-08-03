import type { LucideIcon } from "lucide-react";

interface SignatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SignatureCard({
  icon: Icon,
  title,
  description,
}: SignatureCardProps) {
  return (
    <div
      className="
        group
        rounded-[28px]
        border
        border-stone-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-stone-100
          transition-colors
          duration-300
          group-hover:bg-stone-900
        "
      >
        <Icon
          size={34}
          className="
            text-stone-700
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <h3 className="text-2xl font-semibold text-stone-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-stone-600">
        {description}
      </p>
    </div>
  );
}