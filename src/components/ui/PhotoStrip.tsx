import Picture from "./Picture";

export type StripItem = {
  name: string;
  category: string;
  title: string;
};

/** Fila de fotos con pie, usada por las secciones de vistas, parqueadero y edificio. */
export default function PhotoStrip({
  items,
  className = "",
}: {
  items: StripItem[];
  className?: string;
}) {
  return (
    <div className={`grid gap-4 sm:gap-6 md:grid-cols-3 ${className}`}>
      {items.map((item) => (
        <figure
          key={item.name}
          className="relative h-[260px] overflow-hidden rounded-2xl bg-stone-200 md:h-[340px]"
        >
          <Picture
            name={item.name}
            alt={item.title}
            sizes="(min-width: 1280px) 395px, (min-width: 768px) 33vw, 100vw"
            className="h-full w-full object-cover"
          />

          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/75">
              {item.category}
            </p>
            <p className="mt-1 text-base font-medium text-white sm:text-lg">
              {item.title}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
