import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  name: string;
  alt: string;
  title: string;
  category: string;
};

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[currentIndex];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") return onClose();
      if (event.key === "ArrowLeft") return onPrevious();
      if (event.key === "ArrowRight") return onNext();

      // Foco atrapado dentro del diálogo
      if (event.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose, onPrevious, onNext]);

  const navButton =
    "flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      ref={dialogRef}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-sm animate-fade-in"
    >
      {/* Cerrar: siempre visible, fuera del contenedor de la imagen */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Cerrar"
        className={`absolute right-4 top-4 z-10 sm:right-8 sm:top-8 ${navButton}`}
      >
        <X size={26} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full w-full flex-col items-center px-4"
      >
        <picture>
          <source
            type="image/webp"
            sizes="92vw"
            srcSet={`/img/${image.name}-800.webp 800w, /img/${image.name}-1600.webp 1600w`}
          />
          <img
            src={`/img/${image.name}-1600.jpg`}
            alt={image.alt}
            className="max-h-[68vh] max-w-full rounded-2xl object-contain shadow-2xl sm:max-h-[76vh]"
          />
        </picture>

        {/* Pie: categoría, título, contador y flechas */}
        <div className="mt-5 flex w-full max-w-3xl items-center justify-between gap-4">
          <button onClick={onPrevious} aria-label="Anterior" className={navButton}>
            <ChevronLeft size={28} />
          </button>

          <div className="min-w-0 flex-1 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
              {image.category}
            </p>
            <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-white sm:text-xl">
              {image.title}
            </h3>
            <p className="mt-2 text-xs tracking-widest text-white/50">
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <button onClick={onNext} aria-label="Siguiente" className={navButton}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
