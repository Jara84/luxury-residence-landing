import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: {
    src: string;
    alt: string;
    title: string;
    category: string;
  }[];
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
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-stone-950/95
        backdrop-blur-sm
        animate-fade-in
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        {/* Imagen */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="
            max-h-[94vh]
            max-w-[92vw]
            rounded-3xl
            object-contain
            shadow-2xl
          "
        />
        <div
        className="
            absolute
            inset-x-0
            bottom-0
            h-56
            rounded-b-3xl
            bg-gradient-to-t
            from-black/70
            via-black/30
            to-transparent
            pointer-events-none
        "
        />
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="
            absolute
            top-8
            right-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/20
          "
        >
          <X size={32} />
        </button>

        {/* Flecha izquierda */}
        <button
          onClick={onPrevious}
          className="
            absolute
            left-[-72px]
            xl:left-[-88px]
            top-1/2
            -translate-y-1/2
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/20
          "
        >
          <ChevronLeft size={34} />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={onNext}
          className="
            absolute
            right-[-72px]
            xl:right-[-88px]
            top-1/2
            -translate-y-1/2
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            text-white
            transition-all
            duration-300
            hover:scale-110
            hover:bg-white/20
          "
        >
          <ChevronRight size={34} />
        </button>

        {/* Categoría y título */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            {images[currentIndex].category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {images[currentIndex].title}
          </h3>
        </div>

        {/* Contador */}
        <div
          className="
            absolute
            bottom-6
            left-1/2
            -translate-x-1/2
            rounded-full
            border
            border-white/20
            bg-white/10
            px-5
            py-2
            backdrop-blur-md
            text-sm
            tracking-widest
            text-white
          "
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}